"use client"
import HotelDescription from '@/components/hotels/hotelDetails/HotelDescription'
import HotelDetailHeader from '@/components/hotels/hotelDetails/HotelDetailHeader'
import TravelBooking from '@/components/hotels/hotelDetails/travelBooking/TravelBooking'
import PaymentGuaranteeSection from '@/components/hotels/layout/PaymentGuaranteeSection'
import RecomendedToursCarouselForHotel from '@/components/tours/Carsousels/RecomendedToursCarouselForHotel'
import { HotelService } from '@/service/crudServices/HotelService'
import React, { Key, useState } from 'react'

const page = async ({ params }: { params: { id: string } }) => {

  const service = new HotelService();

  const [option, setOption] = useState("hotel");

  const onSelectChage = (value: Key) => {
    setOption(value.toString())
  }

  const retunrOptionPage = (value: string) => {
    if (value === "hotel") {
      return <TravelBooking
      hotel={hotel}
      />
    }
    else if (value === "description") {
      return <HotelDescription
        hotel={hotel}

      />

    }
    else if (value === "photos") {

      return <></>
    }
    else if (value === "reviews") {
      return <></>
    }


  }

  const hotel = await service.getById(params.id);

  return (
    <>
      <div className='container mx-auto mb-0 max-w-7xl px-5 flex-grow'>
        <HotelDetailHeader
          hotel={hotel}
          onSelectChage={onSelectChage}
        />
        {
          retunrOptionPage(option)
        }
      </div>

      <PaymentGuaranteeSection />

      <RecomendedToursCarouselForHotel hotelId={params.id}
      />
    </>
  )
}

export default page