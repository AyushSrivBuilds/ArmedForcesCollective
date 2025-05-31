# Login Page & NextAuth.js Integration Plan

**Project:** Armed Forces Collective Web Application
**Date:** 2023-10-27 (Placeholder, will be current date)
**Author:** Roo (AI Assistant)

## 1. Overview

This document outlines the plan to implement a login page and integrate authentication using NextAuth.js into the existing Next.js application. The goal is to provide both traditional email/password login and Google SSO, maintaining design consistency with the current application.

**Key Requirements:**
*   **Authentication Library:** NextAuth.js
*   **Login Methods:**
    *   Email/Password (mocked user data for initial development).
    *   Google SSO.
*   **Login Page Features:**
    *   Links for "Forgot Password" (to `/auth/forgot-password`).
    *   Links for "Sign Up" (to `/auth/signup`).
*   **Post-Login Redirect:** `/dashboard`.
*   **Design:** Consistent with the existing application, utilizing Shadcn UI components.

## 2. Development Phases

### Phase 1: Core NextAuth.js Setup
*   **Goal:** Initialize NextAuth.js in the project.
*   **Tasks:**
    1.  **Install `next-auth`:**
        ```bash
        npm install next-auth
        # or
        pnpm add next-auth
        # or
        yarn add next-auth
        ```
    2.  **Create API Route (`app/api/auth/[...nextauth]/route.ts`):**
        *   This file will handle all authentication requests.
        *   Initial setup will include:
            *   Importing `NextAuth` and necessary providers.
            *   Defining a `NEXTAUTH_SECRET` environment variable (generate a strong secret, e.g., `openssl rand -base64 32`). Add this to a `.env.local` file.
            *   Basic NextAuth options, including session strategy (JWT is common).
    3.  **Create AuthProvider Component (`components/auth/auth-provider.tsx`):**
        *   A client component that wraps the application with `<SessionProvider>` from `next-auth/react`. This makes the session available throughout the app.
    4.  **Update Root Layout (`app/layout.tsx`):**
        *   Import and use the `AuthProvider` to wrap the main `{children}`.

### Phase 2: Credentials (Email/Password) Authentication
*   **Goal:** Allow users to sign in with their email and password.
*   **Tasks:**
    1.  **Configure `CredentialsProvider`:**
        *   In `app/api/auth/[...nextauth]/route.ts`, add `CredentialsProvider` to the `providers` array.
        *   Implement the `authorize` async function within `CredentialsProvider`. This function will:
            *   Receive `credentials` (email, password) from the login form.
            *   Validate these credentials using **mocked user data** for initial development.
            *   Return the user object if authentication is successful, or `null` (or throw an error) otherwise.
    2.  **Mock User Data:** Define a simple array of user objects within the `authorize` function or a separate utility file for now.

### Phase 3: Google OAuth Integration
*   **Goal:** Allow users to sign in using their Google accounts.
*   **Tasks:**
    1.  **Google Cloud Platform (GCP) Setup:**
        *   Go to the [Google Cloud Console](https://console.cloud.google.com/).
        *   Create a new project or use an existing one.
        *   Navigate to "APIs & Services" > "OAuth consent screen". Configure it (User Type: External, App information).
        *   Navigate to "APIs & Services" > "Credentials".
        *   Click "+ CREATE CREDENTIALS" > "OAuth client ID".
        *   Application type: "Web application".
        *   Authorized JavaScript origins: Add your development URL (e.g., `http://localhost:3000`).
        *   Authorized redirect URIs: Add `http://localhost:3000/api/auth/callback/google`.
        *   Save the "Client ID" and "Client secret".
    2.  **Environment Variables:**
        *   Add the following to your `.env.local` file:
            ```
            GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
            GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET
            NEXTAUTH_URL=http://localhost:3000 # Important for NextAuth
            NEXTAUTH_SECRET=YOUR_GENERATED_SECRET # From Phase 1
            ```
    3.  **Configure `GoogleProvider`:**
        *   In `app/api/auth/[...nextauth]/route.ts`, add `GoogleProvider` to the `providers` array.
        *   Import it: `import GoogleProvider from "next-auth/providers/google";`
        *   Configure it with `clientId: process.env.GOOGLE_CLIENT_ID` and `clientSecret: process.env.GOOGLE_CLIENT_SECRET`.

### Phase 4: Login Page UI (`app/auth/login/page.tsx`)
*   **Goal:** Create a visually consistent and functional login page.
*   **Tasks:**
    1.  **Create Page File:** `app/auth/login/page.tsx` (using a subfolder `auth` for auth-related pages is good practice).
    2.  **Page Structure & Styling:**
        *   The page should be a client component (`"use client";`).
        *   Center the login form on the page. A `Card` component from Shadcn UI would be appropriate for the form container.
        *   Include a title like "Sign In" or "Welcome Back" using `CardTitle`.
        *   Use `flex` and `justify-center items-center min-h-screen` on a wrapper div to center the card.
    3.  **Email/Password Form:**
        *   Use Shadcn UI components:
            *   `CardContent` to wrap form elements.
            *   `Label` for "Email" and "Password".
            *   `Input` type `email` for email, type `password` for password.
            *   `Button` (default variant) for "Sign In with Email".
        *   **State Management:** Use `useState` for email, password, loading state, and error messages.
        *   **Submission Logic:**
            *   On form submit, call `signIn('credentials', { redirect: false, email, password, callbackUrl: '/dashboard' })`.
            *   `redirect: false` allows handling the response manually to show errors.
            *   If successful (`response.ok`), redirect using `router.push('/dashboard')`.
            *   If error (`response.error`), display the error message.
    4.  **Google SSO Button:**
        *   Below the email/password form, or alongside, add a "Sign in with Google" `Button`.
        *   Style it distinctively (e.g., `variant="outline"` with a Google icon).
        *   On click, call `signIn('google', { callbackUrl: '/dashboard' })`.
    5.  **Separator:**
        *   Visually separate the email/password form from the Google SSO option (e.g., an "OR" text with horizontal lines).
    6.  **Links:**
        *   Include "Forgot Password?" link to `/auth/forgot-password`.
        *   Include "Don't have an account? Sign Up" link to `/auth/signup`.
    7.  **Responsiveness:** Ensure the form looks good on all screen sizes.

### Phase 5: Navbar Integration
*   **Goal:** Update the existing `Navbar` to reflect authentication status.
*   **Tasks:**
    1.  **Use `useSession` Hook:**
        *   In `components/layout/Navbar.tsx`, import `useSession` from `next-auth/react`.
        *   Get `data: session, status` from `useSession()`.
    2.  **Conditional Rendering:**
        *   If `status === 'loading'`, show a placeholder or nothing.
        *   If `session` (user is authenticated):
            *   Replace the "Sign In" button with:
                *   User's name or email (e.g., `session.user.name || session.user.email`).
                *   A "Sign Out" `Button` (e.g., `variant="ghost"`). On click, call `signOut({ callbackUrl: '/' })`.
                *   Optionally, a link to a profile page (`/dashboard` or `/profile`).
        *   If `!session` (user is not authenticated):
            *   Keep the "Sign In" button, but change its `onClick` handler to navigate to `/auth/login` (or use `Link` component).
    3.  **Mobile Menu:** Ensure the same logic applies to the mobile navigation menu.

### Phase 6: Protected Routes (Optional but Recommended)
*   **Goal:** Restrict access to certain pages (e.g., `/dashboard`) to authenticated users only.
*   **Tasks:**
    1.  **Using Middleware (`middleware.ts`):**
        *   Create `middleware.ts` in the root of your project (or `src` if you have one).
        *   Export `default` from `next-auth/middleware`.
        *   Define a `config` object to specify which paths the middleware should apply to (e.g., `matcher: ['/dashboard/:path*']`).
        *   This will automatically redirect unauthenticated users to the login page defined in NextAuth.js config (which defaults to `/api/auth/signin` but can be customized in NextAuth options to point to `/auth/login`).
    2.  **Client-Side Protection (Alternative/Complementary):**
        *   In components for protected pages, use `useSession({ required: true, onUnauthenticated() { router.push('/auth/login') } })`.

## 3. User Flow Diagram (Mermaid)

```mermaid
graph TD
    subgraph User Interaction
        A[User visits site] --> Nav{Navbar};
        Nav -- Not Authenticated --> B[Sign In Button];
        B -- Click --> LoginPage[Show /auth/login page];
        LoginPage --> EmailForm[Email/Password Form];
        EmailForm -- Enter Credentials & Submit --> CallSignInCredentials[Client calls signIn('credentials')];
        LoginPage --> OrDivider[OR];
        OrDivider --> GoogleButton[Google Sign-In Button];
        GoogleButton -- Click --> CallSignInGoogle[Client calls signIn('google')];
        LoginPage --> ForgotPasswordLink[Forgot Password? Link];
        ForgotPasswordLink -- Click --> NavigateToForgotPassword[/auth/forgot-password];
        LoginPage --> SignUpLink[Sign Up Link];
        SignUpLink -- Click --> NavigateToSignUp[/auth/signup];
    end

    subgraph NextAuth Backend (app/api/auth/[...nextauth]/route.ts)
        CallSignInCredentials --> HandleCredentials[CredentialsProvider: authorize()];
        HandleCredentials -- Valid --> AuthSuccess[Authentication Success];
        HandleCredentials -- Invalid --> AuthFail[Authentication Fail];
        CallSignInGoogle --> HandleGoogle[GoogleProvider];
        HandleGoogle -- Google OAuth Flow --> AuthSuccess;
    end

    subgraph Post-Authentication
        AuthSuccess --> CreateSession[Session Created/Updated];
        CreateSession --> RedirectToDashboard[Redirect to /dashboard];
        AuthFail --> ShowError[Display error on /auth/login page];
        Nav -- Authenticated --> UserInfo[Show User Info & Sign Out Button];
        UserInfo -- Click Sign Out --> CallSignOut[Client calls signOut()];
        CallSignOut --> ClearSession[Session Cleared];
        ClearSession --> RedirectToHome[Redirect to /];
    end

    subgraph Protected Route Access (/dashboard)
        UserAuthed[Authenticated User] -- Visits /dashboard --> CheckAuth{Middleware/useSession};
        CheckAuth -- Authorized --> ShowDashboard[Display /dashboard content];
        UserUnauthed[Unauthenticated User] -- Visits /dashboard --> CheckAuth2{Middleware/useSession};
        CheckAuth2 -- Unauthorized --> RedirectToLoginP[Redirect to /auth/login];
    end
```

## 4. Next Steps
With the plan documented, the next step is to switch to a development mode (e.g., "Code" mode) to begin implementing these phases.