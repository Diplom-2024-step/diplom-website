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
            <Image alt="documents" src={servicesDocumentsImage} />
            <Image alt="flight_tickets" src={servicesFlightTicketImage} />
            <Image alt="insurance" src={servicesInsuranceImage} />
            <Image alt="transfer" src={servicesTransferImage} />
          </div>
          <div className="flex space-x-[120px]">
            <Image alt="cruises" src={servicesCruisesImage} />
            <Image alt="dwelling" src={servicesDwellingImage} />
            <Image alt="consultations" src={servicesConsultationsImage} />
            <Image alt="leisure" src={servicesLeisureImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
