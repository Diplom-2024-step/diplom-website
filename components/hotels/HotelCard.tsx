'use client';
import { GetHotelDto } from '@/AppDtos/Dto/Models/Hotels/get-hotel-dto';
import { Calendar, Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react';
import { ArrowRight, BookmarkIcon, MapPin, Star } from 'lucide-react';
import { Icon } from '@iconify/react';
import React from 'react'
import { redirect, RedirectType, useRouter } from 'next/navigation';
import { SharedCardProps } from '@/types/components/SharedCardProps';

const HotelCard = ({ cardItem, isHovered, onHover, onLeave }: SharedCardProps<GetHotelDto>) => {
  const router = useRouter();
  return (
    <Card
      className={`relative overflow-hidden hover:cursor-pointer ${isHovered ? "scale-105" : ''}`}
      shadow='none'
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      isHoverable
      isPressable
      disableRipple
      onClick={() => {
        router.push(`/${cardItem.city.country.id}/hotels/${cardItem.id}`);
      }}

    >
      <div className="relative">
        <Image
          src={cardItem.urls[0]}
          loading='eager'
          alt={cardItem.name}
          className="h-[317px] w-[476px] object-cover z-0"
          isZoomed
          radius='none'
        />

        {/* Bookmark button (positioned absolutely) */}
        <div
          className="absolute top-4 right-4 z-10"
          onClick={(e) => {
            // Stop the event from bubbling up to the card
            e.stopPropagation();
            console.debug("2121");
          }}
        >
          <button
            className="p-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
          >
            <BookmarkIcon className="w-8 text-white h-8" />
          </button>
        </div>
        {/* Bottom overlay (positioned relatively) */}
        <div className='absolute bottom-0 left-1/3 rounded-tr-full transform -translate-x-1/2 z-10 bg-white h-5 w-3/4'>
          <div className='absolute -bottom-[10px] -right-1 bg-white z-10 h-5 w-5 rounded-none rotate-45'>
          </div>

        </div>
      </div>

      <CardBody className="px-4 pb-4 bg-white text-black ">

        <h3 className="text-xl font-bold ">{cardItem.name}</h3>
        <div className="flex items-center gap-2 text-gray-600 ">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{cardItem.city.country.name}, {cardItem.city.name}</span>
        </div>
        <div className="flex items-center gap-1 mb-4">
          {[...Array(cardItem.stars)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-sm ml-2">{cardItem.stars}/5</span>
        </div>
        <div className='flex items-center justify-between  bg-white'>
          <div className='bg-gradient-to-b from-[#ECB003] to-[#AF3F2B]  text-transparent bg-clip-text'>
            <span className="text-lg font-bold">{cardItem.additionCostPerPerson}</span>
            <span className="text-sm "> / Персона</span>
          </div>
          <Icon icon="ei:arrow-up" className={`w-10 h-10 transition-transform rotate-45 text-black ${isHovered ? '-translate-y-6' : ''
            }`} />
        </div>
      </CardBody>

    </Card>

  );
}

export default HotelCard