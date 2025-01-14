"use client";
import React, { useState } from "react";
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

  return (
    <div className="text-center w-full mt-10">
      <h2 className="font-bold text-2xl font-unbounded">
        Види активного відпочинку, які ви обрали
      </h2>

      {activities.length !== 0 ? (
        <div className="flex-row w-full rounded-md shadow-lg mt-5 bg-white h-[330px]">
          <div className="flex  justify-between items-center w-full h-full">
            <div
              className="w-[80%] flex justify-start overflow-hidden "
              style={{
                transform: `translateX(-${currentIndex * 30}%)`,
                width: `${activities.length * 100}%`,
              }}
            >
              {activities.map((activity, index) => (
                <div key={index} className="w-[20%] p-4">
                  <InnerActivityCard activity={activity} />
                </div>
              ))}
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
