import { GetHotelDto } from '@/AppDtos/Dto/Models/Hotels/get-hotel-dto';
import { Calendar, Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react';
import { ArrowRight, BookmarkIcon, MapPin, Star } from 'lucide-react';
import { Icon } from '@iconify/react';
import React from 'react'

interface HotelCardProps {
  hotel: GetHotelDto;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const HotelCard = ({ hotel, isHovered, onHover, onLeave }:HotelCardProps ) => (
  <Card 
    className={`relative overflow-hidden hover:cursor-pointer ${isHovered ? "scale-105" : ''}`}
    shadow='none'
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    isHoverable
  
  >
    <Image
      src={"https://s3-alpha-sig.figma.com/img/c5e5/a510/9c1e8e8cde850b48c9e541bbb0e7a80e?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QJT~KdAEhFHKf2nytA5wHJf2zIdKuIpLJpMSoecQMyvxErY40SiSsZDNuUWxi5B4RvZ5AbPj-X-m-GON-tAKOquCv44wXSvIQYZ-C5gbWbwN4uuzBcmRXoHj3EotEhbvMI1aSYuQIZ9F88XZq7sFMHnsYzdcEU~SjX~LeVo7xjP6AnCSQ33SDocKySfLyrDIU7V0uwaURzsUi-JTMQ8lW6O3iHl9DMMbuBoYVmN2SNnfvKanl35pkj78AOYF1i4TpAz6zNMexsNK6Gi4AYbL3bvnmXw7ZgPfiuCXCjZ7hRaOJqQfEf1aNK-yL896KxBV6lpMhVyzTMcq8Ab-nFFtDg__"}
      alt={hotel.name}
      className="w-full h-full object-cover"
      isZoomed
      radius='none'
    />
      <div className="absolute top-4 right-4 z-10">
        <button className="p-2  rounded-lg">
          <BookmarkIcon className="w-4 text-white h-4" />
        </button>
      </div>
    <CardBody className="p-4 bg-white text-black ">

      <h3 className="text-xl font-bold ">{hotel.name}</h3>
      <div className="flex items-center gap-2 text-gray-600 ">
        <MapPin className="w-4 h-4" />
        <span className="text-sm">{hotel.city.country.name}, {hotel.city.name}</span>
      </div>
      <div className="flex items-center gap-1 mb-4">
        {[...Array(hotel.stars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
        <span className="text-sm ml-2">{hotel.stars}/5</span>
      </div>
      <div className='flex items-center justify-between  bg-white'>
        <div className='bg-gradient-to-b from-[#ECB003] to-[#AF3F2B]  text-transparent bg-clip-text'>
          <span className="text-lg font-bold">{hotel.additionCostPerPerson}</span>
          <span className="text-sm "> / Персона</span>
        </div>
        <Icon icon="ei:arrow-up" className={`w-10 h-10 transition-transform rotate-45 text-black ${isHovered ? '-translate-y-6' : ''
          }`} />
      </div>
    </CardBody>

  </Card>
);

export default HotelCard