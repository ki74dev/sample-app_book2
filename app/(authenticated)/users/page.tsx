import { UserList } from "@/components/users/user-list";
import type { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <div className="flex flex-col">
      <UserList />
    </div>
  );
};

export default Page;