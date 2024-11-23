import React from 'react'
import SharedSingleInputFromCollection from '../shared/SharedSingleInputFromCollection';
import { GetDietTypeDto } from '@/AppDtos/Dto/Models/DietTypes/get-diet-type-dto';
import SpecificInputFromColletion from '@/types/components/inputs/SpecificInputPropsFromColletion';

const DietTypeSingInputeFromCollection :SpecificInputFromColletion = (
{
    currectValue,
    items,
    onChange,
    placeHolder,
}
) => {
  const renderFunction = (item: GetDietTypeDto) => {
        return (
                <span>{item.name} - {item.price*44} грн. </span>

        );
    }



  return (
    <SharedSingleInputFromCollection<GetDietTypeDto> 
      items={items as GetDietTypeDto[]}
      onChange={onChange}
    currectValue={currectValue} renderFunction={renderFunction}
      onSelectRenderFunction={renderFunction}
      placeholder={placeHolder ? placeHolder : "select diet type"}

    />
  )
}

export default DietTypeSingInputeFromCollection