"use client"
import { GetCityDto } from '@/AppDtos/Dto/Models/Hotels/get-city-dto';
import { FilterDto } from '@/AppDtos/Shared/filter-dto';
import { ReturnPageDto } from '@/AppDtos/Shared/return-page-dto';
import LoadingCircle from '@/components/shared/skeletons/LoadingCircle';
import useDebounceState from '@/hooks/useDebounceState';
import useGetPageOfItems from '@/hooks/useGetPageOfItems';
import { CityService } from '@/service/crudServices/CityService';
import { Icon } from '@iconify/react';
import { Select, SelectedItems, SelectItem, SharedSelection } from '@nextui-org/react';
import { LoadingState, SortDescriptor } from "@react-types/shared";
import React, { useEffect, useState } from 'react'

const SelectCityToTravelFrom = (
{
    city,
    setCity
}:{
     city?: GetCityDto,
        setCity: (value:GetCityDto) => void,
}


) => {
  const renderFunction = (item: GetCityDto) => {
        return (
            <div className="flex items-center">
                <Icon icon={item.country.icon} className="mr-2" />
               <span>{item.name}</span>
            </div>

        );
    }

    const [perPage, setPerPage] = useState("50");
    const page = "1";

    const service = new CityService();


    const [perPageState, setPerPageState] = useDebounceState(perPage, setPerPage, 500);
    const [items, setItems] = useState<ReturnPageDto<GetCityDto>>();
    const [loadingState, setLoadingState] = useState<LoadingState>("loading");
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>();
    const [error, setError] = useState<string>();
    const [perPageError, setPerPageError] = useState<string>();
    const [filters, setFilters] = useState<FilterDto[][]>([
        [
            {
                column: "Country.Name",
                searchTerm: "Україна",
                filterType: "Strict",
                negate: false
            },
            {
                column: "Country.Name",
                searchTerm: "Молдова",
                filterType: "Strict",
                negate: false
            },
            {
                column: "Country.Name",
                searchTerm: "Польща",
                filterType: "Strict",
                negate: false
            }
,
            {
                column: "Country.Name",
                searchTerm: "Німеччина",
                filterType: "Strict",
                negate: false
            }


        ]
    ] 
);


    const loadItems = useGetPageOfItems<
        GetCityDto,
        CityService
    >(
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
       
        loadItems().then();
    }, [loadItems]);


    const innerOnSelectionChanged = (keys: SharedSelection) => {
        setCity(
            items?.models.filter(e => e.id === keys.currentKey)[0] as GetCityDto
             );
    };




    return (
        <>
            {
                error === undefined ?
                    loadingState === "loading" ? <LoadingCircle /> :
                        <Select
                            required={true}
                            items={items?.models}
                            label={"select city"}
                            placeholder={"select city"}
                            onSelectionChange={innerOnSelectionChanged}
                            selectedKeys={[city?.id ? city?.id : "" ]}
                            renderValue={(items: SelectedItems<GetCityDto>) => {
                                return items.map((item) => renderFunction(item.data as GetCityDto));
                            }}
                        >
                            {(item) => (
                                <SelectItem key={
                                    item.id
                                }>
                                    {renderFunction(item as GetCityDto)}
                                </SelectItem>
                            )
                            }
                        </Select>
                    :
                    <p className="text-red-700">
                        {error}
                    </p>
            }
        </>
    );
}

export default SelectCityToTravelFrom