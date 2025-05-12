import WiggleElement from "@/app/components/WiggleElement";
import Techstack from "./components/Techstack";
import Cards from "./components/Cards";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 'no',
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
  "🌌 Anything about Universe"
]

export default function Home() {
  return (
    <div className="p-10 md:px-[15%] pt-10">
      <WiggleElement>
        <p className="opacity-80 text-white text-6xl mb-10 md:text-7xl">Home / </p>
      </WiggleElement>

     

      <section id="about" className="mb-20">
        <p className="pb-5 text-lg"><span className="text-[#727272] pr-2">#</span>About me</p>
        <p className="text-[#727272] text-sm mb-5">Keming Wang, Coco, Magico, CocoK.末笙......All is me, but only 1% of me.</p>
        <div className="z-50 flex-wrap flex gap-2 space-y-2 justify-left">
          {aboutme.map((text, index) => (
              <WiggleElement key= {index}>
                    <div
                        className="bg-[#2A2929] text-sm p-2 rounded-md transitiotext-white h-auto"                      
                    >
                        <span>{text}</span>             
                    </div>
              </WiggleElement>
            ))}
        </div>
       
      </section>
      

      <section id="explore" className="mb-20">
        <p className="pb-5 text-lg"><span className="text-[#727272] pr-2">#</span>Explore</p>
        <p className="text-[#727272] text-sm mb-5">Explore some of my projects done for school clubs, artists, gamers.</p>
          <Cards />
      </section>

      <section id="tech" className="mb-20">
        <p className="py-5 text-lg"><span className="text-[#727272] pr-2">#</span>My Tech Stack</p>
        <p className="text-[#727272] text-sm mb-5">Tools I always use for brainstorming, designing, and developing visualized by usage.</p>
        <div className="touch-auto">
          <Techstack />
        </div>
      
      </section>

    </div>
  );
}
