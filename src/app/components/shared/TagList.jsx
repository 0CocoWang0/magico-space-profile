import React from 'react'


const TagList = ({ project, size }) => {
    return (

        <div className="flex flex-wrap gap-2">
            {project.tag.map((tag, index) => (
                <span
                    key={index}
                    className={`bg-[#2A2929] text-white text-${size} p-1 rounded-sm `}>
                    {tag}
                </span>

            ))}
        </div>

    )
}

export default TagList
