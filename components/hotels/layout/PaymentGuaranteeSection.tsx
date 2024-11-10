import { Card } from '@nextui-org/card';
//import { Icon } from "@iconify-icon/react";
import bgImage from '../../../assets/images/hotels/bg-triangle.png';
import React from 'react'
import Image from 'next/image';

const PaymentGuaranteeSection = () => {
    return (
    <div className="w-full  text-black p-8 mt-10"
  style={{
    backgroundImage: `url(${bgImage.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
    
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Payment Methods Section */}
        <Card className="bg-white p-6 rounded-lg shadow-sm text-black text-center">
          <h2 className="text-2xl font-bold mb-6">Способи оплати</h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 flex items-center justify-center">
              </div>
              <span>Банківський перевод ( Приват24 )</span>
            </div>

            <div className="flex items-center gap-4">
              {/* <Icon icon="ei:arrow-up" /> */}
              <span>Оплата карткою Visa MasterCard в офісі</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <img src="/api/placeholder/32/32" alt="Online payment icon" className="w-6 h-6" />
              </div>
              <span>Оплата карткою Visa MasterCard на сайті за захищеним посиланням</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <img src="/api/placeholder/32/32" alt="Cash payment icon" className="w-6 h-6" />
              </div>
              <span>Оплата готівкою в касі Expedia</span>
            </div>
          </div>
        </Card>

        {/* Guarantee Section */}
        <Card className="bg-white p-6 rounded-lg shadow-sm text-black text-center">
          <h2 className="text-2xl font-bold mb-6">Гарантія та повернення коштів</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                <img src="/api/placeholder/32/32" alt="Document icon" className="w-6 h-6" />
              </div>
              <p>Турагентство Expedia укладає офіційний договір, який гарантує його права в рамках законодавства України</p>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                <img src="/api/placeholder/32/32" alt="Money return icon" className="w-6 h-6" />
              </div>
              <p>Повернення коштів здійснюється в кожному випадку передбаченим законодавством України та договором з турагентством Expedia</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default PaymentGuaranteeSection