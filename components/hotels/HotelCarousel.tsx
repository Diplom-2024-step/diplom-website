"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { GetHotelDto } from "@/AppDtos/Dto/Models/Hotels/get-hotel-dto";

import HotelCard from "./hotelCard/HotelCard";

export const HotelCarousel = ({ hotels }: { hotels: GetHotelDto[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    window.addEventListener("resize", updateSlidesPerView);

    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const maxIndex = Math.max(0, hotels.length - slidesPerView);

  const handleNext = (): void => {
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) {
        return 0;
      }

      return prev + 1;
    });
  };

  const handlePrev = (): void => {
    setCurrentIndex((prev) => {
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
      <h2 className="text-5xl font-bold font-unbounded mt-6 carousel-title">
        Рекомендуємо відвідати
      </h2>

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / slidesPerView}%)`,
            }}
          >
            {hotels.map((hotel, index) => (
              <div
                key={hotel.id}
                className={`mt-6 mb-6 flex-shrink-0 px-2 tours-carousel-item transition-all duration-300
                  ${
                    slidesPerView === 1
                      ? "w-full"
                      : slidesPerView === 2
                        ? "w-1/2"
                        : "w-1/3"
                  }`}
              >
                <HotelCard
                  cardItem={hotel}
                  isHovered={hoveredIndex === index}
                  onHover={() => handleHover(index)}
                  onLeave={handleLeave}
                />
              </div>
            ))}
          </div>
        </div>

        {hotels.length > slidesPerView && (
          <>
            <button
              aria-label="Previous slide"
              className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 z-10"
              type="button"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              aria-label="Next slide"
              className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 z-10"
              type="button"
              onClick={handleNext}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        <div className="flex justify-center gap-2 mt-4 carousel-list-buttons">
          {[...Array(maxIndex + 1)].map((_, index) => (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-6 h-1 transition-colors ${
                index === currentIndex ? "bg-black" : "bg-gray-300"
              }`}
              type="button"
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelCarousel;
