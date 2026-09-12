"use client"

import {
  DataTable,
  formatDate,
  SortableHeader,
  type DataTableColumnDef,
  type BulkAction,
  toast,
} from "@workspace/ui/crud/data-table"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar"
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
import { Ellipsis, User, Pencil, Trash, UserCog, Plus } from "lucide-react"

type Status = "Active" | "Invited" | "Inactive"
type Role = "Admin" | "Editor" | "Viewer"

type User = {
  id: string
  name: string
  initials: string
  avatar: string
  email: string
  status: Status
  role: Role
  joined: string
}

const statusVariant: Record<Status, "default" | "secondary" | "outline"> = {
  Active: "default",
  Invited: "secondary",
  Inactive: "outline",
}

const roleClass: Record<Role, string> = {
  Admin: "text-foreground font-medium",
  Editor: "text-muted-foreground",
  Viewer: "text-muted-foreground",
}

const users: User[] = [
  {
    id: "u-01",
    name: "Ada Lovelace",
    initials: "AL",
    avatar: "https://i.pravatar.cc/80?img=47",
    email: "ada@acme.io",
    status: "Active",
    role: "Admin",
    joined: "2026-06-12",
  },
  {
    id: "u-02",
    name: "Alan Turing",
    initials: "AT",
    avatar: "https://i.pravatar.cc/80?img=11",
    email: "alan@acme.io",
    status: "Active",
    role: "Editor",
    joined: "2026-06-10",
  },
  {
    id: "u-03",
    name: "Grace Hopper",
    initials: "GH",
    avatar: "https://i.pravatar.cc/80?img=45",
    email: "grace@acme.io",
    status: "Invited",
    role: "Editor",
    joined: "2026-06-08",
  },
  {
    id: "u-04",
    name: "Linus Pauling",
    initials: "LP",
    avatar: "https://i.pravatar.cc/80?img=12",
    email: "linus@acme.io",
    status: "Inactive",
    role: "Viewer",
    joined: "2026-05-29",
  },
  {
    id: "u-05",
    name: "Katherine Johnson",
    initials: "KJ",
    avatar: "https://i.pravatar.cc/80?img=49",
    email: "katherine@acme.io",
    status: "Active",
    role: "Viewer",
    joined: "2026-05-21",
  },
  {
    id: "u-06",
    name: "Edsger Dijkstra",
    initials: "ED",
    avatar: "https://i.pravatar.cc/80?img=13",
    email: "edsger@acme.io",
    status: "Active",
    role: "Admin",
    joined: "2026-05-18",
  },
  {
    id: "u-07",
    name: "Barbara Liskov",
    initials: "BL",
    avatar: "https://i.pravatar.cc/80?img=44",
    email: "barbara@acme.io",
    status: "Active",
    role: "Editor",
    joined: "2026-05-14",
  },
  {
    id: "u-08",
    name: "Tim Berners-Lee",
    initials: "TB",
    avatar: "https://i.pravatar.cc/80?img=14",
    email: "tim@acme.io",
    status: "Invited",
    role: "Viewer",
    joined: "2026-05-09",
  },
  {
    id: "u-09",
    name: "Margaret Hamilton",
    initials: "MH",
    avatar: "https://i.pravatar.cc/80?img=48",
    email: "margaret@acme.io",
    status: "Active",
    role: "Editor",
    joined: "2026-05-04",
  },
  {
    id: "u-10",
    name: "Donald Knuth",
    initials: "DK",
    avatar: "https://i.pravatar.cc/80?img=15",
    email: "donald@acme.io",
    status: "Inactive",
    role: "Viewer",
    joined: "2026-04-28",
  },
  {
    id: "u-11",
    name: "Radia Perlman",
    initials: "RP",
    avatar: "https://i.pravatar.cc/80?img=43",
    email: "radia@acme.io",
    status: "Active",
    role: "Admin",
    joined: "2026-04-22",
  },
  {
    id: "u-12",
    name: "Ken Thompson",
    initials: "KT",
    avatar: "https://i.pravatar.cc/80?img=16",
    email: "ken@acme.io",
    status: "Active",
    role: "Editor",
    joined: "2026-04-19",
  },
  {
    id: "u-13",
    name: "Hedy Lamarr",
    initials: "HL",
    avatar: "https://i.pravatar.cc/80?img=41",
    email: "hedy@acme.io",
    status: "Invited",
    role: "Viewer",
    joined: "2026-04-15",
  },
  {
    id: "u-14",
    name: "Dennis Ritchie",
    initials: "DR",
    avatar: "https://i.pravatar.cc/80?img=17",
    email: "dennis@acme.io",
    status: "Active",
    role: "Editor",
    joined: "2026-04-11",
  },
  {
    id: "u-15",
    name: "Shafi Goldwasser",
    initials: "SG",
    avatar: "https://i.pravatar.cc/80?img=40",
    email: "shafi@acme.io",
    status: "Active",
    role: "Viewer",
    joined: "2026-04-07",
  },
  {
    id: "u-16",
    name: "John McCarthy",
    initials: "JM",
    avatar: "https://i.pravatar.cc/80?img=18",
    email: "john@acme.io",
    status: "Inactive",
    role: "Viewer",
    joined: "2026-04-02",
  },
  {
    id: "u-17",
    name: "Frances Allen",
    initials: "FA",
    avatar: "https://i.pravatar.cc/80?img=39",
    email: "frances@acme.io",
    status: "Active",
    role: "Admin",
    joined: "2026-03-29",
  },
  {
    id: "u-18",
    name: "Vint Cerf",
    initials: "VC",
    avatar: "https://i.pravatar.cc/80?img=19",
    email: "vint@acme.io",
    status: "Active",
    role: "Editor",
    joined: "2026-03-24",
  },
  {
    id: "u-19",
    name: "Adele Goldberg",
    initials: "AG",
    avatar: "https://i.pravatar.cc/80?img=38",
    email: "adele@acme.io",
    status: "Invited",
    role: "Viewer",
    joined: "2026-03-20",
  },
  {
    id: "u-20",
    name: "Bjarne Stroustrup",
    initials: "BS",
    avatar: "https://i.pravatar.cc/80?img=20",
    email: "bjarne@acme.io",
    status: "Active",
    role: "Editor",
    joined: "2026-03-16",
  },
]

const userColumns: DataTableColumnDef<User>[] = [
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
        aria-label="Select all users"
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
    header: ({ column }) => <SortableHeader column={column} label="User" />,
    filterFn: (row, _id, value: string) => {
      const q = value.toLowerCase()
      return (
        row.original.name.toLowerCase().includes(q) ||
        row.original.email.toLowerCase().includes(q)
      )
    },
    cell: ({ row }) => {
      const user = row.original
      return (
        <div className="flex min-w-0 items-center gap-3">
          <Avatar size="sm" className="shrink-0 border border-border">
            <AvatarImage
              src={user.avatar}
              alt={user.name}
              className="grayscale"
            />
            <AvatarFallback className="text-xs">{user.initials}</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="truncate text-sm leading-tight font-medium">
              {user.name}
            </p>
            <p className="truncate text-xs text-muted-foreground">
              {user.email}
            </p>
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: "status",
    enableSorting: false,
    header: () => (
      <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        Status
      </span>
    ),
    cell: ({ row }) => (
      <Badge variant={statusVariant[row.original.status]} className="text-xs">
        {row.original.status}
      </Badge>
    ),
  },
  {
    accessorKey: "role",
    header: ({ column }) => <SortableHeader column={column} label="Role" />,
    cell: ({ row }) => (
      <span className={`text-sm ${roleClass[row.original.role]}`}>
        {row.original.role}
      </span>
    ),
  },
  {
    accessorKey: "joined",
    sortFn: "datetime",
    header: ({ column }) => (
      <div className="ml-auto">
        <SortableHeader column={column} label="Joined" />
      </div>
    ),
    cell: ({ row }) => (
      <span className="block text-right text-xs text-muted-foreground tabular-nums">
        {formatDate(row.original.joined)}
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
              <User aria-hidden="true" />
              View Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Pencil aria-hidden="true" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <Trash aria-hidden="true" />
              Remove
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
        description: `Exporting ${ids.length} user${ids.length === 1 ? "" : "s"} to CSV.`,
      }),
  },
  {
    label: "Change role",
    icon: <UserCog className="size-3.5" aria-hidden="true" />,
    onClick: (ids) =>
      toast("Role updated", {
        description: `Changed the role for ${ids.length} user${ids.length === 1 ? "" : "s"}.`,
      }),
  },
  {
    label: "Remove",
    icon: <Trash className="size-3.5" aria-hidden="true" />,
    variant: "destructive",
    onClick: (ids) =>
      toast("Users removed", {
        description: `${ids.length} user${ids.length === 1 ? "" : "s"} removed.`,
      }),
  },
]

export default function Page() {
  return (
    <section className="flex w-full justify-center px-4 py-10 sm:py-16">
      <DataTable
        data={users}
        columns={userColumns}
        title="Team Members"
        subtitle={`${users.length} users across 3 workspaces`}
        searchPlaceholder="Search users..."
        searchColumnId="name"
        columnLabels={{
          name: "User",
          status: "Status",
          role: "Role",
          joined: "Joined",
        }}
        addButton={{
          label: "Invite",
          icon: <Plus className="size-3.5" aria-hidden="true" />,
          onClick: () =>
            toast("Invite sent", {
              description: "Invitation link copied to clipboard.",
            }),
        }}
        bulkActions={bulkActions}
        emptyMessage="No users match your search."
        initialSorting={[{ id: "joined", desc: true }]}
      />
    </section>
  )
}
