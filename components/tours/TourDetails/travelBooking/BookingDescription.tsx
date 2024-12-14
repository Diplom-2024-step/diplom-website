import React, { useEffect, useState } from "react";

const BookingDescription = () => {
  return (
    <>
      <div className=" rounded-lg m-12">
        <h2 className="text-[40px] font-bold text-gray-800 mb-6 text-center">
          Бронювання туру
        </h2>

        <div className="space-y-6">
          <div className="flex items-center">
            <div className="w-[10%] h-full">
              <div className="w-[60px] h-[60px] flex items-center justify-center bg-customGreen text-white font-bold rounded-full mr-[50px]">
                <span className="text-[30px]">1</span>
              </div>
            </div>
            <div className="w-[90%]">
              <h3 className="text-[17px] font-semibold text-gray-800">
                Вибір туру
              </h3>
              <p className="text-black text-[17px]">
                Знайдіть тур, який вам до вподоби. За бажанням можна переглянути
                різні варіанти готелів та активностей, доступних у рамках цього
                туру.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-[10%] h-full">
              <div className="w-[60px] h-[60px] flex items-center justify-center bg-customGreen text-white font-bold rounded-full mr-[50px]">
                <span className="text-[30px]">2</span>
              </div>
            </div>
            <div className="w-[90%]">
              <h3 className="text-[17px] font-semibold text-gray-800">
                Попереднє підтвердження
              </h3>
              <p className="text-black text-[17px]">
                Після вибору з вами зв'яжеться наш координатор, щоб уточнити
                деталі та підтвердити бронювання.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-[10%] h-full">
              <div className="w-[60px] h-[60px] flex items-center justify-center bg-customGreen text-white font-bold rounded-full mr-[50px]">
                <span className="text-[30px]">3</span>
              </div>
            </div>
            <div className="w-[90%]">
              <h3 className="text-[17px] font-semibold text-gray-800">
                Оплата
              </h3>
              <p className="text-black text-[17px]">
                Менеджер узгодить з вами найзручніший варіант оплати. Після
                завершення транзакції ви отримаєте повідомлення.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-[10%] h-full">
              <div className="w-[60px] h-[60px] flex items-center justify-center bg-customGreen text-white font-bold rounded-full mr-[50px]">
                <span className="text-[30px]">4</span>
              </div>
            </div>
            <div className="w-[90%]">
              <h3 className="text-[17px] font-semibold text-gray-800">
                Документи та інформація
              </h3>
              <p className="text-black text-[17px]">
                Усі деталі вашої подорожі – підтвердження бронювання, квитки та
                інша інформація – будуть доступні в особистому кабінеті або
                надіслані на вашу електронну адресу.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-[10%] h-full">
              <div className="w-[60px] h-[60px] flex items-center justify-center bg-customGreen text-white font-bold rounded-full mr-[50px]">
                <span className="text-[30px]">5</span>
              </div>
            </div>
            <div className="w-[90%]">
              <h3 className="text-[17px] font-semibold text-gray-800">
                Вирушайте у подорож та насолождуйтесь своєю відпусткою!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingDescription;
