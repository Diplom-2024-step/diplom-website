"use client"
import { GetActivityDto } from '@/AppDtos/Dto/Models/Activities/get-activity-dto';
import { FilterDto } from '@/AppDtos/Shared/filter-dto';
import { ReturnPageDto } from '@/AppDtos/Shared/return-page-dto';
import ActivityGrid from '@/components/activities/ActivityGrid';
import ActivityCard from '@/components/activities/shared/ActivityCard';
import ActivityGridSkeleton from '@/components/shared/skeletons/ActivityGridSkeleton';
import useDebounceState from '@/hooks/useDebounceState';
import useGetPageOfItems from '@/hooks/useGetPageOfItems';
import useSearchParam from '@/hooks/useSearchParam';
import { ActivityService } from '@/service/crudServices/ActivityService';
import { SortDescriptor } from '@nextui-org/react';
import { LoadingState } from "@react-types/shared";
import React, { useEffect, useState } from 'react'

const page = async (
    {
        params
    }: {
        params: { id: string; country: string }
    }
) => {
    const [page, setPage] = useSearchParam("page");
    const [perPage, setPerPage] = useState("12");
    const [perPageState, setPerPageState] = useDebounceState(perPage, setPerPage, 500);
    const [items, setItems] = useState<ReturnPageDto<GetActivityDto>>();
    const [loadingState, setLoadingState] = useState<LoadingState>("loading");
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>();
    const [error, setError] = useState<string>();
    const [perPageError, setPerPageError] = useState<string>();
    const [filters, setFilters] = useState<FilterDto[][]>([
        [
            {
                column: "Country.Name",
                searchTerm: "Іспанія",
                filterType: "Strict",
                negate: false
            }
        ]
    ]
    );

    const service = new ActivityService();

    const loadItems = useGetPageOfItems<
        GetActivityDto,
        typeof service
    >(
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


    return (
        <div className='container mx-auto mb-0 max-w-7xl px-5 flex-grow'>
            <h2 className="text-2xl font-bold mb-6 text-black">Активний відпочинок</h2>
            <p className='text-color-[#686868]'>Обирай види активного відпочинку та насолоджуйся поїздкою</p>
            {loadingState === 'idle' ?
                <>
                    <ActivityGrid activities={items?.models as GetActivityDto[]}
                    />
                </>
                : 
                <ActivityGridSkeleton />
            }
        </div>
    )
}

export default page