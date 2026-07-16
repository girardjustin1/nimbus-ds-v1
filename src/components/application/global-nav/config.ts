import type { FC, HTMLAttributes, SVGProps } from "react";
import {
    AdvancedReportingIcon,
    BuyerBreakdownIcon,
    KeyMetricsIcon,
    NewBadge,
    NimbusBenchmarksIcon,
    PerformanceInsightsIcon,
    ProBadge,
    RealtimeDashboardIcon,
} from "./nimbus-nav-assets";

export type NavBadge = "new" | "pro";

export interface GlobalNavItem {
    /** Stable key, also used as the collapsed-state tooltip label. */
    key: string;
    /** Visible label. */
    label: string;
    /** Destination. Defaults to "#" for prototyping. */
    href?: string;
    /** Optional leading icon (Reporting items only, in the reference). */
    icon?: FC<HTMLAttributes<HTMLOrSVGElement> & SVGProps<SVGSVGElement>>;
    /** Optional trailing badge. */
    badge?: NavBadge;
}

export interface GlobalNavSection {
    /** Stable id. */
    id: string;
    /** Section heading. */
    label: string;
    /** Items in the section. */
    items: GlobalNavItem[];
    /**
     * Static sections (e.g. Reporting) are always open and non-collapsible,
     * and their items carry icons + badges. Collapsible sections toggle open.
     */
    variant?: "static" | "collapsible";
}

/** Badge component lookup so config stays data-only. */
export const badgeComponents = { new: NewBadge, pro: ProBadge } as const;

/**
 * Nimbus Global Nav content — mirrors the Figma reference exactly.
 * Swap/extend freely; the <GlobalNav> component renders whatever it's given.
 */
export const navSections: GlobalNavSection[] = [
    {
        id: "reporting",
        label: "Reporting",
        variant: "static",
        items: [
            { key: "key metrics", label: "key metrics", icon: KeyMetricsIcon },
            { key: "realtime dashboard", label: "realtime dashboard", icon: RealtimeDashboardIcon },
            { key: "performance insights", label: "performance insights", icon: PerformanceInsightsIcon, badge: "new" },
            { key: "buyer breakdown", label: "buyer breakdown", icon: BuyerBreakdownIcon, badge: "pro" },
            { key: "advanced reporting", label: "advanced reporting", icon: AdvancedReportingIcon, badge: "pro" },
            { key: "nimbus benchmarks", label: "nimbus benchmarks", icon: NimbusBenchmarksIcon, badge: "new" },
        ],
    },
    {
        id: "tpe",
        label: "Transparent Publisher Exchange",
        items: [
            { key: "sold inventory", label: "sold inventory" },
            { key: "purchased inventory", label: "purchased inventory" },
        ],
    },
    {
        id: "demand",
        label: "Demand",
        items: [
            { key: "manage active demand", label: "manage active demand" },
            { key: "manage active n+ demand", label: "manage active n+ demand" },
            { key: "n+ payments", label: "n+ payments" },
        ],
    },
    {
        id: "das",
        label: "Deal Activation System",
        items: [
            { key: "manage assets", label: "manage assets" },
            { key: "deal activation setup", label: "deal activation setup" },
            { key: "manage campaigns", label: "manage campaigns" },
        ],
    },
    {
        id: "adops",
        label: "AdOps",
        items: [
            { key: "ad blocking", label: "ad blocking" },
            { key: "floors", label: "floors" },
            { key: "discrepancy reports", label: "discrepancy reports" },
            { key: "activity", label: "activity" },
        ],
    },
    {
        id: "sdk",
        label: "SDK & Docs",
        items: [
            { key: "SDKs", label: "SDKs" },
            { key: "documentation", label: "documentation" },
        ],
    },
    {
        id: "finance",
        label: "Finance",
        items: [
            { key: "n+ payee registration", label: "n+ payee registration" },
            { key: "n+ payment history", label: "n+ payment history" },
            { key: "n+ invoice history", label: "n+ invoice history" },
        ],
    },
    {
        id: "settings",
        label: "Settings",
        items: [
            { key: "profile", label: "profile" },
            { key: "log out", label: "log out" },
        ],
    },
];

export const navFooterLinks = [
    { label: "End-User License Agreement", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "AdsByNimbus.com", href: "#" },
    { label: "Learning Center", href: "#" },
];
