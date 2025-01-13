import React from "react";

import { GetRoomTypeDto } from "@/AppDtos/Dto/Models/RoomTypes/get-room-type-dto";
import SpecificInputFromColletion from "@/types/components/inputs/SpecificInputPropsFromColletion";

import SharedSingleInputFromCollection from "../shared/SharedSingleInputFromCollection";

const RoomTypeSingleInputFromCollection: SpecificInputFromColletion = ({
  currectValue,
  items,
  onChange,
  placeHolder,
}) => {
  const renderFunction = (item: GetRoomTypeDto) => {
    return (
      <span>
        {item.name} - {item.price} грн.{" "}
      </span>
    );
  };

  return (
    <SharedSingleInputFromCollection<GetRoomTypeDto>
      currectValue={currectValue}
      items={items as GetRoomTypeDto[]}
      placeholder={placeHolder ? placeHolder : "select room type"}
      renderFunction={renderFunction}
      onChange={onChange}
      onSelectRenderFunction={renderFunction}
    />
  );
};

export default RoomTypeSingleInputFromCollection;
