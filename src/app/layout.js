import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/react"
import Cursor from "@/app/components/Cursor";
import DocsLayout from "./components/DocsLayout";
import Contact from "./components/Contact";

import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  metadataBase: new URL("https://magico-space.vercel.app/"),
  title: "You're landing in Magico Space",
  description: "She plays and learns like universe, never overfitting. Explore what Keming Wang has done across web development, neuroscience, analytics, and the arts.",
  keywords:[
    "web development", "data science", "analyst", "neuroscience", "portfolio",
    "Keming Wang", "Coco Wang", "McGill University", "creative coding", "artist", "UI design", "UX"
  ],
  authors:[{name: "Keming Wang"}],
  creator: "Keming Wang",
  charset: "UTF-8",
  openGraph:{
    title:  "You're landing in Magico Space",
    description: "She plays and learns like universe, never overfitting. Explore what Keming Wang has done across web development, neuroscience, analytics, and the arts.",
    type: "website",
    locale: "en_US",
    url:"https://magico-space.vercel.app/",
    images: [
      {
        url:"https://magico-space.vercel.app/images/og.png",
        width: 1200,
        height: 630,
        alt: "Magico Space cover"
      }
    ]
  },
  twitter:{
    card: "summary_large_image",
    title: "You're landing in Magico Space",
    description: "She plays and learns like universe, never overfitting.",
    images: ["https://magico-space.vercel.app/images/og.png"],
  },
  
  
}
export const viewport = {
  width: 'device-width',
  height: 'device-height',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 'no',
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className="cursor-none h-full ">
        <Cursor />
        <header className="absolute p-3  items-center z-50 flex w-screen">         
          <p className="text-center text-[10px] text-[#727272] w-full">presented by Keming Wang with 😎</p>          
          <div className="-translate-x-10"><Contact/></div>
        </header>
        <main className=" cursor-none scroll-smooth">
          <DocsLayout>{children}</DocsLayout>          
        </main>
      
          <Analytics />
          <SpeedInsights/>
      </body>

    </html>
  );
}
