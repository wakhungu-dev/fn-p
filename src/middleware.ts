import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

const secret = process.env.NEXTAUTH_SECRET

// Protected route
const protectedRoutes = ['/admin']

export default async function middleware(req: NextRequest) {
  // Get the current path
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)

  // Get the NextAuth token
  const sessionToken = await getToken({ req, secret })

  // If it's a protected route and there's no token, redirect to login
  if (isProtectedRoute && !sessionToken) {
    return NextResponse.redirect(new URL('/', req.nextUrl))
  }

  // If it's a protected route and the user is authenticated, allow them to proceed
  return NextResponse.next()
}

// The config object defines which routes the middleware will apply to
export const config = {
  matcher: ['/admin'], // Protects only the /admin route
}
