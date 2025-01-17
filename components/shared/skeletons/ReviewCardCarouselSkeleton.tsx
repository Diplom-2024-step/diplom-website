import React, { useState } from "react";
import { Card, Skeleton } from "@nextui-org/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GetReviewDto } from "@/AppDtos/Dto/Models/Reviews/get-review-dto";
import ReviewCardSkeleton from "./ReviewCardSkeleton";

const ReviewCardCarouselSkeleton = ({
  reviews,
}: {
  reviews: GetReviewDto[];
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleNext = (): void => {
    setCurrentIndex((prev) => (prev + 1) % (reviews.length - 2));
  };

  const handlePrev = (): void => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return reviews.length - 3;
      } else {
        return prev - 1;
      }
    });
  };

  const handleDotClick = (index: number): void => {
    setCurrentIndex(index);
  };

  const handleHover = (index: number): void => {
    setHoveredIndex(index);
  };

  const handleLeave = (): void => {
    setHoveredIndex(null);
  };

  // Calculate items to show based on screen size
  const getItemsToShow = () => {
    // Default to 1 for mobile
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 3; // xl
      if (window.innerWidth >= 768) return 2; // md
      return 1; // mobile
    }
    return 1;
  };

  const itemsToShow = getItemsToShow();
  const translatePercentage = (100 / itemsToShow);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 text-black">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-unbounded mt-4 sm:mt-6">
        Враження відвідувачів
      </h2>
      
      <div className="relative mt-4 sm:mt-6">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * translatePercentage}%)`,
            }}
          >
            {[...Array(reviews.length - 2)].map((_, index) => (
              <Card 
                key={index} 
                className={`
                  w-full 
                  md:w-1/2 
                  xl:w-1/3 
                  mt-4 
                  sm:mt-6 
                  mb-4 
                  sm:mb-6 
                  flex-shrink-0 
                  px-1 
                  sm:px-2
                `}
              >
                <ReviewCardSkeleton />
              </Card>
            ))}
          </div>
        </div>

        {/* Navigation buttons - Hidden on mobile */}
        <button
          aria-label="Previous slide"
          className="hidden md:block absolute left-0 top-1/3 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-white p-1 sm:p-2 rounded-full shadow-lg hover:bg-gray-100 z-10"
          type="button"
          onClick={handlePrev}
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
        <button
          aria-label="Next slide"
          className="hidden md:block absolute right-0 top-1/3 -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-white p-1 sm:p-2 rounded-full shadow-lg hover:bg-gray-100 z-10"
          type="button"
          onClick={handleNext}
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        {/* Pagination dots - Responsive */}
        <div className="flex justify-center gap-1 sm:gap-2 mt-4">
          {[...Array(reviews.length - 2)].map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className="focus:outline-none"
            >
              <Skeleton
                className={`
                  w-4 sm:w-6 
                  h-1 
                  rounded-full 
                  transition-colors
                  ${index === currentIndex ? "bg-black" : "bg-gray-300"}
                `}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCardCarouselSkeleton;