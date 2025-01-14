"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Image } from "@nextui-org/image";
import { Card } from "@nextui-org/card";

import activityPlaceholder from "../../assets/images/activities/activity-placeholder.webp";
import { useTravelBookingContext } from "../providers/TravelBookingProvider";

import InnerActivityCard from "./shared/InnerActivityCard";

const PickActivitiesForTour = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);

  const { activities } = useTravelBookingContext();

  const [startX, setStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleTouchStart = (e:any) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleMouseStart = (e:any) => {
    e.preventDefault();
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e:any) => {
    if (!isDragging || !startX) return;
    
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < activities.length - 5) {
        setCurrentIndex(prev => prev + 1);
      } else if (diff < 0 && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      }
      setStartX(null);
      setIsDragging(false);
    }
  };

  const handleMouseMove = (e:any) => {
    if (!isDragging || !startX) return;
    
    const currentX = e.clientX;
    const diff = startX - currentX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < activities.length - 5) {
        setCurrentIndex(prev => prev + 1);
      } else if (diff < 0 && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      }
      setStartX(null);
      setIsDragging(false);
    }
  };

  const handleDragEnd = () => {
    setStartX(null);
    setIsDragging(false);
  };

  useEffect(() => {
    const container = containerRef.current as any;
    if (!container) return;

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseup', handleDragEnd);
    container.addEventListener('mouseleave', handleDragEnd);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseup', handleDragEnd);
      container.removeEventListener('mouseleave', handleDragEnd);
    };
  }, [isDragging, startX]);

  // Only enable swipe if there are more than 5 activities
  const isSwipeable = activities.length > 5;

  return (
    <div className="text-center w-full mt-10">
      <h2 className="font-bold text-2xl font-unbounded">
        Види активного відпочинку, які ви обрали
      </h2>

      {activities.length !== 0 ? (
        <div className="flex-row w-full rounded-md shadow-lg mt-5 bg-white h-[330px]">
          <div className="flex  justify-between items-center w-full h-full">
            <div className="relative w-full overflow-hidden">
      {isSwipeable && currentIndex > 0 && (
        <button
          onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
        >
          ←
        </button>
      )}
      
      <div
        ref={containerRef}
        className="w-4/5 flex justify-start overflow-hidden"
        onTouchStart={isSwipeable ? handleTouchStart : undefined}
        onTouchMove={isSwipeable ? handleTouchMove : undefined}
        onTouchEnd={isSwipeable ? handleDragEnd : undefined}
        onMouseDown={isSwipeable ? handleMouseStart : undefined}
        style={{
          transform: `translateX(-${currentIndex * 20}%)`,
          transition: isDragging ? 'none' : 'transform 0.3s ease-out',
          width: `${(100 + (activities.length >5 ? (activities.length -5) * 20 : 0))}%`,
          cursor: isSwipeable ? 'grab' : 'default',
        }}
      >
        {activities.map((activity, index) => (
          <div key={index} className="w-1/5 p-4">
            <InnerActivityCard activity={activity} />
          </div>
        ))}
      </div>

      {isSwipeable && currentIndex < activities.length - 5 && (
        <button
          onClick={() => setCurrentIndex(prev => Math.min(activities.length - 5, prev + 1))}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
        >
          →
        </button>
      )}
    </div>
            <button
              aria-label="Toggle pickActivity"
              className="bg-primary w-[10%] rounded-l-2xl h-full flex text-center cursor-pointer   hover:scale-105 duration-500 ease-in-out  "
              onClick={() => router.push(`${pathname}/activities`)}
            >
              <div className="text-white text-3xl m-auto">+</div>
            </button>
          </div>
        </div>
      ) : (
        <Card
          isHoverable
          isPressable
          className="flex flex-col w-full rounded-md shadow-lg mt-5 bg-white h-[220px] md:h-[330px]"
          onClick={() => router.push(`${pathname}/activities`)}
        >
          <Image
            isZoomed
            alt="Activity Placeholder"
            className="w-full h-full object-cover"
            radius="none"
            src={activityPlaceholder.src}
          />
        </Card>
      )}
    </div>
  );
};

export default PickActivitiesForTour;
