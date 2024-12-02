"use client"
import React, { useEffect, useState } from 'react'
import useSearchParam from "@/hooks/useSearchParam";
import useDebounceState from '@/hooks/useDebounceState';
import { GetHotelDto } from '@/AppDtos/Dto/Models/Hotels/get-hotel-dto';
import { ReturnPageDto } from '@/AppDtos/Shared/return-page-dto';
import { Button, Link, SortDescriptor } from '@nextui-org/react';
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
import { Icon } from '@iconify/react';
import HotelSearchParamsSettingsCard from '@/components/hotels/HotelSearchParamsSettingsCard';



const page = (
  { params }: { params: { country: string } }
) => {


  const [isSearchSettingsOpen, setSearchSettingsOpen] = useState(false);

  const [page, setPage] = useSearchParam("page");
  const [lowestPrice, setLowestPrice] = useSearchParam("lp");
  const [heightPrice, setHeightPrice] = useSearchParam("lh");
  const [kids, setKids] = useSearchParam("kids");
  const [adults, setAdluts] = useSearchParam("kids");
  const [stars, setStars] = useSearchParam("st");

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
      <HotelCarouselRecommendation />
      <div className="w-full flex justify-between max-w-6xl mx-auto px-4 mt-20">
        <span><h2 className="text-2xl font-bold mb-6 text-black">Доступні готелі</h2></span>

        <Button
          className='bg-white rounded-full  '
          onClick={() => setSearchSettingsOpen(!isSearchSettingsOpen)}
        >
          <Icon icon="mingcute:settings-2-line" width="24" height="24" />
        </Button>

      </div>
      
      
      {isSearchSettingsOpen ? <HotelSearchParamsSettingsCard
      setLowestPrice={setLowestPrice}
      lowestPrice={lowestPrice}

      setHeightPrice={setHeightPrice}      
      heightPrice={heightPrice}
      
      /> : <></>}


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