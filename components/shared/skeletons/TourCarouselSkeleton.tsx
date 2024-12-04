import React from "react";
import { Card, Skeleton } from "@nextui-org/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TourCarouselSkeleton = () => {
  // Create an array of 3 items to show in the skeleton carousel
  const skeletonItems = Array(3).fill(null);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 text-black">
      {/* Title skeleton */}
      <h2 className="text-2xl font-bold mt-6">Рекомендуємо відвідати</h2>

      <div className="relative">
        <div className="overflow-hidden">
          <div className="flex">
            {skeletonItems.map((_, index) => (
              <div key={index} className="w-1/3 flex-shrink-0 px-2">
                <Card className="relative overflow-hidden" shadow="none">
                  {/* Image skeleton */}
                  <Skeleton className="rounded-none">
                    <div className="h-48 w-full" />
                  </Skeleton>

                  {/* Card content */}
                  <div className="p-4 bg-white">
                    {/* Hotel name skeleton */}
                    <Skeleton className="rounded-lg mb-4">
                      <div className="h-6 w-3/4" />
                    </Skeleton>

                    {/* Location skeleton */}
                    <div className="flex items-center gap-2 mb-4">
                      <Skeleton className="rounded-full">
                        <div className="w-4 h-4" />
                      </Skeleton>
                      <Skeleton className="rounded-lg">
                        <div className="h-4 w-40" />
                      </Skeleton>
                    </div>

                    {/* Stars skeleton */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Skeleton key={i} className="rounded-full">
                          <div className="w-4 h-4" />
                        </Skeleton>
                      ))}
                      <Skeleton className="rounded-lg ml-2">
                        <div className="w-12 h-4" />
                      </Skeleton>
                    </div>
                  </div>

                  {/* Card footer */}
                  <div className="flex items-center justify-between p-4 border-t bg-white">
                    <Skeleton className="rounded-lg">
                      <div className="h-6 w-24" />
                    </Skeleton>
                    <Skeleton className="rounded-lg">
                      <div className="w-5 h-5" />
                    </Skeleton>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg z-10"
          disabled
        >
          <ChevronLeft className="w-6 h-6 text-gray-300" />
        </button>

        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg z-10"
          disabled
        >
          <ChevronRight className="w-6 h-6 text-gray-300" />
        </button>

        {/* Dots skeleton */}
        <div className="flex justify-center gap-2 mt-4">
          {skeletonItems.map((_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-gray-300" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourCarouselSkeleton;
