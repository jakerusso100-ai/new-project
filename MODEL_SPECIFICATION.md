# 3D Model Specification

## Master coordinate system

- Right-handed coordinates.
- Z = primary Citadel vertical axis.
- Origin = center of the primary dome.
- Use normalized units until visual ratios stabilize.
- Maintain a single master scale variable for later conversion to Blender/CAD/game-engine units.

## Geometry layers

1. Global structural shell
2. Central and secondary domes
3. Primary streets/transit
4. District blocks
5. Landmark buildings
6. Interior landscaping/plazas
7. Props/signage
8. Destruction/reconstruction variants

## Asset organization

Each asset should carry metadata:

- `asset_id`
- `district`
- `source_refs`
- `state`
- `confidence`
- `canonical_or_inferred`
- `revision`

## Required deliverables

- Exterior hero model
- Full-city model
- Interior cutaway
- Top-down schematic
- Vertical section
- Infrastructure cutaway
- Original Citadel state
- Rebuilt Citadel state
- Destroyed state
- New Citadel construction state

## Validation

A model is not accepted because it merely looks plausible. It must survive camera-matching against multiple independent references.
