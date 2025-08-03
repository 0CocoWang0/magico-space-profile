"use client";
import React from 'react';
import { pageTree } from '../../../../data/pageHierarchy';


const Nav = ({ setIsOpen, isMobile, setActiveSlug, activeSlug }) => {
    //get all top-level pages
    const sections = Object.entries(pageTree).filter(
        ([_, value]) => value.parent === null
    )
    /* sections = [
        ['home', { title: 'Home', parent: null, image: '' }],
        ['projects', { title: 'Projects', parent: null, image: '/some/image.jpg' }]
    ] */

    let current = activeSlug
    while (current && pageTree[current]?.parent) {
        current = pageTree[current].parent;
    }

    return (
        <nav className="flex flex-col gap-2 text-sm text-[#727272] align-left">
            {sections.map(([id, item]) => (
                <button
                    key={id}
                    onClick={() => {
                        if (isMobile) setIsOpen(false);
                        setActiveSlug(id);
                        window.location.hash = `#${id}`;
                    }}
                    className={`transition-all duration-300 py-1.5 px-5 rounded-md inline-flex gap-2 
                            ${current === id
                            ? "text-white bg-[#727272]/20 font-semibold"
                            : "hover:text-white"
                        }`}
                >
                    {item.image ?

                        <img src={item.image} className='w-5 h-5 object-cover rounded-sm' /> :
                        <img src="/images/icon1.png" className='w-5 h-5 object-cover' />
                    }
                    {item.title}
                </button>
            ))}
        </nav>
    );
};

export default Nav;
