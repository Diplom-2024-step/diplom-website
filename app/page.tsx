"use client"
import { Button } from "@nextui-org/button";
import { signIn, signOut } from "next-auth/react";

export default function Home() {
  return (
    <section>
      <Button
      className="light:text-white dark:text-white
      rounded-full"

      onClick={() => signOut()}
      >

        signOut
      </Button >
      <p>Home</p>
        <Button onClick={() => signIn()}
        >

          signIn
        </Button>
    </section>
  );
}
