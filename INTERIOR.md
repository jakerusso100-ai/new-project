# Interior — glass, decks, city, transit, underground

What the viewer now builds inside the shell, element by element, with the evidence each one rests on. Everything in this file is **generated fill**: it is derived from the schematic's districts, height envelope and deck stack (`schematic/citadel_schematic.json`) and the evidence registers, not traced from a frame. Generated fill inherits the placement class of the district it sits in and is labelled GENERATED in the viewer's inspector. The generator is `schematic/viewer/interior.js`; it is deterministic (seed in `procedural.seed`).

## Glazing

- **Main lens** rendered as glass (transmissive, 32 % opaque) over the STL profile: apex +0.292 R (584 m), r = 0.83 at +0.15.
- **Eight meridian ribs** — the segment seams in the STL and the exterior frame (#23) — drawn as heavy dark structural ribs because the plaza frames (#14, #15) show massive dark ribs overhead from inside.
- **Apex hub** r 0.20 R (STL top section).
- **Equatorial rim** with 24 cyan light strips (#23 rim lights).
- Pods get the same treatment at 0.592 scale.

## Decks and levels

- **Main deck plate** on the equatorial plane.
- **Four sub-deck floors** (DK−1 … DK−4 in `deck_stack`) at −20 / −60 / −100 / −160 m, each bounded by the lower hull's ellipse so they shrink toward the rim, with six service cores linking them. Contents per level are in `SCALE_1_TO_1.md` §Levels.
- **Under-hub ceilings**: cave-base ceiling at −0.105 R, cave floor / Drive ceiling at −0.22 R.
- Visible in cut-away mode (the shell hides them otherwise).

## Streets

- Three ring roads (r 0.3 / 0.6 / 0.9) with sidewalks, eight radial avenues, the plaza paving (r 0.16) and its edge. Counts are modelling conventions (`CIRC-*` nodes, PROVISIONAL); named streets exist (S03E07 "Fifth and Burp") but not their geometry.
- Arm decks carry a road to each pod.

## City blocks (procedural)

Blocks are placed on a polar grid (step 0.045 R ≈ 90 m) between the roads, skipping landmark footprints and the plaza. Family per district, all heights clipped to 95 % of the glass envelope at that radius:

| District | Evidence | Family |
|---|---|---|
| Civic core | S05E10 plaza, #02 spire cluster, #12 | towers 35–90 % of the envelope (up to ≈ 520 m), half of them round, some with spires |
| Commercial ring | S03E07 streets (#02), Cafe Sanchez, newsroom | mixed mid/high-rise 25–60 % |
| Rick residential (placeholder district) | stratification evidence only | rounded low/mid-rise with trees |
| East Sanchez Heights | named on Citadel Morning News | mid/high-rise |
| Industrial | Simple Rick's, Wishing Portal | large low sheds with stacks |
| Mortytown | S03E07 streets, Morty Mart, Creepy Morty | dense low-rise, 30–80 m |
| Agricultural | MegaFruit farm | no blocks: fields, water, trees, farmhouse |
| Construction (DS-02/03) | S03E07 skyscraper rebuild | mid-rise with orange scaffolding |
| Unassigned rim sectors | — | generic mid-rise |

Result: ≈ 2,000 blocks in the main body plus each pod. Density and heights are conventions; the *gradient* — tallest at the centre, lowest at the rim — is forced by the lens and matches where the evidence already places Mortytown and the farm.

## Landmarks (detail models)

Replacing the block-out boxes: the central monument spire with plinth (S01E10, #14/#15); the five-spire cluster with cyan strips (#02); the Presidential Building with a glazed drum on top (#12); the domed plaza building (#14/#15); Council Hall with grand stair, banners and turret (#24); Simple Rick's shed with stacks and the glass Flavor Core cylinder (#18); the Wishing Portal compound wall with the glowing pit (S03E07); the farm's fields, pond and farmhouse; the plaza pond (S01E10, #15). Other landmarks keep their boxes with a cyan sign strip.

## Transit

- Elevated rail loop at +0.05 R with 45 columns and a lit guide rail (S03E07 train; #02 elevated tube).
- Plaza tramway ring with columns (#14/#15 curved cyan tracks).
- Three atrium walkway tiers at +0.04 / +0.08 / +0.12 R — shown only in DS-01/02 (S01E10, #01); the late Citadel replaced them with the tracks.
- Two faint hover lanes at +0.07 R (S03E07 flying traffic).

## Underground

- Cave-base cavern wall with the glowing central vat (S05E10).
- Dimensional Drive void with the long suspended walkway and the portal-array display beside the existing control enclosure and Phoenix vats (#13).

## Pods

Each pod repeats the shell (glass, ribs, hub, rim lights), a deck, a ring road, a small plaza and procedural blocks at 0.592 scale. `DOME-MB` (Mortyburg, B) uses the Mortytown family.

## What this is not

Not a floor plan. No individual generated block corresponds to anything seen on screen; only the landmarks and the district assignments do. When a frame shows a specific block, add it as a node and the generator will skip its footprint.
