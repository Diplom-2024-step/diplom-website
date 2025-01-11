"use client";

import React, {
  useState,
  useRef,
  TouchEvent,
  MouseEvent,
  KeyboardEvent,
} from "react";
import { Image } from "@nextui-org/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

import ImageLine from "./ImageLine";

const ImageGallery = ({ urls }: { urls: string[] }) => {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentX = useRef(0);

  const handlePrevClick = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : urls.length - 1));
  };

  const handleNextClick = () => {
    setIndex((prevIndex) => (prevIndex < urls.length - 1 ? prevIndex + 1 : 0));
  };

  // Touch handlers
  const handleTouchStart = (e: TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    currentX.current = e.touches[0].clientX;
  };

  // Mouse handlers
  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    startX.current = e.clientX;
    e.preventDefault();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      currentX.current = e.clientX;
      e.preventDefault();
    }
  };

  const handleDragEnd = () => {
    if (!isDragging && startX.current === 0) return;
    const minSwipeDistance = 50;
    const swipeDistance = currentX.current - startX.current;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        handlePrevClick();
      } else {
        handleNextClick();
      }
    }
    setIsDragging(false);
    startX.current = 0;
    currentX.current = 0;
  };

  // Keyboard handler
  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case "ArrowLeft":
        handlePrevClick();
        break;
      case "ArrowRight":
        handleNextClick();
        break;
    }
  };

  return (
    <div className="flex-col items-center mb-5 relative px-4 md:px-10">
      {/* Navigation Buttons - Only visible on desktop */}
      <div className="hidden md:block absolute top-1/2 left-0 md:-left-10 z-10 transform -translate-y-1/2">
        <button
          aria-label="Previous image"
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200"
          onClick={handlePrevClick}
        >
          <ArrowLeft color="#333" size={24} />
        </button>
      </div>

      {/* Main Image */}
      <div className="mb-5 w-full flex-grow flex items-center justify-center">
        <div
          aria-label="Image gallery viewer"
          className={`w-full p-2 md:p-5 flex-col rounded-tl-md rounded-tr-md flex justify-around overflow-hidden mr-auto mt-4 md:mt-10 text-black bg-white shadow-md cursor-grab ${
            isDragging ? "cursor-grabbing" : ""
          }`}
          role="button"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleDragEnd}
          onMouseMove={handleMouseMove}
          onMouseUp={handleDragEnd}
          onTouchEnd={handleDragEnd}
          onTouchMove={handleTouchMove}
          onTouchStart={handleTouchStart}
        >
          <div className="h-[300px] sm:h-[500px] md:h-[800px] w-full flex items-center justify-center select-none">
            <Image
              alt={`Gallery image ${index + 1} of ${urls.length}`}
              className="h-full w-full object-contain pointer-events-none"
              draggable={false}
              src={urls[index]}
            />
          </div>
        </div>
      </div>

      {/* Navigation Buttons - Only visible on desktop */}
      <div className="hidden md:block absolute top-1/2 right-0 md:-right-10 z-10 transform -translate-y-1/2">
        <button
          aria-label="Next image"
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200"
          onClick={handleNextClick}
        >
          <ArrowRight color="#333" size={24} />
        </button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="mt-4 md:mt-6">
        <ImageLine currentIndex={index} setIndex={setIndex} urls={urls} />
      </div>
    </div>
  );
};

export default ImageGallery;
