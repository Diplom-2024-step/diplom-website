"use client";
import React from "react";
import Image from "next/image";
import headerLogoImage from "../../assets/images/header/Expedia_Logo_2023.png";
import SignInButton from "./SignInButton";
import { Icon } from "@iconify/react";
import { Link } from "@nextui-org/react";
import SelectCountryForHotels from "./sharedComponents/selects/SelectCountryForHotels";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md py-2">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/">
        <Image alt="logo" src={headerLogoImage}></Image>
</Link>

        <nav className="hidden md:flex items-center justify-center space-x-6 text-[15px]">

          <SelectCountryForHotels />

          <Link href={`/tours`} className="text-gray-600 hover:text-gray-900">
            Тури
          </Link>
          {/* <a href="#" className="text-gray-600 hover:text-gray-900">
            Тури
          </a> */}

          <div className="relative">
            <select className="bg-white text-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500 hover:bg-gray-100">
              <option value="" disabled selected>
                Туристам
              </option>
              <option value="country1">Туристам</option>
              <option value="country2">Туристам</option>
              <option value="country3">Туристам</option>
            </select>
          </div>

          <div className="relative">
            <select className="bg-white text-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500 hover:bg-gray-100">
              <option value="" disabled selected>
                Контакты
              </option>
              <option value="contact1">Туристам</option>
              <option value="contact2">Туристам</option>
              <option value="contact3">Туристам</option>
            </select>
          </div>

          <div className="relative">
            <select className="bg-white text-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500 hover:bg-gray-100  ">
              <option value="" disabled selected>
                Про нас
              </option>
              <option value="aboutus1">Про нас</option>
              <option value="aboutus2">Про нас</option>
              <option value="aboutus3">Про нас</option>
            </select>
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
