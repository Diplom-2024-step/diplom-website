"use client"
import React, { useState } from "react";
import Image from 'next/image';
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import background from '../../assets/images/block-1/image-2.png';
import avatar from '../../assets/images/profile/avatar.png';

const Profile= () => {
  const [activeTab, setActiveTab] = useState(""); // Состояние для активной вкладки


  return (
    <div className="flex flex-col items-center  min-h-screen ">
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
        {/* Имя пользователя */}
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
            Ім’я Прізвище
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
        <CardHeader className="w-2/3  h-9 mt-0 pt-1 bg-[#FFFFFF] text-[#161616]  rounded-tl-[20px] rounded-tr-[20px] ">
          <div className="flex justify-between text-[#161616]">
            <button
              onClick={() => setActiveTab("booked")}
              className={`flex-1 px-6 pt-2 text-sm font-medium rounded-tr-[20px] border-r-2 border-gray-300 shadow-right whitespace-nowrap 
                relative transition-all duration-300 ease-in-out 
                ${  activeTab === "booked" ? "text-[#0F171B] scale-110 " : "text-[#161616]" }`}>
              Заброньовані тури
            </button>
            <button 
            onClick={() => setActiveTab("completed")}
            className={` flex-1  px-6 pt-2 text-sm font-medium rounded-tr-[20px] border-r-2 border-gray-300 shadow-right whitespace-nowrap 
              relative transition-all duration-300 ease-in-out 
              ${  activeTab === "completed" ? "text-[#0F171B] scale-110 z-10" : "text-[#161616]" }`}>
              Завершені тури
            </button>
            <button 
             onClick={() => setActiveTab("favorites")}
            className={` flex-1  px-11 pt-2 text-sm font-medium rounded-tr-[20px] border-r-2 border-gray-300 shadow-right whitespace-nowrap 
              relative transition-all duration-300 ease-in-out 
              ${ activeTab === "favorites" ? "text-[#0F171B] scale-110" : "text-[#161616]" }`}>
              Обране
            </button>
            <button 
            onClick={() => setActiveTab("comments")}
            className={` flex-1  pl-7 pt-2 text-sm font-medium  shadow-right  whitespace-nowrap
              relative transition-all duration-300 ease-in-out 
              ${ activeTab === "comments" ? "text-[#0F171B] scale-110" : "text-[#161616]"  }`}>
              Мої коментарі
            </button>
          </div>
        </CardHeader>

        <CardBody className="h-96 w-full text-[#0F171B] bg-white rounded-tr-[20px] shadow-lg">
          {/* {activeTab === "booked" && <p>Контент для заброньованих турів</p>}
          {activeTab === "completed" && <p>Контент для завершених турів</p>}
          {activeTab === "favorites" && <p>Контент для обраного</p>}
          {activeTab === "comments" && <p>Контент для коментарів</p>} */}
        </CardBody>
      </Card>
    </div>
  );
};

export default Profile;
