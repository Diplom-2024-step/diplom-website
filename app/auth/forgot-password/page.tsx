"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input, Spacer } from "@nextui-org/react";
import Image from "next/image";

import loginFormImage from "../../../assets/images/loginForm/image-1.png";
import "../../../assets/fonts-styles/font.css";

const ForgotPassword = () => {
  const route = useRouter();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return re.test(String(email).toLowerCase());
  };

  const handleButtonClick = () => {
    if (validateEmail(email)) {
      route.push(`/auth/recovery-password?email=${encodeURIComponent(email)}`);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setEmail(value);

    if (!value) {
      setEmailError("Email не може бути порожнім");
    } else if (!validateEmail(value)) {
      setEmailError("Введіть коректний email");
    } else {
      setEmailError("");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen relative p-4 md:p-0">
      <button
        className="absolute top-5 left-1 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg mb-3
                transition-all duration-300 hover:shadow-xl transform hover:scale-105"
      >
        <div className="flex items-center justify-center">
          <img
            alt="left-arrow"
            className="w-7 h-7"
            src="https://img.icons8.com/?size=100&id=39776&format=png&color=1A1A1A"
          />
        </div>
      </button>

      <div className="flex flex-col md:flex-row w-full md:w-[1000px] md:h-auto bg-white rounded-[20px] shadow-lg p-4 md:p-4 mt-6">
        {/* Left form block */}
        <div className="mt-10 mb-10 justify-center w-full md:w-2/5 p-5 flex flex-col">
          <h1
            className="font-unbounded text-center text-[#0F171B] text-[26px] mb-4 font-bold whitespace-nowrap"
            style={{ fontFamily: "Unbounded, sans-serif" }}
          >
            Відновлення пароля
          </h1>
          <Spacer />
          <p
            className="text-center text-[#0F171B] text-[14px]"
            style={{ fontFamily: "Nunito, sans-serif", fontWeight: 600 }}
          >
            Будь ласка, введіть Вашу електронну адресу,
            <br />і ми надішлемо інструкції щодо відновлення пароля.
          </p>

          <Spacer className="mt-2 mb-2" />
          <form className="mt-3 ml-2 max-w-xs">
            <Input
              className="bg-transparent mb-4"
              classNames={{
                inputWrapper:
                  "border-2 border-[#424242] hover:border-[#424242] focus:border-[#424242] border-opacity-100",
                input: "text-[#171717]",
              }}
              errorMessage={emailError}
              isInvalid={!!emailError}
              placeholder="Email"
              radius="full"
              type="email"
              value={email}
              variant="bordered"
              onChange={handleEmailChange}
            />
            <Spacer />

            <div className="flex justify-center text-center mt-5 mb-2">
              <Button
                className="w-1/2 rounded-full text-white bg-[#5DB3C1] font-light"
                type="button"
                onClick={handleButtonClick}
              >
                Надіслати
              </Button>
            </div>
          </form>
        </div>

        <div className="relative flex-1 w-full h-[450px] overflow-hidden md:ml-8">
          <Image
            alt="Login Image"
            className="rounded-[20px]"
            layout="fill"
            objectFit="cover"
            src={loginFormImage}
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
