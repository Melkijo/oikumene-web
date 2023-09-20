"use client";
import { KegiatanCard } from "@/components/Card";
import Image from "next/image";
import Link from "next/link";
import imageExample from "@/assets/example.jpg";

import { Kegiatan } from "@/types";
import { useEffect, useState } from "react";

export default async function Page({ params }: { params: { id: string } }) {
   const [kegiatan, setKegiatan] = useState<Kegiatan[]>();

   useEffect(() => {
      getKegiatan();
   }, []);

   async function getKegiatan() {
      const res = await fetch(`/api/kegiatan/${params.id}`, {
         cache: "no-cache",
      });
      const { data } = await res.json();
      setKegiatan(data);
   }
   if (!kegiatan) {
      return null;
   }
   return (
      <>
         <div className="max-w-[1440px] mx-auto px-[3%] my-10">
            <div className="flex gap-10 pb-10 flex-col md:flex-row">
               <Image
                  src={
                     kegiatan[0].thumbnail
                        ? kegiatan[0].thumbnail
                        : imageExample
                  }
                  alt="ini gambar"
                  width={200}
                  height={200}
                  className="object-cover max-h-[400px] w-full basis-1/2 neu-box rounded-xl "
               />
               <div className="basis-1/2 flex gap-3 flex-col">
                  <div>
                     <h1 className="text-[2rem]">{kegiatan[0].title}</h1>
                     <p>{kegiatan[0].desc}</p>
                     <div className="flex gap-8 pt-5">
                        <div>
                           <h5 className="text-[1.5rem]">Tanggal</h5>
                           <p>{kegiatan[0].date}</p>
                        </div>
                        <div>
                           <h5 className="text-[1.5rem]">Lokasi</h5>
                           <p>{kegiatan[0].location}</p>
                        </div>
                     </div>
                  </div>
                  <div>
                     <h5 className="text-[1.5rem]">Link Download Foto</h5>
                     <p>
                        <Link
                           href={kegiatan[0].link}
                           target="_blank"
                           className="text-blue-500 underline"
                        >
                           Download
                        </Link>
                     </p>
                  </div>
               </div>
            </div>
            {/* <div>
               <h1 className="text-center  text-[1.5rem] md:text-[2rem] leading-[50px] md:leading-[80px] ">
                  kegiatan lainnya
               </h1>
               <div className="flex justify-center items-center flex-col lg:flex-row gap-10 ">
                  {kegiatan.slice(0, 3).map((item, index) => (
                     <KegiatanCard
                        id={item.id}
                        title={item.title}
                        desc={item.desc}
                        key={index}
                     />
                  ))}
               </div>
            </div> */}
         </div>
      </>
   );
}
