"use client";
import React, { SetStateAction, useEffect, useState } from "react";
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
  Pagination,
} from "@nextui-org/react";
import Link from "next/link";
import { Kegiatan } from "@/types";
import DeleteModal from "@/components/Modal";

export default function Page() {
  const [kegiatan, setKegiatan] = useState<Kegiatan[]>([]);
  const [itemRemove, setItemRemove] = useState<any>();
  const [currentPage, setCurentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  useEffect(() => {
    getKegiatan();
  }, []);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  function compareDates(a: any, b: any) {
    const dateA = new Date(a.datetime);
    const dateB = new Date(b.datetime);

    if (dateA < dateB) {
      return -1;
    }
    if (dateA > dateB) {
      return 1;
    }
    return 0;
  }

  async function getKegiatan() {
    const res = await fetch("../api/kegiatan", {
      cache: "no-cache",
    });
    const data = await res.json();
    setKegiatan(data.data);
  }

  if (kegiatan == null || kegiatan.length == 0) {
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
            <Button color="success" className="text-white " size="md">
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
            {kegiatan
              .slice(firstPostIndex, lastPostIndex)
              .sort(compareDates)
              .reverse()
              .map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>
                    <p className=" break-words w-40 line-clamp-1">
                      {item.link}
                    </p>{" "}
                  </TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.location}</TableCell>
                  <TableCell>
                    <p className=" line-clamp-2 w-72">{item.desc}</p>{" "}
                  </TableCell>
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
                        //   onPress={onOpen}
                        onClick={() => {
                          setItemRemove({
                            id: item.id,
                            title: item.title,
                          });
                          onOpen();
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <Pagination
          className="mt-5 flex justify-end"
          showControls
          total={Math.ceil(kegiatan.length / postPerPage)}
          page={currentPage}
          onChange={(page: SetStateAction<number>) => setCurentPage(page)}
        />
        <DeleteModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          item={itemRemove}
        />
      </>
    );
  }
}
