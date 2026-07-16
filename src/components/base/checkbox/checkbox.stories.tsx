import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "@/components/base/checkbox/checkbox";

/**
 * Components → Checkbox
 * Selected/indeterminate states use the Nimbus brand-solid (pink) token.
 */
const meta = {
    title: "Components/Checkbox",
    component: Checkbox,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    args: { label: "Remember me", size: "sm" },
    argTypes: {
        size: { control: "inline-radio", options: ["sm", "md"] },
        isSelected: { control: "boolean" },
        isIndeterminate: { control: "boolean" },
        isDisabled: { control: "boolean" },
    },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** Checkbox with a label and supporting hint text. */
export const WithHint: Story = {
    args: {
        size: "md",
        label: "Remember me",
        hint: "Save my login details for next time.",
    },
};

/** Both sizes side by side. */
export const Sizes: Story = {
    render: (args) => (
        <div className="flex items-center gap-6">
            <Checkbox {...args} size="sm" label="Small" />
            <Checkbox {...args} size="md" label="Medium" />
        </div>
    ),
};

/** Unchecked, checked, and indeterminate states. */
export const States: Story = {
    render: (args) => (
        <div className="flex flex-col gap-4">
            <Checkbox {...args} label="Unchecked" />
            <Checkbox {...args} label="Checked" isSelected />
            <Checkbox {...args} label="Indeterminate" isIndeterminate />
        </div>
    ),
    args: { size: "md" },
};

/** Disabled checkboxes render at 50% opacity. */
export const Disabled: Story = {
    render: (args) => (
        <div className="flex flex-col gap-4">
            <Checkbox {...args} label="Disabled unchecked" isDisabled />
            <Checkbox {...args} label="Disabled checked" isDisabled isSelected />
        </div>
    ),
    args: { size: "md" },
};
