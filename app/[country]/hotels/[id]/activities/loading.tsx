import ActivityGridSkeleton from '@/components/shared/skeletons/ActivityGridSkeleton'
import React from 'react'

const loading = () => {
    return (
        <div className='container mx-auto mb-0 max-w-7xl px-5 flex-grow'>
            <h2 className="text-2xl font-bold mb-6 text-black">Активний відпочинок</h2>
            <p className='text-color-[#686868]'>Обирай види активного відпочинку та насолоджуйся поїздкою</p>
            <ActivityGridSkeleton />
        </div>
    )
}

export default loading