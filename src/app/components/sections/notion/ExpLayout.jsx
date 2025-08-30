"use client"
import React, { useEffect, useRef, useState } from 'react'
import projectsData from '../../../../data/projectsData'
import TagList from '../../shared/TagList'
import { MDXProvider } from '@mdx-js/react'
import useIsMobile from '../../../hooks/useIsMobile'

export default function Exp({ slug }) {
    const [isInView, setIsInView] = useState(false);
    const mdxRef = useRef(null)
    const isMobile = useIsMobile(640)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(!entry.isIntersecting),
            {
                root: null,
                threshold: 0.1, //Trigger when 10% is visible
            }
        );
        if (mdxRef.current) {
            observer.observe(mdxRef.current);
        }
        return () => {
            if (mdxRef.current) {
                observer.unobserve(mdxRef.current);
            }
        }
    })

    const project = projectsData.find((p) => p.slug === slug)
    const [MDXContent, setMDXContent] = useState(null)
    const components = {
        h1: (props) => <h1 className='text-2xl font-bold text-[#727272]' {...props} />,
        h2: (props) => <h2 className="text-lg font-semibold mt-6 mb-3 text-[#727272]" {...props} />,
        blockquote: (props) => (
            <blockquote className="border-l-4 border-green-300 pl-4 italic text-[#979797] my-4" {...props} />
        ),
        hr: () => <hr className="my-8 border-1 border-[#2A2929]" />,
        ul: (props) => <ul className="list-disc ml-4" {...props} />,
        ol: (props) => <ol className="list-decimal ml-4" {...props} />,
        li: (props) => <li className="mb-1 " {...props} />,
        p: (props) => <p className="mb-4 " {...props} />,
        Gray: (props) => <span className="text-sm text-[#727272]" {...props} />, //for caption text
        Green: (props) => <span className="text-sm text-green-300" {...props} />, //for caption text
        Link: (props) => <button><a className="decoration-green-400 underline decoration-dashed" {...props} /></button>,
    }

    useEffect(() => {
        async function loadMDX() {
            try {
                const content = await import(`../../../../data/projects/${slug}.mdx`)
                setMDXContent(() => content.default)
            } catch (err) {
                console.error(`Couldn't load MDX for slug: ${slug}`, err)
            }
        }
        loadMDX()
    }, [slug])

    if (!project) return <div>Not found</div>
    return (
        <article className="prose w-full relative">
            <div>
                <img
                    src={project.image}
                    alt={`${project.title} icon`}
                    draggable={false}
                    className="w-full h-80 object-cover object-center sticky top-0 z-10"
                />
                <div className="flex flex-col sm:flex-row p-[5vw] gap-10 relative z-20 bg-[#0f0f0f] h-full">

                    {/* Left row */}
                    <div className='sm:w-1/3'>
                        <div className='sticky top-20'>
                            <h1 className='text-2xl'>{project.title}</h1>
                            <p className='my-3 text-[#979797]'>{project.location}</p>
                            {!isMobile && (
                                <div className={`group inline-flex gap-2 transition-all duration-300 ease-in-out
                                ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}>
                                    <div className='flex flex-col gap-2' ref={mdxRef}>
                                        {project.links?.map((linkObj, index) => (
                                            <button key={index} onClick={() => { window.open(linkObj.href, "_blank", "noopener, noreferrer") }} className="group inline-flex gap-5 items-center justify-between bg-white/10 border border-white/20 rounded-xl text-sm text-[#979797] p-4 w-full hover:bg-black/10 active:bg-black/10 transition-all duration-300" >
                                                {linkObj.label}
                                                <img
                                                    src="/images/nav/arrowdown.jpg"
                                                    className="h-1 -rotate-90 transform transition-transform duration-200 group-hover:translate-x-[3px]"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>

                    {/* Right row */}
                    <div className='sm:w-2/3 flex flex-col gap-5 text-sm'>
                        <TagList project={project} size={"sm"} />
                        <p>{project.description}</p>
                        <div className='flex justify-between text-sm gap-2'>
                            <div className='flex flex-col'>
                                <p className='text-[#979797] text-[10px]'>ROLE</p>
                                <p>{project.role}</p>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-[#979797] text-[10px]'>TOOLS</p>
                                <p>{project.tools}</p>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-[#979797] text-[10px]'>TIMELINE</p>
                                <p>{project.timeline}</p>
                            </div>
                        </div>

                        <div className='inline-flex gap-2' ref={mdxRef}>
                            {project.links?.map((linkObj, index) => (

                                <button key={index} onClick={() => { window.open(linkObj.href, "_blank", "noopener, noreferrer") }} className="group inline-flex justify-between gap-5 items-center bg-white/10 border border-white/20 rounded-xl text-sm text-[#979797] p-4 w-full hover:bg-black/10 active:bg-black/10 transition-all duration-300" >
                                    <p>
                                        {linkObj.label}
                                    </p>
                                    <img
                                        src="/images/nav/arrowdown.jpg"
                                        className="h-1 -rotate-90 transform transition-transform duration-200 group-hover:translate-x-[3px]"
                                    />
                                </button>
                            ))}
                        </div>

                        {/* here goes the whole mdx for each project stored at src/data/projects/ */}
                        {MDXContent &&
                            <MDXProvider components={components}>
                                <MDXContent />
                            </MDXProvider>
                        }
                    </div>
                </div>
            </div>
        </article>
    )
}