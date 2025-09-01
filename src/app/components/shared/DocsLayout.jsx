'use client'
import { useState, useRef, useEffect } from "react";
import Nav from "./Nav";
import HeadProfile from "./HeadProfile";
import { useSwipeScroll } from "../../hooks/useSwipeScroll";
import Exp from "../sections/notion/ExpLayout";
import Topbar from "./Topbar";
import HeroSection from "../sections/hero/HeroSection";
import NotionSection from "../sections/notion/NotionSection";
import { AnimatePresence, motion } from "framer-motion";
import InfoLogo from "../../../../public/images/nav/info-shape.svg"
import SideBar from "../../../../public/images/nav/sidebar-shape.svg"
import AboutMeSection from "../sections/aboutme/AboutMeSection";
import PfpStack from "../shared/PfpStack"

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
    function handleHashChange() {
      const hash = window.location.hash?.replace("#", "");
      setActiveSlug(hash || "hero");
    }
    // run on mount to set initial slug
    handleHashChange();
    // Listen to hash changes (back/forward navigation)
    window.addEventListener("hashchange", handleHashChange);
    setIsReady(true);
    // Cleanup listener on unmount
    return () => window.removeEventListener("hashchange", handleHashChange);
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
      console.log("isMobile", isMobile);
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
      <div className="flex h-[100dvh] relative">

        <button onClick={() => setIsOpen((prev) => !prev)}
          className={`z-200 absolute top-2 h-7 w-7 p-1 text-[#727272] rounded transition-all duration-300
                hover:bg-[#979797]/20 focus:bg-[#979797]/20 hover:scale-105 active:scale-105
                 ${isOpen ? (isMobile ? "right-4" : "left-[210px]") : "left-2"}`}
        >
          <SideBar />
        </button>
        <button className="absolute bottom-2 left-5 flex items-center">
          <div className="w-6 h-6 text-[#727272] flex justify-center items-center">
            <InfoLogo />
          </div>
          <p className="text-[10px] text-[#727272] whitespace-nowrap ml-1">
            Designed, Developed by Keming Wang V3.0.4
          </p>
        </button>

        <aside
          className={`
          relative rounded-l-2xl scrollbar-hide z-100 h-full bg-gray-dark overflow-auto
          transition-all duration-300 ease-in-out flex-shrink-0
        `}
          style={{
            flexBasis: isOpen ? (isMobile ? '100%' : '248px') : '0px',
          }}
        >
          <div
            className={`h-full flex flex-col gap-10 px-5 pt-3 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
          >
            <HeadProfile setIsOpen={setIsOpen} isMobile={isMobile} setActiveSlug={setActiveSlug} activeSlug={activeSlug} />

            <div className="pb-10">
              <Nav setIsOpen={setIsOpen} isMobile={isMobile} setActiveSlug={setActiveSlug} activeSlug={activeSlug} />
            </div>
            {/* {isMobile ? (
              // Mobile: both icon and text always visible, no animation
              <button className="absolute right-5 bottom-5 flex items-center">
                <div className="w-6 h-6 text-[#727272] flex justify-center items-center">
                  <InfoLogo />
                </div>
                <p className="text-[10px] text-[#727272] whitespace-nowrap ml-1">
                  Designed, Developed by Keming Wang V3.0.2
                </p>
              </button>
            ) : (
              // Desktop: hover reveal with animation
              <button className="group absolute right-5 bottom-5 overflow-hidden flex items-center">
                <div className="w-6 h-6 text-[#727272] group-hover:text-white flex justify-center items-center transition-transform duration-1000 group-hover:translate-x-[-4px]">
                  <InfoLogo />
                </div>
                <p className="text-[10px] text-white whitespace-nowrap opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-[300px] transition-all duration-800 ml-1">
                  Designed, Developed by Keming Wang V3.0.2
                </p>
              </button>
            )} */}
          </div>

        </aside>

        <main
          className={`
          flex-1 bg-[#0F0F0F] transition-all duration-500 h-full w-full overflow-auto rounded-t-xl`}
        >


          <div className="rounded-t-xl w-full relative">
            {activeSlug !== "hero" && (
              <Topbar slug={activeSlug} setActiveSlug={setActiveSlug} isOpen={isOpen} />
            )}
            <AnimatePresence mode="wait">
              {isReady && (
                <motion.div
                  key={activeSlug}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opactiy: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >

                  {activeSlug === "projects" ? (
                    <NotionSection id="projects" slug={activeSlug} setActiveSlug={setActiveSlug} />
                  ) : activeSlug === "hero" ? (
                    <HeroSection id="hero" setActiveSlug={setActiveSlug} />
                  ) : activeSlug === "me" ? (
                    <AboutMeSection id="me" setActiveSlug={setActiveSlug} />
                  ) : (
                    <Exp slug={activeSlug} />
                  )}

                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </main>


      </div >
    </>
  );
}
