import "../globals.css";
import type { Metadata } from "next";
import { work_sans, lalezar } from "../fonts";
import { Suspense } from "react";
import Loading from "../(utama)/loading";
import { Providers } from "../(utama)/providers";
import Sidebar from "@/components/Sidebar";

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
               <Sidebar>
                  <Suspense fallback={<Loading />}>{children}</Suspense>
               </Sidebar>
            </Providers>
         </body>
      </html>
   );
}