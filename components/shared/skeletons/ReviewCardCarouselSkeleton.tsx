import React, { useState } from 'react';
import { Card, Image, Skeleton } from "@nextui-org/react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GetReviewDto } from '@/AppDtos/Dto/Models/Reviews/get-review-dto';
import ReviewCardSkeleton from './ReviewCardSkeleton';

const ReviewCardCarouselSkeleton = ({ reviews }: { reviews: GetReviewDto[] }) => {
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

  return (
    <div className="w-full max-w-6xl mx-auto px-4 text-black">
      <h2 className="text-3xl font-bold font-unbounded mt-6">
        Враження відвідувачів
      </h2>

      <div className="relative ">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 33.333}%)`,
            }}
          >
            {[...Array(reviews.length - 2)].map((_, index) => (
              <Card key={index} className="w-1/3 mt-6 mb-6 flex-shrink-0 px-2">
                <ReviewCardSkeleton />
              </Card>
            ))}
          </div>
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 z-10"
          type="button"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 z-10"
          type="button"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="flex justify-center gap-2 mt-4">
          {[...Array(reviews.length - 2)].map((_, index) => (
            <Skeleton
              key={index}
              className={`w-6 h-1 transition-colors ${
                index === currentIndex ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCardCarouselSkeleton;