"use client"
import React from 'react'
import projectsData from '../../../../data/projectsData'

export default function Exp({ slug }) {
    const project = projectsData.find((p) => p.slug === slug)
    if (!project) return <div>Not found</div>

    return (
        <article className="prose">
            <div>
                <img
                    src={project.image}
                    alt={`${project.title} icon`}
                    className="w-full h-80 object-cover"
                />
                <div className="notion-content">
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    <button>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                            View Project
                        </a>
                    </button>

                </div>
            </div>
        </article>
    )
}