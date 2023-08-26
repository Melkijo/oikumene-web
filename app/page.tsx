"use client";
import Navbar from "@/components/Navbar";

import Image from "next/image";
import imageExample from "@/assets/example.jpg";

import Footer from "@/components/Footer";
import hero1 from "@/assets/hero1.png";
import hero2 from "@/assets/hero2.png";
import hero3 from "@/assets/hero3.png";
import hero4 from "@/assets/hero4.png";
import hero5 from "@/assets/hero5.png";
import welcomeIcon from "@/assets/welcomeIcon.png";
import { HeroDown, Star, Sun } from "@/components/Icons";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Marquee from "react-fast-marquee";
import { PedomanCard, KegiatanCard, ImageCard } from "@/components/Card";
export default function Home() {
   return (
      <div>
         <ParallaxProvider>
            <Navbar />
            <div className="max-w-[1440px] mx-auto px-[3%]">
               <div className="relative mb-10">
                  <Image
                     src={hero1}
                     alt=""
                     className="absolute bottom-0 w-[150px] md:w-[200px]"
                  />
                  <Image
                     src={hero2}
                     alt=""
                     className="absolute top-[50px] w-[150px] md:w-[200px]"
                  />
                  <Image
                     src={hero3}
                     alt=""
                     className="absolute right-[500px] top-[25px] hidden md:block"
                  />
                  <Image
                     src={hero4}
                     alt=""
                     className="  absolute right-0 top-[50px] w-[150px] md:w-[200px]"
                  />
                  <Image
                     src={hero5}
                     alt=""
                     className="absolute right-0 bottom-0 w-[150px] md:w-[200px]"
                  />
                  {/* <Star color="#63E296" className="absolute right-0" />
                  <Star color="#6983FF" className="absolute right-[450px]" />
                  <Sun
                     color="#FFC700"
                     className="absolute right-[300px] top-[50px]"
                  /> */}

                  <div className=" flex flex-col items-center  mx-auto py-[225px]">
                     <p className="text-[1.5rem] md:text-[2rem]  font-light mb-2 md:mb-8">
                        {" "}
                        UNIVERSITAS MATARAM{" "}
                     </p>
                     <h1
                        className="text-center text-[4.5rem]  md:text-[8rem]  leading-[70px]  md:leading-[96px] mb-0 md:mb-3"
                        data-scroll
                     >
                        UKM OIKUMENE
                     </h1>
                     <p className="text-2xl font-light text-center w-full lg:w-[800px]">
                        Hendaklah kita semua saling menolong untuk meringankan
                        beban saudara-saudari seiman yang mengalami kelemahan
                        atau kesusahan.
                     </p>
                  </div>
                  {/* <HeroDown className="absolute right-[50%] bottom-5" /> */}
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
                  </div>
               </Marquee>
            </div>

            <div className="max-w-[1440px] mx-auto px-[3%] my-20">
               <h1 className="text-center md:text-left text-[3rem] md:text-[4rem]  mb-5">
                  PEDOMAN KAMI
               </h1>
               <div className="flex flex-col gap-10">
                  <div className="  flex flex-col md:flex-row gap-10  ">
                     <PedomanCard color="#63E296" />
                     <PedomanCard color="#323643" />
                  </div>
                  <div className="flex flex-col md:flex-row gap-10 ">
                     <PedomanCard color="#FA5656" desc="Halo" />
                     <PedomanCard color="#0293E0" desc="tes" />
                  </div>
               </div>
            </div>

            <div className="max-w-[1440px] mx-auto px-[3%]">
               <div className="flex flex-col md:flex-row items-start mt-28 mb-5 justify-between">
                  <h1 className="text-center md:text-left text-[3rem] md:text-[4rem] leading-[50px] md:leading-[80px] ">
                     tak kenal maka tak sayang ~
                  </h1>
                  <div className="text-center md:text-left w-full md:w-[650px] ">
                     <p>
                        Lorem ipsum dolor sit amet consectetur. Est nibh sit ac
                        nulla vitae tellus. In in tortor porttitor vel amet
                        faucibus imperdiet. Gravida a facilisi risus pharetra
                        rhoncus volutpat jolteon....
                     </p>
                  </div>
               </div>
            </div>
            <Marquee
               className=" overflow-y-hidden overflow-x-hidden pb-10"
               speed={100}
               autoFill={true}
            >
               <ImageCard />
            </Marquee>

            <div className="max-w-[1440px] mx-auto px-[3%] mt-20">
               <h1 className="text-center md:text-left text-[3rem] md:text-[4rem] leading-[50px] md:leading-[80px] mb-5">
                  kegiatan kami
               </h1>
               <div className="flex justify-center items-center flex-col lg:flex-row gap-10 ">
                  <KegiatanCard />
                  <KegiatanCard />
                  <KegiatanCard />
               </div>
            </div>

            <div className="max-w-fit mx-auto overflow-hidden mt-20 ">
               <h1 className="text-[3rem] md:text-[4rem] leading-[50px] md:leading-[80px] mb-5 text-center">
                  dokumentasi asik
               </h1>
               <div className=" flex flex-col gap-5 mb-16">
                  <Parallax translateX={[-20, 0]}>
                     <div className="flex justify-center">
                        {[1, 2, 3, 4, 5].map((item, index) => (
                           <ImageCard key={index} />
                        ))}
                     </div>
                  </Parallax>
                  <Parallax translateX={[20, 0]}>
                     <div className="flex justify-center">
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                     </div>
                  </Parallax>
                  <Parallax translateX={[-20, 0]}>
                     <div className="flex justify-center">
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                     </div>
                  </Parallax>
               </div>
            </div>
            <div className="px-[3%]">
               <div className="max-w-[1440px] my-10 py-5 mx-auto px-[3%] neu-box border-[3px] border-black bg-[#0293E0] text-white rounded-2xl flex flex-col items-center">
                  <h1 className="text-[3rem] md:text-[4rem] leading-[50px] md:leading-[80px] mb-5 text-center">
                     yuk join yuk
                  </h1>
                  <p className="text-center">
                     Lorem ipsum dolor sit amet consectetur. Porta nulla purus
                     nibh non volutpat justo. Scelerisque sollicitudin eu
                     vestibulum maecenas elementum varius vel enim. Viverra eu
                     gravida semper fringilla natoque quis mi.
                  </p>
                  <button className="mt-5 px-5 py-4 border border-white rounded-2xl">
                     Daftar
                  </button>
               </div>
            </div>

            <Footer />
         </ParallaxProvider>
      </div>
   );
}
