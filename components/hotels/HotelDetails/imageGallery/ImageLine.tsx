"use client"

import { Image } from '@nextui-org/image'
import React from 'react'
import { motion } from 'framer-motion'

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
    <motion.div className='flex flex-row overflow-x-auto scrollbar-hide' layout>
      {urls.slice(startIndex, endIndex).map((url, index) => (
        <motion.div
          key={startIndex + index}
          onClick={() => setIndex(startIndex + index)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          exit={{ opacity: 0 }}
          className={`mr-2 last:mr-0 w-1/12 h-[80px] cursor-pointer flex items-center justify-center`}
        >
          <motion.img
            src={url}
            alt="Gallery Image"
            className={`w-full max-h-[60px] object-cover ${startIndex + index === currentIndex ? 'ring-2 ring-offset-2 ring-primary ring-opacity-50 transform scale-110 brightness-110 hover:brightness-110' : 'scale-95 brightness-50 contrast-125 hover:brightness-75'}`}
            style={{
              transition: 'all 0.3s ease-in-out',
              filter: startIndex + index === currentIndex ? 'brightness(110%) contrast(125%)' : 'brightness(50%) contrast(125%)',
              transform: startIndex + index === currentIndex ? 'scale(1.1)' : 'scale(0.95)',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ImageLine
