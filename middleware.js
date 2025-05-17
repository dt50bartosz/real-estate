import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const SECRET =  process.env.AUTH_SECRET;


export async function middleware(req) {
  // Public paths that don't require auth
  const publicPaths = ["/login", "/api/auth", "/_next", "/favicon.ico"];
  if (publicPaths.some(path => req.nextUrl.pathname.startsWith(path))) {
    return NextResponse.next();
  }

  console.log("NEXTAUTH_SECRET from env:", process.env.AUTH_SECRET);


  // Get JWT token from request
  const token = await getToken({ req, secret: SECRET });

  if (!token) {
    // Redirect to login if not authenticated
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("callbackUrl", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // Authenticated, continue
  return NextResponse.next();
}

// Configure middleware to run on specific paths
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/api/protected/:path*"],
};
