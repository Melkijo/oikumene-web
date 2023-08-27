import { KegiatanCard } from "@/components/Card";

export default function Index() {
   return (
      <>
         <div className="text-center my-10">
            <h1 className="text-[2.5rem] font-bold leading-10">
               Halaman Kegiatan
            </h1>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Temporibus, veritatis!
            </p>
         </div>
         <div className="flex justify-center">
            <input
               type="text"
               name=""
               id=""
               placeholder="cari kegiatan"
               className="input input-bordered w-full max-w-xs"
            />
         </div>

         <div className="max-w-[1440px] mx-auto px-[3%] mt-10 mb-10">
            <div className=" mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 ">
               <KegiatanCard id={5} />
               <KegiatanCard />
               <KegiatanCard />
               <KegiatanCard />
               <KegiatanCard />
               <KegiatanCard />
               <KegiatanCard />
               <KegiatanCard />
               <KegiatanCard />
            </div>
            <div className="join flex justify-end">
               <button className="join-item btn">1</button>
               <button className="join-item btn btn-active">2</button>
               <button className="join-item btn">3</button>
               <button className="join-item btn">4</button>
            </div>
         </div>
      </>
   );
}
