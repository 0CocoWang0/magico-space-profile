"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Contact from "./Contact";
import MobileNav from "./MobileNav";

const navLinks = [
    { label: "Home", slug: "hero" },
    { label: "Project", slug: "projects" },
    { label: "Play", slug: "play" },
];

export default function HeroHeader({ activeSlug = "hero", setActiveSlug }) {
    const [time, setTime] = useState("");
    const [isNight, setIsNight] = useState(false);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeStr = now.toLocaleTimeString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
                timeZone: "America/Toronto",
            });
            setTime(timeStr);
            const torontoHour = parseInt(timeStr.slice(0, 2), 10) % 24;
            setIsNight(torontoHour < 6 || torontoHour >= 18);
        };
        updateTime();
        const id = setInterval(updateTime, 30000);
        return () => clearInterval(id);
    }, []);

    const handleNav = (slug) => {
        if (setActiveSlug) setActiveSlug(slug);
        window.location.hash = slug;
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-6 sm:px-10 text-white bg-[#0f0f0f]">
            <div className="rounded-xl px-3 py-2">
                <Contact />
            </div>

            <nav className="hidden sm:flex gap-8 text-sm">
                {navLinks.map((link) => {
                    const isActive =
                        activeSlug === link.slug ||
                        (link.slug === "projects" &&
                            !["hero", "projects", "play", "me"].includes(activeSlug));
                    return (
                        <button
                            key={link.slug}
                            onClick={() => handleNav(link.slug)}
                            className="relative transition-colors duration-300"
                        >
                            {isActive && (
                                <motion.img
                                    layoutId="nav-indicator"
                                    src="/images/revamp/selected.png"
                                    alt=""
                                    className="absolute left-1/2 -translate-x-1/2 -top-4 w-6 h-3 object-contain pointer-events-none"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                            <motion.span
                                animate={{
                                    color: isActive ? "rgb(255,255,255)" : "rgb(150,150,150)",
                                    fontWeight: isActive ? 600 : 400,
                                }}
                                transition={{ duration: 0.3 }}
                                className="inline-block"
                            >
                                {link.label}
                            </motion.span>
                        </button>
                    );
                })}
            </nav>
            <MobileNav activeSlug={activeSlug} setActiveSlug={setActiveSlug} />

            <div className="text-right text-xs sm:text-sm text-white/80 leading-tight space-y-1">
                <div className="flex items-center justify-end gap-2">
                    <span>Montreal, CA</span>
                    <img src="/images/nav/pin.jpg" alt="" className="w-3 h-3" />
                </div>
                <div className="flex items-center justify-end gap-2 relative h-[15px]">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={time}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="inline-block"
                        >
                            {time}
                        </motion.span>
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={isNight ? "moon" : "sun"}
                            src={isNight ? "/images/nav/moon.jpg" : "/images/nav/sun.jpg"}
                            alt=""
                            initial={{ rotateY: 90, opacity: 0 }}
                            animate={{ rotateY: 0, opacity: 1 }}
                            exit={{ rotateY: -90, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="w-3 h-3"
                        />
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
}
