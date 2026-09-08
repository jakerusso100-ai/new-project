# 3D Model Specification

## Target

A modular, source-grounded Citadel reconstruction suitable for Blender or another standard 3D package.

## Scene organization

- `CITADEL_MASTER`
- `SHELL`
- `DOMES`
- `DISTRICTS`
- `LANDMARKS`
- `TRANSIT`
- `VEGETATION`
- `MACHINERY`
- `DAMAGE_VARIANTS`
- `NEW_CITADEL`
- `REFERENCE_CAMERAS`
- `VALIDATION`

## Modeling strategy

Use parametric or reusable building families for repeated urban structures. Keep district geometry modular. Keep landmark geometry individually editable. Separate canonical geometry from decorative detail.

## LOD levels

- LOD0: silhouette shell and domes.
- LOD1: streets, districts and major skyline.
- LOD2: landmark architecture and transit.
- LOD3: street-level buildings and environmental detail.
- LOD4: props, signs, vegetation and small mechanical detail.

## Validation cameras

Create fixed cameras corresponding to the major canonical exterior and interior reference viewpoints. Each validation render should compare silhouette, dome position, skyline density, road curvature and major landmarks.

## State variants

The model must support at minimum:

1. Original/early Citadel.
2. Rebuilt city-state.
3. Damaged Citadel.
4. Destroyed Citadel.
5. Late underground/President Morty configuration.
6. New Citadel reconstruction where evidence permits.

## Deliverables

- Native editable scene.
- Exportable mesh.
- Material library.
- Reference-camera scene.
- Dimension/measurement table.
- Evidence metadata attached to major objects.
- Change log.
