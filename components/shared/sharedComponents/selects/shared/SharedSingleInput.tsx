"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { LoadingState, SortDescriptor } from "@react-types/shared";
import {
  Select,
  SelectedItems,
  SelectItem,
  SharedSelection,
} from "@nextui-org/react";

import { ModelDto } from "@/AppDtos/Shared/model-dto";
import { ReturnPageDto } from "@/AppDtos/Shared/return-page-dto";
import useDebounceState from "@/hooks/useDebounceState";
import { CrudService } from "@/service/shared/CrudService";
import useGetPageOfItems from "@/hooks/useGetPageOfItems";
import LoadingCircle from "@/components/shared/skeletons/LoadingCircle";
import { FilterDto } from "@/AppDtos/Shared/filter-dto";

const SharedSingleInput = <
  TGetModel extends ModelDto,
  TService extends CrudService<TGetModel, object, ModelDto>,
>({
  service,
  setItem,
  currectValue,
  renderFunction,
  onSelectRenderFunction,
  placeholder,
  outFiltres,
}: {
  service: TService;
  setItem: (item: TGetModel) => void;
  currectValue?: TGetModel;
  renderFunction: (item: TGetModel) => ReactNode;
  onSelectRenderFunction: (item: TGetModel) => ReactNode;
  placeholder: string;
  outFiltres?: FilterDto[][];
}) => {
  const [perPage, setPerPage] = useState("50");
  const page = "1";
  const [value, setValue] = useState<string>("");
  const [perPageState, setPerPageState] = useDebounceState(
    perPage,
    setPerPage,
    500
  );
  const [items, setItems] = useState<ReturnPageDto<TGetModel>>();
  const [loadingState, setLoadingState] = useState<LoadingState>("loading");
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>();
  const [error, setError] = useState<string>();
  const [perPageError, setPerPageError] = useState<string>();

  const [filters, setFilters] = useState<FilterDto[][]>(
    outFiltres ? outFiltres : []
  );

  const loadItems = useGetPageOfItems<TGetModel, TService>(
    service,
    "50",
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

  const innerOnSelectionChanged = (keys: SharedSelection) => {
    const item = items?.models.filter((e) => e.id === keys.currentKey)[0];

    setItem(item as TGetModel);
  };

  return (
    <>
      {error === undefined ? (
        loadingState === "loading" ? (
          <LoadingCircle />
        ) : (
          <Select
            disallowEmptySelection
            defaultSelectedKeys={[currectValue ? currectValue.id : ""]}
            items={items?.models}
            label={placeholder}
            placeholder={placeholder}
            renderValue={(items: SelectedItems<TGetModel>) => {
              return items.map((item) =>
                onSelectRenderFunction(item.data as TGetModel)
              );
            }}
            required={true}
            selectedKeys={[currectValue ? currectValue.id : ""]}
            onSelectionChange={innerOnSelectionChanged}
          >
            {(item) => (
              <SelectItem key={item.id}>{renderFunction(item)}</SelectItem>
            )}
          </Select>
        )
      ) : (
        <p className="text-red-700">{error}</p>
      )}
    </>
  );
};

export default SharedSingleInput;
