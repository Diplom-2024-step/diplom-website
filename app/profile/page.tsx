"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  DatePicker,
  DateValue,
} from "@nextui-org/react";
import { parseDate } from "@internationalized/date";
import { Icon } from "@iconify/react";

import { useAuth, useAuthService } from "@/hooks/auth";
import LoadingScreen from "@/components/shared/LoadingScreen";
import UserService from "@/service/UserService";
import HistoryCarousel from "@/components/profile/HistoryCarousel";
import { GetUserDto } from "@/AppDtos/Dto/Users/get-user-dto";
import FavoriteTab from "@/components/profile/FavoriteTab";
import OrderInProgress from "@/components/profile/OrderInProgress";
import { getIconAccordingToIconNumber } from "@/lib/utils";
import ChooseAvatar from "@/components/profile/settings/ChooseAvatar";
import { UpdateUserDto } from "@/AppDtos/Dto/Users/update-user-dto";
import { useNewIcon } from "@/hooks/useNewIcon";

import background from "../../assets/images/block-1/image-2.webp";

const Profile = () => {
  const [user, setUser] = useState<GetUserDto>();

  const [activeTab, setActiveTab] = useState("booked"); // Состояние для активной вкладки

  const [birthDate, setBirthDate] = useState<DateValue | null>();

  const [firstName, setFirstName] = useState("");

  const [secondName, setSecondName] = useState("");

  const [userName, setUserName] = useState("");

  const [city, setCity] = useState<string | null>(null);

  const [tel, setTel] = useState<string | null>(null);

  const [icon, setIcon] = useState<string>("1");

  const [newIcon, setNewIcon] = useNewIcon();

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const auth = useAuth({
    redirect: true,
  });

  const service = UserService;

  const status = useAuthService(service);

  const validatePhoneNumber = (value: string) =>
    value.match(/^\+380\d{2}\d{3}\d{2}\d{2}$/);

  const isInvalidPhoneNumber = React.useMemo(() => {
    if (tel === null || tel === "") return false;

    return validatePhoneNumber(tel) ? false : true;
  }, [tel]);

  useEffect(() => {
    const fetchData = async () => {
      if (status === "success" && auth.status === "authorized") {
        try {
          setUser((await service.getUserById(auth.user?.user.id!)).data);
        } catch (error) {
          console.error("Error fetching user:", error);
          // Handle the error appropriately
        }
      }
    };

    fetchData();
  }, [status]);

  useEffect(() => {
    if (user !== undefined) {
      const firstSecondName = user?.userName.split(" ")!;

      if (firstSecondName[1] === undefined || firstSecondName[1] === null) {
        firstSecondName[1] = " ";
      }

      console.debug(firstSecondName);

      setBirthDate(
        user?.birthDate ? parseDate(user.birthDate.toString()) : null
      );

      setFirstName(firstSecondName[0]);

      setSecondName(firstSecondName[1]);

      setCity(user?.cityName || null);
      setIcon(user.iconNumber.toString());
      setTel(user?.phoneNumber || null);
      setUserName(user.userName);
    }
  }, [user]);

  if (
    auth.status === "loading" ||
    auth.status === "unauthorized" ||
    user === undefined
  )
    return <LoadingScreen />;

  return (
    <div className="flex flex-col items-center  min-h-screen pb-10  ">
      {/* Header Section */}
      <div className="w-full h-64 relative">
        <Image
          fill
          alt="Background"
          className=""
          objectFit="cover"
          src={background.src}
        />
        <div className="absolute -bottom-11 left-1/2 transform -translate-x-1/2 z-30 rounded-full bg-[#FFFFFF] border-[20px] border-white">
          <div className="rounded-full bg-[#FFFFFF] border-[20px] border-white">
            <div className="w-32 h-32   flex items-center justify-center">
              <Image
                alt="avatar"
                className=""
                height={128}
                objectFit="cover"
                src={getIconAccordingToIconNumber(icon)}
                width={128}
              />
              {isSettingsOpen ? (
                <>
                  <ChooseAvatar icon={icon} setIcon={setIcon} />
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

        <div
          className="absolute top-48 left-1/2 transform -translate-x-1/2 w-3/4 min-h-40 rounded-[10px] bg-[#FFFFFF] flex-col justify-center items-center text-center shadow-lg  z-10"
          style={{
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // тень для выделения
          }}
        >
          <button
            aria-label="Toggle chose the icon"
            className="absolute top-4 right-4 text-primary cursor-pointer"
            onClick={() => {
              setIsSettingsOpen(!isSettingsOpen);
            }}
          >
            <Icon height="24" icon="fa:gear" width="24" />
          </button>
          <div className="mt-28">
            <h2
              className="   text-xl text-[#0F171B]"
              style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 600 }}
            >
              {userName}
            </h2>
          </div>

          {isSettingsOpen ? (
            <div className="w-full mt-10 flex-col">
              <div className="max-w-3xl mx-auto p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="space-y-2">
                    <label
                      className="block text-gray-800 text-xl"
                      htmlFor="firstName"
                    >
                      Ім'я
                    </label>
                    <input
                      className="w-full p-2 border border-blue-200 rounded bg-blue-50"
                      id="firstName"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>

                  {/* Last Name */}
                  <div className="space-y-2">
                    <label
                      className="block text-gray-800 text-xl"
                      htmlFor="secondName"
                    >
                      Прізвище
                    </label>
                    <input
                      className="w-full p-2 border border-blue-200 rounded bg-blue-50"
                      id="secondName"
                      type="text"
                      value={secondName}
                      onChange={(e) => setSecondName(e.target.value)}
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label
                      className="block text-gray-800 text-xl"
                      htmlFor="tel"
                    >
                      Номер телефону
                    </label>
                    <input
                      className="w-full p-2 border border-blue-200 rounded bg-blue-50"
                      color={isInvalidPhoneNumber ? "danger" : "default"}
                      id="tel"
                      placeholder="+380501234567"
                      value={tel || ""}
                      onChange={(e) => setTel(e.target.value)}
                    />
                    {isInvalidPhoneNumber && (
                      <div className="text-danger">
                        {"Введіть дійсний номер телефону"}
                      </div>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      className="block text-gray-800 text-xl"
                      htmlFor="email"
                    >
                      Електронна адреса
                    </label>
                    <input
                      disabled
                      className="w-full p-2 border border-blue-200 rounded bg-blue-50"
                      id="email"
                      type="email"
                      value={user.email}
                    />
                  </div>

                  {/* Date of Birth */}
                  <div className="space-y-2">
                    <label
                      className="block text-gray-800 text-xl"
                      htmlFor="birthDate"
                    >
                      Дата народження
                    </label>
                    <DatePicker
                      className="w-full border border-blue-200 rounded bg-blue-50"
                      id="birthDate"
                      value={birthDate}
                      variant="underlined"
                      onChange={(date) => setBirthDate(date)}
                    />
                  </div>

                  {/* City */}
                  <div className="space-y-2">
                    <label
                      className="block text-gray-800 text-xl"
                      htmlFor="city"
                    >
                      Місто
                    </label>
                    <input
                      className="w-full p-2 border border-blue-200 rounded bg-blue-50"
                      id="city"
                      type="text"
                      value={city || ""}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex-row flex justify-around">
                <div className="flex-row w-2/5 flex justify-between">
                  <Button
                    className="text-white font-nunito_font_family  mb-10 text-base px-10"
                    color="primary"
                    radius="full"
                    onPress={() => {
                      if (isInvalidPhoneNumber) return;
                      const updateUser: UpdateUserDto = {
                        email: user.email,
                        iconNumber: parseInt(icon),
                        id: user.id,
                        role: user.roles[0],
                        userName: firstName + " " + secondName,
                        birthDate: birthDate ? birthDate?.toString() : null,
                        cityName: city,
                        phoneNumber: tel,
                      };

                      service.update(updateUser);

                      setIsSettingsOpen(false);

                      setUserName(firstName + " " + secondName);
                      setNewIcon(icon);
                    }}
                  >
                    Оновити дані
                  </Button>
                  <Button
                    className="bg-transparent text-black text-base rounded-full px-10  border-1 border-black"
                    onPress={() => {
                      const firstSecondName = user?.userName.split(" ")!;

                      if (
                        firstSecondName[1] === undefined ||
                        firstSecondName[1] === null
                      ) {
                        firstSecondName[1] = " ";
                      }

                      setBirthDate(
                        user?.birthDate
                          ? parseDate(user.birthDate.toString())
                          : null
                      );

                      setFirstName(firstSecondName[0]);

                      setSecondName(firstSecondName[1]);

                      setCity(user?.cityName || null);
                      setIcon(user.iconNumber.toString());

                      setTel(user?.phoneNumber || null);

                      setIsSettingsOpen(false);
                      setUserName(
                        (firstSecondName[0] + " " + firstSecondName[1]).trim()
                      );
                    }}
                  >
                    Скасувати
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      {/* Profile Card */}
      {!isSettingsOpen ? (
        <Card
          className="w-3/4 md:max-w-[75%] mt-36 rounded-tl-[20px] rounded-br-[20px] rounded-bl-[30px] z-0"
          classNames={{
            base: "bg-transparent shadow-none",
          }}
          isBlurred={false}
          isFooterBlurred={false}
          radius="none"
        >
          <CardHeader className="w-2/4  h-9 mt-0 pt-1 bg-[#FFFFFF] text-[#161616]  rounded-tl-[20px] rounded-tr-[20px] card-header-tabs-menu-container">
            <div className="flex justify-between text-[#161616]">
              <button
                className={`flex-1 px-6 pt-2 text-sm font-medium rounded-tr-[20px] whitespace-nowrap 
                relative card-header-tab-button
                ${activeTab === "booked" ? "text-[#0F171B] scale-110 " : "text-[#161616]"}
                ${activeTab === "completed" ? "border-r-0" : "border-r-2 border-gray-300  shadow-right"}`}
                onClick={() => setActiveTab("booked")}
              >
                Заброньовані тури
              </button>
              <button
                className={` hidden md:block flex-1  px-6 pt-2 text-sm font-medium rounded-tr-[20px] shadow-right whitespace-nowrap 
              relative card-header-tab-button
              ${activeTab === "completed" ? "text-[#0F171B] scale-110 rounded-tl-[20px] shadow-left rounded-tr-[20px] shadow-right border-l-2 border-gray-300" : "text-[#161616]"} 
              ${activeTab === "favorites" ? "border-r-0" : "border-r-2 border-gray-300"}`}
                onClick={() => setActiveTab("completed")}
              >
                Завершені тури
              </button>
              <button
                className={` flex-1  px-6 pt-2 text-sm font-medium rounded-tr-[20px] shadow-right whitespace-nowrap 
              relative card-header-tab-button
              ${activeTab === "favorites" ? "text-[#0F171B] scale-110 rounded-tl-[20px] shadow-left rounded-tr-[20px] shadow-right border-l-2 border-gray-300" : "text-[#161616]"} 
              ${activeTab === "comments" ? "border-r-0" : "border-r-2 border-gray-300"} `}
                onClick={() => setActiveTab("favorites")}
              >
                Обране
              </button>
              <button
                className={` hidden md:block flex-1  pl-7 pt-2 text-sm font-medium  shadow-right   whitespace-nowrap
              relative card-header-tab-button
              ${activeTab === "comments" ? "text-[#0F171B] scale-110 rounded-tl-[20px] shadow-left border-l-2 border-gray-300" : "text-[#161616]"}`}
                onClick={() => setActiveTab("comments")}
              >
                Мої коментарі
              </button>
            </div>
          </CardHeader>

          <CardBody className="h-auto w-full  text-[#0F171B] bg-white rounded-tr-[20px] shadow-lg">
            {activeTab === "booked" && <OrderInProgress user={user} />}

            {activeTab === "favorites" && <FavoriteTab user={user} />}
          </CardBody>

          {/* {activeTab === "completed" && <p>Контент для завершених турів</p>}
            {activeTab === "comments" && <p>Контент для коментарів</p>} */}
        </Card>
      ) : (
        <></>
      )}

      {!isSettingsOpen ? <HistoryCarousel /> : <></>}
    </div>
  );
};

export default Profile;
