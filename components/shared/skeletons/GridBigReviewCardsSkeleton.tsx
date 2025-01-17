import React from "react";

import BigReviewCardSkeleton from "./BigReviewCardSkeleton";
import ReviewCardCarouselSkeleton from "./ReviewCardCarouselSkeleton";

const GridBigReviewCardsSkeleton = () => {
  return (
    <div className="animate-pulse w-full max-w-7xl mx-auto">
      {/* Grid Skeleton - Responsive layout */}
      <div className="hidden sm:grid md:grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4 px-4 sm:px-6 lg:px-8">
        {[1, 2].map((_, index) => (
          <BigReviewCardSkeleton key={index} />
        ))}
      </div>

      {/* Carousel Skeleton - Mobile only */}
      <div className="block sm:hidden px-4">
        <ReviewCardCarouselSkeleton reviews={[...Array(10)]} />
      </div>

      {/* Pagination Skeleton - Responsive sizing */}
      <div className="w-full my-6 sm:my-8 lg:my-10">
        <div className="flex justify-center items-center">
          <div className="inline-flex gap-1 sm:gap-2">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div
                key={index}
                className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridBigReviewCardsSkeleton;
