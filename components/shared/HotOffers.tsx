import React from "react";
import Image from "next/image";
import servicesBackgroundImage from "../../assets/images/services/servicesBackgroundImage.png";

const HotOffers = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center w-full h-full">
      <p className="text-black text-[43px] font-bold">Гарячі пропозиції</p>
      <div className="w-full h-full">
        <div>
          <div
            className="flex flex-col bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${servicesBackgroundImage.src})`,
            }}
          >
            <p></p>
          </div>
        </div>
        <div></div>
      </div>
      <button className="text-black">Переглянути більше</button>
    </div>
  );
};

export default HotOffers;
