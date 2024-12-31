"use client";
import React from "react";
import Image from "next/image";
import headerLogoImage from "../../assets/images/header/Expedia_Logo_2023.png";
import SignInButton from "./SignInButton";
import { Icon } from "@iconify/react";
import { Link, Popover, PopoverContent, PopoverTrigger, Select, SelectItem } from "@nextui-org/react";
import SelectCountryForHotels from "./sharedComponents/selects/SelectCountryForHotels";

const AboutUsSelect = () => {
  return (
    <Select
      className=""
      placeholder="Про нас"
      selectionMode="none"
      defaultSelectedKeys={[""]}
      items={[{
        label: "Про компанію",
        id: "1",
        href: "/aboutUs"
      }, {
        label: "Рейтинг та відгуки",
        id: "2",
        href: "/aboutUs#reviews"
      }]}
    >
      {(item) => (
        <SelectItem key={item.id}>
          <Link href={item.href} className="text-gray-600 hover:text-gray-900 text-sm">
            <p>{item.label}</p>
          </Link>
        </SelectItem>
      )}
    </Select>
  );
};


const ForTouristSelect = () => {
  return (
    <Select
      className=""
      placeholder="Туристам"
      selectionMode="none"
      defaultSelectedKeys={[""]}
      items={[{
        label: "Зворотній звязок",
        id: "1",
        href: "/"
      }, {
        label: "Наші послуги",
        id: "2",
        href: "/#services"
      }]}
    >
      {(item) => (
        <SelectItem key={item.id}>
          <Link href={item.href} className="text-gray-600 hover:text-gray-900 text-sm">
            <p>{item.label}</p>
          </Link>
        </SelectItem>
      )}
    </Select>
  );
}


const ContactUs = () => {
  return (
    <Popover key={"contactUs"} placement={"bottom"}>
      <PopoverTrigger>
        <div className="w-full text-center hover:cursor-pointer ">
          <p>
            Контакти
          </p>
        </div>
      </PopoverTrigger>
      <PopoverContent >
        <div className="px-1 py-2 text-xl font-nunito_font_family">
          <div className="flex items-start gap-2  font-bold">
            <Icon icon="mdi:map-marker" className="mt-1 text-2xl" />
            <div className="text-wrap">
              Вулиця Велика Васильківська, 72,
              <br />
              Київ, 03150
            </div>
          </div>
          <div className="flex flex-col gap-1  mt-2">
            <div className="flex items-center gap-2">
              <Icon icon="mdi:phone" />
              <span>+38 (044) 601 23 77</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="mdi:phone" />
              <span>+38 (068) 778 90 00</span>
            </div>
          </div>
        </div>         </PopoverContent>
    </Popover>
  )
}



const Navbar = () => {
  return (
    <header className="bg-white shadow-md py-2">
      <div className="container mx-auto mb-0 max-w-7xl  flex-grow  flex items-center justify-between px-4">
        <Link href="/">
          <Image alt="logo" src={headerLogoImage}></Image>
        </Link>

        <nav className=" flex items-center justify-center  w-1/2 text-[15px]">

          <div className="w-1/5">
            <SelectCountryForHotels />
          </div>

          <div className="w-1/5 text-center">
            <Link href={`/tours`} className="text-gray-600 hover:text-gray-900">
              Тури
            </Link>
          </div>


          <div className="w-1/5">
            <ForTouristSelect />
          </div>


          <div className="w-1/5">
            <ContactUs />
          </div>

          <div className="w-1/5">
            <AboutUsSelect />
          </div>
        </nav>

        <div className="flex items-center space-x-4">
          <SignInButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
