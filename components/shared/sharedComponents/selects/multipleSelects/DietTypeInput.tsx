import { Chip } from "@nextui-org/react";
import React from "react";

import { GetDietTypeDto } from "@/AppDtos/Dto/Models/DietTypes/get-diet-type-dto";
import { DietTypeService } from "@/service/crudServices/DietTypeService";
import SpecificInput from "@/types/components/inputs/SpecificInput";

import SharedMultipleInput from "../shared/SharedMultipleInput";

const DietTypeInput: SpecificInput = ({ currectValue, onChange }) => {
  let service = new DietTypeService();

  const renderFunction = (item: GetDietTypeDto) => {
    return <span>{item.name}</span>;
  };

  const onSelectRenderFunction = (item: GetDietTypeDto) => {
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
      placeholder="Харчування"
      propertyName="dietTypeIds"
      renderFunction={renderFunction}
      service={service}
      onChange={onChange}
      onSelectRenderFunction={onSelectRenderFunction}
    />
  );
};

export default DietTypeInput;
