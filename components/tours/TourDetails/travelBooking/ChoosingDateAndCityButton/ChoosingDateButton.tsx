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
import { parseDate } from "@internationalized/date";

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

    // Применяем изменения для внешнего состояния
  };

  return (
    <>
      <button
        className="w-full
               h-full flex items-center justify-center relative
               cursor-pointer
               hover:bg-gray-100
              "
        onClick={() => setIsOpen(true)}
      >
        <div className="hidden lg:flex lg:flex-col absolute w-[2px] bg-gray-400 h-full top-0 bottom-0 left-0 z-10" />
        <Icon
          className="z-20 rotate-90 text-4xl text-black"
          icon="weui:arrow-outlined"
        />
      </button>
      <Modal
        isKeyboardDismissDisabled={true}
        isOpen={isOpen}
        size="sm"
        onOpenChange={OpenChange}
      >
        <ModalContent className="bg-white text-black">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col items-center gap-1">
                <span>Дати та тривалість</span>
              </ModalHeader>
              <ModalBody>
                <DatePicker
                  className="max-w-xs"
                  label="Select Date Range"
                  minValue={parseDate(
                    formatISO(addDays(new Date(), 4), {
                      representation: "date",
                    })
                  )}
                  value={innerDate.start}
                  onChange={handleDateChange}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-transparent text-black  rounded-full   border-1 border-black"
                  variant="light"
                  onPress={onClose}
                >
                  Скасувати
                </Button>
                <Button
                  className="text-white rounded-full"
                  color="primary"
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
