"use client";
import React from "react";

import { TravelBookingProvider } from "@/components/providers/TravelBookingProvider";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <TravelBookingProvider>{children}</TravelBookingProvider>;
};

Layout.displayName = "Layout";

export default Layout;
