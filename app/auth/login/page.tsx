"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Divider } from "@nextui-org/divider";
import { useAuth } from "@/hooks/auth";


const LoginPage = () => {
  const route = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { status } = useAuth({ redirect: true });

  const onSubmit = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    const result = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false
      }
    );

    if (result?.status != 200) {
      console.log(result?.error);
      setErrorMessage("Invalid credentials. Please try again.");
    } else {
      route.push("/");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (status == "loading") setIsLoading(true);
    else setIsLoading(false);
  }, [status]);


  return (
    <>
     <p>Login</p>
    </>
  );
};

export default LoginPage;
