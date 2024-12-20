import React, { useState } from 'react'
import {Button} from '@nextui-org/react';
import Image from 'next/image';
import '../../assets/fonts-styles/font.css';
import arrow from '../../assets/images/profile/icon-arrow-right.png';

interface Slide {
  id: number;
  image: string;
  title: string;
}

interface SliderProps {
  activities: { name: string; image: string }[];
}
  
  const Slider: React.FC<SliderProps> = ({ activities }) => {
    const slides: Slide[] = activities.map((activity, index) => ({
      id: index,
      image: activity.image,
      title: activity.name,
    }));
  
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex + 3 < slides.length) {
          setCurrentIndex(currentIndex + 1);
        } else {
          setCurrentIndex(0);
        }
    };

    // Условие для отображения кнопки слайдера
    const showArrowButton = slides.length > 3;
    

    return (
        <div className="relative w-full mx-auto">
        <div className="flex items-center overflow-hidden">
          {/* Slides */}
          <div className="flex w-full gap-4 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 30}%)`, width: `${slides.length * 100}%` }}
            >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="flex-none w-1/5 h-48 bg-cover bg-center rounded-xl shadow-md"
                style={{ backgroundImage: `url(${slide.image})`, flex: '0 0 calc(80% / 3)' }}
              >
                <div className="flex items-end justify-center w-full h-full bg-black bg-opacity-40 rounded-lg">
                  <p
                  style={{fontFamily: 'Unbounded, sans-serif' }}
                  className="text-md font-normal text-white pb-5">{slide.title}</p>
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
            <Image src={arrow.src} alt="arrow" width={50} height={50} />
          </button>
         )}
        </div>
      </div>
    );
  };
  
  export default Slider;
  
