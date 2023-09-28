import "../globals.css";
import type { Metadata } from "next";
import { work_sans, lalezar } from "../fonts";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import { MainNavbar } from "@/components/Navbar";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "UKM Oikumene",
  description: "UKM Oikumene universitas mataram",
};
export const revalidate = 0;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${work_sans.variable} ${lalezar.variable}`}>
      <body>
        <Providers>
          <MainNavbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
