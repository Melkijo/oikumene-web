"use client";

import Image from "next/image";
import Link from "next/link";
import imageExample from "@/assets/example.jpg";

import { Kegiatan } from "@/types";
import { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/react";

export default async function Page({ params }: { params: { id: string } }) {
  const [kegiatan, setKegiatan] = useState<Kegiatan[]>();

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
      <>
        <div className="max-w-[1440px] mx-auto px-[3%] my-10">
          <div className="flex gap-10 pb-10 flex-col">
            <Image
              src={kegiatan[0].thumbnail ? kegiatan[0].thumbnail : imageExample}
              alt="ini gambar"
              width={200}
              height={200}
              className="object-cover max-h-[600px] w-full  neu-box rounded-xl border-3 border-black"
            />
            <div className=" flex gap-3 flex-col">
              <h1 className="text-[2rem]">{kegiatan[0].title}</h1>

              <div className="flex gap-10 flex-col lg:flex-row">
                <div className="basis-2/3 ">
                  <p>{kegiatan[0].desc}</p>
                </div>

                <div className="flex flex-col gap-8 ">
                  <div>
                    <h5 className="text-[1.5rem]">Tanggal Acara</h5>
                    <p>{kegiatan[0].date}</p>
                  </div>
                  <div>
                    <h5 className="text-[1.5rem]">Lokasi</h5>
                    <p>{kegiatan[0].location}</p>
                  </div>
                  <div>
                    <h5 className="text-[1.5rem]">Link Download Foto</h5>
                    <p>
                      <Link
                        href={kegiatan[0].link}
                        target="_blank"
                        className="text-blue-500 underline"
                      >
                        Download
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div>
               <h1 className="text-center  text-[1.5rem] md:text-[2rem] leading-[50px] md:leading-[80px] ">
                  kegiatan lainnya
               </h1>
               <div className="flex justify-center items-center flex-col lg:flex-row gap-10 ">
                  {kegiatan.slice(0, 3).map((item, index) => (
                     <KegiatanCard
                        id={item.id}
                        title={item.title}
                        desc={item.desc}
                        key={index}
                     />
                  ))}
               </div>
            </div> */}
        </div>
      </>
    );
  }
}
