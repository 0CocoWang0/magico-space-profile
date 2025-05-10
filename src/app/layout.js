import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/react"
import Cursor from "@/app/components/Cursor";
import DocsLayout from "./components/DocsLayout";
import Contact from "./components/Contact";

export const metadata = {
  title: "You're landing in Magico Space",
  description: "About what Keming Wang did in various areas.",
  charset: "UTF-8",
  author: "Keming Wang",
  keywords: "web development, data science, analyst, neuroscience, analytics, artist, design, portofolio, Keming Wang, McGill University",
  ogTitle: "Welcome to Keming Wang's World",
  ogType: "website",
  icons: [{rel:'icon', 
  url:'/images/favicon-v2.ico'}]
  
}
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 'no',
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="cursor-none h-full ">
        <Cursor />
        <div className="absolute pt-3 md:pt-1 items-center z-50 flex w-screen">         
          <p className="text-center text-[10px] text-[#727272] w-full">presented by Keming Wang</p>          
          <div className="-translate-x-10"><Contact/></div>
        </div>
        <div className="flex h-screen cursor-none scroll-smooth">
          <DocsLayout>{children}</DocsLayout>
          

        </div>
      
          <Analytics />
          
      </body>

    </html>
  );
}
