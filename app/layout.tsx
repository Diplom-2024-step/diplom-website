"use client"
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import { usePathname } from 'next/navigation';
import clsx from "clsx";
import Footer from "../components/shared/Footer";
import Services from "../components/shared/Services";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import Navbar from "../components/shared/Navbar";
import HotOffers from "../components/shared/HotOffers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Список страниц, где нужно скрыть Navbar и Footer
  const hideLayoutFor = [""];

  /// Список страниц, где отображается только Navbar
  const showOnlyNavbarFor = ["/profile"];

  // Флаги для проверки
  const shouldHideLayout = hideLayoutFor.includes(pathname);
  const shouldShowOnlyNavbar = showOnlyNavbarFor.includes(pathname);

  return (
      <html suppressHydrationWarning lang="en">
        <head />
        <body
          className={clsx(
            "h-full bg-[#edebeb] font-sans antialiased",
            fontSans.variable
          )}
        >
          <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <div className="relative flex flex-col mb-0 bg-gray-200 h-full">

              {/* Показываем Navbar только если маршрут не в списке */}
              {!shouldHideLayout && <Navbar />}
      
              <main className="">
                {children}
              </main>
              
              {/* Отображение Footer только если маршрут не требует его скрытия */}
            {!shouldHideLayout && !shouldShowOnlyNavbar && <Footer />}
            </div>
          </Providers>
        </body>
      </html>
  );
}
