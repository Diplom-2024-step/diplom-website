"use client";
import { Icon } from "@iconify/react";
import React from "react";
import { differenceInDays } from "date-fns";

import { GetHotelDto } from "@/AppDtos/Dto/Models/Hotels/get-hotel-dto";
import { useTravelBookingContextInjectedHotel } from "@/components/providers/TravelBookingProvider";
import PickActivitiesForTour from "@/components/activities/PickActivitiesForTour";

import ChoosingHowManyPeopleButton from "./choosingHowManyPeopleButton/ChoosingHowManyPeopleButton";
import ChoosingDateAndCityButton from "./ChoosingDateAndCityButton/ChoosingDateAndCityButton";
import ChoosingDietTypeRoomTypeButton from "./choosingDietTypeRoomTypeButton/ChoosingDietTypeRoomTypeButton";
import BuyButtonActive from "./BuyTravel/BuyButtonActive";

const TravelBooking = ({ hotel }: { hotel: GetHotelDto }) => {
  const {
    adults,
    kids,
    dietType,
    roomType,
    city,
    transportationType,
    date,
    activities,
    setAdults,
    setKids,
    setDietType,
    setRoomType,
    setCity,
    setTransportationType,
    setDate,
  } = useTravelBookingContextInjectedHotel(hotel);

  const calculateCost = () => {
    let activitiesCost = 0;

    for (let index = 0; index < activities.length; index++) {
      activitiesCost += activities[index].price;
    }

    return (
      (hotel.additionCostPerPerson * (adults + kids) + hotel.pricePerNight) *
        (differenceInDays(date.end.toString(), date.start.toString()) - 1) +
      (dietType?.price ? dietType.price : 1) +
      (roomType?.price ? roomType.price : 1) +
      activitiesCost
    );
  };

  return (
    <>
      <div className="flex w-full justify-between mt-10 text-black booking-container">
        <div className="flex-col w-[80%] booking-filtering-container">
          <div className="w-full flex bg-white shadow-md booking-setting-container">
            <div className="w-[40%] bg-primary text-white flex items-center justify-start p-5 rounded-r-lg booking-setting-header">
              <Icon
                className="mr-3 text-4xl"
                icon="stash:people-group-duotone"
              />
              <span className="text-[20px] text-nunito_font_family">
                Туристи
              </span>
            </div>

            <div className="w-full flex items-center justify-start p-2 booking-setting-content-container">
              <div className="w-[80%] p-5 booking-setting-content">
                <span>
                  {adults === 1 ? "1 дорослий " : `${adults} дорослих `}
                  {kids === 0
                    ? ""
                    : kids === 1
                      ? "1 дитина "
                      : `${kids} дитин `}
                </span>
              </div>
              <div className="w-full md:w-[20%] h-full">
                <ChoosingHowManyPeopleButton
                  adults={adults}
                  kids={kids}
                  setAdluts={setAdults}
                  setChildren={setKids}
                />
              </div>
            </div>
          </div>

          <div className="w-full flex bg-white shadow-md mt-5 booking-setting-container">
            <div className="w-[40%] bg-primary text-white flex items-center justify-start p-5 rounded-r-lg booking-setting-header">
              <Icon className="mr-3 text-5xl" icon="lsicon:calendar-outline" />
              <span>Дата віправлення і тривалість туру</span>
            </div>

            <div className="w-full flex items-center justify-start p-2 booking-setting-content-container">
              <div className="w-[80%] p-5 justify-between flex booking-setting-content">
                <div className="flex flex-col">
                  <div>{date.start.toString()}</div>
                  <div>
                    {city?.name} - {hotel.city.name}
                  </div>
                </div>

                <div className="flex-col text-center booking-mobile-none">
                  <div>
                    {differenceInDays(
                      date.end.toString(),
                      date.start.toString()
                    ) - 1}{" "}
                    ночей /{" "}
                    {differenceInDays(
                      date.end.toString(),
                      date.start.toString()
                    )}{" "}
                    днів
                  </div>
                  <div className="text-base">
                    {transportationType?.name}{" "}
                    <p className="text-primary">( включено ) </p>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div>{date.end.toString()}</div>
                  <div>
                    {hotel.city.name} - {city?.name}
                  </div>
                </div>
              </div>

              <div className="booking-mobile-block">
                <div className="flex-col text-center">
                  <div>
                    {differenceInDays(
                      date.end.toString(),
                      date.start.toString()
                    ) - 1}{" "}
                    ночей /{" "}
                    {differenceInDays(
                      date.end.toString(),
                      date.start.toString()
                    )}{" "}
                    днів
                  </div>
                  <div className="text-base">
                    {transportationType?.name}{" "}
                    <p className="text-primary">( включено ) </p>
                  </div>
                </div>
              </div>
              <div className="w-[20%] h-full">
                <ChoosingDateAndCityButton
                  city={city}
                  date={date}
                  setCity={setCity}
                  setDate={setDate}
                  setTransportationType={setTransportationType}
                  transportationType={transportationType}
                />
              </div>
            </div>
          </div>

          <div className="w-full flex bg-white shadow-md mt-5 booking-setting-container">
            <div className="w-[40%] bg-primary text-white flex items-center justify-start p-5 rounded-r-lg booking-setting-header">
              <Icon className="mr-3 text-4xl" icon="fa-solid:concierge-bell" />
              <span>Тип кімнати і харчування</span>
            </div>

            <div className="w-full flex items-center justify-start p-2 booking-setting-content-container">
              <div className="w-[80%] p-5 grid grid-cols-1 gap-2 booking-setting-content">
                <span>
                  {"Кімната: " + roomType?.name} -{" "}
                  {(roomType?.price ? roomType.price : 0) + " грн."}
                </span>
                <span>
                  {"Харчування: " + dietType?.name} -{" "}
                  {(dietType?.price ? dietType.price : 0) + " грн."}
                </span>
              </div>

              <div className="w-[20%] h-full">
                <ChoosingDietTypeRoomTypeButton
                  availableDietTypes={hotel.dietTypes}
                  availableRoomTypes={hotel.roomTypes}
                  dietType={dietType ? dietType : hotel.dietTypes[0]}
                  roomType={roomType ? roomType : hotel.roomTypes[0]}
                  setDietType={setDietType}
                  setRoomType={setRoomType}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-col w-[15%] booking-totalprice-button-container">
          <div className=" shadow-lg rounded-md bg-white booking-totalprice-container">
            <div className="bg-gradient-to-b text-end  from-[#ECB003] to-[#AF3F2B] p-2  text-transparent bg-clip-text">
              <p className="text-lg">Разом:</p>
              <p className="text-2xl">{calculateCost()} грн.</p>
            </div>
          </div>
          <BuyButtonActive
            city={city!}
            cost={calculateCost()}
            transporationType={transportationType}
          />
        </div>
      </div>

      <PickActivitiesForTour />
    </>
  );
};

export default TravelBooking;
