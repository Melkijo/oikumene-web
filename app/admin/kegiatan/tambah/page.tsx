"use client";
import React, { useState } from "react";
import { Button, Input, Spinner } from "@nextui-org/react";
import { supabase } from "@/lib";

export default function Page() {
   const [loading, setLoading] = useState(false);
   async function handleSubmit(e: any) {
      e.preventDefault();
      setLoading(true);
      const thumbnail: any = e.target.thumbnail.files[0];

      const imgUpload = await supabase.storage
         .from("oikumene")
         .upload(`kegiatan/${thumbnail.name}`, thumbnail, {
            cacheControl: "3600",
            upsert: false,
         });

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

         const res = await fetch("/api/kegiatan", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ data }),
         });
         const resPost = await res.json();
         if (resPost.message) {
            setLoading(false);
         }
         alert(resPost.message);
      } else {
         alert(imgUpload.error.message);
         setLoading(false);

         console.log(imgUpload.error.message);
      }
   }
   return (
      <div>
         <h1 className="text-[2rem]">Tambah kegiatan</h1>
         <form onSubmit={handleSubmit}>
            <div className="flex gap-5 my-5">
               <div className="basis-1/2 flex flex-col gap-5">
                  <div>
                     <label htmlFor="">Name</label>
                     <Input
                        key="outside"
                        type="text"
                        variant="bordered"
                        size="lg"
                        className="bg-white pt-2"
                        name="name"
                        placeholder="kegiatan"
                        isRequired
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
                        labelPlacement="outside"
                        isRequired
                     />
                  </div>
                  <div>
                     <label htmlFor="file-input">Thumbnail (jpg, png)</label>
                     <input
                        type="file"
                        name="thumbnail"
                        id="file-input"
                        className="block w-full  mt-2 border border-gray-300 shadow-sm rounded-xl text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 
                        file:bg-transparent file:border-0
                        file:bg-gray-100 file:mr-4
                        file:py-3 file:px-4
                        "
                        //only accept jpg and png file
                        accept="image/png, image/jpeg"
                        required
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
                        placeholder="link foto"
                        isRequired
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
                        className="bg-white  pt-2"
                        placeholder="location"
                        isRequired
                     />
                  </div>
               </div>
               <div className="basis-1/2 h-fit">
                  <div>
                     <label htmlFor="">Description</label>
                     {/* <Textarea
                        name="desc"
                        variant="bordered"
                        size="lg"
                        className="bg-white max-w-full h-[200px] pt-2"
                        placeholder="Enter your description"
                        required
                     /> */}
                     <textarea
                        name="desc"
                        className="py-3 px-4 block mt-2 h-[200px] w-full border border-gray-300 rounded-xl text-sm focus:border-blue-500 focus:ring-blue-500 "
                        required
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
                  {loading ? <Spinner color="default" /> : null}
               </Button>
            </div>
         </form>
      </div>
   );
}
