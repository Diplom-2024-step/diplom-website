"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

import { ModelDto } from "@/AppDtos/Shared/model-dto";
import { SharedCarouselProps } from "@/types/components/SharedCarouselProps";

function SharedCarousel<T extends ModelDto>({
  drawCard,
  items,
  title,
}: SharedCarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleNext = (): void => {
    setCurrentIndex((prev) => (prev + 1) % (items.length - 2));
  };

  const handlePrev = (): void => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return items.length - 3;
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
    <div className="w-full max-w-6xl mx-auto px-4 mt-4 text-black">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>

      <div className="relative ">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 33.333}%)`,
            }}
          >
            {items.map((cardItem, index) => (
              <div
                key={cardItem.id}
                className="w-1/3 mt-6 mb-6 flex-shrink-0 px-2"
              >
                {drawCard({
                  cardItem: cardItem,
                  isHovered: hoveredIndex === index,
                  onHover: () => handleHover(index),
                  onLeave: handleLeave,
                })}
              </div>
            ))}
          </div>
        </div>

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

        <div className="flex justify-center gap-2 mt-4">
          {[...Array(items.length - 2)].map((_, index) => (
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
}

export default SharedCarousel;
