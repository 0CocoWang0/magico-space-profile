"use client"
import useIsMobile from "../../../hooks/useIsMobile";
import Contact from "../../shared/Contact";
import PfpStack from "../../shared/PfpStack";
import Recommend from "../hero/Recommend";
import PokeWindow from "./PokeWindow"
import FloatingWrapper from "../../shared/FloatingWrapper"


export default function HeroWithWave({ setActiveSlug }) {
    const isMobile = useIsMobile(640); // Use custom hook to determine if mobile
    const recommendItems = [
        {
            slug: "projects",
            text: "View My Projects",
            imgURL: "/images/nav/goout.png"
        },
        {
            slug: "pearl",
            text: "PEARL",
            imgURL: "/images/projects/pearl.png"
        },
        {
            slug: "nsd",
            text: "NATURAL SCENES DATASET",
            imgURL: "/images/projects/nsd.png"
        },
        {
            slug: "manga",
            text: "ARTIST",
            imgURL: "/images/projects/manga.png"
        },



    ]

    return (
        <section id="hero" className="z-105 relative h-[100dvh] bg-[#0f0f0f] text-white">
            <div className=" flex flex-col h-full relative items-center">
                <div className="sm:mb-15 pt-1 sm:pt-10 z-50">
                    <PfpStack />
                    {isMobile ? (
                        <div>
                            <div className="mt-5 flex justify-center"><Contact /></div>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>

                <div className="w-full h-1/3 sm:px-10">
                    <FloatingWrapper floatSpeed={0.3}>
                        {/* For medium and larger screens */}
                        <img
                            className="w-full h-full object-contain hidden lg:block"
                            src="/images/heroImg/bigname.png"
                            alt="Hero Large"
                            draggable={false}
                        />

                        {/* For small and medium screens */}
                        <img
                            className="w-full h-full object-cover block lg:hidden"
                            src="/images/heroImg/bigname2.png"
                            alt="Hero Small"
                            draggable={false}
                        />
                    </FloatingWrapper>
                </div>
                <div className="px-5 flex flex-col items-center justify-center md:w-[45vw]">
                    <div className="w-full flex justify-start items-center text-center gap-2 sm:gap-5 text-sm sm:mb-10 mb-2.5">
                        <div className="rounded-2xl bg-green-400 text-black px-5 py-1">Systems Thinker</div>
                        <div className="rounded-2xl bg-[#1d1c1c] text-white px-5 py-1">Web Dev</div>
                        <div className="rounded-2xl bg-[#1d1c1c] text-white px-5 py-1">Product Designer</div>
                        <div className="rounded-2xl bg-[#1d1c1c] text-white h-full items-center flex px-5 py-1">Artist</div>

                    </div>

                    <div className="w-full">
                        <h1 className="sm:text-2xl text-lg"> I craft solutions that are <span className="decoration-green-400 underline decoration-dashed"> easy to follow, hard to forget.</span></h1>
                    </div>

                    <div className="grid w-full grid-cols-3 gap-10 mt-2.5 sm:mt-10">
                        <div className="col-span-3 md:col-span-2">
                            <Recommend recommendItems={recommendItems} setActiveSlug={setActiveSlug} />
                        </div>
                        <div className="hidden md:flex md:flex-col md:col-span-1">
                            <p className="text-[10px] text-[#979797] mb-2">Poke Me!</p>
                            <div className="h-full w-full flex justify-center bg-[#2A2929]/20 rounded-2xl">
                                <PokeWindow />
                            </div>
                        </div>

                    </div>

                </div>


                {/* 
            
                    <svg
                        className="absolute bottom-0 left-0 w-full h-[200px] z-0"
                        viewBox="0 0 1000 400"
                        preserveAspectRatio="none"
                    >
                        <path ref={pathRef} fill="#2A2929" d="" />
                    </svg>
                */}
            </div>
        </section>
    )
}
