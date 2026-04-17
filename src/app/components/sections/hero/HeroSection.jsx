"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WiggleElement from "../../shared/WiggleElement";
import useIsMobile from "../../../hooks/useIsMobile";

const items = [
    {
        id: "pencil",
        src: "/images/revamp/apple-pencil.png",
        alt: "Apple Pencil",
        style: { top: "10%", left: "22%", width: "70px" },
        mobileStyle: { top: "55%", left: "20%", width: "35px" },
        rotate: -55,
        detail: {
            title: "Apple Pencil · Magico Pen 😎",
            subtitle: "Since 2020",
            description: "Named after a great artist Magicoco...(which is literally just me)",
            featured: [{ slug: "manga", label: "Artist" }],
        },
    },
    {
        id: "homepod",
        src: "/images/revamp/homepod.png",
        alt: "HomePod mini",
        style: { top: "42%", left: "15%", width: "150px" },
        mobileStyle: { top: "68%", left: "5%", width: "70px" },
        detail: {
            title: "HomePod mini",
            subtitle: "Daily companion",
            description: "Music & podcasts fuel the flow state.",
        },
    },
    {
        id: "keyboard",
        src: "/images/revamp/keyboard.png",
        alt: "Magic Keyboard",
        style: { top: "65%", left: "22%", width: "220px" },
        mobileStyle: { top: "75%", left: "20%", width: "130px" },
        detail: {
            title: "Magic Keyboard",
            subtitle: "Since 2025",
            description: "Where thoughts become code and words.",

        },
    },
    {
        id: "figma",
        src: "/images/revamp/figma-logo.png",
        alt: "Figma",
        style: { top: "20%", right: "22%", width: "80px" },
        mobileStyle: { top: "58%", right: "10%", width: "35px" },
        detail: {
            title: "Figma",
            subtitle: "Since 2023",
            description: "Pressed F and just created Frame 1410103974",
            featured: [{ slug: "pearl", label: "Pearl" }],
        },
    },
    {
        id: "sketch",
        src: "/images/techicon/sketch.png",
        alt: "Sketch",
        style: { top: "42%", right: "10%", width: "80px" },
        mobileStyle: { top: "70%", right: "10%", width: "45px" },
        detail: {
            title: "Sketch",
            subtitle: "Since 2023",
            description: "When i want a change of scenery from Figma... ;p",
            featured: [{ slug: "aripple", label: "Aripple" }],
        },
    },
    {
        id: "vscode",
        src: "/images/revamp/vscode-logo.png",
        alt: "VS Code",
        style: { top: "78%", left: "48%", width: "80px" },
        mobileStyle: { top: "62%", left: "45%", width: "50px" },
        detail: {
            title: "VS Code",
            subtitle: "Daily driver",
            description: "So it's really not just about my ideas, but also about the craft of building them.",
        },
    },
    {
        id: "mouse",
        src: "/images/revamp/mouse.png",
        alt: "Mouse",
        style: { top: "65%", right: "25%", width: "100px" },
        mobileStyle: { top: "70%", right: "25%", width: "50px" },
        detail: {
            title: "Magic Mouse",
            subtitle: "Every day",
            description: "Minimal desk, maximum flow.",

        },
    },
];

export default function HeroSection({ setActiveSlug }) {
    const [selected, setSelected] = useState(null);
    const [sizes, setSizes] = useState({});
    const [viewport, setViewport] = useState({ w: 0, h: 0 });
    const isMobile = useIsMobile(768);
    const sectionRef = useRef(null);

    useEffect(() => {
        const update = () => setViewport({ w: window.innerWidth, h: window.innerHeight });
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const getItemStyle = (item) => (isMobile && item.mobileStyle ? item.mobileStyle : item.style);

    const getCenterOffset = (item) => {
        if (!viewport.w) return { x: 0, y: 0 };
        const style = getItemStyle(item);
        const widthPx = parseFloat(getWidth(item));
        const topPx = (parseFloat(style.top) / 100) * viewport.h;
        const leftPx = style.left
            ? (parseFloat(style.left) / 100) * viewport.w
            : viewport.w - (parseFloat(style.right) / 100) * viewport.w - widthPx;
        return {
            x: viewport.w / 2 - leftPx - widthPx / 2,
            y: viewport.h / 2 - topPx - widthPx / 2,
        };
    };

    const getWidth = (item) => {
        const w = sizes[item.id];
        return w !== undefined ? `${w}px` : getItemStyle(item).width;
    };

    const handleResizeStart = (e, item) => {
        e.stopPropagation();
        const btn = e.currentTarget.closest("button");
        if (!btn) return;
        const rect = btn.getBoundingClientRect();
        const centerX = (rect.left + rect.right) / 2;
        const centerY = (rect.top + rect.bottom) / 2;
        const dx0 = e.clientX - centerX;
        const dy0 = e.clientY - centerY;
        const startDist = Math.hypot(dx0, dy0) || 1;
        const dirNormX = dx0 / startDist;
        const dirNormY = dy0 / startDist;
        const startWidth = parseFloat(getWidth(item));

        const onMove = (ev) => {
            const projection =
                (ev.clientX - centerX) * dirNormX + (ev.clientY - centerY) * dirNormY;
            const scale = projection / startDist;
            const newWidth = Math.max(20, Math.min(600, startWidth * scale));
            setSizes((prev) => ({ ...prev, [item.id]: newWidth }));
        };

        const onUp = () => {
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("pointerup", onUp);
        };

        window.addEventListener("pointermove", onMove);
        window.addEventListener("pointerup", onUp);
    };

    const handleNav = (slug) => {
        setSelected(null);
        if (setActiveSlug) setActiveSlug(slug);
        window.location.hash = slug;
    };

    return (
        <section
            id="hero"
            ref={sectionRef}
            className="relative h-[100dvh] w-full overflow-hidden bg-[#0f0f0f] text-white"
            onClick={(e) => {
                if (!e.target.closest("button")) setSelected(null);
            }}
        >
            {/* Large signature */}
            <div className="absolute inset-0 flex flex-col items-center justify-start pt-[18%] sm:justify-center sm:pt-0 pointer-events-none">
                <div>
                    <WiggleElement className="pointer-events-auto" intensity={0.25}>
                        <motion.img
                            src="/images/revamp/signature.png"
                            alt="Keming Wang signature"
                            draggable={false}
                            initial={{ opacity: 0, filter: "blur(30px)", scale: 1.1 }}
                            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="w-[180vw] max-w-none md:w-[min(90vw,1100px)] h-auto select-none"
                        />
                    </WiggleElement>
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(20px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                        className="absolute top-[45%] sm:top-[60%] left-1/2 -translate-x-1/2 text-white text-sm flex flex-col justify-center text-center space-y-1"
                    >
                        <p>Designer</p>
                        <p>Engineer</p>
                        <p>Product</p>
                        <p>Artist</p>
                    </motion.div>
                </div>
            </div>

            {/* Scattered draggable items */}
            {viewport.w > 0 &&
                items.map((item, index) => {
                    const isSelected = selected?.id === item.id;
                    const offset = getCenterOffset(item);
                    return (
                        <motion.button
                            key={item.id}
                            drag
                            dragMomentum={false}
                            dragElastic={0}
                            onDragStart={() => setSelected(item)}
                            whileDrag={{ zIndex: 40, cursor: "grabbing" }}
                            whileHover={isSelected ? undefined : { scale: 1.05 }}
                            onClick={(e) => {
                                if (e.detail === 0) return;
                                setSelected(item);
                            }}
                            initial={{ x: offset.x, y: offset.y, scale: 0.3, opacity: 0 }}
                            animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                            transition={{
                                delay: 0.9 + index * 0.08,
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            style={{ ...getItemStyle(item), width: getWidth(item), rotate: item.rotate ?? 0 }}
                            className="absolute z-10 cursor-grab active:cursor-grabbing"
                        >
                            <WiggleElement className="w-full">
                                {item.src ? (
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        draggable={false}
                                        className="w-full h-auto object-contain select-none pointer-events-none"
                                    />
                                ) : (
                                    <span
                                        className="flex items-center justify-center text-4xl pointer-events-none w-full aspect-square"
                                    >
                                        {item.emoji}
                                    </span>
                                )}
                            </WiggleElement>

                            {/* Figma-style selection frame */}
                            {isSelected && (
                                <div className="absolute inset-0 border border-[#0d99ff] pointer-events-none">
                                    <span
                                        onPointerDown={(e) => handleResizeStart(e, item)}
                                        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-white border border-[#0d99ff] pointer-events-auto cursor-nwse-resize"
                                    />
                                    <span
                                        onPointerDown={(e) => handleResizeStart(e, item)}
                                        className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-white border border-[#0d99ff] pointer-events-auto cursor-nesw-resize"
                                    />
                                    <span
                                        onPointerDown={(e) => handleResizeStart(e, item)}
                                        className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-[8px] h-[8px] bg-white border border-[#0d99ff] pointer-events-auto cursor-nesw-resize"
                                    />
                                    <span
                                        onPointerDown={(e) => handleResizeStart(e, item)}
                                        className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[8px] h-[8px] bg-white border border-[#0d99ff] pointer-events-auto cursor-nwse-resize"
                                    />
                                </div>
                            )}
                        </motion.button>
                    );
                })}

            {/* Bottom-right detail card */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        key={selected.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-6 right-6 z-30 w-[280px] rounded-2xl bg-[#1a1a1a]/90 backdrop-blur-md p-5 border border-white/10"
                    >
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <div className="text-lg font-semibold">{selected.detail.title}</div>
                                <div className="text-xs text-white/60">{selected.detail.subtitle}</div>
                            </div>
                            {selected.src && (
                                <img
                                    src={selected.src}
                                    alt={selected.alt}
                                    className="w-10 h-10 object-contain"
                                    draggable={false}
                                />
                            )}
                        </div>
                        <p className="text-sm text-white/80 mb-4">{selected.detail.description}</p>
                        {selected.detail.featured?.length > 0 && (
                            <>
                                <div className="text-[10px] uppercase tracking-wider text-white/50 mb-1">
                                    Featured in
                                </div>
                                <div className="space-y-1.5">
                                    {selected.detail.featured.map((f) => (
                                        <button
                                            key={f.slug}
                                            onClick={() => handleNav(f.slug)}
                                            className="flex w-full items-center justify-between rounded-lg bg-blue-500/10 px-3 py-2 text-sm text-blue-400 hover:bg-blue-500/20 transition-colors"
                                        >
                                            <span>{f.label}</span>
                                            <span>→</span>
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
