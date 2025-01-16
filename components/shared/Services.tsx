import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import servicesBackgroundImage from "../../assets/images/services/servicesBackgroundImage.png";
import servicesShadowImage from "../../assets/images/services/Shadow.png";

import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

const services = [
  {
    title: "Документи",
    image: "bi:passport",
    description: `"Ми беремо на себе всі питання з оформленням документів для вашої подорожі. Візи, закордонні паспорти, дозволи – ми подбаємо про всі формальності, щоб ви могли сконцентруватися на плануванні відпочинку."`,
  },
  {
    title: "Авіа квитки",
    image: "clarity:plane-solid",
    description: `"Забезпечимо бронювання авіаквитків за вигідними тарифами. Допоможемо знайти найзручніший маршрут, запропонуємо варіанти для економії часу і коштів, а також проконсультуємо щодо багажу та пересадок."`,
  },
  {
    title: "Страхування",
    image: "fluent:shield-task-28-regular",
    description: `"Ваша безпека – наш пріоритет. Ми підберемо надійний страховий поліс, який покриє медичні витрати, втрату багажу чи непередбачені ситуації, щоб ви почувались упевнено під час подорожі."`,
  },
  {
    title: "Трансфер",
    image: "pajamas:location-dot",
    description: `"Забудьте про пошуки таксі або громадського транспорту! Ми організуємо комфортний трансфер з аеропорту, вокзалу або готелю, щоб ви насолоджувалися подорожжю з першої хвилини."`,
  },
  {
    title: "Круїзи",
    image: "famicons:boat-outline",
    description: `"Вирушайте у подорож вашої мрії: від спокійних прогулянок річковими маршрутами до захоплюючих океанічних подорожей із безліччю зупинок у мальовничих портах."`,
  },
  {
    title: "Житло",
    image: "pepicons-pencil:house",
    description: `"Відповідно до ваших побажань, ми підберемо ідеальне місце для проживання. Бюджетні варіанти, сімейні кімнати чи розкішні курорти – вибір за вами, а організація за нами."`,
  },
  {
    title: "Консультації",
    image: "healthicons:dollar",
    description: `"Не знаєте, який напрямок обрати чи виникли сумніви щодо туру? Наші експерти з туризму проконсультують вас щодо всіх питань і допоможуть знайти найкраще рішення."`,
  },
  {
    title: "Дозвілля",
    image: "emojione-monotone:umbrella-on-ground",
    description: `"Ми організуємо для вас екскурсії, культурні заходи, активний відпочинок чи навіть гастрономічну тур. Ваша подорож стане не лише комфортною, а й наповненою яскравими емоціями."`,
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<{
    title: string;
    image: string;
    description: string;
  } | null>(null);
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  const handleTouchStart = (e: any) => {
    const touch = e.touches[0];

    setStartX(touch.clientX);
    setStartY(touch.clientY);
  };

  const handleTouchEnd = (e: any, service: any) => {
    const touch = e.changedTouches[0];
    const endX = touch.clientX;
    const endY = touch.clientY;

    // Рассчитываем расстояние свайпа
    const deltaX = Math.abs(endX - startX);
    const deltaY = Math.abs(endY - startY);

    // Если свайп незначительный, считаем это кликом
    if (deltaX < 10 && deltaY < 10) {
      handleOpenModal(service);
    }
  };

  const handleOpenModal = (service: any) => {
    setSelectedService(service);
    onOpen();
  };

  return (
    <div
      className="flex flex-col w-full h-full justify-center items-center text-center bg-cover bg-center bg-no-repeat"
      id="services"
      style={{
        backgroundImage: `url(${servicesBackgroundImage.src})`,
      }}
    >
      <div
        className="flex flex-col w-full h-full justify-center items-center text-center pb-[50px] pt-[50px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${servicesShadowImage.src})`,
        }}
      >
        <p className="text-[43px] font-bold font-unbounded text-white mb-[35px] text-xl md:text-3xl">
          Залиште всі ваші турботи нам
        </p>
        <div className="lg:hidden flex flex-col items-center justify-center overflow-x-hidden">
          <div
            className="bg-cover bg-center py-10 px-4"
            style={{ backgroundImage: "url('/images/background-water.png')" }}
          >
            <Swiper
              navigation
              className="w-full max-w-md mx-auto h-[220px]"
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              slidesPerView={2}
              spaceBetween={16}
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="flex flex-col w-[194px] h-[192px] bg-transparent border-2 border-customAqua rounded-full justify-center items-center text-center hover:border-gradientCustom group"
                    onTouchEnd={(e) => handleTouchEnd(e, service)}
                    onTouchStart={handleTouchStart}
                  >
                    <div className="flex flex-col w-[170px] h-[168px] bg-white rounded-full justify-center items-center text-center cursor-pointer"
                    role="button"
                    onClick={() => handleOpenModal(service)}
                    >
                      <Icon
                        className="absolute top-8 w-[50px] h-[100px] text-customAqua"
                        icon={service.image}
                      />
                      <p className="text-servicesTextColor mt-[50px] font-bold">
                        {service.title}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center">
          <div className="flex flex-col space-y-7">
            <div className="flex flex-wrap justify-center gap-7 md:space-x-10">
              {services.slice(0, services.length / 2).map((service, index) => (
                <Button
                  key={index}
                  className="h-full bg-transparent"
                  onPress={() => handleOpenModal(service)}
                >
                  <div className="flex flex-col w-[194px] h-[192px] bg-transparent border-2 border-customAqua rounded-full justify-center items-center text-center hover:border-gradientCustom group">
                    <div className="flex flex-col w-[170px] h-[168px] bg-white rounded-full justify-center items-center text-center">
                      <Icon
                        className="absolute top-8 w-[50px] h-[100px] text-customAqua"
                        icon={service.image}
                      />
                      <p className="text-servicesTextColor mt-[50px] font-bold">
                        {service.title}
                      </p>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-7 md:space-x-10">
              {services
                .slice(services.length / 2, services.length)
                .map((service, index) => (
                  <Button
                    key={index}
                    className="h-full bg-transparent"
                    onPress={() => handleOpenModal(service)}
                  >
                    <div className="flex flex-col w-[194px] h-[192px] bg-transparent border-2 border-customAqua rounded-full justify-center items-center text-center hover:border-gradientCustom group">
                      <div className="flex flex-col w-[170px] h-[168px] bg-white rounded-full justify-center items-center text-center">
                        <Icon
                          className="absolute top-8 w-[50px] h-[100px] text-customAqua"
                          icon={service.image}
                        />
                        <p className="text-servicesTextColor mt-[50px] font-bold">
                          {service.title}
                        </p>
                      </div>
                    </div>
                  </Button>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <Modal
          className="lg:hidden"
          backdrop="transparent"
          classNames={{
            
            base: "bg-transparent border-none shadow-none",
          }}
          isOpen={isOpen}
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              },
              exit: {
                y: -20,
                opacity: 0,
                transition: {
                  duration: 0.2,
                  ease: "easeIn",
                },
              },
            },
          }}
          size="4xl"
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {selectedService && (
              <>
                <ModalBody>
                  <div className="flex flex-col-reverse h-[425px]">
                    <div className="absolute z-60 left-5 top-0 flex flex-col mb-4">
                      <div className="flex flex-col w-[194px] h-[192px] bg-transparent border-2 border-customAqua rounded-full justify-center items-center text-center hover:border-gradientCustom group">
                        <div className="flex flex-col w-[170px] h-[168px] bg-white rounded-full justify-center items-center text-center">
                          <Icon
                            className="absolute top-8 w-[50px] h-[100px] text-customAqua"
                            icon={selectedService.image}
                          />
                          <p className="text-servicesTextColor mt-[50px] font-bold">
                            {selectedService.title}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-bl-[50px] rounded-tl-[100px] rounded-br-[50px] mx-auto bg-gradient-to-t from-[#FFFFFF] to-[#71BCC8] shadow-lg p-6 max-w-[400px] h-[350px] ">
                      <div className="flex flex-col items-center justify-center h-full pt-[70px]">
                        <p className="text-[16px] text-center text-cyan-900 italic mt-5">
                          {selectedService.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter className="flex items-center justify-center">
                  <Button
                    className=" h-[80px] p-[0px] border-4 bg-transparent border-white rounded-full flex items-center justify-center shadow-md"
                    onPress={onClose}
                  >
                    <span className="flex text-white text-[50px] text-center justify-center items-center w-full h-full pb-[8px]">
                      &times;
                    </span>
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>

        <Modal
          className="hidden lg:flex"

          backdrop="transparent"
          classNames={{
            base: "bg-transparent border-none shadow-none",
          }}
          isOpen={isOpen}
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              },
              exit: {
                y: -20,
                opacity: 0,
                transition: {
                  duration: 0.2,
                  ease: "easeIn",
                },
              },
            },
          }}
          size="4xl"
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {selectedService && (
              <>
                <ModalBody>
                  <div className="relative rounded-tl-full rounded-bl-full rounded-br-full mx-auto bg-gradient-to-l from-[#FFFFFF] to-[#71BCC8] mr-3">
                    <div className="flex items-start justify-center  ">
                      <div className="h-full w-[30%]">
                        <div className="flex flex-col w-[194px] h-[192px] bg-transparent border-2 border-customAqua rounded-full justify-center items-center text-center hover:border-gradientCustom group">
                          <div className="flex flex-col w-[170px] h-[168px] bg-white rounded-full justify-center items-center text-center">
                            <Icon
                              className="absolute top-8 w-[50px] h-[100px] text-customAqua"
                              icon={selectedService.image}
                            />
                            <p className="text-servicesTextColor mt-[50px] font-bold">
                              {selectedService.title}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="ml-10">
                        <p className="text-[20px] text-cyan-900 mt-1 italic">
                          {selectedService.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter className="flex items-center justify-center">
                  <Button
                    className=" h-[80px] p-[0px] border-4 bg-transparent border-white rounded-full flex items-center justify-center shadow-md"
                    onPress={onClose}
                  >
                    <span className="flex text-white text-[50px] text-center justify-center items-center w-full h-full pb-[8px]">
                      &times;
                    </span>
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default Services;
