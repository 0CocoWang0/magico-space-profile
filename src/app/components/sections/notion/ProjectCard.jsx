import React from 'react';
import TagList from '../../shared/TagList'; // adjust path as needed

const ProjectCard = ({ project, handleCardClick }) => (
    <button
        onClick={() => project.clickable && handleCardClick(project.slug)}
        className={`text-left break-inside-avoid mb-6 block group ${project.clickable ? 'cursor-pointer' : 'pointer-events-none'
            }`}
    >
        <div className="hover:bg-[#727272]/20 active:bg-[#222121] focus:bg-[#222121] rounded-xl overflow-clip gap-2 grid pb-3 transition-all duration-300">
            <div className="h-[170px] overflow-clip">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-120 transition-all duration-500"
                />
            </div>
            <div className="px-5">
                <h3 className="text-white text-sm mb-2">{project.bait}</h3>
                <p className="text-[#727272] text-[10px]">{project.description}</p>
                <TagList project={project} size={"[10px]"} />
            </div>
            <div className="place-self-end px-5">
                <span
                    className={`text-[10px] inline-flex items-center gap-2 font-semibold rounded-lg px-2 py-2 ${project.clickable
                        ? "text-white group-hover:underline decoration-[#91EAE4] decoration-wavy"
                        : "text-[#727272]"
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
);

export default ProjectCard;
