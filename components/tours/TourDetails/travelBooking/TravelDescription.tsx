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
import ChoosingDateAndCityButton from "@/components/hotels/hotelDetails/travelBooking/ChoosingDateAndCityButton/ChoosingDateAndCityButton";
import { parseDate } from "@internationalized/date";
import { addDays, differenceInDays, formatISO } from "date-fns";
import { GetCityDto } from "@/AppDtos/Dto/Models/Hotels/get-city-dto";
import { GetTransportationTypeDto } from "@/AppDtos/Dto/Models/TransportationTypes/get-transportation-type-dto";
import BuyButtonActive from "@/components/hotels/hotelDetails/travelBooking/BuyTravel/BuyButtonActive";
import { useTravelBookingContextInjectedHotel } from "@/components/providers/TravelBookingProvider";
import PickActivitiesForTour from "@/components/activities/PickActivitiesForTour";
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
      <div className="p-10 bg-white">
        <div>
          <p className="text-black mb-5 text-[25px]">Опис туру</p>
        </div>
        <div>
          <p>
            Головна ідея наших турів полягає у тому, що до кожного туру ви
            можете обрати будь-який інший готель, що вам запропоновано. Тобто є
            тур з вже включеним готелем, але ви можете змінити його на інший в
            рамках цієї країни, яку ви обрали.
          </p>
          <p className="mt-10">
            Також ще одна наша фішка - це активні відпочинки, які ви зможете
            додати в готелі. Ця послуга виключно від турагентства. Ми пропонуємо
            вам більший вибір готелів та будь-які види активного відпочинку на
            ваш смак. У цьому і полягає сам тур.
          </p>
        </div>
      </div>
      <BookingDescription />
    </>
  );
};

export default TravelDescription;
