import "@/app/oldpage/globals.css";
import Image from "next/image";
import Cursor from "../components/Cursor";

export const metadata = {
  title: "You're landing in Magico Space",
  description: "About what Keming Wang did in various areas.",
  charset: "UTF-8",
  author: "Keming Wang",
  keywords: "web development, portofolio, Keming Wang, McGill University",
  ogTitle: "Welcome to Keming Wang's World",
  ogType: "website",
  
};
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 'no',
};

export default function RootLayout({ children }) {
  return (
      <div>
        <nav/>
        {children}
        <footer id="projects">
          <Image
            src="/images/KM_icon-white.png"
            alt="icon"
            width={58}
            height={34}></Image>
          <p>© 2025 Keming Wang. All rights reserved.</p>
          <p>Made with enthusiasm</p>
        </footer>
      </div>
  );
}
