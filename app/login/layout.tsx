import "../globals.css";
import type { Metadata } from "next";
import { work_sans, lalezar } from "../fonts";
import { Suspense } from "react";
import { Providers } from "../(utama)/providers";
import Loading from "../(utama)/loading";

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
               <Suspense fallback={<Loading />}>{children}</Suspense>
            </Providers>
         </body>
      </html>
   );
}
