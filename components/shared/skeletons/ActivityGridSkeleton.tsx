import React from "react";

import ActivityCardSkeleton from "./ActivityCardSkeleton";

const ActivityGridSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(12)].map((activity, index) => (
        <ActivityCardSkeleton key={index} index={index} />
      ))}
    </div>
  );
};

export default ActivityGridSkeleton;
