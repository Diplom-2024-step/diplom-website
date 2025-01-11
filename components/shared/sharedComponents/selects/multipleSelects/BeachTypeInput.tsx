import { Chip } from "@nextui-org/react";
import React from "react";

import { GetBeachTypeDto } from "@/AppDtos/Dto/Models/BeachTypes/get-beach-type-dto";
import { BeachTypeService } from "@/service/crudServices/BeachTypeService";
import SpecificInput from "@/types/components/inputs/SpecificInput";

import SharedMultipleInput from "../shared/SharedMultipleInput";

const BeachTypeInput: SpecificInput = ({ currectValue, onChange }) => {
  let service = new BeachTypeService();

  const renderFunction = (item: GetBeachTypeDto) => {
    return <span>{item.name}</span>;
  };

  const onSelectRenderFunction = (item: GetBeachTypeDto) => {
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
      placeholder="Пляж"
      propertyName="beachTypesIds"
      renderFunction={renderFunction}
      service={service}
      onChange={onChange}
      onSelectRenderFunction={onSelectRenderFunction}
    />
  );
};

export default BeachTypeInput;
