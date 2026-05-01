# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

An interactive study guide web app for French BTS students revising the theme "L'Homme et l'Animal" (Culture Générale & Expression exam). Seven game modes: mind-map explorer, searchable library, drag-and-drop timeline, card matching, fill-in-the-blank, flashcards, and daily essay prompts. XP/streak/badge gamification backed by localStorage.

## How to run

Open `Révision.html` directly in a browser — no build step, no server, no npm. Everything is static.

React 18 and Babel are loaded from CDN (unpkg). Babel Standalone transpiles JSX in-browser at runtime.

## Script load order matters

`Révision.html` loads scripts in a specific sequence that must be preserved:

1. React, ReactDOM, Babel (CDN UMD bundles)
2. `app/data.js`, `app/resources-data.js`, `app/illustrations.js` — globals on `window`
3. `app/store.js` — `window.RevStore`
4. `app/ui.jsx` — shared components
5. `app/hub.jsx`, `app/axes.jsx`, and other view files
6. `app/main.jsx` — mounts React to `#root`

Each file depends on globals from the files above it. Adding a new file requires placing the `<script>` tag in the right position in the HTML.

## Architecture

**Single state object** lives in `main.jsx`, loaded from localStorage on mount and re-saved on every change via an `updateState()` callback passed to all child components. No routing library — mode is a string (`'hub' | 'axes' | 'chrono' | 'matching' | 'fill' | 'flash' | 'essai' | 'resources'`).

**Data layer** (pure JS objects on `window`):
- `REVISION_DATA` — 3 axes, chapters, study points, chronology events, matching pairs, fill-in-the-blank sentences, essay prompts, badge definitions
- `RESOURCES` — 50+ cultural works with summary, relevance, quote, essay hints
- `SVGIllu` — SVG icon library

**Persistence** (`store.js` → `window.RevStore`): localStorage key `revision_homme_animal_v1`. Schema: `xp`, `streak`, `lastDay`, `badges[]`, `visited{axe1/2/3}`, `bestMatching{}`, `fillStats{}`, `chronoStats{}`.

**Shared UI** (`ui.jsx`): `PaperCard`, `Pill`, `Btn` (solid/ghost/soft), `ProgressBar`, `Toast`, and the `AXE_COLORS` palette object (terracotta/forest/azure with bg/solid/ink/soft variants).

## Styling

OKLCH color system via CSS variables defined in `Révision.html`:
- `--paper` / `--ink` for background and text
- Axis palettes defined in `AXE_COLORS` inside `ui.jsx`

Fonts (Google Fonts): Bricolage Grotesque (display), Geist (UI), JetBrains Mono (mono).

No CSS framework. Styles are inline (React `style={{}}`) or in the `<style>` block in `Révision.html`.

## XP awards by mode

| Mode | Award |
|------|-------|
| Axes (first visit per axis) | +5 XP |
| Chrono (per correct placement) | +3 XP |
| Matching (per matched pair) | +2 XP |
| Fill (per correct blank) | +2 XP |
| Flash (session complete) | +10 XP |

## Unused file

`app/tweaks-panel.jsx` (425 lines) is a drag-and-drop design-editing panel from a separate project. It is included in the HTML but never instantiated. Safe to ignore or delete.
