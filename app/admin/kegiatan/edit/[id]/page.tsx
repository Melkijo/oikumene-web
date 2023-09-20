"use client";
import React, { useEffect, useState } from "react";
import { Input, Textarea } from "@nextui-org/react";
import { Kegiatan } from "@/types";
import { createClient } from "@supabase/supabase-js/dist/module";

const supabase = createClient(
   process.env.NEXT_PUBLIC_SUPABASE_URL!,
   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Page({ params }: { params: { id: string } }) {
   const [kegiatan, setKegiatan] = useState<Kegiatan[]>();
   async function handleEdit(e: any) {
      //   console.log(e.target.thumbnail.files[0]);
      e.preventDefault();
      if (!e.target.thumbnail.files[0]) {
         console.log(kegiatan && kegiatan[0].thumbnail);
         const data = {
            title: String(e.target.name.value),
            link: String(e.target.link.value),
            date: String(e.target.date.value),
            location: String(e.target.location.value),
            desc: String(e.target.desc.value),
            thumbnail: String(kegiatan && kegiatan[0].thumbnail),
         };
         await fetch(`/api/kegiatan/${params.id}`, {
            method: "PUT",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ data }),
         });
      } else {
         const thumbnail: any = e.target.thumbnail.files[0];
         console.log(thumbnail.name);
         const imgUpload = await supabase.storage
            .from("oikumene")
            .upload(`kegiatan/${thumbnail.name}`, thumbnail, {
               cacheControl: "3600",
               upsert: true,
            });
         console.log(imgUpload);
         console.log(e.target.name.value);
         if (imgUpload.data) {
            const imgUrl = supabase.storage
               .from("oikumene")
               .getPublicUrl(imgUpload.data.path);

            const data = {
               title: String(e.target.name.value),
               link: String(e.target.link.value),
               date: String(e.target.date.value),
               location: String(e.target.location.value),
               desc: String(e.target.desc.value),
               thumbnail: imgUrl.data.publicUrl,
            };

            console.log(data);
            await fetch(`/api/kegiatan/${params.id}`, {
               method: "PUT",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({ data }),
            });
         }
      }
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
                     //  defaultValue={kegiatan[0].thumbnail}
                     //  value={kegiatan[0].thumbnail}
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
