"use client";
import React, { useEffect, useState } from "react";
import useSearchParam from "@/hooks/useSearchParam";
import useDebounceState from "@/hooks/useDebounceState";
import { ReturnPageDto } from "@/AppDtos/Shared/return-page-dto";
import { Button, Link, SortDescriptor } from "@nextui-org/react";
import { LoadingState } from "@react-types/shared";
import useGetPageOfItems from "@/hooks/useGetPageOfItems";
import { TourService } from "@/service/crudServices/TourService";
import { TourCarousel } from "@/components/tours/TourCarousel";
import LoadingScreen from "@/components/shared/LoadingScreen";
import TourGrid from "@/components/tours/TourGrid";
import MyPagination from "@/components/shared/MyPagination";
import Loading from "./loading";
import TourCarouselRecommendation from "@/components/tours/TourCarouselRecommendation";
import { FilterDto } from "@/AppDtos/Shared/filter-dto";
import { Icon } from "@iconify/react";
import HotelSearchParamsSettingsCard from "@/components/hotels/HotelSearchParamsSettingsCard";
import { GetTourDto } from "@/AppDtos/Dto/Models/Tours/get-tour-dto";
import TourSearchParamsSettingsCard from "@/components/tours/TourSearchParamsSettingsCard";
import FindTourCardWithBg from "@/components/shared/sharedComponents/FindTourCardWithBg";
import DeleteAllFiltersButton from "@/components/shared/sharedComponents/DeleteAllFiltersButton";

const page = ({ params }: { params: { country: string } }) => {
  const [isSearchSettingsOpen, setIsSearchSettingsOpen] = useState(false);
  const [page, setPage] = useSearchParam("page");
  const [toCity, setToCity] = useSearchParam("toCity");
  const [fromCity, setFromCity] = useSearchParam("fromCity");
  const [kids, setKids] = useSearchParam("kids");
  const [duration, setDuration] = useSearchParam("duration");
  const [adults, setAdluts] = useSearchParam("adults");

  const [lowestPrice, setLowestPrice] = useSearchParam("lowestPrice");
  const [heightPrice, setHeightPrice] = useSearchParam("heightPrice");
  const [stars, setStars] = useSearchParam("st");
  const [beachTypesIds, setBeachTypesIds] = useSearchParam("beachTypes");
  const [dietTypesIds, setDietTypesIds] = useSearchParam("dietTypes");
  const [roomTypesIds, setRoomTypesIds] = useSearchParam("roomTypes");
  const [countriesIds, setCountriesIds] = useSearchParam("countriesIds");
  const [inHotelsIds, setInHotelsIds] = useSearchParam("inHotelsIds");
  const [filters, setFilters] = useState<FilterDto[][]>();
  const [isFilterSet, setIsFilterSet] = useState(false);

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

  useEffect(() => {
    let newFilters: FilterDto[][] = [[]];

    if (stars) {
      stars.split(",").forEach((e) => {
        newFilters[0].push({
          column: "Hotel.Stars",
          searchTerm: e,
          filterType: "Strict",
          negate: false,
        });
      });
    }

    if (lowestPrice) {
      newFilters[0].push({
        column: "PriceUSD",
        searchTerm: lowestPrice,
        filterType: "BiggerOrEqual",
        negate: false,
      });
    }

    if (heightPrice) {
      newFilters[0].push({
        column: "PriceUSD",
        searchTerm: heightPrice,
        filterType: "SmallerOrEqual",
        negate: false,
      });
    }

    if (countriesIds) {
      countriesIds.split(",").forEach((e) => {
        newFilters[0].push({
          column: "Hotel.City.Country.Id",
          searchTerm: e,
          filterType: "Strict",
          negate: false,
        });
      });
    }

    if (inHotelsIds) {
      inHotelsIds.split(",").forEach((e) => {
        newFilters[0].push({
          column: "Hotel.InHotels.Id",
          searchTerm: e,
          filterType: "Strict",
          negate: false,
        });
      });
    }

    if (dietTypesIds) {
      dietTypesIds.split(",").forEach((e) => {
        newFilters[0].push({
          column: "DietType.Id",
          searchTerm: e,
          filterType: "Strict",
          negate: false,
        });
      });
    }

    if (roomTypesIds) {
      roomTypesIds.split(",").forEach((e) => {
        newFilters[0].push({
          column: "RoomType.Id",
          searchTerm: e,
          filterType: "Strict",
          negate: false,
        });
      });
    }
    if (beachTypesIds) {
      beachTypesIds.split(",").forEach((e) => {
        newFilters[0].push({
          column: "Hotel.BeachTypes.Id",
          searchTerm: e,
          filterType: "Strict",
          negate: false,
        });
      });
    }

    if (kids) {
      newFilters[0].push({
        column: "HowManyKids",
        searchTerm: kids,
        filterType: "Strict",
        negate: false,
      });
    }

    if (adults) {
      newFilters[0].push({
        column: "HowManyAdults",
        searchTerm: adults,
        filterType: "Strict",
        negate: false,
      });
    }

    if (duration) {
      newFilters[0].push({
        column: "Duration",
        searchTerm: duration,
        filterType: "Strict",
        negate: false,
      });
    }
    if (toCity) {
      newFilters[0].push({
        column: "ToCity.Id",
        searchTerm: toCity,
        filterType: "Strict",
        negate: false,
      });
    }

    if (fromCity) {
      newFilters[0].push({
        column: "FromCity.Id",
        searchTerm: fromCity,
        filterType: "Strict",
        negate: false,
      });
    }

    setFilters(newFilters);
    setPage(undefined);
    setIsFilterSet(true);
  }, [
    lowestPrice,
    heightPrice,
    stars,
    beachTypesIds,
    roomTypesIds,
    inHotelsIds,
    dietTypesIds,
    kids,
    adults,
    countriesIds,
    toCity,
    fromCity,
    duration,
  ]);

  const loadItems = useGetPageOfItems<GetTourDto, typeof service>(
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
    if (isFilterSet) {
      loadItems().then();
    }
  }, [page, filters]);

  return (
    <>
      <FindTourCardWithBg />
      <section className="container mx-auto mb-0 max-w-7xl px-5 flex-grow">
        <TourCarouselRecommendation />
        <div className="w-full flex justify-between max-w-6xl mx-auto px-4 mt-20">
          <span>
            <h2 className="text-[50px] font-bold font-unbounded  mb-6 text-black">
              Наші тури
            </h2>
          </span>

          <div className="flex justify-between my-5 gap-6">
            <DeleteAllFiltersButton />

            <Button
              className="bg-white rounded-full  "
              onClick={() => setIsSearchSettingsOpen(!isSearchSettingsOpen)}
            >
              <Icon icon="mingcute:settings-2-line" width="24" height="24" />
            </Button>
          </div>
        </div>

        {isSearchSettingsOpen ? (
          <TourSearchParamsSettingsCard
            lowestPrice={lowestPrice}
            heightPrice={heightPrice}
            outsideBeachTypesIds={beachTypesIds ? beachTypesIds.split(",") : []}
            outsideDietTypesIds={dietTypesIds ? dietTypesIds.split(",") : []}
            outsideRoomTypesIds={roomTypesIds ? roomTypesIds.split(",") : []}
            outsideCountriesIds={countriesIds ? countriesIds.split(",") : []}
            outsideInHotelIds={inHotelsIds ? inHotelsIds.split(",") : []}
            onClose={() => {
              setIsSearchSettingsOpen(false);
            }}
            outsideHowManyAdults={adults ? adults : "1"}
            outsideHowManyKids={kids ? kids : "0"}
            duration={duration}
            stars={stars}
            fromCity={fromCity}
            toCity={toCity}
          />
        ) : (
          <></>
        )}

        {loadingState === "idle" ? (
          <>
            <TourGrid tours={items?.models as any} />

            <div className="flex justify-center items-center mb-10">
              <MyPagination
                total={items?.howManyPages as any}
                page={page ? parseInt(page) : 1}
                onchange={(page: number) => setPage(page.toString())}
              />
            </div>
          </>
        ) : (
          <Loading />
        )}
      </section>
    </>
  );
};

export default page;
