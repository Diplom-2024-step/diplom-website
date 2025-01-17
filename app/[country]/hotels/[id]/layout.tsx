"use client";
import { Icon } from "@iconify/react";
import React from "react";
import { useRouter } from "next/navigation";

import { TravelBookingProvider } from "@/components/providers/TravelBookingProvider";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();

  return (
    <TravelBookingProvider>
      <div
        className="container mx-auto mb-0 mt-5 max-w-7xl px-5 flex justify-start items-center group"
        role="button"
        onClick={() => router.back()}
      >
        <span>
          <h2 className="text-black">Повернутись до готелів</h2>
        </span>
        <Icon
          className="w-10 h-10 transition-transform rotate-[315deg] text-black group-hover:-translate-y-5 group-hover:text-primary"
          icon="ei:arrow-up"
        />
      </div>
      {children}
    </TravelBookingProvider>
  );
};

Layout.displayName = "Layout";

export default Layout;
