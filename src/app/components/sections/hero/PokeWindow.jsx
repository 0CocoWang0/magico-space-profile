"use client";
import React, { useState, useRef } from 'react'
import gsap from "gsap"
import Planet from "./Planet"
import FloatingWrapper from '../../shared/FloatingWrapper';

const visuals = [
    { type: "webm", src: "/videos/flower.webm" },
    { type: "svg", src: "/images/planet3d.png" },
    { type: "component", src: <Planet /> },
    { type: "gif", src: "/images/rain.gif" },
    { type: "gif", src: "/images/morbis.gif" },
]

const PokeWindow = () => {
    const [index, setIndex] = useState(0);
    const containerRef = useRef(null);

    const handleMouseEnter = () => {
        gsap.to(containerRef.current, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
        })
    }
    const handleMouseLeave = () => {
        gsap.to(containerRef.current, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        })
    }
    //shrink -> bounce
    const handleClick = () => {
        gsap
            .timeline()
            .to(containerRef.current, {
                scale: 0.8,
                duration: 0.15,
                ease: "power2.in"
            })
            .to(containerRef.current, {
                scale: 1,
                duration: 0.4,
                ease: "elastic.out(1, 0.5)"
            })
        setIndex((prev) => (prev + 1) % visuals.length)
    }
    const currentVisual = visuals[index]

    return (
        <button className='max-h-30 w-full flex items-center justify-center rounded-2xl overflow-hidden'
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={containerRef}
        >
            {currentVisual.type === "image" || currentVisual.type === "gif" ? (
                <img src={currentVisual.src}
                    alt="Visual"
                    className='w-full h-full object-cover'
                    draggable={false}
                />
            ) : currentVisual.type === "svg" ? (
                <FloatingWrapper>
                    <img
                        src={currentVisual.src}
                        alt="SVG"
                        className='w-full h-full object-cover'
                        draggable={false}
                    />
                </FloatingWrapper>
            ) : currentVisual.type === "webm" ? (
                <video
                    src={currentVisual.src}
                    className='w-full h-full object-cover'
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ background: "transparent" }}
                />
            ) : (
                currentVisual.src
            )}
        </button>
    )
}

export default PokeWindow