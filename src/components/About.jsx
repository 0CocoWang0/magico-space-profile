import React from 'react'
import Image from 'next/image'
import WiggleElement from './WiggleElement'

const About = () => {
  return (
    <div className="flex flex-wrap gap-3 h-full" id="about">
      
        <WiggleElement className="flex-4  border border-white/20  hover:bg-black/10 hover:border-white w-full col-span-3 relative bg-black rounded-4xl"> 
            <div className="felx flex-row p-10">
                <p className="text-gray-400">…a Cognitive Science student at McGill University, a Designer, a Developer, a Story Teller.</p>
            </div>            
        </WiggleElement>        

        <WiggleElement className="flex-4  border border-white/20  hover:bg-black/10 w-full hover:border-white col-span-3 relative bg-black rounded-4xl">
            <div className="felx flex-row p-10 justify-center items-center">
                <p className="text-gray-400">
                …who love blending design, linguistics, and technology to create engaging experiences for <span className="text-white">websites</span>, <span className="text-cyan-300">software</span>, <span className="text-blue-300">games</span>, <span className="text-purple-400">cartoons</span>.
                </p>
            </div>
        </WiggleElement>        

        <WiggleElement className="flex-2  hover:bg-gradient-to-br border border-white/20  hover:border-white w-full col-span-2 relative bg-gradient-to-r from-blue-300 to-purple-400 rounded-4xl">
            <div className="text-black text-2xl felx flex-row p-10">
                <p>More to come.</p>
                <p className="text-sm">问就是还没做完</p>
            </div>
        </WiggleElement>
       

    
    </div>
  )
}

export default About
