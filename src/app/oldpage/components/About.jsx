import React from 'react'
import Image from 'next/image'
import WiggleElement from '../../components/WiggleElement'

const About = () => {

    const aboutText = [
        "…a Cognitive Science student at McGill University, a Designer, a Developer, a Story Teller.",
        "…who love blending design, linguistics, and technology to create engaging experiences for websites, software, games, cartoons.",
        "More to come..."
    ]
  return (
    <div className="flex flex-wrap gap-3 h-full" id="about">
      {aboutText.map((text, index) => (
        <WiggleElement key={index} className="flex-3 border border-white/20  hover:bg-black/10 hover:border-white w-full col-span-2 md:col-span-3 relative bg-black rounded-4xl">
            <div className="felx flex-row p-10">
                <p className="text-[#727272]">{text}</p>
            </div>
        </WiggleElement>
        ))}
      
       

    
    </div>
  )
}

export default About
