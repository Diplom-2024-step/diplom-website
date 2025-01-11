"use client";
import { Button } from "@nextui-org/button";
import { signIn, signOut } from "next-auth/react";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { getIconAccordingToIconNumber } from "@/lib/utils";
import { useNewIcon } from "@/hooks/useNewIcon";
import { useAuth } from "@/hooks/auth";

import LoadingCircle from "./skeletons/LoadingCircle";

export default function SignInButton() {
  const auth = useAuth();

  const [icon, setNewIcon] = useNewIcon();

  const router = useRouter();

  if (auth.status == "loading") {
    return <LoadingCircle />;
  }

  if (auth.status == "authorized") {
    return (
      <div className="flex items-center gap-4">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform border-transparent"
              src={
                getIconAccordingToIconNumber(
                  icon === null ? auth.user?.user.iconNumber || "1" : icon
                ).src
              }
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem
              key="profile"
              className="h-14 gap-2"
              onPress={() => router.push("/profile")}
            >
              <p className="font-semibold">Увійтии як</p>
              <p className="font-semibold">{auth.user?.user.email}</p>
            </DropdownItem>
            <DropdownItem
              key="logout"
              color="danger"
              onPress={() =>
                signOut({
                  redirect: true,
                  callbackUrl: "/",
                })
              }
            >
              Вийти
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }

  return (
    <Button
      className="text-white uppercase"
      color="primary"
      onClick={() => signIn()}
    >
      УВІЙТИ
    </Button>
  );
}
