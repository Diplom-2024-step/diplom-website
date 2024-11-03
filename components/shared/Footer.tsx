import React from "react";
import Image from "next/image";
import footerBackImage from "../../assets/images/footer/Rectangle_1760.png";

const Footer = () => {
  return (
    <footer className="flex w-full h-full">
      <div className="bg-customBlack text-white p-10 w-1/2 flex justify-center">
        <div>
          <div>
            <h2 className="text-xl font-bold mb-4">Контакти</h2>
            <p className="mb-2">Вулиця Велика Васильківська, 72, Київ, 03150</p>
            <p className="mb-2">+38 (044) 601 23 77</p>
            <p className="mb-4">+38 (068) 778 90 00</p>
            <button className="bg-[#5DB3C1] text-white py-2 px-4 rounded-full hover:bg-[#4da0b1]">
              Замовити тур
            </button>
          </div>
        </div>
        <div className="flex  flex flex-col">
          <a href="#" className="text-white hover:text-gray-400">
            YouTube
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            Instagram
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            Facebook
          </a>
        </div>
      </div>

      <div
        className="bg-cover bg-center p-10 w-5/6 flex flex-col justify-between bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${footerBackImage.src})`,
        }}
      >
        <div className="flex">
          <div className="text-white">
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Країни
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Тури
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Туристам
                </a>
              </li>
            </ul>
          </div>
          <div className="text-white">
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Контакти
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Про нас
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-white text-sm mt-8">
          <p>2024 ООО "Expedia". Всі права захищені.</p>
          <p>
            <a href="#" className="hover:underline">
              Політика конфіденційності
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
