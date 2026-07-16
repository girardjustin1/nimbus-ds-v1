import type { Meta, StoryObj } from "@storybook/react-vite";
import { BarChartSquare02, CheckDone01, LineChartUp03, PieChart03, Rows01, Settings01, Users01 } from "@untitledui/icons";
import { HeaderNavigationBase } from "@/components/application/app-navigation/header-navigation";

/**
 * The Nimbus-themed header navigation. Primary nav items render as pills across the top bar,
 * with the active parent's sub-items surfaced in a secondary row. The Nimbus theme is applied
 * globally via CSS, so components are already styled — these stories simply render them with
 * realistic content.
 */
const meta = {
    title: "Application UI/App Navigation - Header",
    component: HeaderNavigationBase,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof HeaderNavigationBase>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: PieChart03,
        items: [
            { label: "Overview", href: "/dashboard/overview" },
            { label: "Notifications", href: "/dashboard/notifications" },
            { label: "Analytics", href: "/dashboard/analytics" },
            { label: "Saved reports", href: "/dashboard/saved-reports" },
        ],
    },
    {
        label: "Projects",
        href: "/projects",
        icon: Rows01,
        items: [
            { label: "All projects", href: "/projects/all" },
            { label: "Active", href: "/projects/active" },
            { label: "Archived", href: "/projects/archived" },
        ],
    },
    {
        label: "Tasks",
        href: "/tasks",
        icon: CheckDone01,
    },
    {
        label: "Reporting",
        href: "/reporting",
        icon: LineChartUp03,
    },
    {
        label: "Users",
        href: "/users",
        icon: Users01,
    },
    {
        label: "Settings",
        href: "/settings",
        icon: Settings01,
    },
];

/** Default header navigation with the Dashboard section active, surfacing its sub-items in the secondary row. */
export const Default: Story = {
    args: {
        activeUrl: "/dashboard/overview",
        items,
    },
};

/** Primary nav items centered between the logo and the account actions. */
export const Centered: Story = {
    args: {
        activeUrl: "/projects/active",
        items,
        centered: true,
    },
};

/** Secondary sub-navigation rendered as underline tabs rather than pill buttons. */
export const SecondaryTabs: Story = {
    args: {
        activeUrl: "/dashboard/analytics",
        items,
        secondaryType: "tabs",
    },
};

/** A top-level section with no sub-items active, so only the primary header row renders. */
export const NoSubNav: Story = {
    args: {
        activeUrl: "/reporting",
        items: [{ label: "Reporting", href: "/reporting", icon: BarChartSquare02 }, ...items.filter((item) => item.label !== "Reporting")],
    },
};
