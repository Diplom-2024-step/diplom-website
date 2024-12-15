import ActivityCard from '@/components/activities/shared/ActivityCard'
import React from 'react'
import ActivityCardSkeleton from './ActivityCardSkeleton'

const ActivityGridSkeleton = () => {
  return (
     <div className="grid grid-cols-3 grid-rows-4  gap-6">
      {[...Array(12)].map((activity, index) => (
        <ActivityCardSkeleton
        key={index}
          index={index}
        />
      ))}
    </div>
  )
}

export default ActivityGridSkeleton