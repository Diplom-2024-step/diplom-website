"use client";
import { Button, Link, SortDescriptor } from "@nextui-org/react";
import { LoadingState } from "@react-types/shared";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import { GetActivityDto } from "@/AppDtos/Dto/Models/Activities/get-activity-dto";
import { FilterDto } from "@/AppDtos/Shared/filter-dto";
import { ReturnPageDto } from "@/AppDtos/Shared/return-page-dto";
import ActivityGrid from "@/components/activities/ActivityGrid";
import { useTravelBookingContext } from "@/components/providers/TravelBookingProvider";
import MyPagination from "@/components/shared/MyPagination";
import ActivityGridSkeleton from "@/components/shared/skeletons/ActivityGridSkeleton";
import useDebounceState from "@/hooks/useDebounceState";
import useGetPageOfItems from "@/hooks/useGetPageOfItems";
import useSearchParam from "@/hooks/useSearchParam";
import { ActivityService } from "@/service/crudServices/ActivityService";

const Page = ({ params }: { params: { id: string; country: string } }) => {
  const { activities, setActivities } = useTravelBookingContext();
  const [selectedActiviriesAtStart, setSelectedActiviriesAtStart] =
    useState(activities);
  const [page, setPage] = useSearchParam("page");
  const [perPage, setPerPage] = useState("12");
  const [perPageState, setPerPageState] = useDebounceState(
    perPage,
    setPerPage,
    500
  );
  const [items, setItems] = useState<ReturnPageDto<GetActivityDto>>();
  const [loadingState, setLoadingState] = useState<LoadingState>("loading");
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>();
  const [error, setError] = useState<string>();
  const [perPageError, setPerPageError] = useState<string>();
  const [filters, setFilters] = useState<FilterDto[][]>([
    [
      {
        column: "Country.Id",
        searchTerm: params.country,
        filterType: "Strict",
        negate: false,
      },
    ],
  ]);

  const service = new ActivityService();

  const loadItems = useGetPageOfItems<GetActivityDto, typeof service>(
    service,
    "12",
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

  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="container mx-auto mb-0 max-w-7xl px-5 flex-grow">
      <h2 className="text-2xl font-bold  text-black">Активний відпочинок</h2>
      <p className="text-[#686868] mb-6">
        Обирай види активного відпочинку та насолоджуйся поїздкою
      </p>
      {loadingState === "idle" ? (
        <>
          <ActivityGrid activities={items?.models as GetActivityDto[]} />

          <div className="flex justify-center items-center mb-10">
            <MyPagination
              onchange={(page: number) => setPage(page.toString())}
              page={page ? parseInt(page) : 1}
              total={items?.howManyPages as number}
            />
          </div>

          <div className="flex justify-center items-center my-5">
            <div className=" flex flex-col items-center  md:flex-row md:justify-around justify-center mx-auto ">
              <div className="text-center md:mx-0 text-wrap md:w-2/5 w-3/4">
                <Button
                  as={Link}
                  className="bg-transparent text-black text-xl rounded-full px-20  border-1 border-black"
                  href={
                    "../../.." + pathname.slice(0, pathname.lastIndexOf("/"))
                  }
                  onClick={() => setActivities([...selectedActiviriesAtStart])}
                >
                  Скасувати
                </Button>
                <p className="font-nunito_font_family text-[#303030]  text-lg opacity-70">
                  Відмінити всі активності, які обрали та почати спочатку
                </p>
              </div>
              <div className="text-center    md:mx-0 md:w-2/5 w-3/4 mr-5">
                <Button
                  as={Link}
                  className="text-white bg-primary font-nunito_font_family font-[700] text-xl rounded-full  px-20"
                  href={
                    "../../.." + pathname.slice(0, pathname.lastIndexOf("/"))
                  }
                >
                  Застосувати
                </Button>
                <p className="font-nunito_font_family  text-[#303030] text-lg opacity-70">
                  Додати обрані види антивностей
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <ActivityGridSkeleton />
      )}
    </div>
  );
};

export default Page;
