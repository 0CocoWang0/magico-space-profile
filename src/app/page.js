import WiggleElement from "@/app/components/shared/WiggleElement";
import Techstack from "./components/sections/notion/tech-stack/Techstack";
import Cards from "./components/sections/notion/Cards";
import DocsLayout from "./components/sections/notion/DocsLayout";
import HeroSection from "./components/sections/hero/HeroSection";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: "no",
};

const aboutme = [
  "3️⃣rd year McGill student in Honours Cognitive Science",
  "🧠 Neuroscience, Computer Science, and Linguistics",
  "📊 Data",
  "🎨 Design",
  "💻 Website",
  "🍎 Software",
  "🎮 Game",
  "🎹 Piano",
  "🌌 Anything about Universe",
];
const heroImg = "/images/heroImg/home.jpeg";

export default function Home() {
  return (
    <>
      <HeroSection id="home" />
      <DocsLayout>
        <header id="about">
          <div className="flex h-60 bg-amber-400 overflow-clip w-full object-cover">
            <img
              src={heroImg}
              className="h-full w-full bg-amber-900 object-[0px_30%] object-cover"
            />
          </div>
        </header>

        <div className="md:px-[15%] pt-10 p-6">
          <WiggleElement>
            <p className="opacity-80 text-white text-6xl mb-10 md:text-7xl">
              Home /{" "}
            </p>
          </WiggleElement>

          <section id="about" className="mb-20">
            <p className="pb-5 text-lg">
              <span className="text-[#727272] pr-2">#</span>About me
            </p>
            <p className="text-[#727272] text-sm mb-5">
              Keming Wang, Coco, Magico, CocoK.末笙......All is me, but only 1%
              of me.
            </p>
            <div className="z-50 flex-wrap flex gap-2 space-y-2 justify-left">
              {aboutme.map((text, index) => (
                <WiggleElement key={index}>
                  <div className="bg-[#2A2929] text-sm p-2 rounded-md transitiotext-white h-auto">
                    <span>{text}</span>
                  </div>
                </WiggleElement>
              ))}
            </div>

            <a
              href="/docs/experience"
              className="mt-10 group text-sm text-white inline-flex items-center justify-self-center gap-2 pointer-events-auto font-semibold rounded-lg px-2 py-2 hover:text-white cursor-pointer hover:underline decoration-[#91EAE4] decoration-wavy">
              <span className="relative mr-1 flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-sky-500"></span>
              </span>
              View my experiences
              <img
                src="/images/arrowdown.jpg"
                className="h-1 -rotate-90 transform transition-transform duration-200 group-hover:translate-x-[3px]"
              />
            </a>
          </section>

          <section id="explore" className="mb-20">
            <p className="pb-5 text-lg">
              <span className="text-[#727272] pr-2">#</span>Explore
            </p>
            <p className="text-[#727272] text-sm mb-5">
              Explore some of my projects done for school clubs, artists, and
              gamers.
            </p>
            <Cards />
          </section>

          <section id="tech" className="mb-20">
            <p className="py-5 text-lg">
              <span className="text-[#727272] pr-2">#</span>My Tech Stack
            </p>
            <p className="text-[#727272] text-sm mb-5">
              Tools I always use for brainstorming, designing, and developing
              visualized by usage.
            </p>
            <div className="touch-auto">
              <Techstack />
            </div>
          </section>
        </div>
      </DocsLayout>
    </>
  );
}
