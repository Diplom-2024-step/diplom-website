"use client"

// React and hooks
import React, { useEffect, useState } from 'react'
import { SortDescriptor } from '@nextui-org/react'
import { LoadingState } from "@react-types/shared"

// Custom hooks
import useDebounceState from '@/hooks/useDebounceState'
import useGetPageOfItems from '@/hooks/useGetPageOfItems'

// Services
import { HotelService } from '@/service/crudServices/HotelService'

// Components
import HotelGrid from '../hotels/HotelGrid'
import HotelGridSkeleton from '../shared/skeletons/HotelGridSkeleton'
import MyPagination from '../shared/MyPagination'

// Types
import { GetHotelDto } from '@/AppDtos/Dto/Models/Hotels/get-hotel-dto'
import { FilterDto } from '@/AppDtos/Shared/filter-dto'
import { ReturnPageDto } from '@/AppDtos/Shared/return-page-dto'

interface FavoriteHotelsTabProps {
  hotelsIds: string[]
}

const FavoriteHotelsTab: React.FC<FavoriteHotelsTabProps> = ({ hotelsIds }) => {
  // State management
  const [page, setPage] = useState("1")
  const [perPage, setPerPage] = useState("9")
  const [perPageState, setPerPageState] = useDebounceState(perPage, setPerPage, 500)
  const [items, setItems] = useState<ReturnPageDto<GetHotelDto>>()
  const [loadingState, setLoadingState] = useState<LoadingState>("loading")
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>()
  const [error, setError] = useState<string>()
  const [filters, setFilters] = useState<FilterDto[][]>([[]])
  const [isFilterSet, setIsFilterSet] = useState(false)

  const service = new HotelService()

  // Set up filters based on hotel IDs
  useEffect(() => {
    if (!hotelsIds.length) return

    const newFilters: FilterDto[][] = [[
      ...hotelsIds.map(id => ({
        column: "Id",
        searchTerm: id,
        filterType: "Strict",
        negate: false
      } as FilterDto))
    ]]

    setFilters(newFilters)
    setIsFilterSet(true)
  }, [hotelsIds])

  // Load items when page changes or filters are set
  const loadItems = useGetPageOfItems<GetHotelDto, typeof service>(
    service,
    "6",
    page,
    sortDescriptor,
    setLoadingState,
    setError,
    setPerPage,
    setItems,
    "success",
    filters
  )

  useEffect(() => {
    if (isFilterSet && hotelsIds.length > 0) {
      loadItems().catch(err => {
        console.error('Failed to load hotels:', err)
        setError('Failed to load hotels. Please try again later.')
      })
    }
  }, [page, isFilterSet, hotelsIds.length, loadItems])

  if (!hotelsIds.length) {
    return <div className="text-center py-8">No favorite hotels found</div>
  }

  if (error) {
    return <div className="text-center text-red-500 py-8">{error}</div>
  }

  return (
    <div className="space-y-6">
      {loadingState === "idle" ? (
        <>
          <HotelGrid hotels={items?.models ?? []} />
          <div className="w-full flex justify-around">
            <MyPagination
              total={items?.howManyPages ?? 1}
              page={parseInt(page)}
              onchange={(page: number) => setPage(page.toString())}
            />
          </div>
        </>
      ) : (
        <HotelGridSkeleton howManyCards={6} />
      )}
    </div>
  )
}

export default FavoriteHotelsTab;