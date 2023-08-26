import Image from "next/image";
import pedoman1 from "@/assets/pedoman1.png";
import imageExample from "@/assets/example.jpg";

export function PedomanCard(props: {
   icon?: string;
   title?: string;
   desc?: string;
   color?: string;
}) {
   return (
      <div className=" rounded-[24px] flex  bg-white border-[3px] border-black min-h-[200px] overflow-hidden neu-box w-full md:w-[600px] gap-6 items-center ">
         <div
            style={{ backgroundColor: props.color ? props.color : "#F2F2F2" }}
            className=" flex items-center    h-full px-6  md:px-12"
         >
            <Image
               src={props.icon ? props.icon : pedoman1}
               className="min-w-[99px]"
               alt=""
            />
         </div>
         <div className="py-5 pe-5">
            <h1 className="text-[1.5rem] md:text-[2rem]">
               {props.title ? props.title : "COMMUNITY SPACE"}
            </h1>
            <p className="pe-10">
               {props.desc
                  ? props.desc
                  : "Lorem ipsum dolor sit amet consectetur. Eget sagittis sagittis in ipsum pellentesque quam arcu enim. Ridiculus purus magna enim orci integer dui. Enim blandit odio."}
            </p>
         </div>
      </div>
   );
}

export function KegiatanCard() {
   return (
      <div className="w-[450px] md:w-[385px] neu-box rounded-2xl overflow-hidden border-[3px] border-black">
         <Image
            src={imageExample}
            alt=""
            className="w-full h-[215px] object-cover"
         />
         <div className="px-5 py-3">
            <h5 className="text-2xl">Natal Bersama UKM OIkumene 2023</h5>
            <p>
               Lorem ipsum dolor sit amet consectetur. Eget sagittis sagittis in
               ipsum pellentesque quam arcu enim. Ridiculus purus magna enim
               orci integer dui. Enim blandit odio.
            </p>
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

   const combinedClassNames = `mx-3 object-cover neu-box rounded-3xl border-3 border-black w-[${staticWidth}] h-[${staticHeight}] md:w-[${dynamicWidth}] md:h-[${dynamicHeight}]`;
   return (
      <Image
         className={combinedClassNames}
         src={props.image ? props.image : imageExample}
         alt=""
      />
   );
}
