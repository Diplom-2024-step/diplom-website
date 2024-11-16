"use client"
import Block1 from "@/components/shared/Block-1";
import WorkWithUs from "@/components/shared/WorkWithUs";
import { Button } from "@nextui-org/button";
import { signIn, signOut } from "next-auth/react";

export default function Home() {
  return (
    <section>
      <Block1/>
      <WorkWithUs/>
    </section>
  );
}
