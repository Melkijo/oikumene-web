import "./globals.css";
import type { Metadata } from "next";
import { work_sans, lalezar } from "./fonts";
import Navbar from "@/components/MainNavbar";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import { Providers } from "./providers";
import MainNavbar from "@/components/MainNavbar";

export const metadata: Metadata = {
   title: "UKM Oikumene",
   description: "UKM Oikumene universitas mataram",
};

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
               <Suspense fallback={<Loading />}>{children}</Suspense>

               <Footer />
            </Providers>
         </body>
      </html>
   );
}
