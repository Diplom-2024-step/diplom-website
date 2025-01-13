import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { AxiosError } from "axios";
import { differenceInDays } from "date-fns";
import React, { useEffect, useState } from "react";

import { GetCityDto } from "@/AppDtos/Dto/Models/Hotels/get-city-dto";
import { CreateOrderDto } from "@/AppDtos/Dto/Models/Orders/create-order-dto";
import { GetTransportationTypeDto } from "@/AppDtos/Dto/Models/TransportationTypes/get-transportation-type-dto";
import { useTravelBookingContext } from "@/components/providers/TravelBookingProvider";
import { useAuth } from "@/hooks/auth";
import { OrderService } from "@/service/crudServices/OrderService";

const BuyButtonActive = ({
  transporationType,
  city,
  cost,
  tourId,
}: {
  transporationType?: GetTransportationTypeDto;
  city?: GetCityDto;
  cost: number;
  tourId?: string;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [loadingState, setLoadingState] = useState("none");
  const [error, setError] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");

  const [isOpenSuccessWindow, setIsOpenSuccessWindow] = useState(false);

  const [isOpenErrorWindow, setIsOpenErrorWindow] = useState(false);

  const [fullName, setFullName] = useState("");

  const auth = useAuth();

  const {
    adults,
    kids,
    dietType,
    roomType,
    transportationType,
    date,
    activities,
    hotel,
  } = useTravelBookingContext();

  const validatePhoneNumber = (value: string) =>
    value.match(/^\+380\d{2}\d{3}\d{2}\d{2}$/);

  const isInvalidPhoneNumber = React.useMemo(() => {
    if (phoneNumber === "") return false;

    return validatePhoneNumber(phoneNumber) ? false : true;
  }, [phoneNumber]);

  const createOrdere = async () => {
    let userId: string | null = null;

    if (auth.status === "authorized") {
      userId = auth.user?.user.id!;
    }

    const service = new OrderService();

    const cityId: string = city?.id!;

    const startDate = new Date(date.start.toString()).toISOString();
    const endDate = new Date(date.end.toString()).toISOString();

    const activitiesIds = activities.map((e) => e.id);

    const order: CreateOrderDto = {
      dietTypeId: dietType!.id,
      fromCityId: cityId,
      duration: differenceInDays(date.end.toString(), date.start.toString()),
      endDate: endDate,
      fullName: fullName,
      howManyAdults: adults,
      howManyKids: kids,
      mobilePhoneNumber: phoneNumber,
      orderStatus: "Очікування",
      priceUSD: cost,
      roomTypeId: roomType!.id,
      startDate: startDate,
      toCityId: hotel?.city.id!,
      hotelId: hotel?.id!,
      transportationTypeId: transporationType?.id!,
      activityIds: activitiesIds,
      adminId: null,
      userId: userId,
      tourId: tourId,
    };

    console.debug(order);

    try {
      setLoadingState("loading");
      const response = await service.create(order);

      setLoadingState("success");
      setIsOpenSuccessWindow(true);
    } catch (error) {
      setError((error as AxiosError).response?.statusText!);
      setLoadingState("error");
      setIsOpenErrorWindow(true);
    }
  };

  useEffect(() => {
    if (auth.status === "authorized") {
      setFullName(auth.user?.user.username!);
      //setPhoneNumber(auth.user?.decodeToken.mobilephone!);
    }
  }, [auth.status]);

  return city !== undefined && transporationType !== undefined ? (
    <>
      <Button
        className="mt-5 text-white w-full text-center booking-button"
        color="primary"
        radius="full"
        onClick={onOpen}
      >
        Замовити тур
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Замовити тур
              </ModalHeader>
              <ModalBody>
                <Input
                  isRequired
                  color={isInvalidPhoneNumber ? "danger" : "default"}
                  errorMessage="Введіть дійсний номер телефону"
                  isInvalid={isInvalidPhoneNumber}
                  label="Телефон"
                  placeholder="+380501234567"
                  value={phoneNumber}
                  onValueChange={setPhoneNumber}
                />

                <Input
                  isRequired
                  label="Повне ім'я"
                  value={fullName}
                  onValueChange={setFullName}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-transparent text-black  rounded-full   border-1 border-black"
                  variant="light"
                  onPress={onClose}
                >
                  Скасувати
                </Button>
                <Button
                  className="text-white rounded-full text-[18px]"
                  color="primary"
                  isDisabled={
                    isInvalidPhoneNumber ||
                    phoneNumber.length === 0 ||
                    fullName === undefined ||
                    fullName === ""
                  }
                  onPress={() => {
                    createOrdere();
                    onClose();
                  }}
                >
                  Замовити
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal
        isOpen={isOpenSuccessWindow}
        onOpenChange={(e: boolean) =>
          setIsOpenSuccessWindow(!isOpenSuccessWindow)
        }
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Тур замовлено
              </ModalHeader>
              <ModalBody>
                Все прошло вдало, чекайте поки ми з вами зв'яжемося.
              </ModalBody>
              <ModalFooter>
                <Button
                  className="text-white rounded-full"
                  color="primary"
                  onPress={() => {
                    onClose();
                  }}
                >
                  зрозуміло
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal
        isOpen={isOpenErrorWindow}
        onOpenChange={(e: boolean) =>
          setIsOpenErrorWindow(!isOpenSuccessWindow)
        }
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Error</ModalHeader>
              <ModalBody>{error}</ModalBody>
              <ModalFooter>
                <Button
                  className="text-white rounded-full"
                  color="primary"
                  onPress={() => {
                    onClose();
                  }}
                >
                  зрозуміло
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  ) : (
    <Button
      className="mt-5 text-black w-full text-center booking-button"
      color="default"
      isDisabled={true}
      variant="bordered"
    >
      Замовити тур
    </Button>
  );
};

export default BuyButtonActive;
