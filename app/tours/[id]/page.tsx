"use client";
import React, { Key, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

import TourDescription from "@/components/tours/TourDetails/TourDescription";
import TourDetailHeader from "@/components/tours/TourDetails/TourDetailHeader";
import TravelDescription from "@/components/tours/TourDetails/travelBooking/TravelDescription";
import PaymentGuaranteeSection from "@/components/hotels/layout/PaymentGuaranteeSection";
import LoadingCircle from "@/components/shared/skeletons/LoadingCircle";
import ReviewCardCarouselWithService from "@/components/reviews/ReviewCardCarouselWithService";
import RecomendedToursCarouselForHotel from "@/components/tours/Carsousels/RecomendedToursCarouselForHotel";
import { TourService } from "@/service/crudServices/TourService";

const Page = async ({ params }: { params: { id: string } }) => {
  const service = new TourService();

  const router = useRouter();

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
            <div
              className="flex items-center h-full mt-5 group"
              role="button"
              onClick={() => router.back()}
            >
              <h2 className="text-black">Повернутись до турів</h2>
              <Icon
                className={`w-10 h-10 transition-transform rotate-[315deg] text-black group-hover:text-primary group-hover:-translate-y-5
                }`}
                icon="ei:arrow-up"
              />
            </div>
            <TourDetailHeader
              activeTab={option}
              tour={tour}
              onSelectChage={onSelectChage}
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

export default Page;
