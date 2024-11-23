import { GetDietTypeDto } from '@/AppDtos/Dto/Models/DietTypes/get-diet-type-dto'
import { GetCityDto } from '@/AppDtos/Dto/Models/Hotels/get-city-dto'
import { GetRoomTypeDto } from '@/AppDtos/Dto/Models/RoomTypes/get-room-type-dto'
import { GetTransportationTypeDto } from '@/AppDtos/Dto/Models/TransportationTypes/get-transportation-type-dto'
import { Button, DateValue, RangeValue } from '@nextui-org/react'
import React from 'react'

const BuyButtonActive = (
  {
    howManyAdults,
    howManyChildren,
    dietType,
    roomType,
    transporationType: typeTransporation,
    city,
    date
  }
    :
    {
      howManyAdults: number,
      howManyChildren: number,
      dietType: GetDietTypeDto,
      roomType: GetRoomTypeDto,
      transporationType?: GetTransportationTypeDto,
      city?: GetCityDto,
      date: RangeValue<DateValue>
    }
) => {
  return (
    (city !== undefined && typeTransporation !== undefined) ? <Button className='mt-5 text-white w-full text-center' color='primary' radius='full' >
            Замовити тур
          </Button>
          :
          <Button className='mt-5 text-black w-full text-center' isDisabled={true} color='default' variant='bordered'>
            Замовити тур
          </Button>
  )
}

export default BuyButtonActive