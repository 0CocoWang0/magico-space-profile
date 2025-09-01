import React, { useRef } from 'react';
import clsx from 'clsx';
import { gsap } from 'gsap';

const FancyButton = ({
    icon: Icon,
    label,
    onClick,
    defaultColour = 'bg-transparent',
    active = false,
}) => {
    const btnRef = useRef(null);
    const hasIcon = !!Icon;
    const hasLabel = !!label;

    const handleClick = (e) => {
        onClick && onClick(e);

        // GSAP spring bounce effect
        gsap.fromTo(
            btnRef.current,
            { scale: 0.4 },
            {
                scale: 1,
                duration: 0.6,
                ease: "elastic.out(1, 0.5)",
            }
        );
    };

    return (
        <button
            ref={btnRef}
            onClick={handleClick}
            className={clsx(
                'transition-transform rounded-xl inline-flex items-center justify-center gap-2 hover:scale-105',
                'text-sm',
                active
                    ? 'text-[#d7d7d7] bg-[#2A2929]/80 backdrop-blur-lg'
                    : clsx(defaultColour, 'text-[#727272]'),
                (hasLabel || hasIcon) && 'p-1',
                hasLabel && 'px-5 py-2',
                !active && 'hover:text-[#d7d7d7] hover:bg-[#2A2929]/80',
                'focus:outline-none focus:scale-95', // shrink on focus
                !active && 'active:text-[#d7d7d7] active:bg-[#2A2929]/80'
            )}
        >
            {hasIcon && (
                <div className="w-5 h-5 flex items-center justify-center">
                    <Icon />
                </div>
            )}
            {hasLabel && <p>{label}</p>}
        </button>
    );
};

export default FancyButton;