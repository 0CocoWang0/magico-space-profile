"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const FloatingWrapper = ({
    children,
    className = "",
    floatSpeed = 1, // default speed multiplier (1 = normal, 2 = twice as fast, 0.5 = slower)
}) => {
    const outerRef = useRef(null);
    const innerRef = useRef(null);

    const mouseX = useRef(0);
    const targetX = useRef(0);
    const floatAngle = useRef(0);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        if (typeof window === "undefined") return;

        setWindowWidth(window.innerWidth);
        mouseX.current = window.innerWidth / 2;
        targetX.current = window.innerWidth / 2;

        const handleMouseMove = (e) => {
            targetX.current = e.clientX;
        };
        window.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
            mouseX.current += (targetX.current - mouseX.current) * 0.1;

            let driftX = 0;
            if (windowWidth > 0) {
                const normX = (mouseX.current / windowWidth) * 2 - 1;
                driftX = -normX * 15;
            }

            floatAngle.current += 0.02 * floatSpeed;
            const floatY = Math.sin(floatAngle.current) * 10;

            gsap.to(innerRef.current, {
                x: driftX,
                y: floatY,
                duration: 0.3,
                ease: "power1.out",
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [windowWidth, floatSpeed]);

    return (
        <div
            ref={outerRef}
            className={`relative w-full h-full ${className}`}
        >
            <div
                ref={innerRef}
                className="absolute top-0 left-0 w-full h-full"
            >
                {children}
            </div>
        </div>
    );
};

export default FloatingWrapper;
