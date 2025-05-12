import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/react"
import Cursor from "@/app/components/Cursor";
import DocsLayout from "./components/DocsLayout";
import Contact from "./components/Contact";

import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "You're landing in Magico Space",
  description: "About what Keming Wang did in various areas.",
  charset: "UTF-8",
  author: "Keming Wang",
  keywords: "web development, data science, analyst, neuroscience, analytics, artist, design, portofolio, Keming Wang, McGill University",
  ogTitle: "Welcome to Keming Wang's World",
  ogType: "website",
  icons: {rel:'icon', 
    icon:'/images/favicon.png?v=2',
}
  
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
        <div className="absolute p-3  items-center z-50 flex w-screen">         
          <p className="text-center text-[10px] text-[#727272] w-full">presented by Keming Wang with 😎</p>          
          <div className="-translate-x-10"><Contact/></div>
        </div>
        <div className=" cursor-none scroll-smooth">
          <DocsLayout>{children}</DocsLayout>          
        </div>
      
          <Analytics />
          
      </body>

    </html>
  );
}
