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
        <div className="w-full">
            <p className="text-[10px] text-[#979797] mb-2">Recommend Visit</p>

            <div id='recommendation-bar' className="flex flex-row sm:gap-5 gap-2">
                {recommendItems.map((item, index) => (
                    <button key={index} onClick={() => { window.location.hash = item.slug; setActiveSlug(item.slug) }}
                        className="text-left break-inside-avoid group cursor-pointer w-30 h-30 border-1 border-white/10 rounded-xl overflow-clip">
                        <div className="flex flex-col relative h-full w-full bg-black hover:bg-[#2A2929] active:bg-[#2A2929] focus:bg-[#2A2929] rounded-xl transition-all duration-300">
                            {item.imgURL && (
                                <div className='no-hover:opacity-0 flex h-1/2 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-active:opacity-100 group-hover:visible group-active:visible items-center transition-all duration-300' >
                                    <img src={item.imgURL} className='opacity-60' />
                                </div>
                            )}

                            <div className='absolute bottom-0 p-2 inline-flex items-center w-full h-1/2'>
                                <div className='flex-1 relative max-w-[90%]'>
                                    <p className='h-full text-[#727272] group-hover:text-white group-active:text-white max-w-[95%] line-clamp-2'>{item.text}</p>
                                    <div className='pointer-events-none absolute bottom-0 right-0 w-1/2 h-6 bg-gradient-to-l from-black group-hover:from-[#2A2929] group-active:from-[#2A2929] to-transparent transition-colors duration-300' />
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
        </div>

    )
}

export default Recommend
