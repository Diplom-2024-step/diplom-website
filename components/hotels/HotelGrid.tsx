"use client"
import { GetHotelDto } from '@/AppDtos/Dto/Models/Hotels/get-hotel-dto'
import React, { useState } from 'react'
import HotelCard from './HotelCard'

const HotelGrid = ({ hotels } : {hotels:GetHotelDto[]}) => {

      const [hoveredId, setHoveredId] = useState<number | null>(null);
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels?.map((hotel, index) => (
          <HotelCard
            key={index}
            cardItem={hotel}
            isHovered={hoveredId === index}
            onHover={() => setHoveredId(index)}
            onLeave={() => setHoveredId(null)}
          />
        ))}
      </div>
    </div>
  )
}

export default HotelGrid