// components/HeroNav.jsx
import React, { useEffect, useState } from "react";
import Contact from "@/app/components/shared/Contact.jsx";
import { motion, AnimatePresence } from "framer-motion";
import useIsMobile from "@/app/hooks/useIsMobile";

const PfpStack = () => {
    const isMobile = useIsMobile(640); // Use custom hook to determine if mobile
    const [time, setTime] = useState("");
    const [isNight, setIsNight] = useState(false);

    // Update time every second
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hour = now.getHours();
            const timeString = now.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                timeZone: "America/Toronto",
            });
            setTime(timeString);
            setIsNight(hour < 6 || hour >= 18); //Night if before 6 or after 18
        };

        updateTime(); // initial
        const interval = setInterval(updateTime, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <nav className={`hero-nav sticky gap-4 top-4 z-50 backdrop-blur-md bg-[rgba(42,41,41,0.6)] transition-all duration-300`}>
            <img
                src="/images/nav/profile-fun.png"
                alt="Profile"
                className="w-[40px] h-[40px] border-[1px] border-black rounded-[10px]"
            />
            {
                isMobile ? (
                    <p>Keming Wang</p>
                ) : (
                    <p>王可名 · Keming Wang</p>
                )
            }

            <span className="flex gap-1 items-center text-sm">
                <img src="/images/nav/pin.jpg" className="w-3 h-3" />
                <span>Montreal, CA</span>
            </span>

            <span className="flex items-center text-sm relative h-[15px] overflow-clip">
                {/* animate clock page-turn */}
                <AnimatePresence mode="wait">
                    <motion.img
                        key={isNight ? "moon" : "sun"}
                        src={isNight ? "/images/nav/moon.jpg" : "/images/nav/sun.jpg"}
                        initial={{ rotateY: 90, opacity: 0 }}
                        animate={{ rotateY: 0, opacity: 1 }}
                        exit={{ rotateY: -90, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute w-3 h-3"
                    />
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    <motion.span
                        key={time} // this makes it re-render only when the string changes
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-5 inline-block"
                    >
                        {time}
                    </motion.span>
                </AnimatePresence>
            </span>
            {
                isMobile ? (
                    <>

                    </>
                ) : (
                    <Contact />
                )
            }
        </nav>
    );
};

export default PfpStack;
