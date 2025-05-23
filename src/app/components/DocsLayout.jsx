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
      
          <div className="fixed left-8 top-2 md:top-1 z-101">
            <button onClick={() => setIsOpen((prev)=>!prev)} className="h-7 w-7 p-1 text-white rounded bg-[#2A2929] hover:bg-[#000]">
              <img src="/images/toggle.jpg" alt="Toggle Sidebar" className="h-full w-full object-contain" />
            </button>
          </div>
          
          <aside 
            className={`scrollbar-hide z-100 h-full duration-300 ease-in-out transition-transform
              fixed md:static md:w-175 w-full
              ${isOpen ? 'translate-x-0' : 'w-0 -translate-x-full'}
            bg-[#2A2929] overflow-auto`}>
              <div className="m-5 mt-15 md:mt-20 p-5">
                <HeadProfile />
                <Nav setIsOpen={setIsOpen} isMobile={isMobile}/>

              </div>
          </aside>

          <main 
            className={`
              md:p-3 pt-10 md:pt-8 bg-[#2A2929] transition-all duration-500
              ${!isMobile && isOpen ? "w-full" : "md:-ml-175 w-full"}
            `}
          >
            <div className="rounded-2xl bg-[#191919] overflow-auto h-full w-full">
              {children}
            </div>
          </main>
           
        </div>
      
  );
}
