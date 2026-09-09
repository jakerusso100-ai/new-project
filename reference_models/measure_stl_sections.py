import sys, json, math, warnings
warnings.filterwarnings('ignore')
import numpy as np, trimesh
from shapely.geometry import Polygon, Point, LineString

m = trimesh.load(sys.argv[1], force='mesh')
cx, cy = -0.201, -0.783


def polys_at(z):
    s = m.section(plane_origin=[0, 0, z], plane_normal=[0, 0, 1])
    if s is None: return []
    p2, T = s.to_2D(); res = []
    for poly in p2.polygons_full:
        ext = np.array(poly.exterior.coords)
        pts = np.c_[ext, np.zeros(len(ext)), np.ones(len(ext))] @ T.T
        res.append(Polygon(pts[:, :2] - [cx, cy]))
    return res


def rth(poly):
    pts = np.array(poly.exterior.coords); return np.hypot(pts[:, 0], pts[:, 1]), (np.degrees(np.arctan2(pts[:, 1], pts[:, 0])) + 360) % 360


out = {}
# equator: max r_p5 of the central polygon over z
best = (0, 0)
for z in np.arange(74.5, 86, 0.25):
    ps = polys_at(z)
    if not ps: continue
    c = min(ps, key=lambda q: q.centroid.distance(Point(0, 0)))
    r, th = rth(c); v = float(np.percentile(r, 5))
    if v > best[0]: best = (v, float(z))
R, zeq = best; out['R_equator'] = round(R, 3); out['z_equator'] = zeq
out['z_apex'] = round(float(m.bounds[1][2]), 3); out['cap_height_over_R'] = round((m.bounds[1][2] - zeq) / R, 3)
# central body profile (r of central polygon vs z) in R units, from apex down to keel
prof = []
for z in np.arange(m.bounds[1][2] - 0.2, 60, -0.5):
    ps = polys_at(z)
    if not ps: continue
    c = min(ps, key=lambda q: q.centroid.distance(Point(0, 0)))
    r, th = rth(c)
    prof.append([round((z - zeq) / R, 3), round(float(np.percentile(r, 5)) / R, 3), round(float(np.sqrt(c.area / math.pi)) / R, 3), len(ps)])
out['central_profile_[dz/R, r_p5/R, r_equiv/R, npolys]'] = prof
# pods
pods = []
for p in polys_at(84.5):
    if p.centroid.distance(Point(0, 0)) > R * 1.3:
        az = (math.degrees(math.atan2(p.centroid.y, p.centroid.x)) + 360) % 360
        pods.append({'az': round(az, 1), 'D_cap': round(p.centroid.distance(Point(0, 0)), 2)})
merged = max(polys_at(zeq), key=lambda q: q.area)
rm, thm = rth(merged)
for p in pods:
    d = np.abs(((thm - p['az'] + 180) % 360) - 180)
    outer = float(rm[d < 1.5].max()) if (d < 1.5).any() else None
    # inner edge of the pod along the same azimuth: walk the ray; find pod polygon at a z where pods are separate but wide (z 83)
    sep = [q for q in polys_at(83.0) if q.centroid.distance(Point(0, 0)) > R * 1.3]
    q = min(sep, key=lambda q: abs(((math.degrees(math.atan2(q.centroid.y, q.centroid.x)) + 360) % 360) - p['az']))
    rq, _ = rth(q)
    # pod equator radius: fit from outer edge and cap-slice centroid distance
    p['outer_edge'] = round(outer, 2) if outer else None
    p['pod_radius_from_outer'] = round(outer - p['D_cap'], 2) if outer else None
    p['D_over_R'] = round(p['D_cap'] / R, 3); p['pr_over_R'] = round((outer - p['D_cap']) / R, 3) if outer else None
    p['cap_slice_z83_r_equiv'] = round(float(np.sqrt(q.area / math.pi)), 2)
# pod z extents: scan z where the pod region exists
zt = None; zb = None
for z in np.arange(70, 89, 0.25):
    ps = polys_at(z)
    if any(q.centroid.distance(Point(0, 0)) > R * 1.3 or (q.area > 3000) for q in ps):
        far = False
        for q in ps:
            rq, _ = rth(q)
            if rq.max() > R * 1.9: far = True
        if far:
            zb = z if zb is None else zb; zt = z
out['pods'] = pods; out['pod_z_range'] = [zb, zt]; out['pod_z_range_over_R_rel_equator'] = [round((zb - zeq) / R, 3), round((zt - zeq) / R, 3)]
out['pod_apex_z'] = round(float(max(q.bounds[3] for q in [Polygon([(0, 0), (1, 0), (0, 1)])])), 2)
# arms: circle-intersection widths at several radii and heights
arms = []
for z in (75.0, 76.5, 78.4, 80.0, 82.0):
    ps = polys_at(z)
    if not ps: continue
    big = max(ps, key=lambda q: q.area)
    row = {'z': z, 'dz/R': round((z - zeq) / R, 3), 'widths': {}}
    for rr in (1.15, 1.35, 1.55, 1.75):
        circ = Point(0, 0).buffer(R * rr, 256).exterior
        inter = circ.intersection(big)
        segs = [g.length for g in getattr(inter, 'geoms', [inter]) if g.length > 0]
        row['widths'][f'r={rr}R'] = [round(s / R, 3) for s in sorted(segs, reverse=True)[:4]]
    arms.append(row)
out['arm_arc_widths_over_R'] = arms
# keel
keel = []
for z in [74.0, 72.0, 70.0, 66.0, 62.0, 58.0, 54.0, 50.0, 45.0, 40.0, 35.0, 30.0, 25.0, 20.0, 15.0, 10.0, 6.0, 3.0, 1.0]:
    ps = polys_at(z); row = {'z': z, 'depth/R': round((zeq - z) / R, 3), 'polys': []}
    for q in ps:
        r, th = rth(q); az = (math.degrees(math.atan2(q.centroid.y, q.centroid.x)) + 360) % 360
        row['polys'].append({'area/R2': round(q.area / R / R, 4), 'c_r/R': round(q.centroid.distance(Point(0, 0)) / R, 3), 'c_az': round(az), 'rmin/R': round(float(r.min()) / R, 3), 'rmax/R': round(float(r.max()) / R, 3)})
    row['polys'].sort(key=lambda d: -d['area/R2']); keel.append(row)
out['keel'] = keel
print(json.dumps(out, indent=1))
