"use client"
import { Icon } from '@iconify/react';
import { Tooltip } from '@nextui-org/react';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

const DeleteAllFiltersButton = () => {
    const pathname = usePathname();
    const router = useRouter();

    const handleClearParams = () => {
    router.push(pathname);
  };

  return (
  <Tooltip content="Відмінити всі фільтри" delay={0} closeDelay={0}>
  <div 
    className='group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer'
    onClick={handleClearParams}
  >
    <Icon 
      icon="mdi:flame" 
      className='text-primary text-4xl group-hover:text-[#ff8c00] transition-colors duration-300 ease-in-out'
    />
  </div>
</Tooltip>

  )

}

export default DeleteAllFiltersButton