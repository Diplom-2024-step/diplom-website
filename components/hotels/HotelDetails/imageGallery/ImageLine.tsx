"use client"

import { Image } from '@nextui-org/image'
import React from 'react'

const ImageLine = ({
  currentIndex,
  setIndex,
  urls
}: {
  currentIndex: number,
  setIndex: (value: number) => void,
  urls: string[]
}) => {
  const startIndex = Math.max(currentIndex - 5, 0)
  const endIndex = Math.min(startIndex + 12, urls.length)

  return (
    <div className='flex flex-row overflow-x-auto scrollbar-hide'>
      {urls.slice(startIndex, endIndex).map((url, index) => (
        <div
          key={startIndex + index}
          onClick={() => setIndex(startIndex + index)}
          className={`mr-2 last:mr-0 w-1/12 h-[80px] cursor-pointer flex items-center justify-center `}
        >
          <Image
            className={`w-full max-h-[60px] object-cover ${startIndex + index === currentIndex ? 'ring-2 ring-offset-2 ring-primary ring-opacity-50 transform scale-110' : 'scale-95'}`}
            src={url}
          />
        </div>
      ))}
    </div>
  )
}

export default ImageLine
