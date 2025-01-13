"use client";
import React, { createContext, useContext, useState } from "react";
import { parseDate } from "@internationalized/date";
import { DateValue, RangeValue } from "@nextui-org/react";
import { addDays, formatISO } from "date-fns";

import { GetDietTypeDto } from "@/AppDtos/Dto/Models/DietTypes/get-diet-type-dto";
import { GetRoomTypeDto } from "@/AppDtos/Dto/Models/RoomTypes/get-room-type-dto";
import { GetCityDto } from "@/AppDtos/Dto/Models/Hotels/get-city-dto";
import { GetTransportationTypeDto } from "@/AppDtos/Dto/Models/TransportationTypes/get-transportation-type-dto";
import { GetHotelDto } from "@/AppDtos/Dto/Models/Hotels/get-hotel-dto";
import { GetActivityDto } from "@/AppDtos/Dto/Models/Activities/get-activity-dto";

interface TravelBookingContextProps {
  adults: number;
  kids: number;
  dietType?: GetDietTypeDto;
  roomType?: GetRoomTypeDto;
  city: GetCityDto | undefined;
  transportationType: GetTransportationTypeDto | undefined;
  date: RangeValue<DateValue>;
  activities: GetActivityDto[];
  hotel?: GetHotelDto;
  setAdults: React.Dispatch<React.SetStateAction<number>>;
  setHotel: React.Dispatch<React.SetStateAction<GetHotelDto | undefined>>;
  setKids: React.Dispatch<React.SetStateAction<number>>;
  setDietType: React.Dispatch<React.SetStateAction<GetDietTypeDto | undefined>>;
  setRoomType: React.Dispatch<React.SetStateAction<GetRoomTypeDto | undefined>>;
  setCity: React.Dispatch<React.SetStateAction<GetCityDto | undefined>>;
  setTransportationType: React.Dispatch<
    React.SetStateAction<GetTransportationTypeDto | undefined>
  >;
  setDate: React.Dispatch<React.SetStateAction<RangeValue<DateValue>>>;
  setActivities: React.Dispatch<React.SetStateAction<GetActivityDto[]>>;
  setSelectActivityCard: (e: GetActivityDto) => void;
}

const TravelBookingContext = createContext<
  TravelBookingContextProps | undefined
>(undefined);

export const useTravelBookingContextInjectedHotel = (
  innerHotel: GetHotelDto
) => {
  const context = useContext(TravelBookingContext);

  if (!context)
    throw new Error("Component must be wrapped with TravelBookingProvider");
  const { setDietType, setRoomType, dietType, roomType, hotel, setHotel } =
    context;

  if (dietType === undefined) {
    setDietType(innerHotel.dietTypes[0]);
  }
  if (roomType === undefined) {
    setRoomType(innerHotel.roomTypes[0]);
  }

  if (hotel === undefined) {
    setHotel(innerHotel);
  }

  return context;
};

export const useTravelBookingContext = () => {
  const context = useContext(TravelBookingContext);

  if (!context)
    throw new Error("Component must be wrapped with TravelBookingProvider");

  return context;
};

export const TravelBookingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);
  const [dietType, setDietType] = useState<GetDietTypeDto>();
  const [roomType, setRoomType] = useState<GetRoomTypeDto>();
  const [hotel, setHotel] = useState<GetHotelDto>();
  const [activities, setActivities] = useState<GetActivityDto[]>([]);

  const [city, setCity] = useState<GetCityDto>();
  const [transportationType, setTransportationType] =
    useState<GetTransportationTypeDto>();
  const currentDate = addDays(new Date(), 5);
  const endDate = addDays(currentDate, 10);
  const [date, setDate] = useState<RangeValue<DateValue>>({
    start: parseDate(formatISO(currentDate, { representation: "date" })),
    end: parseDate(formatISO(endDate, { representation: "date" })),
  });

  const setSelectActivityCard = (activity: GetActivityDto) => {
    if (activities.findIndex((e) => e.id === activity.id) === -1) {
      setActivities([...activities, activity]);
    } else {
      setActivities(activities.filter((value) => value.id !== activity.id));
    }
  };

  return (
    <TravelBookingContext.Provider
      value={{
        adults,
        kids,
        dietType,
        roomType,
        city,
        transportationType,
        date,
        activities,
        hotel,
        setAdults,
        setKids,
        setDietType,
        setRoomType,
        setCity,
        setTransportationType,
        setDate,
        setActivities,
        setSelectActivityCard,
        setHotel,
      }}
    >
      {children}
    </TravelBookingContext.Provider>
  );
};

export default TravelBookingContext;
