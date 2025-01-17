import React from "react";
import { Card, Skeleton } from "@nextui-org/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HotelCarouselSkeleton = () => {
  // Create an array of 3 items to show in the skeleton carousel
  const skeletonItems = Array(3).fill(null);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 text-black">
      {/* Title skeleton */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-unbounded mt-4 md:mt-6">
        Рекомендуємо відвідати
      </h2>

      <div className="relative mt-6">
        <div className="overflow-hidden">
          {/* Responsive container */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-4">
            {skeletonItems.map((_, index) => (
              <div
                key={index}
                className={`
                  w-full 
                  sm:w-1/2 
                  md:w-1/3 
                  flex-shrink-0 
                  px-0 
                  sm:px-2
                  ${index > 0 ? "hidden sm:block" : ""}
                  ${index > 1 ? "sm:hidden md:block" : ""}
                `}
              >
                <Card className="relative overflow-hidden" shadow="none">
                  {/* Image skeleton */}
                  <Skeleton className="rounded-none">
                    <div className="h-48 w-full" />
                  </Skeleton>

                  {/* Card content */}
                  <div className="p-3 sm:p-4 bg-white">
                    {/* Hotel name skeleton */}
                    <Skeleton className="rounded-lg mb-3 sm:mb-4">
                      <div className="h-5 sm:h-6 w-3/4" />
                    </Skeleton>

                    {/* Location skeleton */}
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                      <Skeleton className="rounded-full">
                        <div className="w-4 h-4" />
                      </Skeleton>
                      <Skeleton className="rounded-lg">
                        <div className="h-4 w-32 sm:w-40" />
                      </Skeleton>
                    </div>

                    {/* Stars skeleton */}
                    <div className="flex items-center gap-1 mb-3 sm:mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Skeleton key={i} className="rounded-full">
                          <div className="w-3 sm:w-4 h-3 sm:h-4" />
                        </Skeleton>
                      ))}
                      <Skeleton className="rounded-lg ml-2">
                        <div className="w-10 sm:w-12 h-3 sm:h-4" />
                      </Skeleton>
                    </div>
                  </div>

                  {/* Card footer */}
                  <div className="flex items-center justify-between p-3 sm:p-4 border-t bg-white">
                    <Skeleton className="rounded-lg">
                      <div className="h-5 sm:h-6 w-20 sm:w-24" />
                    </Skeleton>
                    <Skeleton className="rounded-lg">
                      <div className="w-4 sm:w-5 h-4 sm:h-5" />
                    </Skeleton>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons - Hidden on mobile */}
        <button
          disabled
          className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg z-10"
        >
          <ChevronLeft className="w-6 h-6 text-gray-300" />
        </button>
        <button
          disabled
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg z-10"
        >
          <ChevronRight className="w-6 h-6 text-gray-300" />
        </button>

        {/* Dots skeleton - Adjusted for responsive design */}
        <div className="flex justify-center gap-2 mt-4">
          {skeletonItems.map((_, index) => (
            <div
              key={index}
              className={`
                w-2 h-2 rounded-full bg-gray-300
                ${index > 0 ? "hidden sm:block" : ""}
                ${index > 1 ? "sm:hidden md:block" : ""}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelCarouselSkeleton;
