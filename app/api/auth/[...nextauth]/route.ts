import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { findMockUserByEmail } from '@/lib/mock-auth-store'; // Import from centralized store

const authOptions: AuthOptions = { // Removed 'export'
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "email", placeholder: "your@email.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Use the centralized mock user store
        const user = findMockUserByEmail(credentials.email);

        if (user && user.password === credentials.password) { // Comparing plain text passwords for mock ONLY
          // Any object returned will be saved in `user` property of the JWT
          // and `user` property of the `session` object.
          // Ensure to return only necessary, non-sensitive user info.
          return { id: user.id, name: user.name, email: user.email, image: user.image };
        } else {
          console.error("CredentialsProvider: Invalid credentials for email:", credentials.email);
          return null;
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  // When using JWT strategy, a secret is required to sign the tokens.
  // Generate a strong secret: `openssl rand -base64 32`
  // And add it to your .env.local file as NEXTAUTH_SECRET
  secret: process.env.NEXTAUTH_SECRET,

  // Using JWT for session strategy
  session: {
    strategy: 'jwt',
  },

  // You can specify custom pages to override the default NextAuth.js pages
  pages: {
    signIn: '/auth/login', // Our custom login page
    // error: '/auth/error', // Custom error page (optional)
    // signOut: '/auth/signout', // Custom signout page (optional)
  },

  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  callbacks: {
    async jwt({ token, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      if (session.user) {
        (session.user as any).id = token.id;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };