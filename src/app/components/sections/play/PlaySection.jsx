"use client";
import HeadProfile from "../../shared/HeadProfile";
import PokeWindow from "../hero/PokeWindow";
import dynamic from "next/dynamic";
import InfoLogo from "../../../../../public/images/nav/info-shape.svg";

const GitHubCalendar = dynamic(
    () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
    {
        ssr: false,
        loading: () => (
            <div className="h-[120px] flex items-center text-xs text-white/40">
                Loading commits…
            </div>
        ),
    }
);

export default function PlaySection({ activeSlug, setActiveSlug }) {
    return (
        <section
            id="play"
            className="relative min-h-[100dvh] w-full bg-[#0f0f0f] text-white overflow-hidden"
        >
            <div className="max-w-[960px] mx-auto px-6 pt-24 pb-16 flex flex-col gap-10">
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className="flex-1 min-w-0">
                        <HeadProfile
                            setIsOpen={() => { }}
                            isMobile={false}
                            setActiveSlug={setActiveSlug}
                            activeSlug={activeSlug}
                        />
                    </div>

                    <div className="md:w-[280px] md:shrink-0">
                        <p className="text-sm text-[#979797] mb-2">Poke Me!</p>
                        <div className="h-40 w-full flex justify-center bg-[#2A2929]/20 rounded-2xl">
                            <PokeWindow />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <a
                        href="https://github.com/0CocoWang0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 w-fit text-[#979797] hover:text-white transition-colors group"
                    >
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                        <p className="text-sm">GitHub Commits</p>
                        <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        >
                            <path
                                d="M2.5 7.5L7.5 2.5M7.5 2.5H3.5M7.5 2.5V6.5"
                                stroke="currentColor"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                    <div className="rounded-2xl bg-[#2A2929]/20 p-5 overflow-x-auto">
                        <GitHubCalendar
                            username="0CocoWang0"
                            colorScheme="dark"
                            theme={{
                                dark: ["#1d1c1c", "#1f3d25", "#2d6a3e", "#4aa765", "#7bf1a8"],
                            }}
                            fontSize={12}
                            blockSize={10}
                            blockMargin={3}
                            hideColorLegend
                            hideTotalCount
                        />
                    </div>
                </div>

                <div className="flex items-center gap-2 text-[#727272] pt-4 border-t border-white/5">
                    <div className="w-5 h-5 flex justify-center items-center">
                        <InfoLogo />
                    </div>
                    <p>
                        Designed, Developed by Keming Wang. Last updated April 16, 2026
                    </p>

                </div>
            </div>


        </section>
    );
}
