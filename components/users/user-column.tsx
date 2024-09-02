import { db } from "@/lib/db";
import { formatDate, formatDateTime } from "@/lib/date-utils";
import { ColumnDef } from "@tanstack/react-table";
import { PageRoute } from "@/routes";
import { RouterButton } from "@/components/router-button";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/data-tables/ui/data-table-column-header";

export const userColumns: ColumnDef<typeof db.user.fields>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    meta: { name: "名前" },
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={column.columnDef.meta?.name || column.id}
      />
    ),
  },
  {
    meta: { name: "メールアドレス" },
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={column.columnDef.meta?.name || column.id}
      />
    ),
  },
  {
    meta: { name: "登録日" },
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="justify-center"
        column={column}
        title={column.columnDef.meta?.name || column.id}
      />
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      const formatted = formatDate(date);

      return <div className="text-center font-medium">{formatted}</div>;
    },
  },
  {
    meta: { name: "最終更新日時" },
    accessorKey: "updatedAt",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="justify-center"
        column={column}
        title={column.columnDef.meta?.name || column.id}
      />
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue("updatedAt"));
      const formatted = formatDateTime(date);

      return <div className="text-center font-medium">{formatted}</div>;
    },
  },
  {
    meta: { name: "権限" },
    accessorKey: "role",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="justify-center"
        column={column}
        title={column.columnDef.meta?.name || column.id}
      />
    ),
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("role")}</div>;
    },
  },
  {
    meta: { name: "詳細/更新" },
    id: "actions",
    cell: ({ row, column }) => {
      const id = row.original.id;
      return (
        <div className="text-center">
          <RouterButton
            size="sm"
            href={PageRoute.USERS_DETAIL.replace("[id]", `${id}`)}
          >
            {column.columnDef.meta?.name || column.id}
          </RouterButton>
        </div>
      );
    },
    enableHiding: false,
  },
];