"use client";
import Navbar from "@/components/Navbar";
import pedoman1 from "@/assets/pedoman1.png";
import Image from "next/image";
import imageExample from "@/assets/example.jpg";
import KegiatanCard from "@/components/KegiatanCard";
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

export default function Home() {
   return (
      <div>
         <ParallaxProvider>
            <Navbar />
            <div className="max-w-[1440px] mx-auto px-[100px]">
               <div className="relative mb-10">
                  <Image src={hero1} alt="" className="absolute bottom-0" />
                  <Image src={hero2} alt="" className="absolute top-[50px]" />
                  <Image
                     src={hero3}
                     alt=""
                     className="absolute right-[500px] top-[25px]"
                  />
                  <Image
                     src={hero4}
                     alt=""
                     className="absolute right-0 top-[50px]"
                  />
                  <Image
                     src={hero5}
                     alt=""
                     className="absolute right-0 bottom-0"
                  />
                  <Star color="#63E296" className="absolute right-0" />
                  <Star color="#6983FF" className="absolute right-[450px]" />
                  <Sun
                     color="#FFC700"
                     className="absolute right-[300px] top-[50px]"
                  />

                  <div className=" flex flex-col items-center w-[900px] mx-auto py-[225px]">
                     <p className="text-[2rem]  font-light mb-8">
                        {" "}
                        UNIVERSITAS MATARAM{" "}
                     </p>
                     <h1
                        className=" text-[8rem]  leading-[96px] mb-3"
                        data-scroll
                     >
                        UKM OIKUMENE
                     </h1>
                     <p className="text-2xl font-light text-center">
                        Hendaklah kita semua saling menolong untuk meringankan
                        beban saudara-saudari seiman yang mengalami kelemahan
                        atau kesusahan. Dengan begitu kita menaati Hukum Kasih
                        yang Kristus berikan.
                     </p>
                  </div>
                  <HeroDown className="absolute right-[50%] bottom-5" />
               </div>
            </div>
            <div className="  bg-black text-white py-5">
               <Marquee
                  className=" overflow-y-hidden overflow-x-hidden w-80"
                  speed={100}
                  autoFill={true}
               >
                  <div className=" flex justify-center items-center gap-2   mx-2">
                     <h1 className="text-[40px] leading-none  ">welcome</h1>
                     <Image src={welcomeIcon} alt="" />
                  </div>
               </Marquee>
            </div>

            <div className="max-w-[1440px] mx-auto px-[100px]">
               <h1 className="text-[4rem]  mt-20 mb-10">PEDOMAN KAMI</h1>
               <div className="flex flex-col items-center gap-10">
                  <div className="flex gap-10">
                     <div className=" rounded-[24px] flex bg-white border-[3px] border-black overflow-hidden neu-box w-[600px] gap-6 items-center ">
                        <div className="bg-[#63E296]  py-20  px-12">
                           <Image
                              src={pedoman1}
                              className="min-w-[99px]"
                              alt=""
                           />
                        </div>
                        <div>
                           <h1 className="text-[2rem]">COMMUNITY SPACE</h1>
                           <p className="pe-10">
                              Lorem ipsum dolor sit amet consectetur. At
                              faucibus egestas urna donec purus. Amet id et
                              vulputate sapien. Quisque lobortis elit est nam
                              amet. Tristique dignissim nisl semper lacus.
                              Tortor.
                           </p>
                        </div>
                     </div>
                     <div className=" rounded-[24px] flex bg-white border-[3px] border-black overflow-hidden neu-box w-[600px] gap-6 items-center ">
                        <div className="bg-[#63E296]  py-20  px-12">
                           <Image
                              src={pedoman1}
                              className="min-w-[99px]"
                              alt=""
                           />
                        </div>
                        <div>
                           <h1 className="text-[2rem]">COMMUNITY SPACE</h1>
                           <p className="pe-10">
                              Lorem ipsum dolor sit amet consectetur. At
                              faucibus egestas urna donec purus. Amet id et
                              vulputate sapien. Quisque lobortis elit est nam
                              amet. Tristique dignissim nisl semper lacus.
                              Tortor.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="flex gap-10">
                     <div className=" rounded-[24px] flex bg-white border-[3px] border-black overflow-hidden neu-box w-[600px] gap-6 items-center ">
                        <div className="bg-[#63E296]  py-20  px-12">
                           <Image
                              src={pedoman1}
                              className="min-w-[99px]"
                              alt=""
                           />
                        </div>
                        <div>
                           <h1 className="text-[2rem]">COMMUNITY SPACE</h1>
                           <p className="pe-10">
                              Lorem ipsum dolor sit amet consectetur. At
                              faucibus egestas urna donec purus. Amet id et
                              vulputate sapien. Quisque lobortis elit est nam
                              amet. Tristique dignissim nisl semper lacus.
                              Tortor.
                           </p>
                        </div>
                     </div>
                     <div className=" rounded-[24px] flex bg-white border-[3px] border-black overflow-hidden neu-box w-[600px] gap-6 items-center ">
                        <div className="bg-[#63E296]  py-20  px-12">
                           <Image
                              src={pedoman1}
                              className="min-w-[99px]"
                              alt=""
                           />
                        </div>
                        <div>
                           <h1 className="text-[2rem]">COMMUNITY SPACE</h1>
                           <p className="pe-10">
                              Lorem ipsum dolor sit amet consectetur. At
                              faucibus egestas urna donec purus. Amet id et
                              vulputate sapien. Quisque lobortis elit est nam
                              amet. Tristique dignissim nisl semper lacus.
                              Tortor.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="max-w-[1440px] mx-auto px-[100px]">
               <div className="flex items-start mt-20 justify-between">
                  <h1 className="text-[4rem]  leading-[80px] ">
                     tak kenal maka tak sayang ~
                  </h1>
                  <div className=" w-[650px] ">
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
               <Image
                  className="mx-5 w-[500px] h-[300px] object-cover neu-box rounded-3xl  border-[3px] border-black "
                  src={imageExample}
                  alt=""
               />
            </Marquee>

            <div className="max-w-[1440px] mx-auto px-[100px]">
               <h1 className="text-[4rem]  leading-[80px]">kegiatan kami</h1>
               <div className="flex gap-7">
                  <KegiatanCard />
                  <KegiatanCard />
                  <KegiatanCard />
               </div>
            </div>

            <div className="max-w-fit mx-auto overflow-hidden ">
               <h1 className="text-[4rem]  leading-[80px] text-center">
                  dokumentasi asik
               </h1>
               <div className=" flex flex-col gap-7 mb-16">
                  <Parallax translateX={[-20, 0]}>
                     <div className="flex justify-center">
                        <Image
                           className="mx-5 w-[500px] h-[300px] object-cover neu-box rounded-3xl  border-[3px] border-black "
                           src={imageExample}
                           alt=""
                        />
                        <Image
                           className="mx-5 w-[500px] h-[300px] object-cover neu-box rounded-3xl  border-[3px] border-black "
                           src={imageExample}
                           alt=""
                        />
                        <Image
                           className="mx-5 w-[500px] h-[300px] object-cover neu-box rounded-3xl  border-[3px] border-black "
                           src={imageExample}
                           alt=""
                        />
                        <Image
                           className="mx-5 w-[500px] h-[300px] object-cover neu-box rounded-3xl  border-[3px] border-black "
                           src={imageExample}
                           alt=""
                        />
                     </div>
                  </Parallax>
                  <Parallax translateX={[20, 0]}>
                     <div className="flex justify-center">
                        <Image
                           className="mx-5 w-[500px] h-[300px] object-cover neu-box rounded-3xl  border-[3px] border-black "
                           src={imageExample}
                           alt=""
                        />
                        <Image
                           className="mx-5 w-[500px] h-[300px] object-cover neu-box rounded-3xl  border-[3px] border-black "
                           src={imageExample}
                           alt=""
                        />
                        <Image
                           className="mx-5 w-[500px] h-[300px] object-cover neu-box rounded-3xl  border-[3px] border-black "
                           src={imageExample}
                           alt=""
                        />
                        <Image
                           className="mx-5 w-[500px] h-[300px] object-cover neu-box rounded-3xl  border-[3px] border-black "
                           src={imageExample}
                           alt=""
                        />
                     </div>
                  </Parallax>
                  <Parallax translateX={[-20, 0]}>
                     <div className="flex justify-center">
                        <Image
                           className="mx-5 w-[500px] h-[300px] object-cover neu-box rounded-3xl  border-[3px] border-black "
                           src={imageExample}
                           alt=""
                        />
                        <Image
                           className="mx-5 w-[500px] h-[300px] object-cover neu-box rounded-3xl  border-[3px] border-black "
                           src={imageExample}
                           alt=""
                        />
                        <Image
                           className="mx-5 w-[500px] h-[300px] object-cover neu-box rounded-3xl  border-[3px] border-black "
                           src={imageExample}
                           alt=""
                        />
                        <Image
                           className="mx-5 w-[500px] h-[300px] object-cover neu-box rounded-3xl  border-[3px] border-black "
                           src={imageExample}
                           alt=""
                        />
                     </div>
                  </Parallax>
               </div>
            </div>

            <div className="max-w-[1440px] my-10 py-5 mx-auto px-[100px] neu-box border-[3px] border-black bg-[#0293E0] text-white rounded-2xl flex flex-col items-center">
               <h1 className="text-[4rem]  leading-[80px]">yuk join yuk</h1>
               <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur. Porta nulla purus nibh
                  non volutpat justo. Scelerisque sollicitudin eu vestibulum
                  maecenas elementum varius vel enim. Viverra eu gravida semper
                  fringilla natoque quis mi. In donec bibendum faucibus
                  elementum. Ultrices vestibulum a ultricies diam tellus
                  praesent pretium sit. Ac bibendum gravida tortor euismod sed
                  in. Vel non sed eu congue in non.
               </p>
               <button className="mt-5 px-5 py-4 border border-white rounded-2xl">
                  Daftar
               </button>
            </div>

            <Footer />
         </ParallaxProvider>
      </div>
   );
}
