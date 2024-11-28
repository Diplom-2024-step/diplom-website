"use client"
import React, { useEffect, useState } from 'react'
import useSearchParam from "@/hooks/useSearchParam";
import useDebounceState from '@/hooks/useDebounceState';
import { GetHotelDto } from '@/AppDtos/Dto/Models/Hotels/get-hotel-dto';
import { ReturnPageDto } from '@/AppDtos/Shared/return-page-dto';
import { SortDescriptor } from '@nextui-org/react';
import { LoadingState } from "@react-types/shared";
import useGetPageOfItems from '@/hooks/useGetPageOfItems';
import { HotelService } from '@/service/crudServices/HotelService';
import { HotelCarousel } from '@/components/hotels/HotelCarousel';
import LoadingScreen from '@/components/shared/LoadingScreen';
import HotelGrid from '@/components/hotels/HotelGrid';
import MyPagination from '@/components/shared/MyPagination';
import Loading from './loading';
import HotelCarouselRecommendation from '@/components/hotels/HotelCarouselRecommendation';
import { FilterDto } from '@/AppDtos/Shared/filter-dto';



const page = (
  {params}:{ params:{  country:string}}
) => {



  const [page, setPage] = useSearchParam("page");
  const [perPage, setPerPage] = useState("9");
  const [perPageState, setPerPageState] = useDebounceState(perPage, setPerPage, 500);
  const [items, setItems] = useState<ReturnPageDto<GetHotelDto>>();
  const [loadingState, setLoadingState] = useState<LoadingState>("loading");
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>();
  const [error, setError] = useState<string>();
  const [perPageError, setPerPageError] = useState<string>();
   const [filters, setFilters] = useState<FilterDto[][]>([
        [
            {
                column: "City.Country.Id",
                searchTerm: params.country,
                filterType: "Strict",
                negate: false
            }
        ]
    ]
    );

  const service = new HotelService();

  const loadItems = useGetPageOfItems<
    GetHotelDto,
    typeof service
  >(
    service,
    "9",
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
    loadItems().then();
  }, [loadItems]);


  return (
    <section className='container mx-auto mb-0 max-w-7xl px-5 flex-grow'>
      <HotelCarouselRecommendation/>
      {loadingState === 'idle' ?
        <>

          <HotelGrid hotels={items?.models as any}
          />

          <div className='flex justify-center items-center mb-10'>
            <MyPagination
              total={items?.howManyPages as any}
              page={page ? parseInt(page) : 1}
              onchange={(page: number) => setPage(page.toString())}
            />
          </div>


        </>
        :
        <Loading />
      }
    </section>
  )
}

export default page