"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Tooltip } from "@nextui-org/react";

import { GetUserDto } from "@/AppDtos/Dto/Users/get-user-dto";

import FavoriteHotelsTab from "./FavoriteHotelsTab";
import FavoriteToursTab from "./FavoriteToursTab";

const FavoriteTab = ({ user }: { user: GetUserDto }) => {
  const [isHotel, setIsHotel] = useState(true);

  return (
    <div className="mt-5 min-h-64">
      <div className="mb-3 ml-14 flex gap-3">
        <Tooltip closeDelay={0} content="Отели" delay={0}>
          <Icon
            className={
              `hover:text-primary cursor-pointer ` +
              (isHotel ? "text-primary" : "text-black")
            }
            height="48"
            icon="ri:hotel-fill"
            width="48"
            onClick={() => setIsHotel(true)}
          />
        </Tooltip>

        <Tooltip closeDelay={0} content="Тури" delay={0}>
          <Icon
            className={
              `hover:text-primary cursor-pointer ` +
              (!isHotel ? "text-primary" : "text-black")
            }
            height="48"
            icon="lucide-lab:palmtree-island-sun"
            width="48"
            onClick={() => setIsHotel(false)}
          />
        </Tooltip>
      </div>

      {isHotel ? (
        <FavoriteHotelsTab hotelsIds={user.favoriteHotelsIds} />
      ) : (
        <FavoriteToursTab toursIds={user.favoriteToursIds} />
      )}
    </div>
  );
};

export default FavoriteTab;
