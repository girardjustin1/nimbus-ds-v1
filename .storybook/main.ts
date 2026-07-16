import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  // Docs/autodocs only. The testing addons that `storybook init` added
  // (Vitest test module, a11y, Chromatic visual tests) attach per-story status
  // badges and run in-browser checks that can throw "Illegal invocation" in
  // some browser setups — removed for a clean design-system showcase.
  "addons": [
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/react-vite"
};
export default config;
