/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import routes from "./utils/constants/routes";
import STORED_USER_TOKEN_NAMESPACE from "./utils/constants/store";

export function middleware(req: NextRequest) {
  const token = req.cookies.get(STORED_USER_TOKEN_NAMESPACE);
  const isTokenValid = token && token.value !== "undefined";

  if (req.nextUrl.pathname.startsWith(routes.profile.href)) {
    if (isTokenValid) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL(routes.register.href, req.url));
  }

  if ([routes.register.href].includes(req.nextUrl.pathname)) {
    if (isTokenValid) {
      return NextResponse.redirect(new URL(routes.profile.href, req.url));
    }
    return NextResponse.next();
  }
}
