import React from 'react';
import clsx from 'clsx';

const FancyButton = ({
    icon: Icon,
    label,
    onClick,
    defaultColour = 'bg-transparent', // default Tailwind class
    active = false,
}) => {
    const hasIcon = !!Icon;
    const hasLabel = !!label;

    return (
        <button
            onClick={onClick}
            className={clsx(
                'transition-all duration-300 rounded-xl inline-flex items-center justify-center gap-2',
                'text-sm',
                active ? 'text-[#d7d7d7] bg-[#2A2929]/80 backdrop-blur-lg' : clsx(defaultColour, 'text-[#727272]'),
                (hasLabel || hasIcon) && 'p-1',
                hasLabel && 'px-5 py-2',
                !active && 'hover:text-[#d7d7d7] hover:bg-[#2A2929]/80 hover:scale-105',
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
