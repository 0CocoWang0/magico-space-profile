'use client'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import projectsData from '../../../../data/projectsData'

export default function Topbar({ slug }) {
    const project = projectsData.find((p) => p.slug === slug)

    if (!project) return null

    return (
        <div className="flex items-center gap-3 px-4 py-3 border-b border-neutral-800 bg-[#1E1E1E] sticky top-0 z-50">
            <button><Link href="/" className="hover:opacity-80">
                <ArrowLeft className="w-5 h-5 text-neutral-300" />
            </Link>
            </button>

            {project.image && (
                <img
                    src={project.image}
                    alt={`${project.title} icon`}
                    className="w-6 h-6 object-contain rounded-sm"
                />
            )}

            <h1 className="text-lg font-medium text-white">{project.title}</h1>
        </div>
    )
}
