"use client"
import { Checkbox, Divider, Slider, SliderValue } from '@nextui-org/react';
import React, { ChangeEvent, HtmlHTMLAttributes } from 'react'
import NumberInput from '../shared/sharedComponents/NumberInput';
import { Star } from 'lucide-react';
import { spawn } from 'child_process';

const HotelSearchParamsSettingsCard = (
  {

    lowestPrice,
    setLowestPrice,
    heightPrice,
    setHeightPrice

  }:
    {
      lowestPrice?: string;
      setLowestPrice: (value?: string) => void;
      heightPrice?: string;
      setHeightPrice: (value?: string) => void;
    }

) => {

  const [budget, setBudget] = React.useState<SliderValue>([10000, 100000]);


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
    <div className='w-full rounded-2xl shadow-2xl p-5 max-w-6xl mx-auto my-5  bg-white '>
      <div className='w-full flex p-4 rounded-2xl shadow-2xl'>
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
                maxValue={300000}
                minValue={10000}
                value={budget}
                onChange={setBudget}
                className=""
              />
            </div>
            <div className='flex-row mt-2'>
              <span className='mr-2'>Від</span>
              <input type="text" className='w-20 mr-2 border-black border-small ' value={(budget as any as number[])[0]}
                onChange={(e: React.FormEvent<HTMLInputElement>) => handleInputChange(e, 0)}


              />
              <span className='mr-2'>до</span>
              <input type="text" className='w-20 border-black border-small ' value={(budget as any as number[])[1]}
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

    </div>
  )
}

export default HotelSearchParamsSettingsCard