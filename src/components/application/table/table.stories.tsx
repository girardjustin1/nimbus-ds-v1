import { useMemo, useState, type ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { SortDescriptor } from "react-aria-components";
import { BadgeWithDot } from "@/components/base/badges/badges";
import { Table, TableCard } from "@/components/application/table/table";

/**
 * Application UI → Table
 *
 * Nimbus-themed sortable data table. The theme is applied globally, so the
 * TableCard + Table compound components render with the Nimbus teal brand out
 * of the box. Click a sortable column header to toggle sort direction.
 */

type Status = "active" | "invited" | "offline";

interface Member {
    id: string;
    name: string;
    email: string;
    role: string;
    status: Status;
}

interface Column {
    id: keyof Omit<Member, "id">;
    label: string;
    allowsSorting?: boolean;
    isRowHeader?: boolean;
}

const columns: Column[] = [
    { id: "name", label: "Name", allowsSorting: true, isRowHeader: true },
    { id: "email", label: "Email", allowsSorting: true },
    { id: "role", label: "Role", allowsSorting: true },
    { id: "status", label: "Status", allowsSorting: true },
];

const members: Member[] = [
    { id: "1", name: "Vanessa Eng", email: "vanessa@nimbus.com", role: "Product Manager", status: "active" },
    { id: "2", name: "Kristen Smith", email: "kristen@nimbus.com", role: "Frontend Engineer", status: "active" },
    { id: "3", name: "Marc Santiago", email: "marc@nimbus.com", role: "Design Lead", status: "invited" },
    { id: "4", name: "Olivia Rhye", email: "olivia@nimbus.com", role: "Backend Engineer", status: "offline" },
    { id: "5", name: "Phoenix Baker", email: "phoenix@nimbus.com", role: "Data Analyst", status: "active" },
];

const statusBadge: Record<Status, ReactNode> = {
    active: (
        <BadgeWithDot color="success" type="pill-color" size="sm">
            Active
        </BadgeWithDot>
    ),
    invited: (
        <BadgeWithDot color="warning" type="pill-color" size="sm">
            Invited
        </BadgeWithDot>
    ),
    offline: (
        <BadgeWithDot color="gray" type="pill-color" size="sm">
            Offline
        </BadgeWithDot>
    ),
};

const TeamTable = () => {
    const [sort, setSort] = useState<SortDescriptor>({ column: "name", direction: "ascending" });

    const sortedRows = useMemo(() => {
        if (!sort.column) return members;
        const col = sort.column as keyof Member;
        const sorted = [...members].sort((a, b) => String(a[col]).localeCompare(String(b[col]), undefined, { numeric: true }));
        return sort.direction === "descending" ? sorted.reverse() : sorted;
    }, [sort]);

    return (
        <TableCard.Root>
            <TableCard.Header
                title="Team members"
                badge="5 users"
                description="Manage your team members and their account permissions here."
            />
            <Table aria-label="Team members" selectionMode="none" sortDescriptor={sort} onSortChange={setSort}>
                <Table.Header>
                    {columns.map((col) => (
                        <Table.Head key={col.id} id={col.id} label={col.label} isRowHeader={col.isRowHeader} allowsSorting={col.allowsSorting} />
                    ))}
                </Table.Header>
                <Table.Body items={sortedRows}>
                    {(row) => (
                        <Table.Row id={row.id} columns={columns}>
                            {(col: Column) => (
                                <Table.Cell>
                                    {col.id === "status" ? (
                                        statusBadge[row.status]
                                    ) : col.id === "name" ? (
                                        <span className="text-sm font-medium text-primary">{row[col.id]}</span>
                                    ) : (
                                        <span className="text-sm text-tertiary">{row[col.id]}</span>
                                    )}
                                </Table.Cell>
                            )}
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </TableCard.Root>
    );
};

const meta = {
    title: "Application UI/Table",
    component: Table,
    parameters: { layout: "fullscreen" },
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <div className="bg-secondary p-8">
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof TeamTable>;

/** Sortable team-members table wrapped in a TableCard with a header. */
export const Default: Story = {
    render: () => <TeamTable />,
};
