import React from 'react'
import WiggleElement from './WiggleElement'

const TagList = ({ project, size }) => {
    return (

        <div className="flex flex-wrap gap-2">
            {project.tag.map((tag, index) => (
                <WiggleElement key={index}>
                    <span className={`bg-[#2A2929] text-white text-${size} p-1 rounded-sm `}>
                        {tag}
                    </span>
                </WiggleElement>
            ))}
        </div>

    )
}

export default TagList
