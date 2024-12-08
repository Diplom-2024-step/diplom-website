import { GetTourDto } from "@/AppDtos/Dto/Models/Tours/get-tour-dto";
import { Card, Tab, Tabs } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { MapPin } from "lucide-react";
import React, { Key } from "react";

const TourDetailHeader = ({
  tour,
  onSelectChage,
  activeTab,
}: {
  tour: GetTourDto;
  onSelectChage: (value: string) => void;
  activeTab: string;
}) => {
  return (
    <div className="flex flex-col mt-10">
      {/* Left Sidebar with Tabs */}
      <div className="mr-auto mt-auto text-black">
        <div className="flex justify-between text-[#161616] rounded-r-2">
          <button
            onClick={() => onSelectChage("tour")}
            className={`flex-1 px-11 pt-2 text-sm font-medium bg-white rounded-t-[20px] border-r-2 border-gray-300 shadow-right whitespace-nowrap relative transition-all duration-300 ease-in-out 
        ${activeTab === "tour" ? "text-[#0F171B] !bg-gray-100" : "text-[#161616]"}
        hover:bg-gray-100 hover:text-[#0F171B]`}
          >
            Тур
          </button>
          <button
            onClick={() => onSelectChage("description")}
            className={`flex-1 px-11 pt-2 text-sm font-medium  rounded-t-[20px] border-r-2 border-gray-300 shadow-right whitespace-nowrap 
        relative transition-all duration-300 ease-in-out 
        ${activeTab === "description" ? "text-[#0F171B] !bg-gray-300" : "text-[#161616] bg-white"}
        hover:bg-gray-100 hover:text-[#0F171B]`}
          >
            Готель
          </button>
          <button
            onClick={() => onSelectChage("photos")}
            className={`flex-1 px-11 pt-2 text-sm font-medium bg-white rounded-t-[20px] border-r-2 border-gray-300 shadow-right whitespace-nowrap 
        relative transition-all duration-300 ease-in-out 
        ${activeTab === "photos" ? "text-[#0F171B] bg-gray-100" : "text-[#161616]"}
        hover:bg-gray-100 hover:text-[#0F171B]`}
          >
            Фото
          </button>
          <button
            onClick={() => onSelectChage("reviews")}
            className={`flex-1 pl-7 px-11 pt-2 text-sm font-medium bg-white rounded-t-[20px] border-r-2 shadow-right whitespace-nowrap   
        relative transition-all duration-300 ease-in-out 
        ${activeTab === "reviews" ? "text-[#0F171B] bg-gray-100" : "text-[#161616]"}
        hover:bg-gray-100 hover:text-[#0F171B]`}
          >
            Відгуки
          </button>
        </div>
      </div>

      {/* Main Content */}
      <Card
        className="flex-grow w-full bg-white rounded-tr-[58px] shadow-lg overflow-hidden border border-gray-100 text-black"
        radius="none"
      >
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tour Image */}
            <div className="w-full">
              <div
                className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-md"
                style={{
                  backgroundImage: `url(${tour.urls[0]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>

            {/* Tour Information */}
            <div className="flex flex-col justify-between">
              <div className="space-y-6">
                {/* Tour Name and Rating */}
                <div className="flex justify-between items-start">
                  <h1 className="text-3xl font-bold text-gray-900">
                    {tour.hotel.city.country.name}, {tour.hotel.city.name}
                  </h1>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-sky-500">
                  <MapPin className="w-5 h-5" />
                  <span>
                    {tour.hotel.city.country.name}, {tour.hotel.city.name}
                  </span>
                  <div className="ml-2 flex items-center text-center">
                    <div className="text-2xl font-bold text-gray-900 mr-2">
                      {tour.hotel.stars}
                    </div>
                    <div className="flex gap-1">
                      {[...Array(tour.hotel.stars)].map((i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                      {[...Array(5 - tour.hotel.stars)].map((i) => (
                        <svg
                          className="w-5 h-5 text-yellow-400 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                            opacity="0.5"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className=" rounded-lg p-4">
                  <p className=" leading-relaxed">{tour.hotel.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TourDetailHeader;
