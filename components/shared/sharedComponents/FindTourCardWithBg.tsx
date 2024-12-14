import React from 'react'
import Image from 'next/image'
import bg from '@/assets/images/hotels/bg-triangle.webp'
import FindTourCard from '@/components/tours/FindTourCard'


const FindTourCardWithBg = () => {
    return (
        <div className="w-full  h-auto relative py-12"
            style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-gray-200  pointer-events-none"></div>
            <div className="flex flex-col items-center justify-center h-full px-4 md:px-8 lg:px-12 ">

                <FindTourCard

                />


            </div>
        </div>

    )
}

export default FindTourCardWithBg