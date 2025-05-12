"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState, useRef} from "react";

const Cursor = () => {
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    //use a blob
    const blobRef = useRef(null);

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
        
        //instead of a cursor trial, use a blob
        const blob = blobRef.current;
        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animate = () => {
            currentX += (mouseX - currentX) * 0.1;
            currentY += (mouseY - currentY) * 0.1;

            blob.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

            requestAnimationFrame(animate);
        };
        document.addEventListener("mousemove", handleMouseMove);
        animate();

        
        window.addEventListener("mousemove", moveCursor);
        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, [x, y]);



    if (isTouchDevice) {
        return null;
    }
 

    return (
        <>
            <motion.div
                className="fixed top -left-1 z-900 w-4 h-4 bg-purple-300 rounded-full pointer-events-none mix-blend-difference"
                style={{
                    translateX: springX,
                    translateY: springY,
                }}
            />
            {/*
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
            
            */}
            <div
                ref={blobRef}
                className="fixed -top-20 -left-20 w-60 h-60 opacity-15 z-900 bg-purple-300 pointer-events-none rounded-full blur-3xl"
                style={{
                    translateX: springX,
                    translateY: springY,
                }}
            
            />
        </>

    );
}

export default Cursor