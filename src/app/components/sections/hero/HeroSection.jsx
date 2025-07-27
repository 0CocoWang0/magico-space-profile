"use client"
import useIsMobile from "../../../hooks/useIsMobile";
import Contact from "../../shared/Contact";
import PfpStack from "../../shared/PfpStack";
import Recommend from "../hero/Recommend";
import Planet from "./Planet"


export default function HeroWithWave({ setActiveSlug }) {
    const isMobile = useIsMobile(640); // Use custom hook to determine if mobile
    const recommendItems = [
        {
            slug: "projects",
            text: "View My Projects",
            imgURL: ""
        },
        {
            slug: "aripple",
            text: "ARIPPLE",
            imgURL: "/images/projects/aripple.png"
        },


    ]

    return (
        <section id="hero" className="z-105 p-10 sm:px-20 relative h-[100dvh] bg-[#0f0f0f] text-white">
            <div className=" flex flex-col h-full relative items-center">
                <div className="sm:mb-15 sm:pt-10 z-50">
                    <PfpStack />
                    {isMobile ? (
                        <div>
                            <div className="my-5 flex justify-center"><Contact /></div>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
                <div className="flex items-center justify-center">
                    <h1 className="sm:max-w-[70vw] z-10 sm:text-5xl text-3xl font-bold">Systems thinker with an interdisciplinary background
                        in Cognitive and Computer Science. I craft creative solutions that are <span className="text-green-400">easy to follow, hard to forget.</span>
                    </h1>
                </div>
                <div className="mt-10 hidden md:block">
                    <Planet />
                </div>
                <div className="mt-10 sm:w-fit w-full absolute bottom-5 flex justify-center items-center overflow-hidden">
                    <Recommend recommendItems={recommendItems} setActiveSlug={setActiveSlug} />
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
