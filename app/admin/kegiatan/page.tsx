"use client";
import React, { useEffect, useState } from "react";
import {
   Table,
   TableHeader,
   TableColumn,
   TableBody,
   TableRow,
   TableCell,
   Button,
} from "@nextui-org/react";
import Link from "next/link";
import { Kegiatan } from "@/types";

export default function page() {
   const [kegiatan, setKegiatan] = useState<Kegiatan[]>([]);

   useEffect(() => {
      getKegiatan();
   }, []);

   async function getKegiatan() {
      const res = await fetch("../api/kegiatan", {
         cache: "no-cache",
      });
      const data = await res.json();
      setKegiatan(data.data);
   }

   const handleDelete = async (id: string) => {
      const res = await fetch("../api/kegiatan", {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ id }),
      });
      console.log(id, "delete");
   };
   return (
      <>
         <div className="flex justify-between mb-[20px] items-center">
            <h1 className="text-[2rem]">semua kegiatan</h1>
            <Link href="/admin/kegiatan/tambah">
               <Button color="success" className="text-white">
                  + Kegiatan
               </Button>
            </Link>
         </div>
         <Table isStriped aria-label="Example static collection table">
            <TableHeader>
               <TableColumn>NAME</TableColumn>
               <TableColumn>LINK</TableColumn>
               <TableColumn>DATE</TableColumn>
               <TableColumn>LOCATION</TableColumn>
               <TableColumn>DESC</TableColumn>
               <TableColumn>ACTION</TableColumn>
            </TableHeader>
            <TableBody>
               {kegiatan &&
                  kegiatan.map((item, index) => (
                     <TableRow key={index}>
                        <TableCell>{item.title}</TableCell>
                        <TableCell>{item.link}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>{item.location}</TableCell>
                        <TableCell>{item.desc}</TableCell>
                        <TableCell>
                           <div className="flex gap-5">
                              <Link href={`/admin/kegiatan/edit/${item.id}`}>
                                 <Button
                                    size="sm"
                                    color="warning"
                                    className="text-white"
                                 >
                                    Edit
                                 </Button>
                              </Link>

                              <Button
                                 size="sm"
                                 color="danger"
                                 onClick={() => handleDelete(item.id)}
                              >
                                 Delete
                              </Button>
                           </div>
                        </TableCell>
                     </TableRow>
                  ))}
            </TableBody>
         </Table>
      </>
   );
}
