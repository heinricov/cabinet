"use client"

import {
  DataTable,
  formatDate,
  SortableHeader,
  type DataTableColumnDef,
  type BulkAction,
  toast,
} from "@workspace/ui/crud/data-table"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import { Ellipsis, Pencil, Trash, Shield, Plus } from "lucide-react"

type RoleType = "System" | "Custom"

type Role = {
  id: string
  name: string
  description: string
  type: RoleType
  memberCount: number
  createdAt: string
}

const typeVariant: Record<RoleType, "default" | "secondary"> = {
  System: "default",
  Custom: "secondary",
}

const roles: Role[] = [
  {
    id: "r-01",
    name: "Owner",
    description: "Full access to all resources and settings",
    type: "System",
    memberCount: 1,
    createdAt: "2026-01-15",
  },
  {
    id: "r-02",
    name: "Admin",
    description: "Manage members, roles, and workspace settings",
    type: "System",
    memberCount: 3,
    createdAt: "2026-01-15",
  },
  {
    id: "r-03",
    name: "Editor",
    description: "Create and edit content, manage published items",
    type: "System",
    memberCount: 8,
    createdAt: "2026-01-15",
  },
  {
    id: "r-04",
    name: "Viewer",
    description: "Read-only access to all content",
    type: "System",
    memberCount: 12,
    createdAt: "2026-01-15",
  },
  {
    id: "r-05",
    name: "Billing Admin",
    description: "Manage billing, subscriptions, and invoices",
    type: "Custom",
    memberCount: 2,
    createdAt: "2026-03-10",
  },
  {
    id: "r-06",
    name: "Content Manager",
    description: "Full control over content creation and publishing workflow",
    type: "Custom",
    memberCount: 4,
    createdAt: "2026-04-05",
  },
  {
    id: "r-07",
    name: "Support Agent",
    description: "Access to customer support tools and ticket management",
    type: "Custom",
    memberCount: 5,
    createdAt: "2026-05-12",
  },
  {
    id: "r-08",
    name: "Analytics Viewer",
    description: "View-only access to analytics dashboards and reports",
    type: "Custom",
    memberCount: 6,
    createdAt: "2026-06-01",
  },
]

const roleColumns: DataTableColumnDef<Role>[] = [
  {
    id: "select",
    enableSorting: false,
    enableHiding: false,
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        indeterminate={
          table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected()
        }
        onCheckedChange={(checked) =>
          table.toggleAllPageRowsSelected(checked === true)
        }
        aria-label="Select all roles"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(checked) => row.toggleSelected(checked === true)}
        aria-label={`Select ${row.original.name}`}
      />
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => <SortableHeader column={column} label="Role" />,
    filterFn: (row, _id, value: string) => {
      const q = value.toLowerCase()
      return (
        row.original.name.toLowerCase().includes(q) ||
        row.original.description.toLowerCase().includes(q)
      )
    },
    cell: ({ row }) => (
      <div className="min-w-0">
        <p className="truncate text-sm leading-tight font-medium">
          {row.original.name}
        </p>
        <p className="truncate text-xs text-muted-foreground">
          {row.original.description}
        </p>
      </div>
    ),
  },
  {
    accessorKey: "type",
    enableSorting: false,
    header: () => (
      <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        Type
      </span>
    ),
    cell: ({ row }) => (
      <Badge variant={typeVariant[row.original.type]} className="text-xs">
        {row.original.type}
      </Badge>
    ),
  },
  {
    accessorKey: "memberCount",
    header: ({ column }) => <SortableHeader column={column} label="Members" />,
    cell: ({ row }) => (
      <span className="text-sm tabular-nums">{row.original.memberCount}</span>
    ),
  },
  {
    accessorKey: "createdAt",
    sortFn: "datetime",
    header: ({ column }) => (
      <div className="ml-auto">
        <SortableHeader column={column} label="Created" />
      </div>
    ),
    cell: ({ row }) => (
      <span className="block text-right text-xs text-muted-foreground tabular-nums">
        {formatDate(row.original.createdAt)}
      </span>
    ),
  },
  {
    id: "actions",
    enableSorting: false,
    enableHiding: false,
    header: () => <span className="sr-only">Actions</span>,
    cell: ({ row }) => (
      <div className="flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label={`Actions for ${row.original.name}`}
              >
                <Ellipsis className="size-4" aria-hidden="true" />
              </Button>
            }
          />
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem>
              <Pencil aria-hidden="true" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Shield aria-hidden="true" />
              Permissions
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <Trash aria-hidden="true" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    ),
  },
]

const bulkActions: BulkAction[] = [
  {
    label: "Export",
    onClick: (ids) =>
      toast("Export started", {
        description: `Exporting ${ids.length} role${ids.length === 1 ? "" : "s"} to CSV.`,
      }),
  },
  {
    label: "Delete",
    icon: <Trash className="size-3.5" aria-hidden="true" />,
    variant: "destructive",
    onClick: (ids) =>
      toast("Roles deleted", {
        description: `${ids.length} role${ids.length === 1 ? "" : "s"} deleted.`,
      }),
  },
]

export default function Page() {
  return (
    <section className="flex w-full justify-center px-4 py-10 sm:py-16">
      <DataTable
        data={roles}
        columns={roleColumns}
        title="Roles & Permissions"
        subtitle={`${roles.length} roles configured`}
        searchPlaceholder="Search roles..."
        searchColumnId="name"
        columnLabels={{
          name: "Role",
          type: "Type",
          memberCount: "Members",
          createdAt: "Created",
        }}
        addButton={{
          label: "New Role",
          icon: <Plus className="size-3.5" aria-hidden="true" />,
          onClick: () =>
            toast("Role created", { description: "New role has been added." }),
        }}
        bulkActions={bulkActions}
        emptyMessage="No roles match your search."
        initialSorting={[{ id: "createdAt", desc: true }]}
      />
    </section>
  )
}
