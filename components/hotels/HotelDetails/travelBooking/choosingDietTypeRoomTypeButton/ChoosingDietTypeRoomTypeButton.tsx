"use client";
import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import React, { useState } from "react";

import { GetDietTypeDto } from "@/AppDtos/Dto/Models/DietTypes/get-diet-type-dto";
import { GetRoomTypeDto } from "@/AppDtos/Dto/Models/RoomTypes/get-room-type-dto";
import DietTypeSingInputeFromCollection from "@/components/shared/sharedComponents/selects/singleInputFromCollections/DietTypeSingInputFromCollection";
import RoomTypeSingleInputFromCollection from "@/components/shared/sharedComponents/selects/singleInputFromCollections/RoomTypeSingleInputFromCollection";

const ChoosingDietTypeRoomTypeButton = ({
  availableDietTypes,
  availableRoomTypes,
  dietType,
  roomType,
  setDietType,
  setRoomType,
}: {
  availableDietTypes: GetDietTypeDto[];
  availableRoomTypes: GetRoomTypeDto[];
  dietType: GetDietTypeDto;
  roomType: GetRoomTypeDto;
  setDietType: (value: GetDietTypeDto) => void;
  setRoomType: (value: GetRoomTypeDto) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [innerDiet, setInnerDietType] = useState(dietType);
  const [innerRoomType, setInnerRoomType] = useState(roomType);

  const OpenChange = (value: boolean) => {
    setDietType(innerDiet);
    setRoomType(innerRoomType);
    setIsOpen(value);
  };

  return (
    <>
      <button
        aria-label="Toggle ChoosingDietTypeRoomTypeButton"
        className="w-full
               h-full flex items-center justify-center relative
               cursor-pointer
               hover:bg-gray-100
              "
        onClick={() => setIsOpen(true)}
      >
        <div className="absolute w-[2px] bg-gray-400 h-full top-0 bottom-0 left-0 z-10 booking-chose-button-left-border" />
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
                <span>Тип кiмнати і харчування</span>
              </ModalHeader>
              <ModalBody>
                <DietTypeSingInputeFromCollection
                  currectValue={innerDiet.id}
                  items={availableDietTypes}
                  onChange={(id: string) => {
                    setInnerDietType(
                      availableDietTypes.filter((value) => value.id == id)[0]
                    );
                  }}
                />
                <RoomTypeSingleInputFromCollection
                  currectValue={innerRoomType.id}
                  items={availableRoomTypes}
                  onChange={(id: string) => {
                    setInnerRoomType(
                      availableRoomTypes.filter((value) => value.id == id)[0]
                    );
                  }}
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
                  onPress={onClose}
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

export default ChoosingDietTypeRoomTypeButton;
