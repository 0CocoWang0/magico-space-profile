'use client'

import { pageTree } from '../../../../data/pageHierarchy'

export default function Topbar({ slug, setActiveSlug, isOpen }) {
    function getBreadcrumbPath(slug, tree) {
        const path = [];
        let current = slug;

        while (current) {
            const page = tree[current];
            if (!page) break;
            path.unshift({ slug: current, title: page.title, image: page.image });
            current = page.parent;
        }

        return path; // e.g. [{slug: "projects", title: "Projects"}, {slug: "pearl", title: "Pearl"}]
    }
    const path = getBreadcrumbPath(slug, pageTree)

    return (
        <div className={`${isOpen ? "pl-2" : "pl-10"} flex items-center gap-3 px-4 py-3 sticky top-0 z-199
                backdrop-blur-lg
                bg-[#1d1c1c]/20
                rounded-tl-xl
                shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                transition-all duration-300`}
        >
            {path.map((item, index) => (
                <div key={item.slug} className='flex items-center gap-2'>
                    {index > 0 && <span className="text-green-300">/</span>}
                    {index < path.length - 1 ? (
                        <button
                            onClick={() => {
                                setActiveSlug(item.slug);
                                window.location.hash = `#${item.slug}`;
                            }}
                            className='items-center inline-flex gap-1 px-1 rounded-md hover:bg-[#2A2929] active:bg-[#2A2929]'
                        >
                            <img src={item.image} className='h-5 w-5 object-cover rounded-sm' />
                            {item.title}
                        </button>
                    ) : (
                        <span className='items-center inline-flex gap-1 px-1'>
                            <img src={item.image} className='h-5 w-5 object-cover rounded-sm' />
                            {item.title}
                        </span>
                    )}
                </div>
            ))}


        </div>
    )
}
