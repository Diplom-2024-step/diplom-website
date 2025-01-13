"use client";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardFooter } from "@nextui-org/card";
import { Icon } from "@iconify/react";
import { SortDescriptor } from "@nextui-org/react";
import { LoadingState } from "@react-types/shared";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { TourService } from "@/service/crudServices/TourService";
import useDebounceState from "@/hooks/useDebounceState";
import { ReturnPageDto } from "@/AppDtos/Shared/return-page-dto";
import useGetPageOfItems from "@/hooks/useGetPageOfItems";
import { GetTourDto } from "@/AppDtos/Dto/Models/Tours/get-tour-dto";
import { FilterDto } from "@/AppDtos/Shared/filter-dto";

import testicon3 from "../../assets/images/hotoffers/testicon3.png";
import testicon2 from "../../assets/images/hotoffers/testicon2.png";
import mexicoPng from "../../assets/images/hotoffers/mexico.png";
import testicon1 from "../../assets/images/hotoffers/testicon1.png";

import HotOffersSkeleton from "./skeletons/HotOffersSkeleton";

const HotDestinations = () => {
  const router = useRouter();
  const [perPage, setPerPage] = useState("4");
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
  const [filters, setFilters] = useState<FilterDto[][]>([]);

  const service = new TourService();

  const loadItems = useGetPageOfItems<GetTourDto, typeof service>(
    service,
    perPage,
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
    <div className="flex flex-col items-center text-center  w-full h-full mt-10 mb-10">
      <p className="font-unbounded lg:text-[50px] text-[26px] font-bold lg:mb-[65px] mb-[30px] text-customBlack">
        Гарячі пропозиції
      </p>
      <div className="hidden lg:flex  w-4/7 h-full">
        <Card
          isHoverable
          isPressable
          className="flex flex-col justify-between col-span-12 sm:col-span-4 min-h-[520px] min-w-[398px] bg-cover bg-center cursor-pointer group"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${mexicoPng.src})`,
          }}
          onClick={() => {
            router.push(`/tours/${items?.models[0].id}`);
          }}
        >
          <CardHeader className="absolute z-10 top-1 flex justify-between">
             <Icon
                  className="w-[35px] h-[35px] mr-[15px] text-white"
                  icon="mdi:flame"
                />
            <div className="flex flex-col justify-center bg-customBlack bg-opacity-50 h-[30px] p-3 rounded-xl mt-[10px]">
              <p className="text-[15px] text-white uppercase font-bold">
                {items?.models[0].priceUSD!} ₴ / Цена
              </p>
            </div>
          </CardHeader>
          <CardFooter className="absolute bottom-3 z-10">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col text-left">
                <div className="flex text-white items-start w-3/4  text-left">
                  <p className="text-white text-[25px] font-unbounded font-[600] text-balance">
                    {items?.models[0].hotel.city.name!}
                  </p>
                </div>

                <p className="text-[15px] text-white font-nunito_font_family font-[300]">
                  {items?.models[0].hotel.city.country.name!}
                </p>
              </div>
            </div>
            <button className="absolute bottom-4 right-4 rounded-full">
              <Icon
                className={`w-10 h-10 transition-transform rotate-45 text-white group-hover:-translate-y-5 group-hover:text-primary
                }`}
                icon="ei:arrow-up"
              />
            </button>
          </CardFooter>
        </Card>
        <div className="flex flex-col h-full w-3/5 ml-[60px]">
          <div className="flex justify-between">
            <Card
              isHoverable
              isPressable
              className="flex flex-col justify-between col-span-12 sm:col-span-4 min-h-[240px] min-w-[280px] mr-[35px] bg-cover bg-center cursor-pointer group"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${testicon1.src})`,
              }}
              onClick={() => {
                router.push(`/tours/${items?.models[1].id}`);
              }}
            >
              <CardHeader className="flex absolute z-10 top-1 justify-between !items-end">
                <Icon
                  className="w-[35px] h-[35px] ml-[15px] text-white"
                  icon="mdi:flame"
                />
                <div className="flex flex-col justify-center bg-customBlack bg-opacity-50 h-[30px] p-3 rounded-xl mt-[10px]">
                  <p className="text-[15px] text-white uppercase font-bold">
                    {items?.models[1].priceUSD!} ₴ / Цена
                  </p>
                </div>
              </CardHeader>
              <CardFooter className="absolute bottom-3 z-10">
                <div className="flex flex-grow gap-2 items-center">
                  <div className="flex flex-col text-left">
                    <div className=" text-left">
                      <p className="text-white text-[25px]">
                        {items?.models[1].hotel.city.name!}
                      </p>
                    </div>

                    <p className="text-[15px] text-white">
                      {items?.models[1].hotel.city.country.name!}
                    </p>
                  </div>
                </div>
                <button className="absolute bottom-4 right-4 rounded-full">
                   <Icon
                className={`w-10 h-10 transition-transform rotate-45 text-white group-hover:-translate-y-5 group-hover:text-primary
                }`}
                icon="ei:arrow-up"
              />
                </button>
              </CardFooter>
            </Card>
            <Card
              isHoverable
              isPressable
              className="flex flex-col justify-between col-span-12 sm:col-span-4 min-h-[240px] min-w-[280px] bg-cover bg-center cursor-pointer group"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${testicon2.src})`,
              }}
              onClick={() => {
                router.push(`/tours/${items?.models[2].id}`);
              }}
            >
              <CardHeader className="flex absolute z-10 top-1 justify-between !items-end">
                <Icon
                  className="w-[35px] h-[35px] ml-[15px] text-white"
                  icon="mdi:flame"
                />
                <div className="flex flex-col justify-center bg-customBlack bg-opacity-50 h-[30px] p-3 rounded-xl mt-[10px]">
                  <p className="text-[15px] text-white uppercase font-bold">
                    {items?.models[2].priceUSD!} ₴ / Цена
                  </p>
                </div>
              </CardHeader>
              <CardFooter className="absolute bottom-3 z-10">
                <div className="flex flex-grow gap-2 items-center">
                  <div className="flex flex-col text-left">
                    <div className="flex item-center justify-center text-left">
                      <p className="text-white text-[25px]">
                        {items?.models[2].hotel.city.name!}
                      </p>
                    </div>

                    <p className="text-[15px] text-white">
                      {items?.models[2].hotel.city.country.name!}
                    </p>
                  </div>
                </div>
                <button className="absolute bottom-4 right-4 rounded-full ">
                   <Icon
                className={`w-10 h-10 transition-transform rotate-45 text-white group-hover:-translate-y-5 group-hover:text-primary
                }`}
                icon="ei:arrow-up"
              />
                </button>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card
              isHoverable
              isPressable
              className="flex flex-col justify-between col-span-12 sm:col-span-4 min-h-[240px] w-full mt-[40px] bg-cover bg-center cursor-pointer group"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${testicon3.src})`,
              }}
              onClick={() => {
                router.push(`/tours/${items?.models[3].id}`);
              }}
            >
              <CardHeader className="flex absolute z-10 top-1 justify-between !items-end">
                <Icon
                  className="w-[35px] h-[35px] ml-[15px] text-white"
                  icon="mdi:flame"
                />
                <div className="flex flex-col justify-center bg-customBlack bg-opacity-50 h-[30px] p-3 rounded-xl mt-[10px]">
                  <p className="text-[15px] text-white uppercase font-bold">
                    {items?.models[3].priceUSD!} ₴ / Цена
                  </p>
                </div>
              </CardHeader>
              <CardFooter className="absolute bottom-3 z-10">
                <div className="flex flex-grow gap-2 items-center">
                  <div className="flex flex-col text-left">
                    <div className="flex item-center justify-center text-left">
                      <p className="text-white text-[25px]">
                        {items?.models[3].hotel.city.name!}
                      </p>
                    </div>

                    <p className="text-[15px] text-white">
                      {items?.models[3].hotel.city.country.name!}
                    </p>
                  </div>
                </div>
                <button className="absolute bottom-4 right-4 rounded-full ">
                   <Icon
                className={`w-10 h-10 transition-transform rotate-45 text-white group-hover:-translate-y-5 group-hover:text-primary
                }`}
                icon="ei:arrow-up"
              />
                </button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex flex-col w-3/4 h-full">
        <Card
          isHoverable
          isPressable
          className="flex flex-col justify-between col-span-12 sm:col-span-4 min-h-[240px] w-full mt-[40px] bg-cover bg-center cursor-pointer"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${testicon3.src})`,
          }}
          onClick={() => {
            router.push(`/tours/${items?.models[3].id}`);
          }}
        >
          <CardHeader className="flex absolute z-10 top-1 justify-between !items-end">
            <Icon
              className="w-[35px] h-[35px] ml-[15px] text-white"
              icon="mdi:flame"
            />
            <div className="flex flex-col justify-center bg-customBlack bg-opacity-50 h-[30px] p-3 rounded-xl mt-[10px]">
              <p className="text-[15px] text-white uppercase font-bold">
                {items?.models[3].priceUSD!} ₴ / Цена
              </p>
            </div>
          </CardHeader>
          <CardFooter className="absolute bottom-3 z-10">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col text-left">
                <div className="flex item-center justify-center text-left">
                  <p className="text-white text-[25px]">
                    {items?.models[3].hotel.city.name!}
                  </p>
                </div>

                <p className="text-[15px] text-white">
                  {items?.models[3].hotel.city.country.name!}
                </p>
              </div>
            </div>
            <button className="absolute bottom-4 right-4 rounded-full ">
              <Icon
                className={`w-10 h-10 transition-transform rotate-45 text-white
                }`}
                icon="ei:arrow-up"
              />
            </button>
          </CardFooter>
        </Card>
        <Card
          isHoverable
          isPressable
          className="flex flex-col justify-between col-span-12 sm:col-span-4 min-h-[240px] w-full mt-[40px] bg-cover bg-center cursor-pointer"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${testicon1.src})`,
          }}
          onClick={() => {
            router.push(`/tours/${items?.models[3].id}`);
          }}
        >
          <CardHeader className="flex absolute z-10 top-1 justify-between !items-end">
            <Icon
              className="w-[35px] h-[35px] ml-[15px] text-white"
              icon="mdi:flame"
            />
            <div className="flex flex-col justify-center bg-customBlack bg-opacity-50 h-[30px] p-3 rounded-xl mt-[10px]">
              <p className="text-[15px] text-white uppercase font-bold">
                {items?.models[1].priceUSD!} ₴ / Цена
              </p>
            </div>
          </CardHeader>
          <CardFooter className="absolute bottom-3 z-10">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col text-left">
                <div className="flex item-center justify-center text-left">
                  <p className="text-white text-[25px]">
                    {items?.models[1].hotel.city.name!}
                  </p>
                </div>

                <p className="text-[15px] text-white">
                  {items?.models[1].hotel.city.country.name!}
                </p>
              </div>
            </div>
            <button className="absolute bottom-4 right-4 rounded-full ">
              <Icon
                className={`w-10 h-10 transition-transform rotate-45 text-white
                }`}
                icon="ei:arrow-up"
              />
            </button>
          </CardFooter>
        </Card>
        <Card
          isHoverable
          isPressable
          className="flex flex-col justify-between col-span-12 sm:col-span-4 min-h-[240px] w-full mt-[40px] bg-cover bg-center cursor-pointer"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${testicon2.src})`,
          }}
          onClick={() => {
            router.push(`/tours/${items?.models[3].id}`);
          }}
        >
          <CardHeader className="flex absolute z-10 top-1 justify-between !items-end">
            <Icon
              className="w-[35px] h-[35px] ml-[15px] text-white"
              icon="mdi:flame"
            />
            <div className="flex flex-col justify-center bg-customBlack bg-opacity-50 h-[30px] p-3 rounded-xl mt-[10px]">
              <p className="text-[15px] text-white uppercase font-bold">
                {items?.models[2].priceUSD!} ₴ / Цена
              </p>
            </div>
          </CardHeader>
          <CardFooter className="absolute bottom-3 z-10">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col text-left">
                <div className="flex item-center justify-center text-left">
                  <p className="text-white text-[25px]">
                    {items?.models[2].hotel.city.name!}
                  </p>
                </div>

                <p className="text-[15px] text-white">
                  {items?.models[2].hotel.city.country.name!}
                </p>
              </div>
            </div>
            <button className="absolute bottom-4 right-4 rounded-full ">
              <Icon
                className={`w-10 h-10 transition-transform rotate-45 text-white
                }`}
                icon="ei:arrow-up"
              />
            </button>
          </CardFooter>
        </Card>
      </div>
      <Button
        className="font-nunito_font_family px-6 py-2 border border-gray-500 rounded-full text-gray-700 hover:bg-gray-100 mt-[60px] mb-[60px] text-[18px]  w-[300px] h-[50px]"
        variant="light"
        onClick={() => router.push(`/tours`)}
      >
        Переглянути більше
      </Button>
    </div>
  ) : (
    <HotOffersSkeleton />
  );
};

export default HotDestinations;
