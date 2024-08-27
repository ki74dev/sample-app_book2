// export { auth as middleware } from "@/auth";

import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { PageRoute } from "@/routes";

export const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  if (!req.auth && req.nextUrl.pathname !== PageRoute.LOGIN) {
    const newUrl = new URL(PageRoute.LOGIN, req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
