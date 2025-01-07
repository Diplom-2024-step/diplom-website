"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import photo1 from "../../assets/images/reviews/character3.png";
import photo2 from "../../assets/images/reviews/character5.png";
import photo3 from "../../assets/images/reviews/character2.png";
import photo4 from "../../assets/images/reviews/character4.png";
import { Link } from "@nextui-org/link";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

const reviews = [
  {
    photo: photo1,
    date: "10 Вер 2024",
    time: "15:23",
    text: "Дуже задоволений сервісом тур агентства! Усе було організовано на найвищому рівні. Оперативна підтримка від менеджера під час планування і в поїздці допомогла вирішити всі питання. Житло...",
    name: "Максим Шевчук",
  },
  {
    photo: photo2,
    date: "10 Вер 2024",
    time: "15:23",
    text: "Загалом усе сподобалося. Організація поїздки була чудовою – екскурсії продумані до дрібниць, і кожен день був насичений враженнями. Обслуговування було на рівні, хоча інколи доводилося...",
    name: "Олег Павленко",
  },
  {
    photo: photo3,
    date: "10 Вер 2024",
    time: "15:23",
    text: "Чудовий відпочинок завдяки цій тур агенції! З перших хвилин співпраці відчувався професіоналізм. Всі питання вирішувалися оперативно, тур був продуманий до дрібниць. Житло перевершило...",
    name: "Анна Мельник",
  },
  {
    photo: photo4,
    date: "10 Вер 2024",
    time: "15:23",
    text: "Відпочинок загалом сподобався, особливо організація поїздок – екскурсії були цікаві та насичені. Проте житло не відповідало моїм очікуванням – трохи застарілий інтер’єр і слабке прибирання. Але...",
    name: "Олена Савчук",
  },
];
const userImages = [photo1, photo2, photo3, photo4];

const RatingAndReviews = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleNext = (): void => {
    setCurrentIndex((prev) => (prev + 1) % (reviews.length - 2));
  };

  const handlePrev = (): void => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return reviews.length - 3;
      } else {
        return prev - 1;
      }
    });
  };

  const handleDotClick = (index: number): void => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center mb-[50px]">
      <div className="flex flex-col items-center   h-full mt-10 mb-10 w-4/5">
        <p className="lg:text-[43px] text-[26px] font-bold mb-[35px] text-customBlack font-unbounded">
          Рейтинг та відгуки
        </p>
      </div>
      {/* Версия для пк */}
      <div className="hidden lg:flex flex-col w-4/6 bg-gray-100">
        <div className="grid grid-cols-5 gap-4 p-4 rounded-lg">
          <div className="col-span-1 flex flex-col items-center">
            <p className="text-[75px] font-bold text-black">4.8</p>
            <div className="flex mt-2">
              <span className="text-yellow-500 text-[35px]">★★★★★</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              на основі 1550 відгуків
            </p>
          </div>

          <div className="col-span-3 grid grid-cols-2 gap-4 mt-[20px]">
            <div>
              <div className="flex justify-between items-center">
                <p className="text-black">Обслуговування</p>
                <p className="text-black">86%</p>
              </div>
              <div className="h-4 w-full bg-customAqua rounded-full mt-1">
                <div className="h-full w-[86%] bg-yellow-500 rounded-full"></div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <p className="text-black">Організація поїздок</p>
                <p className="text-black">91%</p>
              </div>
              <div className="h-4 w-full bg-customAqua rounded-full mt-1">
                <div className="h-full w-[91%] bg-yellow-500 rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <p className="text-black">Житло</p>
                <p className="text-black">80%</p>
              </div>
              <div className="h-4 w-full bg-customAqua rounded-full mt-1">
                <div className="h-full w-[80%] bg-yellow-500 rounded-full"></div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <p className="text-black">Ціна/Якість</p>
                <p className="text-black">86%</p>
              </div>
              <div className="h-4 w-full bg-customAqua rounded-full mt-1">
                <div className="h-full w-[86%] bg-yellow-500 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center mt-[20px] space-y-2">
            <div className="text-yellow-500 text-2xl">😊</div>
            <div className="text-blue-400 text-2xl">😐</div>
            <div className="text-blue-400 text-2xl">☹️</div>
          </div>
        </div>
        {/* Блок отзывов */}
        <div className="grid grid-cols-4 m-[45px] gap-4 mt-8 h-[350px]">
          {reviews.map((review, index) => (
            <div key={index} className="p-4 bg-customAqua rounded-lg">
              {/* Фото пользователя */}
              <div className="flex items-center h-[15%]">
                <Image
                  src={review.photo}
                  alt={`User ${index + 1}`}
                  className="w-12 h-12 bg-yellow-100 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-semibold text-black">{review.name}</p>
                  <div className="flex mt-1">
                    {/* Звёзды рейтинга */}
                    <span className="text-yellow-500">★★★★★</span>
                  </div>
                </div>
              </div>

              {/* Текст отзыва */}
              <div className="h-[65%]">
                <p className="text-gray-700 mt-4">{review.text}</p>
              </div>

              {/* Дата и иконки */}
              <div className="flex flex-col mt-4 text-gray-600 text-sm">
                <p>{review.time}</p>
                <p>{review.date}</p>
              </div>
            </div>
          ))}
        </div>
        <Link
          href={"/aboutUs#reviews"}
          className="flex items-center m-[45px] p-2 group backdrop-blur-sm rounded-full 
              transition-all duration-300 "
        >
          <p className="text-black text-[20px]">Переглянути більше</p>
          <Icon
            icon="ei:arrow-up"
            className={`w-10 h-10 transition-transform group-hover:-translate-y-3 group-hover:text-primary rotate-45 text-black ml-[12px]`}
          />
        </Link>
      </div>
      {/* Версия для мобилок */}
      <div className="lg:hidden flex flex-col w-5/6 bg-gray-100">
        <div className=" rounded-lg">
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-center">
              <p className="text-[95px] self-start font-bold text-black mb-[-20px]">
                4.8
              </p>
              <div className="flex">
                <span className="text-yellow-500 text-[35px]">★★★★★</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                на основі 1550 відгуків
              </p>
            </div>
            <div className="space-y-5 ml-5">
              <div className="text-yellow-500 text-3xl">😊</div>
              <div className="text-blue-400 text-3xl">😐</div>
              <div className="text-blue-400 text-3xl">☹️</div>
            </div>
          </div>

          <div className="mt-[20px] mr-[50px] ml-[50px]">
            <div>
              <div className="flex justify-between items-center">
                <p className="text-black">Обслуговування</p>
                <p className="text-black">86%</p>
              </div>
              <div className="h-4 w-full bg-customAqua rounded-full mt-1">
                <div className="h-full w-[86%] bg-yellow-500 rounded-full"></div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <p className="text-black">Організація поїздок</p>
                <p className="text-black">91%</p>
              </div>
              <div className="h-4 w-full bg-customAqua rounded-full mt-1">
                <div className="h-full w-[91%] bg-yellow-500 rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mt-4">
                <p className="text-black">Житло</p>
                <p className="text-black">80%</p>
              </div>
              <div className="h-4 w-full bg-customAqua rounded-full mt-1">
                <div className="h-full w-[80%] bg-yellow-500 rounded-full"></div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <p className="text-black">Ціна/Якість</p>
                <p className="text-black">86%</p>
              </div>
              <div className="h-4 w-full bg-customAqua rounded-full mt-1">
                <div className="h-full w-[86%] bg-yellow-500 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center mt-[20px] space-y-2"></div>
        </div>
        {/* Блок отзывов */}
        <div className="m-[45px] mt-8 h-[350px]">
          <div className="w-full mx-auto px-4 text-black">
            <div className="w-full">
              <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="swiper-container"
              >
                {reviews.map((review, index) => (
                  <SwiperSlide key={index} className="flex mb-[30px]">
                    <div className="p-4 bg-customAqua rounded-lg">
                      <div className="flex items-center h-[15%]">
                        <Image
                          src={review.photo}
                          alt={`User ${index + 1}`}
                          className="w-12 h-12 bg-yellow-100 rounded-full object-cover"
                        />
                        <div className="ml-4">
                          <p className="font-semibold text-black">
                            {review.name}
                          </p>
                          <div className="flex mt-1">
                            <span className="text-yellow-500">★★★★★</span>
                          </div>
                        </div>
                      </div>
                      <div className="h-[65%]">
                        <p className="text-gray-700 mt-4">{review.text}</p>
                      </div>
                      <div className="flex flex-col mt-4 text-gray-600 text-sm">
                        <p>{review.time}</p>
                        <p>{review.date}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <Link
          href={"/aboutUs#reviews"}
          className="flex items-center m-[45px] p-2 group backdrop-blur-sm rounded-full 
              transition-all duration-300 "
        >
          <p className="text-black text-[20px]">Переглянути більше</p>
          <Icon
            icon="ei:arrow-up"
            className={`w-10 h-10 transition-transform group-hover:-translate-y-3 group-hover:text-primary rotate-45 text-black ml-[12px]`}
          />
        </Link>
      </div>
    </div>
  );
};

export default RatingAndReviews;
