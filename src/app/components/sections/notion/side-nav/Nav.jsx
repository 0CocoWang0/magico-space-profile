"use client"
import React, { useEffect, useRef, useState } from 'react'
import SmoothLink from '@/app/components/sections/notion/side-nav/SmoothLink';


const Nav = ({ setIsOpen, isMobile }) => {

    const [openSections, setOpenSections] = React.useState({
        Home: false,
        Experience: false,
        Random: false,
    });
    React.useEffect(() => {
        if (isMobile === null) return; // avoid running on SSR
        setOpenSections({
            Home: !isMobile,
            Experience: !isMobile,
            Random: !isMobile,
        });
    }, [isMobile]);

    const toggleSection = (section) => {

        setOpenSections((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    }

    const navInfo = [
        {
            section: "Home",
            subs: ["# About me", "# Explore", "# My Tech Stack"],
            href: ["/#aboutme", "/#explore", "/#tech"]
        },

    ]


    return (
        <div>
            <div>
                {navInfo.map(({ section, subs, href }) => {
                    const contentRef = useRef(null);
                    const [height, setHeight] = useState("0px");
                    useEffect(() => {
                        if (openSections[section]) {
                            setHeight("0px")
                            setTimeout(() => {
                                const scrollHeight = contentRef.current.scrollHeight;
                                setHeight(`${scrollHeight}px`);

                            }, 10)
                        } else {
                            setHeight("0px");
                        }
                    }, [openSections[section]]);
                    return (
                        <div key={section} className='flex flex-col pb-3 md:pb-5'>
                            <div className='w-full text-left flex gap-2 items-center cursor-pointer' onClick={() => toggleSection(section)}>
                                <h1 className='text-[#727272] text-sm'>{section}</h1>
                                <span className=''>{openSections[section] ? <img src='/images/nav/arrowdown.jpg' className='h-1 rotate-0 transition-all ease-in-out duration-200' /> : <img src='/images/arrowdown.jpg' className='h-1 -rotate-90 transition-all ease-in-out duration-200' />}</span>
                            </div>

                            <div ref={contentRef} style={{
                                height: height,
                                overflow: "hidden",
                                transition: "height 0.3s ease-in-out",
                            }}>
                                <div className='flex flex-col text-[#727272] py-3 text-sm space-y-1'>
                                    {subs.map((sub, index) => (
                                        <SmoothLink key={index} href={href[index]} className='hover:text-white' onClick={() => {
                                            if (isMobile) {
                                                setIsOpen(false); // Collapse the sidebar
                                            }
                                        }}>
                                            {sub}
                                        </SmoothLink>
                                    ))}
                                </div>

                            </div>


                        </div>
                    );
                })}


                <a href="/oldpage" className='text-gray-500 text-sm'>Visit my old page</a>

            </div>
        </div>




    );
}

export default Nav