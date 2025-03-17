"use client";
import Image from "next/image";
import '@/components/Navbar/Navbar.css';
import React, { useState, useEffect } from "react";
import WiggleElement from "../WiggleElement";
import {Link} from "react-scroll";


const navLinks = [
    { title: "Home", path: "home" },
    { title: "About", path: "about" },
    { title: "Projects", path: "projects" },
]

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("Home");
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    const handleScroll = () => {
        const homeSection = document.getElementById("home");
        const aboutSection = document.getElementById("about");
        const projectSection = document.getElementById("projects");

        if (window.scrollY === 0){        
            setActiveLink("Home");
        } else if (aboutSection && window.scrollY + window.innerHeight >= aboutSection.offsetTop){
            setActiveLink("About");
        } else if (projectSection && window.scrollY + window.innerHeight >= projectSection.offsetTop){
            setActiveLink("Projects");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleDropdown = () => {
        setDropdownVisible(true);
        setFadeOut(false);

        setTimeout(()=> {
            setFadeOut(true);
            setTimeout(()=> {
                setDropdownVisible(false);
            }, 500);
        }, 3000);
    }

    return (
        <div className="sticky-wrapper border-0">
            <header id="header">
                <div className="container">
                    <a href="/" id="logo" className="pull-left cursor-none">
                        <WiggleElement>
                            <Image
                                src="/images/KM_icon.png"
                                alt="icon"
                                width={58}
                                height={34}
                                ></Image>

                        </WiggleElement>
                    </a>
                    <nav>
                        <ul className="nav-menu">
                            {navLinks.map((link, index) => (
                                <WiggleElement type="button" className={`"text-white rounded-lg px-5 hover:bg-white hover:text-black cursor-none
                                ${ activeLink === link.title ? "bg-white text-black" : ""
                                }`}    
                                key={index}                            
                                >                                    
                                        <a href={link.path} className="cursor-none">
                                            <Link
                                                to={link.path}
                                                smooth={true}
                                                duration={500}  // Set duration for the scroll animation
                                                onClick={() => setActiveLink(link.title)}
                                                className="cursor-none"
                                                offset={-80}
                                            >
                                                {link.title}
                                            </Link>
                                        </a>
                                    
                                </WiggleElement>
                            ))}
                        </ul>
                    </nav>
                    <div id="contact-button" className="relative" onClick={toggleDropdown}>
                        <WiggleElement 
                            className="z-200 text-black bg-gradient-to-r from-blue-300 to-purple-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center cursor-none"
    
                        >
                            Contact me
                        </WiggleElement>
                        {dropdownVisible && (
                            <div className={`"absolute right-0 mt-2 w-48 bg-black shadow-lg rounded-lg py-2 px-3 z-100 animate-wiggle dropdown ${fadeOut ? "fade-out" : "show"}`}>
                                <span class="absolute -left-1 -top-1 flex size-3">
                                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                                    <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                                </span>
                                <p>"Hey! Why not find me at LinkedIn? :D "</p>
                            </div>
                        )}

                    </div>
                </div>

            </header>
        </div>
    );
};
export default Navbar;