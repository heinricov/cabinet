"use client"

import {
  DataTable,
  formatDate,
  SortableHeader,
  type DataTableColumnDef,
  type BulkAction,
  toast,
} from "@workspace/ui/components/data-table"
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
import { Ellipsis, Eye, Pencil, Trash, Plus } from "lucide-react"

type DocumentStatus = "Received" | "Pending" | "Verified"

type DocumentReceipt = {
  id: string
  dokId: string
  tanggal: string
  author: string
  delivery: string
  qty: number
  status: DocumentStatus
  createdAt: string
}

const statusVariant: Record<DocumentStatus, "default" | "secondary" | "outline"> = {
  Received: "default",
  Pending: "secondary",
  Verified: "outline",
}

const documents: DocumentReceipt[] = [
  { id: "dd-01", dokId: "DO-DUMMY-010826", tanggal: "2026-08-01", author: "Fajar Nugroho", delivery: "PT Dummy Prima", qty: 100, status: "Received", createdAt: "2026-08-01" },
  { id: "dd-02", dokId: "DO-DUMMY-020826", tanggal: "2026-08-02", author: "Sari Dewi", delivery: "CV Dummy Jaya", qty: 75, status: "Verified", createdAt: "2026-08-02" },
  { id: "dd-03", dokId: "DO-DUMMY-030826", tanggal: "2026-08-03", author: "Rahmat Hidayat", delivery: "PT Dummy Abadi", qty: 200, status: "Received", createdAt: "2026-08-03" },
  { id: "dd-04", dokId: "DO-DUMMY-040826", tanggal: "2026-08-04", author: "Fajar Nugroho", delivery: "PT Dummy Makmur", qty: 55, status: "Pending", createdAt: "2026-08-04" },
  { id: "dd-05", dokId: "DO-DUMMY-050826", tanggal: "2026-08-05", author: "Sari Dewi", delivery: "CV Dummy Sentosa", qty: 130, status: "Received", createdAt: "2026-08-05" },
  { id: "dd-06", dokId: "DO-DUMMY-060826", tanggal: "2026-08-06", author: "Rahmat Hidayat", delivery: "PT Dummy Prima", qty: 90, status: "Verified", createdAt: "2026-08-06" },
  { id: "dd-07", dokId: "DO-DUMMY-070826", tanggal: "2026-08-07", author: "Fajar Nugroho", delivery: "PT Dummy Sejahtera", qty: 165, status: "Received", createdAt: "2026-08-07" },
  { id: "dd-08", dokId: "DO-DUMMY-080826", tanggal: "2026-08-08", author: "Sari Dewi", delivery: "CV Dummy Jaya", qty: 45, status: "Pending", createdAt: "2026-08-08" },
  { id: "dd-09", dokId: "DO-DUMMY-090826", tanggal: "2026-08-09", author: "Rahmat Hidayat", delivery: "PT Dummy Abadi", qty: 180, status: "Received", createdAt: "2026-08-09" },
  { id: "dd-10", dokId: "DO-DUMMY-100826", tanggal: "2026-08-10", author: "Fajar Nugroho", delivery: "PT Dummy Makmur", qty: 115, status: "Verified", createdAt: "2026-08-10" },
]

const documentColumns: DataTableColumnDef<DocumentReceipt>[] = [
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
        aria-label="Select all documents"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(checked) => row.toggleSelected(checked === true)}
        aria-label={`Select ${row.original.dokId}`}
      />
    ),
  },
  {
    accessorKey: "dokId",
    header: ({ column }) => (
      <SortableHeader column={column} label="Dok ID" />
    ),
    filterFn: (row, _id, value: string) => {
      const q = value.toLowerCase()
      return (
        row.original.dokId.toLowerCase().includes(q) ||
        row.original.delivery.toLowerCase().includes(q) ||
        row.original.author.toLowerCase().includes(q)
      )
    },
    cell: ({ row }) => (
      <span className="text-sm font-medium">{row.original.dokId}</span>
    ),
  },
  {
    accessorKey: "tanggal",
    sortFn: "datetime",
    header: ({ column }) => (
      <SortableHeader column={column} label="Tanggal" />
    ),
    cell: ({ row }) => (
      <span className="text-sm tabular-nums">{formatDate(row.original.tanggal)}</span>
    ),
  },
  {
    accessorKey: "author",
    header: ({ column }) => (
      <SortableHeader column={column} label="Author" />
    ),
    cell: ({ row }) => (
      <span className="text-sm">{row.original.author}</span>
    ),
  },
  {
    accessorKey: "delivery",
    header: ({ column }) => (
      <SortableHeader column={column} label="Delivery" />
    ),
    cell: ({ row }) => (
      <span className="text-sm">{row.original.delivery}</span>
    ),
  },
  {
    accessorKey: "qty",
    header: ({ column }) => (
      <div className="ml-auto">
        <SortableHeader column={column} label="Qty" />
      </div>
    ),
    cell: ({ row }) => (
      <span className="block text-right text-sm tabular-nums">{row.original.qty.toLocaleString()}</span>
    ),
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
                aria-label={`Actions for ${row.original.dokId}`}
              >
                <Ellipsis className="size-4" aria-hidden="true" />
              </Button>
            }
          />
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem>
              <Eye aria-hidden="true" />
              View
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Pencil aria-hidden="true" />
              Edit
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
        description: `Exporting ${ids.length} document${ids.length === 1 ? "" : "s"} to CSV.`,
      }),
  },
  {
    label: "Delete",
    icon: <Trash className="size-3.5" aria-hidden="true" />,
    variant: "destructive",
    onClick: (ids) =>
      toast("Documents deleted", {
        description: `${ids.length} document${ids.length === 1 ? "" : "s"} deleted.`,
      }),
  },
]

export default function Page() {
  return (
    <section className="flex w-full justify-center px-4 py-10 sm:py-16">
      <DataTable
        data={documents}
        columns={documentColumns}
        title="Document Receipt (DO Dummy)"
        subtitle={`${documents.length} documents`}
        searchPlaceholder="Search documents..."
        searchColumnId="dokId"
        columnLabels={{ dokId: "Dok ID", tanggal: "Tanggal", author: "Author", delivery: "Delivery", qty: "Qty", status: "Status" }}
        addButton={{
          label: "Add Document",
          icon: <Plus className="size-3.5" aria-hidden="true" />,
          onClick: () => toast("Document added", { description: "New document has been created." }),
        }}
        bulkActions={bulkActions}
        emptyMessage="No documents match your search."
        initialSorting={[{ id: "tanggal", desc: true }]}
      />
    </section>
  )
}
