"use client";
import Services from "@/components/shared/Services";
import HotOffers from "@/components/shared/HotOffers";
import RatingAndReviews from "@/components/shared/RatingAndReviews";
import PartnerBlocks from "@/components/shared/PartnerBlock";
import Preface from "@/components/shared/Preface";
import Header from "@/components/shared/Header";
import WorkWithUs from "@/components/shared/WorkWithUs";

export default function Home() {
  return (
    <section>
      <Header />
      <Preface />
      <HotOffers />
      <Services />
      <WorkWithUs />
      <RatingAndReviews />
      <PartnerBlocks />
    </section>
  );
}
