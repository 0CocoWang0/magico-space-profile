import React from 'react'
import WiggleElement from './WiggleElement'

const projects = [
    {
        title: "Website for NORD consulting club at McGill",
        image: "/images/webproj1.png",
        description: "Here’s a short summary of the event...",
        tag: ["💻 Website", "Webflow", "Front-end Dev"],
        status: "View Project",
        clickable: true,
        href:"https://msbn-consulting.webflow.io"
    },
    {
        title: "ARPPLE - a novel solution for artists",
        image: "/images/arpple.jpg",
        description: "Here’s a short summary of the event...",
        tag: ["💻 Website", "🍎 Software", "Full-stack Dev", "React", "Next.js"],
        status: "In Progress",
        clickable: false,
        href: null
    },
    {
        title: "Being an artist in the digital age",
        image: "/images/anime.jpeg",
        description: "Here’s a short summary of the event...",
        tag: ["🎨 Design", "Procreate", "Multi-media", "Animation"],
        status: "View Project",
        clickable: true,
        href:null
    },
    {
        title: "I will make some games!",
        image: "/images/show3.png",
        description: "Here’s a short summary of the event...",
        tag: ["🎮 Game", "Unity", "C#", "Game Dev"],
        status: "In progress",
        clickable: false,
        href: null
    },

]

const Cards = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 place-content-stretch justify-self-center'>
        {projects.map((project, index) => (
            <a key={index} href={project.href} target="_blank">
            <div  className={`group p-[1px] rounded-xl bg-gradient-to-r from-[#91EAE4] to-[#7F7FD5] m-2  
            ${project.clickable ? "cursor-pointer hover:shadow-md shadow-[#91EAE4] transition duration-300 ease-in-out" : "pointer-events-none"} `}>
                
                <div className="bg-[#000000] rounded-xl overflow-clip">
                    <div className='h-[170px] overflow-clip'>
                        <img src={project.image} alt={project.title} className='z-0 w-full h-full object-cover'/>
                        
                    </div>
                    
                    <div className='p-3'>
                        <h3 className="text-white text-sm mb-2">{project.title}</h3>
                        <p className="text-[#727272] text-[10px]">{project.description}</p>
                    </div>
                    <div className='flex flex-wrap gap-2 px-3'>
                        {project.tag.map((tag, index) => (
                            <WiggleElement key={index}>
                                <span className=" border-1 border-[#2A2929] text-white text-[10px] p-1 rounded-sm">{tag}</span>
                            </WiggleElement>
                        ))}
                    </div>
                    <div className='p-2'>
                        <button className={`text-[10px] inline-flex items-center justify-self-center gap-2 pointer-events-auto font-semibold rounded-lg  px-2 py-2 ${project.clickable ? " text-white cursor-pointer group-hover:underline decoration-[#91EAE4] decoration-wavy" : "text-[#727272] pointer-events-none"}`}>
                            {project.status}
                            <img src="/images/arrowdown.jpg" className="h-1 -rotate-90 transform transition-transform duration-200 group-hover:translate-x-[3px]"/>
                        </button>                        
                    </div>
                </div>
                
            </div>
            </a>
            
        ))}

       
    </div>
  )
}

export default Cards
