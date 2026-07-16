import type { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

/**
 * Foundations → Colors
 * The Nimbus palette, mirrored from adsbynimbus.com and mapped onto the theme
 * tokens in `src/styles/theme.css` (brand = Nimbus teal).
 */
const meta = {
    title: "Styles/Color",
    parameters: { layout: "fullscreen" },
    tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj;

/** Swatch driven by an explicit hex value (source-of-truth from the Nimbus site). */
const HexSwatch = ({ hex, label }: { hex: string; label: string }) => (
    <div className="flex flex-col gap-1.5">
        <div className="h-16 w-full rounded-lg ring-1 ring-black/10 ring-inset" style={{ background: hex }} />
        <div className="flex flex-col">
            <span className="text-xs font-semibold text-primary">{label}</span>
            <span className="text-xs text-tertiary uppercase">{hex}</span>
        </div>
    </div>
);

/** Swatch driven by a theme CSS variable (token). */
const TokenSwatch = ({ token, label }: { token: string; label: string }) => (
    <div className="flex flex-col gap-1.5">
        <div className="h-16 w-full rounded-lg ring-1 ring-black/10 ring-inset" style={{ background: `var(${token})` }} />
        <div className="flex flex-col">
            <span className="text-xs font-semibold text-primary">{label}</span>
            <span className="text-xs text-tertiary">{token.replace("--color-", "")}</span>
        </div>
    </div>
);

const Grid = ({ children }: { children: ReactNode }) => (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11">{children}</div>
);

const Section = ({ title, desc, children }: { title: string; desc?: string; children: ReactNode }) => (
    <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold text-primary">{title}</h3>
            {desc && <p className="text-sm text-tertiary">{desc}</p>}
        </div>
        {children}
    </section>
);

// Exact Nimbus colors sampled from adsbynimbus.com.
const TEAL = [
    { hex: "#f1fcfb", label: "Teal 50" },
    { hex: "#cef4f4", label: "Teal 100" },
    { hex: "#6bddda", label: "Teal 300" },
    { hex: "#08c6c7", label: "Teal · signature" },
    { hex: "#23a6a9", label: "Teal 600" },
    { hex: "#19676c", label: "Teal 800" },
    { hex: "#003a5b", label: "Navy 950" },
];
const PINK = [
    { hex: "#da6ea3", label: "Pink · light" },
    { hex: "#dc438c", label: "Pink · accent" },
];
const NEUTRAL = [
    { hex: "#f9f7f3", label: "Cream" },
    { hex: "#e9eaeb", label: "Gray 200" },
    { hex: "#d5d7da", label: "Gray 300" },
    { hex: "#a4a7ae", label: "Gray 400" },
    { hex: "#535862", label: "Gray 600" },
    { hex: "#181d27", label: "Gray 900" },
];
const SURFACES = [
    { hex: "#f9f7f3", label: "Page / cream" },
    { hex: "#ffffff", label: "Card / white" },
    { hex: "#003a5b", label: "Footer / navy" },
];

const SCALE_STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

export const Palette: Story = {
    render: () => (
        <div className="flex flex-col gap-12 bg-[#f9f7f3] p-8 text-primary">
            <div className="flex flex-col gap-2">
                <h2 className="text-[33px] font-extrabold text-[#181d27]">Nimbus colors</h2>
                <p className="text-[18px] text-[#535862]">Brand = Nimbus teal, with a pink accent and warm neutrals.</p>
            </div>

            <Section title="Brand — Teal" desc="The signature #08c6c7 anchors the scale; darker steps match the site.">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-7">
                    {TEAL.map((c) => (
                        <HexSwatch key={c.label} {...c} />
                    ))}
                </div>
            </Section>

            <Section title="Accent — Pink" desc="Used for highlights like 'We're Hiring!' and secondary stats.">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {PINK.map((c) => (
                        <HexSwatch key={c.label} {...c} />
                    ))}
                </div>
            </Section>

            <Section title="Neutrals" desc="Warm cream through near-black — matches Nimbus's gray tokens.">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6">
                    {NEUTRAL.map((c) => (
                        <HexSwatch key={c.label} {...c} />
                    ))}
                </div>
            </Section>

            <Section title="Surfaces">
                <div className="grid grid-cols-3 gap-4">
                    {SURFACES.map((c) => (
                        <HexSwatch key={c.label} {...c} />
                    ))}
                </div>
            </Section>

            <Section title="Brand scale (theme tokens)" desc="--color-brand-* driving buttons, links, focus rings.">
                <Grid>
                    {SCALE_STEPS.map((s) => (
                        <TokenSwatch key={s} token={`--color-brand-${s}`} label={`${s}`} />
                    ))}
                </Grid>
            </Section>

            <Section title="Neutral scale (theme tokens)" desc="--color-neutral-*">
                <Grid>
                    {SCALE_STEPS.map((s) => (
                        <TokenSwatch key={s} token={`--color-neutral-${s}`} label={`${s}`} />
                    ))}
                </Grid>
            </Section>
        </div>
    ),
};
