

 
 export default function Navbar(){

    return(
        <div className="flex items-center justify-between bg-white max-w-[1440px] mx-auto py-4 rounded-full mt-5 px-[100px] "><div className="nav-brand">
            <h3 className=" text-[2rem] ">UKM OIKUMENE</h3></div>
            
            <ul className="flex gap-[45px]">
              <li><a href="">Beranda</a></li> 
              <li><a href="">Event</a></li> 
              <li><a href="">Tentang</a></li> 
              <li><a href=""><button>Mari Join</button></a></li>  </ul></div>
    )
 }