import { GetReviewOnCompanyDto } from '@/AppDtos/Dto/Models/ReviewOnCompanies/get-review-on-company-dto'
import Image from 'next/image';
import { getIconAccordingToIconNumber } from '@/lib/utils';
import { Card, CardBody } from '@nextui-org/card';
import { Star } from 'lucide-react';
import React from 'react'

const BigReviewCard = (
    {
        review
    }
    :
    {
        review: GetReviewOnCompanyDto
    }) => {
 const renderStars = (count: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < count ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <Card className="w-full max-w-3xl bg-[#99D8DE] rounded-3xl">
      <CardBody className="p-6">
        <div className="flex gap-4">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-orange-300 flex items-center justify-center overflow-hidden">
                    <Image
                        src={getIconAccordingToIconNumber(review.user.iconNumber.toString()).src}
                        alt={`${review.id}`}
                        height={64}
                        width={64}
                        className="w-16 h-16 bg-white rounded-full object-cover"
                    />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-1">{review.user.userName}</h3>
                <div className="flex gap-1">
                  {renderStars(review.score)}
                </div>
              </div>
              <div className="text-6xl -rotate-45 text-white ">☺</div>
            </div>

            {/* Review text */}
            <p className="text-gray-700 mb-6 text-sm">{review.body}</p>

            {/* Footer */}
            <div className="flex justify-between items-center mt-4">
              <div className="text-sm text-gray-500">
                {new Date().toLocaleTimeString('uk-UA', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
                <br />
                {new Date().toLocaleDateString('uk-UA', { 
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">👍</span>
                  <span>12</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-600">👎</span>
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default BigReviewCard