# Citadel Geometry Database

Each row represents a reconstructable feature. Values are provisional until cross-view validation.

| ID | Feature | Type | State | Evidence | Confidence | Model layer | Dimensions |
|---|---|---|---|---|---|---|---|
| G-001 | Principal dome | structural | original/rebuilt | repeated exterior views | A | L1 | normalized |
| G-002 | Lower metallic body | structural | original/rebuilt | exterior views | A | L0 | normalized |
| G-003 | Secondary domed districts | structural | rebuilt | exterior views | B | L1 | normalized |
| G-004 | Radial road network | circulation | rebuilt | street/aerial views | B | L2 | normalized |
| G-005 | Circumferential roads | circulation | rebuilt | street/aerial views | B | L2 | normalized |
| G-006 | Dense high-rise blocks | urban | rebuilt | city views | A | L3 | normalized |
| G-007 | Council complex | landmark | multiple | Council references | A/B | L4 | pending |
| G-008 | Mortytown | district | rebuilt | Ricklantis Mixup | A | L3 | pending |
| G-009 | Police facilities | district | rebuilt | Ricklantis Mixup | A | L3/L4 | pending |
| G-010 | Simple Rick factory | industrial | rebuilt/late | Ricklantis/Rickmurai | A | L3/L4 | pending |
| G-011 | Dimensional Drive | machinery | late/destroyed | Rickmurai/Solaricks | A | L4/L7 | pending |
| G-012 | New Citadel construction | variant | late | The Rick, The Mort & The Ugly | A | L7 | pending |

## Dimension fields to add

- absolute radius/diameter
- dome height
- shell thickness estimate
- district radial position
- floor count
- road width
- building-height range
- vertical separation
- machinery envelope

## Rule

Never replace `pending` with an invented measurement. Measurements must be marked `observed`, `derived`, or `speculative` and linked to reference IDs.
