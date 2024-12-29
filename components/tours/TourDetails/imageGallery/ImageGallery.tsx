"use client"
import React, { useState } from 'react';
import ImageLine from './ImageLine';
import { Image } from '@nextui-org/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ImageGallery = ({ urls }: { urls: string[] }) => {
    const [index, setIndex] = useState(0);

    const handlePrevClick = () => {
        setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : urls.length-1));
    };

    const handleNextClick = () => {
        setIndex((prevIndex) =>
            (prevIndex < urls.length - 1 ? prevIndex + 1 : 0)
        );
    };

    return (
        <div className="flex-col items-center mb-5 relative">
            <div className="absolute top-1/2 -left-10 z-10 transform -translate-y-1/2">
                <button onClick={handlePrevClick} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200">
                    <ArrowLeft size={24} color="#333" />
                </button>
            </div>

            <div className="mb-5 w-full flex-grow flex items-center justify-center">
                <div className="w-full p-5 flex-col rounded-tl-md rounded-tr-md flex justify-around overflow-hidden mr-auto mt-10 text-black bg-white shadow-md">
                    <div className="h-[800px] w-full flex items-center justify-center">
                        <Image src={urls[index]} className="h-max-[800px] w-full object-cover" />
                    </div>
                </div>
            </div>

            <div className="absolute top-1/2 -right-10 z-10 transform -translate-y-1/2">
                <button onClick={handleNextClick} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200">
                    <ArrowRight size={24} color="#333" />
                </button>
            </div>

            <ImageLine
                currentIndex={index}
                setIndex={setIndex}
                urls={urls}
            />
        </div>
    );
};

export default ImageGallery;
