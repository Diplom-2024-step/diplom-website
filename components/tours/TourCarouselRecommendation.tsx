"use client";
import { ReturnPageDto } from "@/AppDtos/Shared/return-page-dto";
import useDebounceState from "@/hooks/useDebounceState";
import useGetPageOfItems from "@/hooks/useGetPageOfItems";
import useSearchParam from "@/hooks/useSearchParam";
import { TourService } from "@/service/crudServices/TourService";
import { SortDescriptor } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { LoadingState } from "@react-types/shared";
import { TourCarousel } from "./TourCarousel";
import TourCarouselSkeleton from "../shared/skeletons/TourCarouselSkeleton";
import { GetTourDto } from "@/AppDtos/Dto/Models/Tours/get-tour-dto";

const TourCarouselRecommendation = () => {
  const [perPage, setPerPage] = useState("9");
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
    "success"
  );

  useEffect(() => {
    loadItems().then();
  }, [loadItems]);

  return loadingState === "idle" ? (
    <TourCarousel tours={items?.models as GetTourDto[]} />
  ) : (
    <TourCarouselSkeleton />
  );
};

export default TourCarouselRecommendation;
