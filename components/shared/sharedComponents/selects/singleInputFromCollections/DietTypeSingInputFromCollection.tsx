import React from "react";

import { GetDietTypeDto } from "@/AppDtos/Dto/Models/DietTypes/get-diet-type-dto";
import SpecificInputFromColletion from "@/types/components/inputs/SpecificInputPropsFromColletion";

import SharedSingleInputFromCollection from "../shared/SharedSingleInputFromCollection";

const DietTypeSingInputeFromCollection: SpecificInputFromColletion = ({
  currectValue,
  items,
  onChange,
  placeHolder,
}) => {
  const renderFunction = (item: GetDietTypeDto) => {
    return (
      <span>
        {item.name} - {item.price} грн.{" "}
      </span>
    );
  };

  return (
    <SharedSingleInputFromCollection<GetDietTypeDto>
      currectValue={currectValue}
      items={items as GetDietTypeDto[]}
      placeholder={placeHolder ? placeHolder : "select diet type"}
      renderFunction={renderFunction}
      onChange={onChange}
      onSelectRenderFunction={renderFunction}
    />
  );
};

export default DietTypeSingInputeFromCollection;
