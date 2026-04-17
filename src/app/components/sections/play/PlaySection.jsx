"use client";
import HeadProfile from "../../shared/HeadProfile";
import PokeWindow from "../hero/PokeWindow";
import InfoLogo from "../../../../../public/images/nav/info-shape.svg";

export default function PlaySection({ activeSlug, setActiveSlug }) {
    return (
        <section
            id="play"
            className="relative min-h-[100dvh] w-full bg-[#0f0f0f] text-white overflow-y-auto"
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
                        <p className="text-[10px] text-[#979797] mb-2">Poke Me!</p>
                        <div className="h-40 w-full flex justify-center bg-[#2A2929]/20 rounded-2xl">
                            <PokeWindow />
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-[#727272] pt-4 border-t border-white/5">
                    <div className="w-5 h-5 flex justify-center items-center">
                        <InfoLogo />
                    </div>
                    <p className="text-[10px]">
                        Designed, Developed by Keming Wang V3.0.4
                    </p>
                </div>
            </div>
        </section>
    );
}
