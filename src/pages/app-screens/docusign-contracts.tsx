import type { ReactNode } from "react";
import { ArrowLeft, ChevronDown, Download01, Plus } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { InputBase } from "@/components/base/input/input";
import { GlobalNav } from "@/components/application/global-nav/global-nav";

/**
 * App Screens — Add DocuSign Contracts (Demand).
 *
 * Rebuilds the two reference screens (reference/screens/addDocusignContracts):
 *   1. "Your Account" — integrated demand partners overview with the contract
 *      management actions (Add N+ Contract, Add Demand Sources, …).
 *   2. "Add a Docusign Contract" — the form reached from the Demand section.
 *
 * Both share the Nimbus Global Nav + a light top utility bar + a page title
 * header, factored into a `ScreenChrome` wrapper so the two screens stay in
 * lock-step and future Demand screens can reuse the same shell.
 */

/* ----------------------------------------------------------------- Chrome --- */

const topNavLinks = ["TPE Revenue", "Nimbus Revenue", "Users", "Demand Requests", "Kibana Reporting", "Storybook"];

interface ScreenChromeProps {
    /** Large page title, e.g. "Your Account" / "Your App". */
    title: string;
    /** Which Global Nav item to highlight. */
    activeKey?: string;
    children: ReactNode;
}

const ScreenChrome = ({ title, activeKey = "manage active demand", children }: ScreenChromeProps) => (
    <div className="flex min-h-screen bg-primary">
        <GlobalNav defaultActiveKey={activeKey} />

        <main className="flex flex-1 flex-col overflow-x-hidden">
            {/* Top utility nav */}
            <nav aria-label="Utility" className="flex items-center justify-end gap-8 bg-secondary px-8 py-4">
                {topNavLinks.map((link) => (
                    <a
                        key={link}
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="text-sm font-bold whitespace-nowrap text-[#DA6EA3] transition-colors duration-100 hover:text-[#c85c92]"
                    >
                        {link}
                    </a>
                ))}
            </nav>

            {/* Page title */}
            <header className="flex items-center justify-between border-b border-secondary bg-primary px-8 py-5">
                <h1 className="text-display-xs font-bold text-primary">{title}</h1>
                <ChevronDown className="size-6 text-[#DA6EA3]" aria-hidden="true" />
            </header>

            {children}
        </main>
    </div>
);

/** Uppercase pink pill action, matching the reference button treatment. */
const PillAction = ({ children, iconLeading }: { children: string; iconLeading?: typeof Plus }) => (
    <Button size="sm" color="primary-pink" iconLeading={iconLeading} className="uppercase">
        {children}
    </Button>
);

/* --------------------------------------------------- Screen 1 · Account --- */

export const DocusignAccountScreen = () => (
    <ScreenChrome title="Your Account" activeKey="manage active demand">
        <div className="flex flex-col px-8 py-8">
            {/* Partners header + primary actions */}
            <div className="flex flex-col gap-4 pb-6 lg:flex-row lg:items-center lg:justify-between">
                <h2 className="text-lg font-bold text-primary">6 Integrated Demand Partners</h2>

                <div className="flex flex-wrap items-center gap-3">
                    <PillAction iconLeading={Download01}>Download ads.txt</PillAction>
                    <PillAction iconLeading={Download01}>Download SKAN IDs</PillAction>
                    <PillAction iconLeading={Plus}>Add N+ Contract</PillAction>
                    <PillAction iconLeading={Plus}>Add Demand Sources</PillAction>
                </div>
            </div>

            {/* Section: Third-Party Viewability */}
            <section className="border-t border-secondary pt-6">
                <h3 className="text-lg font-bold text-primary">Third-Party Viewability</h3>

                <div className="mt-5 flex flex-col gap-4 border-t border-secondary pt-5 md:flex-row md:items-start md:justify-between">
                    <p className="max-w-3xl text-sm text-tertiary">
                        This allows for all viewability information sent to Nimbus to be passed to your integrated demand partners. Turning this off will strip
                        all viewability parameters from your ad requests preventing demand from measuring viewability in your app.
                    </p>
                    <p className="max-w-xs text-right text-sm font-semibold text-secondary">Talk to your account manager about controlling your Viewability</p>
                </div>
            </section>
        </div>
    </ScreenChrome>
);

/* ----------------------------------------------- Screen 2 · Add contract --- */

/** Uppercase field label with a required asterisk. */
const FieldLabel = ({ children, htmlFor }: { children: string; htmlFor: string }) => (
    <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-semibold tracking-wide text-tertiary uppercase">
        {children} <span className="text-error-primary">*</span>
    </label>
);

interface FormFieldProps {
    id: string;
    label: string;
    placeholder?: string;
    type?: "text" | "url" | "date";
    className?: string;
}

const FormField = ({ id, label, placeholder, type = "text", className }: FormFieldProps) => (
    <div className={className}>
        <FieldLabel htmlFor={id}>{label}</FieldLabel>
        <InputBase id={id} type={type} size="md" placeholder={placeholder} isRequired aria-label={label} />
    </div>
);

export const DocusignAddContractScreen = () => (
    <ScreenChrome title="Your App" activeKey="manage active demand">
        <div className="flex flex-col px-8 py-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 pb-6">
                <ArrowLeft className="size-4 text-[#37b6b7]" aria-hidden="true" />
                <a href="#" onClick={(e) => e.preventDefault()} className="text-md font-semibold text-[#37b6b7] transition-colors duration-100 hover:text-[#2e9698]">
                    Demand:
                </a>
                <span className="text-md font-bold text-primary">Add Nimbus Contract</span>
            </div>

            {/* Section header + save */}
            <div className="flex items-center justify-between border-t border-secondary pt-6">
                <h2 className="text-lg font-bold text-primary">Add a Docusign Contract</h2>
                <PillAction>Save</PillAction>
            </div>

            {/* Form */}
            <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-6 grid grid-cols-1 gap-x-6 gap-y-5 border-t border-secondary pt-6 md:grid-cols-2"
            >
                <FormField id="signatory-first-name" label="Signatory First Name" placeholder="Olivia" />
                <FormField id="completed-docusign-link-1" label="Completed Docusign Link" type="url" placeholder="https://docusign.net/…" />
                <FormField
                    id="completed-docusign-link-2"
                    label="Completed Docusign Link"
                    type="url"
                    placeholder="https://docusign.net/…"
                    className="md:col-span-2"
                />
                <FormField id="dates-signed" label="Dates Signed" type="date" />
            </form>
        </div>
    </ScreenChrome>
);

export default DocusignAccountScreen;
