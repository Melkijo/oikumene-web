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
   Spinner,
   Modal,
   ModalContent,
   ModalHeader,
   ModalBody,
   ModalFooter,
   useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";
import { Kegiatan } from "@/types";
import DeleteModal from "@/components/Modal";

export default function Page() {
   const [kegiatan, setKegiatan] = useState<Kegiatan[]>([]);
   const [itemRemove, setItemRemove] = useState<any>();

   const { isOpen, onOpen, onOpenChange } = useDisclosure();
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

   if (kegiatan == null) {
      return (
         <div className="h-[80vh]  flex justify-center">
            <Spinner />
         </div>
      );
   } else {
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
                  {kegiatan.map((item, index) => (
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
                                 onPress={onOpen}
                                 onClick={() =>
                                    setItemRemove({
                                       id: item.id,
                                       title: item.title,
                                    })
                                 }
                                 //  onClick={() => handleDelete(item.id)}
                              >
                                 Delete
                              </Button>
                           </div>
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>

            <DeleteModal
               isOpen={isOpen}
               onOpenChange={onOpenChange}
               item={itemRemove}
            />
         </>
      );
   }
}
