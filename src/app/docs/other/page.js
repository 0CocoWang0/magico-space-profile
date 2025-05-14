import React from 'react'
import '@/app/layout.js'
import WiggleElement from '@/app/components/WiggleElement'

const heroImg = "/images/heroImg/anime.jpeg"

const page = () => {
  return (
    <>
      <header>
        <div className="flex h-60 bg-amber-400 overflow-clip">
          <img src={heroImg} className="h-full w-full bg-amber-900 object-cover"/>
        </div>
        
        
      </header>

      <div className='p-6 md:p-10 md:px-[15%] pt-10'>
        
        <WiggleElement>
              <p className="opacity-80 text-white text-6xl mb-10 md:mb-20 md:text-7xl">Random / </p>
        </WiggleElement>
        <p className=" text-lg"><span className="text-[#727272] pr-2">#</span>Coming soon! </p>

      </div>
    </>
  )
}

export default page
