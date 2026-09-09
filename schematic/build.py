#!/usr/bin/env python3
"""
Citadel schematic build script.

Reads  schematic/citadel_schematic.json  (the single source of truth) and writes:

  schematic/drawings/<DRAWING_ID>.svg   one SVG per entry in "drawings"
  schematic/NODE_REGISTER.md            full node table
  reference_images/IMAGE_SLOTS.md       per-node required-shot checklist
  schematic/viewer/index.html           interactive 3D block-out (template + inlined JSON)

Run from the repository root:  python schematic/build.py
"""
import json
import math
import os
import sys
from datetime import date

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SCHEMATIC_DIR = os.path.join(ROOT, "schematic")
DRAWINGS_DIR = os.path.join(SCHEMATIC_DIR, "drawings")
VIEWER_DIR = os.path.join(SCHEMATIC_DIR, "viewer")
IMAGES_DIR = os.path.join(ROOT, "reference_images")

with open(os.path.join(SCHEMATIC_DIR, "citadel_schematic.json"), encoding="utf-8") as f:
    DB = json.load(f)

NODES = DB["nodes"]
NODE_BY_ID = {n["id"]: n for n in NODES}

# ---------------------------------------------------------------- styling
KIND_COLOR = {
    "shell": "#7a7f8a", "dome": "#5bc0eb", "circulation": "#f5b942", "utility": "#c98bff",
    "district": "#8fd18f", "landmark": "#ff8a65", "interior": "#ffb199", "natural": "#4caf50",
    "machinery": "#ff5c5c", "interface": "#ffd166", "ruin": "#a0522d", "variant": "#e0e0e0", "prop": "#bbbbbb",
}
PLACEMENT_STYLE = {
    "LOCKED": {"dash": "", "width": 2.6, "opacity": 1.0},
    "ANCHORED": {"dash": "", "width": 1.8, "opacity": 0.9},
    "PROVISIONAL": {"dash": "8,5", "width": 1.6, "opacity": 0.8},
    "PLACEHOLDER": {"dash": "2,4", "width": 1.3, "opacity": 0.7},
    "UNPLACED": {"dash": "1,3", "width": 1.0, "opacity": 0.5},
}


def esc(s):
    return str(s).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def node_style(n, fill=True):
    st = PLACEMENT_STYLE[n["placement"]]
    col = KIND_COLOR.get(n["kind"], "#999")
    fill_attr = f'fill="{col}" fill-opacity="0.12"' if fill else 'fill="none"'
    dash = f' stroke-dasharray="{st["dash"]}"' if st["dash"] else ""
    return f'stroke="{col}" stroke-width="{st["width"]}" stroke-opacity="{st["opacity"]}"{dash} {fill_attr}'


def in_state(n, state):
    return state == "all" or state in n["states"]


def select(layers, state):
    return [n for n in NODES if n["layer"] in layers and in_state(n, state) and n["geometry"]]


# ---------------------------------------------------------------- plan projection
class Plan:
    def __init__(self, cx, cy, scale):
        self.cx, self.cy, self.S = cx, cy, scale

    def p(self, x, y):
        return self.cx + x * self.S, self.cy - y * self.S

    def circle(self, x, y, r, style, extra=""):
        px, py = self.p(x, y)
        return f'<circle cx="{px:.1f}" cy="{py:.1f}" r="{r*self.S:.1f}" {style} {extra}/>'

    def rect(self, x, y, w, h, style, az=0):
        px, py = self.p(x, y)
        rot = f' transform="rotate({-az:.1f} {px:.1f} {py:.1f})"' if az else ""
        return f'<rect x="{px - w*self.S/2:.1f}" y="{py - h*self.S/2:.1f}" width="{w*self.S:.1f}" height="{h*self.S:.1f}" {style}{rot}/>'

    def line(self, x1, y1, x2, y2, style):
        a, b = self.p(x1, y1), self.p(x2, y2)
        return f'<line x1="{a[0]:.1f}" y1="{a[1]:.1f}" x2="{b[0]:.1f}" y2="{b[1]:.1f}" {style}/>'

    def polyline(self, pts, style):
        s = " ".join(f"{x:.1f},{y:.1f}" for x, y in (self.p(px, py) for px, py, *_ in pts))
        return f'<polyline points="{s}" {style}/>'

    def sector(self, r_in, r_out, a0, a1, style):
        span = a1 - a0
        if span >= 360:
            o = self.circle(0, 0, r_out, style)
            i = self.circle(0, 0, r_in, style) if r_in > 0 else ""
            return o + i
        A0, A1 = math.radians(a0), math.radians(a1)
        large = 1 if span > 180 else 0
        ox0, oy0 = self.p(r_out * math.cos(A0), r_out * math.sin(A0))
        ox1, oy1 = self.p(r_out * math.cos(A1), r_out * math.sin(A1))
        ix0, iy0 = self.p(r_in * math.cos(A0), r_in * math.sin(A0))
        ix1, iy1 = self.p(r_in * math.cos(A1), r_in * math.sin(A1))
        R = r_out * self.S
        Ri = r_in * self.S
        d = (f"M {ox0:.1f},{oy0:.1f} A {R:.1f} {R:.1f} 0 {large} 0 {ox1:.1f},{oy1:.1f} "
             f"L {ix1:.1f},{iy1:.1f} A {Ri:.1f} {Ri:.1f} 0 {large} 1 {ix0:.1f},{iy0:.1f} Z")
        return f'<path d="{d}" {style}/>'

    def text(self, x, y, s, size=11, anchor="middle", color="#ddd", dy=0):
        px, py = self.p(x, y)
        return f'<text x="{px:.1f}" y="{py + dy:.1f}" font-size="{size}" text-anchor="{anchor}" fill="{color}" font-family="ui-monospace, Consolas, monospace">{esc(s)}</text>'


def draw_plan_node(P, n, labels=True):
    g = n["geometry"]
    t = g["type"]
    x, y = (n["position"] or [0, 0, 0])[:2]
    st = node_style(n)
    out = []
    label_at = (x, y)
    if t in ("hemisphere", "cap"):
        out.append(P.circle(x, y, g["radius"], st))
        label_at = (x, y + g["radius"] * 0.85)
    elif t == "cylinder":
        out.append(P.circle(x, y, max(g["radius_top"], g["radius_bottom"]), st))
        label_at = (x, y - max(g["radius_top"], g["radius_bottom"]) * 0.9)
    elif t == "disc":
        out.append(P.circle(x, y, g["radius"], st))
        if g.get("aperture_radius"):
            ax, ay = g.get("aperture_offset", [0, 0])
            out.append(P.circle(x + ax, y + ay, g["aperture_radius"], node_style(n, fill=False)))
    elif t == "ring":
        out.append(P.circle(x, y, g["radius"], node_style(n, fill=False)))
        label_at = (g["radius"] * math.cos(math.radians(100)), g["radius"] * math.sin(math.radians(100)))
    elif t == "radial_array":
        for i in range(g["count"]):
            a = math.radians(g["az_start"] + 360 * i / g["count"])
            out.append(P.line(g["r_inner"] * math.cos(a), g["r_inner"] * math.sin(a), g["r_outer"] * math.cos(a), g["r_outer"] * math.sin(a), node_style(n, fill=False)))
        labels = False
    elif t == "sector":
        out.append(P.sector(g["r_inner"], g["r_outer"], g["az_start"], g["az_end"], st))
        am = math.radians((g["az_start"] + g["az_end"]) / 2)
        rm = (g["r_inner"] + g["r_outer"]) / 2
        label_at = (rm * math.cos(am), rm * math.sin(am))
        if g["az_end"] - g["az_start"] >= 360:
            label_at = (0, -(g["r_inner"] + g["r_outer"]) / 2 if g["r_inner"] > 0 else -0.2)
    elif t in ("box", "room", "storefront"):
        out.append(P.rect(x, y, g["size"][0], g["size"][1], st, n.get("azimuth", 0)))
    elif t == "point":
        out.append(P.circle(x, y, max(g["radius"], 0.008), st))
    elif t == "path":
        sty = node_style(n, fill=False)
        if g.get("width", 0) >= 0.05:
            sty = sty.replace(f'stroke-width="{PLACEMENT_STYLE[n["placement"]]["width"]}"', f'stroke-width="{g["width"]*P.S:.1f}" stroke-linecap="butt"').replace('stroke-opacity', 'stroke-opacity="0.35" data-x')
        out.append(P.polyline(g["points"], sty))
        mid = g["points"][len(g["points"]) // 2]
        label_at = (mid[0], mid[1])
    elif t == "annular_volume":
        out.append(P.circle(x, y, g["r_outer"], node_style(n, fill=False)))
        out.append(P.circle(x, y, g["r_inner"], node_style(n, fill=False)))
        label_at = (0, g["r_outer"] * 0.97)
    elif t == "compound":
        out.append(P.circle(x, y, g["wall_radius"], node_style(n, fill=False)))
        out.append(P.rect(x, y, g["building_size"][0], g["building_size"][1], st))
    elif t == "cavern":
        out.append(P.circle(x, y, g["radius"], st))
    elif t == "pod_array":
        for i in range(g["count"]):
            out.append(P.rect(x + (i - (g["count"] - 1) / 2) * 0.03, y, g["pod_size"][0], g["pod_size"][1], st))
    elif t == "vat_array":
        for i in range(g["count"]):
            a = 2 * math.pi * i / g["count"]
            out.append(P.circle(x + g["ring_radius"] * math.cos(a), y + g["ring_radius"] * math.sin(a), g["vat_radius"], st))
        label_at = (x, y - g["ring_radius"] - 0.03)
    elif t == "thruster_array":
        for i in range(g["count"]):
            a = 2 * math.pi * i / g["count"]
            out.append(P.circle(x + 0.12 * math.cos(a), y + 0.12 * math.sin(a), g["radius"], st))
        labels = False
    elif t == "terrain_patch":
        out.append(P.circle(x, y, g.get("radius", 0.1), st))
    elif t == "scatter_volume":
        out.append(P.circle(x, y, g["radius"], node_style(n, fill=False)))
        label_at = (0, g["radius"] * 0.95)
    elif t == "plate_array":
        for i in range(g["count"]):
            a = 2 * math.pi * i / g["count"]
            out.append(P.line(g["radius"] * 0.97 * math.cos(a), g["radius"] * 0.97 * math.sin(a), g["radius"] * 1.03 * math.cos(a), g["radius"] * 1.03 * math.sin(a), node_style(n, fill=False)))
        labels = False
    elif t == "tunnel_network":
        for fid in g["follows"]:
            f = NODE_BY_ID[fid]["geometry"]
            if f["type"] == "ring":
                out.append(P.circle(0, 0, f["radius"], node_style(n, fill=False)))
        labels = False
    if labels:
        out.append(P.text(label_at[0], label_at[1], n["id"], size=9 if n["kind"] in ("interior", "prop") else 10, color=KIND_COLOR.get(n["kind"], "#ddd"), dy=3))
    return "\n".join(out)


# ---------------------------------------------------------------- elevation / section projection
class Elev:
    """axis: 'x' -> horizontal = X (looking along -Y); 'y' -> horizontal = Y (looking along +X)."""

    def __init__(self, cx, ground, scale, axis):
        self.cx, self.g, self.S, self.axis = cx, ground, scale, axis

    def h(self, n):
        pos = n["position"] or [0, 0, 0]
        return pos[0] if self.axis == "x" else pos[1]

    def p(self, hpos, z):
        return self.cx + hpos * self.S, self.g - z * self.S

    def text(self, hpos, z, s, size=10, anchor="middle", color="#ddd", dy=0):
        px, py = self.p(hpos, z)
        return f'<text x="{px:.1f}" y="{py + dy:.1f}" font-size="{size}" text-anchor="{anchor}" fill="{color}" font-family="ui-monospace, Consolas, monospace">{esc(s)}</text>'


def draw_elev_node(E, n):
    g = n["geometry"]
    t = g["type"]
    h = E.h(n)
    z = (n["position"] or [0, 0, 0])[2]
    st = node_style(n)
    out = []
    label = (h, z + 0.02)
    S = E.S
    if t == "hemisphere":
        r = g["radius"]
        x0, y0 = E.p(h - r, z)
        x1, y1 = E.p(h + r, z)
        out.append(f'<path d="M {x0:.1f},{y0:.1f} A {r*S:.1f} {r*S:.1f} 0 0 1 {x1:.1f},{y1:.1f}" {st}/>')
        if g.get("body_depth"):
            bx, by = E.p(h - r, z)
            out.append(f'<rect x="{bx:.1f}" y="{by:.1f}" width="{2*r*S:.1f}" height="{g["body_depth"]*S:.1f}" {st}/>')
        label = (h, z + r + 0.03)
    elif t == "cap":
        r, hh, zb = g["radius"], g["height"], g["z_base"]
        Rs = (r * r + hh * hh) / (2 * hh)
        x0, y0 = E.p(h - r, zb)
        x1, y1 = E.p(h + r, zb)
        out.append(f'<path d="M {x0:.1f},{y0:.1f} A {Rs*S:.1f} {Rs*S:.1f} 0 0 1 {x1:.1f},{y1:.1f}" {st}/>')
        if g.get("drum_bottom") is not None:
            bx, by = E.p(h - r, zb)
            out.append(f'<rect x="{bx:.1f}" y="{by:.1f}" width="{2*r*S:.1f}" height="{(zb - g["drum_bottom"])*S:.1f}" {st}/>')
        label = (h, zb + hh + 0.03)
    elif t == "cylinder":
        zt, zb = g["z_top"], g["z_bottom"]
        if "features" in g or n["kind"] == "machinery":  # positioned cylinders: z fields are absolute
            pass
        pts = [E.p(h - g["radius_top"], zt), E.p(h + g["radius_top"], zt), E.p(h + g["radius_bottom"], zb), E.p(h - g["radius_bottom"], zb)]
        out.append('<polygon points="' + " ".join(f"{x:.1f},{y:.1f}" for x, y in pts) + f'" {st}/>')
        label = (h, zb - 0.04)
    elif t == "disc":
        x0, y0 = E.p(h - g["radius"], g.get("z", z))
        x1, y1 = E.p(h + g["radius"], g.get("z", z))
        out.append(f'<line x1="{x0:.1f}" y1="{y0:.1f}" x2="{x1:.1f}" y2="{y1:.1f}" {node_style(n, fill=False)}/>')
        label = (h + g["radius"] * 0.6, g.get("z", z) - 0.04)
    elif t in ("box", "room", "storefront"):
        w = g["size"][0] if E.axis == "x" else g["size"][1]
        x0, y0 = E.p(h - w / 2, z + g["size"][2])
        out.append(f'<rect x="{x0:.1f}" y="{y0:.1f}" width="{w*S:.1f}" height="{g["size"][2]*S:.1f}" {st}/>')
        label = (h, z + g["size"][2] + 0.025)
    elif t == "ring":
        zz = g.get("z", z)
        x0, y0 = E.p(-g["radius"], zz)
        x1, y1 = E.p(g["radius"], zz)
        out.append(f'<line x1="{x0:.1f}" y1="{y0:.1f}" x2="{x1:.1f}" y2="{y1:.1f}" {node_style(n, fill=False)}/>')
        label = (g["radius"] * 0.8, zz + 0.02)
    elif t == "path":
        pts = [E.p(p[0] if E.axis == "x" else p[1], p[2]) for p in g["points"]]
        out.append('<polyline points="' + " ".join(f"{x:.1f},{y:.1f}" for x, y in pts) + f'" {node_style(n, fill=False)}/>')
        m = g["points"][-1]
        label = (m[0] if E.axis == "x" else m[1], m[2] + 0.03)
    elif t == "annular_volume":
        x0, y0 = E.p(-g["r_outer"], g["z_max"])
        out.append(f'<rect x="{x0:.1f}" y="{y0:.1f}" width="{2*g["r_outer"]*S:.1f}" height="{(g["z_max"]-g["z_min"])*S:.1f}" {st}/>')
        label = (g["r_outer"] * 0.6, g["z_max"] + 0.02)
    elif t == "cavern":
        x0, y0 = E.p(h - g["radius"], g["z_top"])
        out.append(f'<rect x="{x0:.1f}" y="{y0:.1f}" width="{2*g["radius"]*S:.1f}" height="{(g["z_top"]-g["z_bottom"])*S:.1f}" rx="18" {st}/>')
        label = (h, g["z_bottom"] - 0.03)
    elif t == "compound":
        x0, y0 = E.p(h - g["wall_radius"], z + g["wall_height"])
        out.append(f'<rect x="{x0:.1f}" y="{y0:.1f}" width="{2*g["wall_radius"]*S:.1f}" height="{g["wall_height"]*S:.1f}" {node_style(n, fill=False)}/>')
        bw = g["building_size"][0]
        x0, y0 = E.p(h - bw / 2, z + g["building_size"][2])
        out.append(f'<rect x="{x0:.1f}" y="{y0:.1f}" width="{bw*S:.1f}" height="{g["building_size"][2]*S:.1f}" {st}/>')
        label = (h, z + g["building_size"][2] + 0.025)
    elif t == "vat_array":
        for i in range(g["count"]):
            a = 2 * math.pi * i / g["count"]
            off = g["ring_radius"] * (math.cos(a) if E.axis == "x" else math.sin(a))
            x0, y0 = E.p(h + off - g["vat_radius"], z + g["height"])
            out.append(f'<rect x="{x0:.1f}" y="{y0:.1f}" width="{2*g["vat_radius"]*S:.1f}" height="{g["height"]*S:.1f}" {st}/>')
        label = (h, z - 0.03)
    elif t == "thruster_array":
        for i in range(g["count"]):
            off = (i - (g["count"] - 1) / 2) * 0.1
            x0, y0 = E.p(h + off - g["radius"], z)
            out.append(f'<rect x="{x0:.1f}" y="{y0:.1f}" width="{2*g["radius"]*S:.1f}" height="{g["length"]*S:.1f}" {st}/>')
        label = (h, z - g["length"] - 0.03)
    elif t == "pod_array":
        x0, y0 = E.p(h - 0.06, z + g["pod_size"][2])
        out.append(f'<rect x="{x0:.1f}" y="{y0:.1f}" width="{0.12*S:.1f}" height="{g["pod_size"][2]*S:.1f}" {st}/>')
    elif t == "point":
        px, py = E.p(h, z)
        out.append(f'<circle cx="{px:.1f}" cy="{py:.1f}" r="4" {st}/>')
    elif t == "terrain_patch":
        x0, y0 = E.p(h - g.get("radius", 0.1), z + 0.01)
        out.append(f'<rect x="{x0:.1f}" y="{y0:.1f}" width="{2*g.get("radius",0.1)*S:.1f}" height="{0.01*S:.1f}" {st}/>')
    elif t == "scatter_volume":
        x0, y0 = E.p(-g["radius"], g["z_max"])
        out.append(f'<rect x="{x0:.1f}" y="{y0:.1f}" width="{2*g["radius"]*S:.1f}" height="{(g["z_max"]-g["z_min"])*S:.1f}" {node_style(n, fill=False)}/>')
        label = (0, g["z_max"] + 0.03)
    elif t == "tunnel_network":
        x0, y0 = E.p(-0.95, g["z"])
        x1, y1 = E.p(0.95, g["z"])
        out.append(f'<line x1="{x0:.1f}" y1="{y0:.1f}" x2="{x1:.1f}" y2="{y1:.1f}" {node_style(n, fill=False)}/>')
        label = (0.8, g["z"] - 0.03)
    elif t in ("sector", "radial_array", "plate_array"):
        return ""
    out.append(E.text(label[0], label[1], n["id"], size=9, color=KIND_COLOR.get(n["kind"], "#ddd")))
    return "\n".join(out)


# ---------------------------------------------------------------- frame / legend
def legend(x, y):
    rows = []
    yy = y
    rows.append(f'<text x="{x}" y="{yy}" font-size="12" fill="#fff" font-family="ui-monospace, Consolas, monospace" font-weight="bold">PLACEMENT CLASS (line style)</text>')
    for k, st in PLACEMENT_STYLE.items():
        yy += 16
        dash = f' stroke-dasharray="{st["dash"]}"' if st["dash"] else ""
        rows.append(f'<line x1="{x}" y1="{yy-4}" x2="{x+50}" y2="{yy-4}" stroke="#fff" stroke-width="{st["width"]}"{dash}/>')
        rows.append(f'<text x="{x+58}" y="{yy}" font-size="11" fill="#ddd" font-family="ui-monospace, Consolas, monospace">{k} — {esc(DB["placement_classes"][k].split(".")[0])}</text>')
    yy += 24
    rows.append(f'<text x="{x}" y="{yy}" font-size="12" fill="#fff" font-family="ui-monospace, Consolas, monospace" font-weight="bold">KIND (colour)</text>')
    for i, (k, c) in enumerate(KIND_COLOR.items()):
        col = i % 3
        row = i // 3
        rows.append(f'<rect x="{x + col*150}" y="{yy + 8 + row*16}" width="12" height="10" fill="{c}"/>')
        rows.append(f'<text x="{x + col*150 + 16}" y="{yy + 17 + row*16}" font-size="11" fill="#ddd" font-family="ui-monospace, Consolas, monospace">{k}</text>')
    return "\n".join(rows)


def title_block(W, H, d):
    x, y = W - 470, H - 120
    return f'''
<rect x="{x}" y="{y}" width="450" height="100" fill="#0e1218" stroke="#555"/>
<text x="{x+12}" y="{y+24}" font-size="16" fill="#fff" font-family="ui-monospace, Consolas, monospace" font-weight="bold">{esc(d["id"])}</text>
<text x="{x+12}" y="{y+44}" font-size="12" fill="#ccc" font-family="ui-monospace, Consolas, monospace">{esc(d["title"])}</text>
<text x="{x+12}" y="{y+62}" font-size="11" fill="#aaa" font-family="ui-monospace, Consolas, monospace">State: {esc(d["state"])}   Layers: {esc(",".join(d["layers"]))}</text>
<text x="{x+12}" y="{y+78}" font-size="11" fill="#aaa" font-family="ui-monospace, Consolas, monospace">Units: U = DOME-P radius (absolute scale UNKNOWN)   Built {date.today().isoformat()}</text>
<text x="{x+12}" y="{y+92}" font-size="10" fill="#888" font-family="ui-monospace, Consolas, monospace">Citadel of Ricks reconstruction — generated from citadel_schematic.json</text>'''


def svg_open(W, H):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" font-family="ui-monospace, Consolas, monospace">'
            f'<rect width="{W}" height="{H}" fill="#0b0e13"/>')


def grid_plan(P, W, H, rmax=3.0):
    out = []
    for r in [0.5, 1.0, 1.5, 2.0, 2.5, 3.0]:
        if r <= rmax:
            out.append(P.circle(0, 0, r, 'stroke="#1e2733" stroke-width="1" fill="none"'))
            out.append(P.text(r, 0.02, f"{r:.2f}U", size=9, color="#3b4a5c", anchor="start"))
    for a in range(0, 360, 30):
        A = math.radians(a)
        out.append(P.line(0, 0, rmax * math.cos(A), rmax * math.sin(A), 'stroke="#1e2733" stroke-width="1"'))
        out.append(P.text((rmax + 0.05) * math.cos(A), (rmax + 0.05) * math.sin(A), f"{a}°", size=9, color="#3b4a5c"))
    out.append(P.text(rmax + 0.12, 0, "+X", size=12, color="#6b7c93"))
    out.append(P.text(0, rmax + 0.12, "+Y", size=12, color="#6b7c93"))
    return "\n".join(out)


def grid_elev(E, W, H, bands=False):
    out = []
    for z in [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5]:
        x0, y0 = E.p(-3.1, z)
        x1, y1 = E.p(3.1, z)
        col = "#2a3644" if z == 0 else "#1e2733"
        out.append(f'<line x1="{x0:.1f}" y1="{y0:.1f}" x2="{x1:.1f}" y2="{y1:.1f}" stroke="{col}" stroke-width="1"/>')
        out.append(E.text(-3.13, z, f"z={z:+.1f}U", size=9, color="#3b4a5c", anchor="end", dy=3))
    for hpos in [-3.0, -2.5, -2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0]:
        x0, y0 = E.p(hpos, 0.7)
        x1, y1 = E.p(hpos, -2.3)
        out.append(f'<line x1="{x0:.1f}" y1="{y0:.1f}" x2="{x1:.1f}" y2="{y1:.1f}" stroke="#1e2733" stroke-width="1"/>')
        out.append(E.text(hpos, -2.36, f"{hpos:+.1f}U", size=9, color="#3b4a5c"))
    if bands:
        for b in DB["vertical_bands"]:
            x0, y0 = E.p(-3.05, b["z_max"])
            x1, y1 = E.p(3.05, b["z_min"])
            out.append(f'<rect x="{x0:.1f}" y="{y0:.1f}" width="{x1-x0:.1f}" height="{max(y1-y0,1):.1f}" fill="#ffffff" fill-opacity="0.025" stroke="#2f3d4f" stroke-dasharray="3,6"/>')
            out.append(E.text(3.06, (b["z_min"] + b["z_max"]) / 2, f'{b["id"]} {b["name"]}', size=9, color="#6b7c93", anchor="start", dy=3))
    return "\n".join(out)


# ---------------------------------------------------------------- drawing builders
PLAN_ORDER = ["shell", "dome", "district", "circulation", "utility", "natural", "landmark", "interior", "machinery", "interface", "ruin", "variant", "prop"]


def build_plan(d, W=1500, H=1500, scale=225):
    P = Plan(W / 2 - 40, H / 2 - 60, scale)
    nodes = select(d["layers"], d["state"])
    nodes.sort(key=lambda n: PLAN_ORDER.index(n["kind"]))
    body = [svg_open(W, H), grid_plan(P, W, H)]
    body.append(f'<text x="30" y="40" font-size="22" fill="#fff" font-weight="bold">{esc(d["id"])} — {esc(d["title"])}</text>')
    body.append(f'<text x="30" y="62" font-size="12" fill="#8a97a8">Plan view, +Z towards viewer. Azimuth CCW from +X. Dashed/dotted = provisional/placeholder geometry (see legend).</text>')
    for n in nodes:
        body.append(draw_plan_node(P, n))
    body.append(legend(30, H - 250))
    body.append(title_block(W, H, d))
    body.append("</svg>")
    return "\n".join(body)


def build_elev(d, W=1700, H=1000, scale=240):
    axis = "x" if d["projection"] in ("elevation_y", "section_y") else "y"
    section = d["projection"].startswith("section")
    E = Elev(W / 2 - 60, 380, scale, axis)
    nodes = select(d["layers"], d["state"])
    nodes.sort(key=lambda n: PLAN_ORDER.index(n["kind"]))
    body = [svg_open(W, H), grid_elev(E, W, H, bands=section)]
    horiz = "X" if axis == "x" else "Y"
    body.append(f'<text x="30" y="40" font-size="22" fill="#fff" font-weight="bold">{esc(d["id"])} — {esc(d["title"])}</text>')
    body.append(f'<text x="30" y="62" font-size="12" fill="#8a97a8">Horizontal axis = {horiz} (U). Vertical axis = Z (U). {"Section: interior nodes shown, vertical bands labelled at right." if section else "Elevation: exterior masses; interior shown for reference."}</text>')
    for n in nodes:
        body.append(draw_elev_node(E, n))
    body.append(legend(30, H - 250))
    body.append(title_block(W, H, d))
    body.append("</svg>")
    return "\n".join(body)


def build_multiples(d, W=1800, H=1000):
    body = [svg_open(W, H)]
    body.append(f'<text x="30" y="40" font-size="22" fill="#fff" font-weight="bold">{esc(d["id"])} — {esc(d["title"])}</text>')
    body.append('<text x="30" y="62" font-size="12" fill="#8a97a8">Each tile shows only nodes whose "states" list includes that state. Labels omitted; see TOP_MASTER for IDs.</text>')
    cell_w, cell_h = 430, 400
    for i, s in enumerate(DB["states"]):
        col, row = i % 4, i // 4
        ox, oy = 30 + col * cell_w, 90 + row * cell_h
        P = Plan(ox + cell_w / 2, oy + cell_h / 2 + 10, 60)
        body.append(f'<rect x="{ox}" y="{oy}" width="{cell_w-10}" height="{cell_h-10}" fill="none" stroke="#2a3644"/>')
        body.append(f'<text x="{ox+10}" y="{oy+20}" font-size="13" fill="#fff" font-weight="bold">{esc(s["id"])} {esc(s["name"])}</text>')
        body.append(f'<text x="{ox+10}" y="{oy+36}" font-size="10" fill="#8a97a8">{esc("; ".join(s["sources"]))}</text>')
        nodes = select(d["layers"], s["id"])
        nodes.sort(key=lambda n: PLAN_ORDER.index(n["kind"]))
        for n in nodes:
            body.append(draw_plan_node(P, n, labels=False))
    body.append(title_block(W, H, d))
    body.append("</svg>")
    return "\n".join(body)


def build_drawings():
    os.makedirs(DRAWINGS_DIR, exist_ok=True)
    for d in DB["drawings"]:
        if d["projection"] == "plan":
            svg = build_plan(d)
        elif d["projection"] == "plan_multiples":
            svg = build_multiples(d)
        else:
            svg = build_elev(d)
        with open(os.path.join(DRAWINGS_DIR, d["id"] + ".svg"), "w", encoding="utf-8") as f:
            f.write(svg)
        print("wrote drawings/" + d["id"] + ".svg")


# ---------------------------------------------------------------- markdown outputs
def build_register():
    lines = ["# Node Register (generated — do not edit; edit `citadel_schematic.json` and run `python schematic/build.py`)", "",
             f"{len(NODES)} nodes. Positions are in U (1 U = DOME-P radius). Placement class governs how much trust the position deserves.", "",
             "| ID | Name | Kind | Layer | Bands | Exist. | Placement | States | Position (X,Y,Z) | Parent | Key evidence |", "|---|---|---|---|---|---|---|---|---|---|---|"]
    for n in NODES:
        pos = "—" if not n["position"] else ",".join(f"{v:+.2f}" for v in n["position"])
        lines.append(f'| `{n["id"]}` | {n["name"]} | {n["kind"]} | {n["layer"]} | {" ".join(n["band"]) or "—"} | {n["existence"]} | {n["placement"]} | {" ".join(n["states"]) or "—"} | {pos} | {n.get("parent", "—")} | {"; ".join(n["evidence"][:2])} |')
    lines += ["", "## Rationale and unknowns per node", ""]
    for n in NODES:
        lines.append(f'### {n["id"]} — {n["name"]}')
        lines.append("")
        lines.append(f'**Placement rationale:** {n["rationale"]}')
        lines.append("")
        lines.append("**Unknowns:** " + "; ".join(n["unknowns"]))
        lines.append("")
        lines.append("**Evidence:** " + "; ".join(n["evidence"]))
        lines.append("")
        if n["geometry"] and n["geometry"].get("features"):
            lines.append("**Sub-features to model:** " + "; ".join(n["geometry"]["features"]))
            lines.append("")
    with open(os.path.join(SCHEMATIC_DIR, "NODE_REGISTER.md"), "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print("wrote NODE_REGISTER.md")


def build_image_slots():
    os.makedirs(IMAGES_DIR, exist_ok=True)
    lines = ["# Image Slots (generated from `citadel_schematic.json`)", "",
             "Drop frame captures into `reference_images/` named `<EPISODE>_<mmss>_<NODE-ID>_<n>.png` (e.g. `S03E07_0412_LM-CAFE-SANCHEZ_1.png`),",
             "then add the filename to that node's `reference_images` array in the JSON and re-run `python schematic/build.py`.",
             "Each image should also get a row in `reference_images/CAMERA_MATCH.md` (see template there).", "",
             "| Node | Placement | Required shots | Images logged |", "|---|---|---|---|"]
    for n in NODES:
        shots = "<br>".join(f"- [ ] {s}" for s in n["required_shots"])
        imgs = "<br>".join(n["reference_images"]) or "_none yet_"
        lines.append(f'| `{n["id"]}` {n["name"]} | {n["placement"]} | {shots} | {imgs} |')
    total = sum(len(n["required_shots"]) for n in NODES)
    logged = sum(len(n["reference_images"]) for n in NODES)
    lines += ["", f"**{logged} images logged against {total} required shots.**"]
    with open(os.path.join(IMAGES_DIR, "IMAGE_SLOTS.md"), "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print("wrote reference_images/IMAGE_SLOTS.md")


def build_viewer():
    tpl_path = os.path.join(VIEWER_DIR, "template.html")
    with open(tpl_path, encoding="utf-8") as f:
        tpl = f.read()
    html = tpl.replace("/*__SCHEMATIC_JSON__*/null", json.dumps(DB, separators=(",", ":")))
    with open(os.path.join(VIEWER_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(html)
    print("wrote viewer/index.html")


def validate():
    ids = set()
    errors = []
    for n in NODES:
        if n["id"] in ids:
            errors.append(f"duplicate id {n['id']}")
        ids.add(n["id"])
        for k in ("id", "name", "kind", "layer", "band", "existence", "placement", "states", "geometry", "position", "evidence", "rationale", "unknowns", "required_shots", "reference_images"):
            if k not in n:
                errors.append(f"{n['id']} missing {k}")
        if n["placement"] not in PLACEMENT_STYLE:
            errors.append(f"{n['id']} bad placement {n['placement']}")
        if n["kind"] not in KIND_COLOR:
            errors.append(f"{n['id']} bad kind {n['kind']}")
        if n["placement"] != "UNPLACED" and (n["geometry"] is None or n["position"] is None):
            errors.append(f"{n['id']} placed but has no geometry/position")
        if n["placement"] == "UNPLACED" and n["geometry"] is not None:
            errors.append(f"{n['id']} UNPLACED but has geometry")
    for n in NODES:
        if n.get("parent") and n["parent"] not in ids:
            errors.append(f"{n['id']} parent {n['parent']} not found")
    if errors:
        print("VALIDATION ERRORS:")
        for e in errors:
            print("  -", e)
        sys.exit(1)
    print(f"validated {len(NODES)} nodes")


if __name__ == "__main__":
    validate()
    build_drawings()
    build_register()
    build_image_slots()
    build_viewer()
