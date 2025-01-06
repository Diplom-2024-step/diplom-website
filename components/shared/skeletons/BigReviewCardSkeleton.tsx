import React from 'react';
import { Skeleton } from '@nextui-org/react';

const BigReviewCardSkeleton = () => {
  return (
    <div className="animate-pulse w-full max-w-3xl bg-gray-200 rounded-3xl p-6">
      <div className="flex gap-4">
        {/* Avatar Skeleton */}
        <div className="flex-shrink-0">
          <Skeleton 
            className="w-16 h-16 rounded-full" 
          />
        </div>

        {/* Content Skeleton */}
        <div className="flex-1 space-y-4">
          {/* Header Skeleton */}
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <Skeleton className="w-32 h-6" />
              <Skeleton className="w-24 h-4" />
            </div>
            <Skeleton className="w-12 h-12" />
          </div>

          {/* Review Text Skeleton */}
          <Skeleton className="w-full h-20" />

          {/* Footer Skeleton */}
          <div className="flex justify-between items-center">
            <Skeleton className="w-40 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigReviewCardSkeleton;
