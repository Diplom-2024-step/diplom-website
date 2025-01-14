"use client";

import { Skeleton } from "@nextui-org/react";
import React from "react";
import HotelCardSkeleton from "./HotelCardSkeleton";

const CarouselSkeleton = ({ title }: { title: string }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-4 text-black animate-pulse">
      {/* Title Skeleton */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-6 text-black">{title}</h2>
      </div>

      {/* Cards Container */}
      <div className="relative">
        {/* Navigation Button Skeletons - Hidden on mobile */}
        <div className="hidden md:block absolute left-0 top-1/3 -translate-y-1/2 -translate-x-4 z-10">
          <Skeleton className="rounded-full">
            <div className="w-10 h-10" />
          </Skeleton>
        </div>
        <div className="hidden md:block absolute right-0 top-1/3 -translate-y-1/2 translate-x-4 z-10">
          <Skeleton className="rounded-full">
            <div className="w-10 h-10" />
          </Skeleton>
        </div>

        <div className="overflow-hidden">
          {/* Cards Grid - Responsive layout matching SharedCarousel */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Show 1 card on mobile, 2 on tablet, 3 on desktop */}
            <div className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 px-2">
              <HotelCardSkeleton />
            </div>
            <div className="hidden sm:block sm:w-1/2 md:w-1/3 flex-shrink-0 px-2">
              <HotelCardSkeleton />
            </div>
            <div className="hidden md:block md:w-1/3 flex-shrink-0 px-2">
              <HotelCardSkeleton />
            </div>
          </div>
        </div>

        {/* Pagination Dots - Adjusted for mobile */}
        <div className="flex justify-center gap-2 mt-6">
          {[...Array(6)].map((_, index) => (
            <Skeleton 
              key={index} 
              className="rounded-full transition-colors"
            >
              <div className="w-6 h-1" />
            </Skeleton>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselSkeleton;