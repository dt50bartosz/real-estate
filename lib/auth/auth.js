import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "../db/clientPromise";
import CredentialsProvider from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [

      CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Your username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const usersCollection = (await clientPromise).db().collection("users");

        // Find user by username
        const user = await usersCollection.findOne({ username: credentials.username });

        console.log(user,"user")

         if (!user) {
        console.log("User not found");
        return null;
        }

       /* const isValid = await verifyPassword(credentials.password, user.passwordHash);
        if (!isValid) {
          throw new Error("Invalid password");
        }*/

          

        // Return user info (without password)
        return { id: user._id.toString(), username: user.username, name: user.name };
      },
    }),

  ],
  session: {
    strategy: "jwt", // or 'database'
  },
  callbacks: {
    async session({ session, token, user }) {
      return session;
    },
    async jwt({ token, user, account }) {
      return token;
    },
  },
});

// Export HTTP handlers for Next.js App Router
export const GET = handlers.GET;
export const POST = handlers.POST;
