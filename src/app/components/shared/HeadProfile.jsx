import React from 'react'
import ReactionButton from '../sections/notion/ReactionButton';
import QuoteTyper from './QuoteTyper';
import BouncingImage from './BouncingImage';

const HeadProfile = () => {
    return (
        <div id="navbar">
            <div id="profile" className="items-center">
                <div className="flex flex-col gap-5">
                    <span className='inline-flex gap-3 items-center'>
                        <BouncingImage size={160} rounded="rounded-2xl" />
                        <img src="/images/revamp/signature-w-chinese.png" alt="Keming Wang" className="h-40 w-auto" draggable={false} />
                    </span>
                </div>
            </div>

            <div className='h-30 sm:h-auto'>
                <QuoteTyper />
            </div>
            <div className=''>
                <ReactionButton />
            </div>
        </div>
    )
}

export default HeadProfile
