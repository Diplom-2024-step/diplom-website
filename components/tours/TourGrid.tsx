"use client";
import React, { useState } from "react";

import { GetTourDto } from "@/AppDtos/Dto/Models/Tours/get-tour-dto";

import TourCard from "./TourCard";

const TourGrid = ({ tours }: { tours: GetTourDto[] }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours?.map((tour, index) => (
          <TourCard
            key={index}
            cardItem={tour}
            isHovered={hoveredId === index}
            onHover={() => setHoveredId(index)}
            onLeave={() => setHoveredId(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default TourGrid;
