// WorkWithUs.tsx
import React, { useMemo, useState } from "react";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

import MyImage from "../../assets/images/consultation/image.webp";
import "../../assets/fonts-styles/font.css";

export const messages = [
  {
    label: "Підбір туру",
    key: "tour",
    description: "",
  },
  {
    label: "Популярні напрямки",
    key: "popular",
    description: "",
  },
  {
    label: "Купівля авіа-квитків",
    key: "buy",
    description: "",
  },
  {
    label: "Оформлення віз та документів",
    key: "doc",
    description: "",
  },
  {
    label: "Бронювання готелю",
    key: "booking",
    description: "",
  },
  {
    label: "Замовлення додаткових послуг",
    key: "order",
    description: "",
  },
  {
    label: "Романтичні подорожі",
    key: "romantic",
    description: "",
  },
  {
    label: "Корпоративні/Групові тури",
    key: "group",
    description: "",
  },
  {
    label: "Повернення чи зміна деталей",
    key: "details",
    description: "",
  },
  {
    label: "Інше",
    key: "other",
    description: "",
  },
];

const WorkWithUs: React.FC = () => {
  const validatePhoneNumber = (value: string) =>
    value.match(/^\+380\d{2}\d{3}\d{2}\d{2}$/);

  const validateEmail = (value: string) =>
    value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");

  const handleOpenModal = () => {
    onOpen();
  };
  const handleCloseModal = () => {
    setPhoneNumber("")
    setSelectedTopic("");
    setFullName("");
    setEmail("");

    onClose();
  };


  const isInvalidPhoneNumber = useMemo(() => {
    if (phoneNumber === "") return false;
    return !validatePhoneNumber(phoneNumber);
  }, [phoneNumber]);

  const isInvalidEmail = useMemo(() => {
    if (email === "") return false;
    return !validateEmail(email);
  }, [email]);

  const isFormValid = useMemo(() => {
    return (
      phoneNumber !== "" &&
      !isInvalidPhoneNumber &&
      fullName !== "" &&
      email !== "" &&
      !isInvalidEmail &&
      selectedTopic !== ""
    );
  }, [phoneNumber, isInvalidPhoneNumber, fullName, email, isInvalidEmail, selectedTopic]);


  return (
    <div>
      <div className="hidden lg:flex flex-col bg-[#e1ebf1] my-8 py-10 text-center overflow-hidden">
        <h2
          className="text-[26px] font-bold text-gray-800 mb-12"
          style={{ fontFamily: "Unbounded, sans-serif" }}
        >
          Працювати з нами - просто
        </h2>

        {/* Шаг 1 */}
        <div className="flex items-center justify-center bg-white space-x-20">
          <div className="w-1/3 bg-[#5DB3C1] flex items-center justify-end rounded-tr-[45px] rounded-br-[45px] py-4 pr-[5.5rem]">
            <span
              className="font-bold text-4xl"
              style={{
                fontFamily: "Unbounded, sans-serif",
                color: "#5DB3C1",
                textShadow:
                  "0 0 0 white, 1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white", // Создание обводки
              }}
            >
              0 1
            </span>
          </div>
          <div className="w-2/3 bg-white py-4 flex items-center justify-start px-4">
            <p
              className="text-gray-700 text-sm md:text-base"
              style={{ fontFamily: "Nunito, sans-serif", fontWeight: 650 }}
            >
              Зареєструйтесь або увійдіть у свій особистий кабінет
            </p>
          </div>
        </div>

        {/* Шаг 2 */}
        <div className="flex items-center justify-center py-2 space-x-20">
          <div className="w-1/3 flex items-center justify-end py-4 pr-[5rem]">
            <span
              className="text-[#5DB3C1] font-bold text-4xl"
              style={{ fontFamily: "Unbounded, sans-serif" }}
            >
              0 2
            </span>
          </div>
          <div className="w-2/3 py-4 flex items-center justify-start px-4">
            <p
              className="text-gray-700 text-sm md:text-base"
              style={{ fontFamily: "Nunito, sans-serif", fontWeight: 650 }}
            >
              Оберіть тур із запропонованих варіантів
            </p>
          </div>
        </div>

        {/* Шаг 3 */}
        <div className="flex items-center justify-center bg-white space-x-20">
          <div className="w-1/3 bg-[#5DB3C1] flex items-center justify-end rounded-tr-[45px] rounded-br-[45px] py-4 pr-[5rem]">
            <span
              className="font-bold text-4xl"
              style={{
                fontFamily: "Unbounded, sans-serif",
                color: "#5DB3C1",
                textShadow:
                  "0 0 0 white, 1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white", // Создание обводки
              }}
            >
              0 3
            </span>
          </div>
          <div className="w-2/3 bg-white py-4 flex items-center justify-start px-4">
            <p
              className="text-gray-700 text-sm md:text-base"
              style={{ fontFamily: "Nunito, sans-serif", fontWeight: 650 }}
            >
              Укладіть договір з нашою агенцією
            </p>
          </div>
        </div>

        {/* Шаг 4 */}
        <div className="flex items-center justify-center py-2  space-x-20">
          <div className="w-1/3 flex items-center justify-end py-4 pr-[5rem]">
            <span
              className="text-[#5DB3C1] font-bold text-4xl"
              style={{ fontFamily: "Unbounded, sans-serif" }}
            >
              0 4
            </span>
          </div>
          <div className="w-2/3 py-4 flex items-center justify-start px-4">
            <p
              className="text-gray-700 text-sm md:text-base"
              style={{ fontFamily: "Nunito, sans-serif", fontWeight: 650 }}
            >
              Внесіть оплату та очікуйте на свої документи
            </p>
          </div>
        </div>

        {/* Шаг 5 */}
        <div className="flex items-center justify-center bg-white space-x-20">
          <div className="w-1/3 bg-[#5DB3C1] flex items-center justify-end rounded-tr-[45px] rounded-br-[45px] py-4 pr-[5rem]">
            <span
              className="font-bold text-4xl"
              style={{
                fontFamily: "Unbounded, sans-serif",
                color: "#5DB3C1",
                textShadow:
                  "0 0 0 white, 1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white", // Создание обводки
              }}
            >
              0 5
            </span>
          </div>
          <div className="w-2/3 bg-white py-4 flex items-center justify-start px-4">
            <p
              className="text-gray-700 text-sm md:text-base"
              style={{ fontFamily: "Nunito, sans-serif", fontWeight: 650 }}
            >
              Вирушайте у подорож та насолоджуйтесь відпочинком
            </p>
          </div>
        </div>
        <div>
          <Button
            className="mt-8 bg-[#5DB3C1] text-white px-10 transition-colors duration-200 w-[140px]"
            radius="full"
            size="md"
            onPress={() => handleOpenModal()}
          >
            Зв’яжіться з нами
          </Button>
        </div>

        <p className="mt-2 text-[13px] text-[#0F171B]">
          Потрібна консультація?
        </p>
      </div>
      <div className="lg:hidden bg-gray-100 py-10 px-6">
        <h2 className="font-unbounded text-[26px] text-center font-bold text-gray-900 mb-8">
          Працювати з нами - просто
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex items-center h-[200px]">
            <div className="relative flex flex-col items-center w-[50%] h-full">
              <div className="absolute bg-customGreen font-unbounded text-white text-4xl font-bold rounded-full w-full h-full flex justify-center">
                <p className="mt-[30px]">01</p>
              </div>
              <div className="relative top-[50%] h-[50%] w-full bg-white">
                <p className="absolute font-nunito_font_family mt-4 text-center text-gray-700">
                  Зареєструйтесь або увійдіть у свій особистий кабінет
                </p>
              </div>
            </div>
            <div className="relative flex flex-col items-center w-[50%] h-full">
              <div className="absolute bg-customGreen font-unbounded text-white text-4xl font-bold rounded-full w-full h-full flex justify-center">
                <p className="mt-[30px]">02</p>
              </div>
              <div className="relative top-[50%] h-[50%] w-full bg-white">
                <p className="absolute font-nunito_font_family mt-4 text-center text-gray-700">
                  Оберіть тур із запропонованих варіантів
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center h-[200px]">
            <div className="relative flex flex-col items-center w-[50%] h-full">
              <div className="absolute bg-customGreen font-unbounded text-white text-4xl font-bold rounded-full w-full h-full flex justify-center">
                <p className="mt-[33px] ">03</p>
              </div>
              <div className="relative top-[50%] h-[50%] w-full bg-white">
                <p className=" absolute font-nunito_font_family mt-4 text-center text-gray-700 ">
                  Укладіть договір з нашою агенцією
                </p>
              </div>
            </div>
            <div className="relative flex flex-col items-center w-[50%] h-full">
              <div className="absolute bg-customGreen font-unbounded text-white text-4xl font-bold rounded-full w-full h-full flex justify-center">
                <p className="mt-[33px] ">04</p>
              </div>
              <div className="relative top-[50%] h-[50%] w-full bg-white">
                <p className=" absolute font-nunito_font_family mt-4 text-center text-gray-700 ">
                  Внесіть оплату та очікуйте на свої документи
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            <div className="flex items-center h-[200px] w-full justify-center">
              <div className="relative flex flex-col items-center w-[50%] h-full">
                <div className="absolute bg-customGreen font-unbounded text-white text-4xl font-bold rounded-full w-full h-full flex justify-center">
                  <p className="mt-[33px] ">05</p>
                </div>
                <div className="relative top-[50%] h-[50%] w-full bg-white">
                  <p className="font-nunito_font_family absolute mt-4 text-center text-gray-700 ">
                    Вирушайте у подорож та насолоджуйтесь відпочинком
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button
            className="font-nunito_font_family text-white text-[18px] mt-8 bg-[#5DB3C1] px-10 transition-colors duration-200 w-[240px]"
            radius="full"
            size="md"
          >
            Зв’яжіться з нами
          </Button>
          <p className="font-nunito_font_family mt-4 text-gray-700 text-[18px]">
            Потрібна консультація?
          </p>
        </div>
      </div>
      <Modal
        classNames={{
          base: "bg-transparent",
        }}
        isOpen={isOpen}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <div className="bg-white flex flex-col h-[550px] p-10 items-center">
            <div className="flex flex-col items-center">
              <p className="text-[30px] font-unbounded font-bold">
                Консультація
              </p>
              <Image alt="image" className="mt-5 mb-5" src={MyImage} />
            </div>
            <div className="flex flex-col items-center w-full">
              <Autocomplete
                allowsCustomValue
                className="w-full"
                defaultItems={messages}
                label="Тема повідомлення"
                radius="full"
                size="lg"
                variant="bordered"
                onSelectionChange={(key) => setSelectedTopic(String(key))}
              >
                {(item) => (
                  <AutocompleteItem
                    key={item.key}
                    className="border-2 text-[18px] font-nunito_font_family"
                  >
                    {item.label}
                  </AutocompleteItem>
                )}
              </Autocomplete>
              <div className="flex w-full gap-4 mt-5">
                <Input
                  className="font-nunito_font_family rounded-full"
                  label="Телефон"
                  radius="full"
                  size="lg"
                  type="tel"
                  variant="bordered"
                  isInvalid={isInvalidPhoneNumber}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+380000000000"
                  errorMessage={isInvalidPhoneNumber ? "Введіть дійсний номер телефону" : ""}
                />
                <Input
                  className="font-nunito_font_family"
                  label="Ім'я"
                  radius="full"
                  size="lg"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  variant="bordered"
                />
              </div>
              <Input
                className="font-nunito_font_family mt-5"
                label="Електронна адреса"
                radius="full"
                size="lg"
                type="email"
                variant="bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={isInvalidEmail}
                errorMessage={isInvalidEmail ? "Введіть дійсну електронну адресу" : ""}
              />
              <p className="text-[18px] font-nunito_font_family mt-1">
                Для надсилання додаткової інформації
              </p>
              <Button
                className="mt-3 bg-[#5DB3C1] text-white text-[18px] px-10 transition-colors duration-200 w-[140px]"
                radius="full"
                size="md"
                onPress={handleCloseModal}
                isDisabled={!isFormValid}
              >
                Замовити
              </Button>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default WorkWithUs;
