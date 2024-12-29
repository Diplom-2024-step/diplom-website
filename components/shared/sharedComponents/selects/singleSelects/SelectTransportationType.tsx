import React from 'react'
import SharedSingleInput from '../shared/SharedSingleInput';
import { TransportationTypeService } from '@/service/crudServices/TransportationTypeService';
import { GetTransportationTypeDto } from '@/AppDtos/Dto/Models/TransportationTypes/get-transportation-type-dto';

const SelectTransportationType  = (
{
  currectValue,
  setItem,
}
:
{
  currectValue: GetTransportationTypeDto,
  setItem: (item:GetTransportationTypeDto) => void,
}

) => {

  let transportationTypeService = new TransportationTypeService();


  const renderFunction = (item:GetTransportationTypeDto) =>
    {
      return (
           <div className="flex items-center">
                  <span>{item.name}</span>
                </div>

      );
    }


  return (
    <SharedSingleInput
      currectValue={currectValue}
      setItem={setItem}
      placeholder='Виберіть вид транспорту'
      service={transportationTypeService}
      onSelectRenderFunction={renderFunction}
      renderFunction={renderFunction}
    
    />
  )
}

export default SelectTransportationType