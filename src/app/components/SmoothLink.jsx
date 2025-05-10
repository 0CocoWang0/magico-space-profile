'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

const SmoothLink = ({href, children, className}) => {
    const pathname = usePathname()
        const handleClick = (e) => {
            const [targetPath, hash] = href.split('#')

            if (pathname === targetPath && hash) {
            e.preventDefault()
            const element = document.getElementById(hash)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
                // Optionally update URL hash
                history.pushState(null, '', `#${hash}`)
            }
        }
    }
    return (
        <a href={href} onClick={handleClick} className={className}>{children}</a>
    )
}
  

export default SmoothLink
