import React from "react";
import Image from "next/image";
import footerBackImage from "../../assets/images/footer/Rectangle_1760.png";
import footerLocationImage from "../../assets/images/footer/Location.png";
import footerPhoneImage from "../../assets/images/footer/Vector.png";
import footerYouTubeImage from "../../assets/images/footer/YouTube.png";
import footerInstagramImage from "../../assets/images/footer/Instagram.png";
import footerFacebookImage from "../../assets/images/footer/Facebook.png";
import footerContactsImage from "../../assets/images/footer/Contacts.png";

const Footer = () => {
  return (
    <footer className="flex w-full h-full">
      <div className="bg-customBlack text-white p-10 w-2/5 flex justify-center">
        <div className="flex flex-col items-center max-w-[55%] mb-10 ">
          <Image
            alt="contacts"
            src={footerContactsImage}
            className="text-[25px] font-bold mb-12 mt-5"
          />
          <div className="flex w-[calc(100%+30px)]">
            <div>
              <div className="flex items-center space-x-8 mb-8">
                <Image
                  alt="location"
                  src={footerLocationImage}
                  className="w-auto max-w-[26px] h-auto max-h-[37px]"
                />
                <p>Вулиця Велика Васильківська, 72, Київ, 03150</p>
              </div>
              <div className="flex items-center space-x-8">
                <Image
                  alt="phone"
                  src={footerPhoneImage}
                  className="w-auto max-w-[26px] h-auto max-h-[37px]"
                />
                <div className="items-center">
                  <p className="mb-2">+38 (044) 601 23 77</p>
                  <p>+38 (068) 778 90 00</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between ml-12 md-12 space-y-2">
              <Image
                alt="youtube"
                src={footerYouTubeImage}
                className="w-auto max-w-[50px] h-auto max-h-[50px]"
              />
              <Image
                alt="instagram"
                src={footerInstagramImage}
                className="w-auto max-w-[50px] h-auto max-h-[50px]"
              />
              <Image
                alt="facebook"
                src={footerFacebookImage}
                className="w-auto max-w-[50px] h-auto max-h-[50px]"
              />
            </div>
          </div>
          <div className="mt-8">
            <button className="bg-[#5DB3C1] text-white py-2 px-4 rounded-full hover:bg-[#4da0b1]">
              Замовити тур
            </button>
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-center p-10 w-5/6 flex flex-col justify-between bg-cover bg-no-repeat "
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(${footerBackImage.src})`,
        }}
      >
        <div className="p-12 pt-24">
          <div className="flex">
            <div className="text-white">
              <ul className="space-y-6">
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
            <div className="text-white ml-[100px]">
              <ul className="space-y-6">
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
          <div className="text-white text-sm mt-[100px]">
            <p>2024 ООО "Expedia". Всі права захищені.</p>
            <p>
              <a href="#" className="hover:underline">
                Політика конфіденційності
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
