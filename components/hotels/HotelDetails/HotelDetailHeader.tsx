import { GetHotelDto } from '@/AppDtos/Dto/Models/Hotels/get-hotel-dto';
import { Card, Tab, Tabs } from '@nextui-org/react';
import { Image } from '@nextui-org/react';
import { MapPin } from 'lucide-react';
import React, { Key } from 'react'

const HotelDetailHeader = (
    {
        hotel,
        onSelectChage
    } : {
        hotel: GetHotelDto,
        onSelectChage: (value:Key) => void
    }

) => {
    return (<div className="flex flex-col mt-10">
    {/* Left Sidebar with Tabs */}
    <div className="    overflow-hidden mr-auto mt-auto   text-black">
        <Tabs defaultSelectedKey={"hotel"}  aria-label="Options"  radius='none' 
                classNames={{
          tabContent: "group-data-[selected=true]:text-[#ffff]",
          tab: "bg-red ",
          tabList: "bg-red",
          base: "bg-red",
          panel: "bg-red ",
          wrapper: "bg-red",
          cursor: "bg-red"
        }}

        onSelectionChange={onSelectChage}

        >
            <Tab value="hotel" title="Готель" key={"hotel"} />
            <Tab value="description" title="Опис" key={"description"} />
            <Tab value="photos" title="Фото" key={"photos"} />
            <Tab value="reviews" title="Відгуки" key={"reviews"}/>
        </Tabs>
    </div>

    {/* Main Content */}
    <Card className="flex-grow w-full bg-white rounded-tr-[58px] shadow-lg overflow-hidden border border-gray-100 text-black"
    radius='none'
    >
        <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Hotel Image */}
                <div className="w-full">
                    <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-md"
                    style={{
    backgroundImage: `url(${hotel.urls[0]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
                    
                    >
                    </div>
                </div>

                {/* Hotel Information */}
                <div className="flex flex-col justify-between">
                    <div className="space-y-6">
                        {/* Hotel Name and Rating */}
                        <div className="flex justify-between items-start">
                            <h1 className="text-3xl font-bold text-gray-900">{hotel.name}</h1>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">{hotel.stars}</div>
                                <div className="flex gap-1">
                                    {[...Array(hotel.stars)].map((i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                    {
                                        [...Array(5 - hotel.stars)].map((i) => (
                                    <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" opacity="0.5" />
                                    </svg>
                                        )
)}
                                </div>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-2 text-sky-500">
                            <MapPin className="w-5 h-5" />
                            <span>{hotel.city.country.name}, {hotel.city.name}</span>
                        </div>

                        {/* Description */}
                        <div className=" rounded-lg p-4">
                            <p className=" leading-relaxed">
                               {hotel.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Card>
</div>
  );
}

export default HotelDetailHeader