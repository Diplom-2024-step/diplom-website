"use client"
import Header from "@/components/shared/Header";
import WorkWithUs from "@/components/shared/WorkWithUs";
import Services from "@/components/shared/Services";
import { Button } from "@nextui-org/button";
import { signIn, signOut } from "next-auth/react";

export default function Home() {
  return (
    <section>
      <Header/>
      <WorkWithUs/>
            <Services />
    </section>
  );
}
