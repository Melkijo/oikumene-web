"use client";
import React, { useEffect, useState } from "react";
import { Button, Input, Spinner, Textarea } from "@nextui-org/react";
import { Kegiatan } from "@/types";
import { supabase } from "@/lib";

export default function Page({ params }: { params: { id: string } }) {
   const [kegiatan, setKegiatan] = useState<Kegiatan[]>();
   async function handleEdit(e: any) {
      e.preventDefault();
      if (!e.target.thumbnail.files[0]) {
         const data = {
            title: String(e.target.name.value),
            link: String(e.target.link.value),
            date: String(e.target.date.value),
            location: String(e.target.location.value),
            desc: String(e.target.desc.value),
            thumbnail: String(kegiatan ? kegiatan[0].thumbnail : null),
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
   if (kegiatan == null || !kegiatan[0]) {
      return (
         <div className="h-[80vh]   flex justify-center">
            <Spinner />
         </div>
      );
   } else {
      return (
         <div>
            <h1 className="text-[2rem]">Edit {params.id}</h1>
            <form onSubmit={handleEdit}>
               <div className="flex gap-5 my-5">
                  <div className="basis-1/2 flex flex-col gap-5">
                     <div>
                        <label htmlFor="">Name</label>
                        <Input
                           key="outside"
                           type="text"
                           variant="bordered"
                           size="lg"
                           defaultValue={kegiatan[0].title}
                           className="bg-white pt-2"
                           name="name"
                           placeholder="kegiatan"
                        />
                     </div>
                     <div>
                        <label htmlFor="">Date</label>
                        <Input
                           key="outside"
                           type="date"
                           variant="bordered"
                           size="lg"
                           className="bg-white  pt-2"
                           name="date"
                           defaultValue={kegiatan[0].date}
                           labelPlacement="outside"
                        />
                     </div>
                     <div>
                        <label htmlFor="file-input">Thumbnail</label>
                        <input
                           type="file"
                           name="thumbnail"
                           id="file-input"
                           className="block w-full  mt-2 border border-gray-300 shadow-sm rounded-xl text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 
                        file:bg-transparent file:border-0
                        file:bg-gray-100 file:mr-4
                        file:py-3 file:px-4
                        "
                        />
                     </div>
                     <div>
                        <label htmlFor="">Link Gdrive</label>
                        <Input
                           key="outside"
                           type="text"
                           variant="bordered"
                           size="lg"
                           className="bg-white  pt-2"
                           name="link"
                           defaultValue={kegiatan[0].link}
                           placeholder="link foto"
                        />
                     </div>
                     <div>
                        <label htmlFor="">Location</label>
                        <Input
                           key="outside"
                           type="text"
                           name="location"
                           variant="bordered"
                           size="lg"
                           defaultValue={kegiatan[0].location}
                           className="bg-white  pt-2"
                           placeholder="location"
                           isRequired
                        />
                     </div>
                  </div>
                  <div className="basis-1/2 h-fit">
                     <div>
                        <label htmlFor="">Description</label>

                        <textarea
                           name="desc"
                           className="py-3 px-4 block mt-2 h-[200px] w-full border border-gray-300 rounded-xl text-sm focus:border-blue-500 focus:ring-blue-500 "
                           defaultValue={kegiatan[0].desc}
                        ></textarea>
                     </div>
                  </div>
               </div>

               <div className="flex justify-end">
                  <Button
                     type="submit"
                     color="primary"
                     size="lg"
                     className="flex "
                  >
                     Submit
                  </Button>
               </div>
            </form>
         </div>
      );
   }
}
