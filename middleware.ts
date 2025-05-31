// export { auth as middleware } from "next-auth/middleware" // Basic way if your auth options are simple

// More advanced way to protect routes and customize behavior:
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    // console.log("token: ", req.nextauth.token);

    // Example: Redirect admin users from /dashboard to /admin
    // if (req.nextUrl.pathname.startsWith("/dashboard")
    //     && req.nextauth.token?.role === "admin") {
    //   return NextResponse.rewrite(
    //     new URL("/admin", req.url)
    //   );
    // }

    // Example: Allow access to /me only for users with 'user' role
    // if (req.nextUrl.pathname.startsWith("/me")
    //     && req.nextauth.token?.role !== "user") {
    //   return NextResponse.rewrite(
    //     new URL("/api/auth/error?error=PermissionDenied", req.url)
    //   );
    // }

    // If no specific redirection or rewrite is needed for the authed user,
    // just let them pass through.
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // If there is a token, the user is authorized
    },
    pages: {
      signIn: "/auth/login", // Redirect to custom login page if not authorized
      // error: "/auth/error", // Optional: custom error page
    },
  }
);

// Applies next-auth only to matching routes - can be regex
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: [
    "/dashboard/:path*", // Protect only the dashboard and its sub-paths
    // Add other specific paths you want to protect here, for example:
    // "/profile/:path*",
    // "/settings",
  ],
};