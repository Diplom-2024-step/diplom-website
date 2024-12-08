"use client";
import HotelCarouselSkeleton from "@/components/shared/skeletons/HotelCarouselSkeleton";
import TourGridSkeleton from "@/components/shared/skeletons/TourGridSkeleton";
import React from "react";

const loading = () => {
  return (
    <>
      <TourGridSkeleton />
    </>
  );
};

export default loading;
