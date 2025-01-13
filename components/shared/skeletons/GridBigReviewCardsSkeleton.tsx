import React from "react";

import BigReviewCardSkeleton from "./BigReviewCardSkeleton";
import ReviewCardCarouselSkeleton from "./ReviewCardCarouselSkeleton";

const GridBigReviewCardsSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Grid Skeleton */}
      <div className="hidden sm:block xl:grid-cols-2 lg:grid-cols-1 md:visible md:grid gap-4 mx-4">
        {[1, 2].map((_, index) => (
          <BigReviewCardSkeleton key={index} />
        ))}
      </div>

      {/* Carousel Skeleton */}
      <div className="block sm:hidden">
        <ReviewCardCarouselSkeleton reviews={[...Array(10)]} />
      </div>

      {/* Pagination Skeleton */}
      <div className="w-full my-10">
        <div className="flex justify-center items-center">
          <div className="inline-flex space-x-2">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div
                key={index}
                className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridBigReviewCardsSkeleton;
