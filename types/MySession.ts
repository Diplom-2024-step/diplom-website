import NextAuth from "next-auth";
import { DecodedToken } from "./DecodedToken";


declare module "next-auth" {
  interface Session {
    decodeToken: DecodedToken,
    user: {
      id: string;
      username: string;
      email: string;
      accessToken: string;
      favoriteHotels: string[];
      role: string
    };
    favoriteHotels: string[];

  }
}