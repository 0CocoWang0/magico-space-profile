import React from 'react'
import '@/app/layout.js'
import WiggleElement from '@/app/components/WiggleElement'

const page = () => {
  return (
    <div className='md:p-10 md:px-[15%] pt-10'>
      <WiggleElement>
        <p className="opacity-80 text-white text-6xl mb-10 md:mb-20 md:text-7xl">Random / </p>
      </WiggleElement>

      <p className=" text-lg"><span className="text-[#727272] pr-2">#</span>Coming soon! </p>

    </div>
  )
}

export default page
