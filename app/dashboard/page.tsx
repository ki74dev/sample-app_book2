import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { UserRole } from "@prisma/client";
import type { NextPage } from "next";

const Page: NextPage = async () => {
  const session = await auth();

  if (!session) {
    return <div>権限がありません。</div>;
  }

  return (
    <div>
      {session.user.role === UserRole.ADMIN && (
        <p className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-xl font-bold tracking-widest text-transparent">
          You are an admin, welcome!
        </p>
      )}
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/auth/login" });
        }}
      >
        <Button type="submit">ログアウト</Button>
      </form>
    </div>
  );
};

export default Page;
