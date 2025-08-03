import React from 'react'

const Recommend = ({ recommendItems, setActiveSlug }) => {
    /*
    const recommendItems = [
        {
            slug: "aripple",
            text: "ARIPPLE",
            imgURL: "/images/projects/aripple.png"
        },
        ...
    ]
    */


    return (
        <div className="relative w-full">
            <p className="text-[10px] text-[#979797] mb-2">Recommend Visit</p>

            <div id='recommendation-bar' className="flex overflow-x-auto sm:gap-5 gap-2 scrollbar-hide pr-5">
                {recommendItems.map((item, index) => (
                    <button key={index} onClick={() => { window.location.hash = item.slug; setActiveSlug(item.slug) }}
                        className="min-w-[130px] text-left break-inside-avoid group cursor-pointer w-30 h-30 border-1 border-white/10 rounded-xl overflow-clip">
                        <div className="flex flex-col relative h-full w-full bg-[#1d1c1c] hover:bg-[#2A2929] active:bg-[#2A2929] focus:bg-[#2a2929] rounded-xl transition-all duration-300">
                            {item.imgURL && (
                                <div className='flex h-1/2 overflow-hidden sm:opacity-70 sm:group-hover:opacity-100 sm:group-active:opacity-100 sm:group-hover:visible sm:group-active:visible items-center transition-all duration-300' >
                                    <img src={item.imgURL} className='group-hover:scale-110 transition-all duration-300 w-full h-full object-cover opacity-80' />
                                </div>
                            )}

                            <div className='absolute bottom-0 p-2 inline-flex items-center w-full h-1/2'>
                                <div className='flex-1 relative max-w-[90%]'>
                                    <p className='h-full text-sm text-[#d7d7d7] group-hover:text-white group-active:text-white max-w-[95%] line-clamp-2'>{item.text}</p>
                                    <div className='pointer-events-none absolute bottom-0 right-0 w-1/2 h-6 bg-gradient-to-l from-[#1d1c1c] group-hover:from-[#2a2929] group-active:from-[#72a2929] to-transparent transition-colors duration-300' />
                                </div>
                                <img
                                    src="/images/nav/arrowdown.jpg"
                                    className="h-1 -rotate-90 transform transition-transform duration-200 group-hover:translate-x-[3px]"
                                />
                            </div>

                        </div>
                    </button>

                ))}
            </div>
            <div className="pointer-events-none absolute right-0 top-0 w-5 h-full bg-gradient-to-l from-[#0f0f0f] to-transparent z-10" />

        </div>

    )
}

export default Recommend
