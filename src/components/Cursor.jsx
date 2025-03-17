"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const Cursor = () => {
    const [isTouchDevice, setIsTouchDevice] = useState(false);


    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const [cursorTrial, setCursorTrial] = useState([]);
    const trailCount = 10;

    const springX = useSpring(x, { stiffness: 1000, damping: 50 });
    const springY = useSpring(y, { stiffness: 1000, damping: 50 });

    useEffect(() => {
        if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
            setIsTouchDevice(true);
          }
        

        const moveCursor = (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
            setCursorTrial((prev) => [
                { x: e.clientX, y: e.clientY },
                ...prev.slice(0, trailCount - 1),
            ]);
        };

        
        window.addEventListener("mousemove", moveCursor);
        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, [x, y]);

    if (isTouchDevice) {
        return null;
    }
 

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 z-101 w-4 h-4 bg-purple-300 rounded-full trialer-events-none mix-blend-difference"
                style={{
                    translateX: springX,
                    translateY: springY,
                }}
            />
            {cursorTrial.map((trial, index) => (
                <motion.div
                    key={index}
                    className="fixed top-0 left-0 w-4 h-4 z-100 bg-purple-300 rounded-full trialer-events-none"
                    style={{
                        left: trial.x +5,
                        top: trial.y +5,
                        width: `${6 - index * 0.4}px`,
                        height: `${6 - index * 0.4}px`,
                        opacity: 1 - index / trailCount,
                        transition: "all 0.1s ease-out",
                        
                    }} 
                                
                />
            ))
            }
        </>

    );
}

export default Cursor