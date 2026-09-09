# Image Slots (generated from `citadel_schematic.json`)

Drop frame captures into `reference_images/` named `<EPISODE>_<mmss>_<NODE-ID>_<n>.png` (e.g. `S03E07_0412_LM-CAFE-SANCHEZ_1.png`),
then add the filename to that node's `reference_images` array in the JSON and re-run `python schematic/build.py`.
Each image should also get a row in `reference_images/CAMERA_MATCH.md` (see template there).

| Node | Placement | Required shots | Images logged |
|---|---|---|---|
| `SHELL-DRUM` Central drum (city deck and wall) | LOCKED | - [ ] S01E10 exterior<br>- [ ] S05E10 wide shots | reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons)<br>reference_images/EXTERIOR_FIT_23.md (numeric camera + geometry fit to #23)<br>reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view) |
| `SHELL-UNDERHUB` Under-hub (keel mount block) | ANCHORED | - [ ] any exterior from below | reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons)<br>reference_images/EXTERIOR_FIT_23.md (numeric camera + geometry fit to #23)<br>reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view) |
| `KEEL-FIN-1` Keel fin 1 | ANCHORED | - [ ] exterior from below<br>- [ ] S05E10 tilting wide shot | reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons)<br>reference_images/EXTERIOR_FIT_23.md (numeric camera + geometry fit to #23)<br>reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view) |
| `KEEL-FIN-2` Keel fin 2 | ANCHORED | - [ ] exterior from below<br>- [ ] S05E10 tilting wide shot | reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons)<br>reference_images/EXTERIOR_FIT_23.md (numeric camera + geometry fit to #23)<br>reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view) |
| `KEEL-FIN-3` Keel fin 3 | ANCHORED | - [ ] exterior from below<br>- [ ] S05E10 tilting wide shot | reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons)<br>reference_images/EXTERIOR_FIT_23.md (numeric camera + geometry fit to #23)<br>reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view) |
| `SHELL-LOWER-BODY` Keel energy blade | ANCHORED | - [ ] S01E10 exterior establishing<br>- [ ] S03E01 damaged exterior<br>- [ ] S05E10 tilting/explosion wide shot | reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons)<br>reference_images/EXTERIOR_FIT_23.md (numeric camera + geometry fit to #23)<br>reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view)<br>reference_images/CITADEL_IMAGE_GALLERY.md#04 (S05E10 founding hologram) |
| `SHELL-PLATES` Drum rim plating | PLACEHOLDER | - [ ] S01E10 exterior establishing<br>- [ ] S03E01 damaged exterior | reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view)<br>reference_images/CITADEL_IMAGE_GALLERY.md#04 (S05E10 founding hologram) |
| `SHELL-UNDERSIDE` Blade exit aperture | ANCHORED | - [ ] S05E10 spacecraft exit shot<br>- [ ] S06E01 ruin exterior approach | reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view)<br>reference_images/CITADEL_IMAGE_GALLERY.md#04 (S05E10 founding hologram) |
| `ARM-S1` Radial arm to DOME-S1 | ANCHORED | - [ ] any exterior frame showing an arm<br>- [ ] S05E10 disengagement exterior | reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons)<br>reference_images/EXTERIOR_FIT_23.md (numeric camera + geometry fit to #23)<br>reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view)<br>reference_images/CITADEL_IMAGE_GALLERY.md#04 (S05E10 founding hologram) |
| `ARM-S2` Radial arm to DOME-S2 | ANCHORED | - [ ] any exterior frame showing an arm<br>- [ ] S05E10 disengagement exterior | reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons)<br>reference_images/EXTERIOR_FIT_23.md (numeric camera + geometry fit to #23)<br>reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view)<br>reference_images/CITADEL_IMAGE_GALLERY.md#04 (S05E10 founding hologram) |
| `ARM-MB` Radial arm to DOME-MB | ANCHORED | - [ ] any exterior frame showing an arm<br>- [ ] S05E10 disengagement exterior | reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons)<br>reference_images/EXTERIOR_FIT_23.md (numeric camera + geometry fit to #23)<br>reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view)<br>reference_images/CITADEL_IMAGE_GALLERY.md#04 (S05E10 founding hologram) |
| `DOME-P` Principal transparent dome | LOCKED | - [ ] S01E10 exterior establishing<br>- [ ] S03E01 damaged exterior<br>- [ ] S05E10 wide shots | reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons)<br>reference_images/EXTERIOR_FIT_23.md (numeric camera + geometry fit to #23)<br>reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view)<br>reference_images/CITADEL_IMAGE_GALLERY.md#04 (S05E10 founding hologram)<br>reference_images/CITADEL_IMAGE_GALLERY.md#01 (S01E10 arrival plaza)<br>reference_images/CITADEL_IMAGE_GALLERY.md#14 (S05E10 plaza destruction wide)<br>reference_images/CITADEL_IMAGE_GALLERY.md#15 (S05E10 plaza destruction ground) |
| `DOME-S1` Secondary dome 1 | ANCHORED | - [ ] S01E10 exterior establishing<br>- [ ] S05E10 wide shots<br>- [ ] any aerial view | reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons)<br>reference_images/EXTERIOR_FIT_23.md (numeric camera + geometry fit to #23)<br>reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view)<br>reference_images/CITADEL_IMAGE_GALLERY.md#04 (S05E10 founding hologram) |
| `DOME-S2` Secondary dome 2 | ANCHORED | - [ ] as DOME-S1 | reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons)<br>reference_images/EXTERIOR_FIT_23.md (numeric camera + geometry fit to #23)<br>reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view)<br>reference_images/CITADEL_IMAGE_GALLERY.md#04 (S05E10 founding hologram) |
| `DOME-MB` Mortyburg dome (detachable section) | ANCHORED | - [ ] S05E10 disengagement exterior<br>- [ ] S05E10 boosters firing<br>- [ ] S05E10 train arrival interior<br>- [ ] S06E01 stranded-section exterior | reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons)<br>reference_images/EXTERIOR_FIT_23.md (numeric camera + geometry fit to #23)<br>reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view)<br>reference_images/CITADEL_IMAGE_GALLERY.md#04 (S05E10 founding hologram) |
| `DOME-P-HUB` Central hub cap on the main dome | ANCHORED | - [ ] any exterior | reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view) |
| `DOME-S1-HUB` Hub cap on DOME-S1 | ANCHORED | - [ ] any exterior | reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view) |
| `DOME-S2-HUB` Hub cap on DOME-S2 | ANCHORED | - [ ] any exterior | reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view) |
| `DOME-MB-HUB` Hub cap on DOME-MB | ANCHORED | - [ ] any exterior | reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view) |
| `PROP-PANEL-MAST` Panel / antenna mast on a pod | PLACEHOLDER | - [ ] any exterior | reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view) |
| `CIRC-RING-1` Inner circumferential road | PROVISIONAL | - [ ] S03E07 aerial/street montage<br>- [ ] S05E10 plaza-flood aerial | _none yet_ |
| `CIRC-RING-2` Middle circumferential road | PROVISIONAL | - [ ] as CIRC-RING-1 | _none yet_ |
| `CIRC-RING-3` Outer circumferential road | PROVISIONAL | - [ ] as CIRC-RING-1 | _none yet_ |
| `CIRC-RADIALS` Radial avenues (8) | PROVISIONAL | - [ ] S03E07 street montage<br>- [ ] any aerial view | _none yet_ |
| `CIRC-5TH-BURP` Fifth and [Burp] Avenue intersection | PROVISIONAL | - [ ] S03E07 police dispatch / Mortytown street | _none yet_ |
| `CIRC-RAIL-LOOP` Commuter rail loop | PROVISIONAL | - [ ] S03E07 train commute exterior<br>- [ ] S05E10 tramway flood<br>- [ ] S05E10 train to Mortyburg | _none yet_ |
| `CIRC-RAIL-MB-SPUR` Rail spur to Mortyburg | PROVISIONAL | - [ ] S05E10 train to Mortyburg interior/exterior | _none yet_ |
| `CIRC-TRAM-PLAZA` Plaza tramway | ANCHORED | - [ ] S05E10 plaza flood sequence | reference_images/CITADEL_IMAGE_GALLERY.md#14 (S05E10 plaza destruction wide)<br>reference_images/CITADEL_IMAGE_GALLERY.md#15 (S05E10 plaza destruction ground) |
| `CIRC-HOVER-BAND` Hover / flying traffic band | PROVISIONAL | - [ ] S03E07 city montage with flying cars<br>- [ ] S03E07 taxi pickup at Cafe Sanchez | _none yet_ |
| `CIRC-MANHOLE` Manhole / sewer access near plaza | ANCHORED | - [ ] S05E10 manhole descent | _none yet_ |
| `SYS-PORTAL-SUPPLY` Citywide portal supply network | UNPLACED | - [ ] S05E10 portal-supply failure sequence | _none yet_ |
| `SYS-TAXI` Hover taxi service | UNPLACED | - [ ] S03E07 taxi pickup | _none yet_ |
| `DIST-CIVIC-CORE` Civic / government core | ANCHORED | - [ ] S05E10 plaza exterior<br>- [ ] S01E10 Council approach | _none yet_ |
| `DIST-COMMERCIAL-RING` Commercial / high-rise ring | PROVISIONAL | - [ ] S03E07 skyline montage<br>- [ ] S03E07 skyscraper reconstruction | reference_images/CITADEL_IMAGE_GALLERY.md#02 (S03E07 streetscape) |
| `DIST-RICK-RESIDENTIAL` High-status Rick residential | PLACEHOLDER | - [ ] any residential exterior | _none yet_ |
| `DIST-EAST-SANCHEZ-HEIGHTS` East Sanchez Heights | PLACEHOLDER | - [ ] S03E07 Citadel Morning News graphic | _none yet_ |
| `DIST-INDUSTRIAL` Industrial sector | PROVISIONAL | - [ ] S03E07 factory exterior<br>- [ ] S03E07 Wishing Portal approach | _none yet_ |
| `DIST-MORTYTOWN` Mortytown | PLACEHOLDER | - [ ] S03E07 Mortytown streets<br>- [ ] S03E07 alley graffiti<br>- [ ] S03E07 Morty Mart exterior<br>- [ ] S03E07 Creepy Morty exterior | _none yet_ |
| `DIST-BIG-MORTY` Big Morty criminal territory | PLACEHOLDER | - [ ] S03E07 Big Morty interior/exterior | _none yet_ |
| `DIST-AGRICULTURAL` Agricultural edge (MegaFruit farm) | PROVISIONAL | - [ ] S03E07 farm wide shot<br>- [ ] S03E07 Farmer Rick and robot dog | _none yet_ |
| `DIST-CONSTRUCTION` Post-Rickshank construction zones | PLACEHOLDER | - [ ] S03E07 opening reconstruction montage<br>- [ ] S03E01 damaged Citadel | _none yet_ |
| `DIST-DOWNTOWN-RICKVILLE` Downtown Rickville (comic) | UNPLACED | - [ ] Council of Ricks #1 street panels | _none yet_ |
| `LM-CENTRAL-PLAZA` Central plaza | ANCHORED | - [ ] S05E10 plaza before flood<br>- [ ] S05E10 plaza flood | reference_images/CITADEL_IMAGE_GALLERY.md#01 (S01E10 arrival plaza) |
| `LM-CENTRAL-MONUMENT` Central monument tower (Rick statue) | ANCHORED | - [ ] S01E10 arrival wide<br>- [ ] S01E10 reverse angle | reference_images/CITADEL_IMAGE_GALLERY.md#01 (S01E10 arrival plaza)<br>reference_images/CITADEL_IMAGE_GALLERY.md#14 (S05E10 plaza destruction wide)<br>reference_images/CITADEL_IMAGE_GALLERY.md#15 (S05E10 plaza destruction ground) |
| `CIRC-CORE-WALKWAYS` Elevated curved walkways around the core | PROVISIONAL | - [ ] S01E10 arrival wide<br>- [ ] S01E10 atrium ceiling | reference_images/CITADEL_IMAGE_GALLERY.md#01 (S01E10 arrival plaza) |
| `LM-CORE-WATER` Atrium water feature and rock garden | PROVISIONAL | - [ ] S01E10 arrival wide | reference_images/CITADEL_IMAGE_GALLERY.md#01 (S01E10 arrival plaza)<br>reference_images/CITADEL_IMAGE_GALLERY.md#15 (S05E10 plaza destruction ground) |
| `LM-SPIRE-CLUSTER` Central spire cluster (DS-03 skyline) | PROVISIONAL | - [ ] S03E07 skyline montage<br>- [ ] S03E07 street reverse | reference_images/CITADEL_IMAGE_GALLERY.md#02 (S03E07 streetscape) |
| `CIRC-ELEVATED-TUBE` Elevated transit tube crossing the street | PROVISIONAL | - [ ] S03E07 street wide<br>- [ ] S03E07 train exterior | reference_images/CITADEL_IMAGE_GALLERY.md#02 (S03E07 streetscape) |
| `LM-PRESIDENTIAL-BUILDING` Presidential Building | PROVISIONAL | - [ ] S05E10 Presidential Building exterior<br>- [ ] S05E10 exit sequence | reference_images/CITADEL_IMAGE_GALLERY.md#12 (S05E10 Presidential dining room) |
| `LM-PLAZA-DOME-BUILDING` Domed building at the plaza edge | PROVISIONAL | - [ ] S05E10 plaza wide<br>- [ ] S05E10 plaza reverse | reference_images/CITADEL_IMAGE_GALLERY.md#14 (S05E10 plaza destruction wide)<br>reference_images/CITADEL_IMAGE_GALLERY.md#15 (S05E10 plaza destruction ground)<br>reference_images/CITADEL_IMAGE_GALLERY.md#12 (S05E10 Presidential dining room) |
| `LM-COUNCIL-HALL` Council Hall (Council of Ricks) | PROVISIONAL | - [ ] S01E10 Council chamber interior<br>- [ ] S01E10 Council approach<br>- [ ] S03E01 Council/security areas | reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#24 (S01E10 civic building entrance) |
| `LM-COUNCIL-CHAMBER` Council chamber (interior) | PROVISIONAL | - [ ] S01E10 Council chamber wide<br>- [ ] S01E10 Council chamber reverse | reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#26 (S03E01 Council hall)<br>reference_images/CITADEL_IMAGE_GALLERY.md#06 (S01E10 Council chamber) |
| `LM-SHADOW-COUNCIL-HALL` Shadow Council Hall | PLACEHOLDER | - [ ] S03E07 Shadow Council interior | _none yet_ |
| `LM-COURTHOUSE` Courthouse / judicial facility | PLACEHOLDER | - [ ] any courtroom frame | _none yet_ |
| `LM-MORTY-AGENCY` Morty Agency | PLACEHOLDER | - [ ] S07E05 Agency exterior<br>- [ ] S07E05 reception/database interior | _none yet_ |
| `LM-MILITIA-HQ` Citadel militia / SEAL Team Ricks base | PLACEHOLDER | - [ ] S01E10 / S03E01 security areas | reference_images/CITADEL_IMAGE_GALLERY.md#20 (S01E10 security corridor) |
| `LM-POLICE-HQ` Citadel Police HQ and Academy | PROVISIONAL | - [ ] S03E07 shooting range<br>- [ ] S03E07 cruisers leaving<br>- [ ] S03E07 police exterior | _none yet_ |
| `LM-SHOOTING-RANGE` Police Academy shooting range | PROVISIONAL | - [ ] S03E07 shooting range | _none yet_ |
| `LM-MORTY-ACADEMY` Morty Academy | PROVISIONAL | - [ ] S03E07 Academy entrance<br>- [ ] S03E07 locker corridor<br>- [ ] S03E07 classroom<br>- [ ] S03E07 locked entrance (regime change) | _none yet_ |
| `LM-SIMPLE-RICKS` Simple Rick's Wafer Cookie Factory | PROVISIONAL | - [ ] S03E07 factory exterior<br>- [ ] S03E07 assembly line<br>- [ ] S03E07 Flavor Core<br>- [ ] S03E07 SWAT breach | _none yet_ |
| `LM-FLAVOR-CORE` Flavor Core chamber | PROVISIONAL | - [ ] S03E07 Flavor Core interior<br>- [ ] S03E07 breach | reference_images/CITADEL_IMAGE_GALLERY.md#18 (S03E07 Flavor Core) |
| `LM-WISHING-PORTAL` Wishing Portal compound | PROVISIONAL | - [ ] S03E07 approach to wall<br>- [ ] S03E07 gate breach<br>- [ ] S03E07 portal reveal | _none yet_ |
| `LM-WASTE-PLANT` Waste Disposal Plant | PLACEHOLDER | - [ ] any | _none yet_ |
| `LM-AIRLOCK-PODS` Body-disposal airlock pods | PLACEHOLDER | - [ ] S03E07 pod loading<br>- [ ] S03E07 bodies-in-space exterior | _none yet_ |
| `LM-MEGAFRUIT-FARM` MegaFruit farm | PROVISIONAL | - [ ] S03E07 farm wide<br>- [ ] S03E07 farmhouse | _none yet_ |
| `LM-CAFE-SANCHEZ` Cafe Sanchez | PLACEHOLDER | - [ ] S03E07 Cafe Sanchez exterior / taxi | _none yet_ |
| `LM-NEWSROOM` Citadel Morning News studio | PLACEHOLDER | - [ ] S03E07 newsroom interior | _none yet_ |
| `LM-SKYSCRAPER-REBUILD` Skyscraper under reconstruction | PLACEHOLDER | - [ ] S03E07 skyscraper rebuild | _none yet_ |
| `LM-MORTY-MART` Morty Mart | PLACEHOLDER | - [ ] S03E07 Morty Mart exterior<br>- [ ] S03E07 interior | _none yet_ |
| `LM-CREEPY-MORTY` The Creepy Morty | PLACEHOLDER | - [ ] S03E07 Creepy Morty exterior | _none yet_ |
| `LM-MORTYTOWN-RESIDENCE` Mortytown residential interior (crib scene) | PLACEHOLDER | - [ ] S03E07 crib interior | _none yet_ |
| `LM-MORTY-DAY-CARE` Morty Day Care | PLACEHOLDER | - [ ] any | _none yet_ |
| `LM-MORTY-GAMES` Morty Games | PLACEHOLDER | - [ ] any | _none yet_ |
| `LM-MORTY-INSURANCE` Morty Insurance | PLACEHOLDER | - [ ] any | _none yet_ |
| `LM-SALTY-RICK` The Salty Rick | PLACEHOLDER | - [ ] any | _none yet_ |
| `LM-BIG-RICKS-GUMBO` Big Rick's Gumbo Hutch | PLACEHOLDER | - [ ] any | _none yet_ |
| `LM-REBUILD-A-MORTY` Re-Build-A-Morty | PLACEHOLDER | - [ ] S05E10 Re-Build-A-Morty exterior | reference_images/CITADEL_IMAGE_GALLERY.md#11 (S05E10 Re-Build-A-Morty) |
| `LM-RICKINGHAM-PALACE` Rickingham Palace (comic) | UNPLACED | - [ ] Council of Ricks #1 palace panels | _none yet_ |
| `PROP-BANNERS` Regime banners over Rick emblems | UNPLACED | - [ ] S03E07 banner montage | _none yet_ |
| `PROP-STREET-FURNITURE` Street furniture, signage, trees, fountains | UNPLACED | - [ ] S03E07 street montage | reference_images/CITADEL_IMAGE_GALLERY.md#15 (S05E10 plaza destruction ground) |
| `UG-SEWERS` Sewer / utility passages | PROVISIONAL | - [ ] S05E10 sewer interior | _none yet_ |
| `UG-PORTAL-FLUID` Portal-fluid production complex ('cave base') | PROVISIONAL | - [ ] S05E10 descent<br>- [ ] S05E10 central vat<br>- [ ] S05E10 worker area | _none yet_ |
| `UG-DIM-DRIVE` Dimensional Drive chamber | ANCHORED | - [ ] S05E10 Drive chamber wide<br>- [ ] S05E10 control enclosure<br>- [ ] S05E10 activation | reference_images/CITADEL_IMAGE_GALLERY.md#13 (S05E10 Central Finite Curve platform)<br>reference_images/CITADEL_IMAGE_GALLERY.md#17 (S05E10 rail cart) |
| `UG-CONTROL-ENCLOSURE` Glass-domed control enclosure | PROVISIONAL | - [ ] S05E10 control enclosure | reference_images/CITADEL_IMAGE_GALLERY.md#13 (S05E10 Central Finite Curve platform) |
| `UG-PHOENIX-VATS` Operation Phoenix vats | PROVISIONAL | - [ ] S05E10 vats | _none yet_ |
| `UG-LAUNCH-CHAMBER` Launch chamber (Evil Morty's spacecraft) | ANCHORED | - [ ] S05E10 spacecraft loading<br>- [ ] S06E01 ruined platforms and track<br>- [ ] S06E01 broken glass/piping | _none yet_ |
| `UG-EXIT-CHUTE` Spacecraft exit chute | ANCHORED | - [ ] S05E10 launch<br>- [ ] S06E01 track ruin | _none yet_ |
| `IF-MORTYBURG` Mortyburg attachment interface | PROVISIONAL | - [ ] S05E10 DISENGAGE control<br>- [ ] S05E10 entrance closing<br>- [ ] S05E10 separation exterior | reference_images/CITADEL_IMAGE_GALLERY.md#04 (S05E10 founding hologram) |
| `MB-THRUSTERS` Mortyburg boosters / thrusters | PROVISIONAL | - [ ] S05E10 boosters firing | _none yet_ |
| `RUIN-DEBRIS-FIELD` Post-destruction debris field | PROVISIONAL | - [ ] S06E01 approach<br>- [ ] S06E01 fragment hops<br>- [ ] S08E03 wreckage | _none yet_ |
| `RUIN-LAUNCH-CHAMBER` Ruined launch chamber | ANCHORED | - [ ] S06E01 chamber ruin | _none yet_ |
| `RUIN-BEACON` Summer's beacon on the ruins | PLACEHOLDER | - [ ] S06E01 beacon placement | _none yet_ |
| `NEW-CITADEL` New Citadel construction (Boss Hog Rick) | PROVISIONAL | - [ ] S08E03 New Citadel exterior<br>- [ ] S08E03 construction/lab interiors<br>- [ ] S08E03 destruction | reference_images/CITADEL_IMAGE_GALLERY.md#21 (S08E03 Boss Hog throne room) |

**87 images logged against 162 required shots.**