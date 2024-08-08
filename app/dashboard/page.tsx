import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import type { NextPage } from "next";

const Page: NextPage = async () => {
  const session = await auth();

  if (!session) {
    return <div>権限がありません。</div>;
  }

  return (
    <div>
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
