import { GetReviewDto } from '@/AppDtos/Dto/Models/Reviews/get-review-dto';
import React, { useState } from 'react'
import ReviewCard from './ReviewCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ReviewCardCarousel = ({  reviews }: { reviews: GetReviewDto[] }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleNext = (): void => {
    setCurrentIndex((prev) => (prev + 1) % (reviews.length - 3));
  };

  const handlePrev = (): void => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return reviews.length - 4;
      } else {
        return prev-1;
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
              transform: `translateX(-${currentIndex * 25}%)`,
            }}
          >
            {reviews.map((review, index) => (
              <div key={review.id} className="w-1/4 mt-6 mb-6 flex-shrink-0 px-2">
                <ReviewCard review={review}/>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 bg-transparent p-2 rounded-full border-none  z-10"
          type="button"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-12 h-12" />
        </button>

        <button
          onClick={handleNext}
          className="absolute bg-transparent right-0 top-1/2 -translate-y-1/2 translate-x-14  p-2 rounded-full   z-10 border-none"
          type="button"
          aria-label="Next slide"
        >
          <ChevronRight className="w-12 h-12" />
        </button>

        <div className="flex justify-center gap-2 mt-4">
          {[...Array(reviews.length - 3)].map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              className={`w-6 h-1 transition-colors ${
                index === currentIndex ? "bg-black" : "bg-gray-300"
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCardCarousel