"use client";
import { useAuth } from "@/hooks/auth";
import { Button } from "@nextui-org/button";
import { signIn, signOut } from "next-auth/react";
import LoadingCircle from "./skeletons/LoadingCircle";
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import avatar1 from '@/assets/images/profile/avatar.png'
import { useRouter } from "next/navigation";

export default function SignInButton() {

  const auth = useAuth();

  const router = useRouter();

  if (auth.status == "loading") {
    return <LoadingCircle/>
  }
  
  if (auth.status == "authorized") 
    {
      return     <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform border-transparent"
            src={avatar1.src}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2"
          onPress={() => router.push('/profile')}
          >
            <p className="font-semibold">Увійтии як</p>
            <p className="font-semibold">{auth.user?.user.email}</p>
          </DropdownItem>
          <DropdownItem key="logout" color="danger" onPress={() => signOut()}>
            Вийти
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </div>
    }


  return <Button color="primary" className="text-white uppercase"  onClick={() => signIn()}>УВІЙТИ</Button>;
}
