import { GetReviewDto } from '@/AppDtos/Dto/Models/Reviews/get-review-dto';
import { FilterDto } from '@/AppDtos/Shared/filter-dto';
import { ReturnPageDto } from '@/AppDtos/Shared/return-page-dto';
import useDebounceState from '@/hooks/useDebounceState';
import { ReviewService } from '@/service/crudServices/ReviewService'
import { LoadingState } from "@react-types/shared";
import { SortDescriptor } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'
import useGetPageOfItems from '@/hooks/useGetPageOfItems';
import ReviewCardCarouselSkeleton from '../shared/skeletons/ReviewCardCarouselSkeleton';
import ReviewCardCarousel from './ReviewCardCarousel';

const ReviewCardCarouselWithService = ({ reviewableId }: { reviewableId: string }) => {


    const [perPage, setPerPage] = useState("10");
  const [perPageState, setPerPageState] = useDebounceState(
    perPage,
    setPerPage,
    500
  );
  const [items, setItems] = useState<ReturnPageDto<GetReviewDto>>();
  const [loadingState, setLoadingState] = useState<LoadingState>("loading");
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>();
  const [error, setError] = useState<string>();
  const [perPageError, setPerPageError] = useState<string>();
  const [filters, setFilters] = useState<FilterDto[][]>([
    [
      {
        column: "ReviewablePhotoableId",
        searchTerm: reviewableId,
        filterType: "Strict",
        negate: false,
      },
    ],
  ]);

    const service = new ReviewService();

  const loadItems = useGetPageOfItems<GetReviewDto, typeof service>(
    service,
    "9",
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




    return loadingState !== "idle" ? (
    <>
      <ReviewCardCarouselSkeleton reviews={[...Array(10)]}/>
    </>
  ) : (
    <>
      <ReviewCardCarousel reviews={items?.models!}      />
    </>
  );
}

export default ReviewCardCarouselWithService