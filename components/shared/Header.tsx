import React, { useState, useEffect } from 'react';
import {Input, Button, Card, CardHeader, Spacer, image, CardBody} from '@nextui-org/react';
import Image from 'next/image';
import { Select, SelectItem } from "@nextui-org/select";
import { Avatar } from "@nextui-org/avatar";
import {DateRangePicker} from "@nextui-org/react";

import image1 from '../../assets/images/block-1/image-1.png';
import image2 from '../../assets/images/block-1/image-2.png';
import image3 from '../../assets/images/block-1/image-3.png';
import image4 from '../../assets/images/block-1/image-4.png';
import image5 from '../../assets/images/block-1/image-5.png';
import image6 from '../../assets/images/block-1/image-6.png';
import image7 from '../../assets/images/block-1/image-7.png';
import image8 from '../../assets/images/block-1/image-8.png';
import image9 from '../../assets/images/block-1/image-9.png';
import image10 from '../../assets/images/block-1/image-10.png';
import TravelerCard from './TravelerCard';

const images = [ image1, image2, image3, image4, image5, image6, image7, image8, image9, image10 ];

const Header = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);

  const FromOptions = [
    { value: "usa-newyork", label: "USA - New York", image: "https://flagcdn.com/w80/us.png"},
    { value: "usa-losangeles", label: "USA - Los Angeles", image: "https://flagcdn.com/w80/us.png"},
    { value: "canada-toronto", label: "Canada - Toronto", image: "https://flagcdn.com/w80/ca.png"},
    { value: "canada-vancouver", label: "Canada - Vancouver", image: "https://flagcdn.com/w80/ca.png" },
  ];

  const ToOptions = [
    { value: "usa-newyork", label: "USA - New York", image: "https://flagcdn.com/w80/us.png"},
    { value: "usa-losangeles", label: "USA - Los Angeles", image: "https://flagcdn.com/w80/us.png"},
    { value: "canada-toronto", label: "Canada - Toronto", image: "https://flagcdn.com/w80/ca.png"},
    { value: "canada-vancouver", label: "Canada - Vancouver", image: "https://flagcdn.com/w80/ca.png" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Меняем картинку каждые 3 секунды
    return () => clearInterval(interval);
  }, []);

  

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (type: 'adults' | 'children', value: number) => {
    if (type === 'adults') {
      setAdults(value);
    } else if (type === 'children') {
      setChildren(value);
    }
  };

  const handleSave = () => {
    toggleModal(); // Закрыть модальное окно
    // Здесь можете добавить логику для сохранения или использования значений adults и children
  };

  return (
    <div className="relative h-[460px] overflow-hidden">

      {images.map((img, index) => (
        <Image
          key={index}
          src={img.src}
          alt={`slider ${index}`}
          layout="fill"
          objectFit="cover"
          className={`absolute transition-opacity duration-700 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}

      <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-8 lg:px-12">
       
        <Card
          classNames={{
            base: "bg-transparent shadow-none"
          }}
          isBlurred={false}
          isFooterBlurred={false}
          radius='none'
          className="rounded-tl-none rounded-tr-[20px] rounded-br-[20px] rounded-bl-[30px] overflow-visible">
          <div className="flex items-center justify-center bg-white text-[#161616] w-44 md:w-60 pt-2 md:pt-3 pr-10 pl-10 font-bold rounded-tl-[15px] md:rounded-tl-[20px] rounded-tr-[15px] md:rounded-tr-[20px] shadow-lg">
            Тури
          </div>
          <CardHeader className="flex flex-wrap md:flex-nowrap flex-col md:flex-row justify-between  rounded-tl-none rounded-tr-[30px] md:rounded-tr-[50px] rounded-br-[30px] md:rounded-br-[50px] rounded-bl-[30px] md:rounded-bl-[50px] p-7 gap-5 bg-white text-[#161616]  overflow-visible">
            
            <div className="flex-1 w-full">
              <p className='mb-2'>Звідки прямуєш</p>
              <Select
                radius='full'
                placeholder="Звідки"
                className='w-full md:w-60'
              >
                {FromOptions.map((option) => (
                  <SelectItem 
                    key={option.value}
                    value={option.value} 
                    startContent={
                      <Avatar alt={`${option.value} flag`} className="w-6 h-6 mr-2 object-cover" src={`${option.image}`}/>
                    }
                    >
                   {option.label}
                    
                  </SelectItem>
                ))}
              </Select>
            </div>

            <div className="w-[1px] h-full bg-[#CECECE] mx-0 rounded-lg hidden md:block" />

            <div className="flex-1 w-full">
              <p className='mb-2'>Куди прямуєш</p>
              <Select
                radius='full'
                placeholder="Куди"
                className='w-full md:w-60'
              >
                {ToOptions.map((option) => (
                  <SelectItem 
                    key={option.value}
                    value={option.value} 
                    startContent={
                      <Avatar alt={`${option.value} flag`} className="w-6 h-6 mr-2 object-cover" src={`${option.image}`} />
                    }
                   
                    >
                   {option.label}
                    
                  </SelectItem>
                ))}
              </Select>
            </div>

            <div className="w-[1px] h-full bg-[#CECECE] mx-0 rounded-lg hidden md:block" />

            <div className="flex flex-row w-full gap-4">
              <div className="flex-1">
                <p className='mb-2'>Дата</p>
                <div className="flex w-full flex-wrap md:flex-nowrap  mb-6 md:mb-0 gap-4">
                  <DateRangePicker
                    className="text-[#171717]"
                    radius='full'
                    classNames={{ 
                      input: "text-[#171717]",
                      popoverContent: "bg-blue-100 dark:bg-blue-900",
                      calendar: "bg-white dark:bg-gray-800",
                    }}
                  />
                </div>
              </div>

              <div className="w-[1px] h-auto bg-[#CECECE] mx-0 rounded-lg  hidden md:block" />

              <div className="relative flex-1">
                <p className='mb-2'>Мандрівники</p>
                <Input
                  radius="full"
                  placeholder={`${adults} Мандрівник, ${children} дітей`}
                  onClick={toggleModal} 
                  classNames={{
                    input: "text-[#171717] cursor-pointer"
                  }}
                />
                {isOpen && (
                  <TravelerCard 
                    adults={adults}
                    children={children}
                    setAdults={setAdults}
                    setChildren={setChildren}
                    onSave={handleSave}
                    onClose={toggleModal} 
                  />
                )}
              
              </div>
            </div>
            <div className="flex items-center justify-center mt-4 md:mt-0 md:ml-2 md:mr-3">
              <Button
                className="rounded-full text-white bg-[#5DB3C1] font-medium py-6 px-4"
              >
                Шукати
              </Button>
            </div>
          </CardHeader>
        </Card>
        
      </div>
    </div>
  );
};



export default Header;

