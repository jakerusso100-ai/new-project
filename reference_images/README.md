# Reference Images

This folder holds the frame captures that will drive the 3D model. The schematic (`schematic/`) was built from the text evidence alone; **every PROVISIONAL and PLACEHOLDER node in it is waiting for an image to move it.**

## Workflow

1. Open `IMAGE_SLOTS.md` (generated). It lists, per node, the shots the evidence registers say exist.
2. Capture the frame. Name it `<EPISODE>_<mmss>_<NODE-ID>_<n>.png`, e.g. `S03E07_0412_LM-CAFE-SANCHEZ_1.png`. Keep the episode code and timestamp so the shot can be re-found.
3. Add the filename to that node's `reference_images` array in `schematic/citadel_schematic.json`.
4. Add a row to `CAMERA_MATCH.md` (below) recording what the frame actually establishes.
5. Re-run `python schematic/build.py` — the drawings, node register, slot checklist and viewer regenerate.

Keep captures to single frames or small crops for reference; do not mirror whole galleries or comic pages (see `IMAGE_REFERENCE_INDEX.md`).

## CAMERA_MATCH.md row format

| Image | Node(s) | State | View | Anchor object (SA-xx) | Ratio measured | Geometry fact established | Placement change | Confidence |
|---|---|---|---|---|---|---|---|---|
| S03E07_0412_LM-CAFE-SANCHEZ_1.png | LM-CAFE-SANCHEZ, CIRC-RING-2 | DS-03 | street | SA-01 Rick height | door : Rick = 1.15 | storefront on a road with curbside taxi lane; ~2 lanes | none yet | B |

Only a row with a **Geometry fact established** and a named anchor can promote a node from PLACEHOLDER → PROVISIONAL → ANCHORED. Two independent frames agreeing are needed to reach LOCKED (see `MEASUREMENT_FRAMEWORK.md`).

## Priority order for capture

The nodes below unlock the most downstream geometry. Do these first.

1. **DOME-P / SHELL-LOWER-BODY / DOME-S1..MB** — any wide exterior (S01E10, S03E01, S05E10). Sets the dome:body ratio, dome profile and secondary-dome count; everything else is positioned relative to these.
2. **LM-CENTRAL-PLAZA / LM-PRESIDENTIAL-BUILDING / CIRC-TRAM-PLAZA** — S05E10 collapse sequence. The only frames that show several anchored nodes together.
3. **UG-DIM-DRIVE / UG-LAUNCH-CHAMBER / UG-EXIT-CHUTE** — S05E10 drive chamber + S06E01 ruins. Fixes the underground stack.
4. **IF-MORTYBURG / DOME-MB / CIRC-RAIL-MB-SPUR** — S05E10 disengagement. Fixes the only detachable interface.
5. **S03E07 street montage** — sets road:car:person ratios for every street in the model.
6. Individual landmarks (Simple Rick's, Academy, Police, Wishing Portal, farm, Mortytown storefronts).
