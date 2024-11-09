import { GetHotelDto } from '@/AppDtos/Dto/Models/Hotels/get-hotel-dto';
import { Calendar, Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { ArrowRight, MapPin, Star } from 'lucide-react';
import React from 'react'

interface HotelCardProps {
  hotel: GetHotelDto;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const HotelCard = ({ hotel, isHovered, onHover, onLeave }:HotelCardProps ) => (
  <Card 
    className="relative overflow-hidden hover:cursor-pointer"
    shadow='none'
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
  
  >
    <Image
      src={"https://s3-alpha-sig.figma.com/img/c5e5/a510/9c1e8e8cde850b48c9e541bbb0e7a80e?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QJT~KdAEhFHKf2nytA5wHJf2zIdKuIpLJpMSoecQMyvxErY40SiSsZDNuUWxi5B4RvZ5AbPj-X-m-GON-tAKOquCv44wXSvIQYZ-C5gbWbwN4uuzBcmRXoHj3EotEhbvMI1aSYuQIZ9F88XZq7sFMHnsYzdcEU~SjX~LeVo7xjP6AnCSQ33SDocKySfLyrDIU7V0uwaURzsUi-JTMQ8lW6O3iHl9DMMbuBoYVmN2SNnfvKanl35pkj78AOYF1i4TpAz6zNMexsNK6Gi4AYbL3bvnmXw7ZgPfiuCXCjZ7hRaOJqQfEf1aNK-yL896KxBV6lpMhVyzTMcq8Ab-nFFtDg__"}
      alt={hotel.name}
      className="w-full h-full object-cover"
      isZoomed
      radius='none'
    />
    
    <CardBody className="p-4 bg-white text-black">
      <h3 className="text-xl font-bold mb-2">{hotel.name}</h3>
      <div className="flex items-center gap-2 text-gray-600 mb-4">
        <MapPin className="w-4 h-4" />
        <span className="text-sm">{hotel.city.country.name}, {hotel.city.name}</span>
      </div>
      <div className="flex items-center gap-1 mb-4">
        {[...Array(hotel.stars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
        <span className="text-sm ml-2">{hotel.stars}/5</span>
      </div>
    </CardBody>
    
    <CardFooter className="flex items-center justify-between p-4 border-t   bg-white">
      <div className='bg-gradient-to-b from-[#ECB003] to-[#AF3F2B]  text-transparent bg-clip-text'>
        <span className="text-lg font-bold">{hotel.additionCostPerPerson}</span>
        <span className="text-sm "> / Персона</span>
      </div>
      <ArrowRight className={`w-5 h-5 transition-transform text-black ${
        isHovered ? 'translate-x-1' : ''
      }`} />
    </CardFooter>
  </Card>
);

export default HotelCard