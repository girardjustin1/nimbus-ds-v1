# Nimbus Design System

A React + Storybook design system for Nimbus front-end prototyping — a single
source of truth for the Nimbus brand: design tokens, foundations, reusable UI
components, application patterns, and ready-to-use screen templates.

Built with **React 19, TypeScript, Tailwind CSS v4, React Aria, Recharts,
Storybook 10, and Vite.**

## Core Purpose

Nimbus gives designers and engineers one place to see and reuse the Nimbus
visual language. Everything is themed from the Nimbus Figma token export, so the
brand — pink primary, teal secondary, Proxima Nova, warm gray neutrals — stays
consistent from a single button to a full application screen.

## Brand & Tokens

The theme is generated from the Nimbus design tokens in `reference/styles/` and
applied in `src/styles/theme.css`:

- **Brand:** pink primary (`#DA6EA3` / `--color-brand-500`) with teal
  (`#37B6B7`) as the secondary / `_alt` accent.
- **Neutrals:** a warm gray scale for surfaces, text, and borders.
- **Typography:** Proxima Nova with the Nimbus type scale (`text-md` 15px,
  `text-sm` 13px, `text-xl` 26px, display sizes up to 72px).
- **Radius & spacing:** Nimbus token values (e.g. `radius-md` 8px).

Light and dark modes are both defined. The **Styles** section of Storybook
renders the palette and type scale live from these tokens, so the documentation
never drifts from the theme.

## What's Inside

The Storybook library is organized top-to-bottom as:

**Styles** — color palette, typography, icons, elevation, shape, and logos.

**Components** — the base building blocks: buttons, badges, avatars, checkbox,
radio, toggle, inputs, textarea, select, multi-select, dropdown, tags, button
groups, sliders, tooltips, progress indicators, file upload, and forms.

**Application UI** — richer patterns: application navigation (header + sidebar
variants), the global navigation, breadcrumbs, data tables, tabs, modals,
slideout menus, date pickers, pagination, charts, carousels, empty states,
file upload, and loading indicators.

**Log in / Sign up** — auth page templates: log in, sign up, email verification,
and forgot password.

**App Screens** — full product screens assembled from the system (e.g. the
AdOps ad-blocking dashboard).

## Getting Started

```bash
npm install              # install dependencies
npm run storybook        # launch the design system at http://localhost:6006
npm run dev              # Vite dev server at http://localhost:5173
npm run build            # type-check + production build
npm run build-storybook  # static Storybook build → ./storybook-static
```

> **Icons:** the icon set installs from a private registry. Put your registry
> token in a local `.env` file (gitignored); the committed `.npmrc` reads it
> during `npm install`. For CI, the token is provided as a repository secret.

## Storybook on GitHub Pages

Every push to `main` builds Storybook and deploys it to GitHub Pages:

> https://girardjustin1.github.io/nimbus-ds-v1/

## Structure

```
src/
├── components/
│   ├── base/          # Buttons, badges, inputs, avatars, … (Components)
│   ├── application/   # Tables, nav, modals, global-nav, … (Application UI)
│   └── foundations/   # Colors, typography, icons, logos (Styles)
├── pages/
│   ├── auth/          # Log in / Sign up templates
│   └── app-screens/   # Full product screens
├── styles/            # theme.css (Nimbus tokens), globals, typography
└── ...
reference/
├── styles/            # Nimbus Figma token export (source of the theme)
└── ...                # source design artifacts (nav, screen exports)
```

## Working in the System

- Prototype on a feature branch; merge to `main` to publish to Pages.
- Add a component or screen with a matching `*.stories.tsx` and it appears in
  the correct Storybook category automatically.
- Reuse the theme classes (`bg-brand-solid`, `text-primary`, `border-secondary`,
  `text-md`, `radius-md`, …) so new work inherits the Nimbus brand for free.
