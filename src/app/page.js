import Navbar from "@/components/Navbar/Navbar";
import Showcase from "@/components/Showcase";
import About from "@/components/About";
import WiggleElement from "@/components/WiggleElement";
import Cursor from "@/components/Cursor";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 'no',
};

export default function Home() {
  return (
    <div className="cursor-none">
      
      <Cursor />
      <Navbar />
      <div id="home" className="wrapper">
        <p className="text-center text-gray-500">Hello, this is</p>
        <WiggleElement className="relative z-10">
          <p id="bigname">Keming Wang</p>
        </WiggleElement>
        <Showcase />
        <About id="about"/>
      </div>
    </div>
  );
}
