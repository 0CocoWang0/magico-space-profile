import React from 'react'
import WiggleElement from '../../shared/WiggleElement'

const projects = [
    {
        title: "Undergraduate Researcher – Computational Neuroscience & Data Analytics",
        image: "/images/projects/nsd.png",
        description: "Conducting exploratory data analysis of the Natural Scene Dataset (NSD) (73,000+ image conditions) via AWS to investigate visual representation across 7 brain ROIs...Like opening a Pandora’s box, each insight leads to new questions. ",
        tag: ["📊 Data", "Exploratory Data Analysis", "Natural Scenes Dataset (NSD)", "R", "Python", "SQL", "AWS"],
        status: "View Project",
        clickable: true,
        href: "https://github.com/0CocoWang0/NSD_cogsci"
    },
    {
        title: "Website for NORD consulting club at McGill",
        image: "/images/projects/webproj1.png",
        description: "Leading the revamp of NORD Consulting’s website to enhance UI/UX, modernize the design, and improve SEO.",
        tag: ["💻 Website", "Webflow", "Front-end Dev", "CMS", "SSR"],
        status: "View Project",
        clickable: true,
        href: "https://msbn-consulting.webflow.io"
    },
    {
        title: "ARIPPLE: When Arts Ripple - a novel solution for artists",
        image: "/images/projects/arpple.jpg",
        description: "Currently developing core features, including user authentication, artwork trading, and subscription-based monetization.",
        tag: ["💻 Website", "🍎 Software", "Full-stack Dev", "React", "Next.js", "SSR"],
        status: "In Progress",
        clickable: true,
        href: "https://aripple.vercel.app"
    },
    {
        title: "Being an artist in the digital age",
        image: "/images/projects/manga.png",
        description: "Without boundary, I create stories and characters that transcend the limits of reality.",
        tag: ["🎨 Design", "Procreate", "Multi-media", "Animation"],
        status: "In progress",
        clickable: false,
        href: null
    },


]

const Cards = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch'>
            {projects.map((project, index) => (
                <a key={index} href={project.href} target="_blank">
                    <div className={`group p-[1px] rounded-xl bg-gradient-to-r from-[#91EAE4] to-[#7F7FD5] m-2 h-full 
            ${project.clickable ? "cursor-pointer hover:shadow-md shadow-[#91EAE4] transition duration-300 ease-in-out" : "pointer-events-none"} `}>

                        <div className="bg-[#000000] rounded-xl overflow-clip h-full gap-2 grid pb-3">
                            <div className='h-[170px] overflow-clip'>
                                <img src={project.image} alt={project.title} className='z-0 w-full h-full object-cover' />
                            </div>

                            <div className="px-5">
                                <h3 className="text-white text-sm mb-2">{project.title}</h3>
                                <p className="text-[#727272] text-[10px]">{project.description}</p>
                            </div>
                            <div className='flex flex-wrap gap-2 px-5'>
                                {project.tag.map((tag, index) => (
                                    <WiggleElement key={index}>
                                        <span className=" bg-[#2A2929] text-white text-[10px] p-1 rounded-sm">{tag}</span>
                                    </WiggleElement>
                                ))}
                            </div>
                            <div className='place-self-end px-5'>
                                <button className={`text-[10px] inline-flex items-center justify-self-center gap-2 pointer-events-auto font-semibold rounded-lg px-2 py-2 ${project.clickable ? " text-white group-hover:underline decoration-[#91EAE4] decoration-wavy" : "text-[#727272] pointer-events-none"}`}>
                                    {project.status}
                                    <img src="/images/nav/arrowdown.jpg" className="h-1 -rotate-90 transform transition-transform duration-200 group-hover:translate-x-[3px]" />
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
