"use client";
import { signOut, useSession } from "next-auth/react";
import { DecodedToken } from "@/types/DecodedToken";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import Service from "@/service/shared/Service";
import { Session } from "next-auth";

export interface AuthProps {
  requiredRoles?: string[];
  lockedRoles?: string[];
  redirect?: boolean;
}

export interface AuthResponse {
  status: "loading" | "unauthorized" | "authorized";
  user?: Session;
}

const pages = {
  signIn: "/auth/login",
  newUser: "/auth/registrate",
  unauthorized: "/auth/unauthorized",
};

export const useAuth = ({
  requiredRoles,
  lockedRoles,
  redirect,
}: AuthProps = {}): AuthResponse => {
  const { data, status } = useSession();
  const path = usePathname();
  const router = useRouter();
  const user = data?.user;
  const roles = user?.role.split(",").map((role) => role.trim().toLowerCase());
  let isAuthorized = status == "authenticated";
  isAuthorized &&=
    requiredRoles?.every((role) =>
      roles?.includes(role.trim().toLowerCase())
    ) ?? true;
  isAuthorized &&=
    lockedRoles?.every((role) => !roles?.includes(role.trim().toLowerCase())) ??
    true;
  const isSiteSessionExpired = data?.expires
    ? new Date(data?.expires) < new Date()
    : false;

  useEffect(() => {
    if (status == "loading") return;
    if (isSiteSessionExpired) {
      signOut();
      router.push(pages.signIn);
    }
    if (status == "unauthenticated") {
      if (redirect && path != pages.signIn && path != pages.newUser)
        router.push(pages.signIn);
      return;
    }

    if (redirect && !isAuthorized && path != pages.unauthorized)
      router.push(pages.unauthorized);
    else if (redirect && (path == pages.signIn || path == pages.newUser))
      router.push("/");
  }, [status]);

  if (status == "loading") return { status };
  if (status == "unauthenticated") return { status: "unauthorized" };
  return {
    status: isAuthorized ? "authorized" : "unauthorized",
    user: data ? data : undefined,
  };
};

export const useAuthService = (
  service: Service
): "success" | "loading" | "error" => {
  const { status, user } = useAuth();
  if (status == "loading") return status;
  if (status == "unauthorized") return "error";
  service.addJWTtoken(user?.user.accessToken!);
  return "success";
};
