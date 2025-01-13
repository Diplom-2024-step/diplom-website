"use client";
import { Chip } from "@nextui-org/react";
import React from "react";

import { GetRoomTypeDto } from "@/AppDtos/Dto/Models/RoomTypes/get-room-type-dto";
import { RoomTypeService } from "@/service/crudServices/RoomTypeService";
import SpecificInput from "@/types/components/inputs/SpecificInput";

import SharedMultipleInput from "../shared/SharedMultipleInput";

const RoomTypeInput: SpecificInput = ({ currectValue, onChange }) => {
  let service = new RoomTypeService();

  const renderFunction = (item: GetRoomTypeDto) => {
    return <span>{item.name}</span>;
  };

  const onSelectRenderFunction = (item: GetRoomTypeDto) => {
    return (
      <Chip
        key={item.id}
        className="m-2 bg-primary text-white font-nunito_font_family font-[500]"
      >
        {item.name}
      </Chip>
    );
  };

  return (
    <SharedMultipleInput
      currectValue={currectValue}
      placeholder="Тип кімнати"
      propertyName="RoomTypeIds"
      renderFunction={renderFunction}
      service={service}
      onChange={onChange}
      onSelectRenderFunction={onSelectRenderFunction}
    />
  );
};

export default RoomTypeInput;
