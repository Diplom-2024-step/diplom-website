import React from 'react'
import HotelCardSkeleton from './HotelCardSkeleton'

const HotelGridSkeleton = () => {
  return (
   <div className="w-full max-w-6xl mx-auto px-4 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(9)].map((_, i) => (
            <HotelCardSkeleton
            key={i}
            />
        ))}
      </div>
    </div>
  )
}

export default HotelGridSkeleton