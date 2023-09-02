"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Sidebar({ children }: { children: React.ReactNode }) {
   const pathname = usePathname();
   const navLink = [
      { name: "Dashboard", href: "/admin/dashboard" },
      { name: "kegiatan", href: "/admin/kegiatan" },
   ];
   return (
      <>
         <div className="flex">
            <div className="bg-blue-500 h-screen w-[250px] absolute z-10 flex gap-10 flex-col drop-shadow-lg">
               <div className="bg-white  px-5 flex justify-between h-[75px] items-center">
                  <h1>ukm oikumene</h1>
                  <div className="px-2 rounded-lg bg-blue-500 h-fit text-white">
                     =
                  </div>
               </div>
               <div className="">
                  <ul className="flex flex-col gap-10  px-5 text-white">
                     {navLink.map((link, index) => {
                        const isActive = pathname === link.href;
                        return (
                           <li>
                              <Link
                                 key={index}
                                 href={link.href}
                                 className={
                                    isActive ? "text-blue-200" : "text-white"
                                 }
                              >
                                 {link.name}
                              </Link>
                           </li>
                        );
                     })}
                     <li>
                        <Link href={""}>On Progress..</Link>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="flex flex-col ">
               <div className="w-screen ps-[275px] h-[75px] bg-white border border-b-2 flex items-center justify-between pe-[25px]">
                  <h3> Hai Admin!</h3>
                  <Link href="/">
                     <Button color="danger" size="sm">
                        Logout
                     </Button>
                  </Link>
               </div>
               <div className="ps-[275px] pe-[25px] pt-[25px]">{children}</div>
            </div>
         </div>
      </>
   );
}
