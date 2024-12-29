import { Card, CardBody, Skeleton } from "@nextui-org/react";

const TravelCardSkeleton = () => {
  return (
    <Card className="w-full max-w-7xl mx-auto mb-8 rounded-[40px] overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Image skeleton */}
        <div className="w-full md:w-2/4 relative">
          <Skeleton className="rounded-[10px] rounded-tl-none">
            <div className="h-48 md:h-64"></div>
          </Skeleton>
        </div>

        {/* Content skeleton */}
        <div className="w-full md:w-2/3 flex flex-col rounded-bl-[20px] p-4">
          {/* Header and price */}
          <div className="flex justify-between items-center mb-2">
            <Skeleton className="w-2/4 h-6 rounded-lg" />
            <div className="w-1/4 flex flex-col items-end gap-1">
              <Skeleton className="w-16 h-4 rounded-lg" />
              <Skeleton className="w-24 h-5 rounded-lg" />
            </div>
          </div>

          {/* Stars and location */}
          <div className="flex items-center gap-4 my-2">
            <Skeleton className="w-32 h-5 rounded-lg" />
            <Skeleton className="w-40 h-5 rounded-lg" />
          </div>

          {/* Tourist info boxes */}
          <div className="flex flex-col gap-3 mt-3">
            {/* Tourists */}
            <div className="flex justify-between bg-[#EBEFF2] rounded-tr-[10px] rounded-br-[10px]">
              <Skeleton className="w-2/4 h-12 rounded-lg" />
              <Skeleton className="w-2/4 h-12 rounded-lg ml-2" />
            </div>

            {/* Dates */}
            <div className="flex justify-between bg-[#EBEFF2] rounded-tr-[10px] rounded-br-[10px]">
              <Skeleton className="w-1/2 h-16 rounded-lg" />
              <Skeleton className="w-1/2 h-16 rounded-lg ml-2" />
            </div>

            {/* Room and meals */}
            <div className="flex justify-between bg-[#EBEFF2] rounded-tr-[10px] rounded-br-[10px]">
              <Skeleton className="w-1/2 h-16 rounded-lg" />
              <Skeleton className="w-1/2 h-16 rounded-lg ml-2" />
            </div>
          </div>
        </div>
      </div>

      <CardBody>
        <div className="flex justify-between items-center mx-5 mb-5">
          {/* Activities skeleton */}
          <div className="w-1/2 mt-1">
            <Skeleton className="w-48 h-6 mb-3 rounded-lg" />
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="w-16 h-16 rounded-lg" />
              ))}
            </div>
          </div>

          {/* Progress skeleton */}
          <div className="w-1/2 pl-5 mt-4 pt-4">
            <Skeleton className="w-full h-2 rounded-lg" />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default TravelCardSkeleton;