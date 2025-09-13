"use client";

import { useState, useMemo } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { NOTIFICATION_LIST, Notification } from "@data/index";
import { Pin } from "lucide-react";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { useRouter } from "next/navigation";

// Helper function to check if item is new (within 10 days)
const isNewItem = (createdAt: string) => {
  const createdDate = new Date(createdAt);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - createdDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= 10;
};

export const columns: (ColumnDef<Notification> & {
  meta: { className: string };
})[] = [
  {
    accessorKey: "id",
    header: () => "ID",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <span>{row.getValue("id")}</span>
      </div>
    ),
    meta: { className: "w-[8%]" },
  },
  {
    accessorKey: "title",
    header: () => "제목",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <div className="truncate text-ellipsis overflow-hidden flex-1">
          {row.getValue("title")}
        </div>
        {isNewItem(row.original.createdAt) && (
          <Badge variant="secondary" className="text-xs px-1 py-0">
            NEW!
          </Badge>
        )}
        {row.original.isPinned && (
          <Pin
            className="h-3 w-3 text-blue-500 translate-y-0.5 rotate-45"
            fill="currentColor"
          />
        )}
      </div>
    ),
    meta: { className: "w-[72%]" },
  },
  {
    accessorKey: "createdAt",
    header: () => <div className="">작성일</div>,
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("createdAt")}</div>
    ),
    meta: { className: "w-[0%] sm:w-[20%]" },
  },
];

const NoticeTable = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  // Sort data to pin items at the top
  const sortedData = useMemo(() => {
    return [...NOTIFICATION_LIST].sort((a, b) => {
      // First sort by pinned status (pinned items first)
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;

      // Then sort by creation date (newer first)
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  }, []);

  const table = useReactTable({
    data: sortedData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const rowLength = table.getFilteredRowModel().rows.length;

  const router = useRouter();

  return (
    <div className="w-full max-w-[750px]">
      <div className="flex items-center py-4">
        <Input
          placeholder="Search for..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table className="table-fixed w-full">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const widthClass =
                    (
                      header.column.columnDef as ColumnDef<Notification> & {
                        meta: { className: string };
                      }
                    ).meta.className || "";
                  return (
                    <TableHead key={header.id} className={widthClass}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className={`cursor-pointer`}
                  onClick={() => router.push(`/notices/${row.original.id}`)}
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  검색 결과가 없습니다.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {rowLength} 개
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            이전
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            다음
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NoticeTable;
