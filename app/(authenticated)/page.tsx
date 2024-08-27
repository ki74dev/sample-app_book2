import { auth } from "@/auth";
import { UserManagementCard } from "@/components/cards/user-management-card";
import type { NextPage } from "next";

const Page: NextPage = async () => {
  const session = await auth();

  if (!session) {
    return <div>権限がありません。</div>;
  }

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        <UserManagementCard />
      </div>
    </div>
  );
};

export default Page;