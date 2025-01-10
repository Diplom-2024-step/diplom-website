﻿"use client";
import { Card, CardHeader } from "@nextui-org/card";
import { useAuth } from "@/hooks/auth";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";

export default function UnauthorizedPage() {
	const { status } = useAuth({ redirect: true});
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
          	justify-between">
			<h1 className="text-2xl font-bold">Unauthorized Action</h1>
			<Button
				variant="solid"
				className="!mt-0"
				isLoading={isLoading}
				onPress={handleLogout}
			>
				Log Out
			</Button>
		</Card>
	);
}