import "../globals.css";
import type { Metadata } from "next";
import { work_sans, lalezar } from "../fonts";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loading from "../loading";
import { Providers } from "../providers";

export const metadata: Metadata = {
   title: "UKM Oikumene",
   description: "UKM Oikumene universitas mataram",
};

export default function AdminLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en" className={`${work_sans.variable} ${lalezar.variable}`}>
         <body>
            <Providers>
               <Suspense fallback={<Loading />}>{children}</Suspense>
            </Providers>
         </body>
      </html>
   );
}
