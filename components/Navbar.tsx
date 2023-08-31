"use client";
import React from "react";
import {
   Navbar,
   NavbarBrand,
   NavbarContent,
   NavbarItem,
   Link,
   NavbarMenuToggle,
   NavbarMenu,
   NavbarMenuItem,
} from "@nextui-org/react";

export function MainNavbar() {
   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
   return (
      <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="xl">
         <NavbarContent>
            <NavbarBrand>
               <h1 className="font-bold text-3xl tracking-wider text-[#323643]">
                  UKM OIKUMENE
               </h1>
            </NavbarBrand>
         </NavbarContent>
         <NavbarContent className="flex sm:hidden" justify="end">
            <NavbarMenuToggle
               aria-label={isMenuOpen ? "Close menu" : "Open menu"}
               className="sm:hidden"
            />
         </NavbarContent>
         <NavbarContent className="hidden sm:flex gap-4" justify="end">
            <NavbarItem isActive>
               <Link color="foreground" href="/">
                  Beranda
               </Link>
            </NavbarItem>
            <NavbarItem>
               <Link href="kegiatan" color="foreground">
                  Kegiatan
               </Link>
            </NavbarItem>
            <NavbarItem>
               <Link color="foreground" href="tentang">
                  Tentang
               </Link>
            </NavbarItem>
         </NavbarContent>

         <NavbarMenu>
            <NavbarMenuItem className="py-5">
               <Link className="w-full" color="foreground" href="/" size="lg">
                  Beranda
               </Link>
            </NavbarMenuItem>
            <NavbarMenuItem className="py-5">
               <Link
                  className="w-full"
                  color="foreground"
                  href="/kegiatan"
                  size="lg"
               >
                  Kegiatan
               </Link>
            </NavbarMenuItem>
            <NavbarMenuItem className="py-5">
               <Link
                  className="w-full"
                  color="foreground"
                  href="/tentang"
                  size="lg"
               >
                  Tentang
               </Link>
            </NavbarMenuItem>
         </NavbarMenu>
      </Navbar>
   );
}
