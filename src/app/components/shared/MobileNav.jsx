"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { label: "Home", slug: "hero" },
    { label: "Project", slug: "projects" },
    { label: "Play", slug: "play" },
];

const STEP_DEG = 32;
const RADIUS = 170;
const CIRCLE_SIZE = 440;
const CIRCLE_Y_OFFSET = -280;

export default function MobileNav({ activeSlug = "hero", setActiveSlug }) {
    const [isOpen, setIsOpen] = useState(false);
    const [tappedSlug, setTappedSlug] = useState(null);
    const activeIndex = Math.max(
        0,
        navLinks.findIndex((l) => l.slug === activeSlug)
    );
    const [centerIndex, setCenterIndex] = useState(activeIndex);

    useEffect(() => {
        if (isOpen) setCenterIndex(activeIndex);
    }, [isOpen, activeIndex]);

    const handleNav = (slug) => {
        if (setActiveSlug) setActiveSlug(slug);
        window.location.hash = slug;
        setIsOpen(false);
    };

    const handleTap = (i, slug) => {
        if (tappedSlug) return;
        setCenterIndex(i);
        setTappedSlug(slug);
        setTimeout(() => {
            handleNav(slug);
            setTappedSlug(null);
        }, 450);
    };

    const handlePanEnd = (e, info) => {
        const threshold = 30;
        if (Math.abs(info.offset.x) < threshold) return;
        const dir = info.offset.x > 0 ? -1 : 1;
        const newIdx = Math.max(
            0,
            Math.min(navLinks.length - 1, centerIndex + dir)
        );
        if (newIdx !== centerIndex) {
            setCenterIndex(newIdx);
            handleNav(navLinks[newIdx].slug);
        }
    };

    return (
        <div className="sm:hidden">
            {/* Backdrop catcher */}
            <AnimatePresence>
                {isOpen && (
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-40"
                        aria-label="Close menu"
                    />
                )}
            </AnimatePresence>

            {/* Morphing pill → circle (viewport-centered) */}
            <motion.div
                onClick={() => !isOpen && setIsOpen(true)}
                onPanEnd={isOpen ? handlePanEnd : undefined}
                animate={
                    isOpen
                        ? {
                            width: CIRCLE_SIZE,
                            height: CIRCLE_SIZE,
                            borderRadius: "50%",
                            x: "-50%",
                            y: CIRCLE_Y_OFFSET,
                        }
                        : {
                            width: 48,
                            height: 40,
                            borderRadius: 9999,
                            x: "-50%",
                            y: 0,
                        }
                }
                transition={{ type: "spring", stiffness: 220, damping: 28 }}
                className="fixed left-1/2 top-5 bg-[#2a2a2a] overflow-hidden z-50 touch-none select-none"
                style={{ cursor: isOpen ? "grab" : "pointer" }}
            >
                {/* Closed: burger */}
                <AnimatePresence initial={false}>
                    {!isOpen && (
                        <motion.div
                            key="burger"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <div className="flex flex-col gap-[3px]">
                                <span className="w-4 h-[1.5px] bg-white/80" />
                                <span className="w-4 h-[1.5px] bg-white/80" />
                                <span className="w-4 h-[1.5px] bg-white/80" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Open: wheel */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            key="wheel"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                            className="absolute inset-0"
                        >
                            {/* close chevron at the visible area */}
                            <motion.button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsOpen(false);
                                }}
                                className="absolute left-1/2 -translate-x-1/2 z-20"
                                style={{ top: CIRCLE_SIZE / 2 + RADIUS - 80 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label="Close"
                            >
                                <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
                                    <path
                                        d="M2 2 L9 8 L16 2"
                                        stroke="white"
                                        strokeOpacity="0.6"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </motion.button>

                            {/* Wheel items along bottom arc */}
                            {navLinks.map((link, i) => {
                                const angleDeg = 180 - (i - centerIndex) * STEP_DEG;
                                const rad = (angleDeg * Math.PI) / 180;
                                const cx = CIRCLE_SIZE / 2;
                                const cy = CIRCLE_SIZE / 2;
                                const dx = Math.sin(rad) * RADIUS;
                                const dy = -Math.cos(rad) * RADIUS;
                                const isCenter = i === centerIndex;
                                const isActive = link.slug === activeSlug;
                                return (
                                    <motion.button
                                        key={link.slug}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleTap(i, link.slug);
                                        }}
                                        animate={
                                            tappedSlug === link.slug
                                                ? {
                                                    left: cx,
                                                    top: cy + RADIUS,
                                                    opacity: 1,
                                                    scale: 1.4,
                                                }
                                                : {
                                                    left: cx + dx,
                                                    top: cy + dy,
                                                    opacity: isCenter ? 1 : 0.3,
                                                    scale: isCenter ? 1 : 0.75,
                                                }
                                        }
                                        transition={
                                            tappedSlug === link.slug
                                                ? { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
                                                : { type: "spring", stiffness: 280, damping: 26 }
                                        }
                                        className={`absolute whitespace-nowrap text-base -translate-x-1/2 -translate-y-1/2 ${isCenter && isActive
                                            ? "text-white font-semibold"
                                            : "text-white"
                                            }`}
                                    >
                                        {link.label}
                                    </motion.button>
                                );
                            })}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
