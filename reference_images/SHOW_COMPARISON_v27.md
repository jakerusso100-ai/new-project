# Show vs. model comparison (v2.7, 2026-09-14)

Frames used: **#23** (S05E10 exterior, orbital 3/4 view; `CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md`), **#04** (S05E10 founding hologram, wireframe of the whole station; `CITADEL_IMAGE_GALLERY.md`), **#14** (S05E10 plaza wide, interior). Our render is taken at the camera fitted in `EXTERIOR_FIT_23.md` (`?view=ref23`). Composite: `compare_ref23.png` (session render; not committed).

## Glass-to-arm junctions (fixed this pass)

The STL extrudes each arm as a solid fillet into the domes. Classified as hull, that put an opaque wedge over the glass at all six junctions (three at the main dome, three at the pods) — the "wall over the glass". Ray probes down through the embedded mesh (r 0.80–0.98 × side 0–0.3 at the roots; along 1.74–1.95 × side 0.1–0.4 at the pod ends) showed the wedge triangles sit on or just above the dome surfaces. Rule now: an arm triangle inside a dome footprint (main dome r < 0.965; pod domes rp < 0.575 of the 0.592 pod radius) is glazing; the arm is hull only outside the footprints. Pod glazing also extended from 0.946 to 0.971 of the pod radius so it reaches the rim ring the way the main dome does (0.97). Glass triangles 24,942 → 27,955; interior audit unchanged (all zero).

## What matches

| Feature | Show | Model | Status |
|---|---|---|---|
| Massing: disc + three pods on arms at 120° | #23, #04 | STL, measured | LOCKED |
| Dome lattice: radial + concentric ribs on all four domes | #23, #04 | drawn (schematic ribs) | ANCHORED |
| Pods smaller than the disc, flatter domes, hub caps | #23 | STL (0.592 R, top 0.186) | LOCKED |
| Cyan light strips along the arm edges | #23 | edge light strips | A |
| Lit window band on the arm flanks beside the pods | #23 + STL slot | slot panes, lit | A/A |
| Arms latticed like the domes (not solid tubes) | #04 hologram | spine skylight + frames | B (was C) |
| Keel: fin cluster with a central glowing blade | #23 | STL fins; blade now emissive cyan | ANCHORED |
| Central plaza with water and a tall spire monument | #14, #01 | LM-CENTRAL-PLAZA / MONUMENT / CORE-WATER | PROVISIONAL |
| Elevated cyan-lit rail viaducts through the city | #14 | rail loop + Mortyburg spur | A (route) |

## What still differs — work list

1. **Hull finish.** Show: warm yellow-tan with dark panel seams and shading; model: flat beige. Cosmetic, but it is the biggest visual gap in the #23 composite. Option: a procedural panel-seam texture on the STL hull material (no geometry change).
2. **Junction hardware.** #23 shows dark, greebled dock/gantry structures where the arms meet the disc and small gantries on the disc top near the arm roots. Not modelled (UNPLACED). Would sit on the hull outside the dome footprints.
3. **Rim drum.** #23 shows a dark band with lit strips around the disc rim below the dome. The STL rim is plain. Candidate: a lit window band around the drum at deck level, same treatment as the arm slot windows. Evidence B; not built.
4. **Docked platform / dish.** A separate dish-and-gantry platform floats top-right in #23. UNPLACED; not built.
5. **Interior style.** #14: organic, tapered, gothic spires; sweeping curved viaducts; yellow atmospheric haze; lush planters. Model: box/cylinder blocks, straight roads. The generator would need a tapered-spire family for the civic core and curved viaduct geometry for the rail. Layout (rings, radials, plaza, rail) is fine; silhouettes are not.
6. **Keel blade visibility.** With the STL opaque, the blade is the spike surface itself; the show's blade is a translucent energy column wider than the spike. Consider a translucent emissive column between the fins in addition to the spike material.
7. **Dome tint.** Show domes read teal-green with visible reflection bands; ours are near-clear. A slight tint on the main/pod dome material would bring the composite closer without hiding the city.

Nothing in the list changes measured geometry; all are surface, hardware or generator-style items and each stays labelled with its evidence class in the register.
