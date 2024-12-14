"use client"
import HotelDescription from '@/components/hotels/hotelDetails/HotelDescription'
import HotelDetailHeader from '@/components/hotels/hotelDetails/HotelDetailHeader'
import ImageGallery from '@/components/hotels/hotelDetails/imageGallery/ImageGallery'
import TravelBooking from '@/components/hotels/hotelDetails/travelBooking/TravelBooking'
import PaymentGuaranteeSection from '@/components/hotels/layout/PaymentGuaranteeSection'
import ReviewCardCarouselWithService from '@/components/reviews/ReviewCardCarouselWithService'
import SelectCountryForHotels from '@/components/shared/sharedComponents/selects/SelectCountryForHotels'
import LoadingCircle from '@/components/shared/skeletons/LoadingCircle'
import RecomendedToursCarouselForHotel from '@/components/tours/Carsousels/RecomendedToursCarouselForHotel'
import { HotelService } from '@/service/crudServices/HotelService'
import React, { Key, useEffect, useState } from 'react'

const page = async ({ params }: { params: { id: string } }) => {

  const service = new HotelService();

  const [option, setOption] = useState("hotel");
  const [hotel, setHotel] = useState<any>(null);

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

      return <ImageGallery urls={hotel.urls} />
    }
    else if (value === "reviews") {
      return <ReviewCardCarouselWithService reviewableId={params.id}/>
    }


  }

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const fetchedHotel = await service.getById(params.id);
        setHotel(fetchedHotel);
      } catch (error) {
        console.error("Error fetching hotel data:", error);
      }
    };

    fetchHotelData();
  }, [params.id]);

  return (
    <>
      {
        hotel !== null ? <>
          <div className='container mx-auto mb-0 max-w-7xl px-5 flex-grow'>
            <HotelDetailHeader
              hotel={hotel}
              onSelectChage={onSelectChage}
              activeTab={option}
            />
            {
              retunrOptionPage(option)
            }
          </div>

          <PaymentGuaranteeSection />

            <div className='mb-5'>
          <RecomendedToursCarouselForHotel hotelId={params.id}
          />

</div>
        </>
          : <LoadingCircle />
      }
    </>
  )
}

export default page