"use client";
import { Icon } from "@iconify/react";
import React, { useEffect } from "react";

import { GetTourDto } from "@/AppDtos/Dto/Models/Tours/get-tour-dto";
import ChoosingDateButton from "@/components/tours/TourDetails/travelBooking/ChoosingDateAndCityButton/ChoosingDateButton";
import { useTravelBookingContextInjectedHotel } from "@/components/providers/TravelBookingProvider";
import ShowActivitiesForTour from "@/components/activities/ShowActivitiesForTour";
import BuyButtonActive from "@/components/hotels/HotelDetails/travelBooking/BuyTravel/BuyButtonActive";

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
    setActivities,
    setDate,
  } = useTravelBookingContextInjectedHotel(tour.hotel);

  const calculateCost = () => {
    return tour.priceUSD;
  };

  useEffect(() => {
    setAdults(tour.howManyAdults);
    setKids(tour.howManyKids);
    setDietType(tour.dietType);
    setRoomType(tour.roomType);
    setCity(tour.fromCity);
    setTransportationType(tour.transportationType);
    setActivities(tour.activities);
  }, []);

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
                <span className="font-bold text-nunito_font_family">
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

          <div className="w-full flex bg-white shadow-md mt-5 booking-setting-container">
            <div className="w-[40%] bg-primary text-white flex items-center justify-start p-5 rounded-r-lg booking-setting-header">
              <Icon className="mr-3 text-5xl" icon="lsicon:calendar-outline" />
              <span className="text-nunito_font_family">
                Дата віправлення і тривалість туру
              </span>
            </div>

            <div className="w-full flex items-center justify-start p-2 booking-setting-content-container">
              <div className="w-[80%] p-5 justify-between flex booking-setting-content">
                <div className="flex flex-col">
                  <div>{date.start.toString()}</div>
                  <div>
                    {tour.fromCity.name} - {tour.toCity.name}
                  </div>
                </div>

                <div className="flex-col text-center booking-mobile-none">
                  <div>
                    {tour.duration - 1} ночей / {tour.duration} днів
                  </div>
                  <div className="text-base">
                    {transportationType?.name}{" "}
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
              <div className="booking-mobile-block">
                <div className="flex-col text-center">
                  <div>
                    {tour.duration - 1} ночей / {tour.duration} днів
                  </div>
                  <div className="text-base">
                    {tour.transportationType.name}{" "}
                    <p className="text-primary">( включено ) </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[20%] h-full">
                <ChoosingDateButton date={date} setDate={setDate} tour={tour} />
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
                  <strong>Кімната: </strong> {roomType?.name} -{" "}
                  {(roomType?.price ? roomType.price : 0) + " грн."}
                </span>
                <span>
                  <strong>Харчування: </strong>
                  {dietType?.name} -{" "}
                  {(dietType?.price ? dietType.price : 0) + " грн."}
                </span>
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
            city={tour.fromCity!}
            cost={calculateCost()}
            tourId={tour.id}
            transporationType={tour.transportationType}
          />
        </div>
      </div>
      <ShowActivitiesForTour tour={tour} />
    </>
  );
};

export default TravelBooking;
