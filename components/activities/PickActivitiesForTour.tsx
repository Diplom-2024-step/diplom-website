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

  // Determine number of visible items based on screen size
  const getVisibleItems = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1; // Mobile
      if (window.innerWidth < 1024) return 3; // Tablet

      return 5; // Desktop
    }

    return 5;
  };

  const [visibleItems, setVisibleItems] = useState(getVisibleItems());

  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(getVisibleItems());
      // Reset current index if it would cause empty space
      setCurrentIndex((prev) =>
        Math.min(prev, Math.max(0, activities.length - getVisibleItems()))
      );
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [activities.length]);

  const handleTouchStart = (e: any) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleMouseStart = (e: any) => {
    e.preventDefault();
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: any) => {
    if (!isDragging || !startX) return;

    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < activities.length / visibleItems) {
        setCurrentIndex((prev) => prev + 1);
      } else if (diff < 0 && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
      setStartX(null);
      setIsDragging(false);
    }
  };

  const handleMouseMove = (e: any) => {
    if (!isDragging || !startX) return;

    const currentX = e.clientX;
    const diff = startX - currentX;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < activities.length / visibleItems) {
        setCurrentIndex((prev) => prev + 1);
      } else if (diff < 0 && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
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

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseup", handleDragEnd);
    container.addEventListener("mouseleave", handleDragEnd);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseup", handleDragEnd);
      container.removeEventListener("mouseleave", handleDragEnd);
    };
  }, [isDragging, startX]);

  const isSwipeable = activities.length > visibleItems;

  return (
    <div className="text-center w-full lg:mt-4 mt-10 lg:px-4 px-0">
      <h2 className="font-bold lg:text-[40px] text-2xl font-unbounded px-2">
        Види активного відпочинку, які ви обрали
      </h2>

      {activities.length !== 0 ? (
        <div className="flex-row w-full rounded-md shadow-lg lg:mt-3 mt-5 bg-white lg:h-[250px] h-[330px]">
          <div className="flex justify-between items-center w-full h-full">
            <div className="relative w-full overflow-hidden">
              {isSwipeable && currentIndex > 0 && (
                <button
                  className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
                  onClick={() =>
                    setCurrentIndex((prev) => Math.max(0, prev - 1))
                  }
                >
                  ←
                </button>
              )}

              <div
                ref={containerRef}
                className="flex justify-start overflow-hidden"
                role="button"
                style={{
                  transform: `translateX(-${currentIndex * (visibleItems === 1 ? 12.5 : 25)}%)`,
                  transition: isDragging ? "none" : "transform 0.3s ease-out",
                  width: `${100 + (activities.length > visibleItems ? (activities.length / visibleItems) * (100 / visibleItems) : 0)}%`,
                  cursor: isSwipeable ? "grab" : "default",
                }}
                onMouseDown={isSwipeable ? handleMouseStart : undefined}
                onTouchEnd={isSwipeable ? handleDragEnd : undefined}
                onTouchMove={isSwipeable ? handleTouchMove : undefined}
                onTouchStart={isSwipeable ? handleTouchStart : undefined}
              >
                {activities.map((activity, index) => (
                  <div
                    key={index}
                    className={`${
                      visibleItems === 1
                        ? "w-auto"
                        : visibleItems === 3
                          ? "w-1/3"
                          : "w-1/4"
                    } p-2 md:p-4`}
                  >
                    <InnerActivityCard activity={activity} />
                  </div>
                ))}
              </div>

              {isSwipeable &&
                currentIndex < Math.trunc(activities.length / visibleItems) && (
                  <button
                    className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
                    onClick={() =>
                      setCurrentIndex((prev) =>
                        Math.min(activities.length / visibleItems, prev + 1)
                      )
                    }
                  >
                    →
                  </button>
                )}
            </div>

            <button
              aria-label="Toggle pickActivity"
              className="bg-primary w-[15%] md:w-[10%] rounded-l-2xl h-full flex text-center cursor-pointer hover:scale-105 duration-500 ease-in-out"
              onClick={() => router.push(`${pathname}/activities`)}
            >
              <div className="text-white text-2xl md:text-3xl m-auto">+</div>
            </button>
          </div>
        </div>
      ) : (
        <Card
          isHoverable
          isPressable
          className="flex flex-col w-full rounded-md shadow-lg mt-3 md:mt-5 bg-white h-[220px] md:h-[330px]"
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
