"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import Masonry from 'react-masonry-css'
import projectsData from '../../../../data/projectsData'
import TagList from '../../shared/TagList'
import GalleryIcon from "../../../../../public/images/nav/gallery-shape.svg"
import ListIcon from "../../../../../public/images/nav/list-shape.svg"
import SortIcon from "../../../../../public/images/nav/sort-shape.svg"
import FilterIcon from "../../../../../public/images/nav/filter-shape.svg"
import SearchIcon from "../../../../../public/images/nav/search-shape.svg"
import FancyButton from "../../shared/FancyButton"
import ProjectCard from "../../sections/notion/ProjectCard"
import FloatingWrapper from '../../shared/FloatingWrapper'

const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    640: 1
}


const NotionSection = ({ slug, setActiveSlug }) => {
    const [viewMode, setViewMode] = useState("gallery");
    const projects = projectsData

    const handleCardClick = (slug) => {
        setActiveSlug(slug);
        window.history.pushState(null, "", `#${slug}`);
    };
    const fadeVariant = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
    };


    const renderProjects = () => {
        if (viewMode === "gallery") {
            return (
                <motion.div
                    key="gallery"
                    variants={fadeVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                >
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="flex gap-6"
                        columnClassName="space-y-6"
                    >
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} handleCardClick={handleCardClick} />
                        ))}
                    </Masonry>
                </motion.div>
            );
        } else if (viewMode === "list") {
            return (
                <motion.div
                    key="list"
                    variants={fadeVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                >
                    <div className="flex flex-col gap-4">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                onClick={() => project.clickable && handleCardClick(project.slug)}
                                className={`group w-full p-4 rounded-xl transition-all hover:bg-[#727272]/20 ${project.clickable ? "cursor-pointer" : "pointer-events-none"
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    {/* Image box: fixed square size */}
                                    <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-800">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-120 transition-all duration-500"
                                        />
                                    </div>

                                    {/* Text and tags */}
                                    <div className="flex flex-col flex-grow">
                                        <div className="flex justify-between items-center mb-2">
                                            <h3 className="text-white text-sm">{project.bait}</h3>
                                            <span className="text-[10px] text-[#999]">{project.status}</span>
                                        </div>
                                        <p className="text-[#727272] text-[10px] mb-2">{project.description}</p>
                                        <TagList project={project} size={"[10px]"} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </motion.div>
            );
        }
    };



    return (

        <div className='flex flex-col justify-center items-center'>
            <div className='h-50 sm:h-80 w-[95vw]'>
                <FloatingWrapper floatSpeed={0.3}>
                    <img
                        src={"/images/heroImg/bigprojects.png"}
                        draggable={false}
                        className="w-full h-50 sm:h-80 object-contain object-center"
                    />
                </FloatingWrapper>
            </div>
            <div className='sm:max-w-[60vw] w-[95vw]'>
                <div className='w-full sticky top-[55px] z-10'>

                    <div className='mb-10 w-full rounded-xl flex'>

                        <div className='w-fit text-sm flex justify-start gap-2.5'>
                            <FancyButton icon={GalleryIcon} label="Gallery" defaultColour='bg-[#0f0f0f]/80 backdrop-blur-lg'
                                active={viewMode === 'gallery'}
                                onClick={() => setViewMode("gallery")}
                            />
                            <FancyButton icon={ListIcon} label="List" defaultColour='bg-[#0f0f0f]/80 backdrop-blur-lg'
                                active={viewMode === 'list'}
                                onClick={() => setViewMode("list")}
                            />

                        </div>
                        {/* 

                    <div className='text-sm flex w-full justify-end gap-2.5 items-center text-[#727272]'>
                        <FancyButton icon={FilterIcon} />
                        <FancyButton icon={SortIcon} />
                        <FancyButton icon={SearchIcon} />
                    </div>
                    */}
                    </div>
                </div>
                <AnimatePresence mode="wait">

                    {renderProjects()}
                </AnimatePresence>
            </div>
        </div >
    )
}

export default NotionSection
