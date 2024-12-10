"use client"
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { DateRangePicker, DateValue, Divider, Input, Popover, PopoverContent, PopoverTrigger, RangeValue, Select } from '@nextui-org/react';
import React, { useState } from 'react'
import TravelerCard from '../shared/TravelerCard';
import { parseDate } from "@internationalized/date";
import SelectCityToTravelFrom from '../shared/sharedComponents/selects/singleSelects/SelectCityToTravelFrom';
import { GetCityDto } from '@/AppDtos/Dto/Models/Hotels/get-city-dto';
import SelectCityToTravelTo from '../shared/sharedComponents/selects/singleSelects/SelectCityToTravelTo';
import NumberInput from '../shared/sharedComponents/NumberInput';
import Link from 'next/link';
import { useSetSearchPropsLikeDict } from '@/hooks/useSetSearchParamsLikeDict';
import { useRouter } from 'next/navigation';
import { addDays, differenceInDays, formatISO } from 'date-fns';

const FindTourCard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);

  const [fromCity, setFromCity] =  useState<GetCityDto>();

  const [toCity, setToCity] =  useState<GetCityDto>();

  const router = useRouter();

const currentDate = addDays(new Date(), 5);
    const endDate = addDays(currentDate, 7);
    const [date, setDate] = useState<RangeValue<DateValue>>({
        start: parseDate(formatISO(currentDate, { representation: 'date' })),
        end: parseDate(formatISO(endDate, { representation: 'date' })),
    });







  return (
      <Card
          classNames={{
            base: "bg-transparent shadow-none"
          }}
          isBlurred={false}
          isFooterBlurred={false}
          radius='none'
          className="rounded-tl-none rounded-tr-[20px] rounded-br-[20px] rounded-bl-[30px] overflow-visible">
          <div className="flex items-center justify-center bg-white text-[#161616] w-44 md:w-60 pt-2 md:pt-3 pr-10 pl-10 font-bold rounded-tl-[15px] md:rounded-tl-[20px] rounded-tr-[15px] md:rounded-tr-[20px] shadow-lg">
            Тури
          </div>
          <CardHeader className="flex flex-wrap md:flex-nowrap flex-col md:flex-row justify-between  rounded-tl-none rounded-tr-[30px] md:rounded-tr-[50px] rounded-br-[30px] md:rounded-br-[50px] rounded-bl-[30px] md:rounded-bl-[50px] p-7 gap-5 bg-white text-[#161616]  overflow-visible">
            
            <div className="flex-1 w-full">
              <p className='mb-2'>Звідки прямуєш</p>
              <SelectCityToTravelFrom 
              city={fromCity}
              setCity={setFromCity}              
              placeholder='Звитки'
              />
            </div>




            <div className="flex-1 w-full">
              <p className='mb-2'>Куди прямуєш</p>
              <SelectCityToTravelTo 
              city={toCity}
              setCity={setToCity}              
              placeholder='Звитки'
              />
            </div>

            


            <div className="flex flex-row w-full gap-4">
              <div className="flex-1">
                <p className='mb-2'>Дата</p>
                <div className="flex w-full flex-wrap md:flex-nowrap  mb-6 md:mb-0 gap-4">
                  <DateRangePicker
                    className="text-[#171717]"
                    radius='full'
                    value={date}
                    onChange={setDate}
                    classNames={{ 
                      input: "text-[#171717]",
                      popoverContent: "bg-blue-100 dark:bg-blue-900",
                      calendar: "bg-white dark:bg-gray-800",
                    }}
                  />
                </div>
              </div>

          


          <div className="relative flex-1">
            <p className='mb-2'>Мандрівники</p>
            <Popover placement="bottom" showArrow={true}>
              <PopoverTrigger>
                <Button
                  radius="full"
                  className="text-[#171717] bg-gray-100"
                >
                  {`${adults} мандрівників, ${children} дітей`}
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                    <h3
                      style={{ fontFamily: 'Unbounded, sans-serif' }}
                      className="text-md font-semibold pl-3 pt-2">Мандрівники</h3>

                    <div className="flex justify-between space-x-3">
                      <NumberInput
                        value={adults}
                        setValue={setAdults}
                        min={1}
                        max={6}
                        label='Дорослих'
                      />

                      <NumberInput
                        value={children}
                        setValue={setChildren}
                        min={0}
                        max={6}
                        label='Дітей'
                      />

                    </div>
                    </PopoverContent>

               </Popover>


          </div>
        </div>
        <div className="flex items-center justify-center mt-4 md:mt-0 md:ml-2 md:mr-3">
          <Button
            className="rounded-full text-white bg-[#5DB3C1] font-medium py-6 px-4"
            onClick={() => {
              
                const searchParamsDict: Record<string, string | undefined> = {
                  adults: adults.toString(),
                  kids: children.toString(),
                };
                
                
                let duration: string | undefined = differenceInDays(date.end.toString(), date.start.toString()).toString()


                // if (!children && !adults && !fromCity && !toCity && )

                router.push('/tours?' 
                  + (adults ? "adults="+adults.toString() : '')
                  + (children ? "&kids="+children.toString() : '')
                  + (toCity ? "&toCity="+toCity.id.toString() : '')
                  + (fromCity ? "&fromCity="+fromCity.id.toString() : '')
                  + (duration ? "&duration="+duration : '')
                
                )




            }}    
          >
            Шукати
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
}

export default FindTourCard