import type { Meta, StoryObj } from "@storybook/react-vite";

/**
 * Foundations → Typography
 * The Nimbus type system, mirrored from adsbynimbus.com. Proxima Nova throughout.
 * Class names are full literal strings so Tailwind v4's scanner generates them.
 */
const meta = {
    title: "Styles/Typography",
    parameters: { layout: "fullscreen" },
    tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj;

type TypeStyle = { name: string; cls: string; spec: string; sample: string };

// Named Nimbus text styles with exact size/weight/line-height/color from the site.
const STYLES: TypeStyle[] = [
    { name: "Hero", cls: "text-[53px] leading-[1.05] font-black text-[#181d27]", spec: "Proxima Nova · 900 · 53px · 1.05", sample: "Efficiency at every layer" },
    { name: "Section Title", cls: "text-[33px] leading-[1.15] font-extrabold text-[#181d27]", spec: "800 · 33px", sample: "How Nimbus scales your stack" },
    { name: "Stat Value", cls: "text-[58px] leading-none font-bold text-[#181d27]", spec: "700 · 58px · 1.0", sample: "3.6×" },
    { name: "Big Number", cls: "text-[64px] leading-none font-bold text-[#08c6c7]", spec: "700 · 64px · teal", sample: "01" },
    { name: "Subtitle / Lead", cls: "text-[26px] leading-[1.35] font-medium text-[#535862]", spec: "500 · 26px · 1.35 · gray", sample: "A closer look at the results we delivered." },
    { name: "Key Text", cls: "text-[21px] leading-[25px] text-[#181d27]", spec: "400 · 21px · 25px", sample: "The takeaway that matters most to your team." },
    { name: "Body", cls: "text-[18px] leading-[24px] text-[#535862]", spec: "400 · 18px · 24px · gray", sample: "Body copy for paragraphs and descriptions across the site." },
    { name: "Emphasis", cls: "text-[18px] leading-[24px] font-bold text-[#181d27]", spec: "700 · 18px", sample: "Bolded inline emphasis within body copy." },
    { name: "Eyebrow / Label", cls: "text-[13px] uppercase tracking-[0.11em] font-semibold text-[#08c6c7]", spec: "600 · 13px · uppercase · teal", sample: "Case Study" },
];

const Row = ({ name, cls, spec, sample }: TypeStyle) => (
    <div className="flex flex-col gap-2 border-b border-secondary py-6">
        <div className="flex flex-wrap items-baseline gap-x-3">
            <span className="text-sm font-semibold text-primary">{name}</span>
            <span className="text-xs text-tertiary">{spec}</span>
        </div>
        <p className={cls}>{sample}</p>
    </div>
);

export const TypeScale: Story = {
    render: () => (
        <div className="flex flex-col gap-10 bg-[#f9f7f3] p-8 text-primary">
            <div className="flex flex-col gap-2">
                <h2 className="text-[33px] font-extrabold text-[#181d27]">Nimbus typography</h2>
                <p className="text-[18px] text-[#535862]">Proxima Nova. Named styles pulled from adsbynimbus.com.</p>
            </div>

            <section className="flex flex-col">
                {STYLES.map((s) => (
                    <Row key={s.name} {...s} />
                ))}
            </section>

            <section className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-[#181d27]">Weights</h3>
                <div className="flex flex-col gap-1 text-[28px] text-[#181d27]">
                    <span className="font-normal">Regular 400 — Nimbus</span>
                    <span className="font-medium">Medium 500 — Nimbus</span>
                    <span className="font-semibold">Semibold 600 — Nimbus</span>
                    <span className="font-bold">Bold 700 — Nimbus</span>
                    <span className="font-extrabold">Extrabold 800 — Nimbus</span>
                    <span className="font-black">Black 900 — Nimbus</span>
                </div>
                <p className="max-w-2xl text-sm text-[#535862]">
                    ⚠️ The Nimbus site uses <strong>800 (extrabold)</strong> and <strong>900 (black)</strong> for
                    headings, and <strong>500 (medium)</strong> for subtitles. Your current Adobe Fonts kit only ships
                    400 / 600 / 700, so 500 / 800 / 900 fall back to the nearest available weight. Add those weights to
                    the kit (same URL) for pixel-accurate headings.
                </p>
            </section>
        </div>
    ),
};
