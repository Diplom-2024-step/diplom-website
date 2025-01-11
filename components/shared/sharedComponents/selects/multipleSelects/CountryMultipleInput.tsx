import { Chip } from "@nextui-org/react";
import React from "react";
import { Icon } from "@iconify/react";

import { GetCountryDto } from "@/AppDtos/Dto/Models/Countries/get-country-dto";
import { CountryService } from "@/service/crudServices/CountryService";
import SpecificInput from "@/types/components/inputs/SpecificInput";

import SharedMultipleInput from "../shared/SharedMultipleInput";

const CountryMultipleInput: SpecificInput = ({ currectValue, onChange }) => {
  let service = new CountryService();

  const renderFunction = (item: GetCountryDto) => {
    return (
      <div className="flex items-center text-black w-full  font-nunito_font_family font-[500]">
        <Icon className="mr-2" icon={item.icon} />
        <span>{item.name}</span>
      </div>
    );
  };

  const onSelectRenderFunction = (item: GetCountryDto) => {
    return (
      <Chip
        key={item.id}
        className="m-2 bg-primary  items-center p-3 w-full flex-row text-white font-nunito_font_family font-[500]"
      >
        {item.name}
      </Chip>
    );
  };

  return (
    <SharedMultipleInput
      currectValue={currectValue}
      outFiltres={[
        [
          {
            column: "Name",
            searchTerm: "Мальдіви",
            filterType: "Strict",
            negate: false,
          },
          {
            column: "Name",
            searchTerm: "Італія",
            filterType: "Strict",
            negate: false,
          },
          {
            column: "Name",
            searchTerm: "Єгипeт",
            filterType: "Strict",
            negate: false,
          },
          {
            column: "Name",
            searchTerm: "Іспанія",
            filterType: "Strict",
            negate: false,
          },
          {
            column: "Name",
            searchTerm: "Туреччина",
            filterType: "Strict",
            negate: false,
          },
        ],
      ]}
      placeholder="Країни"
      propertyName="countriesIds"
      renderFunction={renderFunction}
      service={service}
      onChange={onChange}
      onSelectRenderFunction={onSelectRenderFunction}
    />
  );
};

export default CountryMultipleInput;
