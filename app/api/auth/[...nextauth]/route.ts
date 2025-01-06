import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { DecodedToken } from "@/types/DecodedToken";
import { decodeJwtToken, getToken } from "@/lib/jwtTokenUtils";
import { use } from "react";

const handler = NextAuth({
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",

      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "gmail@gmail.com"
        },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials, req) {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password
          })
        });

        if (res.ok) {
          // Check if accessToken exists in the response
          return await res.json(); // Return the accessToken
        } else {
          throw new Error(res.bodyUsed ? await res.text() : res.statusText);
        }
      }
    })
  ],
  pages: {
    signIn: "/auth/login/",
    newUser: "/auth/registrate/",
    verifyRequest: "/auth/login/"
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {

      return { ...token, ...user, ...session };
    },

    async session({ session, token }) {
       
      const user = token as any as { accessToken: string } & DecodedToken;


      // session.user.favoriteHotels = user.favoriteHotelsIds.split(',');
      // session.user.accessToken =  user.accessToken;
      // session.user.email= user.email;
      // session.user.username = user.unique_name;

      user.accessToken = getToken(user.accessToken)!;

      session.user.accessToken = user.accessToken;
      session.user.role = user.role;
      if (session.expires === undefined){
          const exp = new Date(new Date().getTime() + 12*60*60*1000).toISOString(); 
          session.expires = exp;
      }
      if (session.user.favoriteHotels === undefined){
          session.user.favoriteHotels = user.favoriteHotelsIds.split(',');
      }

      if (session.user.favoriteTours === undefined){
          session.user.favoriteTours = user.favoriteToursIds.split(',');
      }
      
      session.user.email = user.email;
      session.user.id = user.id;
      session.decodeToken = user;
      session.user.iconNumber = user.iconNumber;


      return session;
    }
  }
});

export { handler as GET, handler as POST };