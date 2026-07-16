import type { ReactNode } from "react";
import { ChevronDown } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { GlobalNav } from "@/components/application/global-nav/global-nav";

/**
 * SDK & Documentation → Nimbus SDKs screen.
 *
 * Rebuilds the reference screen (reference/screens - batch 2/SDK &
 * Documentation/Screen.png): two large equal cards presenting the iOS and
 * Android SDKs. Each card centres a thin teal circular-outline platform glyph
 * (Apple / Android robot), followed by a title + description, a "Latest SDK
 * Version" row (2.1.0 in teal), and a footer pairing a pink "View
 * Documentation" link with a pink primary "BLOCK" button.
 *
 * The Apple/Android glyphs are not available in @untitledui/icons, so they are
 * rendered as inline SVGs inside a teal ring span. Everything else composes the
 * Nimbus Global Nav + Untitled UI Button against the global pink/teal theme.
 */

const TEAL = "#37B6B7";

/* -------------------------------------------------------------- Platform glyphs --- */

/** Thin teal circular outline wrapping a platform glyph, matching the reference. */
const PlatformRing = ({ children }: { children: ReactNode }) => (
    <span
        className="flex size-24 items-center justify-center rounded-full border-2"
        style={{ borderColor: TEAL, color: TEAL }}
        aria-hidden="true"
    >
        {children}
    </span>
);

const AppleGlyph = () => (
    <svg viewBox="0 0 24 24" className="size-11" fill="currentColor" aria-hidden="true">
        <path d="M17.05 12.54c-.02-1.86 1.52-2.75 1.59-2.8-.87-1.27-2.22-1.44-2.7-1.46-1.15-.12-2.24.67-2.82.67-.58 0-1.48-.65-2.43-.64-1.25.02-2.4.73-3.05 1.85-1.3 2.26-.33 5.6.93 7.43.62.9 1.35 1.9 2.31 1.86.93-.04 1.28-.6 2.4-.6 1.12 0 1.44.6 2.42.58 1-.02 1.63-.91 2.24-1.81.71-1.04 1-2.05 1.02-2.1-.02-.01-1.94-.75-1.96-2.99z" />
        <path d="M15.2 6.9c.51-.62.86-1.49.76-2.35-.74.03-1.63.49-2.16 1.11-.47.55-.89 1.43-.78 2.27.83.07 1.67-.42 2.18-1.03z" />
    </svg>
);

const AndroidGlyph = () => (
    <svg viewBox="0 0 24 24" className="size-11" fill="currentColor" aria-hidden="true">
        <path d="M6.4 9.4c-.5 0-.9.4-.9.9v4.4c0 .5.4.9.9.9s.9-.4.9-.9v-4.4c0-.5-.4-.9-.9-.9zM17.6 9.4c-.5 0-.9.4-.9.9v4.4c0 .5.4.9.9.9s.9-.4.9-.9v-4.4c0-.5-.4-.9-.9-.9zM8.3 9.9v6.2c0 .5.4.9.9.9h.9v2.5c0 .5.4.9.9.9s.9-.4.9-.9v-2.5h1.2v2.5c0 .5.4.9.9.9s.9-.4.9-.9v-2.5h.9c.5 0 .9-.4.9-.9V9.9H8.3z" />
        <path d="M15.1 5.1l.8-1.4c.1-.1 0-.3-.1-.3-.1-.1-.3 0-.3.1l-.8 1.4c-.9-.4-1.8-.6-2.7-.6s-1.9.2-2.7.6L8.5 3.5c-.1-.1-.2-.2-.3-.1-.1 0-.2.2-.1.3l.8 1.4C7.2 6 6.2 7.5 6.2 9.2h11.6c0-1.7-1-3.2-2.7-4.1zM9.8 7.6c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm4.4 0c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5z" />
    </svg>
);

/* -------------------------------------------------------------------- Card --- */

interface SdkCard {
    id: string;
    title: string;
    description: string;
    version: string;
    glyph: ReactNode;
}

const cards: SdkCard[] = [
    {
        id: "ios",
        title: "iOS SDK",
        description: "The iOS SDK can be integrated manually or via CocoaPods.",
        version: "2.1.0",
        glyph: <AppleGlyph />,
    },
    {
        id: "android",
        title: "Android SDK",
        description: "The Android SDK can be integrated manually or via CocoaPods.",
        version: "2.1.0",
        glyph: <AndroidGlyph />,
    },
];

const SdkCardView = ({ card }: { card: SdkCard }) => (
    <div className="flex flex-col rounded-xl bg-primary shadow-xs ring-1 ring-secondary">
        {/* Body */}
        <div className="flex flex-col items-center gap-4 px-8 pt-12 pb-10 text-center">
            <PlatformRing>{card.glyph}</PlatformRing>
            <div className="mt-2 flex w-full flex-col gap-1 text-left">
                <h2 className="text-xl font-bold text-primary">{card.title}</h2>
                <p className="text-sm text-tertiary">{card.description}</p>
            </div>
        </div>

        {/* Version row */}
        <div className="flex items-center border-t border-secondary">
            <div className="w-1/3 px-6 py-4">
                <span className="text-sm text-secondary">Latest SDK Version</span>
            </div>
            <div className="flex-1 border-l border-secondary px-6 py-4 text-right">
                <span className="text-sm font-bold" style={{ color: TEAL }}>
                    {card.version}
                </span>
            </div>
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-end gap-6 border-t border-secondary px-6 py-4">
            <Button color="link-color" href="#" className="text-[#DA6EA3] hover:text-[#c01574]">
                View Documentation&rarr;
            </Button>
            <Button color="primary-pink" className="uppercase">
                Block
            </Button>
        </div>
    </div>
);

/* --------------------------------------------------------------- The screen --- */

export const SdkDocumentationScreen = () => {
    return (
        <div className="flex min-h-screen bg-secondary">
            <GlobalNav defaultActiveKey="SDKs" />

            <main className="flex-1 overflow-x-hidden">
                {/* App header */}
                <header className="flex items-center justify-between border-b border-secondary bg-primary px-8 py-5">
                    <h1 className="text-display-xs font-semibold text-primary">Nimbus SDKs</h1>
                    <button
                        type="button"
                        aria-label="Account options"
                        className="inline-flex size-9 items-center justify-center rounded-full text-[#DA6EA3] transition duration-100 ease-linear hover:bg-[#fdf2f7]"
                    >
                        <ChevronDown className="size-6" aria-hidden="true" />
                    </button>
                </header>

                <div className="px-8 py-8">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        {cards.map((card) => (
                            <SdkCardView key={card.id} card={card} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SdkDocumentationScreen;
