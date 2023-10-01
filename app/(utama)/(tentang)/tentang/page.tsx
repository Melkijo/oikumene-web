import Image from "next/image";
import tentangImg from "/assets/tentang-img.png";
import { ImageCard, PedomanCard } from "@/components/Card";
import { ChatBubbleIcon, HeartIcon, SunIcon } from "@/components/Icons";
import UKMlocation from "/assets/location.png";
export default function Index() {
  return (
    <>
      <div className="">
        <h1 className="text-[3rem] text-center pt-10 pb-5">Yuk Kenalan!!</h1>
        <div className="flex justify-center">
          <div className="flex   px-6 flex-col  items-center max-w-[1440px]">
            <div className="flex flex-col-reverse lg:flex-row pt-5 items-center gap-6 lg:gap-14">
              <div className="basis-1/2">
                <h5 className="text-[1.5rem]">Apa itu UKM Oikumene?</h5>
                <p className="">
                  Ukm Oikumene adalah sebuah organisasi keagamaan Kristen
                  Katolik yang beroperasi di lingkungan Universitas Mataram.
                  Organisasi ini didirikan dengan tujuan utama untuk menjadi
                  sebuah wadah bagi mahasiswa dan mahasiswi Kristen Katolik di
                  kampus tersebut, di mana mereka dapat bersatu dalam ibadah
                  bersama dan memperkuat ikatan spiritual mereka. Ukm Oikumene
                  adalah komunitas mahasiswa Kristen Katolik yang aktif di
                  Universitas Mataram. Nama "Oikumene" sendiri berasal dari
                  bahasa Yunani yang berarti "seluruh dunia" atau "kesatuan umat
                  Kristen." Dengan semangat kesatuan ini, Ukm Oikumene bertujuan
                  untuk menciptakan lingkungan yang mendukung pertumbuhan
                  rohani, solidaritas, dan persaudaraan di antara anggotanya.
                </p>
              </div>
              <div className="  w-full max-w-[675px] h-auto lg:h-[400px]  overflow-y-clip neu-box rounded-3xl border-[3px] border-black">
                <Image
                  src={tentangImg}
                  alt=""
                  className=" object-center object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="flex  w-full flex-col lg:flex-row py-16 items-center gap-6 lg:gap-14">
              <div className="w-full max-w-[675px] h-[400px] overflow-y-clip neu-box rounded-3xl border-[3px] border-black">
                <Image
                  src={UKMlocation}
                  alt=""
                  className=" object-cover w-full"
                />
              </div>
              <div className=" basis-1/2">
                <h5 className="text-[1.5rem]">Kontak dan Lokasi Kami</h5>
                <ul>
                  <li>
                    Location: Sekretariat: Jl.Pemuda Blok C Gedung PKM Lt. II
                  </li>
                  <li>Number: +6281775262221</li>
                  <li>Email: ukmoikumene@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
