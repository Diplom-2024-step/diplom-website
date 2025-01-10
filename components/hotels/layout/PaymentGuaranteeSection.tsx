import { Card } from '@nextui-org/card';
//import { Icon } from "@iconify-icon/react";
import bgImage from '../../../assets/images/hotels/bg-triangle.webp';
import React from 'react'

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
      <div className="max-w-6xl mx-auto text-xl grid md:grid-cols-2 gap-8">
        {/* Payment Methods Section */}
        <Card className="bg-white text-black p-8 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold mb-8 text-center">Способи оплати</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 flex-shrink-0 mt-1 text-primary">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </div>
              <span className="text-lg">Банківський перевод ( Приват24 )</span>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 flex-shrink-0 mt-1 text-primary">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </div>
              <span className="text-lg">Оплата карткою Visa MasterCard в офісі</span>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 flex-shrink-0 mt-1 text-primary">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <path d="M7 15h10M7 11h4" />
                </svg>
              </div>
              <span className="text-lg">Оплата карткою Visa MasterCard на сайті за захищеним посиланням</span>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 flex-shrink-0 mt-1 text-primary">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-lg">Оплата готівкою в касі Expedia</span>
            </div>
          </div>
        </Card>

        {/* Guarantee Section */}
        <Card className="bg-white p-8 rounded-lg shadow-sm text-black">
          <h2 className="text-3xl font-bold mb-8 text-center">Гарантія та повернення коштів</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 flex-shrink-0 mt-1 text-primary">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-lg">Турагентство Expedia укладає офіційний договір, який гарантує його права в рамках законодавства України</span>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 flex-shrink-0 mt-1 text-primary">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                </svg>
              </div>
              <span className="text-lg">Повернення коштів здійснюється в кожному випадку передбаченим законодавством України та договором з турагентством Expedia</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default PaymentGuaranteeSection