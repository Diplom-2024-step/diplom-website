"use client"
import React, { useEffect, useState } from 'react'
import {Time} from "@internationalized/date";
import type {Selection} from "@nextui-org/react";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { ChevronUp, Phone } from 'lucide-react';

const FixedButtonPhone = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

  const [isWorkingTime, setIsWorkingTime] = useState(false);

  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();
    setIsWorkingTime(currentHour >= 8 && currentHour < 18);
  }, []);

  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set(["Сьогодні"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
    [selectedKeys],
  );

  const [hours, setHours] = useState(new Time(8, 0));

  const handleHoursChange = (e: { target: { value: any; }; }) => {
    const value = Number(e.target.value);
    if (value >= 0 && value <= 23) {
      setHours(new Time(value, hours.minute));
    }
  };

  const incrementHour = () => {
    setHours(prevTime => new Time((prevTime.hour + 1) % 24, prevTime.minute));
  };

  const decrementHour = () => {
    setHours(prevTime => new Time((prevTime.hour - 1 + 24) % 24, prevTime.minute));
  };


  const [minutes, setMinutes] = useState(5);

  const incrementMinute = () => {
    setMinutes((prevMinute) => (prevMinute + 1) % 60);
  };

  const decrementMinute = () => {
    setMinutes((prevMinute) => (prevMinute - 1 + 60) % 60);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0 && value < 60) {
      setMinutes(value);
    }
  };



  const [timeElapsed, setTimeElapsed] = useState(0); // Начальное значение 0
  const [isRunning, setIsRunning] = useState(false); // Управление запуском секундомера

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning) {
      timer = setInterval(() => {
        setTimeElapsed((prev) => prev + 1); // Увеличиваем время на 1 каждую секунду
      }, 1000);
    }
    return () => clearInterval(timer); // Чистим таймер при размонтировании или остановке
  }, [isRunning]);

  // Форматируем время в часы, минуты, секунды
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const startTimer = () => {
    setTimeElapsed(0); // Сбрасываем время на 0
    setIsRunning(true); // Запускаем таймер
  };

  const [isVisible, setIsVisible] = useState(false);

  // Показывать кнопку, если прокручено больше 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Прокрутка вверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);


  return (
    <>
    {/* Кнопка звонка */}
     <div className="fixed bottom-5 right-5 flex flex-col gap-2 z-50">
      <button  
        className="bg-primary p-4  rounded-full shadow-xl shadow-primary transition-all duration-300 hover:brightness-90 "
                  onClick={onOpen}
        style={{
          transform: `translateY(${isVisible ? '-20px' : '0'})`,
        }}
      >
        <Phone className="w-6 h-6 text-white" />
      </button>
      
      {isVisible && (
        <button 
          onClick={scrollToTop}
          className="bg-gray-300 text-center p-4 rounded-md shadow-lg hover:brightness-90"
        >
          <ChevronUp className="w-6 h-6 text-gray-700" />
        </button>
      )}
    </div>
      {/* Модальное окно для нерабочего времени */}
      {!isWorkingTime && (
        <Modal
          isOpen={isOpen} 
          onClose={onClose} 
          className="bg-[#4e96a2] p-5" 
          radius="none"
          classNames={{
            closeButton: "custom-close-button",
            base: "max-w-[500px] h-[300px]",
          }}>
          <ModalContent className="flex justify-end items-center">
            <ModalHeader>
              <div className="w-full flex flex-col justify-start items-start">
                <p className="text-[#FFFFFF] text-small font-light">На жаль, зараз у нас неробочий час </p>
                <h1 className="text-[#FFFFFF] font-light">Хочете, зателефонуємо Вам рівно о:</h1>
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="flex items-center space-x-4">
                {/* Часы */}
                <div className="flex flex-row items-center bg-[#5DB3C1] rounded-none overflow-hidden">
                <input
                    type="text"
                    value={hours.hour.toString().padStart(2, '0')}
                    onChange={handleHoursChange}
                    className="w-14 text-center text-2xl font-light bg-[#5DB3C1] text-[#FFFFFF] border-none"
                    maxLength={2}
                    style={{
                      outline: 'none',
                      border: 'none',
                    }}
                  />
                  <div className="flex flex-col pr-2">
                    <button className="h-[13px] bg-transparent text-[#FFFFFF80] rounded-none" onClick={incrementHour}>▴</button>
                    <button className="bg-transparent text-[#FFFFFF80] rounded-none" onClick={decrementHour}>▾</button>
                  </div>
                </div>

                {/* Минуты */}
                <div className="flex flex-row items-center bg-[#5DB3C1] rounded-none overflow-hidden">
                  <input
                    type="text"
                    value={minutes.toString().padStart(2, '0')}
                    onChange={handleInputChange}
                    className="w-14 text-center text-2xl font-light bg-[#5DB3C1] text-[#FFFFFF]  border-none"
                    pattern="\d{1,2}"
                    maxLength={2}
                    style={{
                      outline: 'none',
                      border: 'none'
                    }}
                  />
                  <div className="flex flex-col pr-2">
                    <button className="h-[13px] bg-transparent text-[#FFFFFF80] rounded-none" onClick={incrementMinute}>▴</button>
                    <button className="bg-transparent text-[#FFFFFF80] rounded-none" onClick={decrementMinute}>▾</button>
                  </div>
                </div>


                <Dropdown
                  classNames={{
                      base: "rounded-none",
                      content: "rounded-none",
                  }}
                >
                  <DropdownTrigger>
                      <Button radius="none" className="capitalize  bg-[#5DB3C1] text-[#FFFFFF] text-md font-light items-center">
                        <p>{selectedValue} <span className="w-[5px] h-[6px]">▾</span> </p>
                      </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    className="w-[135px]"
                    disallowEmptySelection
                    aria-label="Date options"
                    selectedKeys={selectedKeys}
                    selectionMode="single"
                    variant="flat"
                    onSelectionChange={setSelectedKeys}
                    classNames={{
                      base: "border-none rounded-none",
                      list: "rounded-none",
                    }}
                    
                  >
                    <DropdownItem className="custom-dropdown-item" key="Сьогодні">Сьогодні</DropdownItem>
                    <DropdownItem className="custom-dropdown-item" key="Завтра">Завтра</DropdownItem>
                    <DropdownItem className="custom-dropdown-item" key="Післязавтра">Післязавтра</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="w-full flex flex-row mt-4">
                <div className="flex flex-row">
                  <Input
                    className="max-w-[170px]  placeholder-[#5DB3C1] shadow-[0px_4px_10px_rgba(0,0,0,0.25)]"
                    placeholder="Ваш номер телефону"
                    radius="none"
                    
                  />
                  <Button
                    className="bg-[#5DB3C1] text-[#FFFFFF] text-sm font-light shadow-[0px_4px_10px_rgba(0,0,0,0.25)]" 
                    radius="none"
                    onClick={startTimer}
                  >
                      Чекаю на дзвінок
                  </Button>
                </div>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}

      {/* Модальное окно для рабочего времени */}
      {isWorkingTime && (
        <Modal 
          isOpen={isOpen} 
          onClose={onClose} 
          className="bg-[#4e96a2] p-5" 
          radius="none"
          classNames={{
            closeButton: "custom-close-button",
            base: "max-w-[500px] h-[300px]",
          }}>
          <ModalContent>
            <ModalHeader className="pt-7">
              <div className="w-full flex justify-center items-center">
                <h1 className="text-[#FFFFFF] font-light">Хочете, зателефонуємо за 30 секунд?</h1>
              </div>
            </ModalHeader>
            <ModalBody>
            <div className="w-full flex flex-row gap-5">
                <div className="flex flex-row">
                  <Input
                    className="max-w-[170px]  placeholder-[#5DB3C1] shadow-[0px_4px_10px_rgba(0,0,0,0.25)]"
                    placeholder="Ваш номер телефону"
                    radius="none"
                    
                  />
                  <Button
                    className="bg-[#5DB3C1] text-[#FFFFFF] text-sm font-light shadow-[0px_4px_10px_rgba(0,0,0,0.25)]" 
                    radius="none"
                    onClick={startTimer}
                  >
                      Чекаю на дзвінок
                  </Button>
                </div>
                <div className="flex justify-center items-center">
                  <span className="text-[#FFFFFF]  font-light">
                    {formatTime(timeElapsed)}
                  </span>
                </div>
            </div>
            </ModalBody>
            <ModalFooter className="pb-7">
              <div className="flex flex-col items-start w-full">
                <p className="text-[#FFFFFF] text-left text-sm font-thin">Вільних операторів на лінії: 5</p>
                <p className="text-[#FFFFFF] text-left text-sm font-thin">Замовлених дзвінків за сьогодні: 20+</p>
              </div>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
</>
  )
}

export default FixedButtonPhone