import { Card, Image, Skeleton } from "@nextui-org/react";
import { GetReviewDto } from '@/AppDtos/Dto/Models/Reviews/get-review-dto';

const ReviewCardSkeleton = () => {
  return (
    <Card className="p-4 rounded-lg h-80">
      {/* Фото пользователя */}
      <div className="flex items-center h-[15%]">
        <Skeleton
          className="w-12 h-12 bg-gray-300 rounded-full object-cover"
        />
        <div className="ml-4">
          <Skeleton className="h-5 w-20 rounded-lg mb-2" />
          <div className="flex mt-1">
            {[...Array(5)].map((_, index) => (
              <Skeleton
                key={index}
                className="w-5 h-5 text-yellow-400 fill-current"
                
              />
            ))}
          </div>
        </div>
      </div>

      {/* Текст отзыва */}
      <div className="h-[65%]">
        <Skeleton className="h-16 w-full rounded-lg mb-3" />
      </div>

      {/* Дата и иконки */}
      <div className="flex flex-col mt-4 text-gray-600 text-sm">
        <Skeleton className="h-4 w-full rounded-lg mb-2" />
      </div>
    </Card>
  );
};

export default ReviewCardSkeleton;
