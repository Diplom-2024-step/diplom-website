"use client"
import { Button, Spacer } from '@nextui-org/react';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

const page = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const email = searchParams.get('email'); // Получаем email параметров

    const handleButtonClick = () => {
        router.push(`/auth/login`);
    }

    return (
        <div className="flex justify-center items-center min-h-screen relative p-4 md:p-0">
            <div className="flex flex-col md:flex-row bg-white border-2 border-[#5DB3C1] rounded-[20px] shadow-lg p-4 md:p-4 mt-6">
                <div className="mt-5 w-full py-2 md:py-4 lg:py-5 px-4 md:px-8 lg:px-16 flex flex-col">
                    <h2
                        style={{ fontFamily: 'Unbounded, sans-serif' }}
                        className="text-center text-[#0F171B] text-1xl md:text-2xl mb-2 font-bold">
                        Підтвердьте свою електронну адресу
                    </h2>
                    <Spacer />
                    <p
                        style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 600 }}
                        className="text-center text-[#0F171B] mt-2 text-[14px]">
                        Якщо обліковий запис за адресою
                        <span className="font-bold"> "{email}" </span>
                        існує,<br />Вам буде надіслано електронний лист із подальшими<br />інструкціями.
                    </p>
                    <Spacer />
                    <div className="flex justify-center text-center mt-7 mb-1">
                        <Button onClick={handleButtonClick}
                            className="sm:w-1/2  rounded-full text-white bg-[#5DB3C1] font-light"
                            type="button">
                            До сторінки входу
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page