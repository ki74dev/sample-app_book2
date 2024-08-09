import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "@/types/login-form";
import { getUserFromDb } from "@/data/user";

export default {
  providers: [
    Credentials({
      authorize: async (credentials) => {
        let user = null;

        const { username, password } =
          await loginSchema.parseAsync(credentials);

        // ユーザー取得
        user = await getUserFromDb(username, password);

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("ユーザー名かパスワードが違います。");
        }

        // return user object with their profile data
        return user;
      },
    }),
  ],
} satisfies NextAuthConfig;
