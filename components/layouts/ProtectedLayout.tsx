"use client";
import React, { Suspense } from "react";

import LoadingScreen from "../shared/LoadingScreen";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout: React.FC<ProtectedLayoutProps> = ({ children }) => {
  return <Suspense fallback={<LoadingScreen />}>{children}</Suspense>;
};

export default ProtectedLayout;
