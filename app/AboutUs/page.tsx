"use client"
import type {Selection} from "@nextui-org/react";
import {TimeInput} from "@nextui-org/date-input";
import {Time} from "@internationalized/date";
import React, { useState, useEffect } from "react";
import upArrow from "../../assets/images/about_as/up-arrow.svg"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import './style.css';

export const AboutUs = () => {
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
    <section className="about-us">
      <div className="container">
        <div className="about-us__content">
          <div className="about-us__main-container about-us__main-block">
            <div className="about-us__main-mobile">
              <h2 className="about-us__title about-us__title--main">
                Про нас
              </h2>

              <p className="about-us__main-info">
                Вітаємо у Expedia! Ми — команда професіоналів, які понад 8 років створює незабутні подорожі для наших клієнтів.
              </p>

              <div className="about-us__mobile-main-image-container"></div>

              <div className="about-us__mobile-colors">
                <div className="color-block-darkcyan about-us__mobile-color-block">
                  <p className="about-us__title-counts">
                    Спеціальних Турів
                  </p>

                  <p className="about-us__counts">
                    1,000
                  </p>
                </div>
                <div className="color-block-white about-us__mobile-color-block"></div>
                <div className="color-block-cyan about-us__mobile-color-block">
                  <p className="about-us__title-counts">
                    Задоволенних мандрівників
                  </p>

                  <p className="about-us__counts about-us__counts--mobile-right">
                    250,000+
                  </p>
                </div>
              </div>
            </div>

            <div className="about-us__main-grid about-us__main-grid--first">
              <div className="about-us__main-grid-left about-us__main-grid-left--first">
                <h2 className="about-us__title about-us__title--main">
                  Про нас
                </h2>

                <p className="about-us__main-info">
                  Вітаємо у Expedia! Ми — команда професіоналів, які понад 8 років створює незабутні подорожі для наших клієнтів.
                </p>
              </div>

              <div className="about-us__main-grid-right about-us__main-grid-right--first">
                <div className="color-block-darkcyan about-us__color-block about-us__color-block--1"></div>
                <div className="color-block-white about-us__color-block about-us__color-block--2"></div>
                <div className="color-block-cyan about-us__color-block about-us__color-block--3">
                  <p className="about-us__title-counts">
                    Спеціальних Турів
                  </p>

                  <p className="about-us__counts">
                    1,000
                  </p>
                </div>
              </div>
            </div>

            <div className="about-us__main-grid about-us__main-grid--second">
              <div className="about-us__main-grid-left about-us__main-grid-left--second"></div>

              <div className="about-us__main-grid-right about-us__main-grid-right--second">
                <div className="color-block-cyan about-us__color-block about-us__color-block--4"></div>
                <div className="color-block-darkcyan about-us__color-block about-us__color-block--5">
                  <p className="about-us__title-counts">
                    Задоволенних мандрівників
                  </p>

                  <p className="about-us__counts">
                    250,000+
                  </p>
                </div>
                <div className="about-us__color-block about-us__color-block--6"></div>
                <div className="color-block-darkcyan about-us__color-block about-us__color-block--7"></div>
              </div>
            </div>
          </div>

          <div className="about-us__why-are-we-here about-us__main-block">
            <h2 className="about-us__title">
              Чому ми <span className="about-us__title--blue">тут</span>
            </h2>

            <div className="about-us__why-are-we-here-main-info-container">
              <div className="about-us__why-are-we-here-info-container about-us__why-are-we-here-info-container--left">
                <p className="about-us__why-are-we-here-info">
                  Наша місія — створювати для Вас мандрівки, які надихають, розширюють горизонти та залишають незабутній слід у серці. Ми прагнемо зробити кожну подорож унікальною, наповненою емоціями, що надихають на нові відкриття.
                </p>
              </div>
              
              <div className="about-us__why-are-we-here-info-container about-us__why-are-we-here-info-container--right">
                <p className="about-us__why-are-we-here-info">
                  Ми віримо, що подорожі — це шлях до пізнання світу, культур, а також самих себе. Тому наша команда працює з турботою про кожну деталь, щоб Ваш відпочинок був безтурботним і максимально комфортним.
                </p>
              </div>
            </div>

            <div className="about-us__why-are-we-here-main-blocks-image-info-container">
              <div className="about-us__why-are-we-here-block about-us__why-are-we-here-block--1">
                <div className="about-us__why-are-we-here-image-container about-us__why-are-we-here-image-container--1"></div>

                <p className="about-us__why-are-we-here-block-info">
                  Індивідуальний підхід до кожного клієнта
                </p>
              </div>

              <div className="about-us__why-are-we-here-block about-us__why-are-we-here-block--2">
                <div className="about-us__why-are-we-here-image-container about-us__why-are-we-here-image-container--2"></div>

                <p className="about-us__why-are-we-here-block-info">
                  Широкий вибір напрямків і турів
                </p>
              </div>

              <div className="about-us__why-are-we-here-block about-us__why-are-we-here-block--3">
                <div className="about-us__why-are-we-here-image-container about-us__why-are-we-here-image-container--3"></div>

                <p className="about-us__why-are-we-here-block-info">
                  Підтримка 24/7 під час подорожі
                </p>
              </div>

              <div className="about-us__why-are-we-here-block about-us__why-are-we-here-block--4">
                <div className="about-us__why-are-we-here-image-container about-us__why-are-we-here-image-container--4"></div>

                <p className="about-us__why-are-we-here-block-info">
                  Ексклюзивні пропозиції та партнерства
                </p>
              </div>
            </div>
          </div>

          <div className="about-us__development">
            <h2 className="about-us__title">
              Розвиток компанії
            </h2>

            <div className="about-us__development-by-years-container about-us__main-block">
              <div className="about-us__development-by-year-container about-us__development-by-year-container--2015">
                <h2 className="about-us__development-year">
                  2015
                </h2>

                <div className="about-us__dots-info-container">
                  <div className="about-us__dots-container">
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                  </div>

                  <div className="about-us__info-by-year-container">
                    <p className="about-us__info-by-year">
                      "Наша подорож розпочалася з невеликої команди ентузіастів, які прагнули змінити підхід до організації подорожей, зробивши їх комфортними та доступними для кожного."
                    </p>
                  </div>
                </div>
              </div>

              <div className="about-us__development-by-year-container about-us__development-by-year-container--2017">
                <h2 className="about-us__development-year">
                  2017
                </h2>

                <div className="about-us__dots-info-container">
                  <div className="about-us__dots-container"></div>

                  <div className="about-us__info-by-year-container">
                    <p className="about-us__info-by-year">
                      "Ми організували понад 100 турів та встановили партнерства з провідними готелями і туристичними операторами по всій країні."
                    </p>
                  </div>
                </div>
              </div>

              <div className="about-us__development-by-year-container about-us__development-by-year-container--2020">
                <h2 className="about-us__development-year">
                  2020
                </h2>

                <div className="about-us__dots-info-container">
                  <div className="about-us__dots-container">
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                    <div className="about-us__dot"></div>
                  </div>

                  <div className="about-us__info-by-year-container">
                    <p className="about-us__info-by-year">
                      "Розроблено унікальні авторські пропозиції, які охоплюють понад 50 напрямків. Запуск онлайн-платформи для бронювання подорожей."
                    </p>
                  </div>
                </div>
              </div>

              <div className="about-us__development-by-year-container about-us__development-by-year-container--2023">
                <h2 className="about-us__development-year">
                  2023
                </h2>

                <div className="about-us__dots-info-container">
                  <div className="about-us__dots-container"></div>

                  <div className="about-us__info-by-year-container">
                    <p className="about-us__info-by-year">
                      "Досягнуто позначки у 250,000 задоволених клієнтів. Ми увійшли до рейтингу топ-10 туристичних агентств країни."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-us__about-our-team-container">
              <div className="about-us__about-our-team-absolute-image-container"></div>

              <div className="about-us__about-our-team-image-info-container">
                <div className="about-us__about-our-team-image-container"></div>

                <div className="about-us__about-our-team-info-container">
                  <p className="about-us__about-our-team-info">
                    <span className="about-us__about-our-team-info--bold">Наша команда</span> – це більше, ніж просто колектив професіоналів. Це люди, які живуть ідеєю створення ідеальних подорожей. Завдяки багаторічному досвіду та увазі до деталей ми створюємо моменти, які залишаються з вами назавжди. Ми поруч із вами на кожному кроці вашої подорожі, щоб зробити її незабутньою.
                  </p>

                  <div className="about-us__our-team-line-hashtags">
                    <div className="about-us__flex-hashtags">
                      <p className="about-us__hashtag">
                        #Команда
                      </p>

                      <p className="about-us__hashtag">
                        #Експерти
                      </p>

                      <p className="about-us__hashtag">
                        #Надійна<span className="about-us__hashtag about-us__hashtag--yellow">Підтримка</span>
                      </p>
                    </div>
                  </div>

                  <div className="about-us__our-team-line-hashtags">
                    <div className="about-us__flex-hashtags about-us__flex-hashtags--second">
                      <p className="about-us__hashtag">
                        #Турбота
                      </p>

                      <p className="about-us__hashtag about-us__hashtag--yellow">
                        #Досвід
                      </p>

                      <p className="about-us__hashtag">
                        #Професіонали
                      </p>

                      <p className="about-us__hashtag">
                        #ЗНами
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Кнопка звонка */}
      <div className="flex flex-col gap-2 fixed bottom-10 right-5">
        <Button
           className={`call-button shadow-[0px_4px_10px_rgba(0,0,0,0.25)] transition-all duration-300`}
           style={{
             bottom: isVisible ? '90px' : '20px',
           }}
          onClick={onOpen}
          color="primary"
          radius="none"
        >
          <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/phone--v1.png" alt="phone--v1"/>
        </Button>

        {isVisible && (
          <button
            onClick={scrollToTop}
            className="scroll-button bg-[#c2c1c1ee] hover:bg-gray-400 text-gray-700 p-2 rounded shadow-lg mt-1"
            aria-label="Scroll to top"
          >
            <img  src={upArrow.src} alt="upArrow"/>
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
    </section> 
  );
};

export default AboutUs;