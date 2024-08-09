import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { db } from "@/lib/db";
import authConfig from "@/auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    jwt({ user, token }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          role: token.role,
        },
      };
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
