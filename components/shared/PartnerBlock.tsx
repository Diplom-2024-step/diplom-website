import React from "react";
import Image from "next/image";
import UIAlogo from "../../assets/images/partners/Ukraine_International_Airlines_logo.png";
import skyuplogo from "../../assets/images/partners/skyup.png";
import windrise from "../../assets/images/partners/windrise.png";
import flix from "../../assets/images/partners/flix.png";
import info from "../../assets/images/partners/info.png";
import auto from "../../assets/images/partners/auto.png";
import hisky from "../../assets/images/partners/hisky.png";
import coredon from "../../assets/images/partners/Corendon_Airlines_2014_logo.png";
import flyone from "../../assets/images/partners/Flyone-logo.png";
import eurolines from "../../assets/images/partners/Eurolines.png";
import regiojet from "../../assets/images/partners/regiojet_logo_bezsa_rgb.png";
import pngwing from "../../assets/images/partners/pngwing.com.png";

const PartnerBlock = () => {
  return (
    <div className="flex flex-col items-center bg-white py-10 px-6 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-8 items-center w-[73%]">
        {/* Левая часть: заголовок и текст */}
        <div className="w-[90%]">
          <h1 className="text-[43px] text-black font-bold mb-4">
            Нам довіряють
          </h1>
          <div className="flex">
            <p className="text-black leading-relaxed">
              Ми пишаємося співпрацею з провідними компаніями та організаціями,
              які допомагають нам надавати найкращі туристичні послуги для наших
              клієнтів. Завдяки нашим партнерам і спонсорам ми можемо
              гарантувати високу якість обслуговування, вигідні ціни та
              незабутні враження. Разом ми робимо ваш відпочинок ще комфортнішим
              і приємнішим.
            </p>
          </div>
        </div>

        {/* Правая часть: логотипы */}
        <div className="flex flex-col items-center grid grid-cols-3 sm:grid-cols-3 gap-6 text-black w-full h-full">
          <div className="mr-3 ">
            <Image
              src={UIAlogo}
              alt="Fly UIA"
              className="h-[100px] object-contain"
            />
            <Image
              src={flix}
              alt="SkyUp Airlines"
              className="h-[100px] object-contain"
            />
            <Image
              src={flyone}
              alt="Windrose"
              className="h-[100px] object-contain"
            />
            <Image
              src={eurolines}
              alt="Flixbus"
              className="h-[100px] object-contain"
            />
          </div>
          <div className="mr-3 space-y-[50px]">
            <Image
              src={skyuplogo}
              alt="Infobus"
              className="h-[50px]  object-contain"
            />
            <Image
              src={info}
              alt="Автолюкс"
              className="h-[50px] object-contain"
            />
            <Image
              src={hisky}
              alt="FlyOne"
              className="h-[50px] object-contain"
            />
            <Image
              src={pngwing}
              alt="HiSky"
              className="h-[50px] object-contain"
            />
          </div>
          <div className="mr-3 space-y-[50px]">
            <Image
              src={windrise}
              alt="Corendon"
              className="h-[50px] object-contain"
            />
            <Image
              src={auto}
              alt="Eurolines"
              className="h-[50px] object-contain"
            />
            <Image
              src={coredon}
              alt="Wizz Air"
              className="h-[50px] object-contain"
            />
            <Image
              src={regiojet}
              alt="RegioJet"
              className="h-[50px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerBlock;
