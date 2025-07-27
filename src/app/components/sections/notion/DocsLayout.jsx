'use client'
import { useState, useRef, useEffect } from "react";
import "../../../globals.css";
import Nav from "./Nav";
import HeadProfile from "./HeadProfile";
import { useSwipeScroll } from "../../../hooks/useSwipeScroll";
import Exp from "./ExpLayout";
import Topbar from "./Topbar";
import HeroSection from "../hero/HeroSection";
import NotionSection from "./NotionSection";
import { useMobileViewportHeight } from "../../../hooks/useMobileViewportHeight";
import { AnimatePresence, motion } from "framer-motion";


export default function DocsLayout() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  //scroll till a threshold to go back to home
  const heroRef = useRef(null)
  const notionRef = useRef(null)


  //dynamically calculate height of phone browser
  useMobileViewportHeight()

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
          className={`z-200 absolute top-3 h-7 w-7 p-1 text-white rounded backdrop-blur-3xl transition-all duration-300
                bg-black/10  hover:bg-[#000] focus:bg-[#000] active:bg-[#000] active:scale-125
                 ${isOpen ? (isMobile ? "right-4" : "left-[210px]") : "left-2"}`}
        >
          <img src="/images/nav/toggle.jpg" alt="Toggle Sidebar" className="h-full w-full object-contain" />
        </button>

        <aside
          className={`
          rounded-l-2xl scrollbar-hide z-100 h-full bg-[#2A2929] overflow-auto
          transition-all duration-300 ease-in-out flex-shrink-0
        `}
          style={{
            flexBasis: isOpen ? (isMobile ? '100%' : '248px') : '0px',
          }}
        >
          <div
            className={`flex flex-col gap-10 px-5 pt-3 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
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

          <div className="bg-[#191919] rounded-t-xl overflow-auto h-full w-full">
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
                  ) : (
                    <>
                      {activeSlug === "hero" ? (
                        <HeroSection id="hero" setActiveSlug={setActiveSlug} />
                      ) : (
                        <>
                          <Topbar slug={activeSlug} setActiveSlug={setActiveSlug} />
                          <Exp slug={activeSlug} />
                        </>
                      )}
                    </>
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
