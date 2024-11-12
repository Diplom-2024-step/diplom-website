"use client";
import Services from "@/components/shared/Services";
import HotOffers from "@/components/shared/HotOffers";
import { Button } from "@nextui-org/button";
import { signIn, signOut } from "next-auth/react";

export default function Home() {
  return (
    <section>
      <HotOffers />
      <Services />
    </section>
  );
}
