"use client";
import { Icon } from "@iconify/react";
import { Tooltip } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const DeleteAllFiltersButton = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClearParams = () => {
    router.push(pathname);
  };

  return (
    <Tooltip closeDelay={0} content="Відмінити всі фільтри" delay={0}>
      <button
        className="group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
        onClick={handleClearParams}
      >
        <Icon
          className="text-primary text-4xl group-hover:text-[#ff8c00] transition-colors duration-300 ease-in-out"
          icon="mdi:flame"
        />
      </button>
    </Tooltip>
  );
};

export default DeleteAllFiltersButton;
