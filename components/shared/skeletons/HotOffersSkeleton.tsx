import { Card, CardFooter, CardHeader, Skeleton } from "@nextui-org/react";

const HotOffersSkeleton = () => {
  return (
    <div className="flex flex-col items-center w-full h-full mt-10 mb-10">
       <p className="text-[43px] font-bold mb-[65px] text-customBlack">
        Гарячі пропозиції
      </p>
      
      <div className="flex w-4/7 h-full">
        {/* Large Card Skeleton */}
        <Card className="flex flex-col justify-between min-h-[520px] min-w-[398px] bg-gray-100">
          <CardHeader className="absolute z-10 top-1 flex-col !items-end">
            <Skeleton className="h-8 w-40 rounded-xl" />
          </CardHeader>
          <CardFooter className="absolute bottom-3 z-10 w-full">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <div className="flex items-center justify-center text-center">
                  <Skeleton className="h-8 w-24 mr-4" />
                  <Skeleton className="h-8 w-8 rounded-full" />
                </div>
                <Skeleton className="h-4 w-20 mt-2" />
              </div>
            </div>
            <Skeleton className="absolute top-4 right-4 w-12 h-12 rounded-full" />
          </CardFooter>
        </Card>

        {/* Right Side Cards Container */}
        <div className="flex flex-col h-full w-3/5 ml-[60px]">
          <div className="flex justify-between">
            {/* First Small Card Skeleton */}
            <Card className="flex flex-col justify-between min-h-[240px] min-w-[280px] mr-[35px] bg-gray-100">
              <CardHeader className="flex absolute z-10 top-1 justify-between !items-end">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-8 w-40 rounded-xl" />
              </CardHeader>
              <CardFooter className="absolute bottom-3 z-10 w-full">
                <div className="flex flex-grow gap-2 items-center">
                  <div className="flex flex-col">
                    <Skeleton className="h-8 w-24" />
                    <Skeleton className="h-4 w-20 mt-2" />
                  </div>
                </div>
                <Skeleton className="absolute top-4 right-4 w-12 h-12 rounded-full" />
              </CardFooter>
            </Card>

            {/* Second Small Card Skeleton */}
            <Card className="flex flex-col justify-between min-h-[240px] min-w-[280px] bg-gray-100">
              <CardHeader className="flex absolute z-10 top-1 justify-between !items-end">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-8 w-40 rounded-xl" />
              </CardHeader>
              <CardFooter className="absolute bottom-3 z-10 w-full">
                <div className="flex flex-grow gap-2 items-center">
                  <div className="flex flex-col">
                    <Skeleton className="h-8 w-24" />
                    <Skeleton className="h-4 w-20 mt-2" />
                  </div>
                </div>
                <Skeleton className="absolute top-4 right-4 w-12 h-12 rounded-full" />
              </CardFooter>
            </Card>
          </div>
          
          {/* Bottom Long Card Skeleton */}
          <div>
            <Card className="flex flex-col justify-between min-h-[240px] w-full mt-[40px] bg-gray-100">
              <CardHeader className="flex absolute z-10 top-1 justify-between !items-end">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-8 w-40 rounded-xl" />
              </CardHeader>
              <CardFooter className="absolute bottom-3 z-10 w-full">
                <div className="flex flex-grow gap-2 items-center">
                  <div className="flex flex-col">
                    <Skeleton className="h-8 w-24" />
                    <Skeleton className="h-4 w-20 mt-2" />
                  </div>
                </div>
                <Skeleton className="absolute top-4 right-4 w-12 h-12 rounded-full" />
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      {/* More Button Skeleton */}
      <Skeleton className="h-10 w-48 mt-[60px] mb-[60px] rounded-full" />
    </div>
  );
};

export default HotOffersSkeleton;