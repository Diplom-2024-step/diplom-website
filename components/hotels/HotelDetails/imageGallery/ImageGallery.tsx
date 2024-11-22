"use client"
import { Image } from '@nextui-org/image'
import React, { useState } from 'react'
import ImageLine from './ImageLine'

const ImageGallery = ({ urls }: { urls: string[] }) => {
    const [index, setIndex] = useState(0)

    const handlePrevClick = () => {
        setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex))
    }

    const handleNextClick = () => {
        setIndex((prevIndex) =>
            (prevIndex < urls.length - 1 ? prevIndex + 1 : prevIndex)
        )
    }

    return (
        <div className="flex-col items-center mb-5">
            <div className="mb-5 w-full flex-grow flex items-center justify-center">
                <div className="w-full p-5 flex-col rounded-tl-md rounded-tr-md flex justify-around overflow-hidden mr-auto mt-10 text-black bg-white shadow-md">
                    <div className="h-[800px] w-full flex items-center justify-center">
                        <Image src={urls[index]} className="h-max-[800px] w-full object-cover" />
                    </div>
                </div>
            </div>
                <ImageLine
                    currentIndex={index}
                    setIndex={setIndex}
                    urls={urls}
                />
        </div>
    )
}

export default ImageGallery
