import "../globals.css";
import type { Metadata } from "next";
import { work_sans, lalezar } from "../fonts";
import { Suspense } from "react";
import { Providers } from "../(utama)/providers";
import Loading from "../(utama)/loading";
import { cookies } from "next/headers";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
export const metadata: Metadata = {
   title: "UKM Oikumene",
   description: "UKM Oikumene universitas mataram",
};
export const dynamic = "force-dynamic";

export default async function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   const supabase = createServerComponentClient({ cookies });
   const {
      data: { session },
   } = await supabase.auth.getSession();

   if (session) {
      redirect("/admin/dashboard");
   }
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
