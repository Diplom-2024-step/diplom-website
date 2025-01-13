import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

import "../../assets/fonts-styles/font.css";
import NumberInput from "./sharedComponents/NumberInput";

interface TravelerCardProps {
  adults: number;
  children: number;
  setAdults: React.Dispatch<React.SetStateAction<number>>;
  setChildren: React.Dispatch<React.SetStateAction<number>>;
  onSave: () => void;
  onClose: () => void;
}

const TravelerCard: React.FC<TravelerCardProps> = ({
  adults,
  children,
  setAdults,
  setChildren,
  onSave,
  onClose,
}) => {
  const handleAdultChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, parseInt(e.target.value) || 1); // Минимум 1 взрослый

    setAdults(value);
  };

  const handleChildrenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, parseInt(e.target.value) || 0); // Минимум 0 детей

    setChildren(value);
  };

  return (
    <div
      className="absolute -left-5 top-20 z-60 w-full"
      style={{ minWidth: "300px", maxWidth: "500px" }}
    >
      <Card
        className=" w-full mx-auto bg-white text-[#171717]"
        radius="lg"
        shadow="md"
      >
        <CardHeader className="flex justify-left items-left">
          <h3
            className="text-md font-semibold pl-3 pt-2"
            style={{ fontFamily: "Unbounded, sans-serif" }}
          >
            Мандрівники
          </h3>
        </CardHeader>

        <CardBody className="flex flex-row space-y-4 shadow-lg p-5">
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
        </CardBody>
      </Card>
    </div>
  );
};

export default TravelerCard;
