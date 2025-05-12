import React from 'react'

const GradientWrapper = ({children}) => {
  return (
    <div>
      <div  className="group p-[1px] rounded-xl bg-gradient-to-r from-[#91EAE4] to-[#7F7FD5] m-2 hover:shadow-md shadow-[#91EAE4] transition duration-300 ease-in-out">
            <div className="bg-[#000000] rounded-xl overflow-clip">
                <div className='overflow-clip'>
                    {children}                          
                </div>                           
            </div>
        </div>
    </div>
  )
}

export default GradientWrapper
