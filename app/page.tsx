"use client";
import Services from "@/components/shared/Services";
import HotOffers from "@/components/shared/HotOffers";
import RatingAndReviews from "@/components/shared/RatingAndReviews";
import PartnerBlocks from "@/components/shared/PartnerBlock";
import Preface from "@/components/shared/Preface";
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
      </Button>
      <p>Home</p>
      <Button onClick={() => signIn()}>signIn</Button>
      <Preface />
      <HotOffers />
      <Services />
      <RatingAndReviews />
      <PartnerBlocks />
    </section>
  );
}
