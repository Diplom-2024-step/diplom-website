import { Button } from "@nextui-org/button";
import Image from "next/image";
import mexicoPng from "../../assets/images/hotoffers/mexico.png";
import testicon1 from "../../assets/images/hotoffers/testicon1.png";
import testicon2 from "../../assets/images/hotoffers/testicon2.png";
import testicon3 from "../../assets/images/hotoffers/testicon3.png";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Flame, ArrowRight } from "lucide-react";
import { Icon } from "@iconify/react";

const destinations = [
  {
    id: 1,
    name: "Мехіко",
    country: "Мексика",
    price: "30 000 ₴",
    image: "/api/placeholder/600/600",
    featured: true,
    size: "large",
  },
  {
    id: 2,
    name: "Сан-Хуан",
    country: "Пуерто-Ріко",
    price: "28 000 ₴",
    image: "/api/placeholder/400/250",
    featured: true,
    size: "small",
  },
  {
    id: 3,
    name: "Майорка",
    country: "Іспанія",
    price: "34 000 ₴",
    image: "/api/placeholder/400/250",
    featured: true,
    size: "small",
  },
  {
    id: 4,
    name: "Мехіко",
    country: "Мексика",
    price: "32 000 ₴",
    image: "/api/placeholder/800/300",
    featured: true,
    size: "wide",
  },
];

const HotDestinations = () => {
  return (
    <div className="flex flex-col items-center  w-full h-full mt-10 mb-10">
      <p className="text-[43px] font-bold mb-[35px] text-customBlack">
        Гарячі пропозиції
      </p>
      <div className="flex  w-4/7 h-full">
        <Card
          className="flex flex-col justify-between col-span-12 sm:col-span-4 min-h-[520px] min-w-[400px] bg-cover bg-center cursor-pointer"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${mexicoPng.src})`,
          }}
        >
          <CardHeader className="absolute z-10 top-1 flex-col !items-end">
            <div className="flex flex-col justify-center bg-customBlack bg-opacity-50 h-[30px] p-3 rounded-xl mt-[10px]">
              <p className="text-[15px] text-white/60 uppercase font-bold">
                30 000 ₴ / Персона
              </p>
            </div>
          </CardHeader>
          <CardFooter className="absolute bottom-3 z-10">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <div className="flex item-center justify-center text-center">
                  <p className="text-white/60 text-[25px]">Text</p>
                  <Icon
                    icon="mdi:flame"
                    className="w-[35px] h-[35px] ml-[15px]"
                  />
                </div>

                <p className="text-[15px] text-white/60">Текст</p>
              </div>
            </div>
            <button
              className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full 
              transition-all duration-300 hover:bg-white/30"
            >
              <Icon
                icon="ei:arrow-up"
                className={`w-10 h-10 transition-transform rotate-45 text-black
                }`}
              />
            </button>
          </CardFooter>
        </Card>
        <div className="flex flex-col h-full w-3/5 ml-[60px]">
          <div className="flex justify-between">
            <Card
              className="flex flex-col justify-between col-span-12 sm:col-span-4 min-h-[240px] min-w-[280px] mr-[35px] bg-cover bg-center cursor-pointer"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${testicon1.src})`,
              }}
            >
              <CardHeader className="flex absolute z-10 top-1 justify-between !items-end">
                <Icon
                  icon="mdi:flame"
                  className="w-[35px] h-[35px] ml-[15px]"
                />
                <div className="flex flex-col justify-center bg-customBlack bg-opacity-50 h-[30px] p-3 rounded-xl mt-[10px]">
                  <p className="text-[15px] text-white/60 uppercase font-bold">
                    30 000 ₴ / Персона
                  </p>
                </div>
              </CardHeader>
              <CardFooter className="absolute bottom-3 z-10">
                <div className="flex flex-grow gap-2 items-center">
                  <div className="flex flex-col">
                    <div className="flex item-center justify-center text-center">
                      <p className="text-white/60 text-[25px]">Text</p>
                    </div>

                    <p className="text-[15px] text-white/60">Текст</p>
                  </div>
                </div>
                <button
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full 
              transition-all duration-300 hover:bg-white/30"
                >
                  <Icon
                    icon="ei:arrow-up"
                    className={`w-10 h-10 transition-transform rotate-45 text-black
                }`}
                  />
                </button>
              </CardFooter>
            </Card>
            <Card
              className="flex flex-col justify-between col-span-12 sm:col-span-4 min-h-[240px] min-w-[280px] bg-cover bg-center cursor-pointer"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${testicon2.src})`,
              }}
            >
              <CardHeader className="flex absolute z-10 top-1 justify-between !items-end">
                <Icon
                  icon="mdi:flame"
                  className="w-[35px] h-[35px] ml-[15px]"
                />
                <div className="flex flex-col justify-center bg-customBlack bg-opacity-50 h-[30px] p-3 rounded-xl mt-[10px]">
                  <p className="text-[15px] text-white/60 uppercase font-bold">
                    30 000 ₴ / Персона
                  </p>
                </div>
              </CardHeader>
              <CardFooter className="absolute bottom-3 z-10">
                <div className="flex flex-grow gap-2 items-center">
                  <div className="flex flex-col">
                    <div className="flex item-center justify-center text-center">
                      <p className="text-white/60 text-[25px]">Text</p>
                    </div>

                    <p className="text-[15px] text-white/60">Текст</p>
                  </div>
                </div>
                <button
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full 
              transition-all duration-300 hover:bg-white/30"
                >
                  <Icon
                    icon="ei:arrow-up"
                    className={`w-10 h-10 transition-transform rotate-45 text-black
                }`}
                  />
                </button>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card
              className="flex flex-col justify-between col-span-12 sm:col-span-4 min-h-[240px] w-full mt-[40px] bg-cover bg-center cursor-pointer"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${testicon3.src})`,
              }}
            >
              <CardHeader className="flex absolute z-10 top-1 justify-between !items-end">
                <Icon
                  icon="mdi:flame"
                  className="w-[35px] h-[35px] ml-[15px]"
                />
                <div className="flex flex-col justify-center bg-customBlack bg-opacity-50 h-[30px] p-3 rounded-xl mt-[10px]">
                  <p className="text-[15px] text-white/60 uppercase font-bold">
                    30 000 ₴ / Персона
                  </p>
                </div>
              </CardHeader>
              <CardFooter className="absolute bottom-3 z-10">
                <div className="flex flex-grow gap-2 items-center">
                  <div className="flex flex-col">
                    <div className="flex item-center justify-center text-center">
                      <p className="text-white/60 text-[25px]">Text</p>
                    </div>

                    <p className="text-[15px] text-white/60">Текст</p>
                  </div>
                </div>
                <button
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full 
              transition-all duration-300 hover:bg-white/30"
                >
                  <Icon
                    icon="ei:arrow-up"
                    className={`w-10 h-10 transition-transform rotate-45 text-black
                }`}
                  />
                </button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      <button className="px-6 py-2 border border-gray-500 rounded-full text-gray-700 hover:bg-gray-100 mt-[60px] mb-[60px]">
        Переглянути більше
      </button>
    </div>
  );
};

export default HotDestinations;
