import Image from "next/image";
import footer2 from "@/assets/footer2.png";
export default function Loading() {
   // You can add any UI inside Loading, including a Skeleton.
   return (
      <>
         <div className="w-screen h-screen flex items-center justify-center">
            <Image
               className="object-cover"
               src={footer2}
               alt=""
               width={100}
               height={100}
            />
         </div>
      </>
   );
}
