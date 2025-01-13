"use client";
import { Icon } from "@iconify/react";
import {
  Select,
  SelectedItems,
  SelectItem,
  SharedSelection,
} from "@nextui-org/react";
import { LoadingState, SortDescriptor } from "@react-types/shared";
import { useEffect, useState } from "react";

import { GetCityDto } from "@/AppDtos/Dto/Models/Hotels/get-city-dto";
import { FilterDto } from "@/AppDtos/Shared/filter-dto";
import { ReturnPageDto } from "@/AppDtos/Shared/return-page-dto";
import LoadingCircle from "@/components/shared/skeletons/LoadingCircle";
import useDebounceState from "@/hooks/useDebounceState";
import useGetPageOfItems from "@/hooks/useGetPageOfItems";
import { CityService } from "@/service/crudServices/CityService";

const SelectCityFromCountry = ({
  countryId,
  cityId,
  setCity,
}: {
  countryId: string;
  cityId: string;
  setCity: (value: string) => void;
}) => {
  const renderFunction = (item: GetCityDto) => {
    return (
      <div className="flex items-center">
        <Icon className="mr-2" icon={item.country.icon} />
        <span>{item.name}</span>
      </div>
    );
  };

  const [perPage, setPerPage] = useState("50");
  const page = "1";

  const service = new CityService();

  const [perPageState, setPerPageState] = useDebounceState(
    perPage,
    setPerPage,
    500
  );
  const [items, setItems] = useState<ReturnPageDto<GetCityDto>>();
  const [loadingState, setLoadingState] = useState<LoadingState>("loading");
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>();
  const [error, setError] = useState<string>();
  const [perPageError, setPerPageError] = useState<string>();
  const [filters, setFilters] = useState<FilterDto[][]>([
    [
      {
        column: "Country.Id",
        searchTerm: countryId,
        filterType: "Strict",
        negate: false,
      },
    ],
  ]);

  const loadItems = useGetPageOfItems<GetCityDto, CityService>(
    service,
    "50",
    "1",
    sortDescriptor,
    setLoadingState,
    setError,
    setPerPage,
    setItems,
    status,
    filters
  );

  useEffect(() => {
    setFilters([
      [
        {
          column: "Country.Id",
          searchTerm: countryId,
          filterType: "Strict",
          negate: false,
        },
      ],
    ]);
    loadItems().then();
  }, [loadItems, countryId]);

  const innerOnSelectionChanged = (keys: SharedSelection) => {
    setCity(keys.currentKey as string);
  };

  return (
    <>
      {error === undefined ? (
        loadingState === "loading" ? (
          <LoadingCircle />
        ) : (
          <Select
            items={items?.models}
            label={"select city"}
            placeholder={"select city"}
            renderValue={(items: SelectedItems<GetCityDto>) => {
              return items.map((item) =>
                renderFunction(item.data as GetCityDto)
              );
            }}
            required={true}
            selectedKeys={[cityId]}
            onSelectionChange={innerOnSelectionChanged}
          >
            {(item) => (
              <SelectItem key={item.id}>
                {renderFunction(item as GetCityDto)}
              </SelectItem>
            )}
          </Select>
        )
      ) : (
        <p className="text-red-700">{error}</p>
      )}
    </>
  );
};

export default SelectCityFromCountry;
