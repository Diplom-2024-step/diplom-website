import { Card, Tab, Tabs } from '@nextui-org/react';
import { Image } from '@nextui-org/react';
import { MapPin } from 'lucide-react';
import React from 'react'

const HotelDetailHeader = (
    

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
        >
            <Tab value="hotel" title="Готель" key={"hotel"} />
            <Tab value="description" title="Опис" />
            <Tab value="photos" title="Фото" />
            <Tab value="reviews" title="Відгуки" />
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
                    <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-md">
                        <Image
                            src="https://s3-alpha-sig.figma.com/img/c5e5/a510/9c1e8e8cde850b48c9e541bbb0e7a80e?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QJT~KdAEhFHKf2nytA5wHJf2zIdKuIpLJpMSoecQMyvxErY40SiSsZDNuUWxi5B4RvZ5AbPj-X-m-GON-tAKOquCv44wXSvIQYZ-C5gbWbwN4uuzBcmRXoHj3EotEhbvMI1aSYuQIZ9F88XZq7sFMHnsYzdcEU~SjX~LeVo7xjP6AnCSQ33SDocKySfLyrDIU7V0uwaURzsUi-JTMQ8lW6O3iHl9DMMbuBoYVmN2SNnfvKanl35pkj78AOYF1i4TpAz6zNMexsNK6Gi4AYbL3bvnmXw7ZgPfiuCXCjZ7hRaOJqQfEf1aNK-yL896KxBV6lpMhVyzTMcq8Ab-nFFtDg__"
                            alt="Glow Pattaya Hotel"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Hotel Information */}
                <div className="flex flex-col justify-between">
                    <div className="space-y-6">
                        {/* Hotel Name and Rating */}
                        <div className="flex justify-between items-start">
                            <h1 className="text-3xl font-bold text-gray-900">Glow Pattaya</h1>
                            <div className="text-right">
                                <div className="text-3xl font-bold text-gray-900">4</div>
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4].map((i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                    <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" opacity="0.5" />
                                    </svg>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">на основі 75 відгуків</p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-2 text-sky-500">
                            <MapPin className="w-5 h-5" />
                            <span>Таїланд, Паттайя</span>
                        </div>

                        {/* Description */}
                        <div className=" rounded-lg p-4">
                            <p className=" leading-relaxed">
                                Готель GLOW Pattaya розташований у південній Паттайї, за 1,1 км від пляжу Паттайї.
                                Екстер'єр готелю виконаний з геометричним облицюванням та кольоровим освітленням.
                                Поруч із готелем GLOW Pattaya знаходяться вулиця Уокінг-стріт, поромний причал Паттайя-Хуахін та пірс Балі-Хай.
                                Підходить для активного, романтичного відпочинку.
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