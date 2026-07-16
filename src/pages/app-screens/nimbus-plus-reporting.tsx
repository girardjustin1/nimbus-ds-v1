import type { ReactNode } from "react";
import { ChevronDown, ChevronRight, ChevronUp, Plus, XClose } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { GlobalNav } from "@/components/application/global-nav/global-nav";
import { cx } from "@/utils/cx";

/**
 * Reporting → Nimbus+ Reporting upsell experience.
 *
 * Rebuilds reference/screens - batch 3/Nimbus+ Reporting. The reporting
 * query-builder chrome (tabs, date/config row, Metrics + Breakdown checkboxes,
 * Filter row) is shared; on top of it two upsell surfaces are shown:
 *
 *   1. FilterUpsellPanel — the Filter drill-down panel with "Nimbus+ Demand"
 *      selected, revealing a three-column Nimbus+ upsell (Frame 9).
 *   2. UpsellModal       — the standalone Nimbus+ upsell modal over a dimmed
 *      screen (Modal + Background overlay).
 *
 * Uses a custom styled overlay div for the modal (no shared Modal component).
 */

const PINK = "#DA6EA3";
const TEAL = "#37B6B7";

/* ----------------------------------------------------------------- Content --- */

const METRICS = [
    "Revenue",
    "eCPM",
    "Requests",
    "Impressions",
    "Wins",
    "Win Rate",
    "Render Rate",
    "Clicks",
    "CTR",
    "rCPM",
    "Avg. Winning Bid Price",
    "Estimated Nimbus Revenue",
];

const BREAKDOWNS = [
    "App",
    "Account",
    "Platform",
    "Position",
    "Ad Type",
    "Ad ID",
    "Demand Source",
    "Region",
    "Country",
    "Advertiser",
    "Ad Size",
];

const FILTER_CATEGORIES = [
    "Country",
    "Nimbus Core Demand",
    "Nimbus+ Demand",
    "Platform",
    "Account",
    "Region",
    "Ad Size",
    "Position",
    "Ad Type",
    "App",
];

const FEATURES = [
    {
        title: "More Competition for Your Inventory",
        body: "Remove roadblocks and shorten the time it takes to activate demand with Nimbus+. Our bundled suite of partners gives you immediate access to a growing set of premium demand to increase competition and drive more revenue than ever before.",
    },
    {
        title: "Access To Unique Demand",
        body: "Nimbus+ offers unique demand partners that are not available in our standard programmatic auction.",
    },
    {
        title: "Convenience",
        body: "Nimbus+ offers a consolidated setup, billing, and payout process for publishers. Earn more money while dramatically decreasing the time you spend managing contracts and tracking payments.",
    },
    {
        title: "Transparency",
        body: "Nimbus offers the most comprehensive reporting available from any partner on the market, and Nimbus+ is no exception. See your inventory transactions and understand Nimbus+ share of wallet to optimize your ad stack.",
    },
];

/* ------------------------------------------------------------------- Chrome --- */

const AppShell = ({ children }: { children: ReactNode }) => (
    <div className="flex min-h-screen bg-secondary">
        <GlobalNav defaultActiveKey="performance insights" />

        <main className="flex min-w-0 flex-1 flex-col overflow-x-hidden bg-primary">
            <header className="flex items-center justify-between border-b border-secondary px-8 py-5">
                <h1 className="text-display-xs font-semibold text-primary">Your Account</h1>
                <button
                    type="button"
                    aria-label="Account options"
                    className="inline-flex size-9 items-center justify-center rounded-full transition duration-100 ease-linear hover:bg-[#fdf2f7]"
                    style={{ color: PINK }}
                >
                    <ChevronDown className="size-6" aria-hidden="true" />
                </button>
            </header>

            <div className="flex-1">{children}</div>
        </main>
    </div>
);

/** Small rounded gray "pill" action (SAVE QUERY / DOWNLOAD .CSV / COLLAPSE). */
const GrayPill = ({ children, iconLeading }: { children: ReactNode; iconLeading?: ReactNode }) => (
    <button
        type="button"
        className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-2 text-xs font-semibold whitespace-nowrap text-quaternary uppercase transition duration-100 ease-linear hover:bg-secondary_hover"
    >
        {iconLeading}
        {children}
    </button>
);

/** Bold pink dropdown label with a chevron (e.g. "Last 7 days"). */
const PinkDropdown = ({ label }: { label: string }) => (
    <button type="button" className="inline-flex items-center gap-3 text-lg font-bold text-primary">
        {label}
        <ChevronDown className="size-5" style={{ color: PINK }} aria-hidden="true" />
    </button>
);

/** The reporting query-builder chrome shared by both stories. */
const QueryBuilder = ({ children }: { children?: ReactNode }) => (
    <div className="flex flex-col">
        {/* Tab strip */}
        <div className="flex items-stretch border-b border-secondary">
            <button
                type="button"
                aria-current="page"
                className="border-r border-secondary px-10 py-5 text-lg font-bold"
                style={{ color: TEAL, backgroundColor: `${TEAL}12` }}
            >
                New Query
            </button>
            <button type="button" className="border-r border-secondary px-10 py-5 text-lg font-bold" style={{ color: TEAL }}>
                Save Queries
            </button>
            <div className="flex flex-1 items-center justify-end px-6">
                <GrayPill iconLeading={<ChevronUp className="size-4" aria-hidden="true" />}>Collapse</GrayPill>
            </div>
        </div>

        {/* Config row */}
        <div className="flex items-stretch border-b border-secondary">
            <div className="flex flex-col justify-center gap-1 border-r border-secondary px-6 py-4">
                <span className="text-sm text-tertiary">Start Date:</span>
                <span className="text-lg font-bold text-primary">June 1, 2021</span>
            </div>
            <div className="flex flex-col justify-center gap-1 border-r border-secondary px-6 py-4">
                <span className="text-sm text-tertiary">Start Date:</span>
                <span className="text-lg font-bold text-primary">June 1, 2021</span>
            </div>
            <div className="flex items-center border-r border-secondary px-6 py-4">
                <PinkDropdown label="Last 7 days" />
            </div>
            <div className="flex items-center border-r border-secondary px-6 py-4">
                <PinkDropdown label="By Day" />
            </div>
            <div className="flex flex-1 items-center justify-end gap-3 px-6">
                <GrayPill>Save Query</GrayPill>
                <GrayPill>Download .CSV</GrayPill>
            </div>
        </div>

        {/* Metrics */}
        <div className="flex items-start gap-6 border-b border-secondary px-6 py-5">
            <span className="w-24 shrink-0 pt-0.5 text-lg font-bold text-primary">Metrics:</span>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
                {METRICS.map((metric) => (
                    <Checkbox key={metric} label={metric} className="min-w-[7rem]" />
                ))}
            </div>
        </div>

        {/* Breakdown */}
        <div className="flex items-start gap-6 border-b border-secondary px-6 py-5">
            <span className="w-24 shrink-0 pt-0.5 text-lg font-bold text-primary">Breakdown:</span>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
                {BREAKDOWNS.map((breakdown) => (
                    <Checkbox key={breakdown} label={breakdown} className="min-w-[7rem]" />
                ))}
            </div>
        </div>

        {/* Filter */}
        <div className="flex items-center gap-8 border-b border-secondary px-6 py-4">
            <span className="text-lg font-bold text-primary">Filter</span>
            <button
                type="button"
                className="inline-flex items-center gap-1.5 text-sm font-bold uppercase transition-opacity duration-100 ease-linear hover:opacity-80"
                style={{ color: PINK }}
            >
                <Plus className="size-4" aria-hidden="true" />
                Add
            </button>
        </div>

        {children}
    </div>
);

/* ---------------------------------------------------------- Filter panel bits --- */

/** Left column: filter category rows with a right chevron; one is active (teal). */
const FilterCategoryList = ({ activeKey }: { activeKey: string }) => (
    <ul className="flex flex-col">
        {FILTER_CATEGORIES.map((category) => {
            const isActive = category === activeKey;
            return (
                <li key={category}>
                    <button
                        type="button"
                        aria-current={isActive ? "true" : undefined}
                        className={cx(
                            "flex w-full items-center justify-between px-6 py-4 text-left text-md font-semibold transition duration-100 ease-linear",
                            !isActive && "text-primary hover:bg-secondary_hover",
                        )}
                        style={isActive ? { color: TEAL, backgroundColor: `${TEAL}12` } : undefined}
                    >
                        {category}
                        <ChevronRight className="size-5" style={{ color: isActive ? TEAL : PINK }} aria-hidden="true" />
                    </button>
                </li>
            );
        })}
    </ul>
);

/* ==================================================================== *
 * Story 1 — Filter Upsell Panel (Frame 9)                              *
 * ==================================================================== */

export const NimbusPlusReportingFilterUpsellPanel = () => (
    <AppShell>
        <QueryBuilder>
            <div className="flex flex-col">
                {/* Three-column drill-down panel */}
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,16rem)_minmax(0,24rem)_minmax(0,1fr)]">
                    {/* Left — filter categories */}
                    <div className="border-b border-secondary lg:border-r lg:border-b-0">
                        <FilterCategoryList activeKey="Nimbus+ Demand" />
                    </div>

                    {/* Middle — upsell intro */}
                    <div className="flex flex-col gap-4 border-b border-secondary px-6 py-6 lg:border-r lg:border-b-0">
                        <span className="text-sm font-bold tracking-wide uppercase" style={{ color: TEAL }}>
                            Introducing Nimbus+
                        </span>
                        <h2 className="text-display-xs font-bold text-primary">Access Premium Demand with Nimbus</h2>
                        <p className="text-sm text-tertiary">
                            Remove roadblocks and shorten the time it takes to activate demand with Nimbus+. Our bundled suite of partners gives you
                            immediate access to a growing set of premium demand to increase competition and drive more revenue than ever before.
                        </p>
                        <div>
                            <Button size="lg" color="primary-pink" className="uppercase">
                                Activate Nimbus+
                            </Button>
                        </div>
                    </div>

                    {/* Right — feature blocks */}
                    <div className="flex flex-col gap-6 px-6 py-6">
                        {FEATURES.map((feature) => (
                            <div key={feature.title} className="flex flex-col gap-1.5">
                                <h3 className="text-lg font-bold text-primary">{feature.title}</h3>
                                <p className="text-sm text-tertiary">{feature.body}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer actions */}
                <div className="flex items-center justify-end gap-3 border-t border-secondary px-6 py-4">
                    <GrayPill>Cancel</GrayPill>
                    <Button size="lg" color="primary-pink" className="uppercase">
                        Save
                    </Button>
                </div>
            </div>
        </QueryBuilder>
    </AppShell>
);

/* ==================================================================== *
 * Story 2 — Upsell Modal (Modal + Background overlay)                  *
 * ==================================================================== */

export const NimbusPlusReportingUpsellModal = () => (
    <div className="relative">
        {/* Dimmed screen behind the modal */}
        <div className="pointer-events-none select-none">
            <AppShell>
                <QueryBuilder>
                    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,16rem)_minmax(0,24rem)_minmax(0,1fr)]">
                        <div className="border-b border-secondary lg:border-r lg:border-b-0">
                            <FilterCategoryList activeKey="Nimbus+ Demand" />
                        </div>
                        <div className="hidden lg:block lg:border-r lg:border-secondary" />
                        <div className="hidden lg:block" />
                    </div>
                </QueryBuilder>
            </AppShell>
        </div>

        {/* Dim overlay + centered card */}
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0d12]/70 p-4">
            <div className="relative w-full max-w-2xl rounded-2xl bg-primary p-8 shadow-xl sm:p-10">
                <button
                    type="button"
                    aria-label="Close"
                    className="absolute top-6 right-6 text-fg-quaternary transition duration-100 ease-linear hover:text-fg-quaternary_hover"
                >
                    <XClose className="size-6" aria-hidden="true" />
                </button>

                <div className="flex flex-col items-center gap-2 text-center">
                    <span className="text-sm font-bold tracking-wide uppercase" style={{ color: TEAL }}>
                        Introducing Nimbus+
                    </span>
                    <h2 className="text-xl font-bold text-primary">NEW! Access Premium Demand with Nimbus+</h2>
                </div>

                <p className="mt-4 text-sm text-tertiary">
                    Nimbus+ bundles together premium demand to offer our most efficient and effective programmatic product yet. Boost your eCPMs with
                    increased competition, and save time with a single contracting and billing approach. We designed Nimbus+ with publisher
                    performance and convenience in mind.
                </p>

                <div className="mt-6 flex flex-col gap-5">
                    {FEATURES.map((feature) => (
                        <div key={feature.title} className="flex flex-col gap-1.5">
                            <h3 className="text-lg font-bold text-primary">{feature.title}</h3>
                            <p className="text-sm text-tertiary">{feature.body}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 border-t border-secondary pt-6">
                    <Button size="xl" color="primary-pink" className="w-full uppercase">
                        Activate Nimbus+
                    </Button>
                </div>
            </div>
        </div>
    </div>
);

export default NimbusPlusReportingFilterUpsellPanel;
