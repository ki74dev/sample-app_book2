// export { auth as middleware } from "@/auth";

import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { PageRoute } from "@/routes";
import { CustomHeaders } from "@/constants/api-constants";
import { NextResponse } from "next/server";

export const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  req.headers.set(CustomHeaders.PATH_NAME, req.nextUrl.pathname);

  if (!req.auth && req.nextUrl.pathname !== PageRoute.LOGIN) {
    const newUrl = new URL(PageRoute.LOGIN, req.nextUrl.origin);
    return NextResponse.redirect(newUrl, { headers: req.headers });
  }

  if (req.nextUrl.pathname !== PageRoute.LOGIN) {
    return NextResponse.rewrite(req.nextUrl, { headers: req.headers });
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
