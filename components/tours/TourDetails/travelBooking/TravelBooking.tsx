"use client";
import { GetTourDto } from "@/AppDtos/Dto/Models/Tours/get-tour-dto";
import { Icon } from "@iconify/react";
import { Button, DateValue, RangeValue, Spacer } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import ChoosingHowManyPeopleButton from "@/components/hotels/hotelDetails/travelBooking/choosingHowManyPeopleButton/ChoosingHowManyPeopleButton";
import { setConfig } from "next/config";
import ChoosingDietTypeRoomTypeButton from "@/components/hotels/hotelDetails/travelBooking/choosingDietTypeRoomTypeButton/ChoosingDietTypeRoomTypeButton";
import { GetDietTypeDto } from "@/AppDtos/Dto/Models/DietTypes/get-diet-type-dto";
import { GetRoomTypeDto } from "@/AppDtos/Dto/Models/RoomTypes/get-room-type-dto";
import ChoosingDateButton from "@/components/tours/TourDetails/travelBooking/ChoosingDateAndCityButton/ChoosingDateButton";
import { parseDate } from "@internationalized/date";
import { addDays, differenceInDays, formatISO } from "date-fns";
import { GetCityDto } from "@/AppDtos/Dto/Models/Hotels/get-city-dto";
import { GetTransportationTypeDto } from "@/AppDtos/Dto/Models/TransportationTypes/get-transportation-type-dto";
import BuyButtonActive from "@/components/hotels/hotelDetails/travelBooking/BuyTravel/BuyButtonActive";
import { useTravelBookingContextInjectedHotel } from "@/components/providers/TravelBookingProvider";
import ShowActivitiesForTour from "@/components/activities/ShowActivitiesForTour";

const TravelBooking = ({ tour }: { tour: GetTourDto }) => {
  const {
    adults,
    kids,
    dietType,
    roomType,
    city,
    transportationType,
    date,
    setAdults,
    setKids,
    setDietType,
    setRoomType,
    setCity,
    setTransportationType,
    setDate,
  } = useTravelBookingContextInjectedHotel(tour.hotel);

  const calculateCost = () => {
    return (
      (tour.hotel.additionCostPerPerson * (adults + kids) +
        tour.hotel.pricePerNight) *
        (differenceInDays(date.end.toString(), date.start.toString()) - 1) +
      (dietType?.price ? dietType.price : 1) +
      (roomType?.price ? roomType.price : 1)
    );
  };

  return (
    <>
      <div className="flex w-full justify-between mt-10 text-black">
        <div className="flex-col w-[80%]">
          <div className="w-full flex bg-white shadow-md">
            <div className="w-[40%] bg-primary text-white flex items-center justify-start p-5 rounded-r-lg">
              <Icon
                icon="stash:people-group-duotone"
                className="mr-3 w-[40px] h-[40px]"
              />
              <span className="text-[20px] text-nunito_font_family">
                Туристи
              </span>
            </div>

            <div className="w-full flex items-center justify-start p-2">
              <div className="w-full p-5">
                <span className="text-[18px] font-bold text-nunito_font_family">
                  {adults === 1 ? "1 дорослий " : `${adults} дорослих `}

                  {kids === 0
                    ? ""
                    : kids === 1
                      ? "1 дитина "
                      : `${kids} дитин `}
                </span>
              </div>
            </div>
          </div>

          <div className="w-full flex bg-white shadow-md mt-5">
            <div className="w-[40%] bg-primary text-white flex items-center justify-start p-5 rounded-r-lg">
              <Icon
                icon="lsicon:calendar-outline"
                className="mr-3 w-[40px] h-[40px]"
              />
              <span className="text-[20px] text-nunito_font_family">
                Дата віправлення і тривалість туру
              </span>
            </div>

            <div className="w-full flex items-center justify-start p-2">
              <div className="w-[80%] p-5 justify-between flex">
                <div className="flex flex-col">
                  <div>{date.start.toString()}</div>
                  <div>
                    {tour.fromCity.name} - {tour.toCity.name}
                  </div>
                </div>
                <div className="flex-col text-center">
                  <div>
                    {tour.duration - 1} ночей / {tour.duration} днів
                  </div>
                  <div className="flex text-base">
                    {tour.transportationType.name}{" "}
                    <p className="text-primary">( включено ) </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div>{date.end.toString()}</div>
                  <div>
                    {tour.toCity.name} - {tour.fromCity.name}
                  </div>
                </div>
              </div>
              <div className="w-[20%] h-full">
                <ChoosingDateButton date={date} setDate={setDate} tour={tour} />
              </div>
            </div>
          </div>

          <div className="w-full flex bg-white shadow-md mt-5">
            <div className="w-[40%] bg-primary text-white flex items-center justify-start p-5 rounded-r-lg">
              <Icon
                icon="fa-solid:concierge-bell"
                className="mr-3 w-[40px] h-[40px]"
              />
              <span className="text-[20px] text-nunito_font_family">
                Тип кімнати і харчування
              </span>
            </div>

            <div className="w-full flex items-center justify-start p-2">
              <div className="w-full p-5 grid grid-cols-1 gap-2">
                <span className="text-[18px]">
                  <strong>Кімната: </strong> {roomType?.name} -{" "}
                  {(roomType?.price ? roomType.price : 0) + " грн."}
                </span>
                <span className="text-[18px]">
                  <strong>Харчування: </strong>
                  {dietType?.name} -{" "}
                  {(dietType?.price ? dietType.price : 0) + " грн."}
                </span>
              </div>

              {/* <div className="w-[20%] h-full">
                <ChoosingDietTypeRoomTypeButton
                  availableDietTypes={tour.hotel.dietTypes}
                  availableRoomTypes={tour.hotel.roomTypes}
                  dietType={dietType ? dietType : tour.hotel.dietTypes[0]}
                  roomType={roomType ? roomType : tour.hotel.roomTypes[0]}
                  setDietType={setDietType}
                  setRoomType={setRoomType}
                />
              </div> */}
            </div>
          </div>
        </div>
        <div className="flex-col w-[15%] ">
          <div className=" shadow-lg rounded-md bg-white ">
            <div className="bg-gradient-to-b text-end  from-[#ECB003] to-[#AF3F2B] p-2  text-transparent bg-clip-text">
              <p className="text-lg">Разом:</p>
              <p className="text-2xl">{calculateCost()} грн.</p>
            </div>
          </div>

          <BuyButtonActive
            city={tour.fromCity!}
            transporationType={tour.transportationType}
            cost={calculateCost()}
          />
        </div>
      </div>
      <ShowActivitiesForTour tour={tour} />
    </>
  );
};

export default TravelBooking;
