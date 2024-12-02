"use client"
import { Image } from '@nextui-org/image'
import { GetActivityDto } from '@/AppDtos/Dto/Models/Activities/get-activity-dto'
import { Card } from '@nextui-org/card'
import React from 'react'

const InnerActivityCard = (
    {
        activity,
    }
        : {
            activity: GetActivityDto,
        }
) => {
    return (
        <Card className=" h-[300px]   ">
            <div className='absolute font-unbounded font-unbounded-medium   w-full  text-2xl bottom-5 text-center text-white z-10'><p className="font-unbounded text-wrap font-unbounded-medium sm:text-lg md:text-xl lg:text-2xl">
                {activity.name}
            </p></div>
            <Image
                removeWrapper
                alt={activity.name + " image"}
                className="z-0 w-full h-full object-cover    "
                style={{
                    filter: 'brightness(50%) contrast(125%)',
                }}
                src={activity.urls[0]}
            />
        </Card>
    )
}

export default InnerActivityCard