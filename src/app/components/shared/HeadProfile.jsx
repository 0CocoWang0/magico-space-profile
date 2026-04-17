import React from 'react'
import ReactionButton from '../sections/notion/ReactionButton';
import QuoteTyper from './QuoteTyper';

const HeadProfile = () => {
    return (
        <div id="navbar">
            <div id="profile" className="items-center">
                <div className="flex flex-col gap-5">
                    <span className='inline-flex gap-2 align-middle'><img src="/images/nav/profile-fun.png" alt="Toggle Sidebar" className="h-5 rounded-sm" /><p className='text-md font-bold'>Keming Wang</p></span>
                </div>
            </div>

            <div className='h-30'>
                <QuoteTyper />
            </div>
            <div className='md:pb-10 pb-5'>
                <ReactionButton />
            </div>
        </div>
    )
}

export default HeadProfile
