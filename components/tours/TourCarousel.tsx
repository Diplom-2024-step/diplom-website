"use client";
import { useState, useEffect } from "react";
import TourCard from "./TourCard";
import { GetTourDto } from "@/AppDtos/Dto/Models/Tours/get-tour-dto";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const TourCarousel = ({
  tours,
  title,
}: {
  tours: GetTourDto[];
  title: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const maxIndex = Math.max(0, tours.length - slidesPerView);

  const handleNext = (): void => {
    setCurrentIndex(prev => {
      // If we're at the end, go back to the start
      if (prev >= maxIndex) {
        return 0;
      }
      return prev + 1;
    });
  };

  const handlePrev = (): void => {
    setCurrentIndex(prev => {
      // If we're at the start, go to the end
      if (prev <= 0) {
        return maxIndex;
      }
      return prev - 1;
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
    <div className="w-full max-w-6xl mx-auto px-4 text-black lg:max-w-6xl carousel-block">
      <h2 className="text-[50px] font-bold font-unbounded mt-6 carousel-title">{title}</h2>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / slidesPerView}%)`,
            }}
          >
            {tours.map((tour, index) => (
              <div
                key={tour.id}
                className={`mt-6 mb-6 flex-shrink-0 px-2 tours-carousel-item transition-all duration-300
                  ${slidesPerView === 1 ? 'w-full' :
                    slidesPerView === 2 ? 'w-1/2' :
                    'w-1/3'}`}
              >
                <TourCard
                  cardItem={tour}
                  isHovered={hoveredIndex === index}
                  onHover={() => handleHover(index)}
                  onLeave={handleLeave}
                />
              </div>
            ))}
          </div>
        </div>
        
        {tours.length > slidesPerView && (
          <>
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
          </>
        )}

        <div className="flex justify-center gap-2 mt-4 carousel-list-buttons">
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

export default TourCarousel;