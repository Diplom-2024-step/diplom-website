"use client"
import HotelCarouselSkeleton from '@/components/shared/skeletons/HotelCarouselSkeleton'
import HotelGridSkeleton from '@/components/shared/skeletons/HotelGridSkeleton'
import React from 'react'

const loading = () => {
  return (
  <>
  <HotelCarouselSkeleton/>

  <HotelGridSkeleton/>


  </>
  )
}

export default loading