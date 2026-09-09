# Citadel Measurement Framework

Purpose: define how the user can extract relative dimensions from source imagery without inventing absolute canon dimensions.

## Evidence hierarchy for measurements

1. Repeated object visible in multiple views.
2. Known/recognizable human-scale reference such as a person, door, vehicle or rail car.
3. Same building/feature shown from multiple angles.
4. Perspective-normalized comparison between compatible shots.
5. Single-frame estimate only as low-confidence ratio data.

## Record measurements as ratios first

Examples:

- doorway height : person height
- road width : vehicle length
- sidewalk width : person shoulder width
- building height : visible vehicle length
- dome diameter : repeated building cluster width
- rail-car length : station opening width

Never label an absolute value as canonical unless the source actually provides a reliable measurement.

## Measurement record format

| Field | Description |
|---|---|
| Measurement ID | Stable identifier |
| Source | Episode/comic/page/frame |
| Reference object | Person/vehicle/door/etc. |
| Feature measured | Exact visible feature |
| Ratio | Dimensionless ratio |
| Perspective confidence | A/B/C/D |
| Cross-check source | Independent supporting frame |
| Absolute value | Only if independently justified |
| Notes | Occlusion/perspective/ambiguity |

## Do not measure from

- extreme perspective without a reference object;
- cropped silhouettes whose hidden edges are unknown;
- destruction frames where perspective/scale is distorted by action;
- comic panels unless panel perspective is sufficiently clear;
- a single decorative object assumed to be a repeated standard module.

## Current high-value references

- S03E07 for streets, vehicles, pedestrians, school, factory and urban scale.
- S05E10 for train, Mortyburg, underground systems and machinery.
- S06E01 for ruins and surviving structural elements.

## Acceptance rule

A measurement can support schematic work as a strong ratio only when the visible endpoints are clear. Absolute dimensions remain `UNKNOWN / NOT SHOWN` until a stable scale anchor is justified.
