import React from "react";
import Image from "next/image";
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

const Services = () => {
  return (
    <div
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
        <p className="text-[43px] font-bold mb-[35px]">
          Залиште всі ваші турботи нам
        </p>
        <div className="flex flex-col space-y-7">
          <div className="flex space-x-[120px]">
            <div className="flex flex-col w-[194px] h-[192px] bg-transparent border-2 border-customAqua rounded-full justify-center items-center text-center hover:border-gradientCustom group">
              <div className="flex flex-col w-[170px] h-[168px] bg-white rounded-full justify-center items-center text-center">
                <Image alt="documents" src={servicesDocumentsImage} />
                <p className="text-servicesTextColor mt-[5px] font-bold">
                  Документи
                </p>
              </div>
            </div>
            <div className="flex flex-col w-[194px] h-[192px] bg-transparent border-2 border-customAqua rounded-full justify-center items-center text-center">
              <div className="flex flex-col w-[170px] h-[168px] bg-white rounded-full justify-center items-center text-center">
                <Image alt="documents" src={servicesFlightTicketImage} />
                <p className="text-servicesTextColor mt-[5px] font-bold">
                  Авіа квитки
                </p>
              </div>
            </div>
            <div className="flex flex-col w-[194px] h-[192px] bg-transparent border-2 border-customAqua rounded-full justify-center items-center text-center">
              <div className="flex flex-col w-[170px] h-[168px] bg-white rounded-full justify-center items-center text-center">
                <Image alt="documents" src={servicesInsuranceImage} />
                <p className="text-servicesTextColor mt-[5px] font-bold">
                  Страхування
                </p>
              </div>
            </div>
            <div className="flex flex-col w-[194px] h-[192px] bg-transparent border-2 border-customAqua rounded-full justify-center items-center text-center">
              <div className="flex flex-col w-[170px] h-[168px] bg-white rounded-full justify-center items-center text-center">
                <Image alt="documents" src={servicesTransferImage} />
                <p className="text-servicesTextColor mt-[5px] font-bold">
                  Трансфер
                </p>
              </div>
            </div>
          </div>
          <div className="flex space-x-[120px]">
            <div className="flex flex-col w-[194px] h-[192px] bg-transparent border-2 border-customAqua rounded-full justify-center items-center text-center">
              <div className="flex flex-col w-[170px] h-[168px] bg-white rounded-full justify-center items-center text-center">
                <Image alt="documents" src={servicesCruisesImage} />
                <p className="text-servicesTextColor mt-[5px] font-bold">
                  Трансфер
                </p>
              </div>
            </div>
            <div className="flex flex-col w-[194px] h-[192px] bg-transparent border-2 border-customAqua rounded-full justify-center items-center text-center">
              <div className="flex flex-col w-[170px] h-[168px] bg-white rounded-full justify-center items-center text-center">
                <Image alt="documents" src={servicesDwellingImage} />
                <p className="text-servicesTextColor mt-[5px] font-bold">
                  Житло
                </p>
              </div>
            </div>
            <div className="flex flex-col w-[194px] h-[192px] bg-transparent border-2 border-customAqua rounded-full justify-center items-center text-center">
              <div className="flex flex-col w-[170px] h-[168px] bg-white rounded-full justify-center items-center text-center">
                <Image alt="documents" src={servicesConsultationsImage} />
                <p className="text-servicesTextColor mt-[5px] font-bold">
                  Консультації
                </p>
              </div>
            </div>
            <div className="flex flex-col w-[194px] h-[192px] bg-transparent border-2 border-customAqua rounded-full justify-center items-center text-center hover:border-gradientCustom hover:border-gradientCustomGreen">
              <div className="flex flex-col w-[170px] h-[168px] bg-white rounded-full justify-center items-center text-center">
                <Image alt="documents" src={servicesLeisureImage} />
                <p className="text-servicesTextColor mt-[5px] font-bold group-hover:text-black">
                  Дозвілля
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
