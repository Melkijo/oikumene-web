"use client";
import React from "react";
import { Input, Textarea } from "@nextui-org/react";
export default function page() {
   async function handleSubmit(e: any) {
      e.preventDefault();
      const data = {
         title: String(e.target.name.value),
         link: String(e.target.link.value),
         date: String(e.target.date.value),
         location: String(e.target.location.value),
         desc: String(e.target.desc.value),
      };

      const res = await fetch("/api/kegiatan", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ data }),
      });

      console.log(JSON.stringify(data));
   }
   return (
      <div>
         <h1 className="text-[2rem]">Tambah kegiatan</h1>
         <form onSubmit={handleSubmit}>
            <div className="flex gap-5 my-5">
               <div className="basis-1/2 flex flex-col gap-5">
                  <Input
                     key="outside"
                     type="text"
                     label="Nama"
                     name="name"
                     labelPlacement="outside"
                     placeholder="kegiatan"
                  />
                  <Input
                     key="outside"
                     type="date"
                     name="date"
                     label="Tanggal kegiatan"
                     labelPlacement="outside"
                     placeholder="Enter your email"
                  />
                  <Input
                     key="outside"
                     type="file"
                     name="thumbnail"
                     label="Thumbnail"
                     labelPlacement="outside"
                     placeholder="Enter your email"
                  />
                  <Input
                     key="outside"
                     type="text"
                     label="Link Foto"
                     name="link"
                     labelPlacement="outside"
                     placeholder="link foto"
                  />
                  <Input
                     key="outside"
                     type="text"
                     label="location"
                     name="location"
                     labelPlacement="outside"
                     placeholder="lokasi"
                  />
               </div>
               <div className="basis-1/2 h-fit">
                  <Textarea
                     label="Description"
                     name="desc"
                     labelPlacement="outside"
                     placeholder="Enter your description"
                     className="max-w-full "
                  />
               </div>
            </div>

            <Input
               type="submit"
               className="hover:cursor-wait"
               labelPlacement="outside"
            />
         </form>
      </div>
   );
}
