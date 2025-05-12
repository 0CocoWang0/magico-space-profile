"use client"
import React from 'react'
import WiggleElement from '@/app/components/WiggleElement'
import {motion, AnimatePresence} from 'framer-motion'
import Exp from '@/app/components/Exp'
import Cards from '@/app/components/Cards'

const page = () => {
  const [active, setActive] = React.useState(0);

  const List = [
        {
          time: "2025.01 - Present",
          title: "Full-Stack Developer & Founder",
          company: "Arpple · Montreal, QC, Canada · On-site",
          description: "Created and customized a social platform for artists to identify usability and monetization gaps",
          skills: ["🍎 Software", "💻 Website", "Full-stack development", "React", "UI/UX design"],
          link:""
          },
        {
        time: "2025.01 - Present",
        title: "Assistant Researcher in Visual Neuroscience & Data Analysis",
        company: "McGill University Health Centre · Montreal, QC, Canada · On-site",
        description: "Conducted Representational Similarity Analysis (RSA) and Temporal Similarity Analysis (TSA) on surface-based fMRI data to investigate neural representations of natural scenes.",
        skills: ["📊 Data", "Data Analysis", "R", "Python", "SQL", "Neuroscience", "Image Processing"],
        link:""
        },
        {
          time: "2025.01 - Present",
          title: "Website Development Director",
          company: "NORD Consulting · Montreal, QC, Canada · Hybrid",
          description: "Leading front-end web development to revamp NORD Consulting’s website through UI/UX principles to improve SEO.",
          skills: ["💻 Website", "Front-end development", "Next.js", "Webflow", "CMS", "UI/UX design"],
          link:""
        },
        {
          time: "2024.06 - 2024.8",
          title: "SQL Data Analyst Intern",
          company: "Digital Sea Ltd. · Vancouver, BC, Canada · On-site",
          description: "Conducted SQL-based analysis on a large-scale Chinese railroad dataset, generating structured tables to support diverse data analytics needs.",
          skills: ["📊 Data", "SQL", "Python", "Azure Data Studio"],
          link:""
        },
        {
          time: "2023.09 - 2024.1",
          title: "Design Coordinator",
          company: "McHacks · Montreal, QC, Canada · Hybrid",
          description: "Created mock-ups, website prototypes, and event branding using Figma to prioritize usability and UI/UX",
          skills: ["💻 Website", "🎨 Design", "Front-end development", "Figma", "UI/UX design", "Website prototyping", "Graphic Design"],
          link:""
        },
        {
          time: "2023.03 - 2023.04",
          title: "2023 Winter Micro-Exp Program Intern",
          company: "McGill University · Montreal, QC, Canada · On-site",
          description: "Curated a comprehensive report on commercial opponents and transformed old platform into a new one using WordPress.",
          skills: ["💻 Website", "🎨 Design", "UI/UX design", "Website prototyping", "Graphic Design"],
          link:""
        },
        {
          time: "2022.09 - 2022.12",
          title: "TOEFL English Teaching Assistant",
          company: "Sky Education · Nanchang, Jiangxi, China · On-site",
          description: "Planned weekly review and exercises and taught TOFEL spoken English, writing, listening, and grammar",
          skills: ["Curriculum development", "Tutoring", "ESL", "TOEFL prepration", "Communication"],
          link:""
  
        },
        {
          time: "2022.08 - 2022.12",
          title: "Assistant Programmer in Machine Learning",
          company: "Leader Ltd. · Nanchang, Jiangxi, China · On-site",
          description: "Preprocessed and augmented medical label image datasets for machine learning training.",
          skills: ["📊 Data", "Python", "OpenCV", "Image Processing", "Machine Learning"],
          link:""
  
        },
        
            {
            time: "2023.09 - Present",
            title: "Freelance Digital Artist & Designer",
            description: "Uploaded 100+ digital artworks on Lofter and 50+ on X, gaining 20k+ followers.",
            skills: ["🎨 Design", "Cartoon", "Procreate", "Animation"]
    
            }
            
    ] 
    
  const expList = [
    {
      tab: "...",
      content: List
    },
    {
      tab: "Developer",
      content: [List[0], List[2], List[4], List[5]]
    },
    {
      tab: "Data Scientist",
      content: [List[1], List[3], List[7]]
    },
    {
      tab: "Artist",
      content: [List[8]]
    }
  ]



  return (
    <div className="p-10 md:p-10 md:px-[15%] pt-10">
      <WiggleElement>
        <p className="opacity-80 text-white text-6xl mb-10 md:mb-20 md:text-7xl">Experience / </p>
      </WiggleElement>

      <section className=''>
        <div className='flex-wrap flex gap-5'>
          <p className=" text-lg"><span className="text-[#727272] pr-2">#</span>Keming as </p>
          
          <div className="inline-flex gap-5 bg-[#2A2929] p-1 rounded-lg justfy-center -mt-1 px-1 md:px-3">
                {expList.map((exp, index) => (
                        <button
                            key={exp.tab}
                            className={`text-sm p-1 md:px-3 transition-all ease-in-out hover:bg-[#727272] hover:text-black ${index === active ? "bg-[#000000] rounded-lg text-white" : "rounded-lg text-[#727272]"}`}
                            onClick={() => setActive(index)}
                        >
                            {exp.tab}
                        </button>                        
                ))}
            </div>
        </div>
        <p className="text-[#727272] text-sm mt-5 mb-15">Select your scope...</p>

        <div className="relative w-full">
          
                        <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 30}}
                            transition={{ duration: 0.3 }}
                            className="absolute w-full"
                        >
                           <Exp expList={expList[active]}/>
                        </motion.div>
                        </AnimatePresence>
        </div>
      </section>

    </div>
  )
}

export default page