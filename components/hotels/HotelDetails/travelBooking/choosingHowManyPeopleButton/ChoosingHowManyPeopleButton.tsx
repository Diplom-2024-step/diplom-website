"use client";
import { Icon } from "@iconify/react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React, { useState } from "react";

import NumberInput from "@/components/shared/sharedComponents/NumberInput";

const ChoosingHowManyPeopleButton = ({
  adults,
  kids,
  setAdluts,
  setChildren,
}: {
  adults: number;
  kids: number;
  setAdluts: (value: number) => void;
  setChildren: (value: number) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [innerAdults, setInnerAdults] = useState(adults);
  const [innerChildren, setInnerChildren] = useState(kids);

  const OpenChange = (value: boolean) => {
    setAdluts(innerAdults);
    setChildren(innerChildren);
    setIsOpen(value);
  };

  return (
    <>
      <button
        aria-label="Toggle ChoosingHowManyPeopleButton"
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
                <span>Туристи</span>
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col items-center justify-center w-full">
                  <NumberInput
                    helperText=""
                    label="Кількість дорослих:"
                    max={6}
                    min={1}
                    setValue={setInnerAdults}
                    value={innerAdults}
                  />
                  <NumberInput
                    helperText=""
                    label="Кількість дітей:"
                    max={6}
                    min={0}
                    setValue={setInnerChildren}
                    value={innerChildren}
                  />
                </div>
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

export default ChoosingHowManyPeopleButton;
