import "../globals.css";
import type { Metadata } from "next";
import { work_sans, lalezar } from "../fonts";
import { Suspense } from "react";
import Loading from "../(utama)/loading";
import { Providers } from "../(utama)/providers";
import Sidebar from "@/components/Sidebar";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
   title: "UKM Oikumene",
   description: "UKM Oikumene universitas mataram",
};

export default async function AdminLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   const supabase = createServerComponentClient({ cookies });
   const {
      data: { session },
   } = await supabase.auth.getSession();

   if (!session) {
      redirect("/");
   }
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
