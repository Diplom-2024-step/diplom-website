import React from 'react'
import SharedCarousel from '../shared/sharedComponents/SharedCarousel'
import { SharedCardProps } from '@/types/components/SharedCardProps'
import { GetTourDto } from '@/AppDtos/Dto/Models/Tours/get-tour-dto'
import TourCard from './TourCard'

const TourCarousel = ({items, title}:{items:GetTourDto[]; title:string}) => {
  return (
    <SharedCarousel<GetTourDto> 
    items={items}
    title={title}
    drawCard={(item:SharedCardProps<GetTourDto>) => {


        return <TourCard 
        tour={item.cardItem}
        isHovered={item.isHovered}
        onHover={item.onHover }
        onLeave={item.onLeave }        
        
        />
    } }    
    
    />
  )
}

export default TourCarousel