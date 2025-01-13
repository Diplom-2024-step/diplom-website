"use client";
import { Card } from "@nextui-org/card";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";

import { useAuth } from "@/hooks/auth";

export default function UnauthorizedPage() {
  const { status } = useAuth({ redirect: true });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (status == "loading") setIsLoading(true);
    else setIsLoading(false);
  }, []);

  const handleLogout = async () => {
    setIsLoading(true);
    await signOut({ redirect: false });
    setIsLoading(false);
  };

  return (
    <Card
      className="
          	flex
          	flex-wrap
          	space-y-2
          	justify-between"
    >
      <h1 className="text-2xl font-bold">Unauthorized Action</h1>
      <Button
        className="!mt-0"
        isLoading={isLoading}
        variant="solid"
        onPress={handleLogout}
      >
        Log Out
      </Button>
    </Card>
  );
}
