import { useEffect, useState } from "react";
import RefreshIcon from "../../../../public/images/icon/refresh.svg";
import FancyButton from "./FancyButton";

const quotes = [
  `"I could be a neuroscientist drawing manga or a designer crunching data."`,
  `"I play and change like universe."`,
  `"💃 I'm done hiding, now I'm shining like I'm born to be 🎵"`,
];

export default function QuoteTyper() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(50); // typing speed (ms per char)
  const [showCursor, setShowCursor] = useState(true);

  // Toggle cursor blink
  useEffect(() => {
    const cursorTimer = setInterval(() => setShowCursor((prev) => !prev), 500);
    return () => clearInterval(cursorTimer);
  }, []);

  // Typing / deleting logic
  useEffect(() => {
    const fullText = quotes[quoteIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < fullText.length) {
      timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, speed);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length - 1));
      }, speed / 2);
    } else if (!isDeleting && displayedText.length === fullText.length) {
      timer = setTimeout(() => setIsDeleting(true), 60000); // wait 1 min
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, quoteIndex]);

  // Refresh: immediately start deleting
  const handleRefresh = () => {
    setIsDeleting(true);
  };

  return (
    <div className="flex flex-col my-5 gap-3">
      <div className="flex justify-between align-middle items-center">
        <p className="text-[10px] text-[#979797]">My Quotes</p>
        <FancyButton
          icon={RefreshIcon}
          label=""
          defaultColour="bg-[#0f0f0f]/80 backdrop-blur-lg"
          onClick={handleRefresh}
        />
      </div>

      <p className="text-sm text-[#d7d7d7]">
        {displayedText}
        <span
          className={`inline-block w-1 ml-1 ${
            showCursor ? "opacity-100" : "opacity-0"
          } transition-opacity`}>
          |
        </span>
      </p>
    </div>
  );
}
