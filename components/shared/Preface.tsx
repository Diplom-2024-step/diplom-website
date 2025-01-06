import React from "react";

const Preface = () => {
  return (
    <div className="flex flex-col py-16 px-6 lg:px-20 text-center justify-center items-center">
      <div className="w-full max-w-[650px]">
        {/* Заголовок */}
        <h2 className="font-unbounded lg:text-[50px] text-[26px] font-bold text-gray-900 mb-4 leading-tight">
          Ми віримо, що подорожі — це сила добра
        </h2>
        {/* Описание */}
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Коли ми більше подорожуємо, ми відкриваємо більше можливостей для
          зміцнення зв’язків, розширення кругозору та подолання розбіжностей.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Наша місія полягає в тому, щоб подорожувати по всьому світу для всіх і
          всюди.
        </p>
      </div>
    </div>
  );
};

export default Preface;
