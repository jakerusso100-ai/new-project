# 1 : 1 Scale — how big is the Citadel?

The show never states a dimension (`DIMENSIONAL_EVIDENCE_TABLE.md`). "1:1 like in the show" therefore has to be *derived* from what the frames do show: people, streets, buildings, and how those sit under the glass. This file is the chain, the number it produces, and the range around it. The number is stored in `schematic/citadel_schematic.json → units.absolute_conversion` and drives every metre readout in the viewer; change it there and everything rescales.

## The chain

1. **Rick is 1.85 m** (scale anchor SA-01). Everything below is ratios on top of that.
2. **Streets.** S03E07 avenue (#02): the crowd spans the frame ≈ 20–25 Ricks wide → main avenue ≈ 40–45 m. The elevated transit tube crosses at ≈ 6 Ricks → ≈ 11 m. Ordinary city numbers; nothing exotic.
3. **Buildings.** The central spires at the vanishing point of #02 read as 60–100-storey towers behind 15–20-storey blocks; the S01E10 monument is ≈ 25 Ricks ≈ 45 m; the Presidential dining room (#12) looks down on a skyline of towers whose tops are roughly level with it. Working figure for the tallest central spires: **300–500 m**.
4. **Glass clearance.** The STL lens is 0.292 R tall at the centre and 0.15 R tall at r = 0.83. If the tallest spires (≈ 400 m) stand near the centre with ~10 % clearance, the apex must be ≈ 450 m → **R ≈ 1,550 m**. If the dome is meant to look generous over them (the frames never show a tower scraping the glass), R ≈ 2,000–2,500 m.
5. **City extent.** Under the glass sit: a civic core, a commercial high-rise ring, Mortytown, an industrial sector with a large factory, a farm with open fields, a police academy, a school, a commuter railway with a train that people ride to work, and named neighbourhoods (East Sanchez Heights). That is a metropolis, not a district. A disc 3–5 km across is the smallest footprint that holds those without the farm and the factory touching. A 3 km disc (R = 1,500 m) is about the size of central Manhattan below 34th Street; 4 km (R = 2,000 m) adds the room the rail commute implies.
6. **Pods and arms.** At R = 2,000 m each pod is 2.4 km across (its own town — Mortyburg), the arms are 1.1 km wide and 400 m thick (room for the rail spur, roads and several decks inside), and the pod centres are 4.6 km from the middle. The spike tip is 4.3 km below the deck. The whole station spans ≈ 11.6 km tip to tip. That reads correctly against the exterior frame (#23), where the station dwarfs the spacecraft near it.

## The number

**R = 2,000 m** (dome diameter 4.0 km). Range consistent with the evidence: **1,500–3,000 m**. Below 1,500 m the central spires hit the glass or the districts overlap; above 3,000 m the S03E07 streets would have to be implausibly wide for the crowd density shown.

Everything in the schematic is in R, so the choice is one field. What it implies:

| Element | U | metres at R = 2,000 |
|---|---|---|
| Dome apex above deck | 0.292 | 584 |
| Height limit under glass at r = 0.5 / 0.8 / 0.95 | 0.23 / 0.145 / 0.05 | 460 / 290 / 100 |
| Lower hull depth at centre | 0.10 | 200 (four ~45 m sub-decks) |
| Under-hub | −0.10 → −0.36 | 200 → 720 below deck |
| Fins end / spike tip | −1.80 / −2.13 | 3,600 / 4,260 below deck |
| Pod radius / centre distance | 0.592 / 2.316 | 1,184 / 4,632 |
| Pod dome apex | 0.186 | 372 |
| Arm width / thickness | 0.55 / 0.20 | 1,100 / 400 |
| Central plaza radius | 0.16 | 320 |
| Commercial ring | r 0.3 → 0.6 | 600 → 1,200 from centre |
| Rail loop radius | 0.72 | 1,440 (≈ 9 km loop) |

## Levels — what fits inside

The interior is bounded by the lens: tall in the middle, nothing at the rim. The deck stack in the JSON (`deck_stack`) is derived from that envelope:

- **Surface city (DK0)** on the equatorial plane, with the **height envelope** `height_envelope.table` giving the maximum building top at each radius. Tall core (spires to ≈ 520 m at r < 0.4), mid-rise ring, low-rise rim — which is where the evidence already put Mortytown and the farm.
- **Elevated band (DK+1)**, 60–240 m: hover lanes, the elevated rail loop and plaza tramway, the atrium walkway tiers.
- **Four sub-decks (DK−1 … DK−4)** inside the 200 m lower hull, thinning toward the rim: transit and sewers, service and waste, industrial underground (portal-fluid handling), hull machinery.
- **Under-hub (HUB-A / HUB-B)**, r ≤ 0.43 R, 200–720 m below deck: the S05E10 cave base and the Dimensional Drive void.
- **Spike root (KEEL)**: launch chamber and chute head; the chute runs down the spike to the exit at −1.4 R (2.8 km below deck).
- **Pods** repeat the same stack at 0.59 scale (pod dome apex 372 m; pod hull 200 m deep).
- **Arms**: 400 m thick — several decks: rail spur, roads, service.

Every landmark in the schematic has been clamped to the envelope (`height_limit_m` on the node) so nothing pierces the glass.

## What would change the number

- A frame showing a known-size object (the Galactic Federation prison from S03E01, or a ship of stated size) next to the Citadel.
- A wide interior shot with both the glass and the ground visible, which would fix the spire-to-dome ratio directly.
- Dialogue giving a distance or population.

Until then, 2,000 m is a documented estimate, not canon — the same PROVISIONAL discipline as every other inferred value in this repository.
