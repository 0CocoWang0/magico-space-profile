"use client"
import React from 'react'
import projectsData from '../../../../data/projectsData'

export default function Exp({ slug }) {
    const project = projectsData.find((p) => p.slug === slug)
    if (!project) return <div>Not found</div>

    return (
        <article className="prose">
            <div>
                <h1>{project.title}</h1>
            </div>
        </article>
    )
}