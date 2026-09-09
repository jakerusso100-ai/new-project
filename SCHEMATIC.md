# Citadel of Ricks — Master Schematic (v1)

**Status:** first complete schematic built from every evidence register in this repository. It is the bridge between the research phase (100% complete) and the interactive 3D model: every reconstructable feature now has an ID, a layer, a vertical band, a state list, a normalized position, a placement-trust class, the evidence behind it, its unknowns, and the reference shots it still needs.

**Scope change:** the research-phase lock on schematic/3D output was lifted by the project owner on 2026-09-08. The evidence discipline is unchanged — the schematic does not convert a convenient assumption into canon; it gives every assumption a labelled slot so an image can overturn it.

## Deliverables

| File | What it is |
|---|---|
| `schematic/citadel_schematic.json` | **Single source of truth.** 74 nodes + units, coordinate system, bands, states, scale anchors, drawing list. Everything else is generated from it. |
| `schematic/build.py` | Validates the JSON and regenerates every derived file. `python schematic/build.py` |
| `schematic/drawings/*.svg` | Eight-drawing set: `TOP_MASTER`, `DISTRICT_MAP`, `TRANSIT_MASTER`, `SIDE_MASTER`, `FRONT_MASTER`, `SECTION_A`, `SECTION_B`, `STATE_COMPARISON`. |
| `schematic/NODE_REGISTER.md` | Generated table of all nodes plus per-node rationale/unknowns/sub-features. |
| `schematic/viewer/index.html` | Interactive 3D block-out (Three.js). State selector, layer and placement filters, click-to-inspect evidence. Open directly in a browser. |
| `reference_images/IMAGE_SLOTS.md` | Generated checklist of the frames each node is waiting for. |
| `reference_images/README.md` | Capture naming, camera-match log format, priority order. |

## 1. How to read the schematic

Two independent ratings are attached to every node. Do not collapse them.

**Existence confidence** (inherited from the research phase): A direct · B strong inference · C plausible · D speculative.

**Placement class** (new — how much the *position/size* deserves trust):

| Class | Meaning | Line style in drawings | Opacity in viewer |
|---|---|---|---|
| `LOCKED` | Geometry directly supported. Do not move without new direct evidence. | solid, heavy | solid |
| `ANCHORED` | Position follows from an explicit source relationship ("central plaza", "launched from the bottom"). | solid | solid |
| `PROVISIONAL` | Position is a reasoned inference (C). Expected to move once images are camera-matched. | dashed | translucent |
| `PLACEHOLDER` | Position is arbitrary (D). Exists only so the node has a slot. Must be re-placed from images. | dotted | ghosted |
| `UNPLACED` | No coordinates. Comic-only, prop scatter, or system with no visible routing. | — | not drawn |

Current census: 1 LOCKED · 9 ANCHORED · 30 PROVISIONAL · 28 PLACEHOLDER · 6 UNPLACED. That ratio is the honest state of the evidence: the show establishes *what exists* far better than *where it is*.

A node can be existence-A and placement-PLACEHOLDER (Cafe Sanchez: definitely exists, no idea which block). It cannot be existence-C and placement-LOCKED.

## 2. Coordinate system and units

- **Origin:** centre of the principal dome (`DOME-P`) at the surface-city ground plane.
- **Axes:** right-handed. +Z up through the dome apex. +X is nominal "east" (used once, for the East Sanchez Heights name-inference). +Y is 90° counter-clockwise from +X seen from above. Azimuth is measured CCW from +X.
- **Unit:** **1 U = radius of DOME-P.** Every length in the JSON, drawings and viewer is a multiple of U.
- **Absolute conversion:** `units.absolute_conversion` is `null` and stays null until a scale anchor is justified (§10). When set, metres = U × conversion. Changing it rescales the whole model without touching any topology — that is the point of normalizing.

Why the dome radius and not the overall diameter: the dome is the one mass that appears in nearly every exterior shot and is LOCKED. The overall diameter depends on the lower body's taper, which is PROVISIONAL.

## 3. Global massing (L0 / L1)

| Node | Placement | Envelope (U) | Basis |
|---|---|---|---|
| `DOME-P` principal transparent dome | LOCKED | hemisphere r = 1.00 | Defines the unit. Profile (full hemisphere vs. shallower cap) UNKNOWN — hemisphere is the default. |
| `SHELL-LOWER-BODY` lower metallic body | PROVISIONAL | tapered cylinder r 1.25 → 0.90, z 0 → −0.65 | Repeated exterior views show a lower mass larger than the upper city. Taper/depth chosen so every underground band fits inside. |
| `SHELL-PLATES` structural plates | PLACEHOLDER | 12 segments on the lower body | Plates exist (A); count is a modelling placeholder. |
| `SHELL-UNDERSIDE` hull underside | ANCHORED | disc r 0.90 at z −0.65 with aperture at (0, −0.20) | The spacecraft is launched from the bottom, so there is an aperture on the chute axis. |
| `DOME-S1`, `DOME-S2` secondary domes | PLACEHOLDER | hemispheres r 0.35 on a 1.30 U ring at az 0°, 120° | "Three smaller domed districts" is a secondary-source count. Equal spacing is a placeholder. District assignment UNKNOWN (C-002). |
| `DOME-MB` Mortyburg | PROVISIONAL | hemisphere r 0.35 at az 240°, body depth 0.20 | Detachable domed section (A). Placed on the rim because it must have an exterior face to separate through. Working hypothesis: it is the third secondary dome (C). |

**Ratio the images must settle first:** dome radius : lower-body radius : lower-body depth : secondary-dome radius. Currently 1 : 1.25 : 0.65 : 0.35. One clean exterior frame from S01E10 or S05E10 with the dome and body both visible re-fixes all four.

## 4. Vertical stack

The Citadel is not one city plane. Eight bands, from the top down (all z in U, all PROVISIONAL):

| Band | z range | Contents | Nodes |
|---|---|---|---|
| V+3 dome apex | +0.60 → +1.00 | UNKNOWN / NOT SHOWN | — |
| V+2 hover band | +0.06 → +0.30 | flying taxis, private flying cars, elevated structures | `CIRC-HOVER-BAND`, rail if elevated |
| V+1 building volume | 0 → +0.60 | skyline; tallest towers capped at 0.6 U so they clear the dome | all L4 boxes |
| V0 ground plane | 0 | streets, sidewalks, plaza, farm terrain | rings, radials, `LM-CENTRAL-PLAZA`, `LM-MEGAFRUIT-FARM` |
| V−1 subsurface service | −0.02 → −0.08 | sewers (person-sized), manholes, conduits, Mortyburg interface underside | `UG-SEWERS`, `CIRC-MANHOLE` |
| V−2 portal-fluid "cave base" | −0.12 → −0.30 | underground production, containers, large central vat, deformed-Morty work areas | `UG-PORTAL-FLUID` |
| V−3 Dimensional Drive / launch | −0.25 → −0.45 | drive core, glass-domed control enclosure, Operation Phoenix vats, launch platforms and track | `UG-DIM-DRIVE`, `UG-CONTROL-ENCLOSURE`, `UG-PHOENIX-VATS`, `UG-LAUNCH-CHAMBER` |
| V−4 exit chute / hull | −0.45 → −0.65 | spacecraft exit chute to the hull aperture | `UG-EXIT-CHUTE`, `SHELL-UNDERSIDE` |

Band boundaries are conventions chosen so the S05E10 descent order (city → manhole → sewers → portal-fluid cave → Drive → chute → space) reads top-to-bottom. The *order* is source-established; the *depths* are not. See `SECTION_A.svg` / `SECTION_B.svg`.

## 5. Plan organisation (L2 / L3)

The plan uses a radial/circumferential skeleton because several views show circular organisation (B). Three rings at r = 0.30 / 0.60 / 0.90 and eight radials are **conventions** — no frame gives a count.

### District sectors and why they sit where they sit

| Sector | Placement | r / azimuth (U / °) | Placement logic (this is the part an image should overturn) |
|---|---|---|---|
| `DIST-CIVIC-CORE` | ANCHORED | 0–0.30, all | Central plaza and Presidential Building appear together in the S05E10 collapse; government clusters around the plaza. |
| `DIST-COMMERCIAL-RING` | PROVISIONAL | 0.30–0.60, all | Densest high-rise fabric between the core and the outer districts; Cafe Sanchez, newsroom, storefronts live here. |
| `DIST-INDUSTRIAL` | PROVISIONAL | 0.60–0.98, 90–160 | Simple Rick's and the Wishing Portal compound need big floor plates and connections down into the lower body → rim. |
| `DIST-MORTYTOWN` | PLACEHOLDER | 0.55–0.95, 190–260 | Lower-status/edge inference (C). **Not** Mortyburg (C-003); it is next to the Mortyburg interface only as a modelling convenience. |
| `DIST-BIG-MORTY` | PLACEHOLDER | 0.70–0.90, 215–245 | Criminal economy shown inside Mortytown. |
| `DIST-AGRICULTURAL` | PROVISIONAL | 0.72–0.98, 270–325 | Farm-at-edge evidence; open land reads correctly at the rim under the dome. |
| `DIST-EAST-SANCHEZ-HEIGHTS` | PLACEHOLDER | 0.60–0.95, 330–30 | Placed on +X **only** because of the word "East". |
| `DIST-RICK-RESIDENTIAL` | PLACEHOLDER | 0.60–0.95, 30–90 | Stratification is documented; a discrete wealthy district is inferred, opposite Mortytown. Existence only C. |
| `DIST-CONSTRUCTION` | PLACEHOLDER | 0.35–0.60, 150–195 | DS-02/DS-03 overlay only. Where the Rickshank damage fell is UNKNOWN. |
| `DIST-DOWNTOWN-RICKVILLE` | UNPLACED | — | Comic-only (C-008). |

See `DISTRICT_MAP.svg`.

### Landmarks by district

**Civic core:** `LM-CENTRAL-PLAZA` (ANCHORED, origin) · `LM-PRESIDENTIAL-BUILDING` (PROVISIONAL, plaza edge, tallest civic mass) · `LM-COUNCIL-HALL` + `LM-COUNCIL-CHAMBER` (DS-01/02 only) · `LM-SHADOW-COUNCIL-HALL` (separate node, C-004) · `LM-COURTHOUSE` · `LM-MORTY-AGENCY` · `LM-MILITIA-HQ` (DS-01/02).

**Commercial ring:** `LM-CAFE-SANCHEZ` · `LM-NEWSROOM` · `LM-SALTY-RICK` · `LM-BIG-RICKS-GUMBO` · `LM-MORTY-INSURANCE` · `LM-REBUILD-A-MORTY` · `LM-SKYSCRAPER-REBUILD` (DS-03).

**Between core and Mortytown:** `LM-POLICE-HQ` + `LM-SHOOTING-RANGE` (short patrol routes to "Fifth and Burp") · `LM-MORTY-ACADEMY` (Morty-serving, inner Mortytown edge).

**Mortytown:** `CIRC-5TH-BURP` · `LM-MORTY-MART` · `LM-CREEPY-MORTY` · `LM-MORTYTOWN-RESIDENCE` · `LM-MORTY-DAY-CARE` · `LM-MORTY-GAMES`.

**Industrial rim:** `LM-SIMPLE-RICKS` + `LM-FLAVOR-CORE` · `LM-WISHING-PORTAL` (walled compound) · `LM-WASTE-PLANT` (kept separate; may be the same site) · `LM-AIRLOCK-PODS` (must penetrate the hull).

**Agricultural rim:** `LM-MEGAFRUIT-FARM`.

**Comic-only, unplaced:** `LM-RICKINGHAM-PALACE`.

## 6. Circulation (L2)

Five systems, kept separate because the evidence does not connect them (C-006 and the transport register):

| System | Nodes | Established | Unknown |
|---|---|---|---|
| Ground roads | `CIRC-RING-1/2/3`, `CIRC-RADIALS`, `CIRC-5TH-BURP` | roads, sidewalks, conventional cars, named intersections | count, widths, grid |
| Hover traffic | `CIRC-HOVER-BAND`, `SYS-TAXI` | flying taxis with curbside pickup, private flying cars | altitude, lanes |
| Rail | `CIRC-RAIL-LOOP`, `CIRC-TRAM-PLAZA`, `CIRC-RAIL-MB-SPUR` | commuter train (S03E07); plaza tramway and train to Mortyburg (S05E10) | whether these are one system; elevation (loop drawn at z +0.05 as a placeholder) |
| Portal | `SYS-PORTAL-SUPPLY` | citywide supply that can be hacked; personal portal travel | all routing |
| Underground access | `CIRC-MANHOLE`, `UG-SEWERS` | manhole at the plaza edge; person-sized sewers | map |

The Mortyburg spur is the only rail segment with a source-established endpoint at both ends (plaza area → `IF-MORTYBURG`). See `TRANSIT_MASTER.svg`.

## 7. Underground / industrial stack (L7)

The S05E10 descent is the spine of the whole lower model. In order:

1. `CIRC-MANHOLE` at the plaza edge (ANCHORED) → `UG-SEWERS` (V−1).
2. `UG-PORTAL-FLUID` cave base (V−2): large central vat, collection containers, forced labour. Offset 0.29 U from the axis so it does not collide with the Drive; the offset direction is arbitrary.
3. `UG-DIM-DRIVE` (V−3, ANCHORED on the axis): secondary sources call it central and its failure deforms the whole Citadel. Contains `UG-CONTROL-ENCLOSURE` (glass-domed, on a platform at the chamber edge) and `UG-PHOENIX-VATS` (six, ringed around the core — count is placeholder).
4. `UG-LAUNCH-CHAMBER` (ANCHORED, between Drive and chute): platforms with piping, launch track, glass panels, spacecraft cradle. Survives as `RUIN-LAUNCH-CHAMBER` in DS-06.
5. `UG-EXIT-CHUTE` (ANCHORED): vertical to `SHELL-UNDERSIDE`. Whether it is vertical or inclined is UNKNOWN.

`SECTION_A.svg` (Y = 0 plane) shows the Drive on the axis; `SECTION_B.svg` (X = 0 plane) shows the chute offset at y = −0.20 and the Mortyburg dome at the far end.

## 8. Mortyburg interface

`IF-MORTYBURG` (PROVISIONAL, on the DOME-P rim at az 240°): closing entrance/blast door, rail passing through, DISENGAGE control, structural release. `DOME-MB` beyond it; `MB-THRUSTERS` (three, underside — count placeholder) fire in DS-05/06. Attachment count, diameter and service connections are UNKNOWN. This is the only place where the schematic asserts a mechanical joint between two masses, and it does so because the disengagement sequence is direct evidence.

## 9. State variants

Every node carries a `states` list. The viewer's state selector and `STATE_COMPARISON.svg` hide anything not in the chosen state.

| State | What is present | What changes |
|---|---|---|
| DS-01 Early | shell, domes, core roads, Council Hall, militia HQ, industrial/civic districts | baseline |
| DS-02 Post-Rickshank | as DS-01 + `DIST-CONSTRUCTION` overlay | Council destroyed; building survival UNKNOWN (hall drawn through DS-02 only) |
| DS-03 Ricklantis | rebuilt city: rail loop, police, Academy, Mortytown, storefronts, farm, Wishing Portal, airlock pods, newsroom, Shadow Council, skyscraper rebuild, banners | densest state; most PLACEHOLDER nodes live here |
| DS-04 Late / President Morty | as DS-03 minus one-off S03E07 items, plus plaza, Presidential Building, tramway, manhole, Morty Agency, Re-Build-A-Morty, full underground stack | default drawing state |
| DS-05 Destruction | DS-04 during collapse; Mortyburg spur, interface and thrusters active; debris not yet | tilt/flood are animation, not geometry |
| DS-06 Solaricks ruins | `RUIN-DEBRIS-FIELD`, `RUIN-LAUNCH-CHAMBER`, `UG-EXIT-CHUTE`, `RUIN-BEACON`; `DOME-MB` displaced | nothing intact is drawn (C-009) |
| DS-07 New Citadel | debris + `NEW-CITADEL` envelope | separate architecture, not a restoration (C-010) |
| DS-08 New Citadel destroyed | debris only | — |

For the 3D model: build one scene, put each node in a collection, and drive visibility from the state list. Do not build eight scenes.

## 10. Scale anchors — how the model gets real units

Nothing in the source material gives an absolute Citadel dimension (`DIMENSIONAL_EVIDENCE_TABLE.md`). The route to metres is:

1. Pick a frame with a human-scale object and a structure in the same shot (`scale_anchors` in the JSON: Rick 1.85 m, Morty 1.6 m, door 2.1 m, car 4.5 m, manhole 0.6 m).
2. Record the ratio in `reference_images/CAMERA_MATCH.md` (structure : anchor).
3. Chain ratios upward: door → storefront → block → ring spacing → dome radius. Each hop needs its own frame.
4. Only when a chain reaches `DOME-P` set `units.absolute_conversion`. Everything rescales.

Expect the first chain to be rough (±50 %). That is fine — it is still better than a guess, and the schematic's topology does not change when the number does.

## 11. Image workflow and promotion rules

`reference_images/IMAGE_SLOTS.md` lists ~190 required shots across the 74 nodes. Promotion of a node's placement class requires:

- **PLACEHOLDER → PROVISIONAL:** one frame that shows the node in relation to any ANCHORED/LOCKED node or to a named district.
- **PROVISIONAL → ANCHORED:** one frame that fixes its position relative to an ANCHORED/LOCKED node unambiguously.
- **ANCHORED → LOCKED:** two independent frames (different episode or different camera) agreeing on the same relationship, per `MEASUREMENT_FRAMEWORK.md`.

A frame that *contradicts* the current placement is more valuable than one that confirms it — log it, move the node, note the old position in the node's `rationale`.

## 12. Drawing set

| Drawing | Projection | State | Purpose |
|---|---|---|---|
| `TOP_MASTER` | plan | DS-04 | everything with coordinates, labelled by ID |
| `DISTRICT_MAP` | plan | DS-03 | sectors and landmarks in the densest urban state |
| `TRANSIT_MASTER` | plan | DS-04 | rings, radials, rail, tram, hover band, manhole |
| `SIDE_MASTER` | elevation, horizontal = X | DS-04 | silhouette: dome, body, secondary domes |
| `FRONT_MASTER` | elevation, horizontal = Y | DS-04 | silhouette with Mortyburg at −Y |
| `SECTION_A` | section Y = 0 | DS-04 | dome + civic core + Drive on the axis; bands labelled |
| `SECTION_B` | section X = 0 | DS-04 | chute offset, launch chamber, Mortyburg interface |
| `STATE_COMPARISON` | 8 plan tiles | all | which nodes exist in which era |

All drawings share the grid (0.25 U rings, 30° spokes) and the legend. Re-generate after any JSON edit.

## 13. From schematic to interactive 3D model — the pipeline

The JSON is already a scene description. The viewer proves it: `schematic/viewer/index.html` builds meshes straight from the node geometry types (`hemisphere`, `cylinder`, `box`, `ring`, `sector`, `path`, `cavern`, `compound`, arrays…). The 3D model is the same data with real geometry swapped in per node.

Recommended build order once images start landing:

1. **Camera-match the exterior** (DOME-P, SHELL-LOWER-BODY, secondary domes). Fix the four massing ratios in §3. Everything else inherits.
2. **Block the vertical stack** from `SECTION_A/B` — a Blender collection per band.
3. **Lay the circulation skeleton** as curves (rings, radials, rail, tram). Roads are the reference grid for everything at V0.
4. **Replace landmark boxes one at a time**, highest placement class first. Keep the node ID as the object name so the inspector data stays linked.
5. **Instance building families** (`BUILDING_FAMILIES.md`) procedurally inside each district sector; do not hand-model filler.
6. **Underground last**, from the S05E10 descent frames, because it is the least visible and the most PROVISIONAL.
7. **States as collections**, toggled from the node `states` lists. Damage/ruin variants are separate objects, not edits to the intact ones.

Export path: Blender → glTF (one file, collections preserved) → the same Three.js viewer with real meshes. The inspector, filters and state selector carry over unchanged because they read the JSON, not the mesh.

## 14. Contradictions carried into the schematic (still open)

| ID | How the schematic handles it |
|---|---|
| C-001 scale/silhouette | normalized units; no absolute dimension anywhere |
| C-002 dome count vs districts | secondary domes PLACEHOLDER, none assigned to a district |
| C-003 Mortytown vs Mortyburg | separate nodes; adjacency is a stated convenience |
| C-004 Council Hall vs courthouse / Shadow Council | three separate nodes in the civic core |
| C-005 farm terminology | one farm node; terminology in evidence field |
| C-006 portal vs Drive | `SYS-PORTAL-SUPPLY`, `UG-PORTAL-FLUID`, `UG-DIM-DRIVE` are separate and unconnected |
| C-007 rebuilt vs late | DS-03 and DS-04 node lists differ; nothing assumed to persist without a state entry |
| C-008 comic vs show | comic nodes UNPLACED, tagged `COMIC-CANON` |
| C-009 ruins | ruin nodes are their own state; no intact geometry inferred from them |
| C-010 New Citadel | separate envelope, separate state |

## 15. What this schematic is not

It is not a floor plan, not a measured drawing, and not canon. It is a fully labelled slot system in which every slot knows how trustworthy it is and what evidence would change it. The interactive model built on top of it will only be as accurate as the images logged against it — which is exactly why the placement classes are visible in the viewer and not hidden in a spreadsheet.
