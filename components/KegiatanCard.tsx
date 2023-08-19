import Image from "next/image";
import imageExample from '@/assets/example.jpg'

export default function KegiatanCard(){
    return(
        <div className="w-[400px] neu-box rounded-2xl overflow-hidden border-[3px] border-black">
            <Image src={imageExample}  alt="" className="w-full h-[215px] object-cover" />
            <div className="px-5 py-3">
            <h5 className="text-2xl">Natal Bersama UKM OIkumene 2023</h5>
            <p>Lorem ipsum dolor sit amet consectetur. Eget sagittis sagittis in ipsum pellentesque quam arcu enim. Ridiculus purus magna enim orci integer dui. Enim blandit odio.</p>
            </div>
            
        </div>
    )
}