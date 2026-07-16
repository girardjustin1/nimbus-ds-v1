# Nimbus Design System (`nimbus-ds-v1`)

A React + Storybook design system for Nimbus front-end prototyping, built on
[Untitled UI React](https://www.untitledui.com/react) (React 19, Tailwind CSS v4,
TypeScript, React Aria) with the Nimbus brand theme applied.

- **Brand:** Nimbus teal (`--color-brand-*`) + Proxima Nova, with pill-shaped
  buttons and a pink (`#DA6EA3`) accent variant.
- **Icons:** Untitled UI **PRO** icons (`@untitledui-pro/icons`, 4 styles) plus
  the free `@untitledui/icons`.
- **Scope:** base + application + foundations components, a bespoke **Global
  Nav**, and app-screen examples.

## Prerequisites — Untitled UI PRO token

PRO icons install from Untitled UI's private registry. The token is read from an
environment variable so it is never committed (`.npmrc` references it; `.env` is
gitignored).

```bash
# local: put your license key in .env (already gitignored)
echo 'UNTITLEDUI_PRO_TOKEN=<your-untitled-ui-pro-license-key>' >> .env

# then install (export it for the npm process)
export UNTITLEDUI_PRO_TOKEN=$(grep -oE '[^=]+$' .env | head -1)
npm install
```

For CI, `UNTITLEDUI_PRO_TOKEN` is stored as a repository secret and consumed by
the Pages workflow.

## Scripts

```bash
npm run dev              # Vite dev server        → http://localhost:5173
npm run storybook        # Storybook (design system browser) → http://localhost:6006
npm run build            # Type-check + production build
npm run build-storybook  # Static Storybook build → ./storybook-static
```

## Storybook on GitHub Pages

Every push to `main` builds Storybook and deploys it to GitHub Pages via
`.github/workflows/deploy-storybook.yml`. Live design system:

> https://girardjustin1.github.io/nimbus-ds-v1/

Storybook is organized as **Overview → Foundations → Base Components →
Application → App Screens**.

## Structure

```
src/
├── components/
│   ├── base/          # Buttons, badges, inputs, avatars, … (Nimbus-styled)
│   ├── application/   # Tables, nav, modals, … + global-nav/ (Nimbus Global Nav)
│   └── foundations/   # Colors, typography, icons, logos (Nimbus)
├── styles/            # theme.css (Nimbus teal + Proxima Nova), globals, typography
└── pages/             # App-screen examples
```

## Reference material

`reference/` holds the source design artifacts (the original Global Nav HTML and
screen exports) used to build the React components.

---

Built with [Untitled UI React](https://www.untitledui.com/react) ·
[Docs](https://www.untitledui.com/react/docs/introduction) ·
[Figma](https://www.untitledui.com/figma)
