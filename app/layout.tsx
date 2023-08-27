import "./globals.css";
import type { Metadata } from "next";
import { work_sans, lalezar } from "./fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loading from "./loading";

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
         <head>
            <link
               rel="apple-touch-icon"
               sizes="180x180"
               href="/favicon_io/apple-touch-icon.png"
            />
            <link
               rel="icon"
               type="image/png"
               sizes="32x32"
               href="/favicon_io/favicon-32x32.png"
            />
            <link
               rel="icon"
               type="image/png"
               sizes="16x16"
               href="/favicon_io/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
         </head>
         <body>
            <Navbar />
            <Suspense fallback={<Loading />}>{children}</Suspense>

            <Footer />
         </body>
      </html>
   );
}
