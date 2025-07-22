"use client"
import React from 'react'
import WiggleElement from '../../shared/WiggleElement'
import Masonry from 'react-masonry-css'
import Link from 'next/link'
import projectsData from '../../../../data/projectsData'

const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    640: 1
}

const projects = projectsData

const Cards = () => {


    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex gap-6"
            columnClassName="space-y-6"
        >
            {projects.map((project, index) => (
                <Link key={index} href={`/${project.slug}`} className="break-inside-avoid mb-6 block cursor-pointer group">
                    <div className="bg-[#000000] hover:bg-[#222121] active:bg-[#222121] focus:bg-[#222121] rounded-xl overflow-clip gap-2 grid pb-3">
                        <div className="h-[170px] overflow-clip">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="px-5">
                            <h3 className="text-white text-sm mb-2">{project.title}</h3>
                            <p className="text-[#727272] text-[10px]">{project.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 px-5">
                            {project.tag.map((tag, index) => (
                                <WiggleElement key={index}>
                                    <span className="bg-[#2A2929] text-white text-[10px] p-1 rounded-sm">
                                        {tag}
                                    </span>
                                </WiggleElement>
                            ))}
                        </div>
                        <div className="place-self-end px-5">
                            <button
                                className={`text-[10px] inline-flex items-center justify-self-center gap-2 pointer-events-auto font-semibold rounded-lg px-2 py-2 ${project.clickable
                                    ? "text-white group-hover:underline decoration-[#91EAE4] decoration-wavy"
                                    : "text-[#727272] pointer-events-none"
                                    }`}
                            >
                                {project.status}
                                <img
                                    src="/images/nav/arrowdown.jpg"
                                    className="h-1 -rotate-90 transform transition-transform duration-200 group-hover:translate-x-[3px]"
                                />
                            </button>
                        </div>
                    </div>


                </Link>
            ))}
        </Masonry>

    )
}

export default Cards
