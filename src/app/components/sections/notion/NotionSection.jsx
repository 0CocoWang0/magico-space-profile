"use client"
import React from 'react'
import Masonry from 'react-masonry-css'
import projectsData from '../../../../data/projectsData'
import Topbar from './Topbar'
import TagList from '../../shared/TagList'

const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    640: 1
}

const projects = projectsData

const NotionSection = ({ slug, setActiveSlug }) => {
    const handleCardClick = (slug) => {
        setActiveSlug(slug);
        window.history.pushState(null, "", `#${slug}`);
    };

    return (
        <div>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex gap-6 p-5"
                columnClassName="space-y-6"
            >
                {projects.map((project, index) => (
                    <button key={index} onClick={() => { if (project.clickable) handleCardClick(project.slug) }}
                        className={`text-left break-inside-avoid mb-6 block group ${project.clickable ? "cursor-pointer" : "pointer-events-none"
                            }`}>
                        <div className="bg-[#000000] hover:bg-[#222121] active:bg-[#222121] focus:bg-[#222121] rounded-xl overflow-clip gap-2 grid pb-3">
                            <div className="h-[170px] overflow-clip">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="px-5">
                                <h3 className="text-white text-sm mb-2">{project.bait}</h3>
                                <p className="text-[#727272] text-[10px]">{project.description}</p>
                            </div>
                            <TagList project={project} size={"[10px]"} />

                            <div className="place-self-end px-5">
                                <span
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
                                </span>
                            </div>
                        </div>


                    </button>
                ))}
            </Masonry>
        </div>
    )
}

export default NotionSection
