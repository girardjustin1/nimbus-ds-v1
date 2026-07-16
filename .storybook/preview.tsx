import type { Preview } from "@storybook/react-vite";

// Import the Untitled UI + Nimbus design system styles (Tailwind + theme tokens)
// so components render with the correct teal brand theme inside Storybook.
import "../src/styles/globals.css";

const preview: Preview = {
    parameters: {
        options: {
            storySort: {
                method: "alphabetical",
                order: [
                    // 1) Styles / foundations
                    "Styles",
                    ["Color", "Typography", "Icons", "Elevation", "Shape", "Logos"],
                    // 2) Base components (flat — no sub-folders)
                    "Components",
                    // 3) Application UI (complex components)
                    "Application UI",
                    // 4) Auth page templates
                    "Log in / Sign up",
                    // 5) App Screens (always last)
                    "App Screens",
                    "*",
                ],
            },
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        a11y: {
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: "todo",
        },
    },
};

export default preview;
