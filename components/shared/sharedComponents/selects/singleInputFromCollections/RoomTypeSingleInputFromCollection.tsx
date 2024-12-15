import { GetRoomTypeDto } from '@/AppDtos/Dto/Models/RoomTypes/get-room-type-dto';
import SpecificInputFromColletion from '@/types/components/inputs/SpecificInputPropsFromColletion';
import React from 'react'
import SharedSingleInputFromCollection from '../shared/SharedSingleInputFromCollection';

const RoomTypeSingleInputFromCollection :SpecificInputFromColletion = (
{
    currectValue,
    items,
    onChange,
    placeHolder,
}
) => {
  const renderFunction = (item: GetRoomTypeDto) => {
        return (
                <span>{item.name} - {item.price} грн. </span>

        );
    }



  return (
    <SharedSingleInputFromCollection<GetRoomTypeDto> 
      items={items as GetRoomTypeDto[]}
      onChange={onChange}
    currectValue={currectValue} renderFunction={renderFunction}
      onSelectRenderFunction={renderFunction}
      placeholder={placeHolder ? placeHolder : "select room type"}

    />
  )
}

export default RoomTypeSingleInputFromCollection