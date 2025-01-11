"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

import { GetTourDto } from "@/AppDtos/Dto/Models/Tours/get-tour-dto";

import { useTravelBookingContext } from "../providers/TravelBookingProvider";

import InnerActivityCard from "./shared/InnerActivityCard";

const ShowActivitiesForTour = ({ tour }: { tour: GetTourDto }) => {
  const pathname = usePathname();
  const router = useRouter();

  const { activities } = useTravelBookingContext();

  return (
    <div className="text-center w-full mt-10 mb-10">
      <h2 className="text-[40px] font-bold font-unbounded">
        Види активного відпочинку
      </h2>
      <div className="flex-row w-full rounded-md shadow-lg mt-5 bg-white h-[330px]">
        <div className="flex  justify-between items-center w-full h-full">
          <div className="w-full flex justify-start overflow-x-clip">
            {tour.activities.map((activity, index) => (
              <div key={index} className="w-[20%] p-4">
                <InnerActivityCard activity={activity} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowActivitiesForTour;
