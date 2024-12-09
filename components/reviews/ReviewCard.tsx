import { GetReviewDto } from '@/AppDtos/Dto/Models/Reviews/get-review-dto'
import Image from 'next/image';
import photo4 from "../../assets/images/reviews/character4.png";
import React from 'react'

const ReviewCard = ({
    review
} : {
    review:GetReviewDto
}) => {
    return (
        <div className="p-4 bg-customAqua rounded-lg">
            {/* Фото пользователя */}
            <div className="flex items-center h-[15%]">
                <Image
                    src={photo4.src}
                    alt={`${review.id}`}
                    className="w-12 h-12 bg-yellow-100 rounded-full object-cover"
                />
                <div className="ml-4">
                    <p className="font-semibold text-black">User name</p>
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
            <div className="h-[65%]">
                <p className="text-gray-700 mt-4 line-clamp-3">{review.body}</p>
            </div>

            {/* Дата и иконки */}
            <div className="flex flex-col mt-4 text-gray-600 text-sm">
                <p>{review.createdAt.toString()}</p>
            </div>
        </div>
    )
}

export default ReviewCard