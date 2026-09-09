# Citadel of Ricks — Reconstruction Reference Project

**RESEARCH PHASE: 100% COMPLETE — SCHEMATIC PHASE: v1 DELIVERED (see `SCHEMATIC.md`)**

A source-grounded research repository for reconstructing the Citadel of Ricks from **Rick and Morty** using visual references, dialogue, episode events, official material, and supplementary comic references.

## Goal

Collect and organize the useful reconstruction evidence so the owner can build their own Citadel schematic/reconstruction from source imagery and canon evidence.

This repository began as a **reference/evidence database**. On 2026-09-08 the owner lifted the schematic/3D scope lock; the evidence base now feeds a master schematic (`SCHEMATIC.md`, `schematic/`) that is the input to the interactive 3D model.

## Completion status

The research phase is complete. Every major reconstruction-relevant category is now source-backed, classified as inference, or explicitly marked `UNKNOWN / NOT SHOWN`. The source material does not provide a complete canonical engineering drawing, so unresolved dimensions are intentionally preserved as unknown.

Start with:

- `SCALE_1_TO_1.md` — the 1:1 scale chain (R = 2,000 m, provisional) and the interior level stack
- `reference_models/STL_MEASUREMENTS.md` — cross-section measurements of the owner-supplied exterior STL (file itself not committed)
- `SCHEMATIC.md` — **master schematic** (coordinate system, massing, vertical stack, districts, drawings, 3D pipeline)
- `schematic/citadel_schematic.json` — machine-readable schematic database (74 nodes)
- `schematic/drawings/` — generated SVG drawing set
- `schematic/viewer/index.html` — interactive 3D block-out viewer
- `reference_images/IMAGE_SLOTS.md` — which frames still need to be captured

- `FINAL_RESEARCH_AUDIT.md` — final acceptance audit
- `FINAL_EVIDENCE_HANDOFF.md` — owner-facing handoff
- `COMPLETION_CHECKLIST.md` — 100% completion record
- `DIMENSIONAL_EVIDENCE_TABLE.md` — final dimensional limits
- `COMIC_FINAL_STATUS.md` — final comic evidence status

## Scope

The repository tracks:

- exterior silhouette and visible structural components
- interior architecture and recurring building forms
- districts, neighborhoods, landmarks, and businesses
- roads, sidewalks, transit, hover vehicles, portals, and access points
- utilities, waste handling, communications, security, and dimensional technology
- government, police, schools, industry, commerce, and social infrastructure
- underground/service areas and the Dimensional Drive
- construction, damage, destruction, ruins, and later reconstruction states
- episode-by-episode visual references and scene/shot observations
- comic appearances and cross-references
- known facts, strong inferences, contradictions and unknowns

## Reconstruction rule

Do **not** invent a final layout where the source material does not establish one. Every useful detail is labeled as direct evidence, strong inference, plausible inference, or unknown/speculative.

The owner creates the final schematic/reconstruction from the evidence.

## Repository map

- `RESEARCH.md` — methodology and evidence hierarchy
- `SOURCE_INDEX.md` — source catalog and evidence policy
- `IMAGE_REFERENCE_INDEX.md` — visual-reference database
- `SOURCE_CATALOG.md` — episode/comic/official source inventory
- `CANON_TIMELINE.md` — Citadel continuity/state timeline
- `ARCHITECTURE.md` — global architectural observations
- `EXTERIOR.md` — exterior observations
- `DISTRICTS.md` — district and landmark inventory
- `LOCATION_REGISTER.md` — detailed location inventory
- `BUILDING_FAMILIES.md` — recurring building/streetscape patterns
- `VERTICAL_LAYERS.md` — surface, subsurface, industrial, and technical layers
- `INFRASTRUCTURE.md` — transportation, utilities, dimensional and waste systems
- `UTILITY_SYSTEMS.md` — utility/service evidence framework
- `TRANSPORTATION.md` — movement and circulation evidence
- `CIVIC_SYSTEMS.md` — government, police, education, economy, and social systems
- `COUNCIL_CHAMBER.md` — Council/government references
- `MORTYTOWN.md` — Morty district references
- `SIMPLE_RICKS_FACTORY.md` — industrial landmark references
- `CITADEL_POLICE.md` — police/militia references
- `CITADEL_DESTRUCTION.md` — destruction and reconstruction overview
- `DESTRUCTION_STATES.md` — physical-state comparison across Citadel eras
- `EVIDENCE_MATRIX.md` — evidence coverage and confidence
- `UNKNOWN_AREAS.md` — unresolved details
- `SCENE_SHOT_LOG.md` — source-by-source visual observation framework
- `MEASUREMENT_FRAMEWORK.md` — source-based relative measurement method
- `DIMENSIONAL_EVIDENCE_TABLE.md` — final dimensional evidence register
- `DIALOGUE_ARCHITECTURE_CROSSREF.md` — dialogue-to-physical-evidence links
- `CONTRADICTION_LOG.md` — conflicting depictions and evidence resolution
- `COMIC_REFERENCES.md` — comic evidence framework
- `COMIC_CROSS_REFERENCE.md` — comic-to-show evidence cross-reference
- `CITADEL_COMIC_TARGET_REGISTER.md` — comic research targets
- `COMIC_FINAL_STATUS.md` — final comic evidence classification
- `EPISODE_EVIDENCE_RICKMURAI_JACK.md` — S05E10 evidence
- `RICKLANTIS_VISUAL_EVIDENCE.md` — S03E07 evidence
- `EPISODE_EVIDENCE_SOLARICKS.md` — S06E01 ruin evidence
- `EPISODE_EVIDENCE_UNMORTRICKEN.md` — S07E05 agency evidence
- `FINAL_EVIDENCE_HANDOFF.md` — final owner handoff
- `FINAL_RESEARCH_AUDIT.md` — final acceptance audit
- `RECONSTRUCTION_PLAN.md` — completed research plan
- `COMPLETION_CHECKLIST.md` — 100% completion record

## Canon states tracked

1. Early/original Citadel
2. Post-Rickshank damage and repair
3. Rebuilt/Ricklantis-era Citadel
4. President Morty / late Citadel era
5. Destruction and ruins
6. New Citadel reconstruction attempt

## Evidence confidence

- **A — Direct:** clearly visible, directly stated, or repeatedly established.
- **B — Strong inference:** supported by multiple compatible sources.
- **C — Plausible:** useful reconstruction inference but not directly established.
- **D — Unknown/speculative:** never treat as canon geometry.

## Scope note

The original research phase deliberately produced no schematic or 3D assets. That restriction was lifted by the owner on 2026-09-08. The schematic keeps the evidence discipline: every node carries an existence confidence (A–D) **and** a placement class (LOCKED / ANCHORED / PROVISIONAL / PLACEHOLDER / UNPLACED), and no absolute dimension is asserted until a scale anchor is justified from reference images.
