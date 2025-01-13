"use client";
import "@/styles/globals.css";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { fontSans } from "@/config/fonts";
import FixedButtonPhone from "@/components/shared/FixedButtonPhone";

import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // List of pages where Navbar and Footer should be hidden
  const hideLayoutFor = [
    "/auth/login",
    "/auth/registrate",
    "/auth/confirm-email",
  ];
  // List of pages where only Navbar should be shown
  const showOnlyNavbarFor = ["/profile"];

  // Flags to check layout visibility
  const shouldHideLayout = hideLayoutFor.includes(pathname);
  const shouldShowOnlyNavbar = showOnlyNavbarFor.includes(pathname);

  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={clsx(
          "min-h-screen overflow-x-hidden bg-[#edebeb] font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col min-h-screen bg-gray-200">
            {!shouldHideLayout && <FixedButtonPhone />}
            {/* Show Navbar only if route is not in hidden list */}
            {!shouldHideLayout && <Navbar />}

            <main className="flex-grow">{children}</main>

            {/* Show Footer only if layout is not hidden and not only showing Navbar */}
            {!shouldHideLayout && !shouldShowOnlyNavbar && <Footer />}
          </div>
        </Providers>
      </body>
    </html>
  );
}
