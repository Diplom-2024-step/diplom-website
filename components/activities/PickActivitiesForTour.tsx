"use client";
import React from "react";
import InnerActivityCard from "./shared/InnerActivityCard";
import { usePathname, useRouter } from "next/navigation";
import { useTravelBookingContext } from "../providers/TravelBookingProvider";
import activityPlaceholder from "../../assets/images/activities/activity-placeholder.webp";
import { Image } from "@nextui-org/image";
import { Activity } from "lucide-react";
import { Card } from "@nextui-org/card";

const PickActivitiesForTour = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { activities } = useTravelBookingContext();

  return (
    <div className="text-center w-full mt-10">
      <h2 className="font-bold text-2xl font-unbounded">
        Види активного відпочинку, які ви обрали
      </h2>

      {activities.length !== 0 ? (
        <div className="flex-row w-full rounded-md shadow-lg mt-5 bg-white h-[330px]">
          <div className="flex  justify-between items-center w-full h-full">
            <div className="w-[90%] flex justify-start overflow-x-clip">
              {activities.map((activity, index) => (
                <div className="w-[20%] p-4" key={index}>
                  <InnerActivityCard activity={activity} />
                </div>
              ))}
            </div>
            <div
              className="bg-primary w-[10%] rounded-l-2xl h-full flex text-center cursor-pointer   hover:scale-105 duration-500 ease-in-out  "
              onClick={() => router.push(`${pathname}/activities`)}
            >
              <div className="text-white text-3xl m-auto">+</div>
            </div>
          </div>
        </div>
      ) : (
        <Card
          className="flex flex-col w-full rounded-md shadow-lg mt-5 bg-white h-[330px]"
          isHoverable
          isPressable
          onClick={() => router.push(`${pathname}/activities`)}
        >
          <Image
            isZoomed
            src={activityPlaceholder.src}
            radius="none"
            alt="Activity Placeholder"
            className="w-full h-full object-cover"
          />
        </Card>
      )}
    </div>
  );
};

export default PickActivitiesForTour;
