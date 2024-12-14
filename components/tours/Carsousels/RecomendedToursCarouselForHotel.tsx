"use client";
import TourCarousel from "../TourCarousel";
import { GetTourDto } from "@/AppDtos/Dto/Models/Tours/get-tour-dto";
import { ReturnPageDto } from "@/AppDtos/Shared/return-page-dto";
import useDebounceState from "@/hooks/useDebounceState";
import useGetPageOfItems from "@/hooks/useGetPageOfItems";
import { TourService } from "@/service/crudServices/TourService";
import { SortDescriptor } from "@nextui-org/react";
import { LoadingState } from "@react-types/shared";
import React, { useEffect, useState } from "react";

import CarouselSkeleton from "@/components/shared/skeletons/CarouselSkeleton";
import { FilterDto } from "@/AppDtos/Shared/filter-dto";

const RecomendedToursCarouselForHotel = ({ hotelId }: { hotelId: string }) => {
  const [perPage, setPerPage] = useState("6");
  const [perPageState, setPerPageState] = useDebounceState(
    perPage,
    setPerPage,
    500
  );
  const [items, setItems] = useState<ReturnPageDto<GetTourDto>>();
  const [loadingState, setLoadingState] = useState<LoadingState>("loading");
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>();
  const [error, setError] = useState<string>();
  const [perPageError, setPerPageError] = useState<string>();
  const [filters, setFilters] = useState<FilterDto[][]>([
    [
      {
        column: "Hotel.Id",
        searchTerm: hotelId,
        filterType: "Strict",
        negate: false,
      },
    ],
  ]);

  const service = new TourService();

  const loadItems = useGetPageOfItems<GetTourDto, typeof service>(
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
      <CarouselSkeleton title={"Тури, що входять до готелю"} />
    </>
  ) : (
    <>
      <TourCarousel
        tours={items?.models as any}
        title={"Тури, що входять до готелю"}
      />
    </>
  );
};

export default RecomendedToursCarouselForHotel;
