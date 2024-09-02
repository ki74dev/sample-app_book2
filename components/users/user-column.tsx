import { db } from "@/lib/db";
import { formatDate, formatDateTime } from "@/lib/date-utils";
import { ColumnDef } from "@tanstack/react-table";
import { PageRoute } from "@/routes";
import { RouterButton } from "@/components/router-button";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

export const userColumns: ColumnDef<typeof db.user.fields>[] = [
  {
    accessorKey: "name",
    header: "名前",
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          メールアドレス
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: () => <div className="text-center">登録日</div>,
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      const formatted = formatDate(date);

      return <div className="text-center font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "updatedAt",
    header: () => <div className="text-center">最終更新日時</div>,
    cell: ({ row }) => {
      const date = new Date(row.getValue("updatedAt"));
      const formatted = formatDateTime(date);

      return <div className="text-center font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "role",
    header: () => <div className="text-center">権限</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("role")}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original.id;
      return (
        <div className="text-center">
          <RouterButton
            size="sm"
            href={PageRoute.USERS_DETAIL.replace("[id]", `${id}`)}
          >
            詳細/更新
          </RouterButton>
        </div>
      );
    },
  },
];