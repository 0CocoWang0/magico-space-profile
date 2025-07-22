"use client";
import React, { useEffect } from 'react';

const Nav = ({ setIsOpen, isMobile }) => {
    const sections = [
        { label: "Home", href: "/#hero", id: "hero" },
        { label: "Projects", href: "/#projects", id: "projects" },
        //{ label: "About Me", href: "/#aboutme", id: "aboutme" },
    ];
    const active = "projects"


    return (
        <nav className="flex flex-col gap-4 text-sm text-[#727272] align-left">
            {sections.map(({ label, href, id }) => (

                <a
                    key={label}
                    href={href}
                    className={`transition-all flex ${active === id ? "text-white font-semibold" : "hover:text-white"
                        }`}
                    onClick={() => {
                        if (isMobile) setIsOpen(false);
                    }}
                >
                    <button>{label}</button>
                </a>

            ))}
        </nav>
    );
};

export default Nav;
