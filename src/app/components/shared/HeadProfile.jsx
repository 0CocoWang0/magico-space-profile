import React from 'react'
import ReactionButton from '../sections/notion/ReactionButton';
import HomeShape from "../../../../public/images/nav/home-shape.svg"
import LinkedinShape from "../../../../public/images/nav/linkedin-shape.svg"
import SendShape from "../../../../public/images/nav/send-shape.svg"
import GithubShape from "../../../../public/images/nav/github-shape.svg"




const HeadProfile = ({ setIsOpen, isMobile, setActiveSlug, activeSlug }) => {
    const navButtons = [
        {
            key: 'email',
            icon: <SendShape />,
            onClick: () => window.open("mailto:keming_wang@outlook.com"),
        },
        {
            key: 'linkedin',
            icon: <LinkedinShape className='w-4.5 h-4.5' />,
            onClick: () => window.open("https://www.linkedin.com/in/magicoco117/", "_blank"),
        },
        {
            key: 'github',
            icon: <GithubShape />,
            onClick: () => window.open("https://github.com/0CocoWang0", "_blank"),
        },
        {
            key: 'hero',
            icon: <HomeShape />,
            onClick: () => {
                if (isMobile) setIsOpen(false);
                setActiveSlug('hero');
                window.location.hash = "#hero";
            },
            isActive: activeSlug === 'hero',
        },
    ];
    return (
        <div id="navbar">
            <div id="profile" className="items-center">
                <div className="flex flex-col gap-5">
                    <span className='inline-flex gap-2 align-middle'><img src="/images/nav/profile-fun.png" alt="Toggle Sidebar" className="h-5 rounded-sm" /><p className='text-md font-bold'>Keming Wang</p></span>
                    <div className="flex-wrap flex w-full justify-start gap-2.5">
                        {navButtons.map(({ key, icon, onClick, isActive }) => (
                            <button
                                key={key}
                                onClick={onClick}
                                className={`flex items-center justify-center w-[60px] h-[60px] rounded-2xl hover:scale-105 transition-all duration-300 ${isActive
                                    ? "bg-[#727272]/20 text-[#D7D7D7]"
                                    : "text-[#727272] bg-[#0f0f0f] hover:text-[#D7D7D7] hover:bg-[#727272]/20"
                                    }`}
                            >
                                {icon}
                            </button>
                        ))}
                    </div>

                </div>
            </div>
            <div className='flex flex-col my-5 gap-3'>

                <p className='text-[10px] text-[#979797]'> Today's Quote</p>
                <p className='text-sm text-[#d7d7d7]'>" I could be a neuroscientist spotting commercial opportunities, a linguist building web
                    platforms, or a designer conducting data analysis." </p>
            </div>
            <div className='md:pb-10 pb-5'>
                <ReactionButton />
            </div>
        </div>
    )
}

export default HeadProfile
