# Mock User Registration Functionality Plan

**Project:** Armed Forces Collective Web Application
**Date:** 2023-10-27 (Placeholder, will be current date)
**Author:** Roo (AI Assistant)

## 1. Overview

This document outlines the plan to implement mock user registration (sign-up) functionality. This will allow new users to "register" by adding their details to an in-memory list of mock users, which can then be used for login during the current server session. This serves as a precursor to integrating with a real backend service.

**Key Requirements:**
*   A new sign-up page at `/auth/signup`.
*   A mock API endpoint (`/api/auth/register`) to handle registration requests.
*   Centralized management of mock user data for both login and registration.
*   Client-side form validation and feedback.

## 2. Development Phases

### Phase 1: Centralize Mock User Data
*   **Goal:** Make the `mockUsers` array accessible to both the existing login logic and the new registration logic.
*   **Tasks:**
    1.  **Create `lib/mock-auth-store.ts`:**
        *   Define a `MockUser` interface (e.g., `id`, `name`, `email`, `password`).
        *   Initialize the `mockUsers` array here (move it from `app/api/auth/[...nextauth]/route.ts`). This array will store user objects.
        *   Create an `addMockUser` function:
            *   Takes `name`, `email`, `password` as input.
            *   Checks if an email already exists in the `mockUsers` array.
            *   If the email is unique, generates a new `id` (e.g., incrementing number or UUID), creates a new user object, adds it to the `mockUsers` array, and returns the new user object.
            *   If the email already exists, returns `null` or throws an error.
    2.  **Update `app/api/auth/[...nextauth]/route.ts`:**
        *   Import `mockUsers` (or a function to get them) from `lib/mock-auth-store.ts`.
        *   Use the imported `mockUsers` in the `CredentialsProvider`'s `authorize` function for validating login credentials.

### Phase 2: Create Registration API Endpoint
*   **Goal:** Develop an API endpoint to handle new user registration requests.
*   **Tasks:**
    1.  **Create `app/api/auth/register/route.ts`:**
        *   Implement a `POST` request handler.
        *   Import `addMockUser` from `lib/mock-auth-store.ts`.
        *   In the `POST` handler:
            *   Receive `name`, `email`, and `password` from the request body.
            *   Perform basic server-side validation (e.g., all fields present, email format).
            *   Call `addMockUser` with the provided details.
            *   If `addMockUser` returns `null` (or throws an error indicating email conflict), respond with a `409 Conflict` HTTP status and an appropriate error message (e.g., `{ error: "Email already exists" }`).
            *   If `addMockUser` is successful (returns the new user object), respond with a `201 Created` HTTP status and the new user object (excluding password) or a success message (e.g., `{ message: "User registered successfully" }`).
            *   **Note:** For this mock setup, the password will be stored as plain text in the `mockUsers` array. In a real backend, the password would be securely hashed before storage.

### Phase 3: Create Sign-Up Page UI
*   **Goal:** Build the user interface for the registration form.
*   **Tasks:**
    1.  **Create `app/auth/signup/page.tsx`:**
        *   This will be a client component (`"use client";`).
        *   Structure it similarly to `app/auth/login/page.tsx`, using Shadcn UI components (`Card`, `Input`, `Label`, `Button`).
        *   Include input fields for:
            *   Full Name
            *   Email
            *   Password
            *   Confirm Password
        *   Add a "Sign Up" button.
        *   Include a link: "Already have an account? Sign In" pointing to `/auth/login`.
        *   Provide areas for displaying error messages or success messages.

### Phase 4: Implement Client-Side Registration Logic
*   **Goal:** Connect the sign-up form to the registration API endpoint.
*   **Tasks:**
    1.  **In `app/auth/signup/page.tsx`:**
        *   Manage form state (name, email, password, confirmPassword, loading status, error/success messages) using `useState`.
        *   Implement a form submission handler (`handleSignUp`).
        *   In `handleSignUp`:
            *   Perform client-side validation:
                *   Ensure all required fields are filled.
                *   Validate email format.
                *   Check if "Password" and "Confirm Password" fields match.
            *   If client-side validation fails, display appropriate error messages to the user.
            *   If validation passes, set loading state to `true`.
            *   Make a `POST` request to `/api/auth/register` with the form data (`name`, `email`, `password`).
            *   Handle the API response:
                *   If the request is successful (e.g., HTTP status 201), display a success message (e.g., "Registration successful! Please sign in.") and redirect the user to `/auth/login`.
                *   If the request fails (e.g., HTTP status 409 for email conflict, or 400 for validation error), parse the error message from the API response and display it to the user.
            *   Set loading state to `false`.

## 3. User Flow Diagram (Registration)

```mermaid
graph TD
    subgraph User Interaction (Sign Up)
        SU_Entry[User clicks "Sign Up" link on Login Page or navigates to /auth/signup] --> SU_Page[Show /auth/signup page];
        SU_Page --> SU_Form[User fills Name, Email, Password, Confirm Password];
        SU_Form -- Clicks "Sign Up" Button --> SU_ClientLogic[Client-side validation in app/auth/signup/page.tsx];
    end

    subgraph Client-Side Logic (app/auth/signup/page.tsx)
        SU_ClientLogic -- Valid --> SU_APICall[POST to /api/auth/register with user data];
        SU_ClientLogic -- Invalid --> SU_ShowClientError[Display validation error on Sign Up page];
    end

    subgraph API Endpoint (app/api/auth/register/route.ts)
        SU_APICall --> SU_HandleRequest[POST handler receives data];
        SU_HandleRequest --> SU_ValidateData[Validate input data (name, email, password)];
        SU_ValidateData -- Valid --> SU_CheckExisting[Check if email exists in mockUsers (from lib/mock-auth-store.ts) using addMockUser];
        SU_ValidateData -- Invalid --> SU_ReturnAPIError_Validation[Return 400 Bad Request with error message];
        SU_CheckExisting -- Email Exists (addMockUser returns null/error) --> SU_ReturnAPIError_Conflict[Return 409 Conflict "Email already exists"];
        SU_CheckExisting -- Email New (addMockUser returns user) --> SU_ReturnAPISuccess[Return 201 Created with success message/user data (excluding password)];
    end

    subgraph Post-Registration (Client)
        SU_ReturnAPISuccess -- Response to Client --> SU_HandleSuccess[Display success message on Sign Up page];
        SU_HandleSuccess --> SU_RedirectToLogin[Redirect to /auth/login];
        SU_ReturnAPIError_Conflict -- Response to Client --> SU_ShowAPIError[Display "Email already exists" on Sign Up page];
        SU_ReturnAPIError_Validation -- Response to Client --> SU_ShowAPIError;
    end
```

## 4. Next Steps
With this plan documented, the next step is to begin implementing these phases.