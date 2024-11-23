"use client";
import { Button } from "@nextui-org/button";
import { signIn, signOut } from "next-auth/react";

export default function SignInButton() {
  return <Button color="primary" className="text-white"  onClick={() => signIn()}>УВІЙТИ</Button>;
}
