import { auth, signOut } from "@/auth";
import { PageRoute } from "@/routes";
import Link from "next/link";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { UserRole } from "@prisma/client";

export const NavHeader = async () => {
  const session = await auth();
  const shortName = session?.user.name?.slice(0, 4);

  return (
    <div className="container flex h-14 max-w-screen-2xl items-center">
      <div className="mr-4 flex">
        <Link
          className="mr-4 flex items-center space-x-2 font-bold lg:mr-6"
          href={PageRoute.HOME}
        >
          SAMPLE
        </Link>
      </div>
      {session && (
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Popover>
            <PopoverTrigger>
              <Avatar>
                <AvatarFallback className="bg-white text-blue-500">
                  {shortName}
                </AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="mr-4 bg-gradient-to-b from-slate-200 to-slate-100">
              {session?.user.role === UserRole.ADMIN && (
                <Badge>{session?.user.role}</Badge>
              )}
              <div className="flex flex-col items-center justify-center gap-2">
                <span className="font-bold">{session?.user.name}</span>
                <Avatar className="h-14 w-14">
                  <AvatarFallback className="bg-white text-blue-500">
                    {shortName}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm">{session?.user.email}</span>
                <div className="mt-8">
                  <form
                    action={async () => {
                      "use server";
                      await signOut({ redirectTo: "/auth/login" });
                    }}
                  >
                    <Button type="submit">ログアウト</Button>
                  </form>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      )}
    </div>
  );
};
