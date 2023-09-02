"use client";
import React, { useEffect, useState } from "react";
import { Input, Textarea } from "@nextui-org/react";
import { Kegiatan } from "@/types";

export default function page({ params }: { params: { id: string } }) {
   const [kegiatan, setKegiatan] = useState<Kegiatan[]>();
   async function handleEdit(e: any) {
      e.preventDefault();
      const data = {
         title: String(e.target.name.value),
         link: String(e.target.link.value),
         date: String(e.target.date.value),
         location: String(e.target.location.value),
         desc: String(e.target.desc.value),
      };

      const res = await fetch(`/api/kegiatan/${params.id}`, {
         method: "PUT",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ data }),
      });
   }

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
      return <div>Loading...</div>;
   }
   console.log(kegiatan[0].title);

   return (
      <div>
         <h1 className="text-[2rem]">Edit {params.id}</h1>
         <form onSubmit={handleEdit}>
            <div className="flex gap-5 my-5">
               <div className="basis-1/2 flex flex-col gap-5">
                  <Input
                     key="outside"
                     type="text"
                     label="Nama"
                     name="name"
                     defaultValue={kegiatan[0].title}
                     labelPlacement="outside"
                  />
                  <Input
                     key="outside"
                     type="date"
                     name="date"
                     label="Tanggal kegiatan"
                     defaultValue={kegiatan[0].date}
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
                     defaultValue={kegiatan[0].link}
                     labelPlacement="outside"
                     placeholder="link foto"
                  />
                  <Input
                     key="outside"
                     type="text"
                     label="location"
                     name="location"
                     defaultValue={kegiatan[0].location}
                     labelPlacement="outside"
                     placeholder="lokasi"
                  />
               </div>
               <div className="basis-1/2 h-fit">
                  <Textarea
                     label="Description"
                     name="desc"
                     labelPlacement="outside"
                     defaultValue={kegiatan[0].desc}
                     placeholder="Enter your description"
                     className="max-w-full "
                  />
               </div>
            </div>

            <Input
               type="Submit"
               value="Edit"
               className="hover:cursor-wait"
               labelPlacement="outside"
            />
         </form>
      </div>
   );
}
