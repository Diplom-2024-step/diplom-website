import React, { useState } from "react";
import Image from "next/image";

import "../../assets/fonts-styles/font.css";
import { GetActivityDto } from "@/AppDtos/Dto/Models/Activities/get-activity-dto";

import arrow from "../../assets/images/profile/icon-arrow-right.png";

interface SliderProps {
  activities: GetActivityDto[];
}

const Slider: React.FC<SliderProps> = ({ activities }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + 3 < activities.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  // Условие для отображения кнопки слайдера
  const showArrowButton = activities.length > 3;

  return (
    <div className="relative w-full mx-auto">
      <div className="flex items-center overflow-hidden">
        {/* Slides */}
        <div
          className="flex w-full gap-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 30}%)`,
            width: `${activities.length * 100}%`,
          }}
        >
          {activities.map((slide) => (
            <div
              key={slide.id}
              className="flex-none w-1/5 h-48 bg-cover bg-center rounded-xl shadow-md"
              style={{
                backgroundImage: `url(${slide.urls[0]})`,
                flex: "0 0 calc(80% / 3)",
              }}
            >
              <div className="flex items-end justify-center w-full h-full bg-black bg-opacity-40 rounded-lg">
                <p
                  className="text-md font-normal text-white pb-5"
                  style={{ fontFamily: "Unbounded, sans-serif" }}
                >
                  {slide.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопка слайдера отображается только если изображений больше 3 */}
        {showArrowButton && (
          <button
            className="absolute right-0 z-10 bg-[#5DB3C1] text-white rounded-none rounded-tl-[15px] rounded-bl-[15px] shadow-md top-0 h-48 w-10 flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-[#4A9FAD] hover:shadow-lg active:opacity-80"
            onClick={handleNext}
          >
            <Image alt="arrow" height={50} src={arrow.src} width={50} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Slider;
