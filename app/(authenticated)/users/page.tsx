import { UserList } from "@/components/users/user-list";
import { PageRoute } from "@/routes";
import type { NextPage } from "next";
import Link from "next/link";

const Page: NextPage = () => {
  return (
    <div className="flex flex-col">
      一覧表示
      <Link
        className="text-blue-600 underline visited:text-purple-600 hover:text-blue-800"
        href={PageRoute.USERS_CREATE}
      >
        新規登録
      </Link>
      <UserList />
    </div>
  );
};

export default Page;