'use client'
import { useState, useRef, useEffect } from "react";
import { useSwipeScroll } from "../../hooks/useSwipeScroll";
import Exp from "../sections/notion/ExpLayout";
import HeroHeader from "./HeroHeader";
import HeroSection from "../sections/hero/HeroSection";
import NotionSection from "../sections/notion/NotionSection";
import { AnimatePresence, motion } from "framer-motion";
import AboutMeSection from "../sections/aboutme/AboutMeSection";
import PlaySection from "../sections/play/PlaySection";

const TOP_LEVEL_SLUGS = ["hero", "projects", "play", "me"];

export default function DocsLayout() {
  const heroRef = useRef(null)
  const notionRef = useRef(null)

  const [activeSlug, setActiveSlug] = useState("hero");
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    function handleHashChange() {
      const hash = window.location.hash?.replace("#", "");
      setActiveSlug(hash || "hero");
    }
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    setIsReady(true);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useSwipeScroll({
    onSwipeUp: () => {
      notionRef.current?.scrollIntoView({ behavior: "smooth" })
    },
    onSwipeDown: () => {
      heroRef.current?.scrollIntoView({ behavior: "smooth" })
    },
    threshold: 90,
  })

  const isProjectDetail = !TOP_LEVEL_SLUGS.includes(activeSlug);

  const handleBack = () => {
    setActiveSlug("projects");
    window.location.hash = "projects";
  };

  return (
    <main className="h-[100dvh] w-full bg-[#0F0F0F] overflow-auto relative">
      <HeroHeader activeSlug={activeSlug} setActiveSlug={setActiveSlug} />

      {isProjectDetail && (
        <button
          onClick={handleBack}
          className="fixed top-30 left-6 z-30 flex items-center gap-2 px-3 py-2 text-sm text-white/80 rounded-full bg-[#0f0f0f] hover:bg-[#1d1c1c] border border-white/10 transition-colors"
        >
          <span>←</span>
          <span>Back</span>
        </button>
      )}

      <AnimatePresence mode="wait">
        {isReady && (
          <motion.div
            key={activeSlug}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {activeSlug === "projects" ? (
              <NotionSection id="projects" slug={activeSlug} setActiveSlug={setActiveSlug} />
            ) : activeSlug === "hero" ? (
              <HeroSection id="hero" activeSlug={activeSlug} setActiveSlug={setActiveSlug} />
            ) : activeSlug === "play" ? (
              <PlaySection id="play" activeSlug={activeSlug} setActiveSlug={setActiveSlug} />
            ) : activeSlug === "me" ? (
              <AboutMeSection id="me" setActiveSlug={setActiveSlug} />
            ) : (
              <Exp slug={activeSlug} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
