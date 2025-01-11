"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// ImageLine Component
const ImageLine = ({
  currentIndex,
  setIndex,
  urls,
}: {
  currentIndex: number;
  setIndex: (value: number) => void;
  urls: string[];
}) => {
  const [itemsToShow, setItemsToShow] = useState(12);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(4);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(8);
      } else {
        setItemsToShow(12);
      }
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);

    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const startIndex = Math.max(currentIndex - Math.floor(itemsToShow / 3), 0);
  const endIndex = Math.min(startIndex + itemsToShow, urls.length);

  return (
    <motion.div
      layout
      className="flex flex-row overflow-x-auto scrollbar-hide px-4 md:px-0"
    >
      {urls.slice(startIndex, endIndex).map((url, index) => (
        <motion.div
          key={startIndex + index}
          animate={{ opacity: 1 }}
          className={`mr-2 last:mr-0 ${
            itemsToShow === 4 ? "w-1/4" : itemsToShow === 8 ? "w-1/8" : "w-1/12"
          } h-[60px] md:h-[80px] cursor-pointer flex items-center justify-center`}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          onClick={() => setIndex(startIndex + index)}
        >
          <motion.img
            alt="Gallery Image"
            className={`w-full max-h-[40px] md:max-h-[60px] object-cover rounded-md ${
              startIndex + index === currentIndex
                ? "ring-2 ring-offset-2 ring-primary ring-opacity-50 transform scale-110 brightness-110 hover:brightness-110"
                : "scale-95 brightness-50 contrast-125 hover:brightness-75"
            }`}
            src={url}
            style={{
              transition: "all 0.3s ease-in-out",
              filter:
                startIndex + index === currentIndex
                  ? "brightness(110%) contrast(125%)"
                  : "brightness(50%) contrast(125%)",
              transform:
                startIndex + index === currentIndex
                  ? "scale(1.1)"
                  : "scale(0.95)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ImageLine;
