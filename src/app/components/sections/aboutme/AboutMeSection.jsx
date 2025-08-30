import React from 'react'
import FloatingWrapper from '../../shared/FloatingWrapper'

const AboutMeSection = () => {
    return (
        <section className='flex flex-col justify-center items-center'>
            <div className='h-50 sm:h-80 w-[65vw] lg:w-[95vw]'>
                <FloatingWrapper floatSpeed={0.3}>
                    <img
                        src={"/images/heroImg/bigprojects.png"}
                        draggable={false}
                        className="w-full h-50 sm:h-80 object-contain object-center"
                    />
                </FloatingWrapper>
            </div>

            <div className='sm:max-w-[60vw] w-[95vw]'>

            </div>
        </section>
    )
}

export default AboutMeSection
