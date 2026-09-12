# Interior — glass, decks, city, transit, underground

What the viewer now builds inside the shell, element by element, with the evidence each one rests on. Everything in this file is **generated fill**: it is derived from the schematic's districts, height envelope and deck stack (`schematic/citadel_schematic.json`) and the evidence registers, not traced from a frame. Generated fill inherits the placement class of the district it sits in and is labelled GENERATED in the viewer's inspector. The generator is `schematic/viewer/interior.js`; it is deterministic (seed in `procedural.seed`).

## Glazing

**With the STL embedded (`index_mesh.html`)** the mesh's own triangles are classified into glazing (the upper lens of the main body and of each pod, minus the apex hubs — 34,463 triangles) and hull (48,017 triangles); only the glazing is rendered transparent, the hull is opaque and untouched. Nothing generated is added outside the mesh surface: the structural ribs and purlins run 0.009 R *inside* the glass, and the rim, rim lights and apex hub are drawn only in the standalone viewer that has no mesh. An automated check (`interior` objects vs. the STL lens profile and the measured arm section) reports zero generated elements outside the shell apart from the ribs, which are inside by construction.


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

## Detail added in v2.2

- Every generated block and every landmark is clipped to the **STL lens profile at its outer footprint edge** (not its centre), including anything on the roof — nothing pierces the glass. The hover-traffic envelope was trimmed to r 0.8 (the lens is only 0.05 R tall at r 0.95) and the rim storefronts moved inward to where the glass has headroom.
- Building families now include tiered setbacks, domed and spired roofs, rounded towers (the curved silhouettes of `BUILDING_FAMILIES.md`), cyan facade light strips (#02), magenta/cyan/yellow neon in Mortytown (Morty Mart), industrial stacks, scaffolding in the construction zone, and a wider pale-green/teal palette from the frames.
- Skybridges between close tall towers in the core (S01E10 elevated walkways, S03E07 elevated structures).
- Street lights along the ring roads, sidewalks on the radials, trees lining every avenue.
- Ring purlins on the glazing at r 0.45 and 0.75 in addition to the eight meridian ribs.
- Farm: fields, pond, farmhouse and five Mega Trees with fruit (S03E07).
- Transit: six station platforms and a moving commuter train on the loop; forty hover cars circulating on the two lanes (S03E07 flying traffic).
- Pods: six avenues, a centre spire, and the same block generator.
- Landmark name labels (toggle **labels**).
- Lighting: warm hemisphere light for the interior haze of #02/#14, ACES tone mapping.

## Transit

- Elevated rail loop at +0.05 R with 45 columns and a lit guide rail (S03E07 train; #02 elevated tube).
- Plaza tramway ring with columns (#14/#15 curved cyan tracks).
- Three atrium walkway tiers at +0.04 / +0.08 / +0.12 R — shown only in DS-01/02 (S01E10, #01); the late Citadel replaced them with the tracks.
- Two faint hover lanes at +0.07 R (S03E07 flying traffic).

## Underground

- Cave-base cavern wall with the glowing central vat (S05E10).
- Dimensional Drive void with the long suspended walkway and the portal-array display beside the existing control enclosure and Phoenix vats (#13).

## Arms (interior only)

The arm exterior is left exactly as the STL has it. Inside the lenticular section (measured from the STL: half-width 0.25 R at deck level, 0.20 at ±0.05, 0.14 at +0.08; underside −0.108, top +0.12–0.15) three enclosed levels are built, each sized to the section, visible through the end portals and in cut-away:

- **Upper gallery (+0.05 R, 100 m)** — floor on columns with hover-vehicle hangar bays along both flanks.
- **Through-concourse (0)** — the main deck continues into the arm: floor, road, walkway, ceiling lights, glazed window bands, and a lit portal in each end face (disc rim and pod rim). City, arm and pod decks are one continuous floor, which the S05E10 train to Mortyburg requires.
- **Service deck (−0.05 R)** — utilities, tanks, freight; `IF-MORTYBURG` (the disengage machinery) sits here under the root.

## Arm windows

Re-scanned the STL top surface on all three arms at r 1.30-1.70: the shoulders are a smooth slope mid-arm, but **from r ~1.45 to the pod there is a flat shelf at z = +0.033 R on both shoulders** (0.03 R wide at r 1.45, 0.08 R by r 1.70). That shelf is the recess the Printables render paints teal and where frame #23 shows the lit strips beside the pods. Six lit window panels per shoulder now lie flush on that shelf (r 1.47-1.72); the earlier row along the whole flank was removed because the STL has no recess mid-arm. Existence A (frame + STL recess), placement B (recess measured). Parameters in `arm_section.windows`. Toggle: **glass**.

## Layout audit (v2.4, 2026-09-12)

The block generator was rewritten so nothing intersects: blocks are packed into polar cells that are clipped exactly to the ring roads (road + sidewalk + 3 m clearance), the radial avenues, the rail loop band and every landmark footprint, and a block never leaves its cell (footprint <= cell minus margins, jitter limited to the slack). Mortytown cells subdivide 2x2 for its dense low-rise; industrial cells fill 85-95 % for the big sheds. Skybridges now only span the gap between towers in neighbouring cells, so they cannot cross a third block. `window.__auditInterior()` in the viewer re-tests the live scene: block/block (OBB separating-axis), block/road, block/rail, block/landmark, block/plaza, landmark/landmark, landmark/road and glass clearance. Its result is printed to the console on load.

Landmarks the audit caught overlapping the plaza, a road or a neighbour were re-slotted (all still PROVISIONAL/PLACEHOLDER; a clear slot is a convenience, not evidence): the civic buildings now sit on the 0.20-0.28 R annulus between the radial avenues (Courthouse 22.5 deg, Spire cluster 67.5, Presidential 112.5, Council Hall 157.5, domed plaza building 202.5, Militia HQ / Shadow Council 247.5 in their own eras, Morty Agency 292.5), rotated to face the plaza; the radial avenues start outside the plaza; the plaza tramway ring sits at r 0.19 between the plaza edge and the buildings; Police HQ, Morty Academy, Morty Mart, the Creepy Morty, Morty Day Care, Simple Rick's, the Flavor Core, the Wishing Portal, the Waste Plant and the farm were moved off the ring roads / radials they straddled. Added `LM-RICK-LASER-SCISSORS` (Council room, S03E01), which the location register had but the model lacked.

## Pods

Each pod repeats the shell (glass, ribs, hub, rim lights), a deck, a ring road, a small plaza and procedural blocks at 0.592 scale. `DOME-MB` (Mortyburg, B) uses the Mortytown family.

## What this is not

Not a floor plan. No individual generated block corresponds to anything seen on screen; only the landmarks and the district assignments do. When a frame shows a specific block, add it as a node and the generator will skip its footprint.
