"use client";

import { fetcher } from "@/api";
import { db } from "@/lib/db";
import { ApiRoute } from "@/routes";
import { FetchError } from "@/types/error";
import useSWR from "swr";
import { DataTable } from "@/components/data-tables/data-table";
import { userColumns } from "@/components/users/user-column";
import { userListFilterFn } from "@/components/users/user-list-filter";

export const UserList = () => {
  const {
    data: users,
    error,
    isLoading,
  } = useSWR<(typeof db.user.fields)[], FetchError>(ApiRoute.USERS, fetcher);

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
    <div className="container mx-auto py-10">
      <DataTable
        columns={userColumns}
        data={users}
        filter={{
          filterPlaceholder: "名前またはメールアドレスをフィルタリング",
          globalFilterFunction: userListFilterFn,
        }}
      />
    </div>
  );
};