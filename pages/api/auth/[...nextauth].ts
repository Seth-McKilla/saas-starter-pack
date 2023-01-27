import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import EmailProvider from "next-auth/providers/email";

import clientPromise from "@/lib/mongodb/client";

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: process.env.MONGODB_AUTH_DB_NAME,
  }),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  pages: {
    signIn: "/sign-in",
    signOut: "/",
  },
  session: {
    strategy: "jwt",
  },
});
