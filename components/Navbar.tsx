export default function Navbar() {
   return (
      <div className=" bg-white ">
         <div className="navbar max-w-[1440px] px-[3%] mx-auto  py-2">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M4 6h16M4 12h8m-8 6h16"
                        />
                     </svg>
                  </label>
                  <ul
                     tabIndex={0}
                     className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                     <li>
                        <a>Item 1</a>
                     </li>
                     <li>
                        <a>Parent</a>
                        <ul className="p-2">
                           <li>
                              <a>Submenu 1</a>
                           </li>
                           <li>
                              <a>Submenu 2</a>
                           </li>
                        </ul>
                     </li>
                     <li>
                        <a>Item 3</a>
                     </li>
                  </ul>
               </div>
               <h3 className=" text-[1.25rem] md:text-[2rem] ">UKM OIKUMENE</h3>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  <li>
                     <a href="/">Beranda</a>
                  </li>

                  <li>
                     <a href="/kegiatan">Event</a>
                  </li>
                  <li tabIndex={0}>
                     <details>
                        <summary>Tentang</summary>
                        <ul className="p-2">
                           <li>
                              <a>Struktur</a>
                           </li>
                           <li>
                              <a>Team</a>
                           </li>
                        </ul>
                     </details>
                  </li>
               </ul>
            </div>
            <div className="navbar-end">
               <a className="btn bg-blue-500">Mari Join</a>
            </div>
         </div>
      </div>
   );
}
