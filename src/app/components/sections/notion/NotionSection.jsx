import React from 'react'
import Cards from "./Cards";

const aboutme = [
    "3️⃣rd year McGill student in Honours Cognitive Science",
    "🧠 Neuroscience, Computer Science, and Linguistics",
    "📊 Data",
    "🎨 Design",
    "💻 Website",
    "🍎 Software",
    "🎮 Game",
    "🎹 Piano",
    "🌌 Anything about Universe",
];
const heroImg = "/images/heroImg/home.jpeg";

const NotionSection = () => {
    return (

        <section className="flex h-screen snap-start">
            <div className="p-5">
                <Cards />
            </div>
        </section>
    )
}

export default NotionSection
