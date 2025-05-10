'use client'
import { useState, useEffect } from "react";
import "@/app/globals.css";
import Nav from "@/app/components/Nav";
import HeadProfile from "./HeadProfile";


export default function DocsLayout({children}) {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  //auto-collapse on small screens
  useEffect(() => {

      const handleResize = () => {
        const mobile = window.innerWidth < 768;
        setIsMobile(mobile);
        setIsOpen(!mobile);
      };
      handleResize(); // Call it once to set the initial state
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
      
    }, []);
  
    
    
  return (
        <div className="flex h-screen">
      
          <div className="fixed left-4 top-3 md:top-1 z-101">
            <button onClick={() => setIsOpen((prev)=>!prev)} className="h-4 w-4 text-white rounded hover:bg-[#666] touch">
              <img src="/images/toggle.jpg" alt="Toggle Sidebar" className="h-full w-full object-contain" />
            </button>
          </div>
          
          <aside 
            className={` z-100 h-full duration-300 ease-in-out transition-transform w-100
              ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            bg-[#2A2929] overflow-auto -webkit-overflow-scrolling-touch`}>
              <div className="m-5 mt-20 p-5">
                <HeadProfile />
                <Nav />

              </div>
          </aside>

          <main 
            className={`
              pt-10 md:pt-6 p-3 bg-[#2A2929] transition-all duration-300 h-full
              ${!isMobile && isOpen ? "md:w-[calc(100vw-400px)]" : "-ml-98 w-screen -translate-x-2 md:-ml-100 md:w-full"}
            `}
          >
            <div className="md:p-5 rounded-2xl bg-[#191919] overflow-auto h-full">
              {children}
            </div>
          </main>
           
        </div>
      
  );
}
