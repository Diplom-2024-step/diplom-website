import React, { useEffect, useState } from "react";
import { SortDescriptor } from "@nextui-org/react";
import { LoadingState } from "@react-types/shared";

import { GetUserDto } from "@/AppDtos/Dto/Users/get-user-dto";
import useDebounceState from "@/hooks/useDebounceState";
import { ReturnPageDto } from "@/AppDtos/Shared/return-page-dto";
import { FilterDto } from "@/AppDtos/Shared/filter-dto";
import { GetOrderDto } from "@/AppDtos/Dto/Models/Orders/get-order-dto";
import { OrderService } from "@/service/crudServices/OrderService";
import useGetPageOfItems from "@/hooks/useGetPageOfItems";

import TravelCardSkeleton from "../shared/skeletons/TravelCardSkeleton";

import TravelCardProfile from "./travelCard";

const OrderInProgress = ({ user }: { user: GetUserDto }) => {
  const [page, setPage] = useState("1");
  const [perPage, setPerPage] = useState("3");
  const [perPageState, setPerPageState] = useDebounceState(
    perPage,
    setPerPage,
    500
  );
  const [items, setItems] = useState<ReturnPageDto<GetOrderDto>>();
  const [loadingState, setLoadingState] = useState<LoadingState>("loading");
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>();
  const [error, setError] = useState<string>();
  const [perPageError, setPerPageError] = useState<string>();
  const [isFilterSet, setIsFilterSet] = useState(false);
  const [filters, setFilters] = useState<FilterDto[][]>([
    [
      {
        column: "User.Id",
        searchTerm: user.id,
        filterType: "Strict",
        negate: false,
      },
    ],
  ]);

  const service = new OrderService();

  const loadItems = useGetPageOfItems<GetOrderDto, typeof service>(
    service,
    perPage,
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
    <div className="my-10 min-h-64">
      {loadingState === "idle" ? (
        items?.models.map((order, index) => (
          <TravelCardProfile key={index} order={order} />
        ))
      ) : (
        <TravelCardSkeleton />
      )}
    </div>
  );
};

export default OrderInProgress;
