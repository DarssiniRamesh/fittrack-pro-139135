# Lightweight React Template for KAVIA

This project now includes a pixel-perfect React implementation of a Figma screen.

## New UI: First Screen (Первый экран — 50:41)

- Page: `src/pages/FirstScreen.jsx`
- Styles:
  - Tokens and base: `src/styles/common.css`
  - Screen-specific: `src/styles/first-screen-50-41.css`

The layout uses absolute positioning from the Figma extraction to maintain visual parity. The app centers the 1920x1080 canvas in a modern "Ocean Professional" theme wrapper.

## Getting Started

In the project directory, you can run:

### `npm start`
Runs the app in development mode.

### `npm test`
Launches the test runner.

### `npm run build`
Builds the app for production.

## Customization

- Add reusable components under `src/components`
- Extract repeated cards from FirstScreen when used by other pages
- Keep design tokens in `src/styles/common.css`

## Learn More
See the React docs: https://reactjs.org/
