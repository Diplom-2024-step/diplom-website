"use client"
import { Icon } from '@iconify/react';
import { Button, DateRangePicker, DateValue, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, RangeValue } from '@nextui-org/react';
import { addDays, formatISO } from 'date-fns';
import React, { useState } from 'react'
import {parseDate} from "@internationalized/date";
import { GetCityDto } from '@/AppDtos/Dto/Models/Hotels/get-city-dto';
import SelectCityToTravelFrom from '@/components/shared/sharedComponents/selects/singleSelects/SelectCityToTravelFrom';
import { GetTransportationTypeDto } from '@/AppDtos/Dto/Models/TransportationTypes/get-transportation-type-dto';
import SelectTransportationType from '@/components/shared/sharedComponents/selects/singleSelects/SelectTransportationType';

const ChoosingDateAndCityButton = (
  {
    date,
    setDate,
    city,
    setCity,
    transportationType,
    setTransportationType
  }
  :
  {
    date: RangeValue<DateValue>,
    setDate: (value:RangeValue<DateValue>) => void,
    city?:GetCityDto,
    setCity: (value:GetCityDto) => void,
    transportationType?: GetTransportationTypeDto,
    setTransportationType: (item:GetTransportationTypeDto) => void
  }
) => {

  const [isOpen, setIsOpen] = useState(false);
  const [innerCity, setInnerCity] = useState<GetCityDto>(city as any);
  const [innerTransportation, setInnerTransportation] = useState<GetTransportationTypeDto>(transportationType as any);
  const [innerDate, setInnerDate] = React.useState<RangeValue<DateValue>>(date);



  const OpenChange = (value: boolean) => {
    setDate(innerDate);
    setCity(innerCity);
    setTransportationType(innerTransportation);
    setIsOpen(value)

  }


  return (
    <>
      <div className='w-full
               h-full flex items-center justify-center relative
               cursor-pointer
               hover:bg-gray-100
              '
        onClick={() => setIsOpen(true)}
      >
        <div className='absolute w-[2px] bg-gray-400 h-full top-0 bottom-0 left-0 z-10'></div>
        <Icon
          icon="weui:arrow-outlined"
          className='z-20 rotate-90 text-4xl text-black'
        />
      </div>
      <Modal isOpen={isOpen} onOpenChange={OpenChange} isKeyboardDismissDisabled={true} size='sm'>
                <ModalContent className='bg-white text-black'>
                    {(onClose) => (
                        <>
                            <ModalHeader className='flex flex-col items-center gap-1'>
                                <span>Дати та тривалість</span>
                            </ModalHeader>
              <ModalBody>
                <DateRangePicker
                  minValue={parseDate(formatISO(addDays(new Date(), 4), { representation: 'date' }))}
                  value={innerDate}
                  onChange={setInnerDate}
                  label="Дати та тривалість"
                  className="max-w-xs"
                />
                <SelectCityToTravelFrom
                city={innerCity}                
                setCity={setInnerCity}
                placeholder='Звідки'
                />

                <SelectTransportationType
                  currectValue={innerTransportation} setItem={setInnerTransportation }                
                />
                
              </ModalBody>
              <ModalFooter>
                <Button  variant="light" className='bg-transparent text-black  rounded-full   border-1 border-black' onPress={onClose}>
                    Скасувати
                  </Button>
                  <Button color="primary" className='text-white rounded-full' onPress={onClose}>
                    Застосувати
                  </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ChoosingDateAndCityButton

