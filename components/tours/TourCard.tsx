"use client"
import { GetTourDto } from '@/AppDtos/Dto/Models/Tours/get-tour-dto';
import { Icon } from '@iconify/react';
import { Calendar, Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react';
import { BookmarkIcon,  MapPin, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'


interface TourCardProps {
  tour: GetTourDto;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}


const TourCard = ({ tour, isHovered, onHover, onLeave }: TourCardProps) => {
  const router = useRouter();
  return (
    <Card
      className={`relative overflow-hidden hover:cursor-pointer ${isHovered ? "scale-105" : ''}`}
      shadow='none'
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      isHoverable
      isPressable

      onClick={() => {
        router.push(`/tours/${tour.id}`);
      }}

    >
      <Image
        src={tour.urls[0]}
        loading='lazy'
        alt={tour.name}
        className="h-[317px] w-[476px] object-cover"
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

      <CardBody className="p-4 bg-white text-black "

      >

        <h3 className="text-xl font-bold ">{tour.name}</h3>
        <div className="flex items-center gap-2 text-gray-600 ">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{tour.hotel.city.country.name}, {tour.hotel.city.name}</span>
        </div>
        <div className="flex items-center gap-1 mb-4">
          {[...Array(tour.hotel.stars)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-sm ml-2">{tour.hotel.stars}/5</span>
        </div>
        <div className='flex items-center justify-between  bg-white'>
          <div className='bg-gradient-to-b from-[#ECB003] to-[#AF3F2B]  text-transparent bg-clip-text'>
            <span className="text-lg font-bold">{tour.priceUSD}</span>
            <span className="text-sm "> / Цена</span>
          </div>
          <Icon icon="ei:arrow-up" className={`w-10 h-10 transition-transform rotate-45 text-black ${isHovered ? '-translate-y-6' : ''
            }`} />
        </div>
      </CardBody>

    </Card>

  );
}

export default TourCard