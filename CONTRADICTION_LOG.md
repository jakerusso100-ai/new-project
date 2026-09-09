# Citadel Contradiction / Continuity Register

Purpose: record conflicts between sources without forcing an artificial resolution. A contradiction remains open until stronger evidence resolves it.

## C-001 — Citadel scale and silhouette

**Issue:** Different episodes use very different camera distances and amounts of visible city. Some shots imply a huge dense city while others isolate individual districts or structural sections.

**Current handling:** Treat the Citadel as a large city/station, but do not derive absolute diameter, circumference, height, or floor count from a single shot.

**Status:** OPEN.

## C-002 — Dome count versus visible districts

**Issue:** Reference summaries identify a principal transparent dome plus smaller domed districts, while individual episode views do not always show the complete set simultaneously.

**Current handling:** Preserve directly supported dome observations; do not assign unseen domes to specific named districts without multi-view evidence.

**Status:** OPEN.

## C-003 — Mortytown versus Mortyburg

**Issue:** The names are easy to conflate, but the evidence supports different concepts. Mortytown is an urban neighborhood/section shown in Ricklantis; Mortyburg is a physically detachable Citadel section in Rickmurai Jack.

**Current handling:** Keep them as separate location IDs. Never use evidence from one as geometry evidence for the other.

**Status:** RESOLVED AS DISTINCT CONCEPTS.

## C-004 — Council Hall versus Courthouse / judicial spaces

**Issue:** Council government, judicial activity and courthouse references are all associated with the Citadel, but source summaries do not establish that every political/judicial function occupies one building.

**Current handling:** Treat Council Hall and judicial/courthouse facilities as separate evidence targets unless a frame explicitly connects them.

**Status:** OPEN.

## C-005 — Farm / MegaFruit terminology

**Issue:** Agricultural evidence appears under farm, MegaFruit and Mega Tree-related terminology in secondary references.

**Current handling:** Record the observed agricultural environment and exact source terminology separately. Do not assume every farm-related term identifies one identical footprint.

**Status:** OPEN.

## C-006 — Portal infrastructure versus Dimensional Drive

**Issue:** The Citadel has ordinary portal access, citywide portal supply, portal-fluid production and the Citadel-scale Dimensional Drive. These systems are related functionally but are not proven to be one physical machine/network.

**Current handling:** Keep separate infrastructure IDs and only connect them where the source explicitly shows or states a connection.

**Status:** OPEN.

## C-007 — Rebuilt Citadel versus late President Morty configuration

**Issue:** Rickmurai Jack depicts a functioning, brighter/rebuilt city and then a highly specialized late-stage configuration centered on the Dimensional Drive. It is unsafe to assume every earlier rebuilt structure survives unchanged.

**Current handling:** Treat late Citadel as a state variant and cross-reference recurring structures individually.

**Status:** OPEN.

## C-008 — Comic continuity versus animated continuity

**Issue:** Comics add locations such as Downtown Rickville and Rickingham Palace and may depict Citadel arrangements that are not shown in the series.

**Current handling:** Comic evidence is tagged separately and cannot establish animated placement without corroboration.

**Status:** CONTROLLED / ONGOING.

## C-009 — Ruins and surviving machinery

**Issue:** Solaricks shows portions of the destroyed Citadel still containing platforms, piping and a ruined launch chamber. This does not establish which intact structures survived the original destruction event.

**Current handling:** Catalog surviving features by shot/state instead of reconstructing an intact pre-destruction footprint from the ruins alone.

**Status:** OPEN.

## C-010 — New Citadel versus original Citadel

**Issue:** Later continuity includes an attempted New Citadel reconstruction around/near the wreckage. Similar visual language does not prove that the new construction reproduces the original geometry.

**Current handling:** New Citadel is a separate state/location evidence set.

**Status:** CONTROLLED / ONGOING.

## Resolution rule

A contradiction is resolved only when:

1. a direct source explicitly settles it; or
2. multiple independent compatible views establish the same relationship.

Otherwise preserve both observations and mark the relationship `UNKNOWN / NOT SHOWN`.
