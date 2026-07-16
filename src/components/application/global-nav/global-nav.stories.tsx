import type { Meta, StoryObj } from "@storybook/react-vite";
import { GlobalNav } from "./global-nav";

const meta = {
    title: "Application UI/App Navigation - Sidebar",
    component: GlobalNav,
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {
        defaultActiveKey: { control: "text" },
        defaultCollapsed: { control: "boolean" },
    },
} satisfies Meta<typeof GlobalNav>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Nav mounted against a light page frame, matching the reference layout. */
const PageFrame = ({ children }: { children: React.ReactNode }) => (
    <div className="flex min-h-screen bg-secondary">
        {children}
        <main className="flex-1 p-12">
            <h1 className="text-display-xs font-semibold text-primary capitalize">Performance insights</h1>
            <p className="mt-2 max-w-xl text-md text-tertiary">
                Click the chevron on the edge of the nav to collapse / expand. Click any item to switch the active row.
            </p>
        </main>
    </div>
);

export const Expanded: Story = {
    args: {
        defaultActiveKey: "performance insights",
        defaultCollapsed: false,
    },
    render: (args) => (
        <PageFrame>
            <GlobalNav {...args} />
        </PageFrame>
    ),
};

export const Collapsed: Story = {
    args: {
        defaultActiveKey: "performance insights",
        defaultCollapsed: true,
    },
    render: (args) => (
        <PageFrame>
            <GlobalNav {...args} />
        </PageFrame>
    ),
};

/** The bare nav, no page frame — useful for inspecting spacing and states. */
export const NavOnly: Story = {
    args: {
        defaultActiveKey: "key metrics",
    },
};
