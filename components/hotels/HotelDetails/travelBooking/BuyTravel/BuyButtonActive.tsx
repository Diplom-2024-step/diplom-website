import { GetDietTypeDto } from '@/AppDtos/Dto/Models/DietTypes/get-diet-type-dto'
import { GetCityDto } from '@/AppDtos/Dto/Models/Hotels/get-city-dto'
import { CreateOrderDto } from '@/AppDtos/Dto/Models/Orders/create-order-dto'
import { GetRoomTypeDto } from '@/AppDtos/Dto/Models/RoomTypes/get-room-type-dto'
import { GetTransportationTypeDto } from '@/AppDtos/Dto/Models/TransportationTypes/get-transportation-type-dto'
import { useTravelBookingContext } from '@/components/providers/TravelBookingProvider'
import { OrderService } from '@/service/crudServices/OrderService'
import { Button, DateValue, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, RangeValue, useDisclosure } from '@nextui-org/react'
import { differenceInDays } from 'date-fns'
import React, { useState } from 'react'

const BuyButtonActive = (
  {
    transporationType,
    city,
  }
    :
    {
      transporationType?: GetTransportationTypeDto,
      city?: GetCityDto,
    }
) => {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [phoneNumber, setPhoneNumber] = useState("");

  const [fullName, setFullName] = useState("");

  const { adults, kids, dietType, roomType,  transportationType, date, activities, hotel  } = useTravelBookingContext();


  const validatePhoneNumber = (value: string) => value.match(/^\+380\d{2}\d{3}\d{2}\d{2}$/);

  const isInvalidPhoneNumber = React.useMemo(() => {
    if (phoneNumber === "") return false;

    return validatePhoneNumber(phoneNumber) ? false : true;
  }, [phoneNumber]);


  const createOrdere = async () => {

    const service = new OrderService();

    const cityId:string = city?.id!; 


    const order:CreateOrderDto = {
        dietTypeId: dietType!.id,
        fromCityId: cityId,
        duration: differenceInDays(date.end.toString(), date.start.toString()),
        endDate: date.end.toDate("s"),
        fullName: fullName,
        howManyAdults: adults,
        howManyKids: kids,
        mobilePhoneNumber: phoneNumber,
        orderStatus: "Очікування",
        priceUSD: 132,
        roomTypeId: roomType!.id,
        startDate: date.start.toDate(),
        toCityId: hotel?.city.id!,


    }


    service.create(
      {
       

      }
    );


  }


  return (
    (city !== undefined && transporationType !== undefined) ?
      <>
        <Button className='mt-5 text-white w-full text-center' color='primary' radius='full' onClick={onOpen} >
          Замовити тур
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Замовити тур</ModalHeader>
                <ModalBody>
                  <Input
                    isRequired
                    onValueChange={setPhoneNumber}
                    value={phoneNumber}
                    isInvalid={isInvalidPhoneNumber}
                    color={isInvalidPhoneNumber ? "danger" : "default"}
                    errorMessage="Введіть дійсний номер телефону"
                    label="Телефон"
                  />

                  <Input
                    isRequired
                    onValueChange={setFullName}
                    value={fullName}
                    label="Повне ім'я"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button  variant="light" className='bg-transparent text-black  rounded-full   border-1 border-black' onPress={onClose}>
                    Скасувати
                  </Button>
                  <Button color="primary" className='text-white rounded-full' onPress={onClose}>
                    Замовити
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
      :
      <Button className='mt-5 text-black w-full text-center' isDisabled={true} color='default' variant='bordered'>
        Замовити тур
      </Button>
  )
}

export default BuyButtonActive