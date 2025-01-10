"use client"
import NumberInput from '@/components/shared/sharedComponents/NumberInput'
import { Icon } from '@iconify/react'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React, { useState } from 'react'

const ChoosingHowManyPeopleButton = (
    {
        adults,
        children,
        setAdluts,
        setChildren
    }:
        {

            adults: number,
            children: number,
            setAdluts: (value: number) => void,
            setChildren: (value: number) => void
        }

) => {

    const [isOpen, setIsOpen] = useState(false);
    const [innerAdults, setInnerAdults] = useState(adults)
    const [innerChildren, setInnerChildren] = useState(children)


    const OpenChange = (value: boolean) => {
        setAdluts(innerAdults);
        setChildren(innerChildren);
        setIsOpen(value)

    }


    return (
        <>
            <div className='w-full
               h-full flex items-center justify-center relative
               cursor-pointer
               hover:bg-gray-100
              '
                onClick={() => setIsOpen(true)}
            >

                <div className='absolute w-[2px] bg-gray-400 h-full top-0 bottom-0 left-0 z-10 booking-chose-button-left-border'></div>
                <Icon
                    icon="weui:arrow-outlined"
                    className='z-20 rotate-90 text-4xl text-black'
                />
            </div>

            <Modal isOpen={isOpen} onOpenChange={OpenChange} isKeyboardDismissDisabled={true} size='sm'>
                <ModalContent className='bg-white text-black'>
                    {(onClose) => (
                        <>
                            <ModalHeader className='flex flex-col items-center gap-1'>
                                <span>Туристи</span>
                            </ModalHeader>
                            <ModalBody>
                                <div className='flex flex-col items-center justify-center w-full'>
                                    <NumberInput
                                        setValue={setInnerAdults}
                                        value={innerAdults}
                                        helperText=''
                                        label='Кількість дорослих:'
                                        max={6}
                                        min={1}

                                    />
                                    <NumberInput
                                        setValue={setInnerChildren}
                                        value={innerChildren}
                                        helperText=''
                                        label='Кількість дітей:'
                                        max={6}
                                        min={0}

                                    />
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button variant="light" className='bg-transparent text-black  rounded-full   border-1 border-black' onPress={onClose}>
                                    Скасувати
                                </Button>
                                <Button color="primary" className='text-white rounded-full' onPress={onClose}>
                                    Застосувати
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default ChoosingHowManyPeopleButton;