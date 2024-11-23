"use client";
import { TravelBookingProvider } from '@/components/providers/TravelBookingProvider';
import React from 'react'

const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <TravelBookingProvider>
      {children}
    </TravelBookingProvider>
  )
}

Layout.displayName = 'Layout';

export default Layout;
