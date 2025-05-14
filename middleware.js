import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET); // ✅ Must be Uint8Array

export async function middleware(request) {
  const tokenObject = request.cookies.get('auth_token');
  const token = tokenObject?.value;

  if (!token || typeof token !== 'string') {
    console.log("Token is missing or not a valid string.");
    return NextResponse.redirect(new URL('/login', request.url)); 
  }

  try {
    // ✅ jose requires Uint8Array secret
    const { payload } = await jwtVerify(token, SECRET_KEY);
    console.log("Decoded Token:", payload);

    return NextResponse.next(); // Allow request through
  } catch (error) {
    console.error("Token verification failed:", error.message);
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/add-property/:path*', '/properties-list/:path*'],
};
