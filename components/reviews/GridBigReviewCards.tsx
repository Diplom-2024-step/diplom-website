"use client"
import { GetReviewOnCompanyDto } from '@/AppDtos/Dto/Models/ReviewOnCompanies/get-review-on-company-dto';
import { ReturnPageDto } from '@/AppDtos/Shared/return-page-dto';
import useDebounceState from '@/hooks/useDebounceState';
import useGetPageOfItems from '@/hooks/useGetPageOfItems';
import { ReviewOnCompanyService as ReviewOnCompanyService } from '@/service/crudServices/ReviewOnCompany';
import { SortDescriptor } from '@nextui-org/react';
import { LoadingState } from "@react-types/shared";
import React, { useEffect, useState } from 'react'
import GridBigReviewCardsSkeleton from '../shared/skeletons/GridBigReviewCardsSkeleton';
import BigReviewCard from './BigReviewCard';
import MyPagination from '../shared/MyPagination';
import ReviewCardCarousel from './ReviewCardCarousel';

const GridBigReviewCards = () => {

  const [page, setPage] = useState("1");


  const [perPage, setPerPage] = useState("6");
  const [perPageState, setPerPageState] = useDebounceState(perPage, setPerPage, 500);
  const [items, setItems] = useState<ReturnPageDto<GetReviewOnCompanyDto>>();
  const [loadingState, setLoadingState] = useState<LoadingState>("loading");
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>();
  const [error, setError] = useState<string>();
  const [perPageError, setPerPageError] = useState<string>();

  const service = new ReviewOnCompanyService();

   const loadItems = useGetPageOfItems<
    GetReviewOnCompanyDto,
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
  );

  useEffect(() => {
      loadItems().then();
  }, [loadItems, ]);



  return (
    loadingState === "idle" ? <>
      <div className="hidden sm:block xl:grid-cols-2 lg:grid-cols-1 md:visible md:grid gap-4 mx-4">
        {items?.models.map((e, index) => (
          <BigReviewCard review={e} key={index} />
        ))}
      </div>
      <div className='block sm:hidden mb-10'>
        <ReviewCardCarousel reviews={items?.models as any} />
      </div>
      <div className='hidden sm:block md:visible w-full md:my-10'>
        <div className='flex justify-center mt-10 items-center'>
          <MyPagination
            onchange={(e) => setPage(e.toString())} total={items?.howManyPages!} page={parseInt(page)}
          />
        </div>
      </div>
    </> : <GridBigReviewCardsSkeleton />
  )
}

export default GridBigReviewCards