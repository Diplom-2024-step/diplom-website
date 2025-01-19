"use client";
import { LoadingState, SortDescriptor } from "@react-types/shared";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { Link, Select, SelectedItems, SelectItem } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";

import { GetCountryDto } from "@/AppDtos/Dto/Models/Countries/get-country-dto";
import { FilterDto } from "@/AppDtos/Shared/filter-dto";
import { ReturnPageDto } from "@/AppDtos/Shared/return-page-dto";
import useDebounceState from "@/hooks/useDebounceState";
import useGetPageOfItems from "@/hooks/useGetPageOfItems";
import { CountryService } from "@/service/crudServices/CountryService";

import LoadingCircle from "../../skeletons/LoadingCircle";

const SelectCountryForHotels = () => {
  const router = useRouter();
  const path = usePathname();

  const [perPage, setPerPage] = useState("50");
  const page = "1";

  const service = new CountryService();

  const [perPageState, setPerPageState] = useDebounceState(
    perPage,
    setPerPage,
    500
  );
  const [items, setItems] = useState<ReturnPageDto<GetCountryDto>>();
  const [loadingState, setLoadingState] = useState<LoadingState>("loading");
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>();
  const [error, setError] = useState<string>();
  const [perPageError, setPerPageError] = useState<string>();
  const [filters, setFilters] = useState<FilterDto[][]>([
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
  ]);

  const loadItems = useGetPageOfItems<GetCountryDto, CountryService>(
    service,
    "50",
    "1",
    sortDescriptor,
    setLoadingState,
    setError,
    setPerPage,
    setItems,
    "success",
    filters
  );

  useEffect(() => {
    setFilters(filters);
    loadItems().then();
  }, [loadItems]);

  const renderFunction = (item: GetCountryDto) => {
    return (
      <Link href={`/${item.id}/hotels`}>
        <a href={`/${item.id}/hotels`}>
          <div className="flex items-center text-black w-full">
            <Icon className="mr-2" icon={item.icon} />
            <span className="text-[15px]">{item.name}</span>
          </div>
        </a>
      </Link>
    );
  };

  return (
    <div className="w-full">
      {error === undefined ? (
        loadingState === "loading" ? (
          <LoadingCircle />
        ) : (
          <Select
            items={items?.models}
            placeholder={"Країни"}
            renderValue={(items: SelectedItems<GetCountryDto>) => {
              return items.map((item) =>
                renderFunction(item.data as GetCountryDto)
              );
            }}
            selectedKeys={[""]}
          >
            {(item) => (
              <SelectItem key={item.id}>
                {renderFunction(item as GetCountryDto)}
              </SelectItem>
            )}
          </Select>
        )
      ) : (
        <p className="text-red-700">{error}</p>
      )}
    </div>
  );
};

export default SelectCountryForHotels;
