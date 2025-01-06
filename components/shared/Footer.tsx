import React from "react";
import Image from "next/image";
import { Checkbox } from "@nextui-org/react";
import footerBackImage from "../../assets/images/footer/Rectangle_1760.png";
import footerLocationImage from "../../assets/images/footer/Location.png";
import footerPhoneImage from "../../assets/images/footer/Vector.png";
import footerYouTubeImage from "../../assets/images/footer/YouTube.png";
import footerInstagramImage from "../../assets/images/footer/Instagram.png";
import footerFacebookImage from "../../assets/images/footer/Facebook.png";
import footerContactsImage from "../../assets/images/footer/Contacts.png";

const Footer = () => {
  return (
    <footer>
      <div className="hidden lg:flex w-full h-full">
        <div className="bg-customBlack text-white p-10 w-2/5 flex justify-center">
          <div className="flex flex-col items-center max-w-[55%] mb-10 ">
            <Image
              alt="contacts"
              src={footerContactsImage}
              className="mb-12 mt-5"
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
            <div className="flex w-full">
              <div className="text-white w-[33%]">
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
                </ul>
              </div>
              <div className="text-white w-[33%]">
                <ul className="space-y-6">
                  <li>
                    <a href="#" className="hover:underline">
                      Туристам
                    </a>
                  </li>
                  <li>
                    <div className="flex flex-col gap-4">
                      <Checkbox defaultSelected isReadOnly color="primary">
                        <span className="text-white">Зворотній звязок</span>
                      </Checkbox>
                      <Checkbox defaultSelected isReadOnly color="primary">
                        <span className="text-white">Наші послуги</span>
                      </Checkbox>
                      <Checkbox defaultSelected isReadOnly color="primary">
                        <span className="text-white">
                          Перевірити статус заявки
                        </span>
                      </Checkbox>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="text-white w-[33%]">
                <ul className="space-y-6">
                  <li>
                    <a href="#" className="hover:underline">
                      Про нас
                    </a>
                  </li>
                  <li>
                    <div className="flex flex-col gap-4">
                      <Checkbox defaultSelected isReadOnly color="primary">
                        <span className="text-white">Про компанію</span>
                      </Checkbox>
                      <Checkbox defaultSelected isReadOnly color="primary">
                        <span className="text-white">Рейтинг та відгуки</span>
                      </Checkbox>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-white text-sm mt-[120px]">
              <p>2024 ООО "Expedia". Всі права захищені.</p>
              <p>
                <a href="#" className="hover:underline">
                  Політика конфіденційності
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex flex-col w-full h-full">
        <div className="bg-customBlack text-white p-10  flex flex-col justify-center">
          <div className="flex flex-col w-full">
            <div className="text-white w-full">
              <ul className="flex">
                <li className="w-[60%]">
                  <a href="#" className="hover:underline">
                    Країни
                  </a>
                </li>
                <li className="w-[40%]">
                  <a href="#" className="hover:underline">
                    Тури
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex w-full mt-5">
              <div className="text-white w-[60%]">
                <ul className="space-y-6">
                  <li>
                    <a href="#" className="hover:underline">
                      Туристам
                    </a>
                  </li>
                  <li>
                    <div className="flex flex-col gap-4">
                      <Checkbox defaultSelected isReadOnly color="primary">
                        <span className="text-white">Зворотній звязок</span>
                      </Checkbox>
                      <Checkbox defaultSelected isReadOnly color="primary">
                        <span className="text-white">Наші послуги</span>
                      </Checkbox>
                      <Checkbox defaultSelected isReadOnly color="primary">
                        <span className="text-white">
                          Перевірити статус заявки
                        </span>
                      </Checkbox>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="text-white w-[40%]">
                <ul className="space-y-6">
                  <li>
                    <a href="#" className="hover:underline">
                      Про нас
                    </a>
                  </li>
                  <li>
                    <div className="flex flex-col gap-4">
                      <Checkbox defaultSelected isReadOnly color="primary">
                        <span className="text-white">Про компанію</span>
                      </Checkbox>
                      <Checkbox defaultSelected isReadOnly color="primary">
                        <span className="text-white">Рейтинг та відгуки</span>
                      </Checkbox>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center max-w-full mb-10 mt-5 ">
            <Image
              alt="contacts"
              src={footerContactsImage}
              className="mb-12 mt-5"
            />
            <div className="flex flex-col w-[calc(100%+30px)]">
              <div className="flex">
                <div className="flex flex-col items-center space-x-8 mb-8 w-[50%]">
                  <Image
                    alt="location"
                    src={footerLocationImage}
                    className="w-[30px] h-[40px]"
                  />
                  <p className="mt-4 text-[15px]">
                    Вулиця Велика Васильківська, 72, Київ, 03150
                  </p>
                </div>
                <div className="flex flex-col items-center space-x-8 w-[50%]">
                  <Image
                    alt="phone"
                    src={footerPhoneImage}
                    className="w-[30px] h-[40px]"
                  />
                  <div className="items-center">
                    <p className="mb-2 mt-4 text-[15px]">+38 (044) 601 23 77</p>
                    <p className="text-[15px]">+38 (068) 778 90 00</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between ml-12 mt-6">
                <Image
                  alt="youtube"
                  src={footerYouTubeImage}
                  className="w-[70px] h-[70px]"
                />
                <Image
                  alt="instagram"
                  src={footerInstagramImage}
                  className="w-[70px] h-[70px]"
                />
                <Image
                  alt="facebook"
                  src={footerFacebookImage}
                  className="w-[70px] h-[70px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
