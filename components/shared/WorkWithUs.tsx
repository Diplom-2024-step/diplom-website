// WorkWithUs.tsx
import React from "react";
import { Button } from "@nextui-org/react";
import "../../assets/fonts-styles/font.css";

const WorkWithUs: React.FC = () => {
  return (
    <div>
      <div className="hidden lg:flex flex-col bg-[#e1ebf1] my-8 py-10 text-center overflow-hidden">
        <h2
          style={{ fontFamily: "Unbounded, sans-serif" }}
          className="text-[26px] font-bold text-gray-800 mb-12"
        >
          Працювати з нами - просто
        </h2>

        {/* Шаг 1 */}
        <div className="flex items-center justify-center bg-white space-x-20">
          <div className="w-1/3 bg-[#5DB3C1] flex items-center justify-end rounded-tr-[45px] rounded-br-[45px] py-4 pr-[5.5rem]">
            <span
              style={{
                fontFamily: "Unbounded, sans-serif",
                color: "#5DB3C1",
                textShadow:
                  "0 0 0 white, 1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white", // Создание обводки
              }}
              className="font-bold text-4xl"
            >
              0 1
            </span>
          </div>
          <div className="w-2/3 bg-white py-4 flex items-center justify-start px-4">
            <p
              style={{ fontFamily: "Nunito, sans-serif", fontWeight: 650 }}
              className="text-gray-700 text-sm md:text-base"
            >
              Зареєструйтесь або увійдіть у свій особистий кабінет
            </p>
          </div>
        </div>

        {/* Шаг 2 */}
        <div className="flex items-center justify-center py-2 space-x-20">
          <div className="w-1/3 flex items-center justify-end py-4 pr-[5rem]">
            <span
              style={{ fontFamily: "Unbounded, sans-serif" }}
              className="text-[#5DB3C1] font-bold text-4xl"
            >
              0 2
            </span>
          </div>
          <div className="w-2/3 py-4 flex items-center justify-start px-4">
            <p
              style={{ fontFamily: "Nunito, sans-serif", fontWeight: 650 }}
              className="text-gray-700 text-sm md:text-base"
            >
              Оберіть тур із запропонованих варіантів
            </p>
          </div>
        </div>

        {/* Шаг 3 */}
        <div className="flex items-center justify-center bg-white space-x-20">
          <div className="w-1/3 bg-[#5DB3C1] flex items-center justify-end rounded-tr-[45px] rounded-br-[45px] py-4 pr-[5rem]">
            <span
              style={{
                fontFamily: "Unbounded, sans-serif",
                color: "#5DB3C1",
                textShadow:
                  "0 0 0 white, 1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white", // Создание обводки
              }}
              className="font-bold text-4xl"
            >
              0 3
            </span>
          </div>
          <div className="w-2/3 bg-white py-4 flex items-center justify-start px-4">
            <p
              style={{ fontFamily: "Nunito, sans-serif", fontWeight: 650 }}
              className="text-gray-700 text-sm md:text-base"
            >
              Укладіть договір з нашою агенцією
            </p>
          </div>
        </div>

        {/* Шаг 4 */}
        <div className="flex items-center justify-center py-2  space-x-20">
          <div className="w-1/3 flex items-center justify-end py-4 pr-[5rem]">
            <span
              style={{ fontFamily: "Unbounded, sans-serif" }}
              className="text-[#5DB3C1] font-bold text-4xl"
            >
              0 4
            </span>
          </div>
          <div className="w-2/3 py-4 flex items-center justify-start px-4">
            <p
              style={{ fontFamily: "Nunito, sans-serif", fontWeight: 650 }}
              className="text-gray-700 text-sm md:text-base"
            >
              Внесіть оплату та очікуйте на свої документи
            </p>
          </div>
        </div>

        {/* Шаг 5 */}
        <div className="flex items-center justify-center bg-white space-x-20">
          <div className="w-1/3 bg-[#5DB3C1] flex items-center justify-end rounded-tr-[45px] rounded-br-[45px] py-4 pr-[5rem]">
            <span
              style={{
                fontFamily: "Unbounded, sans-serif",
                color: "#5DB3C1",
                textShadow:
                  "0 0 0 white, 1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white", // Создание обводки
              }}
              className="font-bold text-4xl"
            >
              0 5
            </span>
          </div>
          <div className="w-2/3 bg-white py-4 flex items-center justify-start px-4">
            <p
              style={{ fontFamily: "Nunito, sans-serif", fontWeight: 650 }}
              className="text-gray-700 text-sm md:text-base"
            >
              Вирушайте у подорож та насолоджуйтесь відпочинком
            </p>
          </div>
        </div>
        <div>
          <Button
            radius="full"
            size="md"
            className="mt-8 bg-[#5DB3C1] text-white px-10 transition-colors duration-200 w-[140px]"
          >
            Зв’яжіться з нами
          </Button>
        </div>

        <p className="mt-2 text-[13px] text-[#0F171B]">
          Потрібна консультація?
        </p>
      </div>
      <div className="lg:hidden bg-gray-100 py-10 px-6">
        <h2 className="font-unbounded text-[26px] text-center font-bold text-gray-900 mb-8">
          Працювати з нами - просто
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex items-center h-[200px]">
            <div className="relative flex flex-col items-center w-[50%] h-full">
              <div className="absolute bg-customGreen font-unbounded text-white text-4xl font-bold rounded-full w-full h-full flex justify-center">
                <p className="mt-[30px]">01</p>
              </div>
              <div className="relative top-[50%] h-[50%] w-full bg-white">
                <p className="absolute font-nunito_font_family mt-4 text-center text-gray-700">
                  Зареєструйтесь або увійдіть у свій особистий кабінет
                </p>
              </div>
            </div>
            <div className="relative flex flex-col items-center w-[50%] h-full">
              <div className="absolute bg-customGreen font-unbounded text-white text-4xl font-bold rounded-full w-full h-full flex justify-center">
                <p className="mt-[30px]">02</p>
              </div>
              <div className="relative top-[50%] h-[50%] w-full bg-white">
                <p className="absolute font-nunito_font_family mt-4 text-center text-gray-700">
                  Оберіть тур із запропонованих варіантів
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center h-[200px]">
            <div className="relative flex flex-col items-center w-[50%] h-full">
              <div className="absolute bg-customGreen font-unbounded text-white text-4xl font-bold rounded-full w-full h-full flex justify-center">
                <p className="mt-[33px] ">03</p>
              </div>
              <div className="relative top-[50%] h-[50%] w-full bg-white">
                <p className=" absolute font-nunito_font_family mt-4 text-center text-gray-700 ">
                  Укладіть договір з нашою агенцією
                </p>
              </div>
            </div>
            <div className="relative flex flex-col items-center w-[50%] h-full">
              <div className="absolute bg-customGreen font-unbounded text-white text-4xl font-bold rounded-full w-full h-full flex justify-center">
                <p className="mt-[33px] ">04</p>
              </div>
              <div className="relative top-[50%] h-[50%] w-full bg-white">
                <p className=" absolute font-nunito_font_family mt-4 text-center text-gray-700 ">
                  Внесіть оплату та очікуйте на свої документи
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            <div className="flex items-center h-[200px] w-full justify-center">
              <div className="relative flex flex-col items-center w-[50%] h-full">
                <div className="absolute bg-customGreen font-unbounded text-white text-4xl font-bold rounded-full w-full h-full flex justify-center">
                  <p className="mt-[33px] ">05</p>
                </div>
                <div className="relative top-[50%] h-[50%] w-full bg-white">
                  <p className="font-nunito_font_family absolute mt-4 text-center text-gray-700 ">
                    Вирушайте у подорож та насолоджуйтесь відпочинком
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button
            radius="full"
            size="md"
            className="font-nunito_font_family text-white text-[18px] mt-8 bg-[#5DB3C1] px-10 transition-colors duration-200 w-[240px]"
          >
            Зв’яжіться з нами
          </Button>
          <p className="font-nunito_font_family mt-4 text-gray-700 text-[18px]">
            Потрібна консультація?
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
