# Reference Mesh — Printables "Citadel of Ricks" STL

Owner-supplied fan reconstruction used as the **exterior shell** of the model from schematic v2.1 onward. It is not canon; it is a careful modeller's reading of the same frames we have, and it gives us exact, measurable geometry where the frames give ratios. Where the STL and the show frame disagree, the disagreement is logged below and the frame wins for *existence*, the STL for *geometry*.

- File: `citadel_1_2_10_5.stl` (top half of the print; 82,480 triangles; not watertight). Source: Printables print 113442. **Not committed** — the licence is the modeller's; keep the file local (`reference_models/*.stl` is git-ignored) and point `build.py --mesh` at it.
- Companion file `citadel_bottom_1_2_10_5.stl` (1.2 MB) exists on Printables. The top file already contains the complete keel down to the spike tip (z = 0), so the bottom file appears to be the print's second half rather than missing geometry; not yet inspected.

## Frame and units

Measured with `trimesh` cross-sections every 0.25–1 STL unit (`citadel_top_stl_sections.json`). STL frame: Z up, apex at z = 89.12, spike tip at z = 0. Centre of the main body from the topmost section: (−0.201, −0.783). **Equatorial (widest) section of the main body: z = 78.5, radius 36.33 STL units = 1 R.** Pods at azimuths 36° / 156° / 276°.

Alignment used by the viewer: translate by (+0.201, +0.783, −78.5), scale 1/36.33, rotate −36° about Z (pod A → +X).

## Central body (lens)

| dz above equator (R) | section radius r₅ (R) | note |
|---|---|---|
| +0.292 | 0 | apex |
| +0.285 | 0.20 | hub circle |
| +0.204 | 0.68 | |
| +0.177 | 0.76 | |
| +0.149 | 0.83 | |
| +0.122 | 0.88 | |
| +0.108 | 0.90 | arms/pods begin to merge into the section |
| 0.000 | 1.00 | equator |
| −0.096 | (arms still present, 0.20 R wide) | |
| −0.103 | underside — section drops to the under-hub | |

The body is a **lens**: a full half-ellipsoid-like cap above (0.29 R tall, fuller than a spherical cap) and a shallow hull below (0.10 R). There is no vertical drum wall. The v2 schematic's "0.12 R thin plate" had the right thickness and the wrong shape; the v1 hemisphere was wrong by a factor of three in height.

## Under-hub, spike, fins

| depth below equator (R) | central section r₅ (R) | fins | note |
|---|---|---|---|
| 0.11 → 0.36 | 0.43 → 0.23 | — | tapering under-hub block |
| 0.40 → 0.50 | 0.19 → 0.10 | 5 fins appear | spike root |
| 0.56 → 1.34 | 0.08 → 0.03 | 5 fins, area/R² 0.056 → 0.018 | fins taper |
| 1.47 → 1.75 | 0.026 | 5 fins, area/R² 0.017 → 0.003 | fins end ≈ 1.80 |
| 1.89 → 2.13 | 0.026 → 0 | — | spike alone; **tip at −2.13 R** |

Fins: **five**, centroid azimuths 72° / 144° / 216° / 288° / 360° — 72° spacing, offset 36° from the arms. Radial extent 0.47–0.75 R at the root narrowing to 0.41–0.49 R at the tip; tangential width ≈ 0.26 R at the root, ≈ 0.15 R at the tip.

The spike tip depth (−2.13 R) is identical to the value the silhouette fit extracted from frame #23 (`../reference_images/EXTERIOR_FIT_23.md`), which is the strongest cross-check between the two sources.

## Pods

Three pods, centres at **2.316 R**, radius **0.592 R** (outer edge at 2.908 R). Apex +0.186 R, underside −0.10 R — i.e. each pod is a **0.59-scale copy of the central lens sitting on the same equatorial plane** (0.186 / 0.592 = 0.31 ≈ 0.292). Hub circle r ≈ 0.2 of the pod radius.

## Arms

Lenticular bridges from the main body to each pod. Arc widths measured by intersecting circles with the equatorial section:

| dz (R) | width at r 1.15 | 1.35 | 1.55 | 1.75 |
|---|---|---|---|---|
| +0.096 | 0.24 | 0.20 | 0.16 | 0.19 |
| +0.041 | 0.44 | 0.42 | 0.10* | 0.22 |
| 0.000 | 0.52 | 0.50 | 0.55 | 0.66 |
| −0.055 | 0.40 | 0.38 | 0.41 | 0.49 |
| −0.096 | 0.20 | 0.20 | 0.22 | 0.25 |

(*ridge/valley detail on the arm's top surface.) So the arms are ≈ 0.55 R wide and 0.20 R thick at the equator, tapering to ≈ 0.2 R wide at ±0.10 R — level with the deck, not sloping.

## Arm cross-section (perpendicular to the arm axis)

Sections at r = 1.05 / 1.2 / 1.35 / 1.5 / 1.65 R along the arm. Half-width in R at each height (mid-arm, r 1.35):

| z (R) | −0.08 | −0.05 | −0.03 | 0 | +0.024 | +0.05 | +0.065 | +0.08 | +0.095 |
|---|---|---|---|---|---|---|---|---|---|
| half-width | 0.15 | 0.20 | 0.23 | 0.25 | 0.25 | 0.20 | 0.18 | 0.14 | 0.11 |

Underside at −0.108 R everywhere; top at +0.15 R at the root falling to +0.12 R mid-arm. The section widens again to 0.33 R where it merges into the pod (r ≥ 1.65). Stored as `arm_section` in the JSON; the arm interior levels are sized from it.

## STL vs. silhouette fit vs. schematic

| Element | Silhouette fit (frame #23) | STL | Adopted (v2.1) |
|---|---|---|---|
| Main dome | spherical cap h 0.19 on a 0.12-thick plate | lens: +0.29 / −0.10 | STL |
| Pod centre distance | 2.5 (2.14–2.73 per pod) | 2.316 | STL |
| Pod radius | 0.54 | 0.592 | STL |
| Pod height | deck 0.31 R below main deck | level; apex +0.186 | STL |
| Arm width / thickness | 0.44 / thin, sloping | 0.55 / 0.20, level | STL |
| Under-hub | r 0.34, to −0.45 | r 0.46 → 0.23, to −0.36 | STL |
| Spike tip | −2.13 | −2.13 | agree |
| Fins | 3, to −1.65, aligned with arms | 5, to −1.80, 36° off the arms | STL |
| Camera that best matches #23 | 25° elevation, 14.9° fov | — | keep |

The fit and the STL agree on the keel depth and roughly on the pod placement; the fit's remaining errors (pod height, arm slope, fin count) are exactly the parameters a single 3/4 frame cannot constrain.
