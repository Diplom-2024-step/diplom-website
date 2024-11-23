"use client"
import { GetActivityDto } from '@/AppDtos/Dto/Models/Activities/get-activity-dto'
import { Icon } from '@iconify/react'
import { Card, CardHeader } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import React from 'react'

const ActivityCard = (
    {
        activity,
        index,
        isHovered,
        onHover,
        onLeave
    }
        : {
            activity: GetActivityDto,
            index: number,
            isHovered: boolean;
            onHover: () => void;
            onLeave: () => void;
        }
) => {
    return (
        <Card className={` h-[450px] cursor-pointer transition-all duration-500 [transform-style:preserve-3d] ${ isHovered ? '[transform:rotateY(180deg)]' : '' } ` }
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            isHoverable

        >
            {
                isHovered !== true ? <>
                    <div className={`
        absolute z-10 w-full p-4 flex justify-between items-center
            ${index % 2 !== 0 ? "bottom-0" : 'top-0'}
      `}>
                        <h4 className="text-white text-3xl font-medium drop-shadow-lg">
                            {activity.name}
                        </h4>
                        <Icon icon="f7:exclamationmark-bubble" className='text-4xl text-white' />
                    </div>
                    <Image
                        removeWrapper
                        alt={activity.name + " image"}
                        className="z-0 w-full h-full object-cover  "
                        src={activity.urls[0]}
                    />
                </>
                    :
                    <div className="[transform:rotateY(180deg)] flex flex-col p-2 h-full">
                        <div className="flex-grow overflow-hidden text-lg">
                            <p className="text-start">{activity.description}</p>
                        </div>
                        <div className="self-center mt-2 text-center text-xl bg-gradient-to-b from-[#ECB003] to-[#AF3F2B]  text-transparent bg-clip-text">
                            <span>{activity.price *44} грн.</span>
                        </div>
                    </div>
            }
        </Card>

    )
}

export default ActivityCard