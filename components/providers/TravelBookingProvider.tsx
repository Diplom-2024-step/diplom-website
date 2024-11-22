"use client"
import React, { createContext, useContext, useState } from 'react';
import { parseDate } from "@internationalized/date";
import { DateValue, RangeValue } from '@nextui-org/react';
import { addDays, formatISO } from 'date-fns';
import { GetDietTypeDto } from '@/AppDtos/Dto/Models/DietTypes/get-diet-type-dto';
import { GetRoomTypeDto } from '@/AppDtos/Dto/Models/RoomTypes/get-room-type-dto';
import { GetCityDto } from '@/AppDtos/Dto/Models/Hotels/get-city-dto';
import { GetTransportationTypeDto } from '@/AppDtos/Dto/Models/TransportationTypes/get-transportation-type-dto';
import { GetHotelDto } from '@/AppDtos/Dto/Models/Hotels/get-hotel-dto';

interface TravelBookingContextProps {
    adults: number;
    kids: number;
    dietType?: GetDietTypeDto;
    roomType?: GetRoomTypeDto;
    city: GetCityDto | undefined;
    transportationType: GetTransportationTypeDto | undefined;
    date: RangeValue<DateValue>;
    setAdults: React.Dispatch<React.SetStateAction<number>>;
    setKids: React.Dispatch<React.SetStateAction<number>>;
    setDietType: React.Dispatch<React.SetStateAction<GetDietTypeDto | undefined>>;
    setRoomType: React.Dispatch<React.SetStateAction<GetRoomTypeDto | undefined>>;
    setCity: React.Dispatch<React.SetStateAction<GetCityDto | undefined>>;
    setTransportationType: React.Dispatch<React.SetStateAction<GetTransportationTypeDto | undefined>>;
    setDate: React.Dispatch<React.SetStateAction<RangeValue<DateValue>>>;
}

const TravelBookingContext = createContext<TravelBookingContextProps | undefined>(undefined);


export const useTravelBookingContext = (
        hotel: GetHotelDto
) => {
    const context = useContext(TravelBookingContext);
    if (!context) throw new Error('Component must be wrapped with TravelBookingProvider');
    const { setDietType, setRoomType, dietType, roomType } = context;
    if (dietType === undefined) {
        setDietType(hotel.dietTypes[0])
    }
    if (roomType === undefined) {
        setRoomType(hotel.roomTypes[0])
    }
    return context;
};

export const TravelBookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [adults, setAdults] = useState(1);
    const [kids, setKids] = useState(0);
    const [dietType, setDietType] = useState<GetDietTypeDto>();
    const [roomType, setRoomType] = useState<GetRoomTypeDto>();
    const [city, setCity] = useState<GetCityDto>();
    const [transportationType, setTransportationType] = useState<GetTransportationTypeDto>();
    const currentDate = addDays(new Date(), 5);
    const endDate = addDays(currentDate, 10);
    const [date, setDate] = useState<RangeValue<DateValue>>({
        start: parseDate(formatISO(currentDate, { representation: 'date' })),
        end: parseDate(formatISO(endDate, { representation: 'date' })),
    });

    return (
        <TravelBookingContext.Provider value={{
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
        }}>
            {children}
        </TravelBookingContext.Provider>
    );
};


export default TravelBookingContext;
