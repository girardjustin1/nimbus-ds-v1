import { useState } from "react";
import { cx, sortCx } from "@/utils/cx";
import { badgeComponents, navFooterLinks, navSections, type GlobalNavItem, type GlobalNavSection } from "./config";
import { NavChevron, NimbusMonogram, NimbusWordmark, ToggleChevron } from "./nimbus-nav-assets";

/**
 * Nimbus Global Nav — a React conversion of the Figma reference nav, built on
 * Untitled UI conventions (cx/sortCx, @untitledui/icons-style SVG components,
 * theme-token colors). Data-driven via `config.ts`; state (collapse + which
 * sections are open + active item) is managed locally so it works as a
 * standalone prototyping shell.
 *
 * The palette is the fixed Nimbus dark chrome from Figma (nodes 142:21470 /
 * 142:21630) — kept as exact values so the nav is always dark regardless of
 * the app's light/dark mode:
 *   bg #0a0d12 · quaternary text #a4a7ae · dividers #535862 · active teal #37b6b7
 */

const styles = sortCx({
    aside: [
        "sticky top-0 flex h-screen shrink-0 flex-col border-r border-[#e9eaeb] bg-[#0a0d12] text-[#a4a7ae] select-none",
        "text-[15px] leading-6 font-semibold [font-family:var(--font-body)]",
        "transition-[width] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
    ].join(" "),
    item: [
        "group/item relative flex cursor-pointer items-center gap-2 border-l-8 border-l-transparent py-1 pr-6 pl-4",
        "text-[15px] leading-6 font-semibold whitespace-nowrap text-[#a4a7ae] transition-colors duration-100 ease-linear",
        "hover:bg-white/[0.04] hover:text-white focus-visible:text-white focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#37b6b7]",
    ].join(" "),
    itemActive: "border-l-[#37b6b7] bg-[#37b6b7]/[0.06] text-white",
    itemCollapsed: "justify-center gap-0 py-1 pr-2 pl-0",
    icon: "flex size-6 shrink-0 items-center justify-center text-[#a4a7ae] transition-colors duration-100 ease-linear group-hover/item:text-white",
    iconActive: "text-white",
});

export interface GlobalNavProps {
    /** Sections + items to render. Defaults to the Nimbus reference content. */
    sections?: GlobalNavSection[];
    /** Key of the initially-active item. */
    defaultActiveKey?: string;
    /** Start collapsed to the 64px icon rail. */
    defaultCollapsed?: boolean;
    /** Called when an item is selected. */
    onSelect?: (item: GlobalNavItem) => void;
    className?: string;
}

export const GlobalNav = ({
    sections = navSections,
    defaultActiveKey = "performance insights",
    defaultCollapsed = false,
    onSelect,
    className,
}: GlobalNavProps) => {
    const [collapsed, setCollapsed] = useState(defaultCollapsed);
    const [activeKey, setActiveKey] = useState(defaultActiveKey);

    // Open the section that holds the active item by default; static sections
    // are always open.
    const [openSections, setOpenSections] = useState<Record<string, boolean>>(() =>
        Object.fromEntries(
            sections.map((s) => [s.id, s.variant === "static" || s.items.some((i) => i.key === defaultActiveKey)]),
        ),
    );

    const toggleSection = (id: string) => setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));

    const handleSelect = (item: GlobalNavItem) => {
        setActiveKey(item.key);
        onSelect?.(item);
    };

    return (
        <aside aria-label="Primary" className={cx(styles.aside, collapsed ? "w-16" : "w-[280px]", className)}>
            {/* Logo + collapse toggle */}
            <div className="relative flex w-full shrink-0 items-center justify-center py-4">
                {collapsed ? <NimbusMonogram className="size-8" /> : <NimbusWordmark className="block h-auto w-[104px]" />}

                <button
                    type="button"
                    onClick={() => setCollapsed((c) => !c)}
                    aria-label={collapsed ? "Expand navigation" : "Collapse navigation"}
                    aria-expanded={!collapsed}
                    className="absolute top-6 -right-2.5 z-[2] inline-flex size-5 items-center justify-center rounded-full border border-[#535862] bg-[#0a0d12] text-white transition-colors duration-100 hover:border-[#a4a7ae] hover:bg-[#161a22] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#37b6b7]"
                >
                    <ToggleChevron className={cx("size-2.5 transition-transform duration-200", collapsed && "rotate-180")} />
                </button>
            </div>

            {/* Scrollable sections */}
            <div className="flex-1 overflow-x-hidden overflow-y-auto [scrollbar-color:#535862_transparent] [scrollbar-width:thin]">
                {sections.map((section) => {
                    const isStatic = section.variant === "static";
                    const isOpen = isStatic || openSections[section.id];

                    return (
                        <nav
                            key={section.id}
                            aria-label={section.label}
                            className={cx(
                                "flex flex-col border-b border-[#535862]",
                                isStatic ? "py-3" : "py-4",
                                collapsed && "border-b-0 py-3",
                            )}
                        >
                            {/* Heading */}
                            {isStatic ? (
                                !collapsed && <div className="mb-0.5 px-6 text-white">{section.label}</div>
                            ) : (
                                !collapsed && (
                                    <button
                                        type="button"
                                        onClick={() => toggleSection(section.id)}
                                        aria-expanded={isOpen}
                                        className="mb-0.5 flex w-full items-center gap-2 overflow-hidden py-0 pr-6 pl-1 text-left text-white transition-opacity duration-100 hover:opacity-85 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#37b6b7]"
                                    >
                                        <NavChevron
                                            className={cx(
                                                "size-3 shrink-0 text-[#a4a7ae] transition-transform duration-200",
                                                isOpen ? "rotate-90" : "rotate-0",
                                            )}
                                        />
                                        <span className="min-w-0 flex-1">{section.label}</span>
                                    </button>
                                )
                            )}

                            {/* Items */}
                            {isOpen && (
                                <ul className="flex flex-col gap-0.5">
                                    {section.items.map((item) => {
                                        // In collapsed mode, only icon-bearing items remain on the rail.
                                        if (collapsed && !item.icon) return null;

                                        const Icon = item.icon;
                                        const Badge = item.badge ? badgeComponents[item.badge] : null;
                                        const isActive = item.key === activeKey;

                                        return (
                                            <li key={item.key}>
                                                <a
                                                    href={item.href ?? "#"}
                                                    title={collapsed ? item.key : undefined}
                                                    aria-current={isActive ? "page" : undefined}
                                                    onClick={(e) => {
                                                        if (!item.href || item.href === "#") e.preventDefault();
                                                        handleSelect(item);
                                                    }}
                                                    className={cx(styles.item, isActive && styles.itemActive, collapsed && styles.itemCollapsed)}
                                                >
                                                    {Icon && <span className={cx(styles.icon, isActive && styles.iconActive)}><Icon className="size-6" /></span>}
                                                    {!collapsed && <span className="whitespace-nowrap">{item.label}</span>}
                                                    {!collapsed && Badge && (
                                                        <span className="ml-auto flex shrink-0 items-center pl-2">
                                                            <Badge />
                                                        </span>
                                                    )}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </nav>
                    );
                })}
            </div>

            {/* Footer */}
            {!collapsed && (
                <footer className="flex shrink-0 flex-col gap-0.5 overflow-hidden border-t border-[#535862] px-6 py-4 text-[13px] leading-5 font-semibold whitespace-nowrap text-[#a4a7ae]">
                    {navFooterLinks.map((link) => (
                        <a key={link.label} href={link.href} className="transition-colors duration-100 hover:text-white">
                            {link.label}
                        </a>
                    ))}
                    <span className="opacity-85">©2026</span>
                </footer>
            )}
        </aside>
    );
};

export default GlobalNav;
