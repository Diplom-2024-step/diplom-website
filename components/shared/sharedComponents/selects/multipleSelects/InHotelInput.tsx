import { InHotelService } from '@/service/crudServices/InHotelService';
import { Chip } from '@nextui-org/react';
import React from 'react'
import SharedMultipleInput from '../shared/SharedMultipleInput';
import SpecificInput from '@/types/components/inputs/SpecificInput';
import { GetInHotelDto } from '@/AppDtos/Dto/Models/InHotels/get-in-hotel-dto';

const InHotelInput: SpecificInput = (
    {
        currectValue,
        onChange
    }


) => {


    let service = new InHotelService();


    const renderFunction = (item: GetInHotelDto) => {
        return (
                <span>{item.name}</span>

        );
    }

    const onSelectRenderFunction = (item:GetInHotelDto) => 
        {
            return (
            <Chip key={item.id} className='m-2 bg-primary text-white font-nunito_font_family font-[500]'>{item.name}</Chip>
                
            );
        }

    return (
        <SharedMultipleInput
            currectValue={currectValue}
            onChange={onChange}
            onSelectRenderFunction={onSelectRenderFunction}
            placeholder='Послуги готелю'
            propertyName='InHotelIds'
            renderFunction={renderFunction}
            service={service}

        />
    )
}

export default InHotelInput