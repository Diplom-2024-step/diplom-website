"use client";
import { SortDescriptor } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { LoadingState } from "@react-types/shared";

import { GetHotelDto } from "@/AppDtos/Dto/Models/Hotels/get-hotel-dto";
import { ReturnPageDto } from "@/AppDtos/Shared/return-page-dto";
import useDebounceState from "@/hooks/useDebounceState";
import useGetPageOfItems from "@/hooks/useGetPageOfItems";
import { HotelService } from "@/service/crudServices/HotelService";
import { FilterDto } from "@/AppDtos/Shared/filter-dto";

import HotelCarouselSkeleton from "../shared/skeletons/HotelCarouselSkeleton";

import { HotelCarousel } from "./HotelCarousel";

const HotelCarouselRecommendation = () => {
  const [perPage, setPerPage] = useState("9");
  const [perPageState, setPerPageState] = useDebounceState(
    perPage,
    setPerPage,
    500
  );
  const [items, setItems] = useState<ReturnPageDto<GetHotelDto>>();
  const [loadingState, setLoadingState] = useState<LoadingState>("loading");
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>();
  const [error, setError] = useState<string>();
  const [perPageError, setPerPageError] = useState<string>();
  const [filters, setFilters] = useState<FilterDto[][]>([]);

  const service = new HotelService();

  const loadItems = useGetPageOfItems<GetHotelDto, typeof service>(
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

  return loadingState === "idle" ? (
    <HotelCarousel hotels={items?.models as GetHotelDto[]} />
  ) : (
    <HotelCarouselSkeleton />
  );
};

export default HotelCarouselRecommendation;
