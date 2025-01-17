import React from "react";

const BookingDescription = () => {
  return (
    <>
      <div className=" rounded-lg mt-[60px] mb-[60px] lg:m-[50px]">
        <h2 className="font-unbounded text-3xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
          Бронювання туру
        </h2>

        <div className="space-y-6">
          <div className="flex lg:items-center">
            <div className="lg:w-[10%] w-[22%] h-full">
              <div className="w-[70px] h-[70px] flex items-center justify-center bg-customGreen text-white font-bold rounded-full mr-[50px]">
                <span className="font-unbounded text-[40px]">1</span>
              </div>
            </div>
            <div className="lg:w-[90%] w-[78%]">
              <h3 className="lg:text-[26px] text-[20px] font-semibold text-gray-800">
                Вибір туру
              </h3>
              <p className="font-nunito_font_family text-black lg:text-[23px] text-[16px]">
                Знайдіть тур, який вам до вподоби. За бажанням можна переглянути
                різні варіанти готелів та активностей, доступних у рамках цього
                туру.
              </p>
            </div>
          </div>

          <div className="flex lg:items-center">
            <div className="lg:w-[10%] w-[22%] h-full">
              <div className="w-[70px] h-[70px] flex items-center justify-center bg-customGreen text-white font-bold rounded-full mr-[50px]">
                <span className="font-unbounded text-[40px]">2</span>
              </div>
            </div>
            <div className="lg:w-[90%] w-[78%]">
              <h3 className="lg:text-[26px] font-nunito_font_family text-[20px] font-semibold text-gray-800">
                Попереднє підтвердження
              </h3>
              <p className="font-nunito_font_family text-black lg:text-[23px] text-[16px]">
                Після вибору з вами зв'яжеться наш координатор, щоб уточнити
                деталі та підтвердити бронювання.
              </p>
            </div>
          </div>

          <div className="flex lg:items-center">
            <div className="lg:w-[10%] w-[22%] h-full">
              <div className="w-[70px] h-[70px] flex items-center justify-center bg-customGreen text-white font-bold rounded-full mr-[50px]">
                <span className="font-unbounded text-[40px]">3</span>
              </div>
            </div>
            <div className="lg:w-[90%] w-[78%]">
              <h3 className="lg:text-[26px] font-nunito_font_family text-[20px] font-semibold text-gray-800">
                Оплата
              </h3>
              <p className="font-nunito_font_family text-black lg:text-[23px] text-[16px]">
                Менеджер узгодить з вами найзручніший варіант оплати. Після
                завершення транзакції ви отримаєте повідомлення.
              </p>
            </div>
          </div>

          <div className="flex lg:items-center">
            <div className="lg:w-[10%] w-[22%] h-full">
              <div className="w-[70px] h-[70px] flex items-center justify-center bg-customGreen text-white font-bold rounded-full mr-[50px]">
                <span className="font-unbounded text-[40px]">4</span>
              </div>
            </div>
            <div className="lg:w-[90%] w-[78%]">
              <h3 className="lg:text-[26px] font-nunito_font_family text-[20px] font-semibold text-gray-800">
                Документи та інформація
              </h3>
              <p className="font-nunito_font_family text-black lg:text-[23px] text-[16px]">
                Усі деталі вашої подорожі – підтвердження бронювання, квитки та
                інша інформація – будуть доступні в особистому кабінеті або
                надіслані на вашу електронну адресу.
              </p>
            </div>
          </div>

          <div className="flex lg:items-center">
            <div className="lg:w-[10%] w-[22%] h-full">
              <div className="w-[70px] h-[70px] flex items-center justify-center bg-customGreen text-white font-bold rounded-full mr-[50px]">
                <span className="font-unbounded text-[40px]">5</span>
              </div>
            </div>
            <div className="lg:w-[90%] w-[78%]">
              <h3 className="lg:text-[26px] font-nunito_font_family text-[20px] font-semibold text-gray-800">
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
