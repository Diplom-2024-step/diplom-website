"use client";
import { Icon } from "@iconify/react";
import {
  Button,
  DatePicker,
  DateValue,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  RangeValue,
} from "@nextui-org/react";
import { addDays, formatISO } from "date-fns";
import React, { useState } from "react";
import { CalendarDate, parseDate } from "@internationalized/date";
import { GetCityDto } from "@/AppDtos/Dto/Models/Hotels/get-city-dto";
import SelectCityToTravelFrom from "@/components/shared/sharedComponents/selects/singleSelects/SelectCityToTravelFrom";
import { GetTransportationTypeDto } from "@/AppDtos/Dto/Models/TransportationTypes/get-transportation-type-dto";
import SelectTransportationType from "@/components/shared/sharedComponents/selects/singleSelects/SelectTransportationType";
import { GetTourDto } from "@/AppDtos/Dto/Models/Tours/get-tour-dto";

const ChoosingDateButton = ({
  date,
  setDate,
  tour,
}: {
  date: RangeValue<DateValue>;
  setDate: (value: RangeValue<DateValue>) => void;
  tour: GetTourDto;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [innerDate, setInnerDate] = React.useState<RangeValue<DateValue>>(date);

  const OpenChange = (value: boolean) => {
    setDate(innerDate);
    setIsOpen(value);
  };

  const handleDateChange = (newRange: DateValue | null) => {
    if (newRange === null) return;
    const startDate = new Date(newRange.year, newRange.month - 1, newRange.day);
    const newEnd = addDays(startDate, tour.duration);
    const formattedEnd = parseDate(
      formatISO(newEnd, { representation: "date" })
    );

    setInnerDate({
      start: newRange,
      end: formattedEnd,
    });
  };

  return (
    <>
      <div
        className="w-full
               h-full flex items-center justify-center relative
               cursor-pointer
               hover:bg-gray-100
              "
        onClick={() => setIsOpen(true)}
      >
        <Icon
          icon="weui:arrow-outlined"
          className="z-20 rotate-90 text-4xl text-black"
        />
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={OpenChange}
        isKeyboardDismissDisabled={true}
        size="sm"
      >
        <ModalContent className="bg-white text-black">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col items-center gap-1">
                <span>Дати та тривалість</span>
              </ModalHeader>
              <ModalBody>
                <DatePicker
                  minValue={parseDate(
                    formatISO(addDays(new Date(), 4), {
                      representation: "date",
                    })
                  )}
                  value={innerDate.start}
                  onChange={handleDateChange}
                  label="Select Date Range"
                  className="max-w-xs"
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  variant="light"
                  className="bg-transparent text-black  rounded-full   border-1 border-black"
                  onPress={onClose}
                >
                  Скасувати
                </Button>
                <Button
                  color="primary"
                  className="text-white rounded-full"
                  onPress={() => {
                    onClose();
                    setDate({
                      start: innerDate.start,
                      end: innerDate.end,
                    });
                  }}
                >
                  Застосувати
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChoosingDateButton;
