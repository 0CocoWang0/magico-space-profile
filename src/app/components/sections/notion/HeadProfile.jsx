import React from 'react'
import ReactionButton from './ReactionButton';
import Contact from '../../shared/Contact';


const HeadProfile = () => {
    return (
        <div id="navbar">
            <div id="profile" className="items-center">
                <div className="flex-col">
                    <span className='inline-flex gap-2 align-middle'><img src="/images/nav/profile-fun.png" alt="Toggle Sidebar" className="h-5 rounded-sm" /><p className='text-md font-bold'>Keming Wang</p></span>

                    <span className="relative top-3.5 flex size-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
                    </span>
                    <p className='pl-4 text-sm text-[#70FF64]'>Open to Connect</p>
                </div>
            </div>
            <div className='flex flex-col my-5 gap-3'>
                <p className='text-[10px] text-[#979797]'> TODAY'S QUOTE</p>
                <p className='text-sm text-[#727272]'>" I could be a neuroscientist spotting commercial opportunities, a linguist building web
                    platforms, or a designer conducting data analysis." </p>
            </div>
            <div className='md:pb-10 pb-5'>
                <ReactionButton />
            </div>

            <div className='md:pb-10 pb-5 pl-2'>
                <Contact />
            </div>
        </div>
    )
}

export default HeadProfile
