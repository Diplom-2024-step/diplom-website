import { Icon } from '@iconify/react'
import avatar1 from '@/assets/images/profile/avatar.png'
import avatar2 from '@/assets/images/profile/avatar2.png'
import avatar3 from '@/assets/images/profile/avatar3.png'
import avatar4 from '@/assets/images/profile/avatar4.png'
import { Image, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import React from 'react'

const ChooseAvatar = (
    {
        icon,
        setIcon
    }
     :
    {
        icon:string,
        setIcon: (value:string) => void;
    }
) => {

    const listOfIcons = [
        avatar1,
        avatar2,
        avatar3,
        avatar4
    ]


  return (
        <Popover placement="right">
      <PopoverTrigger>
         <Icon 
        icon="ph:note-pencil-thin" 
        width="41" 
        height="41" 
        className="absolute  text-primary bottom-0 right-0 z-10 cursor-pointer"
      />
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2 grid-cols-2">
            {
             listOfIcons.map((value, index) => <div className='h-12 w-12 mb-2 relative cursor-pointer hover:scale-105'
             onClick={() => setIcon((index+1).toString())}
             >
                    <Image
                    width={48}
                    height={48}
                    src={value.src}
                    className=''
                    />
                    {
                        index+1 === (parseInt(icon)) ? <Icon icon={'game-icons:check-mark'} className='absolute text-2xl bottom-0 right-0 text-primary z-10'/> : <></>
                    }
             </div>
             )
            }
        </div>
      </PopoverContent>
    </Popover>
    
  )
}

export default ChooseAvatar