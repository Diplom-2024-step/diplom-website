"use client"
import { GetActivityDto } from '@/AppDtos/Dto/Models/Activities/get-activity-dto'
import React, { useState } from 'react'
import ActivityCard from './shared/ActivityCard'

const ActivityGrid = (
  {
    activities
  }:{
    activities: GetActivityDto[]
  }
) => {

    const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-3 grid-rows-4  gap-6">
      {activities.map((activity, index) => (
        <ActivityCard
          activity={activity}
          index={index}
          isHovered={hoveredId === index}
          onHover={() => setHoveredId(index)}
          onLeave={() => setHoveredId(null)}
        />
      ))}
    </div>
  )
}

export default ActivityGrid