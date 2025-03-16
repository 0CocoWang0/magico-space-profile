import "./globals.css";
import Image from "next/image";
import Cursor from "@/components/Cursor";

export const metadata = {
  title: "You're landing on Magico Space",
  description: "About what Keming Wang did in various areas.",
  charset: "UTF-8",
  author: "Keming Wang",
  keywords: "web development, portofolio, Keming Wang, McGill University",
  viewport: "width=device-width, initial-scale=1.0",
  ogTitle: "Welcome to Keming Wang's World",
  ogType: "website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="cursor-none">
        
        <nav></nav>
        {children}
        <footer id="projects">
          <Image
            src="/images/KM_icon-white.png"
            alt="icon"
            width={58}
            height={34}></Image>
          <p>© 2025 Keming Wang. All rights reserved.</p>
          <p>这很好玩了</p>
        </footer>
      </body>
    </html>
  );
}
