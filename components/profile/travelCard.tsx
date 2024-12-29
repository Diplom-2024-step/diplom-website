"use client"
import { Card, CardBody, Progress, Button } from "@nextui-org/react";
import image1 from '../../assets/images/block-1/image-3.webp';
import locImage from '../../assets/images/profile/loc-icon.png';
import locGroup from '../../assets/images/profile/icon-group.png';
import locCal from '../../assets/images/profile/icon-calendar.png';
import locCloche from '../../assets/images/profile/icon-cloche.png';
import icMark from '../../assets/images/profile/icon-bookmark.svg';
import imgLeft from '../../assets/images/profile/image-left.jpg';
import { Star } from 'lucide-react';

import { Image } from "@nextui-org/react";
import '../../assets/fonts-styles/font.css';
import Slider from "./slider";
import { GetOrderDto } from "@/AppDtos/Dto/Models/Orders/get-order-dto";
import { differenceInDays } from "date-fns/differenceInDays";
import OrderProgressMark, { MarkStatus } from "./OrderProgressMark";

export interface TravelCardProps {
  order: GetOrderDto
}

interface ProgressStage  {
  markStatus: MarkStatus,
  progress:number
}

const TravelCardProfile: React.FC<TravelCardProps> = ({
  order
}) => {

  let orderStage: Record<string, ProgressStage> = {
    "waiting": {
      markStatus: MarkStatus.finished,
      progress: 50
    },
"paying": {
      markStatus: MarkStatus.started,
      progress: 0
    },
"confirming": {
      markStatus: MarkStatus.neverStarted,
      progress: 0
    },
    "traveling": {

      markStatus: MarkStatus.neverStarted,
      progress: 0
    }


  }
    


  if (order.orderStatus === "Оплата") {
    orderStage["waiting"] = {
      markStatus: MarkStatus.finished,
      progress: 100
    }

    orderStage["paying"] = {
      markStatus: MarkStatus.started,
      progress: 50
    }

    orderStage["confirming"] = {
      markStatus: MarkStatus.neverStarted,
      progress: 0
    }

    orderStage["traveling"] = {
      markStatus: MarkStatus.neverStarted,
      progress: 0
    }

  }
  else if (order.orderStatus === "Підтвердження") {
  orderStage["waiting"] = {
      markStatus: MarkStatus.finished,
      progress: 100
    }
    orderStage["paying"] = {
      markStatus: MarkStatus.finished,
      progress: 100
    }

    orderStage["confirming"] = {
      markStatus: MarkStatus.started,
      progress: 50
    }

    orderStage["traveling"] = {
      markStatus: MarkStatus.neverStarted,
      progress: 0
    }
  }
  else if (order.orderStatus === "Подорож") {
  orderStage["waiting"] = {
      markStatus: MarkStatus.finished,
      progress: 100
    }
    orderStage["paying"] = {
      markStatus: MarkStatus.finished,
      progress: 100
    }
    orderStage["confirming"] = {
      markStatus: MarkStatus.finished,
      progress: 100
    }

    orderStage["traveling"] = {
      markStatus: MarkStatus.started,
      progress: 50
    }
  }


  return (
    <Card className="w-full max-w-7xl mx-auto  mb-8 rounded-[40px]  overflow-hidden">
      {/* Верхняя часть карточки */}
      <div className="flex flex-col md:flex-row">
        {/* Левая часть с изображением */}
        <div className="w-full md:w-2/4 relative">
          <Image
            src={order.hotel.urls[0]}
            alt="image1"
            className="rounded-[10px] rounded-tl-none h-[340px] w-[540px]"
          />
        </div>

        {/* Правая часть с информацией */}
        <div className="w-full md:w-2/3 flex flex-col rounded-bl-[20px] p-4">
          {/* Заголовок и цена */}
          <div className="flex justify-between items-center mb-2">
            <h2
              style={{ fontFamily: 'Unbounded, sans-serif', fontWeight: 450 }}
              className="lg:w-2/4 text-lg font-semibold text-[#161616] pl-3">{order.hotel.city.country.name}, {order.hotel.city.name}</h2>
            <div className="w-1/4 flex flex-col justify-end items-end p-0 md:pr-6">
              <p
                className="text-sm font-bold bg-gradient-to-b from-[rgba(236,176,3,1)] to-[rgba(175,63,43,1)] bg-clip-text text-transparent"

              >Разом: </p>
              <p
                className="text-base font-bold bg-gradient-to-b from-[rgba(236,176,3,1)] to-[rgba(175,63,43,1)] bg-clip-text text-transparent"

              >{order.priceUSD} грн</p>
            </div>
          </div>
          {/* Локация */}
          <div className="flex items-center gap-4 my-2">
            <div className="flex justify-between items-center gap-1">
              <span className="text-sm mx-1">{order.hotel.stars}/5</span>
              {Array.from({ length: order.hotel.stars }, (_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="flex flex-row gap-1">
              <Image
                src={locImage.src}
                alt="."
                width={18}
                height={20}
              />
              <p
                style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 600, lineHeight: '1.2' }}
                className="text-sm text-#0F171B">{order.hotel.name}</p>
            </div>
          </div>


          {/* Туристическая информация */}
          {/* <div className=" w-2/3 absolute left-[22rem] bottom-[200px] bg-[#FFFFFF] rounded-tl-[20px] rounded-bl-[20px] mr-5"> */}
          <div className="flex flex-col gap-3 mt-3">
            <div className="flex justify-between bg-[#EBEFF2] rounded-tr-[10px] rounded-br-[10px]">
              <div className="w-2/5 flex flex-row items-center bg-[#5DB3C1] text-[#FFFFFF] text-sm rounded-tr-[10px] rounded-br-[10px] gap-4 p-3">
                <Image
                  src={locGroup.src}
                  alt="ic-group"
                  width={25}
                  height={28}
                />

                <p
                  style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, lineHeight: '1.2' }}
                  className="">Туристи</p>
              </div>
              <span
                style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, lineHeight: '1.2' }}
                className="w-3/5 flex flex-col justify-center items-start gap-2 pl-6 text-sm"> {order.howManyAdults === 1 ? "1 дорослий " : `${order.howManyAdults} дорослих `}

                {order.howManyKids === 0
                  ? ""
                  : order.howManyKids === 1
                    ? "1 дитина "
                    : `${order.howManyKids} дитин `}</span>
            </div>
            <div className="flex justify-between bg-[#EBEFF2] rounded-tr-[10px] rounded-br-[10px]">
              <div className="w-2/5 flex justify-between items-center bg-[#5DB3C1] text-[#FFFFFF] text-sm rounded-tr-[10px] rounded-br-[10px] gap-5 p-3">
                <Image
                  src={locCal.src}
                  alt="ic-group"
                  width={25}
                  height={28}
                />
                <span
                  style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, lineHeight: '1.2' }}>
                  Дата відправлення і тривалість туру
                </span>
              </div>
              <div className="flex w-3/5 pl-6">
                <div className="flex flex-col text-sm">
                  <div>{order.startDate.toString().replace('T00:00:00Z', '')}</div>
                  <div>
                    {order.fromCity?.name} - {order.hotel.city.name}
                  </div>
                </div>
                <div className="flex-col text-center">
                  <div>
                    {differenceInDays(
                      order.endDate.toString(),
                      order.startDate.toString()
                    ) - 1}{" "}
                    ночей /{" "}
                    {differenceInDays(
                      order.endDate.toString(),
                      order.startDate.toString()
                    )}{" "}
                    днів
                  </div>
                  <div className="text-sm">
                    {order.transportationType?.name}{" "}
                    <p className="text-primary">( включено ) </p>
                  </div>
                </div>
                <div className="flex flex-col text-right text-sm">
                  <div>{order.endDate.toString().replace('T00:00:00Z', '')}</div>
                  <div>
                    {order.hotel.city.name} - {order.fromCity?.name}
                  </div>
                </div>
              </div>

              {/* <span 
               style={{fontFamily: 'Nunito, sans-serif', fontWeight: 700, lineHeight: '1.2'}}
               className="w-2/3 flex flex-col justify-center items-start gap-2 pl-6 text-sm">{departure}</span> */}

            </div>
            <div className="flex justify-between gap-0 bg-[#EBEFF2] rounded-tr-[10px] rounded-br-[10px]">
              <div className="w-2/5 flex items-center bg-[#5DB3C1] text-[#FFFFFF] text-sm rounded-tr-[10px] rounded-br-[10px] gap-5 p-3 pr-6">
                <Image
                  src={locCloche.src}
                  alt="ic-cloche"
                  width={25}
                  height={28}
                />
                <span
                  className="flex justify-items-start"
                  style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, lineHeight: '1.2' }}>
                  Тип кімнати і харчування
                </span>
              </div>
              <div className="w-3/5 flex flex-col justify-center items-start gap-2 pl-6 pr-3 py-2 text-sm">
                <p
                  style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, lineHeight: '1.2' }}
                >Кімната: <span className="font-normal">{order.roomType.name}</span></p>
                <p
                  style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, lineHeight: '1.2' }}
                >Харчування: <span className="font-normal">{order.dietType.name}</span></p>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>

      <CardBody>
        <div className="flex justify-between items-center mx-5 mb-5">
          {/* Добавленные активности */}
          <div className="w-1/2 mt-1">
            <h1
              style={{ fontFamily: 'Unbounded, sans-serif', fontWeight: 450 }}
              className="text-xl font-medium mb-3">Додані активності</h1>
            <div className="flex flex-row  justify-start items-center">
              <Slider activities={order.activities} />
            </div>
          </div>

          {/* Статус заказа */}
          <div className="w-1/2 pl-5 mt-7 pt-4 mb-auto">
            <div className="flex items-center justify-between ">
              <OrderProgressMark
                status={orderStage["waiting"].markStatus}
                icon="check"
                title="Очікування"
              />

              <Progress
                value={orderStage["waiting"].progress }
                color="primary"
                className="w-1/5 mb-auto mt-5"
                size="sm"
              />
              <OrderProgressMark
                status={orderStage["paying"].markStatus}
                icon="dollar"
                title="Оплата"
              />

              <Progress
                value={orderStage["paying"].progress}
                color="primary"
                className="w-1/5 mb-auto mt-5"
                size="sm"
              />
              <OrderProgressMark
                status={orderStage["confirming"].markStatus}
                icon="file"
                title="Підтвердження"
              />

              <Progress
                value={orderStage["confirming"].progress}
                color="primary"
                className="w-1/5 mb-auto mt-5"
                size="sm"
              />
              <OrderProgressMark
                status={orderStage["traveling"].markStatus}
                icon="briefcase"
                title="Подорож"
              />

            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default TravelCardProfile;