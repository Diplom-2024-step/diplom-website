"use client"
import HotelDetailHeader from '@/components/hotels/layout/HotelDetailHeader'
import PaymentGuaranteeSection from '@/components/hotels/layout/PaymentGuaranteeSection'
import React from 'react'

const layout = () => {
  return (
    <>
    <div className='container mx-auto mb-0 max-w-7xl px-5 flex-grow'>
    <HotelDetailHeader/>
</div>
    <PaymentGuaranteeSection/>
    </>
  )
}

export default layout