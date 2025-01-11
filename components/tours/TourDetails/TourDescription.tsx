import Link from "next/link";
import React from "react";

import TravelBooking from "@/components/tours/TourDetails/travelBooking/TravelBooking";
import { GetTourDto } from "@/AppDtos/Dto/Models/Tours/get-tour-dto";

import ImageGallery from "./imageGallery/ImageGallery";

const TourDescription = ({ tour }: { tour: GetTourDto }) => {
  return (
    <>
      <TravelBooking tour={tour} />
      <div>
        <h1 className="text-[50px] font-bold font-unbounded">Опис готелю</h1>
        <p className="text-[30px] text-gray-400">
          Характеристика та контактні дані
        </p>
      </div>
      <div className="rounded-tl-md rounded-tr-md overflow-hidden mr-auto mt-10 text-black bg-white shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Left Column */}
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Розташування</h2>
              <p className="text-gray-600">{tour.hotel.descriptionLocation}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Пляж</h2>
              <p className="text-gray-600">
                {tour.hotel.descriptionForBeachTypes}
              </p>
              <ul className="list-none space-y-1 text-gray-600">
                {tour.hotel.beachTypes.map((key, value) => (
                  <li key={value}>- {key.name}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Розваги та спорт</h2>
              <p className="text-gray-600">{tour.hotel.descriptionForSports}</p>
              <ul className="list-none space-y-1 text-gray-600">
                {tour.hotel.forSports.map((key, value) => (
                  <li key={value}>- {key.name}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Типи харчування</h2>
              <ul className="list-none space-y-1 text-gray-600">
                {tour.hotel.dietTypes.map((key, value) => (
                  <li key={value}>
                    - {key.name} - {key.price} грн.
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">В готелі</h2>
              <p className="text-gray-600 mb-2">
                {tour.hotel.descriptionForInHotels}
              </p>
              <ul className="list-none space-y-1 text-gray-600">
                {tour.hotel.inHotels.map((key, value) => (
                  <li key={value}>- {key.name}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Кімнати</h2>
              <ul className="list-none space-y-1 text-gray-600">
                {tour.hotel.inRooms.map((key, value) => (
                  <li key={value}>- {key.name}</li>
                ))}
              </ul>
              <p className="text-gray-600 mt-2">
                {tour.hotel.howManyRooms} номерів
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Типи номерів</h2>
              <ul className="list-none space-y-1 text-gray-600">
                {tour.hotel.roomTypes.map((key, value) => (
                  <li key={value}>
                    - {key.name} - {key.price} грн.
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <div className=" mt-12 flex flex-col md:flex-row gap-0 text-white align-bottom  ">
          <div className="bg-primary p-4 md:rounded-tr-lg flex-1 md:w-1/4 mt-auto h-40 md:shadow-lg">
            <h3 className="font-semibold mb-2">Адреса</h3>
            <p className="text-sm text-wrap">{tour.hotel.adress}</p>
          </div>
          <div className="bg-primary p-4 md:rounded-tr-lg  md:mt-auto flex-1 md:w-1/4 my-0   h-36 md:-ml-4 md:shadow-lg">
            <h3 className="font-semibold mb-2">E-mail</h3>
            <p className="text-sm">{tour.hotel.email}</p>
          </div>
          <div className="bg-primary p-4 md:rounded-tr-lg  md:mt-auto flex-1 md:w-1/4 h-32 mt-auto md:-ml-4 md:shadow-lg">
            <h3 className="font-semibold mb-2">Телефон</h3>
            <p className="text-sm">{tour.hotel.telephoneNumber}</p>
          </div>
          <div className="bg-primary p-4  md:mt-auto flex-1 md:w-1/4 h-28 mt-auto  md:-ml-4 md:rounded-r-lg md:shadow-lg">
            <h3 className="font-semibold mb-2">Сайт готелю</h3>
            <Link className="text-sm" href={tour.hotel.webSiteUrl}>
              {tour.hotel.name}
            </Link>
          </div>
        </div>
      </div>
      <ImageGallery urls={tour.urls} />
    </>
  );
};

export default TourDescription;
