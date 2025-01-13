"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input, Spacer } from "@nextui-org/react";
import Image from "next/image";

import loginFormImage from "../../../assets/images/loginForm/image-1.png";

import "../../../assets/fonts-styles/font.css";
import axios from "axios";

const NewPassword = () => {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setPassword(value);

    if (!validatePassword(value)) {
      setPasswordError("Пароль не може бути пустим");
    } else {
      setPasswordError("");
    }

    // Проверка после ввода пароля
    if (confirmPassword && value !== confirmPassword) {
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
    }
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;

    setConfirmPassword(value);

    if (!validateConfirmPassword(value)) {
      setConfirmPasswordError(true);
    } else if (value !== password) {
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
    }
  };

  const validatePassword = (password: string): boolean => {
    return password.length > 0; // пароль не должен быть пустым
  };

  const validateConfirmPassword = (confirmPassword: string): boolean => {
    return confirmPassword.length > 0; // подтверждение пароля не должно быть пустым
  };

  const handleSubmit = async () => {
    if (!password || password !== confirmPassword) {
      setErrorMessage("Паролі не співпадають або пусті.");

      return;
    }

    try {
      const response = await axios.post("/api/change-password", { password });

      if (response.data.success) {
        console.log("Password successfully changed!");
      } else {
        setErrorMessage("Failed to change the password.");
      }
    } catch (error) {
      setErrorMessage("Error on the server. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen relative p-4 md:p-0">
      <div className="flex flex-col md:flex-row w-full md:w-[1000px] md:h-auto bg-white rounded-[20px] shadow-lg p-4 md:p-4 mt-6">
        {/* Левый блок с формой */}
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
            "Створіть новий надійний пароль для вашого
            <br />
            облікового запису."
          </p>

          <Spacer className="my-6" />

          <div className="w-full md:w-5/6 mx-auto">
            <Input
              className=" bg-transparent]"
              classNames={{
                inputWrapper:
                  "border-2 border-[#424242] hover:border-[#424242] focus:border-[#424242] border-opacity-100",
                input: "text-[#171717]",
              }}
              errorMessage={passwordError}
              isInvalid={!!passwordError || confirmPasswordError}
              placeholder="Новий пароль"
              radius="full"
              value={password}
              variant="bordered"
              onChange={handlePasswordChange}
            />
            <Spacer className="mb-3 mt-2" />
            <Input
              className=" bg-transparent text-[#30303080]"
              classNames={{
                inputWrapper:
                  "border-2 border-[#424242] hover:border-[#424242] focus:border-[#424242] border-opacity-100",
                input: "text-[#171717]",
              }}
              errorMessage={
                confirmPasswordError
                  ? "Паролі не збігаються. Будь ласка, перевірте та повторно введіть."
                  : ""
              }
              isInvalid={confirmPasswordError}
              placeholder="Підтвердження пароля"
              radius="full"
              value={confirmPassword}
              variant="bordered"
              onChange={handleConfirmPasswordChange}
            />
          </div>
          <Spacer className="my-6" />

          <div className="flex justify-center text-center mt-5 mb-2">
            <Button
              className="w-1/2 rounded-full text-white bg-[#5DB3C1] font-light"
              type="button"
            >
              Зберегти
            </Button>
          </div>
        </div>

        {/* Правый блок с изображением */}
        <div className="relative flex-1 w-full h-[450px] overflow-hidden md:ml-8 bg-cover bg-center">
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

export default NewPassword;
