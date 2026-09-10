"use client"

import * as React from "react"
import {
  sortFn_datetime,
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  flexRender,
  tableFeatures,
  useTable,
  createSortedRowModel,
  rowSortingFeature,
  columnFilteringFeature,
  createFilteredRowModel,
  createPaginatedRowModel,
  rowPaginationFeature,
  rowSelectionFeature,
  columnVisibilityFeature,
  type ColumnVisibilityState,
} from "@tanstack/react-table"
import { toast } from "sonner"

export { toast }

import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import { Input } from "@workspace/ui/components/input"
import { Toaster } from "@workspace/ui/components/sonner"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import {
  ArrowUp,
  ArrowDown,
  ChevronsUpDown,
  Search,
  Columns,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const TABLE_FEATURES = tableFeatures({
  rowSortingFeature,
  columnFilteringFeature,
  rowPaginationFeature,
  rowSelectionFeature,
  columnVisibilityFeature,
  sortedRowModel: createSortedRowModel(),
  filteredRowModel: createFilteredRowModel(),
  paginatedRowModel: createPaginatedRowModel(),
  sortFns: {
    datetime: sortFn_datetime,
  },
})

export type DataTableFeatures = typeof TABLE_FEATURES

export type DataTableColumnDef<TData extends Record<string, any>> = ColumnDef<DataTableFeatures, TData>

export type BulkAction = {
  label: string
  icon?: React.ReactNode
  onClick: (selectedIds: string[]) => void
  variant?: "default" | "outline" | "destructive"
}

export type DataTableAction = {
  label: string
  icon?: React.ReactNode
  onClick: () => void
}

export type DataTableProps<TData extends Record<string, any>> = {
  data: TData[]
  columns: DataTableColumnDef<TData>[]
  title: string
  titleIcon?: React.ReactNode
  subtitle?: string
  searchPlaceholder?: string
  searchColumnId?: string
  columnLabels?: Record<string, string>
  addButton?: DataTableAction
  bulkActions?: BulkAction[]
  emptyMessage?: string
  pageSize?: number
  initialSorting?: SortingState
}

const dateFmt = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "2-digit",
  year: "numeric",
})

export function formatDate(value: string) {
  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? value : dateFmt.format(parsed)
}

export function SortIcon({ sorted }: { sorted: false | "asc" | "desc" }) {
  if (sorted === "asc")
    return <ArrowUp className="size-3.5" aria-hidden="true" />
  if (sorted === "desc")
    return <ArrowDown className="size-3.5" aria-hidden="true" />
  return (
    <ChevronsUpDown
      className="size-3.5 text-muted-foreground/60"
      aria-hidden="true"
    />
  )
}

export function SortableHeader({
  column,
  label,
}: {
  column: { getIsSorted: () => false | "asc" | "desc"; toggleSorting: (desc: boolean) => void }
  label: string
}) {
  return (
    <button
      type="button"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      className="-mx-1 inline-flex items-center gap-1 rounded-md px-1 text-xs font-medium tracking-wide text-muted-foreground uppercase transition-colors hover:text-foreground"
    >
      {label}
      <SortIcon sorted={column.getIsSorted()} />
    </button>
  )
}

export function DataTable<TData extends Record<string, any>>({
  data,
  columns,
  title,
  titleIcon,
  subtitle,
  searchPlaceholder = "Search...",
  searchColumnId,
  columnLabels = {},
  addButton,
  bulkActions = [],
  emptyMessage = "No results found.",
  pageSize = 6,
  initialSorting = [],
}: DataTableProps<TData>) {
  const [sorting, setSorting] = React.useState<SortingState>(initialSorting)
  const [columnFilters, setColumnFilters] =
    React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] =
    React.useState<ColumnVisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [tableData, setTableData] = React.useState(data)

  React.useEffect(() => {
    setTableData(data)
  }, [data])

  const table = useTable({
    features: TABLE_FEATURES,
    data: tableData,
    columns,
    getRowId: (row) => String((row as Record<string, unknown>).id ?? ""),
    state: { sorting, columnFilters, columnVisibility, rowSelection },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    initialState: { pagination: { pageIndex: 0, pageSize } },
  })

  const filterValue = searchColumnId
    ? ((table.getColumn(searchColumnId)?.getFilterValue() as string) ?? "")
    : ""
  const selectedCount = table.getFilteredSelectedRowModel().rows.length
  const totalCount = table.getFilteredRowModel().rows.length
  const pageCount = table.getPageCount()

  function handleBulkAction(action: BulkAction) {
    const selectedIds = table
      .getFilteredSelectedRowModel()
      .rows.map((row) => row.id)
    action.onClick(selectedIds)
    table.resetRowSelection()
  }

  return (
    <div className="flex w-full flex-col">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-3">
          {titleIcon && (
            <div className="flex size-9 items-center justify-center rounded-md border border-border bg-card text-muted-foreground">
              {titleIcon}
            </div>
          )}
          <div>
            <h1 className="font-heading text-lg leading-tight font-semibold tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {searchColumnId && (
            <div className="relative">
              <Search
                className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                type="search"
                value={filterValue}
                onChange={(event) =>
                  table
                    .getColumn(searchColumnId)
                    ?.setFilterValue(event.target.value)
                }
                placeholder={searchPlaceholder}
                className="h-7 w-48 pl-8 text-sm"
                aria-label={searchPlaceholder}
              />
            </div>
          )}
          {table.getAllColumns().some((col) => col.getCanHide()) && (
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button
                    variant="outline"
                    size="sm"
                    aria-label="Toggle columns"
                  >
                    <Columns className="size-3.5" aria-hidden="true" />
                    View
                  </Button>
                }
              />
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Toggle Columns</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {table
                    .getAllColumns()
                    .filter((column) => column.getCanHide())
                    .map((column) => (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        checked={column.getIsVisible()}
                        onCheckedChange={(checked) =>
                          column.toggleVisibility(checked === true)
                        }
                        closeOnClick={false}
                      >
                        {columnLabels[column.id] ?? column.id}
                      </DropdownMenuCheckboxItem>
                    ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          {addButton && (
            <Button size="sm" onClick={addButton.onClick}>
              {addButton.icon && (
                <span className="mr-1">{addButton.icon}</span>
              )}
              {addButton.label}
            </Button>
          )}
        </div>
      </div>

      {selectedCount > 0 && bulkActions.length > 0 && (
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-muted/40 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-foreground tabular-nums">
              {selectedCount} Selected
            </span>
            <Button
              variant="ghost"
              size="xs"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => table.resetRowSelection()}
            >
              Clear
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {bulkActions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant ?? "outline"}
                size="sm"
                onClick={() => handleBulkAction(action)}
              >
                {action.icon && <span className="mr-1">{action.icon}</span>}
                {action.label}
              </Button>
            ))}
          </div>
        </div>
      )}

      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  key={headerGroup.id}
                  className="border-b border-border bg-muted/40 hover:bg-muted/40"
                >
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className={cn(
                        "h-9",
                        header.column.id === "select" && "w-10 pl-4",
                        header.column.id === "actions" && "w-10 pr-4"
                      )}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() ? "selected" : undefined}
                    className="border-b border-border transition-colors duration-100 last:border-b-0 hover:bg-muted/30"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className={cn(
                          "py-3",
                          cell.column.id === "select" && "pl-4",
                          cell.column.id === "actions" && "pr-4"
                        )}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow className="hover:bg-transparent">
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center text-sm text-muted-foreground"
                  >
                    {emptyMessage}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-border bg-muted/20 px-4 py-2.5">
          <p className="text-xs text-muted-foreground">
            <span className="font-medium text-foreground">{totalCount}</span>{" "}
            {totalCount === 1 ? "Result" : "Results"}
          </p>
          <div className="flex items-center gap-1.5">
            <Button
              variant="outline"
              size="icon"
              className="size-7"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              aria-label="Previous page"
            >
              <ChevronLeft className="size-3.5" aria-hidden="true" />
            </Button>
            <span className="px-1 text-xs text-muted-foreground tabular-nums">
              Page {table.state.pagination.pageIndex + 1} of{" "}
              {Math.max(pageCount, 1)}
            </span>
            <Button
              variant="outline"
              size="icon"
              className="size-7"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              aria-label="Next page"
            >
              <ChevronRight className="size-3.5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  )
}
