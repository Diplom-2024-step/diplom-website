// WorkWithUs.tsx
import React from 'react';
import {Button} from '@nextui-org/react';
import '../../assets/fonts-styles/font.css';

const WorkWithUs: React.FC = () => {
  return (
    <div className="bg-[#e1ebf1] my-8 py-10 text-center overflow-hidden">
      <h2 
        style={{fontFamily: 'Unbounded, sans-serif' }}
        className="text-3xl font-bold text-gray-800 mb-12">
            Працювати з нами - просто
      </h2>

      {/* Шаг 1 */}
      <div className="flex items-center justify-center bg-white space-x-20">
        <div className="w-1/3 bg-[#5DB3C1] flex items-center justify-end rounded-tr-[45px] rounded-br-[45px] py-4 pr-[5.5rem]">
            <span
                style={{
                    fontFamily: 'Unbounded, sans-serif',
                    color: '#5DB3C1',
                    textShadow: '0 0 0 white, 1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white' // Создание обводки
                }}
                className="font-bold text-4xl"
                >
            0 1
            </span>
        </div>
        <div className="w-2/3 bg-white py-4 flex items-center justify-start px-4">
            <p 
            style={{fontFamily: 'Nunito, sans-serif', fontWeight: 650}}
            className="text-gray-700 text-sm md:text-base">
                Зареєструйтесь або увійдіть у свій особистий кабінет
            </p>
        </div>
      </div>

      {/* Шаг 2 */}
      <div className="flex items-center justify-center py-2 space-x-20">
        <div className="w-1/3 flex items-center justify-end py-4 pr-[5rem]">
          <span
          style={{fontFamily: 'Unbounded, sans-serif' }}
          className="text-[#5DB3C1] font-bold text-4xl">0 2</span>
        </div>
        <div className="w-2/3 py-4 flex items-center justify-start px-4">  
            <p
            style={{fontFamily: 'Nunito, sans-serif', fontWeight: 650}}
            className="text-gray-700 text-sm md:text-base">
                Оберіть тур із запропонованих варіантів
            </p>
        </div>
      </div>

      {/* Шаг 3 */}
      <div className="flex items-center justify-center bg-white space-x-20">
        <div className="w-1/3 bg-[#5DB3C1] flex items-center justify-end rounded-tr-[45px] rounded-br-[45px] py-4 pr-[5rem]">
            <span
                style={{
                    fontFamily: 'Unbounded, sans-serif',
                    color: '#5DB3C1',
                    textShadow: '0 0 0 white, 1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white' // Создание обводки
                }}
                className="font-bold text-4xl"
                >
                0 3
            </span>
        </div>
        <div className="w-2/3 bg-white py-4 flex items-center justify-start px-4">
            <p
            style={{fontFamily: 'Nunito, sans-serif', fontWeight: 650}}
            className="text-gray-700 text-sm md:text-base">
                Укладіть договір з нашою агенцією
            </p>
        </div>
      </div>

      {/* Шаг 4 */}
      <div className="flex items-center justify-center py-2  space-x-20">
        <div className="w-1/3 flex items-center justify-end py-4 pr-[5rem]">
          <span
          style={{fontFamily: 'Unbounded, sans-serif' }}
          className="text-[#5DB3C1] font-bold text-4xl">0 4</span>
        </div>
        <div className="w-2/3 py-4 flex items-center justify-start px-4">
            <p
            style={{fontFamily: 'Nunito, sans-serif', fontWeight: 650}}
            className="text-gray-700 text-sm md:text-base">
                Внесіть оплату та очікуйте на свої документи
            </p>
        </div>
      </div>

      {/* Шаг 5 */}
      <div className="flex items-center justify-center bg-white space-x-20">
        <div className="w-1/3 bg-[#5DB3C1] flex items-center justify-end rounded-tr-[45px] rounded-br-[45px] py-4 pr-[5rem]">
            <span
                style={{
                    fontFamily: 'Unbounded, sans-serif',
                    color: '#5DB3C1',
                    textShadow: '0 0 0 white, 1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white' // Создание обводки
                }}
                className="font-bold text-4xl"
                >
                0 5
            </span>
        </div>
        <div className="w-2/3 bg-white py-4 flex items-center justify-start px-4">
            <p
            style={{fontFamily: 'Nunito, sans-serif', fontWeight: 650}}
            className="text-gray-700 text-sm md:text-base">
                Вирушайте у подорож та насолоджуйтесь відпочинком
            </p>
        </div>
      </div>

      <Button radius='full' size='md' className="mt-8 bg-[#5DB3C1] text-white px-10 transition-colors duration-200">
        Зв’яжіться з нами
      </Button>
      <p className="mt-2 text-[13px] text-[#0F171B]">Потрібна консультація?</p>
    </div>
  );
};

export default WorkWithUs;
