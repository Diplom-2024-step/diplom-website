"use client";
import { Button } from "@nextui-org/button";
import { Card, CardHeader } from "@nextui-org/card";
import {
  DateRangePicker,
  DateValue,
  Popover,
  PopoverContent,
  PopoverTrigger,
  RangeValue,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { parseDate } from "@internationalized/date";
import { useRouter } from "next/navigation";
import { addDays, differenceInDays, formatISO } from "date-fns";

import { useSetSearchPropsLikeDict } from "@/hooks/useSetSearchParamsLikeDict";
import { GetCityDto } from "@/AppDtos/Dto/Models/Hotels/get-city-dto";
import useSearchParam from "@/hooks/useSearchParam";

import NumberInput from "../shared/sharedComponents/NumberInput";
import SelectCityToTravelTo from "../shared/sharedComponents/selects/singleSelects/SelectCityToTravelTo";
import SelectCityToTravelFrom from "../shared/sharedComponents/selects/singleSelects/SelectCityToTravelFrom";

const FindTourCard = () => {
  const setSearchParams = useSetSearchPropsLikeDict();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [lowestPrice, setLowestPrice] = useSearchParam("lowestPrice");
  const [heightPrice, setHeightPrice] = useSearchParam("heightPrice");
  const [stars, setStars] = useSearchParam("st");
  const [beachTypesIds, setBeachTypesIds] = useSearchParam("beachTypes");
  const [dietTypesIds, setDietTypesIds] = useSearchParam("dietTypes");
  const [roomTypesIds, setRoomTypesIds] = useSearchParam("roomTypes");
  const [countriesIds, setCountriesIds] = useSearchParam("countriesIds");
  const [inHotelsIds, setInHotelsIds] = useSearchParam("inHotelsIds");

  const [adultsFromRouter, setAdultsFromRouter] = useSearchParam("adults");
  const [childrenFromRouter, setChildrenFromRouter] = useSearchParam("kids");

  const [adults, setAdults] = useState<number>(
    adultsFromRouter ? parseInt(adultsFromRouter) : 1
  );
  const [children, setChildren] = useState<number>(
    childrenFromRouter ? parseInt(childrenFromRouter) : 0
  );

  const [toCityIdFromRoute, setToCityIdFromRoute] = useSearchParam("toCity");
  const [fromCityIdFromRoute, setFromCityIdFromRoute] =
    useSearchParam("fromCity");

  const [durationFromRouter, setDurationFromRouter] =
    useSearchParam("duration");

  const [toCity, setToCity] = useState<GetCityDto>({
    id: toCityIdFromRoute,
  } as any);
  const [fromCity, setFromCity] = useState<GetCityDto>({
    id: fromCityIdFromRoute,
  } as any);

  const [toCityId, setToCityId] = useState(toCityIdFromRoute);
  const [fromCityId, setFromCityId] = useState(fromCityIdFromRoute);

  const router = useRouter();

  const currentDate = addDays(new Date(), 0);
  const endDate = addDays(
    currentDate,
    durationFromRouter ? parseInt(durationFromRouter) : 7
  );
  const [date, setDate] = useState<RangeValue<DateValue>>({
    start: parseDate(formatISO(currentDate, { representation: "date" })),
    end: parseDate(formatISO(endDate, { representation: "date" })),
  });

  useEffect(() => {
    setToCity({
      id: toCityIdFromRoute,
    } as any);
  }, [toCityIdFromRoute]);

  useEffect(() => {
    setFromCity({
      id: fromCityIdFromRoute,
    } as any);
  }, [fromCityIdFromRoute]);

  useEffect(() => {
    setToCityId(toCity?.id);
  }, [toCity]);

  useEffect(() => {
    setFromCityId(fromCity?.id);
  }, [fromCity]);

  useEffect(() => {
    setAdults(adultsFromRouter ? parseInt(adultsFromRouter) : 1);
  }, [adultsFromRouter]);

  useEffect(() => {
    setChildren(childrenFromRouter ? parseInt(childrenFromRouter) : 0);
  }, [childrenFromRouter]);

  return (
    <Card
      className="rounded-tl-none rounded-tr-[20px] rounded-br-[20px] rounded-bl-[30px]  mt-[30px] lg:w-auto w-full"
      classNames={{
        base: "bg-transparent shadow-none",
      }}
      isBlurred={false}
      isFooterBlurred={false}
      radius="none"
    >
      <div className="flex items-center justify-center bg-white text-[#161616] w-44 md:w-60 pt-2 md:pt-3 pr-10 pl-10 font-bold rounded-tl-[15px] md:rounded-tl-[20px] rounded-tr-[15px] md:rounded-tr-[20px] shadow-lg">
        Тури
      </div>
      <CardHeader className="flex flex-wrap md:flex-nowrap flex-col md:flex-row justify-between  rounded-tl-none rounded-tr-[30px] md:rounded-tr-[50px] rounded-br-[30px] md:rounded-br-[50px] rounded-bl-[30px] md:rounded-bl-[50px] p-7 gap-5 bg-white text-[#161616]  overflow-visible">
        <div className="flex-1 w-full">
          <p className="mb-2">Звідки прямуєш</p>
          <SelectCityToTravelFrom
            city={fromCity}
            placeholder="Звитки"
            setCity={setFromCity}
          />
        </div>

        <div className="flex-1 w-full">
          <p className="mb-2">Куди прямуєш</p>
          <SelectCityToTravelTo
            city={toCity}
            placeholder="Куди"
            setCity={setToCity}
          />
        </div>

        <div className="md:flex md:flex-row w-full gap-4">
          <div className="flex-1">
            <p className="mb-2">Тривалість</p>
            <div className="flex w-full flex-wrap md:flex-nowrap  mb-6 md:mb-0 gap-4">
              <DateRangePicker
                className="text-[#171717]"
                classNames={{
                  input: "text-[#171717]",
                  popoverContent: "bg-blue-100 dark:bg-blue-900",
                  calendar: "bg-white dark:bg-gray-800",
                }}
                radius="full"
                value={date}
                onChange={(e) => setDate(e!)}
              />
            </div>
          </div>

          <div className="relative flex-1">
            <p className="mb-2">Мандрівники</p>
            <Popover placement="bottom" showArrow={true}>
              <PopoverTrigger>
                <Button
                  className="text-[#171717] w-full bg-gray-100"
                  radius="full"
                >
                  {`${adults} мандрівників, ${children} дітей`}
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <h3
                  className="text-md font-semibold pl-3 pt-2"
                  style={{ fontFamily: "Unbounded, sans-serif" }}
                >
                  Мандрівники
                </h3>

                <div className="flex justify-between space-x-3">
                  <NumberInput
                    label="Дорослих"
                    max={6}
                    min={1}
                    setValue={setAdults}
                    value={adults}
                  />

                  <NumberInput
                    label="Дітей"
                    max={6}
                    min={0}
                    setValue={setChildren}
                    value={children}
                  />
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="flex items-center justify-center lg:mt-4 md:mt-0 md:ml-2 md:mr-3">
          <Button
            className="rounded-full text-white bg-[#5DB3C1] font-medium py-6 px-4"
            onClick={() => {
              let duration: string | undefined = differenceInDays(
                date.end.toString(),
                date.start.toString()
              ).toString();

              const queryParameters = [];

              if (adults) {
                queryParameters.push(`adults=${adults}`);
              }

              if (children) {
                queryParameters.push(`kids=${children}`);
              }

              if (toCityId) {
                queryParameters.push(`toCity=${toCityId}`);
              }

              if (fromCityId) {
                queryParameters.push(`fromCity=${fromCityId}`);
              }

              // Add new parameters using the same pattern
              if (lowestPrice !== undefined && lowestPrice !== null) {
                queryParameters.push(`lowestPrice=${lowestPrice}`);
              }

              if (heightPrice !== undefined && heightPrice !== null) {
                queryParameters.push(`heightPrice=${heightPrice}`);
              }

              if (stars !== undefined && stars !== null) {
                queryParameters.push(`st=${stars}`);
              }

              if (beachTypesIds !== undefined && beachTypesIds !== null) {
                queryParameters.push(`beachTypes=${beachTypesIds}`);
              }

              if (dietTypesIds !== undefined && dietTypesIds !== null) {
                queryParameters.push(`dietTypes=${dietTypesIds}`);
              }

              if (roomTypesIds !== undefined && roomTypesIds !== null) {
                queryParameters.push(`roomTypes=${roomTypesIds}`);
              }

              if (countriesIds !== undefined && countriesIds !== null) {
                queryParameters.push(`countriesIds=${countriesIds}`);
              }

              if (inHotelsIds !== undefined && inHotelsIds !== null) {
                queryParameters.push(`inHotelsIds=${inHotelsIds}`);
              }

              queryParameters.push(`duration=${duration}`);

              const queryString = queryParameters.join("&");

              router.push(`/tours?${queryString}`);
            }}
          >
            Шукати
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};

export default FindTourCard;
