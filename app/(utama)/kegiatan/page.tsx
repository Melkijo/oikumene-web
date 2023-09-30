"use client";
import { KegiatanCard } from "@/components/Card";
import { Input, Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Kegiatan } from "@/types";
import { Pagination } from "@/components/Pagination";
export default function Index() {
  const [kegiatan, setKegiatan] = useState<Kegiatan[]>([]);
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);
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

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  if (kegiatan == null || kegiatan.length == 0) {
    return (
      <div className="h-[80vh]   flex justify-center">
        <Spinner />
      </div>
    );
  } else {
    return (
      <>
        <div className="text-center my-6">
          <h1 className="text-[2.5rem] font-bold tracking-wider">
            Halaman Kegiatan
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            veritatis!
          </p>
        </div>
        <div className="flex justify-center mx-6">
          <Input
            type="text"
            variant="bordered"
            placeholder="Cari kegiatan"
            size="lg"
            className="max-w-lg"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-[3%] mt-10 mb-10">
          <div className=" mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 ">
            {kegiatan
              .slice(firstPostIndex, lastPostIndex)
              .filter((item) =>
                item.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((item, index) => (
                <KegiatanCard
                  id={item.id}
                  title={item.title}
                  desc={item.desc}
                  thumbnail={item.thumbnail}
                  key={index}
                />
              ))}
          </div>
          <div className="flex justify-center mt-3">
            <Pagination
              totalPosts={
                kegiatan.filter((item) =>
                  item.title.toLowerCase().includes(search.toLowerCase())
                ).length > postPerPage
                  ? kegiatan.length
                  : 0
              }
              postPerPage={postPerPage}
              setCurrentPage={setCurentPage}
              currentPage={currentPage}
            />
          </div>
        </div>
      </>
    );
  }
}
