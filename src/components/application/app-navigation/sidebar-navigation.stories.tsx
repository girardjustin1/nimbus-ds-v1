import type { Meta, StoryObj } from "@storybook/react-vite";
import {
    BarChartSquare02,
    CheckDone01,
    FileCheck02,
    LifeBuoy01,
    LineChartUp03,
    PieChart03,
    Rows01,
    Settings01,
    Users01,
} from "@untitledui/icons";
import type { NavItemDividerType, NavItemType } from "@/components/application/app-navigation/config";
import { SidebarNavigationDualTier } from "@/components/application/app-navigation/sidebar-navigation/sidebar-dual-tier";
import { SidebarNavigationSectionDividers } from "@/components/application/app-navigation/sidebar-navigation/sidebar-section-dividers";
import { SidebarNavigationSectionsSubheadings } from "@/components/application/app-navigation/sidebar-navigation/sidebar-sections-subheadings";
import { SidebarNavigationSimple } from "@/components/application/app-navigation/sidebar-navigation/sidebar-simple";
import { SidebarNavigationSlim } from "@/components/application/app-navigation/sidebar-navigation/sidebar-slim";

/**
 * Nimbus-themed application sidebar navigation. Every variant consumes the same `NavItemType`
 * item shape (label, href, icon, optional badge, optional nested `items`). The Nimbus theme is
 * applied globally via CSS, so components render pre-styled — these stories only supply content.
 *
 * Note: the desktop sidebars are `position: fixed`. View these stories at a large (lg+) viewport
 * to see the full desktop treatment; narrower viewports show the mobile header + drawer.
 */
const meta = {
    title: "Application UI/App Navigation - Sidebar",
    component: SidebarNavigationSimple,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof SidebarNavigationSimple>;

export default meta;
type Story = StoryObj<typeof meta>;

const items: NavItemType[] = [
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: PieChart03,
        items: [
            { label: "Overview", href: "/dashboard/overview" },
            { label: "Notifications", href: "/dashboard/notifications" },
            { label: "Analytics", href: "/dashboard/analytics" },
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
        badge: 8,
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

const footerItems: NavItemType[] = [
    { label: "Support", href: "/support", icon: LifeBuoy01 },
    { label: "Settings", href: "/settings", icon: Settings01 },
];

// Slim + DualTier require every item to carry an icon.
const iconItems = items as (NavItemType & { icon: NonNullable<NavItemType["icon"]> })[];
const iconFooterItems = footerItems as (NavItemType & { icon: NonNullable<NavItemType["icon"]> })[];

/** Standard 280px sidebar with a flat item list, footer links, and account card. */
export const Simple: Story = {
    args: {
        activeUrl: "/dashboard",
        items,
        footerItems,
    },
};

/** Compact 68px icon-only rail. Hover an item with sub-items to reveal the secondary panel. */
export const Slim: StoryObj<typeof SidebarNavigationSlim> = {
    render: () => <SidebarNavigationSlim activeUrl="/projects/active" items={iconItems} footerItems={iconFooterItems} />,
};

/** Two-tier sidebar: hovering a parent slides out a secondary column of its sub-items. */
export const DualTier: StoryObj<typeof SidebarNavigationDualTier> = {
    render: () => <SidebarNavigationDualTier activeUrl="/dashboard/analytics" items={iconItems} footerItems={iconFooterItems} />,
};

/** Items grouped under uppercase section subheadings. */
export const SectionsSubheadings: StoryObj<typeof SidebarNavigationSectionsSubheadings> = {
    render: () => (
        <SidebarNavigationSectionsSubheadings
            activeUrl="/reporting"
            items={[
                {
                    label: "General",
                    items: [
                        { label: "Dashboard", href: "/dashboard", icon: PieChart03 },
                        { label: "Projects", href: "/projects", icon: Rows01 },
                        { label: "Tasks", href: "/tasks", icon: CheckDone01, badge: 8 },
                    ],
                },
                {
                    label: "Insights",
                    items: [
                        { label: "Reporting", href: "/reporting", icon: LineChartUp03 },
                        { label: "Metrics", href: "/metrics", icon: BarChartSquare02 },
                        { label: "Audits", href: "/audits", icon: FileCheck02 },
                    ],
                },
                {
                    label: "Workspace",
                    items: [
                        { label: "Users", href: "/users", icon: Users01 },
                        { label: "Settings", href: "/settings", icon: Settings01 },
                    ],
                },
            ]}
        />
    ),
};

/** Items separated into groups by horizontal dividers. */
export const SectionDividers: StoryObj<typeof SidebarNavigationSectionDividers> = {
    render: () => {
        const dividerItems: (NavItemType | NavItemDividerType)[] = [
            { label: "Dashboard", href: "/dashboard", icon: PieChart03 },
            { label: "Projects", href: "/projects", icon: Rows01 },
            { label: "Tasks", href: "/tasks", icon: CheckDone01, badge: 8 },
            { divider: true },
            { label: "Reporting", href: "/reporting", icon: LineChartUp03 },
            { label: "Users", href: "/users", icon: Users01 },
            { divider: true },
            { label: "Settings", href: "/settings", icon: Settings01 },
            { label: "Support", href: "/support", icon: LifeBuoy01 },
        ];

        return <SidebarNavigationSectionDividers activeUrl="/projects" items={dividerItems} />;
    },
};
