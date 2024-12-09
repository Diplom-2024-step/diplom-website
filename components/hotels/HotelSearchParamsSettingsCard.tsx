"use client"
import { Button, Checkbox, Divider, Slider, SliderValue } from '@nextui-org/react';
import React, { ChangeEvent, HtmlHTMLAttributes, useState } from 'react'
import NumberInput from '../shared/sharedComponents/NumberInput';
import { Star } from 'lucide-react';
import { ExecFileSyncOptionsWithBufferEncoding, spawn } from 'child_process';
import DietTypeInput from '../shared/sharedComponents/selects/multipleSelects/DietTypeInput';
import BeachTypeInput from '../shared/sharedComponents/selects/multipleSelects/BeachTypeInput';
import InHotelInput from '../shared/sharedComponents/selects/multipleSelects/InHotelInput';
import RoomTypeInput from '../shared/sharedComponents/selects/multipleSelects/RoomTypeInput';
import { Romanesco } from 'next/font/google';
import { useSetSearchPropsLikeDict } from '@/hooks/useSetSearchParamsLikeDict';

const HotelSearchParamsSettingsCard = (
  {

    lowestPrice,
    heightPrice,
    onClose,
    outsideDietTypesIds,
    outsideBeachTypesIds,
    outsideRoomTypesIds,
    outsideInHotelIds,
    stars


  }:
    {
      lowestPrice?: string;
      heightPrice?: string;
      onClose: () => void;
      outsideDietTypesIds?: string[];
      outsideBeachTypesIds?: string[];
      outsideRoomTypesIds?: string[];
      outsideInHotelIds?: string[];
      stars?: string;
    }

) => {

  const [budget, setBudget] = React.useState<SliderValue>([parseInt(lowestPrice ? lowestPrice : "1" ), parseInt(heightPrice ? heightPrice : "2000")]);

  const [dietTypesIds, setDietTypesIds] = useState<string[]>(outsideDietTypesIds? outsideDietTypesIds : []);

  const [beachTypesIds, setBeachTypesIds] = useState<string[]>(outsideBeachTypesIds ? outsideBeachTypesIds : []);
  const [roomTypesIds, setRoomTypesIds] = useState<string[]>(outsideRoomTypesIds ? outsideRoomTypesIds : []);

  const [inHotelIds, setInHotelIds] = useState<string[]>(outsideInHotelIds ? outsideInHotelIds : []);

  const [isThreeStars, setIsThreeStars] = useState(stars?.includes('3') ? stars.includes('3') : false);

  const [isFourStars, setFourStars] = useState(stars?.includes('4') ? stars.includes('4') : false);

  const [isFiveStars, setIsFiveStars] = useState(stars?.includes('5') ? stars.includes('5') : false);

  const setSearchParams = useSetSearchPropsLikeDict();



  const onChangeDietTypes = (e: any, type: string) => {
    let { name, value } = e.target;
    setDietTypesIds(value);
  };

  const onChangeBeachTypes = (e: any, type: string) => {
    let { name, value } = e.target;
    setBeachTypesIds(value);
  }

  const onChangeRoomTypes = (e: any, type: string) => {
    let { name, value } = e.target;
    setRoomTypesIds(value);
  }

  const onChangeInHotel = (e: any, type: string) => {
    let { name, value } = e.target;
    setInHotelIds(value);
  }




  const handleInputChange = (e: React.FormEvent<HTMLInputElement>, place: number) => {
    const target = e.currentTarget;
    const value = target.value;

    // Remove non-digit characters
    const numericValue = value.replace(/[^0-9]/g, '');

    // Set the value back to the input

    target.value = numericValue;

    if (parseInt(numericValue) < 10000 || parseInt(numericValue) > 300000) return;



    if (place === 0) {
      setBudget([parseInt(numericValue), (budget as any as number[])[1]]);
    }
    else {
      setBudget([(budget as any as number[])[0], parseInt(numericValue)]);
    }
  };



  return (
    <>
      <div className='w-full flex-col rounded-2xl shadow-xl p-5 max-w-6xl mx-auto my-5  bg-white '>
        <div className='w-full flex p-4 rounded-2xl border-2 border-gray-100 shadow-xl'>
          <div className='w-3/4'>
            <h4
              className='font-unbounded font-[600] text-black text-2xl'
            >Бюджет</h4>

            <div
              className=" justify-between flex text-xl font-nunito_font_family font-[600] *:
          bg-gradient-to-b   from-[#ECB003] to-[#AF3F2B] py-2  text-transparent bg-clip-text
          
          "
            >
              <span className='text-start'>{(budget as any as number[])[0].toLocaleString().replace(',', ' ')} ₴</span>

              <span>{(budget as any as number[])[1].toLocaleString().replace(',', ' ')} ₴</span>

            </div>
            <div className='flex-col w-full'>
              <div className='w-full'>
                <Slider
                  step={10}
                  maxValue={30000}
                  minValue={10}
                  value={budget}
                  onChange={setBudget}
                  className=""
                />
              </div>
              <div className='flex-row mt-2'>
                <span className='mr-2'>Від</span>
                <input type="text" className='w-20 mr-2 border-black border-small border-opacity-30 text-center ' value={(budget as any as number[])[0]}
                  onChange={(e: React.FormEvent<HTMLInputElement>) => handleInputChange(e, 0)}


                />
                <span className='mr-2'>до</span>
                <input type="text" className='w-20 border-black border-small border-opacity-30 text-center ' value={(budget as any as number[])[1]}
                  onChange={(e: React.FormEvent<HTMLInputElement>) => handleInputChange(e, 1)}

                />
              </div>

            </div>
          </div>


          <Divider orientation='vertical' className=' bg-gray-300 w-px  h-auto mx-4 ' />


          <div className='w-1/4'>
            <h4 className='font-unbounded font-[600] text-black text-2xl'>Рейтинг готелю</h4>

            <div className='w-full py-2'>
              <Checkbox
                isSelected={isFiveStars}
                onValueChange={setIsFiveStars}
                className='w-full flex-row justify-start items-center '
                classNames={{
                  wrapper: "before:bg-transparent after:bg-transparent",
                  icon: "text-primary",
                }}
              >
                <div className='flex items-center justify-center  w-full gap-1 '>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i}
                      className={`w-4 h-4 fill-yellow-400   text-yellow-400`}
                    />
                  ))}
                </div>
              </Checkbox>
            </div>
            <Checkbox
              isSelected={isFourStars}
              onValueChange={setFourStars}
              className='w-full flex justify-start items-center'
              classNames={{
                wrapper: "before:bg-transparent after:bg-transparent",
                icon: "text-primary",
              }}
            >
              <div className='flex items-center justify-center  w-full gap-1 '>
                {[...Array(4)].map((_, i) => (
                  <Star key={i}
                    className={`w-4 h-4 fill-yellow-400   text-yellow-400`}
                  />
                ))}
              </div>
            </Checkbox>
            <Checkbox
              isSelected={isThreeStars}
              onValueChange={setIsThreeStars}
              className='w-full flex justify-start items-center '
              classNames={{
                wrapper: "before:bg-transparent after:bg-transparent",
                icon: "text-primary",
              }}
            >
              <div className='flex items-center justify-center  w-full gap-1 '>
                {[...Array(3)].map((_, i) => (
                  <Star key={i}
                    className={`w-4 h-4 fill-yellow-400   text-yellow-400`}
                  />
                ))}
              </div>
            </Checkbox>
          </div>



        </div>

        <div className='flex p-2 mt-2 gap-2 bg-transparent'>
          <DietTypeInput onChange={onChangeDietTypes} currectValue={dietTypesIds} />

          <BeachTypeInput onChange={onChangeBeachTypes} currectValue={beachTypesIds} />

          <InHotelInput onChange={onChangeInHotel} currectValue={inHotelIds} />

          <RoomTypeInput onChange={onChangeRoomTypes} currectValue={roomTypesIds} />
        </div>

      </div>

      <div className='flex justify-center items-center my-10'>
        <div className='flex-row flex justify-center w-full' >
          <div className='text-center text-wrap w-2/5'>
            <Button className='bg-transparent text-black text-xl rounded-full px-20 text-center  border-1 border-black'
              onClick={() => {
                onClose();

              }}
            >
              Скасувати
            </Button>
            <p className='font-nunito_font_family text-[#303030] text-opacity-70  text-lg'>Відмінити всі обрані фільтри</p>
          </div>
          <div className='text-center w-2/5 mr-5'>
            <Button className='text-white bg-primary font-nunito_font_family font-[700] text-xl text-center rounded-full  px-20'

              onClick={() => {
                  let stars:number[] = []

                  if (isFiveStars) stars.push(5)

                  if (isFourStars) stars.push(4)

                  if (isThreeStars) stars.push(3)



                const searchParamsDict:Record<string, string | undefined> = {
                    lowestPrice: (budget as any as number[])[0].toString(),
                    heightPrice: (budget as any as number[])[1].toString(),
                    inHotels: inHotelIds.join(','),
                    beachTypes: beachTypesIds.join(','),
                    dietTypes: dietTypesIds.join(','),
                    roomTypes: roomTypesIds.join(','),
                    st: stars.join(',')

                };
                


                setSearchParams(searchParamsDict);




                onClose();
              }}

            >
              Застосувати
            </Button>
            <p className='font-nunito_font_family  text-[#303030] text-lg text-opacity-70'>Додати обрані фільтри</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default HotelSearchParamsSettingsCard