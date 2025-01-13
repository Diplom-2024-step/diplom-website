"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";

import { HistoryItemTypes, useSearchHistory } from "@/hooks/useSearchHistory";

import HotelCard from "../hotels/hotelCard/HotelCard";
import TourCard from "../tours/TourCard";

const HistoryCarousel = () => {
  const [history, addToHistory] = useSearchHistory();
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

  const maxIndex = Math.max(0, history.length - slidesPerView);

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

  if (history.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-4 text-black">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black font-unbounded">
        Історія переглядів
      </h2>

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / slidesPerView}%)`,
            }}
          >
            {history.map((cardItem, index) => (
              <div
                key={cardItem.item.id}
                className={`mt-6 mb-6 flex-shrink-0 px-2 transition-all duration-300
                  ${
                    slidesPerView === 1
                      ? "w-full"
                      : slidesPerView === 2
                        ? "w-1/2"
                        : "w-1/3"
                  }`}
              >
                {cardItem.type === HistoryItemTypes.Hotel ? (
                  <HotelCard
                    cardItem={cardItem.item as any}
                    isHovered={index === hoveredIndex}
                    onHover={() => handleHover(index)}
                    onLeave={handleLeave}
                  />
                ) : (
                  <TourCard
                    cardItem={cardItem.item as any}
                    isHovered={index === hoveredIndex}
                    onHover={() => handleHover(index)}
                    onLeave={handleLeave}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {history.length > slidesPerView && (
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

        <div className="flex justify-center gap-2 mt-4">
          {history.length > slidesPerView &&
            [...Array(maxIndex + 1)].map((_, index) => (
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

export default HistoryCarousel;
