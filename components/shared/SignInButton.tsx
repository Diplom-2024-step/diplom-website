"use client";
import { useAuth } from "@/hooks/auth";
import { Button } from "@nextui-org/button";
import { signIn, signOut } from "next-auth/react";
import LoadingCircle from "./skeletons/LoadingCircle";

export default function SignInButton() {

  const auth = useAuth();

  if (auth.status == "loading") {
    return <LoadingCircle/>
  }
  
  if (auth.status == "authorized") 
    {
      return <Button color="primary" className="text-white uppercase"  onClick={() => signOut()}>вийти</Button>;
    }


  return <Button color="primary" className="text-white uppercase"  onClick={() => signIn()}>УВІЙТИ</Button>;
}
