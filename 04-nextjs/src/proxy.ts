import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./lib/jwt";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("auth")?.value;

  // if(!auth && request.nextUrl.pathname.startsWith("/dashboard")){
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  try {
    verifyToken(token);

    return NextResponse.next();
  } catch {
    // incase if jwt is invalid or expired
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
