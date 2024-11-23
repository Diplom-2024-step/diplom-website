import React from 'react';
import { Card } from '@nextui-org/card';

const ActivityCardSkeleton = ({ index }: { index: number }) => {
  return (
    <Card className="h-[300px] relative overflow-hidden">
      {/* Background shimmer */}
      <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
      
      {/* Header container with shimmer effect */}
      <div className={`
        absolute z-10 w-full p-4 flex justify-between items-center
        ${index % 2 !== 0 ? "bottom-0" : 'top-0'}
      `}>
        {/* Title placeholder */}
        <div className="h-9 w-40 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-lg animate-pulse" />
        
        {/* Icon placeholder */}
        <div className="h-8 w-8 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-full animate-pulse" />
      </div>
    </Card>
  );
};

export default ActivityCardSkeleton;