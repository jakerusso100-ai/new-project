"""Measure the Citadel STL: disc radius, plate, cap, pods, arms, keel. All ratios relative to R (disc radius)."""
import struct, sys, os, json
import numpy as np


def read_stl(path):
    with open(path, 'rb') as f:
        head = f.read(80); data = f.read()
    n = struct.unpack('<I', data[:4])[0]
    if len(data) == 4 + n * 50:
        arr = np.frombuffer(data[4:], dtype=np.dtype([('n', '<f4', 3), ('v', '<f4', (3, 3)), ('a', '<u2')]))
        return arr['v'].astype(np.float64)
    txt = (head + data).decode('ascii', 'ignore'); vals = []
    for line in txt.splitlines():
        s = line.strip().split()
        if s and s[0] == 'vertex':
            vals.append([float(s[1]), float(s[2]), float(s[3])])
    return np.array(vals).reshape(-1, 3, 3)


def profile(X, Y):
    r = np.hypot(X, Y); th = (np.degrees(np.arctan2(Y, X)) + 360) % 360
    rmax = np.zeros(360); np.maximum.at(rmax, np.floor(th).astype(int), r)
    return r, th, rmax


def circle_fit(x, y):
    A = np.c_[2 * x, 2 * y, np.ones_like(x)]; b = x ** 2 + y ** 2
    c, *_ = np.linalg.lstsq(A, b, rcond=None)
    return c[0], c[1], float(np.sqrt(c[2] + c[0] ** 2 + c[1] ** 2))


def measure(path, plate_z=None):
    tris = read_stl(path); V = tris.reshape(-1, 3)
    out = {'file': os.path.basename(path), 'triangles': int(len(tris)), 'bbox_min': V.min(0).round(2).tolist(), 'bbox_max': V.max(0).round(2).tolist()}
    Z = V[:, 2]
    # plate/pod layer = the z band holding most vertices
    hist, edges = np.histogram(Z, bins=40)
    k = int(np.argmax(hist)); zc = (edges[k] + edges[k + 1]) / 2
    layer = np.abs(Z - zc) < (edges[1] - edges[0]) * 4
    # keel = everything well below the layer (or above, if the file is flipped)
    below = Z < zc - (edges[1] - edges[0]) * 4; above = Z > zc + (edges[1] - edges[0]) * 4
    keel = below if below.sum() > above.sum() else above
    out['plate_layer_z'] = round(float(zc), 2); out['keel_side'] = 'below' if below.sum() > above.sum() else 'above'
    cx, cy = (V[keel, 0].mean(), V[keel, 1].mean()) if keel.any() else (V[:, 0].mean(), V[:, 1].mean())
    R = None
    for it in range(3):
        X, Y = V[:, 0] - cx, V[:, 1] - cy
        r, th, rmax = profile(X[layer], Y[layer])
        R = float(np.percentile(rmax, 8))
        rim = layer.copy(); rim[layer] = (r > R * 0.96) & (r < R * 1.03)
        # keep only rim points away from arm roots: angles where rmax ~ R
        okang = rmax < R * 1.08
        rim[layer] &= okang[np.floor(th).astype(int)]
        if rim.sum() > 50:
            dx, dy, Rf = circle_fit(V[rim, 0] - cx, V[rim, 1] - cy); cx += dx; cy += dy; R = Rf
    out['centre'] = [round(cx, 3), round(cy, 3)]; out['R'] = round(R, 3)
    X, Y = V[:, 0] - cx, V[:, 1] - cy; rAll = np.hypot(X, Y); thAll = (np.degrees(np.arctan2(Y, X)) + 360) % 360
    r, th, rmax = profile(X[layer], Y[layer]); Zl = Z[layer]
    # pods
    lobe = rmax > R * 1.12; lobes = []; i = 0
    while i < 360:
        if lobe[i]:
            j = i
            while j < 360 and lobe[j]: j += 1
            lobes.append((i, j)); i = j
        else: i += 1
    if len(lobes) > 1 and lobes[0][0] == 0 and lobes[-1][1] == 360:
        a, b = lobes.pop(); lobes[0] = (a - 360, lobes[0][1])
    pods = []
    for a, b in lobes:
        angs = np.arange(a, b); vals = rmax[angs % 360]; peak = angs[np.argmax(vals)]
        best = None
        for D in np.linspace(R * 1.3, R * 3.2, 100):
            for pr in np.linspace(R * 0.25, R * 0.8, 60):
                dth = np.radians(angs - peak); s = D * np.sin(dth); inside = np.abs(s) < pr
                pred = np.where(inside, D * np.cos(dth) + np.sqrt(np.maximum(pr ** 2 - s ** 2, 0)), R)
                e = np.mean((pred - vals) ** 2)
                if best is None or e < best[0]: best = (e, D, pr)
        e, D, pr = best
        d = np.abs(((th - peak + 180) % 360) - 180)
        core = (d < 8) & (r > D - pr * 0.5) & (r < D + pr * 0.5)
        cen = (d < 3) & (r > D - pr * 0.15) & (r < D + pr * 0.15)
        pods.append({'azimuth_deg': int(peak % 360), 'lobe_span_deg': int(b - a), 'D_over_R': round(D / R, 3), 'pod_radius_over_R': round(pr / R, 3),
                     'pod_rim_z': [round(float(Zl[core].min()), 2), round(float(Zl[core].max()), 2)] if core.any() else None,
                     'pod_cap_top_z': round(float(Zl[cen].max()), 2) if cen.any() else None})
    out['pods'] = pods
    # central plate + cap
    inner = layer & (rAll < R)
    out['plate_and_cap_z'] = [round(float(Z[inner].min()), 2), round(float(Z[inner].max()), 2)]
    prof = []
    for k in range(10):
        m = inner & (rAll >= R * k / 10) & (rAll < R * (k + 1) / 10)
        if m.any(): prof.append([k / 10, round(float(Z[m].max()), 2), round(float(Z[m].min()), 2)])
    out['cap_profile_[r/R, zmax, zmin]'] = prof
    rimpts = layer & (rAll > R * 0.97) & (rAll < R * 1.02)
    out['rim_z'] = [round(float(Z[rimpts].min()), 2), round(float(Z[rimpts].max()), 2)]
    # arms
    arms = []
    for p in pods:
        rm = R * (1 + p['D_over_R'] - p['pod_radius_over_R']) / 2
        m = layer & (rAll > rm * 0.96) & (rAll < rm * 1.04)
        d = ((thAll[m] - p['azimuth_deg'] + 180) % 360) - 180; sel = np.abs(d) < 45
        if sel.any():
            w = np.radians(np.percentile(d[sel], 97) - np.percentile(d[sel], 3)) * rm
            arms.append({'azimuth_deg': p['azimuth_deg'], 'r_mid_over_R': round(rm / R, 3), 'width_over_R': round(float(w / R), 3), 'z': [round(float(Z[m][sel].min()), 2), round(float(Z[m][sel].max()), 2)]})
    out['arms'] = arms
    # keel: slices
    if keel.any():
        zk = Z[keel]; rk = rAll[keel]; tk = thAll[keel]
        zs = np.linspace(zk.min(), zk.max(), 13); sl = []
        for k in range(12):
            m = (zk >= zs[k]) & (zk < zs[k + 1])
            if m.sum() > 5:
                h, _ = np.histogram(tk[m][rk[m] > R * 0.12], bins=72, range=(0, 360))
                peaks = int(((h > h.mean() * 1.5) & (h > np.roll(h, 1)) & (h >= np.roll(h, -1))).sum())
                sl.append({'z': round(float(zs[k]), 2), 'depth_below_plate_over_R': round(float((zc - zs[k]) / R), 3), 'rmax_over_R': round(float(rk[m].max() / R), 3), 'rmin_over_R': round(float(rk[m].min() / R), 3), 'angular_peaks': peaks, 'n': int(m.sum())})
        out['keel_slices'] = sl
        out['keel_extent_z'] = [round(float(zk.min()), 2), round(float(zk.max()), 2)]
        out['keel_depth_over_R'] = round(float(abs(zc - zk.min() if out['keel_side'] == 'below' else zk.max() - zc) / R), 3)
        # fin azimuths at mid depth
        m = np.abs(zk - np.median(zk)) < (zk.max() - zk.min()) * 0.05
        h, e = np.histogram(tk[m][rk[m] > R * 0.15], bins=72, range=(0, 360))
        out['keel_mid_angular_hist_5deg'] = h.tolist()
    return out


if __name__ == '__main__':
    for pth in sys.argv[1:]:
        print(json.dumps(measure(pth), indent=1))
