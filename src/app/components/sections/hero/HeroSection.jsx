"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import useIsMobile from "../../../hooks/useIsMobile";
import Planet from "./Planet"
import Contact from "../../shared/Contact";
import PfpStack from "../../shared/PfpStack";


export default function HeroWithWave({ setActiveSlug }) {
    const isMobile = useIsMobile(640); // Use custom hook to determine if mobile

    const pathRef = useRef(null)
    const mouseX = useRef(0)
    const targetX = useRef(0)

    useEffect(() => {
        const handleMouseMove = (e) => {
            targetX.current = e.clientX
        }

        const animate = () => {
            mouseX.current += (targetX.current - mouseX.current) * 0.1
            const mapped = (mouseX.current / window.innerWidth - 0.5) * 500

            const wavePath = `
        M0,200 
        C250,${200 + mapped} 750,${200 - mapped} 1000,200 
        L1000,400 L0,400 Z
      `

            gsap.to(pathRef.current, {
                attr: { d: wavePath },
                duration: 0.3,
                ease: "power2.out",
            })

            requestAnimationFrame(animate)
        }

        window.addEventListener("mousemove", handleMouseMove)
        animate()

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    return (
        <section id="hero" className="z-105 p-10 snap-start relative flex flex-col md:h-screen h-screen min-h-[700px] bg-[#0f0f0f] text-white py-30 justify-center">

            <div className="sm:mb-15 sticky top-5 z-50">
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
                <h1 className="sm:max-w-[70vw] z-10 sm:text-5xl md:text-center text-3xl font-bold">Systems thinker with an interdisciplinary background
                    in Cognitive and Computer Science. I craft creative solutions that are <span className="text-green-400">easy to follow, hard to forget.</span>
                </h1>
            </div>

            <div className="flex flex-col mt-5 justify-center items-center">
                <button className="group transition-all z-10 mt-5 w-fit" onClick={() => setActiveSlug("projects")}>
                    <span
                        className="text-sm inline-flex items-center gap-2 pointer-events-auto font-semibold rounded-lg p-2 text-white group-hover:underline active:underline decoration-[#91EAE4] decoration-wavy"
                    >
                        View my projects
                        <img
                            src="/images/nav/arrowdown.jpg"
                            className="h-1 -rotate-90 transform transition-transform duration-200 group-hover:translate-x-[3px]"
                        />
                    </span>
                </button>
                <Planet
                    className="sm:w-120"
                />
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

        </section>
    )
}
