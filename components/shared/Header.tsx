"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import image1 from "../../assets/images/block-1/image-1.webp";
import image2 from "../../assets/images/block-1/image-2.webp";
import image3 from "../../assets/images/block-1/image-3.webp";
import image4 from "../../assets/images/block-1/image-4.webp";
import image5 from "../../assets/images/block-1/image-5.webp";
import image6 from "../../assets/images/block-1/image-6.webp";
import image7 from "../../assets/images/block-1/image-7.webp";
import image8 from "../../assets/images/block-1/image-8.webp";
import image9 from "../../assets/images/block-1/image-9.webp";
import image10 from "../../assets/images/block-1/image-10.webp";
import FindTourCard from "../tours/FindTourCard";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

const Header = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);

  const FromOptions = [
    {
      value: "usa-newyork",
      label: "USA - New York",
      image: "https://flagcdn.com/w80/us.png",
    },
    {
      value: "usa-losangeles",
      label: "USA - Los Angeles",
      image: "https://flagcdn.com/w80/us.png",
    },
    {
      value: "canada-toronto",
      label: "Canada - Toronto",
      image: "https://flagcdn.com/w80/ca.png",
    },
    {
      value: "canada-vancouver",
      label: "Canada - Vancouver",
      image: "https://flagcdn.com/w80/ca.png",
    },
  ];

  const ToOptions = [
    {
      value: "usa-newyork",
      label: "USA - New York",
      image: "https://flagcdn.com/w80/us.png",
    },
    {
      value: "usa-losangeles",
      label: "USA - Los Angeles",
      image: "https://flagcdn.com/w80/us.png",
    },
    {
      value: "canada-toronto",
      label: "Canada - Toronto",
      image: "https://flagcdn.com/w80/ca.png",
    },
    {
      value: "canada-vancouver",
      label: "Canada - Vancouver",
      image: "https://flagcdn.com/w80/ca.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Меняем картинку каждые 3 секунды

    return () => clearInterval(interval);
  }, []);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (type: "adults" | "children", value: number) => {
    if (type === "adults") {
      setAdults(value);
    } else if (type === "children") {
      setChildren(value);
    }
  };

  const handleSave = () => {
    toggleModal(); // Закрыть модальное окно
    // добавить логику для сохранения или использования значений adults и children
  };

  return (
    <div className="relative h-[660px] overflow-hidden">
      {images.map((img, index) => (
        <Image
          key={index}
          alt={`slider ${index}`}
          className={`absolute transition-opacity duration-700 ${index === currentImage ? "opacity-100" : "opacity-0"}`}
          layout="fill"
          objectFit="cover"
          src={img.src}
        />
      ))}

      <div className="relative flex flex-col items-center justify-center  h-full w-full px-4 md:px-8 lg:px-12">
        <FindTourCard />
      </div>
    </div>
  );
};

export default Header;
