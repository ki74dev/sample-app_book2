"use client";

import { fetcher } from "@/api";
import { db } from "@/lib/db";
import { ApiRoute, PageRoute } from "@/routes";
import { FetchError } from "@/types/error";
import useSWR from "swr";
import { DataTable } from "@/components/data-tables/data-table";
import { userColumns } from "@/components/users/user-column";
import { userListFilterFn } from "@/components/users/user-list-filter";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const UserList = () => {
  const router = useRouter();
  const [selectedRows, setSelectedRows] = useState<(typeof db.user.fields)[]>(
    [],
  );
  const {
    data: users,
    error,
    isLoading,
  } = useSWR<(typeof db.user.fields)[], FetchError>(ApiRoute.USERS, fetcher, {
    revalidateOnFocus: false,
  });

  const handleRowSelectionChange = (
    selectedData: (typeof db.user.fields)[],
  ) => {
    setSelectedRows(selectedData);
  };

  if (error)
    return (
      <div>
        failed to load
        <h4 className="text-xl font-semibold">{error?.message}</h4>
        <pre className="rounded-md bg-gray-100 p-4 text-sm">
          {JSON.stringify(error, null, 2)}
        </pre>
      </div>
    );
  if (isLoading) return <div>loading...</div>;
  if (!users) return <div>no data.</div>;

  // データをレンダリングする
  return (
    <div className="container mx-auto">
      <div className="grid gap-4 py-2 md:grid-cols-4 lg:grid-cols-6">
        <Button
          type="button"
          size="sm"
          className="w-full"
          onClick={() => router.push(PageRoute.USERS_CREATE)}
        >
          新規登録
        </Button>
        <Button
          variant="destructive"
          type="button"
          size="sm"
          className="w-full md:col-start-4 lg:col-start-6"
          disabled={selectedRows.length === 0}
          onClick={() => console.log(selectedRows)}
        >
          選択したものを一括削除
        </Button>
      </div>
      <DataTable
        columns={userColumns}
        data={users}
        onRowSelectionChange={handleRowSelectionChange}
        filter={{
          filterPlaceholder: "名前またはメールアドレスをフィルタリング",
          globalFilterFunction: userListFilterFn,
        }}
      />
    </div>
  );
};
