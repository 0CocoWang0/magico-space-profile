'use client'

import { ArrowLeft } from 'lucide-react'
import projectsData from '../../../../data/projectsData'

export default function Topbar({ slug, setActiveSlug }) {
    const project = projectsData.find((p) => p.slug === slug)
    if (!project) return null;

    return (
        <div className="flex items-center gap-3 px-4 py-3 border-b sticky top-0 z-50
                backdrop-blur-lg
                bg-[#191919]/50
                border-white/20
                rounded-t-xl
                shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                transition-all duration-300
        ">
            <button onClick={() => {
                setActiveSlug("projects")
                window.location.hash = "#projects";
            }}
                className="hover:opacity-80 ml-10"
            >
                <ArrowLeft className="w-5 h-5 text-neutral-300" />
            </button>

            {project.image && (
                <img
                    src={project.image}
                    alt={`${project.title} icon`}
                    className="w-6 h-6 object-contain rounded-sm"
                />
            )}

            <h1 className="text-lg font-medium text-white">{project.bait}</h1>
        </div>
    )
}
