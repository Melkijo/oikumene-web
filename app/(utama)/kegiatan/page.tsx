"use client";
import { KegiatanCard } from "@/components/Card";
import { Pagination } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Kegiatan } from "@/types";

export default function Index() {
   const [kegiatan, setKegiatan] = useState<Kegiatan[]>([]);

   useEffect(() => {
      getKegiatan();
   }, []);

   async function getKegiatan() {
      const res = await fetch("/api/kegiatan", {
         cache: "no-cache",
      });
      const data = await res.json();
      setKegiatan(data.data);
   }
   console.log(kegiatan);
   if (!kegiatan) {
      return <div>Loading...</div>;
   }
   return (
      <>
         <div className="text-center my-6">
            <h1 className="text-[2.5rem] font-bold leading-10">
               Halaman Kegiatan
            </h1>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Temporibus, veritatis!
            </p>
         </div>
         <div className="flex justify-center mx-6">
            <Input
               type="text"
               variant="bordered"
               placeholder="Cari kegiatan"
               className="max-w-md"
            />
         </div>

         <div className="max-w-[1440px] mx-auto px-[3%] mt-10 mb-10">
            <div className=" mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 ">
               {kegiatan.map((item, index) => (
                  <KegiatanCard
                     id={item.id}
                     title={item.title}
                     desc={item.desc}
                     thumbnail={item.thumbnail}
                     key={index}
                  />
               ))}
            </div>
            <Pagination total={10} initialPage={1} />
         </div>
      </>
   );
}
