"use client";
import React, { useEffect } from 'react';

const Nav = ({ setIsOpen, isMobile, setActiveSlug, activeSlug }) => {
    const sections = [
        { label: "Home", href: "/#hero", id: "hero" },
        { label: "Projects", href: "/#projects", id: "projects" },
        //{ label: "About Me", href: "/#aboutme", id: "aboutme" },
    ];
    console.log("activeSlug", activeSlug);
    return (
        <nav className="flex flex-col gap-2 text-sm text-[#727272] align-left">
            {sections.map(({ label, href, id }) => (
                <button key={label}>
                    <a

                        href={href}
                        className={`transition-all duration-300 p-1 px-5 rounded-md flex ${activeSlug.startsWith(id) ? "text-white bg-black/20 font-semibold" : "hover:text-white"
                            }`}
                        onClick={() => {
                            if (isMobile) setIsOpen(false);
                            setActiveSlug(id);
                        }}
                    >

                        {label}
                    </a>
                </button>
            ))}
        </nav>
    );
};

export default Nav;
