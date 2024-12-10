"use client";
import { TravelBookingProvider } from '@/components/providers/TravelBookingProvider';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import React from 'react'

const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
} ) => {
  return (
    <TravelBookingProvider>
      <div className="container mx-auto mb-0 max-w-7xl px-5 flex justify-start items-center">
        <Link href="../hotels">
          <span>
            <h2 className="text-black">Повернутись до готелів</h2>
          </span>
        </Link>
        <Icon
          icon="ei:arrow-up"
          className="w-10 h-10 transition-transform rotate-[315deg] text-black"
        />
      </div>
      {children}
    </TravelBookingProvider>
  )
}

Layout.displayName = 'Layout';

export default Layout;
