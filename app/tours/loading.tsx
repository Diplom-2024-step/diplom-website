"use client";
import React from "react";

import TourGridSkeleton from "@/components/shared/skeletons/TourGridSkeleton";

const loading = () => {
  return (
    <>
      <TourGridSkeleton />
    </>
  );
};

export default loading;
