"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Divider } from "@nextui-org/divider";
import { signIn } from "next-auth/react";
import axios from "axios";
import { useAuth } from "@/hooks/auth";

const RegisterPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { status } = useAuth({ redirect: true });

  // Errors
  const [error, setError] = useState("");
  const [showConfirmPasswordError, setShowConfirmPasswordError] = useState(false);

  const handleSubmit = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    if (password !== confirmPassword) {
      setShowConfirmPasswordError(true);
      setIsLoading(false);
      return;
    }
    try {
      const result = await axios.post("/api/registrate", {
        email,
        password,
        username,
        role: "Admin"
      });
      if (result.status !== 200) {
        setError("Failed to register");
      } else {
        const signInResult = await signIn("credentials", {
          email,
          password,
          callbackUrl: "/",
          redirect: false
        });
        if (signInResult?.error) {
          setError("Failed to login");
        } else {
          router.push("/");
        }
      }
    } catch (e) {
      const error = e as Error;
      setError(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (status == "loading") setIsLoading(true);
    else setIsLoading(false);
  }, [status]);

  return (
    <>
     <p>Reg</p>
    </>
  );
};

export default RegisterPage;