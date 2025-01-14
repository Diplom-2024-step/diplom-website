import React from "react";
import Image from "next/image";
import { Button, Checkbox } from "@nextui-org/react";
import Link from "next/link";

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
              className="mb-12 mt-5"
              src={footerContactsImage}
            />
            <div className="flex w-[calc(100%+30px)]">
              <div>
                <div className="flex items-center space-x-8 mb-8">
                  <Image
                    alt="location"
                    className="w-auto max-w-[26px] h-auto max-h-[37px]"
                    src={footerLocationImage}
                  />
                  <p>Вулиця Велика Васильківська, 72, Київ, 03150</p>
                </div>
                <div className="flex items-center space-x-8">
                  <Image
                    alt="phone"
                    className="w-auto max-w-[26px] h-auto max-h-[37px]"
                    src={footerPhoneImage}
                  />
                  <div className="items-center">

                    <Link href="tel:+380687789000">
                    <p className="mb-2">+38 (044) 601 23 77</p>
</Link>

                    <Link href="tel:+380687789000">
                    <p>+38 (068) 778 90 00</p>
</Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between ml-12 md-12 space-y-2">
                <Link href={'https://www.youtube.com/'}>
                <Image
                  alt="youtube"
                  className="w-auto max-w-[50px] h-auto max-h-[50px]"
                  src={footerYouTubeImage}
                />
</Link>
                <Link href={'https://www.instagram.com/'}>
                <Image
                  alt="instagram"
                  className="w-auto max-w-[50px] h-auto max-h-[50px]"
                  src={footerInstagramImage}
                />
</Link>

                <Link href={'https://www.facebook.com/'}>
                <Image
                  alt="facebook"
                  className="w-auto max-w-[50px] h-auto max-h-[50px]"
                  src={footerFacebookImage}
                />
</Link>
              </div>
            </div>
            <div className="mt-8">
              <Button as={Link} href="/tours/" className="bg-[#5DB3C1] text-white py-2 px-4 rounded-full hover:bg-[#4da0b1]">
                Замовити тур
              </Button>
            </div>
          </div>
        </div>

        <div
          className="bg-cover bg-center p-10 w-5/6 flex flex-col justify-between  bg-no-repeat "
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(${footerBackImage.src})`,
          }}
        >
          <div className="p-12 pt-24">
            <div className="flex w-full">
              <div className="text-white w-[33%]">
                <ul className="space-y-6">
                  <li>
                    <p className="hover:underline">Країни</p>
                  </li>
                  <li>
                    <Link className="hover:underline" href="/tours/">
                      Тури
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text-white w-[33%]">
                <ul className="space-y-6">
                  <li>
                    <a className="hover:underline" href="/#services">
                      Туристам
                    </a>
                  </li>
                  <li>
                    <div className="flex flex-col gap-4">
                      <Link href={'/#workWithUs'}>
                        <div className="flex">
                          <Checkbox defaultSelected isReadOnly color="primary">
                          </Checkbox>
                          <span className="text-white">Зворотній звязок</span>
                        </div>
                      </Link>
                      <Link href={'/#services'}>
                        <div className="flex">

                          <Checkbox defaultSelected isReadOnly color="primary">
                          </Checkbox>
                          <span className="text-white">Наші послуги</span>
                        </div>
                      </Link>
                      <Link href={'/'}>
                      <Checkbox defaultSelected isReadOnly color="primary">
                      </Checkbox>
                        <span className="text-white">
                          Перевірити статус заявки
                        </span>
</Link>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="text-white w-[33%]">
                <ul className="space-y-6">
                  <li>
                    <a className="hover:underline" href="/AboutUs">
                      Про нас
                    </a>
                  </li>
                  <li>
                    <div className="flex flex-col gap-4">
                      <Link href={'/AboutUs'}>
                        <div className="flex">
                          <Checkbox defaultSelected isReadOnly color="primary">
                          </Checkbox>
                          <span className="text-white">Про компанію</span>
                        </div>
                      </Link>

                      <Link href={'/AboutUs#reviews'}>
                        <div className="flex">
                          <Checkbox defaultSelected isReadOnly color="primary">
                          </Checkbox>
                          <span className="text-white">Рейтинг та відгуки</span>
                        </div>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-white text-sm mt-[120px]">
              <p>2024 ООО "Expedia". Всі права захищені.</p>
              <p>Політика конфіденційності</p>
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
                <Link href={'/'}>
                  <p className="hover:underline">Країни</p>
</Link>
                </li>
                <li className="w-[40%]">
                  <a className="hover:underline" href="/tours/">
                    Тури
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex w-full mt-5">
              <div className="text-white w-[60%]">
                <ul className="space-y-6">
                  <Link href={'/#services'}>
                  <li>
                    <p className="hover:underline">Туристам</p>
                  </li>
</Link>
                  <li>
                    <div className="flex flex-col gap-4">
                      <Link href={'/#workWithUs'}>
                        <div className="flex">
                          <Checkbox defaultSelected isReadOnly color="primary">
                          </Checkbox>
                          <span className="text-white">Зворотній звязок</span>
                        </div>
                      </Link>
                      <Link href={'/#services'}>
                        <div className="flex">
                          <Checkbox defaultSelected isReadOnly color="primary">
                          </Checkbox>
                          <span className="text-white">Наші послуги</span>
                        </div>
                      </Link>
                      <Link href={'/'}>
                        <div className="flex">
                          <Checkbox defaultSelected isReadOnly color="primary">
                          </Checkbox>

                          <span className="text-white">
                            Перевірити статус заявки
                          </span>
                        </div>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="text-white w-[40%]">
                <ul className="space-y-6">

                    <Link className="hover:underline" href="/AboutUs">
                  <li>
                      Про нас
                  </li>

                    </Link>
                  <li>
                    <div className="flex flex-col gap-4">
                      <Link href={'/AboutUs'}>
                        <div className="flex">
                          <Checkbox defaultSelected isReadOnly color="primary">
                          </Checkbox>
                          <span className="text-white">Про компанію</span>
                        </div>
                      </Link>
                      <Link href={'/AboutUs#reviews'}>
                        <div className="flex">
                          <Checkbox defaultSelected isReadOnly color="primary">
                          </Checkbox>
                          <span className="text-white">Рейтинг та відгуки</span>
                        </div>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center max-w-full mb-10 mt-5 ">
            <Image
              alt="contacts"
              className="mb-12 mt-5"
              src={footerContactsImage}
            />
            <div className="flex flex-col w-[calc(100%+30px)]">
              <div className="flex">
                <div className="flex flex-col items-center space-x-8 mb-8 w-[50%]">
                  <Image
                    alt="location"
                    className="w-[30px] h-[40px]"
                    src={footerLocationImage}
                  />
                  <p className="mt-4 text-[15px]">
                    Вулиця Велика Васильківська, 72, Київ, 03150
                  </p>
                </div>
                <div className="flex flex-col items-center space-x-8 w-[50%]">
                  <Image
                    alt="phone"
                    className="w-[30px] h-[40px]"
                    src={footerPhoneImage}
                  />
                  <div className="items-center">
                    <Link href="tel:+380446012377">
                      <p className="mb-2 mt-4 text-[15px]">+38 (044) 601 23 77</p>
                    </Link>
                    <Link href="tel:+380687789000">
                      <p className="text-[15px]">+38 (068) 778 90 00</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex justify-between  mt-6">
                <Link href={'https://www.youtube.com/'}>
                  <Image
                    alt="youtube"
                    className="w-[70px] h-[70px]"
                    src={footerYouTubeImage}
                  />
                </Link>
                <Link href={'https://www.instagram.com/'}>
                  <Image
                    alt="instagram"
                    className="w-[70px] h-[70px]"
                    src={footerInstagramImage}
                  />
                </Link>

                <Link href={'https://www.facebook.com/'}>
                  <Image
                    alt="facebook"
                    className="w-[70px] h-[70px]"
                    src={footerFacebookImage}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-center flex flex-col justify-between  bg-no-repeat w-full"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(${footerBackImage.src})`,
          }}
        >
          <div className="font-nunito_font_family text-white text-sm h-full w-full justify-center p-10 text-center">
            <p>2024 ООО "Expedia". Всі права захищені.</p>
            <p className="font-nunito_font_family mt-5">
              <p className="hover:underline">Політика конфіденційності</p>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
