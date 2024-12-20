"use client"

import { GetHotelDto } from '@/AppDtos/Dto/Models/Hotels/get-hotel-dto';
import { LoadingState } from "@react-types/shared";
import { FilterDto } from '@/AppDtos/Shared/filter-dto';
import { ReturnPageDto } from '@/AppDtos/Shared/return-page-dto';
import useDebounceState from '@/hooks/useDebounceState';
import { SortDescriptor } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'
import { HotelService } from '@/service/crudServices/HotelService';
import useGetPageOfItems from '@/hooks/useGetPageOfItems';
import HotelGrid from '../hotels/HotelGrid';
import HotelGridSkeleton from '../shared/skeletons/HotelGridSkeleton';
import { isDataView } from 'util/types';
import MyPagination from '../shared/MyPagination';

const FavoriteHotelsTab = ({
  hotelsIds,
}: {
  hotelsIds: string[]
}) => {



  const [page, setPage] = useState("1");
  const [perPage, setPerPage] = useState("9");
  const [perPageState, setPerPageState] = useDebounceState(perPage, setPerPage, 500);
  const [items, setItems] = useState<ReturnPageDto<GetHotelDto>>();
  const [loadingState, setLoadingState] = useState<LoadingState>("loading");
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>();
  const [error, setError] = useState<string>();
  const [perPageError, setPerPageError] = useState<string>();
  const [isFilterSet, setIsFilterSet] = useState(false);
  const [filters, setFilters] = useState<FilterDto[][]>([
    []
  ])


  const service = new HotelService();

  useEffect(() => {
    const newFilters: FilterDto[][] = [[]]

    for (let index = 0; index < hotelsIds.length; index++) {
      newFilters[0].push({
        column: "Id",
        searchTerm: hotelsIds[index],
        filterType: "Strict",
        negate: false
      });
    }

    setFilters(newFilters);
    setIsFilterSet(true);
  }, []);


  const loadItems = useGetPageOfItems<
      GetHotelDto,
      typeof service
    >(
      service,
      "6",
      page,
      sortDescriptor,
      setLoadingState,
      setError,
      setPerPage,
      setItems,
      "success",
      filters
      
    );



  useEffect(() => {

  
    if (isFilterSet){
    loadItems().then();
    }

  },
    [page, isFilterSet]
  );






  return (
    <>
      {loadingState === "idle" ? <>
        <HotelGrid hotels={items?.models!}
        />
        <div className='w-full flex justify-around'>
        <MyPagination total={items?.howManyPages!} page={parseInt(page)} onchange={(e:number) => setPage(e.toString())}
        />
</div>
      </>
        : <HotelGridSkeleton howManyCards={6} />}


    </>
  )
}

export default FavoriteHotelsTab