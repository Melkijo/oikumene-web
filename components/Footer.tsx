import footer1 from "@/assets/footer1.png";
import footer2 from "@/assets/footer2.png";
import Image from "next/image";

export default function Footer() {
   return (
      <div className="bg-[#323643] py-10 text-white">
         <div className="max-w-[1440px] mx-auto px-[3%]">
            <div className="flex flex-wrap gap-10 justify-between items-center">
               <div className="flex flex-col  gap-3">
                  <div className="flex gap-5 ">
                     <Image src={footer1} alt="" width={100} height={100} />
                     <Image src={footer2} alt="" width={100} height={100} />
                  </div>

                  <p className="text-2xl  font-light">Universitas Mataram</p>
                  <h3 className="text-[3rem] leading-none">UKM OIKUMENE</h3>
               </div>
               <div className="flex flex-wrap gap-[70px]">
                  <ul className="flex flex-col gap-5">
                     <li>
                        <h5 className="text-2xl ">Navigasi</h5>{" "}
                     </li>

                     <li>
                        <a href="">Beranda</a>
                     </li>
                     <li>
                        <a href="">Kegiatan</a>
                     </li>
                     <li>
                        <a href="">Tentang</a>
                     </li>
                  </ul>
                  <ul className="flex flex-col gap-5">
                     <li>
                        <h5 className="text-2xl ">Tentang</h5>{" "}
                     </li>

                     <li>
                        <a href="">Struktur</a>
                     </li>
                     <li>
                        <a href="">Sejarah</a>
                     </li>
                     <li>
                        <a href="">Team</a>
                     </li>
                  </ul>
                  <ul className="flex flex-col gap-5">
                     <li>
                        <h5 className="text-2xl ">Sosial Media</h5>{" "}
                     </li>

                     <li>
                        <a href="">Instagram</a>
                     </li>
                     <li>
                        <a href="">Tiktok</a>
                     </li>
                     <li>
                        <a href="">Youtube</a>
                     </li>
                  </ul>
                  <ul className="flex flex-col gap-5">
                     <li>
                        <h5 className="text-2xl ">Kontak Kami</h5>{" "}
                     </li>

                     <li>
                        <a href="">ukmoikumene@gmail.com</a>
                     </li>
                     <li>
                        <a href="">Tiktok</a>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="flex flex-wrap gap-5 justify-between pt-20">
               <p>
                  <a href="">Behind the scene</a>
               </p>
               <p className="text-center">
                  © 2023 UKM Oikumene. All Rights Reserved
               </p>
            </div>
         </div>
      </div>
   );
}
