"use client"
import { FilterDto } from '@/AppDtos/Shared/filter-dto'
import { ModelDto } from '@/AppDtos/Shared/model-dto'
import { ReturnPageDto } from '@/AppDtos/Shared/return-page-dto'
import LoadingCircle from '@/components/shared/skeletons/LoadingCircle'
import { useAuthService } from '@/hooks/auth'
import useDebounceState from '@/hooks/useDebounceState'
import useGetPageOfItems from '@/hooks/useGetPageOfItems'
import { CrudService } from '@/service/shared/CrudService'
import OnChangeFunctionProps from '@/types/components/inputs/OnChangeFunctionProps'
import { Select, SelectedItems, SelectItem, SharedSelection } from '@nextui-org/react'
import { LoadingState, SortDescriptor } from "@react-types/shared";
import React, { ReactNode, useEffect, useState } from 'react'

const SharedMultipleInput = <
    TGetModel extends ModelDto,
    TService extends CrudService<TGetModel, object, ModelDto>
>(
    {
        service,
        onChange,
        currectValue,
        renderFunction,
        onSelectRenderFunction,
        placeholder,
        propertyName

    } : {
        service:TService,
        onChange: OnChangeFunctionProps,
        currectValue: any,
        renderFunction: (item:TGetModel) => ReactNode,
        onSelectRenderFunction : (item:TGetModel) => ReactNode,
        placeholder: string
        propertyName: string
    }
) => {
 const [perPage, setPerPage] = useState("50");
  const page = "1";

  const [value, setValue] = useState<string>("");

  const [perPageState, setPerPageState] = useDebounceState(perPage, setPerPage, 500);
  const [items, setItems] = useState<ReturnPageDto<TGetModel>>();
  const [loadingState, setLoadingState] = useState<LoadingState>("loading");
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>();
  const [error, setError] = useState<string>();
  const [perPageError, setPerPageError] = useState<string>();

  const [filters, setFilters] = useState<FilterDto[][]>([])


  const loadItems = useGetPageOfItems<
    TGetModel,
    TService
  >(
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
    var arrayKeys = [ ...keys];

    onChange({
      target: {
        value: arrayKeys,
        name: propertyName,
      }
    } as any,
  "string");
  };


   return (
    <>
      {
        error === undefined ?
        loadingState === "loading" ? <LoadingCircle /> :
          <Select 

            classNames={{
    trigger: "bg-white  border-gray-100 border-3 "
  }}
            required={true}
            items={items?.models}
            isMultiline={true}
            selectionMode='multiple'
            defaultSelectedKeys={[...currectValue]}
            label={<div className='text-2xl font-unbounded mb-6   text-center w-full z-10 font-[600]'>
              <div className='mb-auto w-full text-center'>
              {placeholder}
</div>
            </div>}
            placeholder={placeholder}
            onSelectionChange={innerOnSelectionChanged}
            selectedKeys={[...currectValue]}
                  renderValue={(items: SelectedItems<TGetModel>) => {
        return items.map((item) => onSelectRenderFunction(item.data as TGetModel));
      }}
          >
            {(item) => (
              <SelectItem key={
                item.id
                }>
                {renderFunction(item)}
              </SelectItem>
            )
            }
          </Select>
          :
          <p className="text-red-700">
            {error}
          </p>
      }
    </>
  );
}

export default SharedMultipleInput