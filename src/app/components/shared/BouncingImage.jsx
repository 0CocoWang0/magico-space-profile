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


const BouncingImage = ({ images = defaultImages, className = '', initialIndex = 0 }) => {
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
        <div className={`relative inline-block ${className} ${highlight ? 'rainbow-border' : ''}`}>

            <button className='flex justify-center'>
                <img
                    ref={imgRef}
                    src={images[currentIndex]}
                    alt="Bouncing"
                    onClick={handleClick}
                    className="cursor-pointer border border-black rounded-[10px] w-[40px] h-[40px] object-cover"
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
        .rainbow-border {
          animation: rainbow 2s linear infinite;
          border-radius: 10px;
          border-width: 1px !important;
          border-style: solid;
        }
        @keyframes rainbow {
          0% {
            border-color: red;
          }
          16% {
            border-color: orange;
          }
          33% {
            border-color: yellow;
          }
          50% {
            border-color: green;
          }
          66% {
            border-color: blue;
          }
          83% {
            border-color: indigo;
          }
          100% {
            border-color: violet;
          }
        }
      `}</style>
        </div>
    );
};


export default BouncingImage;