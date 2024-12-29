"use client"
import { GetUserDto } from '@/AppDtos/Dto/Users/get-user-dto'
import React, { useState } from 'react'
import FavoriteHotelsTab from './FavoriteHotelsTab'
import { Icon } from '@iconify/react'
import FavoriteToursTab from './FavoriteToursTab'
import { Tooltip } from '@nextui-org/react'

const FavoriteTab = (
    {
        user
    }:
        {
            user: GetUserDto
        }
) => {
    const [isHotel, setIsHotel] = useState(true);


    return (
        <div className='mt-5 min-h-64'>
            <div className='mb-3 ml-14 flex gap-3'>
                <Tooltip content="Отели" delay={0} closeDelay={0}>
                    <Icon icon="ri:hotel-fill" className={`hover:text-primary cursor-pointer ` + (isHotel ? 'text-primary' : 'text-black')} width="48" height="48" onClick={() => setIsHotel(true)} />
                </Tooltip>


                <Tooltip content="Тури" delay={0} closeDelay={0}>
                    <Icon icon="lucide-lab:palmtree-island-sun" className={`hover:text-primary cursor-pointer ` + (!isHotel ? 'text-primary' : 'text-black')} width="48" height="48" onClick={() => setIsHotel(false)} />

                </Tooltip>
            </div>

            {
                isHotel ? <FavoriteHotelsTab hotelsIds={user.favoriteHotelsIds}
                /> : <FavoriteToursTab toursIds={user.favoriteToursIds} />
            }
        </div>
    )
}

export default FavoriteTab