"use client";
import React from "react";

import { GetTourDto } from "@/AppDtos/Dto/Models/Tours/get-tour-dto";
import TravelBooking from "@/components/tours/TourDetails/travelBooking/TravelBooking";
import CountryDescription from "@/components/tours/TourDetails/CountryDescription";
import { useTravelBookingContextInjectedHotel } from "@/components/providers/TravelBookingProvider";

import BookingDescription from "./BookingDescription";

const TravelDescription = ({ tour }: { tour: GetTourDto }) => {
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

  return (
    <>
      <TravelBooking tour={tour} />

      <div className="bg-white rounded-xl">
        <div className="lg:h-[760px] h-[1200px]">
          <CountryDescription countryName={tour.hotel.city.country.name} />
        </div>
        <div className="p-10">
          <div>
            <p className="text-black font-bold mb-5 text-[50px] font-unbounded">
              Опис туру
            </p>
          </div>
          <div>
            <p className="text-[23px] font-nunito_font_family">
              Головна ідея наших турів полягає у тому, що до кожного туру ви
              можете обрати будь-який інший готель, що вам запропоновано. Тобто
              є тур з вже включеним готелем, але ви можете змінити його на інший
              в рамках цієї країни, яку ви обрали.
            </p>
            <p className="mt-10 text-[23px] font-nunito_font_family">
              Також ще одна наша фішка - це активні відпочинки, які ви зможете
              додати в готелі. Ця послуга виключно від турагентства. Ми
              пропонуємо вам більший вибір готелів та будь-які види активного
              відпочинку на ваш смак. У цьому і полягає сам тур.
            </p>
          </div>
        </div>
      </div>
      <BookingDescription />
    </>
  );
};

export default TravelDescription;
