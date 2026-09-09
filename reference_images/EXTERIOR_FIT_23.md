# Exterior Fit — Gallery BATCH_02 #23

The one full exterior frame of the Citadel, fitted numerically against the schematic's 3D block-out. This file records the method, every measurement, the fitted values, and what the fit could not resolve. It supersedes the eyeballed passes logged in `CAMERA_MATCH.md` for the global massing.

## 1. Method

1. **Reference silhouette.** The 1200 × 675 frame was classified pixel-by-pixel into station / background using HSV thresholds (hull: hue 40–135°, sat 0.15–0.8, val > 0.34; lights: hue 135–215°, sat > 0.25, val > 0.45; the right pod, in shadow, needed val > 0.17). Below the planet horizon (y > 505) only cyan/green counted. The mask was downsampled 4× to 300 × 169 and stored run-length-encoded in `ref23_mask_300x169.json`.
2. **Feature fit.** Ten screen features were measured on the frame (disc centre and edges, cap top, front underside, three pod centres and half-widths, blade tip, fin bottom). A 15-parameter camera + geometry model was fitted to them by random search (6,000 samples) plus coordinate descent. Residual error 0.028 (NDC²).
3. **Silhouette fit.** The viewer was rendered at 1200 × 675 through the fitted camera, its pixels read back, and the model silhouette compared with the reference in seven regions (disc + cap, keel, three pods, two arms). Two metrics: intersection-over-union, and **mean silhouette edge error** — for every row and column in a region, the absolute difference between the reference and model silhouette edges, in frame pixels. Edge error was the objective because the reference caps are see-through (their interiors classify as background), which caps IoU regardless of geometry.
4. **Optimisation.** Coordinate descent over 22 geometry parameters (per-pod distance and azimuth, pod radius, pod deck height, pod cap height, main cap height, disc underside, fin radius/width/depth/azimuth, blade radius/tip, under-hub radius/bottom, arm width and end heights) interleaved with 7 camera parameters, with shrinking steps and three random restarts. Every evaluation rebuilds the affected meshes, renders, and scores — one comparison each.

| Stage | Comparisons | Metric | Start → end |
|---|---|---|---|
| Feature fit, random search | 6,000 (projection only) | NDC² | — → 0.028 |
| IoU camera climb | ~130 | IoU (all) | 0.283 → 0.510 |
| IoU camera restarts | ~600 | IoU (all) | 0.510 (no gain — camera was already optimal) |
| IoU geometry, 16 params | 65 + 645 | 0.4·IoU + 0.6·mean region IoU | 0.449 → 0.482 |
| Edge-error geometry, 22 params | 813 | mean edge error | 23.9 px → 19.0 px |
| Edge-error restarts ×3 | 870 | mean edge error | 19.0 px (confirmed) |
| Edge-error with sloped arms + camera re-parameterised | 929 | mean edge error | 20.2 px → 17.65 px |
| Perspective sweep (camera distance 4 → 20 U) | 700 | mean edge error | best at r 11–14 U |
| **Total** | **≈ 4,150 render-and-compare evaluations** | | **17.65 px ≈ 0.10 R** |

## 2. Reference measurements (frame pixels, 1200 × 675; R = disc radius = 180 px)

| Feature | x | y | half-width | Note |
|---|---|---|---|---|
| Disc centre (deck ellipse) | 540 | 205 | 180 | widest row of the silhouette |
| Disc left / right edge | 360 / 720 | 205 | | |
| Cap top | 545 | 150 | | |
| Front underside | 540 | 290 | | near rim of the disc |
| Pod A (left, near) | 206 | 352 | 116 | ellipse x 90–322, y 300–405 |
| Pod B (far) | 487 | 108 | 97 | ellipse x 390–585, y 75–142 |
| Pod C (right, shadowed) | 1000 | 352 | 105 | bbox x 850–1107, y 272–423 (loose threshold) |
| Keel width at y 300 / 375 / 435 | 510–645 / 442–600 / 480–592 | | | 0.75 / 0.88 / 0.62 R across |
| Fins bottom | 540 | 500 | | |
| Blade tip | 547 | 540 | | |
| Panel mast top | 655 | 62 | | right of the far pod |

## 3. Fitted camera

| Parameter | Value |
|---|---|
| Azimuth θ (viewer convention, pods at 0°/120°/240°) | −3.27 rad |
| Polar angle φ (from +Z) | 1.13 rad → **25° above the horizon** |
| Distance | 14.25 U |
| Field of view | **14.9°** (long lens; S = r·tan(fov/2) = 1.86 U) |
| Look-at target | (−0.527, −0.247, −0.519) U |

The perspective sweep held apparent size constant and varied distance: 4 U → 21.5 px, 7 U → 19.8, 9 U → 18.8, 11 U → 17.7, 14.25 U → 17.65, 20 U → 18.3. The frame is drawn with almost no perspective convergence.

## 4. Fitted geometry (U = disc radius)

| Element | v1 (text only) | v1.7 (eyeballed) | **Fitted** | Adopted in schematic |
|---|---|---|---|---|
| Main dome | hemisphere r 1.0 | cap h 0.26 on drum | cap h **0.194** | 0.19 |
| Disc thickness | — (drum 0.53) | +0.10 / −0.12 | +0.10 / **−0.02** | 0.12 R thick |
| Under-hub | — | r 0.48, to −0.32 | r **0.34**, −0.02 → **−0.45** | as fitted |
| Blade | cone r 0.45 → 0, to −0.65 | r 0.20, to −1.60 | r **0.117**, tip **−2.13** | as fitted |
| Fins | — | r 0.27, w 0.40, to −1.25 | r **0.32**, w **0.365**, to **−1.65**, az offset −2.7° | as fitted, aligned with arms |
| Pod radius | 0.35 | 0.55 | **0.541** | 0.54 |
| Pod centre distance | 1.30 | 2.10 | **2.73 / 2.14 / 2.67** (A / B / C) | 2.50 symmetric (see §5) |
| Pod azimuth offsets | 0 | 0 | +3.4° / −4.8° / −0.7° | 0 |
| Pod deck height | 0 | 0 | **−0.31** | −0.31 |
| Pod cap height | (hemisphere) | 0.16 | **0.097** | 0.10 |
| Arm width | 0.12 | 0.34 | **0.443** | 0.44 |
| Arm heights (disc → pod) | 0 | −0.01 | **−0.03 → −0.15** | −0.03 → −0.25 (pod-rim top; the fitted −0.15 would enter the pod cap) |

Per-region mean edge error after the fit: disc + cap 12.0 px · keel 18.1 · pod A 23.7 · pod B 16.7 · pod C 18.9 · arm left 16.3 · arm right 17.9.

## 5. What the fit says that eyeballing did not

- **The pods hang ≈0.3 R below the main deck**, and the arms slope down to them. Every earlier pass put the pods level with the deck.
- **The disc is a thin plate** (0.12 R), not a drum. The keel hangs from a separate under-hub.
- **The keel is deep**: blade tip 2.1 R below deck, fins 1.65 R. Earlier passes measured depth from the front rim of the disc rather than its centre and got 1.5 R.
- **The frame's perspective is inconsistent.** The best camera is nearly orthographic, yet the near pod fits at 2.73 R and the far pod at 2.14 R. In a real orthographic view all three would be equal; the artist enlarged the near pod and shrank the far one for depth. The schematic therefore keeps the pods symmetric at the mean, 2.5 R, and treats the ±0.3 R spread as an artefact rather than geometry.
- **Fins align with the arms** (fitted azimuth offset −2.7°), which is what the earlier side-by-side pass had assumed.

## 6. Residuals and what would fix them

- **Pod A (23.7 px)** — the near pod is drawn larger than any consistent camera allows; a second exterior would settle whether the pods differ in size.
- **Keel (18 px)** — the reference keel narrows toward the bottom more smoothly than three flat fins; the real object is probably a faceted spindle with fin-like ribs. Needs a frame from below.
- **Arms** — the reference arms read as thin edge-on planks on the right and a wide deck on the left; a single width cannot satisfy both. Likely the arms are wide but very thin, with a raised side wall casting the light strip.
- **Cap segment count and hub radius** — not fitted; taken from the earlier passes (8 segments, hub r ≈ 0.22 of the cap radius).

## 7. Reproducing

Open `schematic/viewer/index.html`, click **Match exterior #23** (loads the fitted camera), and compare with the frame. The fitting code ran in the viewer's console against the mask in `ref23_mask_300x169.json`; the parameter table above is the complete input needed to repeat it.
