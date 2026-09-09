# Node Register (generated — do not edit; edit `citadel_schematic.json` and run `python schematic/build.py`)

95 nodes. Positions are in U (1 U = DOME-P radius). Placement class governs how much trust the position deserves.

| ID | Name | Kind | Layer | Bands | Exist. | Placement | States | Position (X,Y,Z) | Parent | Key evidence |
|---|---|---|---|---|---|---|---|---|---|---|
| `SHELL-DRUM` | Central lens — lower hull | shell | L0 | V0 V-1 | A | LOCKED | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | — | reference_models/STL_MEASUREMENTS.md (cross-sections of citadel_1_2_10_5.stl); reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons) |
| `SHELL-UNDERHUB` | Under-hub (keel mount block) | shell | L0 | V-2 V-3 | A | ANCHORED | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | SHELL-DRUM | reference_models/STL_MEASUREMENTS.md (cross-sections of citadel_1_2_10_5.stl); reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons) |
| `KEEL-FIN-1` | Keel fin 1 of 5 | shell | L0 | V-3 V-4 | A | ANCHORED | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.46,+0.34,-1.80 | SHELL-UNDERHUB | reference_models/STL_MEASUREMENTS.md (cross-sections of citadel_1_2_10_5.stl); reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior) |
| `KEEL-FIN-2` | Keel fin 2 of 5 | shell | L0 | V-3 V-4 | A | ANCHORED | DS-01 DS-02 DS-03 DS-04 DS-05 | -0.18,+0.54,-1.80 | SHELL-UNDERHUB | reference_models/STL_MEASUREMENTS.md (cross-sections of citadel_1_2_10_5.stl); reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior) |
| `KEEL-FIN-3` | Keel fin 3 of 5 | shell | L0 | V-3 V-4 | A | ANCHORED | DS-01 DS-02 DS-03 DS-04 DS-05 | -0.57,+0.00,-1.80 | SHELL-UNDERHUB | reference_models/STL_MEASUREMENTS.md (cross-sections of citadel_1_2_10_5.stl); reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior) |
| `KEEL-FIN-4` | Keel fin 4 of 5 | shell | L0 | V-3 V-4 | A | ANCHORED | DS-01 DS-02 DS-03 DS-04 DS-05 | -0.18,-0.54,-1.80 | SHELL-UNDERHUB | reference_models/STL_MEASUREMENTS.md (cross-sections of citadel_1_2_10_5.stl); reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior) |
| `KEEL-FIN-5` | Keel fin 5 of 5 | shell | L0 | V-3 V-4 | A | ANCHORED | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.46,-0.34,-1.80 | SHELL-UNDERHUB | reference_models/STL_MEASUREMENTS.md (cross-sections of citadel_1_2_10_5.stl); reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior) |
| `SHELL-LOWER-BODY` | Central spike (energy blade) | shell | L0 | V-3 V-4 | A | ANCHORED | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | — | reference_models/STL_MEASUREMENTS.md (cross-sections of citadel_1_2_10_5.stl); reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons) |
| `SHELL-PLATES` | Drum rim plating | shell | L0 | V+1 V0 V-1 | A | PLACEHOLDER | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | SHELL-DRUM | reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view); reference_images/CITADEL_IMAGE_GALLERY.md#04 (S05E10 founding hologram) |
| `SHELL-UNDERSIDE` | Blade exit aperture | shell | L0 | V-4 | B | ANCHORED | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,-1.40 | SHELL-LOWER-BODY | reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view); reference_images/CITADEL_IMAGE_GALLERY.md#04 (S05E10 founding hologram) |
| `ARM-S1` | Radial arm to DOME-S1 | shell | L0 | V+1 V0 V-1 | A | LOCKED | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | SHELL-LOWER-BODY | reference_models/STL_MEASUREMENTS.md (cross-sections of citadel_1_2_10_5.stl); reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons) |
| `ARM-S2` | Radial arm to DOME-S2 | shell | L0 | V+1 V0 V-1 | A | LOCKED | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | SHELL-LOWER-BODY | reference_models/STL_MEASUREMENTS.md (cross-sections of citadel_1_2_10_5.stl); reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons) |
| `ARM-MB` | Radial arm to DOME-MB | shell | L0 | V+1 V0 V-1 | A | LOCKED | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | SHELL-LOWER-BODY | reference_models/STL_MEASUREMENTS.md (cross-sections of citadel_1_2_10_5.stl); reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons) |
| `DOME-P` | Principal transparent dome | dome | L1 | V0 V+1 V+2 V+3 | A | LOCKED | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | — | reference_models/STL_MEASUREMENTS.md (cross-sections of citadel_1_2_10_5.stl); reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons) |
| `DOME-S1` | Secondary dome 1 | dome | L1 | V0 V+1 V-1 | B | LOCKED | DS-01 DS-02 DS-03 DS-04 DS-05 | +2.32,+0.00,+0.00 | — | reference_models/STL_MEASUREMENTS.md (cross-sections of citadel_1_2_10_5.stl); reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons) |
| `DOME-S2` | Secondary dome 2 | dome | L1 | V0 V+1 V-1 | B | LOCKED | DS-01 DS-02 DS-03 DS-04 DS-05 | -1.16,+2.01,+0.00 | — | reference_models/STL_MEASUREMENTS.md (cross-sections of citadel_1_2_10_5.stl); reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons) |
| `DOME-MB` | Mortyburg dome (detachable section) | dome | L1 | V0 V+1 V-1 | A | LOCKED | DS-01 DS-02 DS-03 DS-04 DS-05 DS-06 | -1.16,-2.01,+0.00 | — | reference_models/STL_MEASUREMENTS.md (cross-sections of citadel_1_2_10_5.stl); reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons) |
| `DOME-P-HUB` | Central hub cap on the main dome | dome | L1 | V+3 | A | ANCHORED | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | DOME-P | reference_models/STL_MEASUREMENTS.md (cross-sections of citadel_1_2_10_5.stl); reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view) |
| `DOME-S1-HUB` | Hub cap on DOME-S1 | dome | L1 | V+3 | A | ANCHORED | DS-01 DS-02 DS-03 DS-04 DS-05 | +2.32,+0.00,+0.00 | DOME-S1 | reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view) |
| `DOME-S2-HUB` | Hub cap on DOME-S2 | dome | L1 | V+3 | A | ANCHORED | DS-01 DS-02 DS-03 DS-04 DS-05 | -1.16,+2.01,+0.00 | DOME-S2 | reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view) |
| `DOME-MB-HUB` | Hub cap on DOME-MB | dome | L1 | V+3 | A | ANCHORED | DS-01 DS-02 DS-03 DS-04 DS-05 | -1.16,-2.01,+0.00 | DOME-MB | reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view) |
| `PROP-PANEL-MAST` | Panel / antenna mast on a pod | prop | L6 | V+3 | A | PLACEHOLDER | DS-01 DS-02 DS-03 DS-04 DS-05 | -1.16,+2.01,+0.19 | DOME-S2 | reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view) |
| `CIRC-RING-1` | Inner circumferential road | circulation | L2 | V0 | B | PROVISIONAL | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | — | GEOMETRY_DATABASE.md G-005; EXTERIOR.md (radial/circular organisation) |
| `CIRC-RING-2` | Middle circumferential road | circulation | L2 | V0 | B | PROVISIONAL | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | — | GEOMETRY_DATABASE.md G-005 |
| `CIRC-RING-3` | Outer circumferential road | circulation | L2 | V0 | B | PROVISIONAL | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | — | GEOMETRY_DATABASE.md G-005 |
| `CIRC-RADIALS` | Radial avenues (8) | circulation | L2 | V0 | B | PROVISIONAL | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | — | GEOMETRY_DATABASE.md G-004 |
| `CIRC-5TH-BURP` | Fifth and [Burp] Avenue intersection | circulation | L2 | V0 | A | PROVISIONAL | DS-03 | -0.42,-0.42,+0.00 | — | DIALOGUE_ARCHITECTURE_CROSSREF.md D-001; RICKLANTIS_VISUAL_EVIDENCE.md (dispatch associates it with Mortytown) |
| `CIRC-RAIL-LOOP` | Commuter rail loop | circulation | L2 | V0 V+2 | A | PROVISIONAL | DS-03 DS-04 DS-05 | +0.00,+0.00,+0.05 | — | RICKLANTIS_VISUAL_EVIDENCE.md 7; DIALOGUE_ARCHITECTURE_CROSSREF.md D-004 |
| `CIRC-RAIL-MB-SPUR` | Rail spur to Mortyburg | circulation | L2 | V0 V+2 | A | PROVISIONAL | DS-04 DS-05 | +0.00,+0.00,+0.05 | — | DIALOGUE_ARCHITECTURE_CROSSREF.md D-008; EPISODE_EVIDENCE_RICKMURAI_JACK.md (train route connecting affected area to Mortyburg) |
| `CIRC-TRAM-PLAZA` | Plaza tramway | circulation | L2 | V0 V+2 | A | ANCHORED | DS-04 DS-05 | +0.00,+0.00,+0.06 | — | reference_images/CITADEL_IMAGE_GALLERY.md#15 (S05E10 plaza destruction ground); reference_images/CITADEL_IMAGE_GALLERY.md#14 (S05E10 plaza destruction wide) |
| `CIRC-HOVER-BAND` | Hover / flying traffic band | circulation | L2 | V+2 | A | PROVISIONAL | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | — | TRANSPORTATION.md (hover traffic); RICKLANTIS_VISUAL_EVIDENCE.md 2 |
| `CIRC-MANHOLE` | Manhole / sewer access near plaza | circulation | L2 | V0 V-1 | A | ANCHORED | DS-04 DS-05 | +0.16,-0.08,+0.00 | — | EPISODE_EVIDENCE_RICKMURAI_JACK.md (manhole used by Rick and Morty); UTILITY_SYSTEMS.md (sewers) |
| `SYS-PORTAL-SUPPLY` | Citywide portal supply network | utility | L2 | V0 V-1 V-2 | A | UNPLACED | DS-01 DS-02 DS-03 DS-04 DS-05 | — | — | EPISODE_EVIDENCE_RICKMURAI_JACK.md (citywide portal supply can be hacked); CONTRADICTION_LOG.md C-006 |
| `SYS-TAXI` | Hover taxi service | utility | L2 | V0 V+2 | A | UNPLACED | DS-03 DS-04 | — | — | RICKLANTIS_VISUAL_EVIDENCE.md 4 (taxi passes Campaign Manager Morty) |
| `DIST-CIVIC-CORE` | Civic / government core | district | L3 | V0 V+1 | B | ANCHORED | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | — | EPISODE_EVIDENCE_RICKMURAI_JACK.md (central plaza, Presidential Building); COUNCIL_CHAMBER.md |
| `DIST-COMMERCIAL-RING` | Commercial / high-rise ring | district | L3 | V0 V+1 | B | PROVISIONAL | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | — | reference_images/CITADEL_IMAGE_GALLERY.md#02 (S03E07 streetscape); RICKLANTIS_VISUAL_EVIDENCE.md 1-4, 8 |
| `DIST-RICK-RESIDENTIAL` | High-status Rick residential | district | L3 | V0 V+1 | C | PLACEHOLDER | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | — | CIVIC_SYSTEMS.md (social stratification); MORTYTOWN.md (contrast with higher-status Rick areas) |
| `DIST-EAST-SANCHEZ-HEIGHTS` | East Sanchez Heights | district | L3 | V0 V+1 | A | PLACEHOLDER | DS-03 | +0.00,+0.00,+0.00 | — | DIALOGUE_ARCHITECTURE_CROSSREF.md D-002; RICKLANTIS_VISUAL_EVIDENCE.md 8 (gravity outage) |
| `DIST-INDUSTRIAL` | Industrial sector | district | L3 | V0 V+1 V-1 | B | PROVISIONAL | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | — | SIMPLE_RICKS_FACTORY.md; RICKLANTIS_VISUAL_EVIDENCE.md 9, 10, 15 |
| `DIST-MORTYTOWN` | Mortytown | district | L3 | V0 V+1 | A | PLACEHOLDER | DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | — | MORTYTOWN.md; RICKLANTIS_VISUAL_EVIDENCE.md 11-13 |
| `DIST-BIG-MORTY` | Big Morty criminal territory | district | L3 | V0 | A | PLACEHOLDER | DS-03 | +0.00,+0.00,+0.00 | DIST-MORTYTOWN | LOCATION_REGISTER.md (Big Morty criminal territory); RICKLANTIS_VISUAL_EVIDENCE.md 11 |
| `DIST-AGRICULTURAL` | Agricultural edge (MegaFruit farm) | district | L3 | V0 | A | PROVISIONAL | DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | — | RICKLANTIS_VISUAL_EVIDENCE.md 14 (farm-at-edge); BUILDING_FAMILIES.md 8 |
| `DIST-CONSTRUCTION` | Post-Rickshank construction zones | district | L3 | V0 V+1 | A | PLACEHOLDER | DS-02 DS-03 | +0.00,+0.00,+0.00 | — | RICKLANTIS_VISUAL_EVIDENCE.md 1; BUILDING_FAMILIES.md 9 |
| `DIST-DOWNTOWN-RICKVILLE` | Downtown Rickville (comic) | district | L3 | V0 V+1 | A | UNPLACED | — | — | — | COMIC_FINAL_STATUS.md; CITADEL_COMIC_TARGET_REGISTER.md |
| `LM-CENTRAL-PLAZA` | Central plaza | landmark | L5 | V0 | A | ANCHORED | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | — | reference_images/CITADEL_IMAGE_GALLERY.md#01 (S01E10 arrival plaza); EPISODE_EVIDENCE_RICKMURAI_JACK.md (central plaza) |
| `LM-CENTRAL-MONUMENT` | Central monument tower (Rick statue) | landmark | L4 | V0 V+1 V+2 | A | ANCHORED | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | LM-CENTRAL-PLAZA | reference_images/CITADEL_IMAGE_GALLERY.md#15 (S05E10 plaza destruction ground); reference_images/CITADEL_IMAGE_GALLERY.md#14 (S05E10 plaza destruction wide) |
| `CIRC-CORE-WALKWAYS` | Elevated curved walkways around the core | circulation | L2 | V+2 | A | PROVISIONAL | DS-01 DS-02 | +0.00,+0.00,+0.12 | LM-CENTRAL-PLAZA | reference_images/CITADEL_IMAGE_GALLERY.md#01 (S01E10 arrival plaza); VERTICAL_LAYERS.md (elevated circulation) |
| `LM-CORE-WATER` | Atrium water feature and rock garden | natural | L5 | V0 | A | PROVISIONAL | DS-01 DS-02 DS-03 DS-04 DS-05 | -0.11,+0.04,+0.00 | LM-CENTRAL-PLAZA | reference_images/CITADEL_IMAGE_GALLERY.md#15 (S05E10 plaza destruction ground); reference_images/CITADEL_IMAGE_GALLERY.md#01 (S01E10 arrival plaza) |
| `LM-SPIRE-CLUSTER` | Central spire cluster (DS-03 skyline) | landmark | L4 | V0 V+1 V+2 | A | PROVISIONAL | DS-03 DS-04 DS-05 | +0.08,+0.10,+0.00 | DIST-CIVIC-CORE | reference_images/CITADEL_IMAGE_GALLERY.md#02 (S03E07 streetscape) |
| `CIRC-ELEVATED-TUBE` | Elevated transit tube crossing the street | circulation | L2 | V+2 | A | PROVISIONAL | DS-03 DS-04 | +0.00,+0.00,+0.07 | CIRC-RAIL-LOOP | reference_images/CITADEL_IMAGE_GALLERY.md#02 (S03E07 streetscape); RICKLANTIS_VISUAL_EVIDENCE.md 7 |
| `LM-PRESIDENTIAL-BUILDING` | Presidential Building | landmark | L4 | V0 V+1 | A | PROVISIONAL | DS-04 DS-05 | +0.00,+0.19,+0.00 | — | reference_images/CITADEL_IMAGE_GALLERY.md#12 (S05E10 Presidential dining room); EPISODE_EVIDENCE_RICKMURAI_JACK.md (Rick and Morty exit it during the collapse) |
| `LM-PLAZA-DOME-BUILDING` | Domed building at the plaza edge | landmark | L4 | V0 V+1 | A | PROVISIONAL | DS-03 DS-04 DS-05 | +0.24,-0.16,+0.00 | DIST-CIVIC-CORE | reference_images/CITADEL_IMAGE_GALLERY.md#14 (S05E10 plaza destruction wide); reference_images/CITADEL_IMAGE_GALLERY.md#15 (S05E10 plaza destruction ground) |
| `LM-COUNCIL-HALL` | Council Hall (Council of Ricks) | landmark | L4 | V0 V+1 | A | PROVISIONAL | DS-01 DS-02 | -0.20,+0.06,+0.00 | — | reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#24 (S01E10 civic building entrance); COUNCIL_CHAMBER.md |
| `LM-COUNCIL-CHAMBER` | Council chamber (interior) | interior | L4 | V0 | A | PROVISIONAL | DS-01 DS-02 | -0.20,+0.06,+0.00 | LM-COUNCIL-HALL | reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#26 (S03E01 Council hall); reference_images/CITADEL_IMAGE_GALLERY.md#06 (S01E10 Council chamber) |
| `LM-SHADOW-COUNCIL-HALL` | Shadow Council Hall | landmark | L4 | V0 V+1 | A | PLACEHOLDER | DS-03 DS-04 | -0.20,-0.12,+0.00 | — | RICKLANTIS_VISUAL_EVIDENCE.md 16; CONTRADICTION_LOG.md C-004 |
| `LM-COURTHOUSE` | Courthouse / judicial facility | landmark | L4 | V0 V+1 | B | PLACEHOLDER | DS-01 DS-02 DS-03 DS-04 | +0.20,+0.10,+0.00 | — | CIVIC_SYSTEMS.md (courts/law); LOCATION_REGISTER.md |
| `LM-MORTY-AGENCY` | Morty Agency | landmark | L4 | V0 V+1 | A | PLACEHOLDER | DS-03 DS-04 | +0.18,-0.16,+0.00 | — | EPISODE_EVIDENCE_UNMORTRICKEN.md; DIALOGUE_ARCHITECTURE_CROSSREF.md D-012, D-013 |
| `LM-MILITIA-HQ` | Citadel militia / SEAL Team Ricks base | landmark | L4 | V0 V+1 | A | PLACEHOLDER | DS-01 DS-02 | -0.05,-0.24,+0.00 | — | reference_images/CITADEL_IMAGE_GALLERY.md#20 (S01E10 security corridor); CITADEL_POLICE.md (Council era militia, SEAL Team Ricks) |
| `LM-POLICE-HQ` | Citadel Police HQ and Academy | landmark | L4 | V0 V+1 | A | PROVISIONAL | DS-03 DS-04 | -0.36,-0.28,+0.00 | — | RICKLANTIS_VISUAL_EVIDENCE.md 5; CITADEL_POLICE.md |
| `LM-SHOOTING-RANGE` | Police Academy shooting range | interior | L4 | V0 | A | PROVISIONAL | DS-03 | -0.36,-0.28,+0.00 | LM-POLICE-HQ | RICKLANTIS_VISUAL_EVIDENCE.md 5 |
| `LM-MORTY-ACADEMY` | Morty Academy | landmark | L4 | V0 V+1 | A | PROVISIONAL | DS-03 DS-04 | -0.45,-0.55,+0.00 | — | RICKLANTIS_VISUAL_EVIDENCE.md 6; CIVIC_SYSTEMS.md (education) |
| `LM-SIMPLE-RICKS` | Simple Rick's Wafer Cookie Factory | landmark | L4 | V0 V+1 V-1 | A | PROVISIONAL | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.05,+0.78,+0.00 | — | SIMPLE_RICKS_FACTORY.md; RICKLANTIS_VISUAL_EVIDENCE.md 9-10 |
| `LM-FLAVOR-CORE` | Flavor Core chamber | interior | L4 | V0 | A | PROVISIONAL | DS-03 | +0.05,+0.84,+0.00 | LM-SIMPLE-RICKS | reference_images/CITADEL_IMAGE_GALLERY.md#18 (S03E07 Flavor Core); RICKLANTIS_VISUAL_EVIDENCE.md 10 |
| `LM-WISHING-PORTAL` | Wishing Portal compound | landmark | L4 | V0 V-1 V-2 | A | PROVISIONAL | DS-03 DS-04 | -0.35,+0.82,+0.00 | — | RICKLANTIS_VISUAL_EVIDENCE.md 15; LOCATION_REGISTER.md (Wishing Portal; Waste Disposal Plant) |
| `LM-WASTE-PLANT` | Waste Disposal Plant | landmark | L4 | V0 V-1 | B | PLACEHOLDER | DS-01 DS-02 DS-03 DS-04 | -0.21,+0.83,+0.00 | — | LOCATION_REGISTER.md (Waste Disposal Plant); UTILITY_SYSTEMS.md (waste) |
| `LM-AIRLOCK-PODS` | Body-disposal airlock pods | utility | L4 | V0 V-1 | A | PLACEHOLDER | DS-03 | -0.39,+0.84,-0.02 | — | RICKLANTIS_VISUAL_EVIDENCE.md 17; EPISODE_EVIDENCE_RICKLANTIS.md (airlock) |
| `LM-MEGAFRUIT-FARM` | MegaFruit farm | natural | L5 | V0 | A | PROVISIONAL | DS-03 DS-04 | +0.15,-0.85,+0.00 | DIST-AGRICULTURAL | RICKLANTIS_VISUAL_EVIDENCE.md 14; CONTRADICTION_LOG.md C-005 |
| `LM-CAFE-SANCHEZ` | Cafe Sanchez | landmark | L4 | V0 | A | PLACEHOLDER | DS-03 | +0.42,+0.20,+0.00 | — | RICKLANTIS_VISUAL_EVIDENCE.md 4 |
| `LM-NEWSROOM` | Citadel Morning News studio | landmark | L4 | V0 V+1 | A | PLACEHOLDER | DS-03 | +0.50,-0.12,+0.00 | — | RICKLANTIS_VISUAL_EVIDENCE.md 8 |
| `LM-SKYSCRAPER-REBUILD` | Skyscraper under reconstruction | landmark | L4 | V0 V+1 | A | PLACEHOLDER | DS-03 | -0.45,+0.15,+0.00 | DIST-CONSTRUCTION | RICKLANTIS_VISUAL_EVIDENCE.md 1 |
| `LM-MORTY-MART` | Morty Mart | landmark | L4 | V0 | A | PLACEHOLDER | DS-03 | -0.61,-0.48,+0.00 | DIST-MORTYTOWN | RICKLANTIS_VISUAL_EVIDENCE.md 12 |
| `LM-CREEPY-MORTY` | The Creepy Morty | landmark | L4 | V0 | A | PLACEHOLDER | DS-03 | -0.68,-0.59,+0.00 | DIST-MORTYTOWN | RICKLANTIS_VISUAL_EVIDENCE.md 13 |
| `LM-MORTYTOWN-RESIDENCE` | Mortytown residential interior (crib scene) | interior | L4 | V0 | A | PLACEHOLDER | DS-03 | -0.56,-0.68,+0.00 | DIST-MORTYTOWN | EPISODE_EVIDENCE_RICKLANTIS.md (residential/criminal interior with crib) |
| `LM-MORTY-DAY-CARE` | Morty Day Care | landmark | L4 | V0 | B | PLACEHOLDER | DS-03 DS-04 | -0.49,-0.72,+0.00 | DIST-MORTYTOWN | DISTRICTS.md; LOCATION_REGISTER.md |
| `LM-MORTY-GAMES` | Morty Games | landmark | L4 | V0 | B | PLACEHOLDER | DS-03 DS-04 | -0.66,-0.36,+0.00 | DIST-MORTYTOWN | DISTRICTS.md; LOCATION_REGISTER.md |
| `LM-MORTY-INSURANCE` | Morty Insurance | landmark | L4 | V0 V+1 | B | PLACEHOLDER | DS-03 DS-04 | -0.30,-0.42,+0.00 | DIST-COMMERCIAL-RING | DISTRICTS.md; LOCATION_REGISTER.md |
| `LM-SALTY-RICK` | The Salty Rick | landmark | L4 | V0 | B | PLACEHOLDER | DS-03 DS-04 | +0.30,+0.40,+0.00 | DIST-COMMERCIAL-RING | LOCATION_REGISTER.md |
| `LM-BIG-RICKS-GUMBO` | Big Rick's Gumbo Hutch | landmark | L4 | V0 | B | PLACEHOLDER | DS-03 DS-04 | +0.48,-0.30,+0.00 | DIST-COMMERCIAL-RING | DISTRICTS.md |
| `LM-REBUILD-A-MORTY` | Re-Build-A-Morty | landmark | L4 | V0 | A | PLACEHOLDER | DS-04 | -0.15,-0.50,+0.00 | DIST-COMMERCIAL-RING | reference_images/CITADEL_IMAGE_GALLERY.md#11 (S05E10 Re-Build-A-Morty); LOCATION_REGISTER.md (Re-Build-A-Morty, Rickmurai Jack) |
| `LM-RICKINGHAM-PALACE` | Rickingham Palace (comic) | landmark | L4 | — | A | UNPLACED | — | — | — | COMIC_FINAL_STATUS.md |
| `PROP-BANNERS` | Regime banners over Rick emblems | prop | L6 | V+1 | A | UNPLACED | DS-03 DS-04 | — | — | RICKLANTIS_VISUAL_EVIDENCE.md 16; EPISODE_EVIDENCE_RICKLANTIS.md (political/architectural transition) |
| `PROP-STREET-FURNITURE` | Street furniture, signage, trees, fountains | prop | L6 | V0 | A | UNPLACED | DS-01 DS-02 DS-03 DS-04 | — | — | reference_images/CITADEL_IMAGE_GALLERY.md#15 (S05E10 plaza destruction ground); BUILDING_FAMILIES.md (streetscape details) |
| `UG-SEWERS` | Sewer / utility passages | utility | L7 | V-1 | A | PROVISIONAL | DS-03 DS-04 DS-05 | +0.00,+0.00,-0.05 | — | UTILITY_SYSTEMS.md (sewers); EPISODE_EVIDENCE_RICKMURAI_JACK.md (deformed Mortys emerge from sewers) |
| `UG-PORTAL-FLUID` | Portal-fluid production complex ('cave base') | machinery | L7 | V-2 | A | PROVISIONAL | DS-04 DS-05 | +0.08,+0.05,-0.16 | — | EPISODE_EVIDENCE_RICKMURAI_JACK.md (portal-fluid production / mines); DIALOGUE_ARCHITECTURE_CROSSREF.md D-006, D-007 |
| `UG-DIM-DRIVE` | Dimensional Drive chamber | machinery | L7 | V-3 | A | ANCHORED | DS-04 DS-05 | +0.00,+0.00,-0.29 | — | reference_images/CITADEL_IMAGE_GALLERY.md#17 (S05E10 rail cart); reference_images/CITADEL_IMAGE_GALLERY.md#13 (S05E10 Central Finite Curve platform) |
| `UG-CONTROL-ENCLOSURE` | Glass-domed control enclosure | machinery | L7 | V-3 | A | PROVISIONAL | DS-04 DS-05 | +0.17,+0.00,-0.34 | UG-DIM-DRIVE | reference_images/CITADEL_IMAGE_GALLERY.md#13 (S05E10 Central Finite Curve platform); EPISODE_EVIDENCE_RICKMURAI_JACK.md (glass-domed/control enclosure around the principal control interface) |
| `UG-PHOENIX-VATS` | Operation Phoenix vats | machinery | L7 | V-3 | A | PROVISIONAL | DS-04 DS-05 | +0.00,+0.00,-0.35 | UG-DIM-DRIVE | EPISODE_EVIDENCE_RICKMURAI_JACK.md (Operation Phoenix vats feed biological material into the drive process) |
| `UG-LAUNCH-CHAMBER` | Launch chamber (Evil Morty's spacecraft) | machinery | L7 | V-3 V-4 | A | ANCHORED | DS-04 DS-05 | +0.00,-0.03,-0.55 | — | EPISODE_EVIDENCE_SOLARICKS.md (surviving launch/technical chamber); EPISODE_EVIDENCE_RICKMURAI_JACK.md (spacecraft loaded into an exit chute) |
| `UG-EXIT-CHUTE` | Spacecraft exit chute | machinery | L7 | V-3 V-4 | A | ANCHORED | DS-04 DS-05 DS-06 | +0.00,+0.00,-0.97 | — | EPISODE_EVIDENCE_RICKMURAI_JACK.md (launched from the bottom of the Citadel); EPISODE_EVIDENCE_SOLARICKS.md (launch track) |
| `IF-MORTYBURG` | Mortyburg attachment interface | interface | L7 | V0 V-1 | A | PROVISIONAL | DS-01 DS-02 DS-03 DS-04 DS-05 | -0.50,-0.87,-0.05 | — | EPISODE_EVIDENCE_RICKMURAI_JACK.md (Mortyburg detachment); DIALOGUE_ARCHITECTURE_CROSSREF.md D-008, D-009 |
| `MB-THRUSTERS` | Mortyburg boosters / thrusters | machinery | L7 | V-1 | A | PROVISIONAL | DS-05 DS-06 | -1.16,-2.01,-0.10 | DOME-MB | DIALOGUE_ARCHITECTURE_CROSSREF.md D-010 |
| `RUIN-DEBRIS-FIELD` | Post-destruction debris field | ruin | L7 | — | A | PROVISIONAL | DS-06 DS-07 DS-08 | +0.00,+0.00,+0.00 | — | EPISODE_EVIDENCE_SOLARICKS.md; CONTRADICTION_LOG.md C-009 |
| `RUIN-LAUNCH-CHAMBER` | Ruined launch chamber | ruin | L7 | V-3 | A | ANCHORED | DS-06 | +0.00,-0.03,-0.55 | UG-LAUNCH-CHAMBER | EPISODE_EVIDENCE_SOLARICKS.md (surviving launch/technical chamber) |
| `RUIN-BEACON` | Summer's beacon on the ruins | prop | L6 | — | A | PLACEHOLDER | DS-06 | +0.30,-0.30,+0.10 | — | EPISODE_EVIDENCE_SOLARICKS.md (beacon) |
| `NEW-CITADEL` | New Citadel construction (Boss Hog Rick) | variant | L7 | V0 V+1 | A | PROVISIONAL | DS-07 | +0.40,+0.30,+0.00 | — | reference_images/CITADEL_IMAGE_GALLERY.md#21 (S08E03 Boss Hog throne room); CITADEL_DESTRUCTION.md State 6 |

## Rationale and unknowns per node

### SHELL-DRUM — Central lens — lower hull

**Placement rationale:** STL cross-sections: the underside of the main body is the lower half of the lens, 0.10 R deep at the centre. The v2 "thin plate" was the right thickness but the wrong shape. Geometry measured from the STL.

**Unknowns:** rim wall height; deck thickness; rim detailing

**Evidence:** reference_models/STL_MEASUREMENTS.md (cross-sections of citadel_1_2_10_5.stl); reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons); reference_images/EXTERIOR_FIT_23.md (numeric camera + geometry fit to #23); reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view); reference_images/CITADEL_IMAGE_GALLERY.md#04 (S05E10 founding hologram)

**Sub-features to model:** plated hull underside; cyan rim light strips at the equator; arm roots at the equator

### SHELL-UNDERHUB — Under-hub (keel mount block)

**Placement rationale:** In #23 a faceted block sits under the centre of the drum and the keel fins hang from it. It is the natural volume for the Drive stack (V-2/V-3). Depth is a ratio estimate. Silhouette fit: r 0.34, z -0.02 → -0.45. STL: below the lens the central section shrinks linearly from r 0.46 at −0.11 to 0.23 at −0.36.

**Unknowns:** depth; facet form; whether it is one block or several

**Evidence:** reference_models/STL_MEASUREMENTS.md (cross-sections of citadel_1_2_10_5.stl); reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons); reference_images/EXTERIOR_FIT_23.md (numeric camera + geometry fit to #23); reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view)

**Sub-features to model:** faceted tapering block; fins hang from its lower rim; houses the Drive stack

### KEEL-FIN-1 — Keel fin 1 of 5

**Placement rationale:** STL cross-sections show FIVE fins at 72° spacing (centroid azimuths 72/144/216/288/360 with the pods at 36/156/276, i.e. fins sit 36° off the arms). Each fin is a tapering plate from −0.40 to −1.80 R. The exterior frame only ever showed two, which is why v1.3–v2.0 assumed three.

**Unknowns:** exact taper; whether the show intends 5 (the fan model does)

**Evidence:** reference_models/STL_MEASUREMENTS.md (cross-sections of citadel_1_2_10_5.stl); reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior)

**Sub-features to model:** flat plated fin; radial extent 0.47–0.75 R at the root tapering to 0.41–0.49 R at the tip; tangential width ≈0.26 R at the root, ≈0.15 R at the tip; ends at −1.8 R

### KEEL-FIN-2 — Keel fin 2 of 5

**Placement rationale:** STL cross-sections show FIVE fins at 72° spacing (centroid azimuths 72/144/216/288/360 with the pods at 36/156/276, i.e. fins sit 36° off the arms). Each fin is a tapering plate from −0.40 to −1.80 R. The exterior frame only ever showed two, which is why v1.3–v2.0 assumed three.

**Unknowns:** exact taper; whether the show intends 5 (the fan model does)

**Evidence:** reference_models/STL_MEASUREMENTS.md (cross-sections of citadel_1_2_10_5.stl); reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior)

**Sub-features to model:** flat plated fin; radial extent 0.47–0.75 R at the root tapering to 0.41–0.49 R at the tip; tangential width ≈0.26 R at the root, ≈0.15 R at the tip; ends at −1.8 R

### KEEL-FIN-3 — Keel fin 3 of 5

**Placement rationale:** STL cross-sections show FIVE fins at 72° spacing (centroid azimuths 72/144/216/288/360 with the pods at 36/156/276, i.e. fins sit 36° off the arms). Each fin is a tapering plate from −0.40 to −1.80 R. The exterior frame only ever showed two, which is why v1.3–v2.0 assumed three.

**Unknowns:** exact taper; whether the show intends 5 (the fan model does)

**Evidence:** reference_models/STL_MEASUREMENTS.md (cross-sections of citadel_1_2_10_5.stl); reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior)

**Sub-features to model:** flat plated fin; radial extent 0.47–0.75 R at the root tapering to 0.41–0.49 R at the tip; tangential width ≈0.26 R at the root, ≈0.15 R at the tip; ends at −1.8 R

### KEEL-FIN-4 — Keel fin 4 of 5

**Placement rationale:** STL cross-sections show FIVE fins at 72° spacing (centroid azimuths 72/144/216/288/360 with the pods at 36/156/276, i.e. fins sit 36° off the arms). Each fin is a tapering plate from −0.40 to −1.80 R. The exterior frame only ever showed two, which is why v1.3–v2.0 assumed three.

**Unknowns:** exact taper; whether the show intends 5 (the fan model does)

**Evidence:** reference_models/STL_MEASUREMENTS.md (cross-sections of citadel_1_2_10_5.stl); reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior)

**Sub-features to model:** flat plated fin; radial extent 0.47–0.75 R at the root tapering to 0.41–0.49 R at the tip; tangential width ≈0.26 R at the root, ≈0.15 R at the tip; ends at −1.8 R

### KEEL-FIN-5 — Keel fin 5 of 5

**Placement rationale:** STL cross-sections show FIVE fins at 72° spacing (centroid azimuths 72/144/216/288/360 with the pods at 36/156/276, i.e. fins sit 36° off the arms). Each fin is a tapering plate from −0.40 to −1.80 R. The exterior frame only ever showed two, which is why v1.3–v2.0 assumed three.

**Unknowns:** exact taper; whether the show intends 5 (the fan model does)

**Evidence:** reference_models/STL_MEASUREMENTS.md (cross-sections of citadel_1_2_10_5.stl); reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior)

**Sub-features to model:** flat plated fin; radial extent 0.47–0.75 R at the root tapering to 0.41–0.49 R at the tip; tangential width ≈0.26 R at the root, ≈0.15 R at the tip; ends at −1.8 R

### SHELL-LOWER-BODY — Central spike (energy blade)

**Placement rationale:** Third pass on #23, measured: keel top width ≈ 70 px = 0.87 R across; blade tip 125 px = 1.56 R below the disc underside; fins end ≈ 1.2 R down. The keel is a bright cyan crystalline blade on the axis flanked by flat plated fins with angled tips, all hanging from the under-hub. Existence A, ratios B. Numeric fit to #23: blade tip at z −2.10 (measured from the disc centre, not the front rim — the earlier 1.56 was measured from the wrong edge). Silhouette fit: blade root r 0.117, tip z -2.13. STL: central spike tip at 2.13 R below the equator — identical to the silhouette-fitted blade tip (−2.13). Root r 0.19, thinning to 0.026 R.

**Unknowns:** blade section (round vs flat); whether the glow is the Drive output

**Evidence:** reference_models/STL_MEASUREMENTS.md (cross-sections of citadel_1_2_10_5.stl); reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons); reference_images/EXTERIOR_FIT_23.md (numeric camera + geometry fit to #23); reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view); reference_images/CITADEL_IMAGE_GALLERY.md#04 (S05E10 founding hologram); EXTERIOR.md; SOURCE_INDEX.md (lower metallic structural plates); GEOMETRY_DATABASE.md G-002

**Sub-features to model:** central spike, r 0.19 at the root, 0.026 over the last 0.7 R; cyan glow in the show (#23); tip at −2.13 R

### SHELL-PLATES — Drum rim plating

**Placement rationale:** Hologram shows concentric horizontal bands on the funnel rather than vertical plates; 12 vertical segments are retained as a placeholder for the upper band only. Re-derive from an exterior frame. Re-purposed: the plating visible in #23 is on the drum rim wall and keel facets, not a separate lower-body plate ring.

**Unknowns:** plate count; plate size; seams; which plates carry airlocks

**Evidence:** reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view); reference_images/CITADEL_IMAGE_GALLERY.md#04 (S05E10 founding hologram); SOURCE_INDEX.md (lower metallic structural plates); EXTERIOR.md checklist

### SHELL-UNDERSIDE — Blade exit aperture

**Placement rationale:** The spacecraft launches from the bottom (S05E10). With the keel resolved as a blade, the aperture is placed where the blade is still wide enough for the chute (z −1.0); exact exit point UNKNOWN.

**Unknowns:** aperture position; other underside features

**Evidence:** reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view); reference_images/CITADEL_IMAGE_GALLERY.md#04 (S05E10 founding hologram); EPISODE_EVIDENCE_RICKMURAI_JACK.md (spacecraft launched from the bottom of the Citadel)

### ARM-S1 — Radial arm to DOME-S1

**Placement rationale:** Exterior #23 (third pass): the arms are long flat planks ≈0.35 R wide spanning ≈0.6 R between disc rim and pod rim, with cyan light strips along their sides, slightly below deck level. Numeric fit to #23: the arm slopes from the disc underside (z −0.03) down to the pod rim (z −0.28) over ≈0.85 R. Silhouette fit: arm width 0.44 R, sloping from z -0.03 at the disc to z -0.25 at the pod rim. STL: arc widths at the equator 0.50–0.66 R, 0.38–0.49 at −0.055, 0.20–0.25 at −0.096 and +0.10 — a lens-section bridge 0.2 R thick. Level with the deck, not sloping. The arm section is thick enough (0.2 R = 400 m) for three levels; the through-concourse is at deck level so the city, arm and pod decks are one continuous floor.

**Unknowns:** width; section; what circulation it carries; whether arms are level with the ground plane

**Evidence:** reference_models/STL_MEASUREMENTS.md (cross-sections of citadel_1_2_10_5.stl); reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons); reference_images/EXTERIOR_FIT_23.md (numeric camera + geometry fit to #23); reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view); reference_images/CITADEL_IMAGE_GALLERY.md#04 (S05E10 founding hologram); CONTRADICTION_LOG.md C-002

**Sub-features to model:** lenticular section: 0.55 R wide and 0.20 R thick at the equator, tapering to ≈0.2 R wide at ±0.10 R; cyan light strips along the edges (#23); level with the equatorial plane; three usable levels inside the 0.2 R section: top deck (+0.10), through-concourse (0), service deck (−0.05)

### ARM-S2 — Radial arm to DOME-S2

**Placement rationale:** Exterior #23 (third pass): the arms are long flat planks ≈0.35 R wide spanning ≈0.6 R between disc rim and pod rim, with cyan light strips along their sides, slightly below deck level. Numeric fit to #23: the arm slopes from the disc underside (z −0.03) down to the pod rim (z −0.28) over ≈0.85 R. Silhouette fit: arm width 0.44 R, sloping from z -0.03 at the disc to z -0.25 at the pod rim. STL: arc widths at the equator 0.50–0.66 R, 0.38–0.49 at −0.055, 0.20–0.25 at −0.096 and +0.10 — a lens-section bridge 0.2 R thick. Level with the deck, not sloping. The arm section is thick enough (0.2 R = 400 m) for three levels; the through-concourse is at deck level so the city, arm and pod decks are one continuous floor.

**Unknowns:** width; section; what circulation it carries; whether arms are level with the ground plane

**Evidence:** reference_models/STL_MEASUREMENTS.md (cross-sections of citadel_1_2_10_5.stl); reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons); reference_images/EXTERIOR_FIT_23.md (numeric camera + geometry fit to #23); reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view); reference_images/CITADEL_IMAGE_GALLERY.md#04 (S05E10 founding hologram); CONTRADICTION_LOG.md C-002

**Sub-features to model:** lenticular section: 0.55 R wide and 0.20 R thick at the equator, tapering to ≈0.2 R wide at ±0.10 R; cyan light strips along the edges (#23); level with the equatorial plane; three usable levels inside the 0.2 R section: top deck (+0.10), through-concourse (0), service deck (−0.05)

### ARM-MB — Radial arm to DOME-MB

**Placement rationale:** Exterior #23 (third pass): the arms are long flat planks ≈0.35 R wide spanning ≈0.6 R between disc rim and pod rim, with cyan light strips along their sides, slightly below deck level. Numeric fit to #23: the arm slopes from the disc underside (z −0.03) down to the pod rim (z −0.28) over ≈0.85 R. Silhouette fit: arm width 0.44 R, sloping from z -0.03 at the disc to z -0.25 at the pod rim. STL: arc widths at the equator 0.50–0.66 R, 0.38–0.49 at −0.055, 0.20–0.25 at −0.096 and +0.10 — a lens-section bridge 0.2 R thick. Level with the deck, not sloping. The arm section is thick enough (0.2 R = 400 m) for three levels; the through-concourse is at deck level so the city, arm and pod decks are one continuous floor.

**Unknowns:** width; section; what circulation it carries; whether arms are level with the ground plane

**Evidence:** reference_models/STL_MEASUREMENTS.md (cross-sections of citadel_1_2_10_5.stl); reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons); reference_images/EXTERIOR_FIT_23.md (numeric camera + geometry fit to #23); reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view); reference_images/CITADEL_IMAGE_GALLERY.md#04 (S05E10 founding hologram); CONTRADICTION_LOG.md C-002

**Sub-features to model:** lenticular section: 0.55 R wide and 0.20 R thick at the equator, tapering to ≈0.2 R wide at ±0.10 R; cyan light strips along the edges (#23); level with the equatorial plane; three usable levels inside the 0.2 R section: top deck (+0.10), through-concourse (0), service deck (−0.05)

### DOME-P — Principal transparent dome

**Placement rationale:** STL cross-sections: the main body is a lens. Its upper surface rises from r = 1 at the equator to the apex 0.292 R above it, with r = 0.83 R at +0.15 and 0.90 R at +0.11 — fuller than a spherical cap. This replaces both the v1 hemisphere and the v2 spherical cap + drum. Existence A (exterior #23, hologram #04); geometry from the STL, a fan reconstruction, so the profile is B. Geometry measured from the STL.

**Unknowns:** exact segment count; hub form; absolute radius (see SCALE_1_TO_1.md)

**Evidence:** reference_models/STL_MEASUREMENTS.md (cross-sections of citadel_1_2_10_5.stl); reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons); reference_images/EXTERIOR_FIT_23.md (numeric camera + geometry fit to #23); reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view); reference_images/CITADEL_IMAGE_GALLERY.md#15 (S05E10 plaza destruction ground); reference_images/CITADEL_IMAGE_GALLERY.md#14 (S05E10 plaza destruction wide); reference_images/CITADEL_IMAGE_GALLERY.md#04 (S05E10 founding hologram); EXTERIOR.md; SOURCE_INDEX.md; GEOMETRY_DATABASE.md G-001; EVIDENCE_MATRIX.md E-002

**Sub-features to model:** smooth lens (half-ellipsoid) glazing, no cylindrical drum wall; 8 radial segment ribs; raised circular hub at the apex (r ≈ 0.2 R)

### DOME-S1 — Secondary dome 1

**Placement rationale:** Exterior #23 (third pass, measured on the full frame): disc radius R = 80 px; pod diameter ≈ 100 px (near) / 100 px (far) → r ≈ 0.55 R; pod centres 150–210 px from the disc centre → ≈ 2.1 R allowing for perspective; pod rim depth ≈ 0.1 R. Hologram #04 agrees on topology. Azimuths relative to the interior UNKNOWN. Numeric fit to #23: pod centres at 2.39 R, radius 0.58 R, pod deck ≈0.3 R below the main deck (the arms slope down to them). Silhouette fit: pod radius 0.54, deck -0.31 below the main deck, cap height 0.1. Fitted per-pod centre distances were 2.73 / 2.14 / 2.67 R (near / far / right) with a long-lens camera being optimal, so the spread is a hand-drawn perspective artefact; symmetrised to 2.5 R. STL: pod centre at 2.316 R (az 36/156/276 in the STL frame), radius 0.592 R, apex +0.186 R, underside −0.10 R — the pods are scaled copies of the main lens sitting on the same equatorial plane. The silhouette fit's "pods hang 0.3 R lower" was an artefact of modelling the pods as caps on rims.

**Unknowns:** true count; radius ratio to DOME-P; which district it encloses; whether it sits on the rim or projects from the lower body

**Evidence:** reference_models/STL_MEASUREMENTS.md (cross-sections of citadel_1_2_10_5.stl); reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons); reference_images/EXTERIOR_FIT_23.md (numeric camera + geometry fit to #23); reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view); reference_images/CITADEL_IMAGE_GALLERY.md#04 (S05E10 founding hologram); SOURCE_INDEX.md (three smaller domed districts); CONTRADICTION_LOG.md C-002

**Sub-features to model:** 0.59-scale copy of the central lens; segmented glazing + hub; underside flush with the main hull (−0.10 R)

### DOME-S2 — Secondary dome 2

**Placement rationale:** See DOME-S1. A panel/antenna mast stands on one pod in #23 (PROP-PANEL-MAST, assigned to this pod as a placeholder). Numeric fit to #23: pod centres at 2.39 R, radius 0.58 R, pod deck ≈0.3 R below the main deck (the arms slope down to them). Silhouette fit: pod radius 0.54, deck -0.31 below the main deck, cap height 0.1. Fitted per-pod centre distances were 2.73 / 2.14 / 2.67 R (near / far / right) with a long-lens camera being optimal, so the spread is a hand-drawn perspective artefact; symmetrised to 2.5 R. STL: pod centre at 2.316 R (az 36/156/276 in the STL frame), radius 0.592 R, apex +0.186 R, underside −0.10 R — the pods are scaled copies of the main lens sitting on the same equatorial plane. The silhouette fit's "pods hang 0.3 R lower" was an artefact of modelling the pods as caps on rims.

**Unknowns:** as DOME-S1

**Evidence:** reference_models/STL_MEASUREMENTS.md (cross-sections of citadel_1_2_10_5.stl); reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons); reference_images/EXTERIOR_FIT_23.md (numeric camera + geometry fit to #23); reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view); reference_images/CITADEL_IMAGE_GALLERY.md#04 (S05E10 founding hologram); SOURCE_INDEX.md (three smaller domed districts); CONTRADICTION_LOG.md C-002

**Sub-features to model:** 0.59-scale copy of the central lens; segmented glazing + hub; underside flush with the main hull (−0.10 R)

### DOME-MB — Mortyburg dome (detachable section)

**Placement rationale:** Mortyburg is a detachable domed section (A). #23 and #04 show all three satellite pods on arms; a pod on an arm is the only configuration that can disengage and fly off (S05E10), so Mortyburg = one of the three pods is now B. Which pod, and the azimuth, remain UNKNOWN. Numeric fit to #23: pod centres at 2.39 R, radius 0.58 R, pod deck ≈0.3 R below the main deck (the arms slope down to them). Silhouette fit: pod radius 0.54, deck -0.31 below the main deck, cap height 0.1. Fitted per-pod centre distances were 2.73 / 2.14 / 2.67 R (near / far / right) with a long-lens camera being optimal, so the spread is a hand-drawn perspective artefact; symmetrised to 2.5 R. STL: pod centre at 2.316 R (az 36/156/276 in the STL frame), radius 0.592 R, apex +0.186 R, underside −0.10 R — the pods are scaled copies of the main lens sitting on the same equatorial plane. The silhouette fit's "pods hang 0.3 R lower" was an artefact of modelling the pods as caps on rims. Mortyburg is one of these pods (B).

**Unknowns:** which pod is Mortyburg; azimuth; arm/joint geometry; internal layout

**Evidence:** reference_models/STL_MEASUREMENTS.md (cross-sections of citadel_1_2_10_5.stl); reference_images/EXTERIOR_FIT_23.md (silhouette fit, ~4,000 comparisons); reference_images/EXTERIOR_FIT_23.md (numeric camera + geometry fit to #23); reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view); reference_images/CITADEL_IMAGE_GALLERY.md#04 (S05E10 founding hologram); LOCATION_REGISTER.md (Mortyburg: smaller domed district; detachable); EPISODE_EVIDENCE_RICKMURAI_JACK.md (Mortyburg detachment); CONTRADICTION_LOG.md C-003

**Sub-features to model:** 0.59-scale copy of the central lens; segmented glazing + hub; underside flush with the main hull (−0.10 R)

### DOME-P-HUB — Central hub cap on the main dome

**Placement rationale:** A raised circular cap sits at the apex of the main dome and of each pod in #23 (the segment ribs meet it). STL: topmost section (z = apex − 0.25) is a circle of r 0.20 R.

**Unknowns:** radius; whether it is glazed or solid

**Evidence:** reference_models/STL_MEASUREMENTS.md (cross-sections of citadel_1_2_10_5.stl); reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view)

### DOME-S1-HUB — Hub cap on DOME-S1

**Placement rationale:** Each pod cap carries the same raised hub as the main dome (#23).

**Unknowns:** radius

**Evidence:** reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view)

### DOME-S2-HUB — Hub cap on DOME-S2

**Placement rationale:** Each pod cap carries the same raised hub as the main dome (#23).

**Unknowns:** radius

**Evidence:** reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view)

### DOME-MB-HUB — Hub cap on DOME-MB

**Placement rationale:** Each pod cap carries the same raised hub as the main dome (#23).

**Unknowns:** radius

**Evidence:** reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view)

### PROP-PANEL-MAST — Panel / antenna mast on a pod

**Placement rationale:** A square panel on a mast stands above one of the pods in #23 (solar array or antenna). Which pod is UNKNOWN.

**Unknowns:** which pod; function; size

**Evidence:** reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#23 (full exterior, orbital 3/4 view)

### CIRC-RING-1 — Inner circumferential road

**Placement rationale:** Several views show circular organisation. Three rings is a modelling convention, not a count from any frame.

**Unknowns:** ring count; radii; road width; lane organisation

**Evidence:** GEOMETRY_DATABASE.md G-005; EXTERIOR.md (radial/circular organisation)

### CIRC-RING-2 — Middle circumferential road

**Placement rationale:** See CIRC-RING-1.

**Unknowns:** as CIRC-RING-1

**Evidence:** GEOMETRY_DATABASE.md G-005

### CIRC-RING-3 — Outer circumferential road

**Placement rationale:** See CIRC-RING-1.

**Unknowns:** as CIRC-RING-1

**Evidence:** GEOMETRY_DATABASE.md G-005

### CIRC-RADIALS — Radial avenues (8)

**Placement rationale:** Radial organisation is supported (B); eight is a modelling convention.

**Unknowns:** count; which radial is 'Fifth'; which carry the rail

**Evidence:** GEOMETRY_DATABASE.md G-004

### CIRC-5TH-BURP — Fifth and [Burp] Avenue intersection

**Placement rationale:** Named intersection associated with Mortytown by dispatch; placed where CIRC-RING-2 meets the 225 deg radial, inside DIST-MORTYTOWN.

**Unknowns:** exact position; which streets are 'Fifth' and 'Burp'

**Evidence:** DIALOGUE_ARCHITECTURE_CROSSREF.md D-001; RICKLANTIS_VISUAL_EVIDENCE.md (dispatch associates it with Mortytown)

### CIRC-RAIL-LOOP — Commuter rail loop

**Placement rationale:** A commuter train exists (A). A loop at z=+0.05 is a placeholder topology chosen so it can connect the plaza tramway to the Mortyburg spur; elevation is UNKNOWN (ground/elevated/underground all possible). Gallery #02 shows an elevated transit tube crossing a street, which supports (but does not prove) the elevated placement.

**Unknowns:** elevation; line count; station count; whether the S03E07 train and S05E10 tram are the same system

**Evidence:** RICKLANTIS_VISUAL_EVIDENCE.md 7; DIALOGUE_ARCHITECTURE_CROSSREF.md D-004; EPISODE_EVIDENCE_RICKMURAI_JACK.md (tramway, train to Mortyburg); reference_images/CITADEL_IMAGE_GALLERY.md#02 (S03E07 streetscape)

### CIRC-RAIL-MB-SPUR — Rail spur to Mortyburg

**Placement rationale:** Route exists and passes through the Mortyburg interface (A). Now runs along ARM-MB to the pod. Path remains a straight provisional connector.

**Unknowns:** route; stations; whether the spur is the same track as the loop

**Evidence:** DIALOGUE_ARCHITECTURE_CROSSREF.md D-008; EPISODE_EVIDENCE_RICKMURAI_JACK.md (train route connecting affected area to Mortyburg)

### CIRC-TRAM-PLAZA — Plaza tramway

**Placement rationale:** Tramway is shown in the same flooding sequence as the central plaza; therefore anchored adjacent to LM-CENTRAL-PLAZA. Direction is placeholder; drawn to meet CIRC-RAIL-LOOP. Gallery #14/#15 show the plaza ringed by curved cyan elevated tracks on slender columns at two or more heights; the tramway is therefore an elevated curved track around the plaza, not a ground path. Geometry changed from a straight ground path to an elevated ring segment.

**Unknowns:** tier count and heights; where it connects to CIRC-RAIL-LOOP; whether the S03E07 train runs on it

**Evidence:** reference_images/CITADEL_IMAGE_GALLERY.md#15 (S05E10 plaza destruction ground); reference_images/CITADEL_IMAGE_GALLERY.md#14 (S05E10 plaza destruction wide); EPISODE_EVIDENCE_RICKMURAI_JACK.md (plaza / tramway / lower city)

**Sub-features to model:** cyan elevated track; slender support columns; multiple tiers; sweeps around the plaza and out into the city

### CIRC-HOVER-BAND — Hover / flying traffic band

**Placement rationale:** Flying taxis and private flying cars exist (A). Band limits are a placeholder envelope for the 3D model's traffic layer. Envelope trimmed to r 0.8 / z 0.10 so the band stays under the glass (the lens is only 0.05 R tall at r 0.95).

**Unknowns:** altitudes; lanes; takeoff/landing points

**Evidence:** TRANSPORTATION.md (hover traffic); RICKLANTIS_VISUAL_EVIDENCE.md 2; EVIDENCE_MATRIX.md E-007

### CIRC-MANHOLE — Manhole / sewer access near plaza

**Placement rationale:** Used during the plaza/tramway flooding sequence, so it sits at the plaza edge.

**Unknowns:** exact position; other manholes

**Evidence:** EPISODE_EVIDENCE_RICKMURAI_JACK.md (manhole used by Rick and Morty); UTILITY_SYSTEMS.md (sewers)

### SYS-PORTAL-SUPPLY — Citywide portal supply network

**Placement rationale:** Exists as a system; no visible routing. Kept as a separate ID from UG-PORTAL-FLUID and UG-DIM-DRIVE per C-006.

**Unknowns:** all routing; node locations

**Evidence:** EPISODE_EVIDENCE_RICKMURAI_JACK.md (citywide portal supply can be hacked); CONTRADICTION_LOG.md C-006

### SYS-TAXI — Hover taxi service

**Placement rationale:** Curbside pickup behaviour is direct evidence; vehicles are props on CIRC-HOVER-BAND / streets, not a placed structure.

**Unknowns:** depot; stands

**Evidence:** RICKLANTIS_VISUAL_EVIDENCE.md 4 (taxi passes Campaign Manager Morty)

### DIST-CIVIC-CORE — Civic / government core

**Placement rationale:** The central plaza and the Presidential Building are shown together in the collapse; government functions cluster around the plaza. Council Hall, courthouse and Morty Agency are placed here as PROVISIONAL/PLACEHOLDER, not because a frame shows them adjacent.

**Unknowns:** boundary; which civic buildings are actually here

**Evidence:** EPISODE_EVIDENCE_RICKMURAI_JACK.md (central plaza, Presidential Building); COUNCIL_CHAMBER.md; CIVIC_SYSTEMS.md

### DIST-COMMERCIAL-RING — Commercial / high-rise ring

**Placement rationale:** Dense high-rise blocks with storefronts, cafes and the newsroom. Ring placement is a convention: densest fabric between the civic core and the outer districts. Gallery #02 confirms very wide pedestrian streets flanked by monumental curved buildings with cyan strip lighting and at least one large dome-topped round building in the mid-ground.

**Unknowns:** true extent; height distribution

**Evidence:** reference_images/CITADEL_IMAGE_GALLERY.md#02 (S03E07 streetscape); RICKLANTIS_VISUAL_EVIDENCE.md 1-4, 8; BUILDING_FAMILIES.md 1, 7; GEOMETRY_DATABASE.md G-006

### DIST-RICK-RESIDENTIAL — High-status Rick residential

**Placement rationale:** Stratification is documented; a distinct wealthy residential area is inferred, not shown as a district. Placed opposite Mortytown to express the contrast.

**Unknowns:** whether a discrete district exists at all

**Evidence:** CIVIC_SYSTEMS.md (social stratification); MORTYTOWN.md (contrast with higher-status Rick areas); RICKLANTIS_VISUAL_EVIDENCE.md 2 (wealthy Rick in private flying car)

### DIST-EAST-SANCHEZ-HEIGHTS — East Sanchez Heights

**Placement rationale:** Named subdivision (A). Placed on +X solely because of the word 'East' (C); 'Heights' suggests elevated terrain or towers (D).

**Unknowns:** everything spatial; whether 'East' refers to Citadel geometry at all

**Evidence:** DIALOGUE_ARCHITECTURE_CROSSREF.md D-002; RICKLANTIS_VISUAL_EVIDENCE.md 8 (gravity outage)

### DIST-INDUSTRIAL — Industrial sector

**Placement rationale:** Simple Rick's and the Wishing Portal compound need large floor plates; grouped at the rim so heavy machinery can connect down to the lower body.

**Unknowns:** whether industry is one sector or distributed

**Evidence:** SIMPLE_RICKS_FACTORY.md; RICKLANTIS_VISUAL_EVIDENCE.md 9, 10, 15; BUILDING_FAMILIES.md 5, 6

### DIST-MORTYTOWN — Mortytown

**Placement rationale:** Distinct neighbourhood with streets, alleys, Morty Mart, Creepy Morty, occupied residences (A). Placed at the rim on a lower-status/edge inference (C). NOT the same thing as Mortyburg (C-003) — the sector is adjacent to the Mortyburg interface only as a modelling convenience.

**Unknowns:** boundary; grid; vertical extent; true relationship to Mortyburg

**Evidence:** MORTYTOWN.md; RICKLANTIS_VISUAL_EVIDENCE.md 11-13; DIALOGUE_ARCHITECTURE_CROSSREF.md D-003; CONTRADICTION_LOG.md C-003

### DIST-BIG-MORTY — Big Morty criminal territory

**Placement rationale:** Criminal economy is shown inside Mortytown; the sub-sector is arbitrary.

**Unknowns:** extent

**Evidence:** LOCATION_REGISTER.md (Big Morty criminal territory); RICKLANTIS_VISUAL_EVIDENCE.md 11

### DIST-AGRICULTURAL — Agricultural edge (MegaFruit farm)

**Placement rationale:** Open agricultural land distinct from dense streets, previously identified as farm-at-edge; therefore an outer sector under the dome where open space reads correctly.

**Unknowns:** footprint; enclosure; whether farming is centralised

**Evidence:** RICKLANTIS_VISUAL_EVIDENCE.md 14 (farm-at-edge); BUILDING_FAMILIES.md 8; CONTRADICTION_LOG.md C-005

### DIST-CONSTRUCTION — Post-Rickshank construction zones

**Placement rationale:** Damaged buildings and roadways with active skyscraper reconstruction (A). Where the damage was is UNKNOWN; the sector is arbitrary. In the 3D model this is a state-dependent overlay, not a permanent district.

**Unknowns:** damage distribution

**Evidence:** RICKLANTIS_VISUAL_EVIDENCE.md 1; BUILDING_FAMILIES.md 9; DESTRUCTION_STATES.md DS-02/DS-03

### DIST-DOWNTOWN-RICKVILLE — Downtown Rickville (comic)

**Placement rationale:** Comic-only location. Per C-008 it is not given animated-continuity coordinates.

**Unknowns:** all

**Evidence:** COMIC_FINAL_STATUS.md; CITADEL_COMIC_TARGET_REGISTER.md

### LM-CENTRAL-PLAZA — Central plaza

**Placement rationale:** S01E10 arrival frame (gallery #01) shows a large central atrium plaza under ribbed glazing with a monument tower at its centre, water and rock at its edge and curved multi-level walkways sweeping around it. Combined with the S05E10 "central plaza", the plaza is now carried through all intact states and anchored on the origin.

**Unknowns:** whether the DS-01 atrium and the DS-04 plaza are the same space; exact size

**Evidence:** reference_images/CITADEL_IMAGE_GALLERY.md#01 (S01E10 arrival plaza); EPISODE_EVIDENCE_RICKMURAI_JACK.md (central plaza)

### LM-CENTRAL-MONUMENT — Central monument tower (Rick statue)

**Placement rationale:** Directly visible at the centre of the arrival plaza in S01E10 (gallery #01): a tall pale spire with a Rick figure on it, walkways meeting it at height. Height ratio to people is roughly 25:1 in frame; 0.5 U is a placeholder. Survival after DS-02 UNKNOWN. Gallery #14/#15 (S05E10 plaza during the collapse) show an ornate pointed spire with arched base at the plaza centre, so a central spire persists into the late Citadel; its form differs from the S01E10 monument (rebuilt or re-dressed), which is why the node is carried through DS-03..05 rather than duplicated.

**Unknowns:** height; whether the DS-01 and DS-04 spires are the same structure; relation to the Presidential Building

**Evidence:** reference_images/CITADEL_IMAGE_GALLERY.md#15 (S05E10 plaza destruction ground); reference_images/CITADEL_IMAGE_GALLERY.md#14 (S05E10 plaza destruction wide); reference_images/CITADEL_IMAGE_GALLERY.md#01 (S01E10 arrival plaza)

**Sub-features to model:** tall tapering spire; Rick statue/relief on the shaft; plinth at plaza level; elevated walkway attachments; late-era form: ornate pointed spire with arched base and orange detailing (#14/#15)

### CIRC-CORE-WALKWAYS — Elevated curved walkways around the core

**Placement rationale:** Gallery #01 shows at least three tiers of curved pedestrian walkways sweeping around the atrium at different heights. Modelled as one ring at z 0.12; add tiers once frames give the spacing.

**Unknowns:** tier count; heights; where they land

**Evidence:** reference_images/CITADEL_IMAGE_GALLERY.md#01 (S01E10 arrival plaza); VERTICAL_LAYERS.md (elevated circulation)

### LM-CORE-WATER — Atrium water feature and rock garden

**Placement rationale:** Water and large rocks flank the plaza on the left of the S01E10 arrival frame; confirms natural elements inside the civic core. Side is camera-relative, so the azimuth is placeholder. Gallery #15 shows a fountain pool with trees and planting in the late plaza, so the water feature persists (in some form) through DS-03..05.

**Unknowns:** extent; which side of the plaza

**Evidence:** reference_images/CITADEL_IMAGE_GALLERY.md#15 (S05E10 plaza destruction ground); reference_images/CITADEL_IMAGE_GALLERY.md#01 (S01E10 arrival plaza); VERTICAL_LAYERS.md (trees, fountains)

**Sub-features to model:** pond/pool; boulders; planting

### LM-SPIRE-CLUSTER — Central spire cluster (DS-03 skyline)

**Placement rationale:** The S03E07 streetscape (gallery #02) has a cluster of very tall spires on the vanishing point behind lower blocks; the tallest masses are therefore central, supporting the core-to-rim height gradient. Placed in the civic core; exact position UNKNOWN.

**Unknowns:** spire count; heights vs dome; exact position

**Evidence:** reference_images/CITADEL_IMAGE_GALLERY.md#02 (S03E07 streetscape)

**Sub-features to model:** several tapering spires; tallest masses in the skyline; glowing cyan strip lighting

### CIRC-ELEVATED-TUBE — Elevated transit tube crossing the street

**Placement rationale:** Gallery #02 shows a horizontal transit tube/bridge spanning a pedestrian street at roughly 2-3 storeys. This is the first visual support for the rail loop being elevated; the loop stays PROVISIONAL at z 0.05 but the tube is logged as its own node until the two are proven the same.

**Unknowns:** whether this is the commuter rail; height; route

**Evidence:** reference_images/CITADEL_IMAGE_GALLERY.md#02 (S03E07 streetscape); RICKLANTIS_VISUAL_EVIDENCE.md 7

### LM-PRESIDENTIAL-BUILDING — Presidential Building

**Placement rationale:** Exited into the collapse sequence that also shows the plaza; placed on the plaza edge. Tallest civic mass by convention. Gallery #12 (dining room) shows a circular panoramic glazed room high above the skyline with spires and a domed building visible below, consistent with a tall building whose top level is a round glazed chamber.

**Unknowns:** footprint; height; which plaza edge; relationship to Council Hall (C-004)

**Evidence:** reference_images/CITADEL_IMAGE_GALLERY.md#12 (S05E10 Presidential dining room); EPISODE_EVIDENCE_RICKMURAI_JACK.md (Rick and Morty exit it during the collapse)

**Sub-features to model:** tall shaft; circular panoramic glazed top level (#12); exit onto the plaza (S05E10)

### LM-PLAZA-DOME-BUILDING — Domed building at the plaza edge

**Placement rationale:** A large pale domed building with an orange roof stands at the plaza edge in the S05E10 collapse frames and a similar dome is visible from the Presidential dining room (#12). Side of the plaza is camera-relative, so the azimuth is placeholder.

**Unknowns:** function; exact position; whether it is the Council/Shadow Council hall

**Evidence:** reference_images/CITADEL_IMAGE_GALLERY.md#14 (S05E10 plaza destruction wide); reference_images/CITADEL_IMAGE_GALLERY.md#15 (S05E10 plaza destruction ground); reference_images/CITADEL_IMAGE_GALLERY.md#12 (S05E10 Presidential dining room)

**Sub-features to model:** pale drum; yellow-orange domed roof; arched openings

### LM-COUNCIL-HALL — Council Hall (Council of Ricks)

**Placement rationale:** Council chamber with stage/seating is direct (A). Its exterior and its position relative to the later Presidential Building are UNKNOWN. Placed in the civic core. States end at DS-02 because the Council is destroyed in Rickshank; whether the building persists is UNKNOWN. Gallery #24 (S01E10) shows the civic building the arriving Ricks face: a broad multi-storey glazed façade with three large emblem banners, a grand stair, a domed turret and tall spires behind. Identified as the Council building by the Council-era emblem; position still not shown.

**Unknowns:** exterior massing; floor count; survival after DS-02; relation to Shadow Council Hall

**Evidence:** reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#24 (S01E10 civic building entrance); COUNCIL_CHAMBER.md; LOCATION_REGISTER.md (Council Hall); EVIDENCE_MATRIX.md E-008

**Sub-features to model:** grand entrance stair (#24); layered glazed façade; three emblem banners; domed turret; arched central door

### LM-COUNCIL-CHAMBER — Council chamber (interior)

**Placement rationale:** Interior arrangement is visible; the six-member Council gives the seat count. Gallery #06 shows the Council seated on a tall curved raised bench well above the floor, with large organic trunk-like columns and a yellow-green palette. Gallery #26 (S03E01) shows the tribunal form: a raised yellow curved dais bearing the Council emblem, an audience floor below, and a giant oval feature wall behind.

**Unknowns:** room proportions; ceiling height

**Evidence:** reference_images/CITADEL_IMAGE_GAP_CLOSURE_BATCH_02.md#26 (S03E01 Council hall); reference_images/CITADEL_IMAGE_GALLERY.md#06 (S01E10 Council chamber); COUNCIL_CHAMBER.md; DIMENSIONAL_EVIDENCE_TABLE.md (seating/stage arrangement visible)

**Sub-features to model:** tall curved raised bench for six; floor well below the bench; large organic trunk-like columns; controlled entry; raised curved dais with emblem (#26); giant oval feature wall (#26)

### LM-SHADOW-COUNCIL-HALL — Shadow Council Hall

**Placement rationale:** Dedicated interior with designated seats (A). Not proven to be the old Council Hall; kept as a separate node in the civic core.

**Unknowns:** exterior; identity with LM-COUNCIL-HALL

**Evidence:** RICKLANTIS_VISUAL_EVIDENCE.md 16; CONTRADICTION_LOG.md C-004

### LM-COURTHOUSE — Courthouse / judicial facility

**Placement rationale:** Judicial function exists; no building shown. Civic-core slot.

**Unknowns:** everything physical

**Evidence:** CIVIC_SYSTEMS.md (courts/law); LOCATION_REGISTER.md; CONTRADICTION_LOG.md C-004

### LM-MORTY-AGENCY — Morty Agency

**Placement rationale:** Administrative facility with controlled access (A/B). Placed in the civic core as an administrative function; adjacency to anything is explicitly NOT established.

**Unknowns:** footprint; district; exterior

**Evidence:** EPISODE_EVIDENCE_UNMORTRICKEN.md; DIALOGUE_ARCHITECTURE_CROSSREF.md D-012, D-013

**Sub-features to model:** reception/counter (Counter Rick); guard post (Guard Rick); Morty database room

### LM-MILITIA-HQ — Citadel militia / SEAL Team Ricks base

**Placement rationale:** Council-era security force exists; the facility is inferred. Near the civic core for government access. Gallery #20 shows armed Ricks in a glazed corridor with planting, so security circulation shares the civic core's glazed, vegetated language.

**Unknowns:** whether it is the same site as LM-POLICE-HQ in later states

**Evidence:** reference_images/CITADEL_IMAGE_GALLERY.md#20 (S01E10 security corridor); CITADEL_POLICE.md (Council era militia, SEAL Team Ricks); LOCATION_REGISTER.md

### LM-POLICE-HQ — Citadel Police HQ and Academy

**Placement rationale:** Police patrol Mortytown and dispatch to 'Fifth and Burp'; HQ placed between the civic core and Mortytown so patrol routes are short. Integrated into the street network per CITADEL_POLICE.md.

**Unknowns:** footprint; whether HQ and Academy are one building

**Evidence:** RICKLANTIS_VISUAL_EVIDENCE.md 5; CITADEL_POLICE.md; EVIDENCE_MATRIX.md E-009

**Sub-features to model:** offices; academy classrooms; indoor shooting range; cruiser garage / vehicle access

### LM-SHOOTING-RANGE — Police Academy shooting range

**Placement rationale:** Directly shown interior.

**Unknowns:** lane count; range length

**Evidence:** RICKLANTIS_VISUAL_EVIDENCE.md 5

**Sub-features to model:** firing line; synthetic Gromflomite targets; lane dividers

### LM-MORTY-ACADEMY — Morty Academy

**Placement rationale:** Morty-serving institution; placed on the inner edge of Mortytown (C). Adjacency is not shown.

**Unknowns:** district; footprint; floor count

**Evidence:** RICKLANTIS_VISUAL_EVIDENCE.md 6; CIVIC_SYSTEMS.md (education)

**Sub-features to model:** lockable main entrance; locker corridor; classrooms; graduation/assignment hall

### LM-SIMPLE-RICKS — Simple Rick's Wafer Cookie Factory

**Placement rationale:** Large industrial complex with multiple internal security zones (A). Placed in DIST-INDUSTRIAL. Footprint is the largest single building envelope by convention.

**Unknowns:** footprint; floor plan; position relative to Mortytown

**Evidence:** SIMPLE_RICKS_FACTORY.md; RICKLANTIS_VISUAL_EVIDENCE.md 9-10; EVIDENCE_MATRIX.md E-010

**Sub-features to model:** exterior entrance/approach with media staging; assembly-line production floor; supervisory offices overlooking the floor; processing machinery with brain-extraction tubing; Flavor Core secured chamber; SWAT approach corridor

### LM-FLAVOR-CORE — Flavor Core chamber

**Placement rationale:** Secured chamber inside the factory, at the far end from the entrance by convention. Gallery #18 shows a circular chamber with a large central cylindrical tank fed by tubes, the Simple Rick chair beside it, and observation glazing around the perimeter. Geometry changed from a box to a cylinder.

**Unknowns:** dimensions; position within factory

**Evidence:** reference_images/CITADEL_IMAGE_GALLERY.md#18 (S03E07 Flavor Core); RICKLANTIS_VISUAL_EVIDENCE.md 10

**Sub-features to model:** circular room; central cylindrical tank with tubing; chair with headgear; perimeter observation glazing; force-field/lockdown door

### LM-WISHING-PORTAL — Wishing Portal compound

**Placement rationale:** Rusty building inside a tall circular wall with a gated entrance (A). It is a waste-disposal facility; grouped with industry at the rim. The portal pit is assumed to drop into V-1/V-2.

**Unknowns:** disposal machinery; destination; whether the Waste Disposal Plant is this site (kept separate as LM-WASTE-PLANT)

**Evidence:** RICKLANTIS_VISUAL_EVIDENCE.md 15; LOCATION_REGISTER.md (Wishing Portal; Waste Disposal Plant); CIVIC_SYSTEMS.md (waste)

**Sub-features to model:** tall circular wall; gated/locked entrance; rusty building; portal pit inside

### LM-WASTE-PLANT — Waste Disposal Plant

**Placement rationale:** Named in secondary sources; placed next to the Wishing Portal because both are waste infrastructure. Not proven to be the same site.

**Unknowns:** identity with LM-WISHING-PORTAL; everything physical

**Evidence:** LOCATION_REGISTER.md (Waste Disposal Plant); UTILITY_SYSTEMS.md (waste)

### LM-AIRLOCK-PODS — Body-disposal airlock pods

**Placement rationale:** Pods expel bodies into space, so they must penetrate the outer hull. Placed on the rim beside the waste facilities (C). Separate system from the Wishing Portal per the evidence register.

**Unknowns:** count; location; whether they are on the dome rim or the lower body

**Evidence:** RICKLANTIS_VISUAL_EVIDENCE.md 17; EPISODE_EVIDENCE_RICKLANTIS.md (airlock)

### LM-MEGAFRUIT-FARM — MegaFruit farm

**Placement rationale:** Directly shown open farm with Farmer Rick and robot dog.

**Unknowns:** area; enclosure

**Evidence:** RICKLANTIS_VISUAL_EVIDENCE.md 14; CONTRADICTION_LOG.md C-005

**Sub-features to model:** cultivated rows; Mega Trees / Mega Fruit; farmhouse/structures; water feature; robot-dog patrol area

### LM-CAFE-SANCHEZ — Cafe Sanchez

**Placement rationale:** Street-front cafe with taxi access (A). Commercial-ring slot; exact block UNKNOWN.

**Unknowns:** district; block

**Evidence:** RICKLANTIS_VISUAL_EVIDENCE.md 4

**Sub-features to model:** street-front entrance; curbside taxi pickup

### LM-NEWSROOM — Citadel Morning News studio

**Placement rationale:** Dedicated newsroom (A). Commercial-ring slot.

**Unknowns:** exterior; district

**Evidence:** RICKLANTIS_VISUAL_EVIDENCE.md 8

### LM-SKYSCRAPER-REBUILD — Skyscraper under reconstruction

**Placement rationale:** Directly shown rebuild of a tall building.

**Unknowns:** location

**Evidence:** RICKLANTIS_VISUAL_EVIDENCE.md 1

**Sub-features to model:** scaffolding; exposed structure; heavy structural members being placed by Ricks

### LM-MORTY-MART — Morty Mart

**Placement rationale:** Street-facing retail in Mortytown (A).

**Unknowns:** block

**Evidence:** RICKLANTIS_VISUAL_EVIDENCE.md 12

**Sub-features to model:** checkout; aisles

### LM-CREEPY-MORTY — The Creepy Morty

**Placement rationale:** Named venue with exterior entrance in Mortytown (A/B).

**Unknowns:** interior

**Evidence:** RICKLANTIS_VISUAL_EVIDENCE.md 13

**Sub-features to model:** exterior entrance; police hovercar arrival area

### LM-MORTYTOWN-RESIDENCE — Mortytown residential interior (crib scene)

**Placement rationale:** Proves occupied residential interiors exist in Mortytown.

**Unknowns:** building

**Evidence:** EPISODE_EVIDENCE_RICKLANTIS.md (residential/criminal interior with crib)

### LM-MORTY-DAY-CARE — Morty Day Care

**Placement rationale:** Named business; Morty-serving so slotted in Mortytown (C).

**Unknowns:** all

**Evidence:** DISTRICTS.md; LOCATION_REGISTER.md

### LM-MORTY-GAMES — Morty Games

**Placement rationale:** As LM-MORTY-DAY-CARE.

**Unknowns:** all

**Evidence:** DISTRICTS.md; LOCATION_REGISTER.md

### LM-MORTY-INSURANCE — Morty Insurance

**Placement rationale:** Financial service; commercial-ring slot on the Mortytown side.

**Unknowns:** all

**Evidence:** DISTRICTS.md; LOCATION_REGISTER.md

### LM-SALTY-RICK — The Salty Rick

**Placement rationale:** Named venue; commercial-ring slot.

**Unknowns:** all

**Evidence:** LOCATION_REGISTER.md

### LM-BIG-RICKS-GUMBO — Big Rick's Gumbo Hutch

**Placement rationale:** Named venue; commercial-ring slot.

**Unknowns:** all

**Evidence:** DISTRICTS.md

### LM-REBUILD-A-MORTY — Re-Build-A-Morty

**Placement rationale:** Named facility from S05E10; slot only. Gallery #11 shows a retail interior with a glass cloning tube, service counter and shelving; confirms storefront scale.

**Unknowns:** all

**Evidence:** reference_images/CITADEL_IMAGE_GALLERY.md#11 (S05E10 Re-Build-A-Morty); LOCATION_REGISTER.md (Re-Build-A-Morty, Rickmurai Jack)

**Sub-features to model:** glass cloning tube; service counter; shelving; signage over entrance

### LM-RICKINGHAM-PALACE — Rickingham Palace (comic)

**Placement rationale:** Comic-only; not placed in animated continuity (C-008).

**Unknowns:** all

**Evidence:** COMIC_FINAL_STATUS.md

### PROP-BANNERS — Regime banners over Rick emblems

**Placement rationale:** State-dependent decal layer on civic buildings: Rick emblems (DS-01..03) replaced by Morty/Rick banners (late DS-03 onward).

**Unknowns:** which buildings

**Evidence:** RICKLANTIS_VISUAL_EVIDENCE.md 16; EPISODE_EVIDENCE_RICKLANTIS.md (political/architectural transition)

### PROP-STREET-FURNITURE — Street furniture, signage, trees, fountains

**Placement rationale:** Catalogue per frame; scatter procedurally in the 3D model. Gallery #15: trees in planters and a fountain pool in the late plaza.

**Unknowns:** all placement

**Evidence:** reference_images/CITADEL_IMAGE_GALLERY.md#15 (S05E10 plaza destruction ground); BUILDING_FAMILIES.md (streetscape details); VERTICAL_LAYERS.md (trees, fountains)

### UG-SEWERS — Sewer / utility passages

**Placement rationale:** Person-sized passages exist (A). Routing under the road network is a modelling convention.

**Unknowns:** map; depth

**Evidence:** UTILITY_SYSTEMS.md (sewers); EPISODE_EVIDENCE_RICKMURAI_JACK.md (deformed Mortys emerge from sewers)

### UG-PORTAL-FLUID — Portal-fluid production complex ('cave base')

**Placement rationale:** Reached by descending from the city; described as a cave base with a large central vat (A). Now placed in the lower deck of the drum just above the keel; offset from the axis so it clears the Drive void below. Offset direction is arbitrary.

**Unknowns:** footprint; depth; relation to the Drive; relation to the citywide supply

**Evidence:** EPISODE_EVIDENCE_RICKMURAI_JACK.md (portal-fluid production / mines); DIALOGUE_ARCHITECTURE_CROSSREF.md D-006, D-007

**Sub-features to model:** large central vat; collection containers; deformed-Morty work areas; rock/cave surfaces; connection to SYS-PORTAL-SUPPLY

### UG-DIM-DRIVE — Dimensional Drive chamber

**Placement rationale:** Secondary sources describe the Drive as central; its failure deforms the whole Citadel, consistent with a central position. Anchored on the axis below the civic core. The funnel form (hologram #04) puts the widest underground volume just below the city and narrows towards the apex: the Drive fits the upper funnel, the launch chamber and chute the neck. Gallery #13 shows a long straight suspended platform/bridge over a dark void with the Central Finite Curve portal-spiral projected beside it; #17 shows a rail cart running on a curved rail in the same environment. The chamber is therefore a large void spanned by walkways, not a solid machinery block.

**Unknowns:** chamber dimensions; floor elevations; hull connections; exact relation to UG-PORTAL-FLUID

**Evidence:** reference_images/CITADEL_IMAGE_GALLERY.md#17 (S05E10 rail cart); reference_images/CITADEL_IMAGE_GALLERY.md#13 (S05E10 Central Finite Curve platform); EPISODE_EVIDENCE_RICKMURAI_JACK.md (Dimensional Drive); SOURCE_INDEX.md (central position); DIALOGUE_ARCHITECTURE_CROSSREF.md D-005; GEOMETRY_DATABASE.md G-011; reference_images/CITADEL_IMAGE_GALLERY.md#04 (S05E10 founding hologram)

**Sub-features to model:** drive core; glass-domed control enclosure; control interface; evacuation infrastructure; Operation Phoenix vat feeds; launch platforms; long straight suspended walkway/bridge over void (#13); portal-array spiral display (#13); curved service rail with cart (#17)

### UG-CONTROL-ENCLOSURE — Glass-domed control enclosure

**Placement rationale:** Directly described; placed on a platform at the chamber edge overlooking the core. Gallery #13 shows the enclosure as a glass dome on a raised round platform with a ring of lights at its base, at the edge of a large dark chamber beside a long straight suspended walkway.

**Unknowns:** size; position in chamber

**Evidence:** reference_images/CITADEL_IMAGE_GALLERY.md#13 (S05E10 Central Finite Curve platform); EPISODE_EVIDENCE_RICKMURAI_JACK.md (glass-domed/control enclosure around the principal control interface)

**Sub-features to model:** glass dome; raised round platform; ring of base lights; control console inside

### UG-PHOENIX-VATS — Operation Phoenix vats

**Placement rationale:** Vats feed the Drive, so they ring the core. Count of six is placeholder.

**Unknowns:** count; size; feed routing

**Evidence:** EPISODE_EVIDENCE_RICKMURAI_JACK.md (Operation Phoenix vats feed biological material into the drive process)

### UG-LAUNCH-CHAMBER — Launch chamber (Evil Morty's spacecraft)

**Placement rationale:** The spacecraft is loaded from the Drive area into the chute; the chamber sits in the funnel neck between the Drive and the apex chute. Survives as RUIN-LAUNCH-CHAMBER in DS-06.

**Unknowns:** footprint; track length; relation to Drive core

**Evidence:** EPISODE_EVIDENCE_SOLARICKS.md (surviving launch/technical chamber); EPISODE_EVIDENCE_RICKMURAI_JACK.md (spacecraft loaded into an exit chute)

**Sub-features to model:** platforms with piping; launch track leading to chute; glass panels; spacecraft cradle

### UG-EXIT-CHUTE — Spacecraft exit chute

**Placement rationale:** Chute from the launch chamber down inside the energy blade to the exit aperture at z −1.0. Vertical by assumption.

**Unknowns:** angle (vertical vs inclined); length

**Evidence:** EPISODE_EVIDENCE_RICKMURAI_JACK.md (launched from the bottom of the Citadel); EPISODE_EVIDENCE_SOLARICKS.md (launch track)

### IF-MORTYBURG — Mortyburg attachment interface

**Placement rationale:** Engineered structural/transit interface with a closing entrance (A). Moved to the root of ARM-MB where the arm meets the main body, so the rail spur passes through it onto the arm. Sits inside the 0.2 R-thick arm root (z −0.06 → +0.02). Placed on the arm service deck under the concourse.

**Unknowns:** attachment count; diameter; service connections

**Evidence:** EPISODE_EVIDENCE_RICKMURAI_JACK.md (Mortyburg detachment); DIALOGUE_ARCHITECTURE_CROSSREF.md D-008, D-009

**Sub-features to model:** closing entrance / blast door; rail passes through; DISENGAGE control; structural release

### MB-THRUSTERS — Mortyburg boosters / thrusters

**Placement rationale:** Thrusters fire after separation (A); on the underside by convention.

**Unknowns:** count; placement

**Evidence:** DIALOGUE_ARCHITECTURE_CROSSREF.md D-010

### RUIN-DEBRIS-FIELD — Post-destruction debris field

**Placement rationale:** Large spatially coherent ruin exposed to vacuum, with distinct fragments. Radius is a placeholder for the fragment scatter.

**Unknowns:** fragment positions; surviving fraction of shell

**Evidence:** EPISODE_EVIDENCE_SOLARICKS.md; CONTRADICTION_LOG.md C-009

### RUIN-LAUNCH-CHAMBER — Ruined launch chamber

**Placement rationale:** Same envelope as UG-LAUNCH-CHAMBER, ruin variant. Whether the fragment kept its original position is UNKNOWN (C-009).

**Unknowns:** fragment orientation

**Evidence:** EPISODE_EVIDENCE_SOLARICKS.md (surviving launch/technical chamber)

**Sub-features to model:** broken piping; broken glass; surviving platforms; surviving track segment; scavenger access from exterior

### RUIN-BEACON — Summer's beacon on the ruins

**Placement rationale:** Navigation target on an exposed ruin surface.

**Unknowns:** position

**Evidence:** EPISODE_EVIDENCE_SOLARICKS.md (beacon)

### NEW-CITADEL — New Citadel construction (Boss Hog Rick)

**Placement rationale:** Separate architecture reusing wreckage; NOT a restoration of the original geometry (C-010). Envelope placed over part of the debris field. Gallery #21 shows Boss Hog's throne room with tall glazed walls looking onto a red-lit industrial interior of pipes, gantries and tanks; the New Citadel reads as an industrial plant with a ceremonial room, not a city.

**Unknowns:** form; extent; which wreckage it occupies

**Evidence:** reference_images/CITADEL_IMAGE_GALLERY.md#21 (S08E03 Boss Hog throne room); CITADEL_DESTRUCTION.md State 6; DESTRUCTION_STATES.md DS-07; CONTRADICTION_LOG.md C-010

**Sub-features to model:** new construction built around/over wreckage; lab/construction areas; Boss Hog facilities; throne room with tall glazing (#21); industrial pipe/gantry hall beyond (#21)
