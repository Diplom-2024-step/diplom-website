"use client";
import { GetTourDto } from "@/AppDtos/Dto/Models/Tours/get-tour-dto";
import TravelBooking from "@/components/tours/TourDetails/travelBooking/TravelBooking";
import CountryDescription from "@/components/tours/TourDetails/CountryDescription";
import React, { useEffect, useState } from "react";
import { useTravelBookingContextInjectedHotel } from "@/components/providers/TravelBookingProvider";
import BookingDescription from "./BookingDescription";
import SpainBack from "@/components/tours/TourDetails/CountryDescriptionImages/spainBack.webp";

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
        <div className="h-[740px]">
          <CountryDescription countryName={tour.hotel.city.country.name} />
        </div>
        <div className="p-10">
          <div>
            <p className="text-black font-bold mb-5 text-[50px] text-unbounded">
              Опис туру
            </p>
          </div>
          <div>
            <p className="text-[23px] text-nunito_font_family">
              Головна ідея наших турів полягає у тому, що до кожного туру ви
              можете обрати будь-який інший готель, що вам запропоновано. Тобто
              є тур з вже включеним готелем, але ви можете змінити його на інший
              в рамках цієї країни, яку ви обрали.
            </p>
            <p className="mt-10 text-[23px] text-nunito_font_family">
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
