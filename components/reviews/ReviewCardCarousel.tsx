"use client"
import { GetReviewDto } from '@/AppDtos/Dto/Models/Reviews/get-review-dto';
import React, { useEffect, useState } from 'react'
import ReviewCard from './ReviewCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ReviewCardCarousel = ({  reviews }: { reviews: GetReviewDto[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 1280) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(4);
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  const maxIndex = Math.max(0, reviews.length - slidesPerView);

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const handleDotClick = (index:number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 text-black">
      <h2 className="text-3xl font-bold font-unbounded mt-6">
        Враження відвідувачів
      </h2>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / slidesPerView}%)`,
            }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className={`flex-shrink-0 px-2 mt-6 mb-6 transition-all duration-300
                  ${slidesPerView === 1 ? 'w-full' : 
                    slidesPerView === 2 ? 'w-1/2' :
                    slidesPerView === 3 ? 'w-1/3' : 'w-1/4'}`}
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows - now visible on all devices */}
        {reviews.length > slidesPerView && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-transparent p-2 rounded-full border-none z-10 disabled:opacity-50
                -translate-x-14"
              type="button"
              aria-label="Previous slide"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-12 h-12" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent p-2 rounded-full z-10 border-none disabled:opacity-50
                translate-x-14"
              type="button"
              aria-label="Next slide"
              disabled={currentIndex === maxIndex}
            >
              <ChevronRight className="w-12 h-12" />
            </button>
          </>
        )}

        {/* Dots navigation */}
        <div className="flex justify-center gap-2 mt-4">
          {[...Array(maxIndex + 1)].map((_, index) => (
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