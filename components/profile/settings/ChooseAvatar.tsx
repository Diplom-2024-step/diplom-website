import { Icon } from "@iconify/react";
import {
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import React from "react";

import avatar1 from "@/assets/images/profile/avatar.png";
import avatar2 from "@/assets/images/profile/avatar2.webp";
import avatar3 from "@/assets/images/profile/avatar3.webp";
import avatar4 from "@/assets/images/profile/avatar4.webp";

interface AvatarOption {
  src: string;
  alt: string;
}

const ChooseAvatar = ({
  icon,
  setIcon,
}: {
  icon: string;
  setIcon: (value: string) => void;
}) => {
  const listOfIcons: AvatarOption[] = [
    { src: avatar1.src, alt: "Avatar 1" },
    { src: avatar2.src, alt: "Avatar 2" },
    { src: avatar3.src, alt: "Avatar 3" },
    { src: avatar4.src, alt: "Avatar 4" },
  ];

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLDivElement>,
    index: number
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      setIcon((index + 1).toString());
    }
  };

  return (
    <Popover placement="right">
      <PopoverTrigger>
        <button
          aria-label="Change avatar"
          className="absolute bottom-0 right-0 z-10"
        >
          <Icon
            className="text-primary cursor-pointer"
            height="41"
            icon="ph:note-pencil-thin"
            width="41"
          />
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2 grid grid-cols-2 gap-2">
          {listOfIcons.map((avatar, index) => (
            <div
              key={`avatar-${index + 1}`}
              aria-label={`Select ${avatar.alt}`}
              className="h-12 w-12 relative cursor-pointer hover:scale-105 transition-transform"
              role="button"
              tabIndex={0}
              onClick={() => setIcon((index + 1).toString())}
              onKeyDown={(e) => handleKeyPress(e, index)}
            >
              <Image
                alt={avatar.alt}
                className="rounded-full"
                height={48}
                src={avatar.src}
                width={48}
              />
              {index + 1 === parseInt(icon) && (
                <Icon
                  className="absolute text-2xl bottom-0 right-0 text-primary z-10"
                  icon="game-icons:check-mark"
                />
              )}
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ChooseAvatar;
