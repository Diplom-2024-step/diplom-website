import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import servicesDocumentsImage from "../../assets/images/services/Documents.png";
import servicesFlightTicketImage from "../../assets/images/services/Flight_tickets.png";
import servicesInsuranceImage from "../../assets/images/services/Insurance.png";
import servicesTransferImage from "../../assets/images/services/Transfer.png";
import servicesCruisesImage from "../../assets/images/services/Cruises.png";
import servicesDwellingImage from "../../assets/images/services/Dwelling.png";
import servicesConsultationsImage from "../../assets/images/services/Consultations.png";
import servicesLeisureImage from "../../assets/images/services/Leisure.png";
import servicesBackgroundImage from "../../assets/images/services/servicesBackgroundImage.png";
import servicesShadowImage from "../../assets/images/services/Shadow.png";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

const services = [
  {
    title: "Документи",
    image: servicesDocumentsImage,
    description: `"Ми беремо на себе всі питання з оформленням документів для вашої подорожі. Візи, закордонні паспорти, дозволи – ми подбаємо про всі формальності, щоб ви могли сконцентруватися на плануванні відпочинку."`,
  },
  {
    title: "Авіа квитки",
    image: servicesFlightTicketImage,
    description: `"Забезпечимо бронювання авіаквитків за вигідними тарифами. Допоможемо знайти найзручніший маршрут, запропонуємо варіанти для економії часу і коштів, а також проконсультуємо щодо багажу та пересадок."`,
  },
  {
    title: "Страхування",
    image: servicesInsuranceImage,
    description: `"Ваша безпека – наш пріоритет. Ми підберемо надійний страховий поліс, який покриє медичні витрати, втрату багажу чи непередбачені ситуації, щоб ви почувались упевнено під час подорожі."`,
  },
  {
    title: "Трансфер",
    image: servicesTransferImage,
    description: `"Забудьте про пошуки таксі або громадського транспорту! Ми організуємо комфортний трансфер з аеропорту, вокзалу або готелю, щоб ви насолоджувалися подорожжю з першої хвилини."`,
  },
  {
    title: "Круїзи",
    image: servicesCruisesImage,
    description: `"Вирушайте у подорож вашої мрії: від спокійних прогулянок річковими маршрутами до захоплюючих океанічних подорожей із безліччю зупинок у мальовничих портах."`,
  },
  {
    title: "Житло",
    image: servicesDwellingImage,
    description: `"Відповідно до ваших побажань, ми підберемо ідеальне місце для проживання. Бюджетні варіанти, сімейні кімнати чи розкішні курорти – вибір за вами, а організація за нами."`,
  },
  {
    title: "Консультації",
    image: servicesConsultationsImage,
    description: `"Не знаєте, який напрямок обрати чи виникли сумніви щодо туру? Наші експерти з туризму проконсультують вас щодо всіх питань і допоможуть знайти найкраще рішення."`,
  },
  {
    title: "Дозвілля",
    image: servicesLeisureImage,
    description: `"Ми організуємо для вас екскурсії, культурні заходи, активний відпочинок чи навіть гастрономічну тур. Ваша подорож стане не лише комфортною, а й наповненою яскравими емоціями."`,
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setStartX(touch.clientX);
    setStartY(touch.clientY);
  };

  const handleTouchEnd = (e, service) => {
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

  const handleOpenModal = (service) => {
    setSelectedService(service);
    onOpen();
  };

  return (
    <div
      id="services"
      className="flex flex-col w-full h-full justify-center items-center text-center bg-cover bg-center bg-no-repeat"
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
              slidesPerView={2}
              spaceBetween={16}
              pagination={{ clickable: true }}
              navigation
              modules={[Pagination, Navigation]}
              className="w-full max-w-md mx-auto h-[220px]"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="flex flex-col w-[194px] h-[192px] bg-transparent border-2 border-customAqua rounded-full justify-center items-center text-center hover:border-gradientCustom group"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={(e) => handleTouchEnd(e, service)}
                  >
                    <div className="flex flex-col w-[170px] h-[168px] bg-white rounded-full justify-center items-center text-center">
                      <Image alt={service.title} src={service.image} />
                      <p className="text-servicesTextColor mt-[5px] font-bold">
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
                      <Image alt={service.title} src={service.image} />
                      <p className="text-servicesTextColor mt-[5px] font-bold">
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
                        <Image alt={service.title} src={service.image} />
                        <p className="text-servicesTextColor mt-[5px] font-bold">
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

      <Modal
        isOpen={isOpen}
        size="4xl"
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
        onOpenChange={onOpenChange}
        classNames={{
          base: "bg-transparent", // Прозрачный фон модального окна
        }}
      >
        <ModalContent>
          {selectedService && (
            <>
              <ModalBody>
                <div className="relative rounded-tl-full rounded-bl-full rounded-br-full mx-auto bg-gradient-to-l from-[#FFFFFF] to-[#71BCC8] mr-3">
                  <div className="flex items-start justify-center items-center ">
                    <div className="h-full w-[30%]">
                      <div className="flex flex-col w-[194px] h-[194px] bg-transparent border-2 border-[#99D8DE] rounded-full justify-center items-center text-center hover:border-gradientCustom group">
                        <div className="flex flex-col w-[170px] h-[168px] bg-white rounded-full justify-center items-center text-center">
                          <Image
                            alt={selectedService.title}
                            src={selectedService.image}
                          />
                          <p className="text-servicesTextColor mt-[5px] font-bold">
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
                  onPress={onClose}
                  className=" h-[80px] p-[0px] border-4 bg-transparent border-white rounded-full flex items-center justify-center shadow-md"
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
  );
};

export default Services;
