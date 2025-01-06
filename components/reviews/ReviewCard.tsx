import { GetReviewDto } from '@/AppDtos/Dto/Models/Reviews/get-review-dto'
import Image from 'next/image';
import photo4 from "../../assets/images/reviews/character4.png";
import React, { useState } from 'react'
import { Card } from '@nextui-org/card';
import { format } from 'date-fns';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import { getIconAccordingToIconNumber } from '@/lib/utils';

const ReviewCard = ({
    review
}: {
    review: GetReviewDto
}) => {

    const {isOpen, onOpen, onClose} = useDisclosure();


    const formatDate = (dateString: string): string => {
        // Parse the ISO string into a Date object
        const date = new Date(dateString);

        // Format the date using date-fns library with Ukrainian localization
        return format(date, "HH:mm dd MMM yyyy");
    };


    return (

        <>
            <Card className="p-4 bg-customAqua rounded-lg h-80"
                isHoverable
                isPressable
                onClick={() => onOpen()}
            >
                {/* Фото пользователя */}
                <div className="flex items-center h-[15%]">
                    <Image
                        src={getIconAccordingToIconNumber(review.user.iconNumber.toString()).src}
                        alt={`${review.id}`}
                        width={48}
                        height={48}
                        className="w-12 h-12 bg-white rounded-full object-cover"
                    />
                    <div className="ml-4">
                        <p className="font-semibold text-black">{review.user.userName}</p>
                        <div className="flex mt-1">
                            {[...Array(review.score)].map((i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            ))}
                            {
                                [...Array(5 - review.score)].map((i) => (
                                    <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" opacity="0.5" />
                                    </svg>
                                )
                                )}
                        </div>
                    </div>
                </div>

                {/* Текст отзыва */}
                <div className="h-[65%] text-center font-nunito_font_family font-[500]">
                    <p className="text-gray-700 mt-4 line-clamp-[7]">{review.body}</p>
                </div>

                {/* Дата и иконки */}
                <div className="flex flex-col mt-4 text-gray-600 text-sm">
                    <p>{formatDate(review.createdAt.toString())}</p>
                </div>
            </Card>
                  <Modal backdrop={"transparent"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex  gap-1">   <Image
                        src={getIconAccordingToIconNumber(review.user.iconNumber.toString())}
                        alt={`${review.id}`}
                        width={64}
                        height={64}
                        className="w-16 h-16 bg-white rounded-full object-cover"
                    />
                                           <div className="ml-4">
                        <p className="font-semibold text-black">{review.user.userName}</p>
                        <div className="flex mt-1">
                            {[...Array(review.score)].map((i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            ))}
                            {
                                [...Array(5 - review.score)].map((i) => (
                                    <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" opacity="0.5" />
                                    </svg>
                                )
                                )}
                        </div>
                    </div>
                </ModalHeader>
              <ModalBody>
              <div className="text-left font-nunito_font_family font-[500]">
                    <p className="text-gray-700  ">{review.body}</p>
                </div>
              </ModalBody>
              <ModalFooter>
                    <Button variant="light" className='bg-transparent text-black  rounded-full   border-1 border-black' onPress={onClose}>
                  Закрити
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
        </>
    );

}

export default ReviewCard