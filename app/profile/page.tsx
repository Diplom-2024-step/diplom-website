"use client"
import { LoadingState, SortDescriptor } from "@react-types/shared";
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import background from '../../assets/images/block-1/image-2.webp';
import avatar from '../../assets/images/profile/avatar.png';
import { useAuth, useAuthService } from "@/hooks/auth";
import LoadingScreen from "@/components/shared/LoadingScreen";
import UserService from "@/service/UserService";
import { useSearchHistory } from "@/hooks/useSearchHistory";
import HistoryCarousel from "@/components/profile/HistoryCarousel";

import surfing from "../../assets/images/profile/surfing.jpg";
import diving from "../../assets/images/profile/diving.jpg";
import tennis from "../../assets/images/profile/tennis.jpg"
import climbing from "../../assets/images/profile/Climbing.png";
import yachtTrips from "../../assets/images/profile/Yacht-trips.png";
import sapi from "../../assets/images/profile/Sapi.png";
import quadracycles from "../../assets/images/profile/Quadracycles.png";

import TravelCardProfile from "../../components/profile/travelCard";
import {TravelCardProps} from "../../components/profile/travelCard";
import useDebounceState from "@/hooks/useDebounceState";
import { ReturnPageDto } from "@/AppDtos/Shared/return-page-dto";
import { GetUserDto, getUserDtoSchema } from "@/AppDtos/Dto/Users/get-user-dto";
import { FilterDto } from "@/AppDtos/Shared/filter-dto";
import useGetPageOfItems from "@/hooks/useGetPageOfItems";
import { stat } from "fs";
import FavoriteHotelsTab from "@/components/profile/FavoriteHotelsTab";
import FavoriteTab from "@/components/profile/FavoriteTab";

const Profile= () => {
  const [activeTab, setActiveTab] = useState("booked"); // Состояние для активной вкладки

  const cardsData: TravelCardProps[] = [
    {
      title: "Beachscape Kin Ha Villas & Suites",
      location: "Мексика, Канкун",
      price: "27 882",
      tourists: "1 Дорослий",
      departure: "10 Дек 2024",
      room: "Standard Double Room",
      meals: "Сніданки (BB)",
      activities: [
        { name: "Серфінг", image: surfing.src },
        { name: "Дайвінг", image: diving.src },
        { name: "Теніс", image: tennis.src },
        { name: "Скелелазіння", image: climbing.src },
        { name: "Прогулянки на яхті", image: yachtTrips.src },
        { name: "Сапи", image: sapi.src },
        { name: "Квадрацикли", image: quadracycles.src },
      ],
      stars: 4, // Добавлено поле для звезд
    },
    {
      title: "Royal Caribbean Resort",
      location: "Таїланд, Паттайя",
      price: "21 550",
      tourists: "2 Дорослих",
      departure: "15 Янв 2025",
      room: "Suite",
      meals: "Все включено (AI)",
      activities: [
        { name: "Скелелазіння", image: climbing.src },
        { name: "Прогулянки на яхті", image: yachtTrips.src },
        { name: "Сапи", image: sapi.src },
      ],
      stars: 5, // Добавлено поле для звезд
    },
  ];

  const [user, setUser] = useState<GetUserDto>();

  const auth = useAuth( {
    redirect: true
  });


  const service = UserService;




  const status = useAuthService(service);
  

  useEffect(() => {
  const fetchData = async () => {
    if (status === "success" && auth.status === "authorized") {
      try {
        setUser((await service.getUserById(auth.user?.user.id!)).data);
      } catch (error) {
        console.error("Error fetching user:", error);
        // Handle the error appropriately
      }
    }
  };

  fetchData();
}, [status]);



  



  if (auth.status === "loading" || auth.status === 'unauthorized' || user === undefined) return <LoadingScreen/>


  return (
    <div className="flex flex-col items-center  min-h-screen pb-10 ">
      {/* Header Section */}
      <div className="w-full h-64 relative">
        <Image
          src={background.src}
          alt="Background"
          objectFit="cover"
          fill
          className=""
        />
        <div className="absolute -bottom-11 left-1/2 transform -translate-x-1/2 z-30 rounded-full bg-[#FFFFFF] border-[20px] border-white">
          <div className="rounded-full bg-[#FFFFFF] border-[20px] border-white">
          <div className="w-32 h-32  flex items-center justify-center">
            <Image
              src={avatar.src} 
              alt="avatar"
              objectFit="cover"
              fill
              className=""
            />
          </div>
          </div>
                  </div>

        <div
          style={{
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // тень для выделения
          }}
          className="absolute top-48 left-1/2 transform -translate-x-1/2 w-3/4 h-40 rounded-[10px] bg-[#FFFFFF] flex justify-center items-center text-center shadow-lg z-10"
        >
          <h2
            style={{ fontFamily: 'Unbounded, sans-serif', fontWeight: 600 }}
            className=" pt-20  text-xl text-[#0F171B]"
          >
            {user.userName}
          </h2>
        </div>
      </div>


      {/* Profile Card */}
      <Card
        classNames={{
          base: "bg-transparent shadow-none"
        }}
        isBlurred={false}
        isFooterBlurred={false}
        radius='none'
        className="w-3/4 md:max-w-[75%] mt-36 rounded-tl-[20px] rounded-br-[20px] rounded-bl-[30px] z-0">
        <CardHeader className="w-2/4  h-9 mt-0 pt-1 bg-[#FFFFFF] text-[#161616]  rounded-tl-[20px] rounded-tr-[20px] ">
          <div className="flex justify-between text-[#161616]">
            <button
              onClick={() => setActiveTab("booked")}
              className={`flex-1 px-6 pt-2 text-sm font-medium rounded-tr-[20px] whitespace-nowrap 
                relative 
                ${activeTab === "booked" ? "text-[#0F171B] scale-110 " : "text-[#161616]"}
                ${activeTab === "completed" ? "border-r-0" : "border-r-2 border-gray-300  shadow-right"}`}>
              Заброньовані тури
            </button>
            <button
              onClick={() => setActiveTab("completed")}
              className={` flex-1  px-6 pt-2 text-sm font-medium rounded-tr-[20px] shadow-right whitespace-nowrap 
              relative
              ${activeTab === "completed" ? "text-[#0F171B] scale-110 rounded-tl-[20px] shadow-left rounded-tr-[20px] shadow-right border-l-2 border-gray-300" : "text-[#161616]"} 
              ${activeTab === "favorites" ? "border-r-0" : "border-r-2 border-gray-300"}`}>
              Завершені тури
            </button>
            <button
              onClick={() => setActiveTab("favorites")}
              className={` flex-1  px-11 pt-2 text-sm font-medium rounded-tr-[20px] shadow-right whitespace-nowrap 
              relative
              ${activeTab === "favorites" ? "text-[#0F171B] scale-110 rounded-tl-[20px] shadow-left rounded-tr-[20px] shadow-right border-l-2 border-gray-300" : "text-[#161616]"} 
              ${activeTab === "comments" ? "border-r-0" : "border-r-2 border-gray-300"} `}>
              Обране
            </button>
            <button
              onClick={() => setActiveTab("comments")}
              className={` flex-1  pl-7 pt-2 text-sm font-medium  shadow-right   whitespace-nowrap
              relative
              ${activeTab === "comments" ? "text-[#0F171B] scale-110 rounded-tl-[20px] shadow-left border-l-2 border-gray-300" : "text-[#161616]"}`}>
              Мої коментарі
            </button>
          </div>
        </CardHeader>

        <CardBody className="h-auto w-full  text-[#0F171B] bg-white rounded-tr-[20px] shadow-lg">
          {activeTab === "booked" && (
            <div className="my-10">
              {cardsData.map((card, index) => (
                <TravelCardProfile key={index} {...card} />
              ))}
            </div>
          )}

          {
            activeTab === "favorites" && (
              <FavoriteTab user={user}              
              />
            )
          }
        </CardBody>

        {/* {activeTab === "completed" && <p>Контент для завершених турів</p>}
            {activeTab === "favorites" && <p>Контент для обраного</p>}
            {activeTab === "comments" && <p>Контент для коментарів</p>} */}
      </Card>


      <HistoryCarousel />
    </div>
  );
};


export default Profile;
