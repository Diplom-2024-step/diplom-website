"use client";
import { Icon } from "@iconify/react";
import { Card } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import React, { useState } from "react";

import { useTravelBookingContext } from "@/components/providers/TravelBookingProvider";
import { GetActivityDto } from "@/AppDtos/Dto/Models/Activities/get-activity-dto";

const ActivityCard = ({
  activity,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  activity: GetActivityDto;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) => {
  const { activities, setSelectActivityCard } = useTravelBookingContext();

  const [isSelected, setIsSelected] = useState(
    activities.findIndex((e) => e.id === activity.id) !== -1
  );

  return (
    <>
      <button
        onClick={() => {
          setSelectActivityCard(activity);
          setIsSelected(!isSelected);
        }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <Card
          isHoverable
          className={` h-[450px] relative cursor-pointer  transition-all duration-500 [transform-style:preserve-3d] ${isHovered ? "[transform:rotateY(180deg)]" : ""} `}
        >
          {isHovered !== true ? (
            <>
              <div
                className={`
        absolute z-20 w-full p-4 flex justify-between  items-center
            ${index % 2 !== 0 ? "bottom-0" : "top-0"}
      `}
              >
                <h4 className="text-white text-3xl font-[600] font-unbounded drop-shadow-lg">
                  {activity.name}
                </h4>
                <Icon
                  className="text-4xl text-white"
                  icon="f7:exclamationmark-bubble"
                />
              </div>

              {isSelected ? (
                <>
                  <div className="w-full h-full z-10 absolute flex bg-primary opacity-60" />
                </>
              ) : (
                <></>
              )}

              {isSelected ? (
                <div className="absolute w-full h-full z-50 flex">
                  <div className="m-auto ">
                    <Icon
                      className="text-7xl  text-white"
                      icon="ic:baseline-check"
                    />
                  </div>
                </div>
              ) : (
                <></>
              )}

              <Image
                removeWrapper
                alt={activity.name + " image"}
                className="z-0 w-full h-full object-cover  "
                src={activity.urls[0]}
              />
            </>
          ) : (
            <div className="[transform:rotateY(180deg)]  flex p-2 flex-col h-full">
              <div className="flex flex-col p-3 h-full w-full rounded-xl border-black border-1  ">
                <div className="flex-grow overflow-hidden text-lg text-pretty">
                  <h4 className="text-start text-[#0F171B]  text-3xl mb-1 font-light font-nunito_font_family">
                    {activity.name}
                  </h4>
                  <p className="text-start">{activity.description}</p>
                </div>
                <div className="self-center mt-2 text-center text-xl bg-gradient-to-b from-[#ECB003] to-[#AF3F2B]  text-transparent bg-clip-text">
                  <span>{activity.price} грн.</span>
                </div>
              </div>
            </div>
          )}
        </Card>
      </button>
    </>
  );
};

export default ActivityCard;
