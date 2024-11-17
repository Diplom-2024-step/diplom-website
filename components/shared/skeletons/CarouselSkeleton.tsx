"use client"
import { Skeleton } from '@nextui-org/react';
import React from 'react'
import HotelCardSkeleton from './HotelCardSkeleton';



const CarouselSkeleton = ({ 
  title 
}: {title:string}) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 text-black animate-pulse">
      {/* Title Skeleton */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-6 text-black">{title}</h2>
    </div>

      {/* Cards Container */}
      <div className="relative">
        {/* Navigation Button Skeletons */}
        <div className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-4 z-10">
          <Skeleton className="rounded-full">
            <div className="w-10 h-10" />
          </Skeleton>
        </div>
        <div className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-4 z-10">
          <Skeleton className="rounded-full">
            <div className="w-10 h-10" />
          </Skeleton>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-3 gap-4">
          {[...Array(3)].map((_, index) => (
            <HotelCardSkeleton/>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {[...Array(6)].map((_, index) => (
            <Skeleton key={index} className="rounded-full">
              <div className="w-6 h-1" />
            </Skeleton>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselSkeleton