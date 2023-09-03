import Image from "next/image";
import pedoman1 from "@/assets/pedoman1.png";
import imageExample from "@/assets/example.jpg";
import Link from "next/link";

export function PedomanCard(props: {
   icon?: string;
   title?: string;
   desc?: string;
   color?: string;
}) {
   return (
      <div className="basis-full max-w-[500px] lg:max-w-full lg:basis-1/2 rounded-[24px] flex flex-col lg:flex-row  bg-white border-[3px] border-black min-h-[200px] overflow-hidden neu-box  items-center ">
         <div
            style={{ backgroundColor: props.color ? props.color : "#F2F2F2" }}
            className=" lg:max-w-[300px] flex items-center justify-center h-full  w-full lg:w-fit py-7 px-10"
         >
            <Image
               src={props.icon ? props.icon : pedoman1}
               className="min-w-[99px]"
               alt=""
            />
         </div>
         <div className="py-5 px-5 text-center md:text-left">
            <h1 className="text-[1.5rem] md:text-[2rem]">
               {props.title ? props.title : "COMMUNITY SPACE"}
            </h1>
            <p className="pe-0 md:pe-10">
               {props.desc
                  ? props.desc
                  : "Lorem ipsum dolor sit amet consectetur. Eget sagittis sagittis in ipsum pellentesque quam arcu enim. Ridiculus purus magna enim orci integer dui. Enim blandit odio."}
            </p>
         </div>
      </div>
   );
}

export function KegiatanCard(props: {
   id?: string;
   title?: string;
   desc?: string;
   thumbnail?: string;
}) {
   return (
      <div className="basis-1/3 max-w-[500px]  w-full neu-box rounded-2xl overflow-hidden border-[3px] border-black">
         <Image
            src={props.thumbnail ? props.thumbnail : imageExample}
            alt=""
            width={500}
            height={500}
            className="w-full h-[215px] object-cover"
         />
         <div className="p-5 flex flex-col overflow-hidden">
            <h5 className="text-2xl">
               {props.title ? props.title : "Natal Bersama UKM OIkumene 2023"}
            </h5>
            <div className="h-[80px] ">
               <p className=" line-clamp-3">
                  {props.desc ? props.desc : "Lorem ipsum dolor sit amet c"}
               </p>
            </div>
            <Link
               href={`/kegiatan/${props.id ? props.id : "1"}`}
               className="text-blue-500 underline  w-fit mt-3"
            >
               View More
            </Link>
         </div>
      </div>
   );
}

export function ImageCard(props: {
   image?: any;
   width?: number;
   height?: number;
}) {
   const dynamicWidth = `${props.width ? props.width : 500 * (1 / 2)}px`;
   const dynamicHeight = `${props.height ? props.height : 300 * (1 / 2)}px`;
   const staticWidth = `${props.width ? props.width : 500}px`;
   const staticHeight = `${props.height ? props.height : 300}px`;

   const combinedClassNames = `mx-3 object-cover neu-box rounded-3xl border-[3px] border-black w-[${staticWidth}] h-[${staticHeight}] md:w-[${dynamicWidth}] md:h-[${dynamicHeight}]`;
   return (
      <Image
         width={props.width ? props.width : 500}
         height={props.height ? props.height : 300}
         placeholder="blur"
         className={combinedClassNames}
         src={props.image ? props.image : imageExample}
         alt=""
      />
   );
}
