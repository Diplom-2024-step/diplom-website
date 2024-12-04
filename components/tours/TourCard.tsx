"use client";
import { GetTourDto } from "@/AppDtos/Dto/Models/Tours/get-tour-dto";
import { Icon } from "@iconify/react";
import {
  Calendar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import { BookmarkIcon, MapPin, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { SharedCardProps } from "@/types/components/SharedCardProps";

interface TourCardProps {
  tour: GetTourDto;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const TourCard = ({
  cardItem,
  isHovered,
  onHover,
  onLeave,
}: SharedCardProps<GetTourDto>) => {
  const router = useRouter();
  return (
    <Card
      className={`relative overflow-hidden hover:cursor-pointer ${isHovered ? "scale-105" : ""}`}
      shadow="none"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      isHoverable
      isPressable
      onClick={() => {
        router.push(`/tours/${cardItem.id}`);
      }}
    >
      <div className="relative">
        <Image
          src={cardItem.urls[0]}
          loading="eager"
          alt={cardItem.name}
          className="h-[317px] w-[476px] object-cover z-0"
          isZoomed
          radius="none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-10"></div>
        {/* Bookmark button (positioned absolutely) */}
        <div
          className="absolute top-4 right-4 z-10"
          onClick={(e) => {
            // Stop the event from bubbling up to the card
            e.stopPropagation();
            console.debug("2121");
          }}
        >
          <button className="p-2 rounded-lg hover:bg-gray-700 transition-colors duration-300">
            <BookmarkIcon className="w-8 text-white h-8" />
          </button>
        </div>
        <div className="absolute flex text-center items-center top-4 right-[250px] z-10">
          <Icon
            icon="lsicon:calendar-outline"
            className="text-white h-8 w-8 mr-2 mt-1"
          />
          <span className="text-white whitespace-nowrap">
            {cardItem.duration}{" "}
            {cardItem.duration % 10 === 1 && cardItem.duration !== 11
              ? "день"
              : cardItem.duration % 10 >= 2 &&
                  cardItem.duration % 10 <= 4 &&
                  (cardItem.duration < 10 || cardItem.duration > 20)
                ? "дні"
                : "днів"}
          </span>
        </div>
        {/* Bottom overlay (positioned relatively) */}
        <div className="absolute bottom-0 left-1/3 rounded-tr-full transform -translate-x-1/2 z-10 bg-white h-5 w-3/4">
          <div className="absolute -bottom-[10px] -right-1 bg-white z-10 h-5 w-5 rounded-none rotate-45"></div>
        </div>
      </div>

      <CardBody className="p-4 bg-white text-black ">
        <h3 className="text-xl font-bold font-unbounded">
          {cardItem.hotel.city.country.name}, {cardItem.hotel.city.name}
        </h3>
        <div className="flex items-center gap-2 text-gray-600 ">
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-unbounded">{cardItem.hotel.name} </span>
        </div>
        <div className="flex items-center gap-1 mb-4">
          {[...Array(cardItem.hotel.stars)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-sm ml-2">{cardItem.hotel.stars}/5</span>
        </div>
        <div className="flex items-center justify-between  bg-white">
          <div className="flex bg-gradient-to-b from-[#ECB003] to-[#AF3F2B] text-transparent bg-clip-text text-center items-center">
            <span className="text-lg font-bold mr-1">
              {cardItem.priceUSD} ₴
            </span>

            <span className="text-lg mr-1">
              /{" "}
              {(() => {
                const adultsMatch = cardItem.name.match(
                  /(\d+)\s(дорослих|дорослого)/
                );
                const childrenMatch = cardItem.name.match(
                  /(\d+)\s(дитини|дитин)/
                );

                const adults = adultsMatch
                  ? `${adultsMatch[1]} ${
                      adultsMatch[1] === "1" ? "дорослого" : "дорослих"
                    }`
                  : "";

                const children = childrenMatch
                  ? `${childrenMatch[1]} ${
                      childrenMatch[1] === "1" ? "дитини" : "дитин"
                    }`
                  : "";

                return `${adults} ${children}`.trim();
              })()}
            </span>
          </div>
          <Icon
            icon="ei:arrow-up"
            className={`w-10 h-10 transition-transform rotate-45 text-black ${
              isHovered ? "-translate-y-6" : ""
            }`}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default TourCard;
