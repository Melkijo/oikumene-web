"use client";
import Image from "next/image";
import hero1 from "@/assets/hero1.png";
import hero2 from "@/assets/hero2.png";
import hero3 from "@/assets/hero3.png";
import hero4 from "@/assets/hero4.png";
import hero5 from "@/assets/hero5.png";
import welcomeIcon from "@/assets/welcomeIcon.png";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Marquee from "react-fast-marquee";
import { PedomanCard, KegiatanCard, ImageCard } from "@/components/Card";
import { useEffect, useState } from "react";
import { Kegiatan } from "@/types";
import { Spinner } from "@nextui-org/react";
import Link from "next/link";
import rame2 from "@/assets/rame2.jpg";
import rame3 from "@/assets/rame3.jpg";
import rame4 from "@/assets/rame4.jpg";
import rame5 from "@/assets/rame5.jpg";
import { SunIcon, HeartIcon, ChatBubbleIcon } from "@/components/Icons";
import dokumentasi1 from "@/assets/dokumentasi1.jpg";
import dokumentasi2 from "@/assets/dokumentasi2.jpg";
import dokumentasi3 from "@/assets/dokumentasi3.jpg";
import dokumentasi4 from "@/assets/dokumentasi4.jpg";
import dokumentasi5 from "@/assets/dokumentasi5.jpg";
import dokumentasi6 from "@/assets/dokumentasi6.jpg";
import dokumentasi7 from "@/assets/dokumentasi7.jpg";
import dokumentasi8 from "@/assets/dokumentasi8.jpg";
import dokumentasi9 from "@/assets/dokumentasi9.jpg";

export default function Home() {
  const [kegiatan, setKegiatan] = useState<Kegiatan[]>([]);

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
  if (kegiatan == null || kegiatan.length == 0) {
    return (
      <div className="h-[80vh]   flex justify-center">
        <Spinner />
      </div>
    );
  } else {
    return (
      <>
        <ParallaxProvider>
          <div className="max-w-[1440px] mx-auto px-[3%]">
            <div className="relative mb-10">
              <Image
                src={hero1}
                alt=""
                className="absolute bottom-0 w-[150px] md:w-[200px] hidden lg:block"
              />
              <Image
                src={hero2}
                alt=""
                className="absolute top-[50px] w-[150px] md:w-[200px] hidden lg:block"
              />
              <Image
                src={hero3}
                alt=""
                className="absolute right-[500px] top-[25px] hidden lg:block"
              />
              <Image
                src={hero4}
                alt=""
                className="  absolute right-0 top-[50px] w-[150px] md:w-[200px] hidden lg:block"
              />
              <Image
                src={hero5}
                alt=""
                className="absolute right-0 bottom-0 w-[150px] md:w-[200px] hidden lg:block"
              />

              <div className=" flex flex-col items-center  mx-auto py-[75px]  md:py-[225px]">
                <p className="text-[1.5rem] md:text-[2rem]  font-light mb-2 md:mb-8">
                  UNIVERSITAS MATARAM
                </p>
                <h1
                  className="text-center text-[4.5rem]  md:text-[8rem]  leading-[70px]  md:leading-[96px] mb-0 md:mb-3"
                  data-scroll
                >
                  UKM OIKUMENE
                </h1>
                <p className="text-2xl font-light text-center w-full lg:w-[800px]">
                  Hendaklah kita semua saling menolong untuk meringankan beban
                  saudara-saudari seiman yang mengalami kelemahan atau
                  kesusahan.
                </p>
              </div>
            </div>
          </div>

          <div className="  bg-black text-white py-5">
            <Marquee
              className=" overflow-y-hidden overflow-x-hidden w-80"
              speed={100}
              autoFill={true}
            >
              <div className=" flex justify-center items-center gap-2   mx-2">
                <h1 className="text-[25px] md:text-[40px] leading-none  ">
                  welcome
                </h1>
                <Image src={welcomeIcon} alt="" />
                <h1 className="text-[25px] md:text-[40px] leading-none  ">
                  shalom
                </h1>
                <Image src={welcomeIcon} alt="" />
              </div>
            </Marquee>
          </div>

          <div className="max-w-[1440px] mx-auto px-[3%] my-20">
            <h1 className="text-center lg:text-left text-[3rem] md:text-[4rem]  mb-5">
              PEDOMAN KAMI
            </h1>
            <div className="flex flex-col gap-10 lg:items-stretch sm:items-center items-stretch ">
              <div className="  flex flex-col lg:flex-row gap-10 ">
                <PedomanCard
                  color="#63E296"
                  title="Wadah Ibadah Bersama"
                  desc="menjadi tempat di mana mahasiswa dan mahasiswi Kristen Katolik dapat berkumpul untuk beribadah bersama"
                />
                <PedomanCard
                  color="#323643"
                  icon={SunIcon}
                  title="Pengembangan Rohani"
                  desc="membantu anggotanya memperdalam iman mereka, melalui katekese, diskusi keagamaan, dan kegiatan rohani lainnya."
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-10  ">
                <PedomanCard
                  color="#FA5656"
                  icon={ChatBubbleIcon}
                  title="Pelayanan dan Kepedulian Sosial"
                  desc=" tidak hanya berfokus pada aspek spiritual, tetapi juga aktif dalam kegiatan pelayanan sosial dan amal. "
                />
                <PedomanCard
                  color="#0293E0"
                  icon={HeartIcon}
                  title="Kebersamaan dan Persaudaraan"
                  desc="Ukm Oikumene mengedepankan nilai-nilai persaudaraan, kebersamaan, dan toleransi."
                />
              </div>
            </div>
          </div>

          <div className=" bg-blue-500 text-white py-10">
            <div className="max-w-[1440px] mx-auto px-[3%] flex flex-col md:flex-row items-start  pb-5 justify-between">
              <h1 className="text-center md:text-left text-[3rem] md:text-[4rem] leading-[50px] md:leading-[80px] mb-3">
                tak kenal maka tak sayang~
              </h1>
              <div className="text-center flex flex-col gap-3 md:text-left w-full md:w-[650px] ">
                <p className="line-clamp-4 pt-3">
                  Ukm Oikumene adalah sebuah organisasi keagamaan Kristen
                  Katolik yang beroperasi di lingkungan Universitas Mataram.
                  Organisasi ini didirikan dengan tujuan utama untuk menjadi
                  sebuah wadah bagi mahasiswa dan mahasiswi Kristen Katolik di
                  kampus tersebut, di mana mereka dapat bersatu dalam ibadah
                  bersama dan memperkuat ikatan spiritual mereka.
                </p>
                <Link href="/tentang" className="font-semi-bold underline">
                  Selengkapnya
                </Link>
              </div>
            </div>
            <Marquee
              className=" overflow-y-hidden overflow-x-hidden pb-5 "
              speed={100}
              autoFill={true}
            >
              <ImageCard />
              <ImageCard image={rame2} />
              <ImageCard image={rame3} />
              <ImageCard image={rame4} />
              <ImageCard image={rame5} />
            </Marquee>
          </div>

          <div className="max-w-[1440px] mx-auto px-[3%] mt-20">
            <h1 className="text-center lg:text-left text-[3rem] md:text-[4rem] leading-[50px] md:leading-[80px] mb-5">
              kegiatan kami
            </h1>
            <div className="flex justify-center items-center flex-col lg:flex-row gap-10 ">
              {kegiatan?.slice(0, 3).map((item, index) => (
                <KegiatanCard
                  id={item.id}
                  thumbnail={item.thumbnail}
                  title={item.title}
                  desc={item.desc}
                  key={index}
                />
              ))}
            </div>
          </div>

          <div className="max-w-fit mx-auto overflow-hidden mt-20 ">
            <h1 className="text-[3rem] md:text-[4rem] leading-[50px] md:leading-[80px] mb-5 text-center">
              dokumentasi asik
            </h1>
            <div className=" flex flex-col gap-5 mb-16">
              <Parallax translateX={[-20, 0]}>
                <div className="flex justify-center">
                  <ImageCard />
                  <ImageCard image={dokumentasi4} />
                  <ImageCard image={dokumentasi5} />
                  <ImageCard image={dokumentasi6} />
                  <ImageCard />
                </div>
              </Parallax>
              <Parallax translateX={[20, 0]}>
                <div className="flex justify-center">
                  <ImageCard />
                  <ImageCard image={dokumentasi1} />
                  <ImageCard image={dokumentasi2} />
                  <ImageCard image={dokumentasi3} />
                  <ImageCard />
                </div>
              </Parallax>
              <Parallax translateX={[-20, 0]}>
                <div className="flex justify-center">
                  <ImageCard />
                  <ImageCard image={dokumentasi7} />
                  <ImageCard image={dokumentasi8} />
                  <ImageCard image={dokumentasi9} />
                  <ImageCard />
                </div>
              </Parallax>
            </div>
          </div>
          <div className="px-[3%]">
            <div className="max-w-[1440px] my-10 py-5 mx-auto px-[3%] neu-box border-[3px] border-black bg-[#0293E0] text-white rounded-2xl flex flex-col items-center">
              <h1 className="text-[3rem] md:text-[4rem] leading-[50px] md:leading-[80px]  text-center">
                yuk join yuk!
              </h1>
              <p className="text-center">
                Yuk, bergabung dengan Ukm Oikumene sekarang dan jadilah bagian
                dari komunitas yang peduli, beribadah bersama, serta tumbuh
                dalam iman! Daftarkan dirimu sekarang dan mari bersama-sama
                memperkuat ikatan spiritual kita di Universitas Mataram.
              </p>
              <button className="mt-5 px-5 py-3 border border-white rounded-xl">
                Daftar
              </button>
            </div>
          </div>
        </ParallaxProvider>
      </>
    );
  }
}
