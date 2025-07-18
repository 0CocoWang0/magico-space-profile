import Navbar from "@/app/oldpage/components/Navbar/Navbar";
import Showcase from "@/app/oldpage/components/Showcase";
import About from "@/app/oldpage/components/About";
import WiggleElement from "@/app/components/shared/WiggleElement";
import Cursor from "@/app/components/shared/Cursor";
import Link from "next/link";


export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 'no',
};

export default function old1() {
  return (
    <div className="bg-[#2A2929]">
      
      <div className="justify-center flex bg-gray-800 py-3">
        <Link href="/" className="text-blue-500 underline decoration-wavy">Back to main page</Link>
      </div>
      
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
