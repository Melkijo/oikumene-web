"use client";
import { KegiatanCard } from "@/components/Card";
import { Input, Pagination, Spinner } from "@nextui-org/react";
import { SetStateAction, useEffect, useState } from "react";
import { Kegiatan } from "@/types";
// import { Pagination } from "@/components/Pagination";
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
          <p>Kegiatannya seru seru loo</p>
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
              .filter((item) =>
                item.title.toLowerCase().includes(search.toLowerCase())
              )
              .sort(compareDates)
              .reverse()
              .slice(firstPostIndex, lastPostIndex)
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
            {/* <Pagination
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
            /> */}
            <Pagination
              showControls
              total={Math.ceil(
                kegiatan.filter((item) =>
                  item.title.toLowerCase().includes(search.toLowerCase())
                ).length / postPerPage
              )}
              page={currentPage}
              onChange={(page: SetStateAction<number>) => setCurentPage(page)}
            />
          </div>
        </div>
      </>
    );
  }
}
