import { Card, CardBody, CardFooter, Skeleton } from "@nextui-org/react";
import React from 'react';

const HotelCardSkeleton = () => {
  return (
    <Card
      className="relative overflow-hidden"
      shadow="none"
    >
      {/* Image skeleton */}
      <Skeleton className="rounded-none">
        <div className="h-48 w-full" />
      </Skeleton>
      
      <CardBody className="p-4 bg-white">
        {/* Hotel name skeleton */}
        <Skeleton className="rounded-lg">
          <div className="h-6 w-3/4" />
        </Skeleton>
        
        {/* Location skeleton */}
        <div className="flex items-center gap-2 mt-4 mb-4">
          <Skeleton className="rounded-full">
            <div className="w-4 h-4" />
          </Skeleton>
          <Skeleton className="rounded-lg">
            <div className="h-4 w-40" />
          </Skeleton>
        </div>
        
        {/* Stars skeleton */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="rounded-full">
              <div className="w-4 h-4" />
            </Skeleton>
          ))}
          <Skeleton className="rounded-lg ml-2">
            <div className="w-12 h-4" />
          </Skeleton>
        </div>
      </CardBody>
      
      <CardFooter className="flex items-center justify-between p-4 border-t bg-white">
        {/* Price skeleton */}
        <div className="flex items-center gap-1">
          <Skeleton className="rounded-lg">
            <div className="h-6 w-24" />
          </Skeleton>
        </div>
        {/* Arrow skeleton */}
        <Skeleton className="rounded-lg">
          <div className="w-5 h-5" />
        </Skeleton>
      </CardFooter>
    </Card>
  );
};

export default HotelCardSkeleton;