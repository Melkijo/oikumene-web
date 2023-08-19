
import Navbar from '@/components/Navbar'
import pedoman1 from '@/assets/pedoman1.png'
import Image from 'next/image'
import imageExample from '@/assets/example.jpg'
import KegiatanCard from '@/components/KegiatanCard'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
    <Navbar/>
    <div className='max-w-[1440px] mx-auto px-[100px]'>
        <div className=" flex flex-col items-center w-[900px] mx-auto">
            <p className='text-[2rem]  font-light mb-8'> UNIVERSITAS MATARAM </p>
            <h1 className=' text-[8rem]  leading-[96px] mb-3'>UKM OIKUMENE</h1>
            <p className='text-2xl font-light text-center'>Hendaklah kita semua saling menolong untuk meringankan beban saudara-saudari seiman yang mengalami kelemahan atau kesusahan. Dengan begitu kita menaati Hukum Kasih yang Kristus berikan.</p>
        </div>
        <div>
            <h1 className='text-[4rem]  mt-20 mb-10'>PEDOMAN KAMI</h1>
            <div className='flex flex-col items-center gap-10'>
                <div className='flex gap-10'>
                    <div className=' rounded-[24px] flex bg-white border-[3px] border-black overflow-hidden neu-box w-[600px] gap-6 items-center '>
                        <div className='bg-[#63E296]  py-20  px-12'>
                        <Image src={pedoman1}  className='min-w-[99px]' alt=""  />
                        </div>
                        <div>
                            <h1 className='text-[2rem]'>COMMUNITY SPACE</h1>
                            <p className='pe-10'>Lorem ipsum dolor sit amet consectetur. At faucibus egestas urna donec purus. Amet id et vulputate sapien. Quisque lobortis elit est nam amet. Tristique dignissim nisl semper lacus. Tortor.</p>
                        </div>
                    </div>
                    <div className=' rounded-[24px] flex bg-white border-[3px] border-black overflow-hidden neu-box w-[600px] gap-6 items-center '>
                        <div className='bg-[#63E296]  py-20  px-12'>
                        <Image src={pedoman1}  className='min-w-[99px]' alt=""  />
                        </div>
                        <div>
                            <h1 className='text-[2rem]'>COMMUNITY SPACE</h1>
                            <p className='pe-10'>Lorem ipsum dolor sit amet consectetur. At faucibus egestas urna donec purus. Amet id et vulputate sapien. Quisque lobortis elit est nam amet. Tristique dignissim nisl semper lacus. Tortor.</p>
                        </div>
                    </div>
                  
                </div>
                <div className='flex gap-10'>
                <div className=' rounded-[24px] flex bg-white border-[3px] border-black overflow-hidden neu-box w-[600px] gap-6 items-center '>
                        <div className='bg-[#63E296]  py-20  px-12'>
                        <Image src={pedoman1}  className='min-w-[99px]' alt=""  />
                        </div>
                        <div>
                            <h1 className='text-[2rem]'>COMMUNITY SPACE</h1>
                            <p className='pe-10'>Lorem ipsum dolor sit amet consectetur. At faucibus egestas urna donec purus. Amet id et vulputate sapien. Quisque lobortis elit est nam amet. Tristique dignissim nisl semper lacus. Tortor.</p>
                        </div>
                    </div>
                    <div className=' rounded-[24px] flex bg-white border-[3px] border-black overflow-hidden neu-box w-[600px] gap-6 items-center '>
                        <div className='bg-[#63E296]  py-20  px-12'>
                        <Image src={pedoman1}  className='min-w-[99px]' alt=""  />
                        </div>
                        <div>
                            <h1 className='text-[2rem]'>COMMUNITY SPACE</h1>
                            <p className='pe-10'>Lorem ipsum dolor sit amet consectetur. At faucibus egestas urna donec purus. Amet id et vulputate sapien. Quisque lobortis elit est nam amet. Tristique dignissim nisl semper lacus. Tortor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className='flex items-start mt-20 justify-between'>
                <h1 className='text-[4rem]  leading-[80px] '>tak kenal maka tak sayang ~</h1>
                <div className=' w-[650px] '>
                    <p>Lorem ipsum dolor sit amet consectetur. Est nibh sit ac nulla vitae tellus. In in tortor porttitor vel amet faucibus imperdiet. Gravida a facilisi risus pharetra rhoncus volutpat jolteon....</p>
                </div>
            </div>

            <div className='flex overflow-hidden gap-10'>
                <Image className='w-[500px] h-[300px] object-cover neu-box rounded-3xl  border-[3px] border-black ' src={imageExample} alt="" />
                <Image className='w-[500px] h-[300px] object-cover neu-box rounded-3xl  border-[3px] border-black ' src={imageExample} alt="" />
                <Image className='w-[500px] h-[300px] object-cover neu-box rounded-3xl  border-[3px] border-black ' src={imageExample} alt="" />
                <Image className='w-[500px] h-[300px] object-cover neu-box rounded-3xl  border-[3px] border-black ' src={imageExample} alt="" />
            </div>

            <div>
                <h1 className='text-[4rem]  leading-[80px]'>kegiatan kami</h1>
                <div className='flex gap-7'>
                    <KegiatanCard/>
                    <KegiatanCard/>

                    <KegiatanCard/>

                </div>
            </div>

            <div>
                <h1 className='text-[4rem]  leading-[80px] text-center'>dokumentasi asik</h1>
                <div>
                    <Image src={imageExample} alt="" />
                </div>
            </div>

            <div className='neu-box border-[3px] border-black bg-[#0293E0] text-white rounded-2xl flex flex-col items-center'>
                <h1 className='text-[4rem]  leading-[80px]'>yuk join yuk!</h1>
                <p className='w-[1000px] text-center'>Lorem ipsum dolor sit amet consectetur. Porta nulla purus nibh non volutpat justo. Scelerisque sollicitudin eu vestibulum maecenas elementum varius vel enim. Viverra eu gravida semper fringilla natoque quis mi. In donec bibendum faucibus elementum. Ultrices vestibulum a ultricies diam tellus praesent pretium sit. Ac bibendum gravida tortor euismod sed in. Vel non sed eu congue in non.</p>
                <button className='px-5 py-4 border border-white rounded-2xl'>Daftar</button>
            </div>
        </div>
    </div>


    <Footer/>
    </div>
   
  )
}
