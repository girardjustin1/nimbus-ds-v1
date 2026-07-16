import type { ReactNode } from "react";
import { ChevronDown } from "@untitledui/icons";
import { GlobalNav } from "@/components/application/global-nav/global-nav";
import { cx } from "@/utils/cx";

/**
 * Nimbus Exchange — Key Metrics Dashboard (Reporting → key metrics).
 *
 * Rebuilds the reference screen (reference/screens - batch 2/Nimbus Key Metrics
 * Dashboard/Screen.png): a masonry grid of metric cards over the Nimbus dark
 * Global Nav and the global pink/teal theme. Each card shows a big coloured
 * figure and, depending on the metric, a small multi-line area sparkline with a
 * month axis and a segmented CORE / NIMBUS+ / BLENDED footer control.
 *
 * The sparklines are rendered as lightweight inline SVG (area + line) rather
 * than the shared Recharts components — at this small size hand-drawn paths
 * match the reference more closely and stay dependency-free.
 */

/* ----------------------------------------------------------- Accent colors --- */

const TEAL = "#37b6b7";
const TEAL_LIGHT = "#8fd6d6";
const BLUE_LIGHT = "#8fd0f5";
const NAVY = "#0e2f5c";
const PINK = "#c01574";
const PINK_MID = "#dc4f92";
const PINK_LIGHT = "#ef8fbc";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/* ------------------------------------------------------------- Sparkline --- */

interface Series {
    data: number[];
    color: string;
    width?: number;
}

interface SparklineProps {
    series: Series[];
    /** Fill under the first (top) series. */
    areaColor?: string;
    /** Faint vertical gridlines at each month position. */
    gridlines?: boolean;
    /** Smooth the paths with a catmull-rom spline instead of straight segments. */
    smooth?: boolean;
}

const W = 300;
const H = 128;
const PAD = 6;

const buildLine = (data: number[], x: (i: number) => number, y: (v: number) => number, smooth: boolean): string => {
    const pts = data.map((d, i) => [x(i), y(d)] as const);
    if (!smooth) {
        return "M" + pts.map((p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" L");
    }
    let path = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
    for (let i = 0; i < pts.length - 1; i++) {
        const p0 = pts[i - 1] ?? pts[i];
        const p1 = pts[i];
        const p2 = pts[i + 1];
        const p3 = pts[i + 2] ?? p2;
        const c1x = p1[0] + (p2[0] - p0[0]) / 6;
        const c1y = p1[1] + (p2[1] - p0[1]) / 6;
        const c2x = p2[0] - (p3[0] - p1[0]) / 6;
        const c2y = p2[1] - (p3[1] - p1[1]) / 6;
        path += ` C${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
    }
    return path;
};

const Sparkline = ({ series, areaColor, gridlines, smooth = false }: SparklineProps) => {
    const all = series.flatMap((s) => s.data);
    const min = Math.min(...all);
    const max = Math.max(...all);
    const range = max - min || 1;
    const n = series[0].data.length;

    const x = (i: number) => PAD + (i * (W - PAD * 2)) / (n - 1);
    const y = (v: number) => PAD + (H - PAD * 2) * (1 - (v - min) / range);

    const topLine = buildLine(series[0].data, x, y, smooth);
    const areaPath = `${topLine} L${x(n - 1).toFixed(1)},${(H - PAD).toFixed(1)} L${x(0).toFixed(1)},${(H - PAD).toFixed(1)} Z`;

    return (
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="h-32 w-full" aria-hidden="true">
            {gridlines &&
                MONTHS.map((_, i) => (
                    <line key={i} x1={x(i)} y1={PAD} x2={x(i)} y2={H - PAD} stroke="#e9eaeb" strokeWidth={1} vectorEffect="non-scaling-stroke" />
                ))}

            {areaColor && <path d={areaPath} fill={areaColor} stroke="none" />}

            {series.map((s, i) => (
                <path
                    key={i}
                    d={buildLine(s.data, x, y, smooth)}
                    fill="none"
                    stroke={s.color}
                    strokeWidth={s.width ?? 2}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                />
            ))}
        </svg>
    );
};

const MonthAxis = () => (
    <div className="flex justify-between px-1 text-[11px] leading-none text-tertiary">
        {MONTHS.map((m) => (
            <span key={m}>{m}</span>
        ))}
    </div>
);

/* ------------------------------------------------------- Segmented control --- */

const SegmentedControl = ({ segments, activeIndex = 0 }: { segments: string[]; activeIndex?: number }) => (
    <div className="mt-auto flex border-t border-secondary">
        {segments.map((seg, i) => (
            <button
                key={seg}
                type="button"
                aria-pressed={i === activeIndex}
                className={cx(
                    "flex-1 px-2 py-3.5 text-xs font-semibold tracking-wide whitespace-nowrap uppercase transition duration-100 ease-linear",
                    i > 0 && "border-l border-secondary",
                    i === activeIndex ? "bg-[#37b6b7]/10 text-[#37b6b7]" : "text-[#c01574] hover:bg-secondary_hover",
                )}
            >
                {seg}
            </button>
        ))}
    </div>
);

/* ------------------------------------------------------------- Metric card --- */

interface MetricCardProps {
    title: string;
    value: string;
    valueColor: string;
    valueSize?: "sm" | "md";
    subtext?: ReactNode;
    chart?: ReactNode;
    showMonthAxis?: boolean;
    segments?: string[];
    segmentActive?: number;
}

const MetricCard = ({
    title,
    value,
    valueColor,
    valueSize = "md",
    subtext,
    chart,
    showMonthAxis,
    segments,
    segmentActive,
}: MetricCardProps) => (
    <div className="flex flex-col overflow-hidden rounded-xl bg-primary shadow-xs ring-1 ring-secondary">
        <div className="flex flex-col gap-3 p-5">
            <h3 className="text-md font-semibold text-primary">{title}</h3>

            <div className="flex flex-col gap-1">
                <p className={cx("font-bold", valueSize === "sm" ? "text-display-sm" : "text-display-md", valueColor)}>{value}</p>
                {subtext && <div className="text-sm text-tertiary">{subtext}</div>}
            </div>

            {chart && <div className="flex flex-col gap-2 pt-1">{chart}</div>}
            {showMonthAxis && <MonthAxis />}
        </div>

        {segments && <SegmentedControl segments={segments} activeIndex={segmentActive} />}
    </div>
);

/* ------------------------------------------------------------- Chart data --- */

const iosSdkSeries: Series[] = [
    { data: [42, 48, 44, 55, 52, 62, 58, 68, 72, 76, 82, 90], color: TEAL, width: 2 },
    { data: [20, 24, 22, 28, 32, 34, 38, 44, 50, 54, 60, 66], color: TEAL_LIGHT, width: 2 },
];

const takeRateSeries: Series[] = [
    { data: [50, 54, 50, 60, 58, 66, 62, 72, 74, 80, 84, 92], color: BLUE_LIGHT, width: 2 },
    { data: [18, 20, 19, 24, 26, 30, 32, 38, 42, 48, 54, 64], color: NAVY, width: 2 },
];

const bidsSeries: Series[] = [
    { data: [46, 52, 48, 58, 56, 64, 60, 70, 72, 78, 82, 90], color: BLUE_LIGHT, width: 2 },
    { data: [16, 18, 17, 22, 26, 28, 30, 36, 40, 46, 52, 62], color: NAVY, width: 2 },
];

const costSeries: Series[] = [
    { data: [40, 48, 44, 54, 58, 66, 60, 72, 68, 78, 82, 90], color: PINK_LIGHT, width: 2 },
    { data: [30, 34, 38, 42, 48, 50, 54, 58, 62, 68, 72, 80], color: PINK_MID, width: 2 },
    { data: [15, 18, 22, 26, 24, 30, 34, 32, 40, 44, 50, 58], color: PINK, width: 2 },
];

/* --------------------------------------------------------------- The screen --- */

export const KeyMetricsDashboardScreen = () => {
    return (
        <div className="flex min-h-screen bg-secondary">
            <GlobalNav defaultActiveKey="key metrics" />

            <main className="flex-1 overflow-x-hidden">
                {/* App header */}
                <header className="flex items-center justify-between border-b border-secondary bg-primary px-8 py-6">
                    <h1 className="text-display-xs font-semibold text-primary">Nimbus Exchange</h1>
                    <button
                        type="button"
                        aria-label="Account options"
                        className="inline-flex size-9 items-center justify-center rounded-full text-[#DA6EA3] transition duration-100 ease-linear hover:bg-[#fdf2f7]"
                    >
                        <ChevronDown className="size-6" aria-hidden="true" />
                    </button>
                </header>

                {/* Masonry-style metric grid: three columns of stacked cards. */}
                <div className="flex flex-col gap-5 px-8 py-8 xl:flex-row xl:items-start">
                    {/* Column A */}
                    <div className="flex flex-1 flex-col gap-5">
                        <MetricCard
                            title="iOS SDK"
                            value="$11,811.51"
                            valueColor="text-[#37b6b7]"
                            valueSize="sm"
                            subtext={
                                <span>
                                    high: June 1, 2023 <span className="font-semibold text-primary">$21,657.00</span>
                                </span>
                            }
                            chart={<Sparkline series={iosSdkSeries} areaColor="rgba(55,182,183,0.08)" />}
                            showMonthAxis
                            segments={["CORE", "NIMBUS+", "BLENDED"]}
                            segmentActive={0}
                        />

                        <MetricCard
                            title="Avg.Bids Per Auction"
                            value="28"
                            valueColor="text-[#31b0f0]"
                            chart={<Sparkline series={bidsSeries} areaColor="rgba(49,176,240,0.08)" />}
                            showMonthAxis
                        />
                    </div>

                    {/* Column B */}
                    <div className="flex flex-1 flex-col gap-5">
                        <MetricCard
                            title="ARR"
                            value="$11,811.51"
                            valueColor="text-primary"
                            segments={["TODAY", "NIMBUS+", "QUARTER"]}
                            segmentActive={0}
                        />

                        <MetricCard
                            title="NDR"
                            value="$11,811.51"
                            valueColor="text-primary"
                            segments={["MONTH", "NIMBUS+", "BLENDED"]}
                            segmentActive={0}
                        />

                        <MetricCard
                            title="Avg. Nimbus Cost Per Auction"
                            value="$0.02154"
                            valueColor="text-[#c01574]"
                            valueSize="sm"
                            chart={<Sparkline series={costSeries} areaColor="rgba(192,21,116,0.05)" gridlines smooth />}
                            showMonthAxis
                        />
                    </div>

                    {/* Column C */}
                    <div className="flex flex-1 flex-col gap-5">
                        <MetricCard
                            title="Avg. Take Rate"
                            value="$11,811.51"
                            valueColor="text-[#31b0f0]"
                            valueSize="sm"
                            chart={<Sparkline series={takeRateSeries} areaColor="rgba(49,176,240,0.08)" />}
                            showMonthAxis
                            segments={["CORE", "NIMBUS+", "BLENDED"]}
                            segmentActive={0}
                        />

                        <MetricCard
                            title="Active Demand Connections"
                            value="6"
                            valueColor="text-primary"
                            segments={["CORE", "CORE SDK", "NIMBUS+", "TOTAL"]}
                            segmentActive={0}
                        />

                        <MetricCard title="Potential Nimbus+ connections" value="71" valueColor="text-primary" />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default KeyMetricsDashboardScreen;
