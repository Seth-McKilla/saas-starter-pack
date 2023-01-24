import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";

export default NextAuth({
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
    signIn: "/sign-in", // Uses the sign-in page we created in the last post
    signOut: "/", // Redirects to the home page after sign out
  },
  session: {
    strategy: "jwt",
  },
});
