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
import { usePathname } from "next/navigation";

export function MainNavbar() {
   const pathname = usePathname();
   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
   const navLink = [
      { name: "beranda", href: "/" },
      { name: "kegiatan", href: "/kegiatan" },
      { name: "tentang", href: "/tentang" },
   ];
   return (
      <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="2xl">
         <NavbarContent>
            <NavbarBrand>
               <Link href="/">
                  <h1 className="font-bold text-3xl tracking-wider text-[#323643]">
                     UKM OIKUMENE
                  </h1>
               </Link>
            </NavbarBrand>
         </NavbarContent>
         <NavbarContent className="flex md:hidden" justify="end">
            <NavbarMenuToggle
               aria-label={isMenuOpen ? "Close menu" : "Open menu"}
               className="md:hidden"
            />
         </NavbarContent>
         <NavbarContent
            className="gap-5 hidden md:flex md:gap-10"
            justify="end"
         >
            {navLink.map((link, index) => (
               <NavbarItem
                  key={index}
                  isActive={pathname === `${link.href}` ? true : false}
               >
                  <Link color="foreground" href={`${link.href}`}>
                     {link.name}
                  </Link>
               </NavbarItem>
            ))}
         </NavbarContent>

         <NavbarMenu>
            {navLink.map((link, index) => (
               <NavbarMenuItem className="py-5" key={index}>
                  <Link
                     className="w-full"
                     color="foreground"
                     href={`${link.href}`}
                     size="lg"
                  >
                     {link.name}
                  </Link>
               </NavbarMenuItem>
            ))}
         </NavbarMenu>
      </Navbar>
   );
}
