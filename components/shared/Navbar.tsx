"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import {
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectItem,
} from "@nextui-org/react";

import headerLogoImage from "../../assets/images/header/Expedia_Logo_2023.png";

import SignInButton from "./SignInButton";
import SelectCountryForHotels from "./sharedComponents/selects/SelectCountryForHotels";

const ContactInfo = () => {
  return (
    <div className="px-4 py-6 space-y-6">
      <h2 className="text-2xl font-bold">Контакти</h2>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Icon className="text-primary text-2xl mt-1" icon="mdi:map-marker" />
          <div>
            Вулиця Велика Васильківська, 72,
            <br />
            Київ, 03150
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <Icon className="text-primary text-xl" icon="mdi:phone" />
            <a className="hover:text-primary" href="tel:+380446012377">
              +38 (044) 601 23 77
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Icon className="text-primary text-xl" icon="mdi:phone" />
            <a className="hover:text-primary" href="tel:+380687789000">
              +38 (068) 778 90 00
            </a>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <Link href="https://www.youtube.com/">
          <div className="bg-primary p-2 rounded-full">
            <Icon className="text-white text-2xl" icon="mdi:youtube" />
          </div>
        </Link>
        <Link href="https://www.instagram.com/">
          <div className="bg-primary p-2 rounded-full">
            <Icon className="text-white text-2xl" icon="mdi:instagram" />
          </div>
        </Link>

        <Link href="https://www.facebook.com/">
          <div className="bg-primary p-2 rounded-full">
            <Icon className="text-white text-2xl" icon="mdi:facebook" />
          </div>
        </Link>
      </div>
    </div>
  );
};

const AboutUsSelect = () => {
  const items = [
    {
      label: "Про компанію",
      id: "1",
      href: "/AboutUs",
    },
    {
      label: "Рейтинг та відгуки",
      id: "2",
      href: "/AboutUs#reviews",
    },
  ];

  return (
    <div className="w-full">
      <Select
        className="w-full md:w-auto"
        defaultSelectedKeys={[""]}
        items={items}
        placeholder="Про нас"
        selectionMode="none"
      >
        {(item) => (
          <SelectItem key={item.id}>
            <Link
              className="text-gray-600 hover:text-gray-900 text-sm"
              href={item.href}
            >
              <p>{item.label}</p>
            </Link>
          </SelectItem>
        )}
      </Select>
    </div>
  );
};

const ForTouristSelect = () => {
  const items = [
    {
      label: "Зворотній звязок",
      id: "1",
      href: "/",
    },
    {
      label: "Наші послуги",
      id: "2",
      href: "/#services",
    },
  ];

  return (
    <div className="w-full">
      <Select
        className="w-full md:w-auto"
        defaultSelectedKeys={[""]}
        items={items}
        placeholder="Туристам"
        selectionMode="none"
      >
        {(item) => (
          <SelectItem key={item.id}>
            <Link
              className="text-gray-600 hover:text-gray-900 text-sm"
              href={item.href}
            >
              <p>{item.label}</p>
            </Link>
          </SelectItem>
        )}
      </Select>
    </div>
  );
};
const ContactUs = () => {
  return (
    <Popover key="contactUs" placement="bottom">
      <PopoverTrigger>
        <div className="w-full text-center hover:cursor-pointer text-gray-600 hover:text-gray-900">
          {" "}
          <p>Контакти</p>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2 text-xl font-nunito_font_family">
          <div className="flex items-start gap-2 font-bold">
            <Icon className="mt-1 text-2xl" icon="mdi:map-marker" />
            <div className="text-wrap">
              Вулиця Велика Васильківська, 72,
              <br />
              Київ, 03150
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <div className="flex items-center gap-2">
              <Icon icon="mdi:phone" />
              <span>+38 (044) 601 23 77</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="mdi:phone" />
              <span>+38 (068) 778 90 00</span>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

const MobileMenu = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}
    >
      <button
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      <div className="absolute left-0 h-full w-72 bg-white overflow-y-auto">
        <div className="flex justify-end p-4">
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <Icon className="text-2xl" icon="mdi:close" />
          </button>
        </div>
        <div className="flex flex-col">
          <div className="px-4 py-2">
            <SelectCountryForHotels />
          </div>

          <Link
            className="px-4 py-3 text-gray-700 hover:bg-gray-50"
            href="/tours"
          >
            Тури
          </Link>

          <div className="px-4 py-3">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none text-gray-700">
                Туристам
                <Icon
                  className="group-open:rotate-180 transition-transform"
                  icon="mdi:chevron-down"
                />
              </summary>
              <div className="mt-2 ml-4 space-y-2">
                <Link
                  className="block text-gray-600 hover:text-[#5AA1E3]"
                  href="/"
                >
                  Зворотній звязок
                </Link>
                <Link
                  className="block text-gray-600 hover:text-[#5AA1E3]"
                  href="/#services"
                >
                  Наші послуги
                </Link>
              </div>
            </details>
          </div>

          <div className="px-4 py-3">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none text-gray-700">
                Про нас
                <Icon
                  className="group-open:rotate-180 transition-transform"
                  icon="mdi:chevron-down"
                />
              </summary>
              <div className="mt-2 ml-4 space-y-2">
                <Link
                  className="block text-gray-600 hover:text-[#5AA1E3]"
                  href="/AboutUs"
                >
                  Про компанію
                </Link>
                <Link
                  className="block text-gray-600 hover:text-[#5AA1E3]"
                  href="/AboutUs#reviews"
                >
                  Рейтинг та відгуки
                </Link>
              </div>
            </details>
          </div>

          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-2">
      <div className="container mx-auto mb-0 max-w-7xl px-4">
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <button
              className="md:hidden text-gray-600 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Icon className="text-2xl" icon="mdi:menu" />
            </button>
            <Link href="/">
              <Image alt="logo" className="w-auto h-8 " src={headerLogoImage} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center w-1/2 text-[15px]">
            <div className="w-1/5">
              <SelectCountryForHotels />
            </div>
            <div className="w-1/5 text-center">
              <Link className="text-gray-600 hover:text-gray-900" href="/tours">
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
            <div className="">
              <SignInButton />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Navbar;
