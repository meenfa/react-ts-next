import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

export function GET(request: Request) {
    // Bearer token in auth
  const authHeader = request.headers.get("authorization");

  // if not authHeader
  if (!authHeader) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  // if authHeader
  const token = authHeader.split(" ")[1];

  // try catch
  try {
    const user = verifyToken(token);
    return NextResponse.json({ message: "Protected data", user });
  } catch {
    return NextResponse.json({ message: "Invalid Token" }, { status: 401 });
  }
}
