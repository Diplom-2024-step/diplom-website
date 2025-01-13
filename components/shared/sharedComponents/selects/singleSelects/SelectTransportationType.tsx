import React from "react";

import { TransportationTypeService } from "@/service/crudServices/TransportationTypeService";
import { GetTransportationTypeDto } from "@/AppDtos/Dto/Models/TransportationTypes/get-transportation-type-dto";

import SharedSingleInput from "../shared/SharedSingleInput";

const SelectTransportationType = ({
  currectValue,
  setItem,
}: {
  currectValue: GetTransportationTypeDto;
  setItem: (item: GetTransportationTypeDto) => void;
}) => {
  let transportationTypeService = new TransportationTypeService();

  const renderFunction = (item: GetTransportationTypeDto) => {
    return (
      <div className="flex items-center">
        <span>{item.name}</span>
      </div>
    );
  };

  return (
    <SharedSingleInput
      currectValue={currectValue}
      placeholder="Виберіть вид транспорту"
      renderFunction={renderFunction}
      service={transportationTypeService}
      setItem={setItem}
      onSelectRenderFunction={renderFunction}
    />
  );
};

export default SelectTransportationType;
