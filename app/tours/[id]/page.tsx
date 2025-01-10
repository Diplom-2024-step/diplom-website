"use client";
import TourDescription from "@/components/tours/TourDetails/TourDescription";
import TourDetailHeader from "@/components/tours/TourDetails/TourDetailHeader";
import TravelBooking from "@/components/tours/TourDetails/travelBooking/TravelBooking";
import TravelDescription from "@/components/tours/TourDetails/travelBooking/TravelDescription";
import PaymentGuaranteeSection from "@/components/hotels/layout/PaymentGuaranteeSection";
import SelectCountryForHotels from "@/components/shared/sharedComponents/selects/SelectCountryForHotels";
import LoadingCircle from "@/components/shared/skeletons/LoadingCircle";
import ReviewCardCarouselWithService from "@/components/reviews/ReviewCardCarouselWithService";
import RecomendedToursCarouselForHotel from "@/components/tours/Carsousels/RecomendedToursCarouselForHotel";
import { TourService } from "@/service/crudServices/TourService";
import React, { Key, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "@nextui-org/react";

const page = async ({ params }: { params: { id: string } }) => {
  const service = new TourService();

  const [option, setOption] = useState("tour");
  const [tour, setTour] = useState<any>(null);

  const onSelectChage = (value: Key) => {
    setOption(value.toString());
  };

  const retunrOptionPage = (value: string) => {
    if (value === "tour") {
      return <TravelDescription tour={tour} />;
    } else if (value === "description") {
      return <TourDescription tour={tour} />;
    } else if (value === "reviews") {
      return <ReviewCardCarouselWithService reviewableId={params.id} />;
    }
  };

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const fetchedTour = await service.getById(params.id);
        setTour(fetchedTour);
      } catch (error) {
        console.error("Error fetching tour data:", error);
      }
    };

    fetchTourData();
  }, [params.id]);

  return (
    <>
      {tour !== null ? (
        <>
          <div className="container mx-auto mb-0 max-w-7xl px-5 flex-grow">
            <div className="flex items-center h-full">
              <Link href={`/tours`}>
                <h1 className="text-black">Повернутись до турів</h1>
                <Icon
                  icon="ei:arrow-up"
                  className={`w-10 h-10 transition-transform rotate-[315deg] text-black
                }`}
                />
              </Link>
            </div>
            <TourDetailHeader
              tour={tour}
              onSelectChage={onSelectChage}
              activeTab={option}
            />
            {retunrOptionPage(option)}
          </div>

          <PaymentGuaranteeSection />

          <RecomendedToursCarouselForHotel hotelId={tour.hotel.id} />
        </>
      ) : (
        <LoadingCircle />
      )}
    </>
  );
};

export default page;
