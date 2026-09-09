# Node Register (generated — do not edit; edit `citadel_schematic.json` and run `python schematic/build.py`)

74 nodes. Positions are in U (1 U = DOME-P radius). Placement class governs how much trust the position deserves.

| ID | Name | Kind | Layer | Bands | Exist. | Placement | States | Position (X,Y,Z) | Parent | Key evidence |
|---|---|---|---|---|---|---|---|---|---|---|
| `SHELL-LOWER-BODY` | Lower metallic structural body | shell | L0 | V0 V-1 V-2 V-3 V-4 | A | PROVISIONAL | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | — | EXTERIOR.md; SOURCE_INDEX.md (lower metallic structural plates) |
| `SHELL-PLATES` | Exterior structural plates | shell | L0 | V-1 V-2 V-3 V-4 | A | PLACEHOLDER | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | SHELL-LOWER-BODY | SOURCE_INDEX.md (lower metallic structural plates); EXTERIOR.md checklist |
| `SHELL-UNDERSIDE` | Hull underside with exit aperture | shell | L0 | V-4 | B | ANCHORED | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,-0.65 | SHELL-LOWER-BODY | EPISODE_EVIDENCE_RICKMURAI_JACK.md (spacecraft launched from the bottom of the Citadel) |
| `DOME-P` | Principal transparent dome | dome | L1 | V0 V+1 V+2 V+3 | A | LOCKED | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | — | EXTERIOR.md; SOURCE_INDEX.md |
| `DOME-S1` | Secondary dome 1 | dome | L1 | V0 V+1 | B | PLACEHOLDER | DS-01 DS-02 DS-03 DS-04 DS-05 | +1.30,+0.00,+0.00 | — | SOURCE_INDEX.md (three smaller domed districts); CONTRADICTION_LOG.md C-002 |
| `DOME-S2` | Secondary dome 2 | dome | L1 | V0 V+1 | B | PLACEHOLDER | DS-01 DS-02 DS-03 DS-04 DS-05 | -0.65,+1.13,+0.00 | — | SOURCE_INDEX.md (three smaller domed districts); CONTRADICTION_LOG.md C-002 |
| `DOME-MB` | Mortyburg dome (detachable section) | dome | L1 | V0 V+1 V-1 | A | PROVISIONAL | DS-01 DS-02 DS-03 DS-04 DS-05 DS-06 | -0.65,-1.13,+0.00 | — | LOCATION_REGISTER.md (Mortyburg: smaller domed district; detachable); EPISODE_EVIDENCE_RICKMURAI_JACK.md (Mortyburg detachment) |
| `CIRC-RING-1` | Inner circumferential road | circulation | L2 | V0 | B | PROVISIONAL | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | — | GEOMETRY_DATABASE.md G-005; EXTERIOR.md (radial/circular organisation) |
| `CIRC-RING-2` | Middle circumferential road | circulation | L2 | V0 | B | PROVISIONAL | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | — | GEOMETRY_DATABASE.md G-005 |
| `CIRC-RING-3` | Outer circumferential road | circulation | L2 | V0 | B | PROVISIONAL | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | — | GEOMETRY_DATABASE.md G-005 |
| `CIRC-RADIALS` | Radial avenues (8) | circulation | L2 | V0 | B | PROVISIONAL | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | — | GEOMETRY_DATABASE.md G-004 |
| `CIRC-5TH-BURP` | Fifth and [Burp] Avenue intersection | circulation | L2 | V0 | A | PROVISIONAL | DS-03 | -0.42,-0.42,+0.00 | — | DIALOGUE_ARCHITECTURE_CROSSREF.md D-001; RICKLANTIS_VISUAL_EVIDENCE.md (dispatch associates it with Mortytown) |
| `CIRC-RAIL-LOOP` | Commuter rail loop | circulation | L2 | V0 V+2 | A | PROVISIONAL | DS-03 DS-04 DS-05 | +0.00,+0.00,+0.05 | — | RICKLANTIS_VISUAL_EVIDENCE.md 7; DIALOGUE_ARCHITECTURE_CROSSREF.md D-004 |
| `CIRC-RAIL-MB-SPUR` | Rail spur to Mortyburg | circulation | L2 | V0 V+2 | A | PROVISIONAL | DS-04 DS-05 | +0.00,+0.00,+0.05 | — | DIALOGUE_ARCHITECTURE_CROSSREF.md D-008; EPISODE_EVIDENCE_RICKMURAI_JACK.md (train route connecting affected area to Mortyburg) |
| `CIRC-TRAM-PLAZA` | Plaza tramway | circulation | L2 | V0 | A | ANCHORED | DS-04 DS-05 | +0.00,+0.00,+0.00 | — | EPISODE_EVIDENCE_RICKMURAI_JACK.md (plaza / tramway / lower city) |
| `CIRC-HOVER-BAND` | Hover / flying traffic band | circulation | L2 | V+2 | A | PROVISIONAL | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | — | TRANSPORTATION.md (hover traffic); RICKLANTIS_VISUAL_EVIDENCE.md 2 |
| `CIRC-MANHOLE` | Manhole / sewer access near plaza | circulation | L2 | V0 V-1 | A | ANCHORED | DS-04 DS-05 | +0.16,-0.08,+0.00 | — | EPISODE_EVIDENCE_RICKMURAI_JACK.md (manhole used by Rick and Morty); UTILITY_SYSTEMS.md (sewers) |
| `SYS-PORTAL-SUPPLY` | Citywide portal supply network | utility | L2 | V0 V-1 V-2 | A | UNPLACED | DS-01 DS-02 DS-03 DS-04 DS-05 | — | — | EPISODE_EVIDENCE_RICKMURAI_JACK.md (citywide portal supply can be hacked); CONTRADICTION_LOG.md C-006 |
| `SYS-TAXI` | Hover taxi service | utility | L2 | V0 V+2 | A | UNPLACED | DS-03 DS-04 | — | — | RICKLANTIS_VISUAL_EVIDENCE.md 4 (taxi passes Campaign Manager Morty) |
| `DIST-CIVIC-CORE` | Civic / government core | district | L3 | V0 V+1 | B | ANCHORED | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | — | EPISODE_EVIDENCE_RICKMURAI_JACK.md (central plaza, Presidential Building); COUNCIL_CHAMBER.md |
| `DIST-COMMERCIAL-RING` | Commercial / high-rise ring | district | L3 | V0 V+1 | B | PROVISIONAL | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | — | RICKLANTIS_VISUAL_EVIDENCE.md 1-4, 8; BUILDING_FAMILIES.md 1, 7 |
| `DIST-RICK-RESIDENTIAL` | High-status Rick residential | district | L3 | V0 V+1 | C | PLACEHOLDER | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | — | CIVIC_SYSTEMS.md (social stratification); MORTYTOWN.md (contrast with higher-status Rick areas) |
| `DIST-EAST-SANCHEZ-HEIGHTS` | East Sanchez Heights | district | L3 | V0 V+1 | A | PLACEHOLDER | DS-03 | +0.00,+0.00,+0.00 | — | DIALOGUE_ARCHITECTURE_CROSSREF.md D-002; RICKLANTIS_VISUAL_EVIDENCE.md 8 (gravity outage) |
| `DIST-INDUSTRIAL` | Industrial sector | district | L3 | V0 V+1 V-1 | B | PROVISIONAL | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | — | SIMPLE_RICKS_FACTORY.md; RICKLANTIS_VISUAL_EVIDENCE.md 9, 10, 15 |
| `DIST-MORTYTOWN` | Mortytown | district | L3 | V0 V+1 | A | PLACEHOLDER | DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | — | MORTYTOWN.md; RICKLANTIS_VISUAL_EVIDENCE.md 11-13 |
| `DIST-BIG-MORTY` | Big Morty criminal territory | district | L3 | V0 | A | PLACEHOLDER | DS-03 | +0.00,+0.00,+0.00 | DIST-MORTYTOWN | LOCATION_REGISTER.md (Big Morty criminal territory); RICKLANTIS_VISUAL_EVIDENCE.md 11 |
| `DIST-AGRICULTURAL` | Agricultural edge (MegaFruit farm) | district | L3 | V0 | A | PROVISIONAL | DS-03 DS-04 DS-05 | +0.00,+0.00,+0.00 | — | RICKLANTIS_VISUAL_EVIDENCE.md 14 (farm-at-edge); BUILDING_FAMILIES.md 8 |
| `DIST-CONSTRUCTION` | Post-Rickshank construction zones | district | L3 | V0 V+1 | A | PLACEHOLDER | DS-02 DS-03 | +0.00,+0.00,+0.00 | — | RICKLANTIS_VISUAL_EVIDENCE.md 1; BUILDING_FAMILIES.md 9 |
| `DIST-DOWNTOWN-RICKVILLE` | Downtown Rickville (comic) | district | L3 | V0 V+1 | A | UNPLACED | — | — | — | COMIC_FINAL_STATUS.md; CITADEL_COMIC_TARGET_REGISTER.md |
| `LM-CENTRAL-PLAZA` | Central plaza | landmark | L5 | V0 | A | ANCHORED | DS-04 DS-05 | +0.00,+0.00,+0.00 | — | EPISODE_EVIDENCE_RICKMURAI_JACK.md (central plaza) |
| `LM-PRESIDENTIAL-BUILDING` | Presidential Building | landmark | L4 | V0 V+1 | A | PROVISIONAL | DS-04 DS-05 | +0.00,+0.19,+0.00 | — | EPISODE_EVIDENCE_RICKMURAI_JACK.md (Rick and Morty exit it during the collapse) |
| `LM-COUNCIL-HALL` | Council Hall (Council of Ricks) | landmark | L4 | V0 V+1 | A | PLACEHOLDER | DS-01 DS-02 | -0.20,+0.06,+0.00 | — | COUNCIL_CHAMBER.md; LOCATION_REGISTER.md (Council Hall) |
| `LM-COUNCIL-CHAMBER` | Council chamber (interior) | interior | L4 | V0 | A | PROVISIONAL | DS-01 DS-02 | -0.20,+0.06,+0.00 | LM-COUNCIL-HALL | COUNCIL_CHAMBER.md; DIMENSIONAL_EVIDENCE_TABLE.md (seating/stage arrangement visible) |
| `LM-SHADOW-COUNCIL-HALL` | Shadow Council Hall | landmark | L4 | V0 V+1 | A | PLACEHOLDER | DS-03 DS-04 | -0.20,-0.12,+0.00 | — | RICKLANTIS_VISUAL_EVIDENCE.md 16; CONTRADICTION_LOG.md C-004 |
| `LM-COURTHOUSE` | Courthouse / judicial facility | landmark | L4 | V0 V+1 | B | PLACEHOLDER | DS-01 DS-02 DS-03 DS-04 | +0.20,+0.10,+0.00 | — | CIVIC_SYSTEMS.md (courts/law); LOCATION_REGISTER.md |
| `LM-MORTY-AGENCY` | Morty Agency | landmark | L4 | V0 V+1 | A | PLACEHOLDER | DS-03 DS-04 | +0.18,-0.16,+0.00 | — | EPISODE_EVIDENCE_UNMORTRICKEN.md; DIALOGUE_ARCHITECTURE_CROSSREF.md D-012, D-013 |
| `LM-MILITIA-HQ` | Citadel militia / SEAL Team Ricks base | landmark | L4 | V0 V+1 | A | PLACEHOLDER | DS-01 DS-02 | -0.05,-0.24,+0.00 | — | CITADEL_POLICE.md (Council era militia, SEAL Team Ricks); LOCATION_REGISTER.md |
| `LM-POLICE-HQ` | Citadel Police HQ and Academy | landmark | L4 | V0 V+1 | A | PROVISIONAL | DS-03 DS-04 | -0.36,-0.28,+0.00 | — | RICKLANTIS_VISUAL_EVIDENCE.md 5; CITADEL_POLICE.md |
| `LM-SHOOTING-RANGE` | Police Academy shooting range | interior | L4 | V0 | A | PROVISIONAL | DS-03 | -0.36,-0.28,+0.00 | LM-POLICE-HQ | RICKLANTIS_VISUAL_EVIDENCE.md 5 |
| `LM-MORTY-ACADEMY` | Morty Academy | landmark | L4 | V0 V+1 | A | PROVISIONAL | DS-03 DS-04 | -0.45,-0.55,+0.00 | — | RICKLANTIS_VISUAL_EVIDENCE.md 6; CIVIC_SYSTEMS.md (education) |
| `LM-SIMPLE-RICKS` | Simple Rick's Wafer Cookie Factory | landmark | L4 | V0 V+1 V-1 | A | PROVISIONAL | DS-01 DS-02 DS-03 DS-04 DS-05 | +0.05,+0.78,+0.00 | — | SIMPLE_RICKS_FACTORY.md; RICKLANTIS_VISUAL_EVIDENCE.md 9-10 |
| `LM-FLAVOR-CORE` | Flavor Core chamber | interior | L4 | V0 | A | PROVISIONAL | DS-03 | +0.05,+0.84,+0.00 | LM-SIMPLE-RICKS | RICKLANTIS_VISUAL_EVIDENCE.md 10 |
| `LM-WISHING-PORTAL` | Wishing Portal compound | landmark | L4 | V0 V-1 V-2 | A | PROVISIONAL | DS-03 DS-04 | -0.35,+0.82,+0.00 | — | RICKLANTIS_VISUAL_EVIDENCE.md 15; LOCATION_REGISTER.md (Wishing Portal; Waste Disposal Plant) |
| `LM-WASTE-PLANT` | Waste Disposal Plant | landmark | L4 | V0 V-1 | B | PLACEHOLDER | DS-01 DS-02 DS-03 DS-04 | -0.22,+0.90,+0.00 | — | LOCATION_REGISTER.md (Waste Disposal Plant); UTILITY_SYSTEMS.md (waste) |
| `LM-AIRLOCK-PODS` | Body-disposal airlock pods | utility | L4 | V0 V-1 | A | PLACEHOLDER | DS-03 | -0.50,+1.09,-0.02 | — | RICKLANTIS_VISUAL_EVIDENCE.md 17; EPISODE_EVIDENCE_RICKLANTIS.md (airlock) |
| `LM-MEGAFRUIT-FARM` | MegaFruit farm | natural | L5 | V0 | A | PROVISIONAL | DS-03 DS-04 | +0.15,-0.85,+0.00 | DIST-AGRICULTURAL | RICKLANTIS_VISUAL_EVIDENCE.md 14; CONTRADICTION_LOG.md C-005 |
| `LM-CAFE-SANCHEZ` | Cafe Sanchez | landmark | L4 | V0 | A | PLACEHOLDER | DS-03 | +0.42,+0.20,+0.00 | — | RICKLANTIS_VISUAL_EVIDENCE.md 4 |
| `LM-NEWSROOM` | Citadel Morning News studio | landmark | L4 | V0 V+1 | A | PLACEHOLDER | DS-03 | +0.50,-0.12,+0.00 | — | RICKLANTIS_VISUAL_EVIDENCE.md 8 |
| `LM-SKYSCRAPER-REBUILD` | Skyscraper under reconstruction | landmark | L4 | V0 V+1 | A | PLACEHOLDER | DS-03 | -0.45,+0.15,+0.00 | DIST-CONSTRUCTION | RICKLANTIS_VISUAL_EVIDENCE.md 1 |
| `LM-MORTY-MART` | Morty Mart | landmark | L4 | V0 | A | PLACEHOLDER | DS-03 | -0.62,-0.48,+0.00 | DIST-MORTYTOWN | RICKLANTIS_VISUAL_EVIDENCE.md 12 |
| `LM-CREEPY-MORTY` | The Creepy Morty | landmark | L4 | V0 | A | PLACEHOLDER | DS-03 | -0.72,-0.62,+0.00 | DIST-MORTYTOWN | RICKLANTIS_VISUAL_EVIDENCE.md 13 |
| `LM-MORTYTOWN-RESIDENCE` | Mortytown residential interior (crib scene) | interior | L4 | V0 | A | PLACEHOLDER | DS-03 | -0.56,-0.68,+0.00 | DIST-MORTYTOWN | EPISODE_EVIDENCE_RICKLANTIS.md (residential/criminal interior with crib) |
| `LM-MORTY-DAY-CARE` | Morty Day Care | landmark | L4 | V0 | B | PLACEHOLDER | DS-03 DS-04 | -0.50,-0.74,+0.00 | DIST-MORTYTOWN | DISTRICTS.md; LOCATION_REGISTER.md |
| `LM-MORTY-GAMES` | Morty Games | landmark | L4 | V0 | B | PLACEHOLDER | DS-03 DS-04 | -0.66,-0.36,+0.00 | DIST-MORTYTOWN | DISTRICTS.md; LOCATION_REGISTER.md |
| `LM-MORTY-INSURANCE` | Morty Insurance | landmark | L4 | V0 V+1 | B | PLACEHOLDER | DS-03 DS-04 | -0.30,-0.42,+0.00 | DIST-COMMERCIAL-RING | DISTRICTS.md; LOCATION_REGISTER.md |
| `LM-SALTY-RICK` | The Salty Rick | landmark | L4 | V0 | B | PLACEHOLDER | DS-03 DS-04 | +0.30,+0.40,+0.00 | DIST-COMMERCIAL-RING | LOCATION_REGISTER.md |
| `LM-BIG-RICKS-GUMBO` | Big Rick's Gumbo Hutch | landmark | L4 | V0 | B | PLACEHOLDER | DS-03 DS-04 | +0.48,-0.30,+0.00 | DIST-COMMERCIAL-RING | DISTRICTS.md |
| `LM-REBUILD-A-MORTY` | Re-Build-A-Morty | landmark | L4 | V0 | A | PLACEHOLDER | DS-04 | -0.15,-0.50,+0.00 | DIST-COMMERCIAL-RING | LOCATION_REGISTER.md (Re-Build-A-Morty, Rickmurai Jack) |
| `LM-RICKINGHAM-PALACE` | Rickingham Palace (comic) | landmark | L4 | — | A | UNPLACED | — | — | — | COMIC_FINAL_STATUS.md |
| `PROP-BANNERS` | Regime banners over Rick emblems | prop | L6 | V+1 | A | UNPLACED | DS-03 DS-04 | — | — | RICKLANTIS_VISUAL_EVIDENCE.md 16; EPISODE_EVIDENCE_RICKLANTIS.md (political/architectural transition) |
| `PROP-STREET-FURNITURE` | Street furniture, signage, trees, fountains | prop | L6 | V0 | A | UNPLACED | DS-01 DS-02 DS-03 DS-04 | — | — | BUILDING_FAMILIES.md (streetscape details); VERTICAL_LAYERS.md (trees, fountains) |
| `UG-SEWERS` | Sewer / utility passages | utility | L7 | V-1 | A | PROVISIONAL | DS-03 DS-04 DS-05 | +0.00,+0.00,-0.05 | — | UTILITY_SYSTEMS.md (sewers); EPISODE_EVIDENCE_RICKMURAI_JACK.md (deformed Mortys emerge from sewers) |
| `UG-PORTAL-FLUID` | Portal-fluid production complex ('cave base') | machinery | L7 | V-2 | A | PROVISIONAL | DS-04 DS-05 | +0.25,+0.15,-0.21 | — | EPISODE_EVIDENCE_RICKMURAI_JACK.md (portal-fluid production / mines); DIALOGUE_ARCHITECTURE_CROSSREF.md D-006, D-007 |
| `UG-DIM-DRIVE` | Dimensional Drive chamber | machinery | L7 | V-3 | A | ANCHORED | DS-04 DS-05 | +0.00,+0.00,-0.35 | — | EPISODE_EVIDENCE_RICKMURAI_JACK.md (Dimensional Drive); SOURCE_INDEX.md (central position) |
| `UG-CONTROL-ENCLOSURE` | Glass-domed control enclosure | machinery | L7 | V-3 | A | PROVISIONAL | DS-04 DS-05 | +0.20,+0.00,-0.40 | UG-DIM-DRIVE | EPISODE_EVIDENCE_RICKMURAI_JACK.md (glass-domed/control enclosure around the principal control interface) |
| `UG-PHOENIX-VATS` | Operation Phoenix vats | machinery | L7 | V-3 | A | PROVISIONAL | DS-04 DS-05 | +0.00,+0.00,-0.41 | UG-DIM-DRIVE | EPISODE_EVIDENCE_RICKMURAI_JACK.md (Operation Phoenix vats feed biological material into the drive process) |
| `UG-LAUNCH-CHAMBER` | Launch chamber (Evil Morty's spacecraft) | machinery | L7 | V-3 V-4 | A | ANCHORED | DS-04 DS-05 | +0.00,-0.20,-0.42 | — | EPISODE_EVIDENCE_SOLARICKS.md (surviving launch/technical chamber); EPISODE_EVIDENCE_RICKMURAI_JACK.md (spacecraft loaded into an exit chute) |
| `UG-EXIT-CHUTE` | Spacecraft exit chute | machinery | L7 | V-3 V-4 | A | ANCHORED | DS-04 DS-05 DS-06 | +0.00,-0.20,-0.54 | — | EPISODE_EVIDENCE_RICKMURAI_JACK.md (launched from the bottom of the Citadel); EPISODE_EVIDENCE_SOLARICKS.md (launch track) |
| `IF-MORTYBURG` | Mortyburg attachment interface | interface | L7 | V0 V-1 | A | PROVISIONAL | DS-01 DS-02 DS-03 DS-04 DS-05 | -0.50,-0.87,+0.00 | — | EPISODE_EVIDENCE_RICKMURAI_JACK.md (Mortyburg detachment); DIALOGUE_ARCHITECTURE_CROSSREF.md D-008, D-009 |
| `MB-THRUSTERS` | Mortyburg boosters / thrusters | machinery | L7 | V-1 | A | PROVISIONAL | DS-05 DS-06 | -0.65,-1.13,-0.20 | DOME-MB | DIALOGUE_ARCHITECTURE_CROSSREF.md D-010 |
| `RUIN-DEBRIS-FIELD` | Post-destruction debris field | ruin | L7 | — | A | PROVISIONAL | DS-06 DS-07 DS-08 | +0.00,+0.00,+0.00 | — | EPISODE_EVIDENCE_SOLARICKS.md; CONTRADICTION_LOG.md C-009 |
| `RUIN-LAUNCH-CHAMBER` | Ruined launch chamber | ruin | L7 | V-3 | A | ANCHORED | DS-06 | +0.00,-0.20,-0.42 | UG-LAUNCH-CHAMBER | EPISODE_EVIDENCE_SOLARICKS.md (surviving launch/technical chamber) |
| `RUIN-BEACON` | Summer's beacon on the ruins | prop | L6 | — | A | PLACEHOLDER | DS-06 | +0.30,-0.30,+0.10 | — | EPISODE_EVIDENCE_SOLARICKS.md (beacon) |
| `NEW-CITADEL` | New Citadel construction (Boss Hog Rick) | variant | L7 | V0 V+1 | A | PROVISIONAL | DS-07 | +0.40,+0.30,+0.00 | — | CITADEL_DESTRUCTION.md State 6; DESTRUCTION_STATES.md DS-07 |

## Rationale and unknowns per node

### SHELL-LOWER-BODY — Lower metallic structural body

**Placement rationale:** Repeated exterior views show a lower metallic mass much larger than the upper city. Taper and depth are provisional envelope values chosen so all underground bands fit inside.

**Unknowns:** absolute size; taper profile; plate segmentation; docking/attachment structures

**Evidence:** EXTERIOR.md; SOURCE_INDEX.md (lower metallic structural plates); GEOMETRY_DATABASE.md G-002

### SHELL-PLATES — Exterior structural plates

**Placement rationale:** Plates exist (A). Count of 12 is a modelling placeholder so the exterior reads as segmented; re-count from exterior frames.

**Unknowns:** plate count; plate size; seams; which plates carry airlocks

**Evidence:** SOURCE_INDEX.md (lower metallic structural plates); EXTERIOR.md checklist

### SHELL-UNDERSIDE — Hull underside with exit aperture

**Placement rationale:** The exit chute launches from the bottom; therefore the hull underside has an aperture on the chute axis (UG-EXIT-CHUTE).

**Unknowns:** aperture position; other underside features

**Evidence:** EPISODE_EVIDENCE_RICKMURAI_JACK.md (spacecraft launched from the bottom of the Citadel)

### DOME-P — Principal transparent dome

**Placement rationale:** Strongest recurring exterior feature. Defines the unit U and the origin.

**Unknowns:** exact dome profile (full hemisphere vs. shallower cap); frame/mullion pattern; absolute radius

**Evidence:** EXTERIOR.md; SOURCE_INDEX.md; GEOMETRY_DATABASE.md G-001; EVIDENCE_MATRIX.md E-002

### DOME-S1 — Secondary dome 1

**Placement rationale:** Secondary domes exist; three is the secondary-source count. Equal spacing at 120 deg is a placeholder. District assignment UNKNOWN.

**Unknowns:** true count; radius ratio to DOME-P; which district it encloses; whether it sits on the rim or projects from the lower body

**Evidence:** SOURCE_INDEX.md (three smaller domed districts); CONTRADICTION_LOG.md C-002

### DOME-S2 — Secondary dome 2

**Placement rationale:** See DOME-S1.

**Unknowns:** as DOME-S1

**Evidence:** SOURCE_INDEX.md (three smaller domed districts); CONTRADICTION_LOG.md C-002

### DOME-MB — Mortyburg dome (detachable section)

**Placement rationale:** Mortyburg is a smaller domed section that physically separates (A). Working hypothesis: it is one of the three secondary domes (C). Placed on the rim because it must have an exterior face to detach through. Azimuth is placeholder. In DS-06 it is stranded separately (see EPISODE_EVIDENCE_SOLARICKS.md) — render it displaced from the debris field.

**Unknowns:** whether Mortyburg is one of the 'three' domes or a fourth; attachment geometry; azimuth; internal layout

**Evidence:** LOCATION_REGISTER.md (Mortyburg: smaller domed district; detachable); EPISODE_EVIDENCE_RICKMURAI_JACK.md (Mortyburg detachment); CONTRADICTION_LOG.md C-003

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

**Placement rationale:** A commuter train exists (A). A loop at z=+0.05 is a placeholder topology chosen so it can connect the plaza tramway to the Mortyburg spur; elevation is UNKNOWN (ground/elevated/underground all possible).

**Unknowns:** elevation; line count; station count; whether the S03E07 train and S05E10 tram are the same system

**Evidence:** RICKLANTIS_VISUAL_EVIDENCE.md 7; DIALOGUE_ARCHITECTURE_CROSSREF.md D-004; EPISODE_EVIDENCE_RICKMURAI_JACK.md (tramway, train to Mortyburg)

### CIRC-RAIL-MB-SPUR — Rail spur to Mortyburg

**Placement rationale:** Route exists and passes through the Mortyburg interface (A). Path is a straight provisional connector from the loop to IF-MORTYBURG.

**Unknowns:** route; stations; whether the spur is the same track as the loop

**Evidence:** DIALOGUE_ARCHITECTURE_CROSSREF.md D-008; EPISODE_EVIDENCE_RICKMURAI_JACK.md (train route connecting affected area to Mortyburg)

### CIRC-TRAM-PLAZA — Plaza tramway

**Placement rationale:** Tramway is shown in the same flooding sequence as the central plaza; therefore anchored adjacent to LM-CENTRAL-PLAZA. Direction is placeholder; drawn to meet CIRC-RAIL-LOOP.

**Unknowns:** direction; whether it joins CIRC-RAIL-LOOP

**Evidence:** EPISODE_EVIDENCE_RICKMURAI_JACK.md (plaza / tramway / lower city)

### CIRC-HOVER-BAND — Hover / flying traffic band

**Placement rationale:** Flying taxis and private flying cars exist (A). Band limits are a placeholder envelope for the 3D model's traffic layer.

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

**Placement rationale:** Dense high-rise blocks with storefronts, cafes and the newsroom. Ring placement is a convention: densest fabric between the civic core and the outer districts.

**Unknowns:** true extent; height distribution

**Evidence:** RICKLANTIS_VISUAL_EVIDENCE.md 1-4, 8; BUILDING_FAMILIES.md 1, 7; GEOMETRY_DATABASE.md G-006

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

**Placement rationale:** Described as central; anchored on the origin. Whether the same plaza exists in DS-01..03 is UNKNOWN, so states are limited to S05E10.

**Unknowns:** shape; size; existence in earlier states

**Evidence:** EPISODE_EVIDENCE_RICKMURAI_JACK.md (central plaza)

### LM-PRESIDENTIAL-BUILDING — Presidential Building

**Placement rationale:** Exited into the collapse sequence that also shows the plaza; placed on the plaza edge. Tallest civic mass by convention.

**Unknowns:** footprint; height; which plaza edge; relationship to Council Hall (C-004)

**Evidence:** EPISODE_EVIDENCE_RICKMURAI_JACK.md (Rick and Morty exit it during the collapse)

### LM-COUNCIL-HALL — Council Hall (Council of Ricks)

**Placement rationale:** Council chamber with stage/seating is direct (A). Its exterior and its position relative to the later Presidential Building are UNKNOWN. Placed in the civic core. States end at DS-02 because the Council is destroyed in Rickshank; whether the building persists is UNKNOWN.

**Unknowns:** exterior massing; floor count; survival after DS-02; relation to Shadow Council Hall

**Evidence:** COUNCIL_CHAMBER.md; LOCATION_REGISTER.md (Council Hall); EVIDENCE_MATRIX.md E-008

### LM-COUNCIL-CHAMBER — Council chamber (interior)

**Placement rationale:** Interior arrangement is visible; the six-member Council gives the seat count.

**Unknowns:** room proportions; ceiling height

**Evidence:** COUNCIL_CHAMBER.md; DIMENSIONAL_EVIDENCE_TABLE.md (seating/stage arrangement visible)

**Sub-features to model:** raised stage/platform; six council seats; audience/seating arrangement; controlled entry

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

**Placement rationale:** Council-era security force exists; the facility is inferred. Near the civic core for government access.

**Unknowns:** whether it is the same site as LM-POLICE-HQ in later states

**Evidence:** CITADEL_POLICE.md (Council era militia, SEAL Team Ricks); LOCATION_REGISTER.md

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

**Placement rationale:** Secured chamber inside the factory, at the far end from the entrance by convention.

**Unknowns:** dimensions; position within factory

**Evidence:** RICKLANTIS_VISUAL_EVIDENCE.md 10

**Sub-features to model:** force-field barrier; Simple Rick chair with headgear/tubing; lockdown door breached by cutting tool

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

**Placement rationale:** Named facility from S05E10; slot only.

**Unknowns:** all

**Evidence:** LOCATION_REGISTER.md (Re-Build-A-Morty, Rickmurai Jack)

### LM-RICKINGHAM-PALACE — Rickingham Palace (comic)

**Placement rationale:** Comic-only; not placed in animated continuity (C-008).

**Unknowns:** all

**Evidence:** COMIC_FINAL_STATUS.md

### PROP-BANNERS — Regime banners over Rick emblems

**Placement rationale:** State-dependent decal layer on civic buildings: Rick emblems (DS-01..03) replaced by Morty/Rick banners (late DS-03 onward).

**Unknowns:** which buildings

**Evidence:** RICKLANTIS_VISUAL_EVIDENCE.md 16; EPISODE_EVIDENCE_RICKLANTIS.md (political/architectural transition)

### PROP-STREET-FURNITURE — Street furniture, signage, trees, fountains

**Placement rationale:** Catalogue per frame; scatter procedurally in the 3D model.

**Unknowns:** all placement

**Evidence:** BUILDING_FAMILIES.md (streetscape details); VERTICAL_LAYERS.md (trees, fountains)

### UG-SEWERS — Sewer / utility passages

**Placement rationale:** Person-sized passages exist (A). Routing under the road network is a modelling convention.

**Unknowns:** map; depth

**Evidence:** UTILITY_SYSTEMS.md (sewers); EPISODE_EVIDENCE_RICKMURAI_JACK.md (deformed Mortys emerge from sewers)

### UG-PORTAL-FLUID — Portal-fluid production complex ('cave base')

**Placement rationale:** Reached by descending from the city; described as a cave base with a large central vat (A). Offset from the axis so it does not collide with UG-DIM-DRIVE; the offset direction is arbitrary.

**Unknowns:** footprint; depth; relation to the Drive; relation to the citywide supply

**Evidence:** EPISODE_EVIDENCE_RICKMURAI_JACK.md (portal-fluid production / mines); DIALOGUE_ARCHITECTURE_CROSSREF.md D-006, D-007

**Sub-features to model:** large central vat; collection containers; deformed-Morty work areas; rock/cave surfaces; connection to SYS-PORTAL-SUPPLY

### UG-DIM-DRIVE — Dimensional Drive chamber

**Placement rationale:** Secondary sources describe the Drive as central; its failure deforms the whole Citadel, consistent with a central position. Anchored on the axis below the civic core.

**Unknowns:** chamber dimensions; floor elevations; hull connections; exact relation to UG-PORTAL-FLUID

**Evidence:** EPISODE_EVIDENCE_RICKMURAI_JACK.md (Dimensional Drive); SOURCE_INDEX.md (central position); DIALOGUE_ARCHITECTURE_CROSSREF.md D-005; GEOMETRY_DATABASE.md G-011

**Sub-features to model:** drive core; glass-domed control enclosure; control interface; evacuation infrastructure; Operation Phoenix vat feeds; launch platforms

### UG-CONTROL-ENCLOSURE — Glass-domed control enclosure

**Placement rationale:** Directly described; placed on a platform at the chamber edge overlooking the core.

**Unknowns:** size; position in chamber

**Evidence:** EPISODE_EVIDENCE_RICKMURAI_JACK.md (glass-domed/control enclosure around the principal control interface)

### UG-PHOENIX-VATS — Operation Phoenix vats

**Placement rationale:** Vats feed the Drive, so they ring the core. Count of six is placeholder.

**Unknowns:** count; size; feed routing

**Evidence:** EPISODE_EVIDENCE_RICKMURAI_JACK.md (Operation Phoenix vats feed biological material into the drive process)

### UG-LAUNCH-CHAMBER — Launch chamber (Evil Morty's spacecraft)

**Placement rationale:** The spacecraft is loaded from the Drive area into the chute; the chamber therefore sits between the Drive and the chute. Survives as RUIN-LAUNCH-CHAMBER in DS-06.

**Unknowns:** footprint; track length; relation to Drive core

**Evidence:** EPISODE_EVIDENCE_SOLARICKS.md (surviving launch/technical chamber); EPISODE_EVIDENCE_RICKMURAI_JACK.md (spacecraft loaded into an exit chute)

**Sub-features to model:** platforms with piping; launch track leading to chute; glass panels; spacecraft cradle

### UG-EXIT-CHUTE — Spacecraft exit chute

**Placement rationale:** Vertical chute from the launch chamber to SHELL-UNDERSIDE. Axis shares the launch chamber's offset; the SHELL-UNDERSIDE aperture follows it.

**Unknowns:** angle (vertical vs inclined); length

**Evidence:** EPISODE_EVIDENCE_RICKMURAI_JACK.md (launched from the bottom of the Citadel); EPISODE_EVIDENCE_SOLARICKS.md (launch track)

### IF-MORTYBURG — Mortyburg attachment interface

**Placement rationale:** Engineered structural/transit interface with a closing entrance (A). Sits on the DOME-P rim at the Mortyburg azimuth, on the rail spur.

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

**Placement rationale:** Separate architecture reusing wreckage; NOT a restoration of the original geometry (C-010). Envelope placed over part of the debris field.

**Unknowns:** form; extent; which wreckage it occupies

**Evidence:** CITADEL_DESTRUCTION.md State 6; DESTRUCTION_STATES.md DS-07; CONTRADICTION_LOG.md C-010

**Sub-features to model:** new construction built around/over wreckage; lab/construction areas; Boss Hog facilities
