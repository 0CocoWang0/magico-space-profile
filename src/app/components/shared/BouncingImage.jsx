import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';

const defaultImages = [
    '/images/nav/profile-fun.png',
    '/images/heroImg/random.png',
    '/images/heroImg/other.jpeg',
    '/images/heroImg/linkedin_pfp.jpeg',
    '/images/heroImg/manga_pfp.jpeg',

];

const emojiList = ['✨', '🎨', '🎮', '🌍', '😎', '👻'];


const BouncingImage = ({ images = defaultImages, className = '', initialIndex = 0, size = 40, rounded = 'rounded-[10px]' }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [emojis, setEmojis] = useState([]);
    const [highlight, setHighlight] = useState(false);
    const imgRef = useRef(null);
    const emojiIdRef = useRef(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setHighlight(true);
            setTimeout(() => setHighlight(false), 3000); // rainbow border lasts 2s
        }, 10000); // every 1 minute

        return () => clearInterval(interval);
    }, []);

    const handleClick = () => {
        // Cycle image
        setCurrentIndex((prev) => (prev + 1) % images.length);

        // GSAP spring bounce effect
        gsap.fromTo(
            imgRef.current,
            { scale: 0.85 },
            { scale: 1, duration: 0.6, ease: 'elastic.out(1, 0.5)' }
        );

        // Add a new emoji
        const id = emojiIdRef.current++;
        const newEmoji = {
            id,
            emoji: emojiList[Math.floor(Math.random() * emojiList.length)],
            x: Math.random() * 30 - 15, // horizontal offset
            y: 0,
        };
        setEmojis((prev) => [...prev, newEmoji]);

        // Animate emoji
        setTimeout(() => {
            const el = document.getElementById(`emoji-${id}`);
            if (el) {
                gsap.to(el, {
                    y: 50 + Math.random() * 50,
                    opacity: 0,
                    rotation: (Math.random() - 0.5) * 60,
                    duration: 1,
                    ease: 'power1.out',
                    onComplete: () => {
                        setEmojis((prev) => prev.filter((e) => e.id !== id));
                    },
                });
            }
        }, 10);
    };

    return (
        <div className={`relative inline-block ${rounded} ${className}`}>
            <div
                aria-hidden
                className={`absolute inset-0 pointer-events-none rainbow-ring ${rounded} transition-opacity duration-500 ease-out ${highlight ? 'opacity-100' : 'opacity-0'}`}
            />
            <button className='flex justify-center'>
                <img
                    ref={imgRef}
                    src={images[currentIndex]}
                    alt="Bouncing"
                    onClick={handleClick}
                    style={{ width: size, height: size }}
                    className={`cursor-pointer border border-black object-cover ${rounded}`}
                />
            </button>
            {emojis.map(({ id, emoji, x, y }) => (
                <span
                    key={id}
                    id={`emoji-${id}`}
                    className="absolute text-xl pointer-events-none"
                    style={{
                        left: `50%`,
                        top: `50%`,
                        transform: `translate(${x}px, ${y}px)`,
                    }}
                >
                    {emoji}
                </span>
            ))}
            <style jsx>{`
        .rainbow-ring {
          animation: rainbow-ring 2s linear infinite;
        }
        @keyframes rainbow-ring {
          0%   { box-shadow: 0 0 0 2px #7bf1a8; }
          50%  { box-shadow: 0 0 0 2px #ffffff; }
          100% { box-shadow: 0 0 0 2px #7bf1a8; }
        }
      `}</style>
        </div>
    );
};


export default BouncingImage;