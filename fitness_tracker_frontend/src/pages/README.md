# Pages Guide

This folder contains page-level components that compose modular UI sections into full screens.

- FirstScreen.jsx: A pixel-fidelity React conversion of the Figma-extracted 'Первый экран — 50:41' static layout.
  - Uses styles from `src/styles/common.css` (design tokens) and `src/styles/first-screen-50-41.css` (positioning and exact styles).
  - Interactions are intentionally minimal; extend with real data once backend endpoints are available.

Modularization strategy:
- Extract repeated patterns (cards like Sleep, Pulse, Activity) into `src/components` as functional components when they are reused in other screens.
- Maintain design token usage from common.css and keep exact measurements in screen-specific css for pixel parity.
