'use client'
import { useState, useRef, useEffect } from "react";
import "../../../globals.css";
import Nav from "./Nav";
import HeadProfile from "./HeadProfile";
import { useSwipeScroll } from "../../../hooks/useSwipeScroll";
import Exp from "./ExpLayout";
import Topbar from "./Topbar";
//import { useParams } from "next/navigation";
import HeroSection from "../hero/HeroSection";
import NotionSection from "./NotionSection";


export default function DocsLayout() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  //scroll till a threshold to go back to home
  const heroRef = useRef(null)
  const notionRef = useRef(null)

  //conditional rendering based on active slug
  const [activeSlug, setActiveSlug] = useState("hero");
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    const hash = window.location.hash?.replace("#", "");
    if (hash) {
      setActiveSlug(hash);
    } else {
      setActiveSlug("hero");
    }
    setIsReady(true);
  }, []);

  useSwipeScroll({
    onSwipeUp: () => {
      notionRef.current?.scrollIntoView({ behavior: "smooth" })
    },
    onSwipeDown: () => {
      heroRef.current?.scrollIntoView({ behavior: "smooth" })
    },
    threshold: 90, // adjust to your liking
  })

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
    <>
      {/* notion layout starts here*/}
      <div className="flex h-screen snap-start">

        <button onClick={() => setIsOpen((prev) => !prev)} className="z-200 fixed left-10 top-5 h-7 w-7 p-1 text-white rounded backdrop-blur-3xl
                bg-black/10  hover:bg-[#000] focus:bg-[#000] active:bg-[#000] active:scale-125">
          <img src="/images/nav/toggle.jpg" alt="Toggle Sidebar" className="h-full w-full object-contain" />
        </button>

        <aside
          className={`
          scrollbar-hide z-100 h-full bg-[#2A2929] overflow-auto
          transition-all duration-300 ease-in-out flex-shrink-0
        `}
          style={{
            flexBasis: isOpen ? (isMobile ? '100%' : '248px') : '0px',
          }}
        >
          <div
            className={`m-5 p-5 mt-10 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
          >
            <HeadProfile />
            <Nav setIsOpen={setIsOpen} isMobile={isMobile} setActiveSlug={setActiveSlug} activeSlug={activeSlug} />
          </div>
        </aside>

        <main
          className={`
            flex-1 bg-[#2A2929] transition-all duration-500 w-full`}
        >

          <div className="rounded-2xl bg-[#191919] overflow-auto h-full w-full">
            {isReady && (
              activeSlug === "projects" ? (
                <NotionSection id="projects" slug={activeSlug} setActiveSlug={setActiveSlug} />
              ) : (
                <>
                  {activeSlug === "hero" ? (
                    <HeroSection id="hero" />
                  ) : (
                    <>
                      <Topbar slug={activeSlug} setActiveSlug={setActiveSlug} />
                      <Exp slug={activeSlug} />
                    </>
                  )}
                </>
              )
            )}
          </div>



        </main>


      </div >
    </>
  );
}
