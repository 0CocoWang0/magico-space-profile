"use client"
import React from 'react'
import WiggleElement from '@/app/components/WiggleElement'
import {motion, AnimatePresence} from 'framer-motion'
import Exp from '@/app/components/Exp'
import Cards from '@/app/components/Cards'

const Page = () => {
  const [active, setActive] = React.useState(0);

  const List = [
        {
          time: "2025.06 - Present",
          title: "UI/UX Designer & Developer - Pearl Comics",
          company: "Pearl Comics · Remote · Volunteer",
          description: "Collaborated with core dev team on weekly basis to align UI design with backend infrastructure decisions. Contributed to database schema planning (user & comic structures) and API route mapping to ensure scalability. Coordinated with marketing and design to unify product vision and system architecture in early-stage development.",
          skills: ["💻 Website", "Front-end development", "UI/UX design", "Supabase", "System Design", "Marketing"],
          link:"https://www.readpearl.com"
          },
        {
          time: "2025.01 - Present",
          title: "Full-Stack Developer & Founder",
          company: "Aripple · Montreal, QC, Canada · On-site",
          description: "Created and customized a social platform for artists to identify usability and monetization gaps. Currently implementing 5+ core features such as user authentication, artwork trading, and subscription-based monetization",
          skills: ["🍎 Software", "💻 Website", "Full-stack development", "React", "UI/UX design"],
          link:"https://aripple.vercel.app"
          },
        {
        time: "2025.01 - 2025.06",
        title: "Undergraduate Researcher – Computational Neuroscience & Data Analytics",
        company: "McGill University Health Centre · Montreal, QC, Canada · On-site",
        description: "Conducting exploratory data analysis of the Natural Scene Dataset (NSD) (73,000+ image conditions) via AWS to investigate visual representation across 7 brain ROIs. Performing Representational Similarity Analysis (RSA) and Topological Similarity Analysis (TSA) on high-dimensional fMRI data using Python, R, SQL, and Azure Data Studio",
        skills: ["📊 Data", "Data Analysis", "R", "Python", "SQL", "Neuroscience", "Image Processing"],
        link:"https://github.com/0CocoWang0/NSD_cogsci"
        },
        {
          time: "2025.01 - Present",
          title: "Website Design & Development Director",
          company: "NORD Consulting · Montreal, QC, Canada · Hybrid",
          description: "Leading front-end web development to revamp NORD Consulting’s website through UI/UX principles. Customized site design in Webflow and transitioned to Next.js and TailwindCSS for scalability and better SEO",
          skills: ["💻 Website", "Front-end development", "Next.js", "Webflow", "CMS", "UI/UX design"],
          link:"https://msbn-consulting.webflow.io"
        },
        {
          time: "2024.06 - 2024.8",
          title: "SQL Data Analyst Intern",
          company: "Digital Sea Ltd. · Vancouver, BC, Canada · On-site",
          description: "Extracted and transformed data from a large-scale Chinese railroad network dataset using SQL queries. Generated data tables and dashboards to evaluate station-level satisfaction scores and incident rates over time",
          skills: ["📊 Data", "SQL", "Python", "Azure Data Studio"],
          link:""
        },
        {
          time: "2023.09 - 2024.1",
          title: "Design Coordinator",
          company: "McHacks · Montreal, QC, Canada · Hybrid",
          description: "Created mock-up layouts, website prototypes, and 10+ event branding using Figma impacting 500+ participants. Designed micro-animations and visuals to enhance user engagement",
          skills: ["💻 Website", "🎨 Design", "Front-end development", "Figma", "UI/UX design", "Website prototyping", "Graphic Design"],
          link:"https://mchacks.ca"
        },
        {
          time: "2023.03 - 2023.04",
          title: "Business Intelligence & UX intern",
          company: "PACE Farm · Montreal, QC, Canada · Hybrid",
          description: "Conducted competitive analysis of 5+ agricultural tech websites to identify strategic opportunities for digital growth. Delivered actionable insights and visual reports to guide UI/UX redesign and marketing decisions for internal stakeholders. Produced design prototypes using SquareSpace to enhance site usability and align with user behavior trends.",
          skills: ["💻 Website", "🎨 Design", "Information analytics", "UI/UX design", "Website prototyping", "Graphic Design"],
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
          title: "Machine Learning Research Assistant – Medical Imaging for AI Bacterial Colony Counter",
          company: "Punmicro Scienefic · Shanghai, China · Remote",
          description: "Developed preprocessing and data augmentation pipelines for large-scale medical image datasets used in AI bacterial colony counting. Utilized TensorFlow, OpenCV, and Python to improve model training data diversity, increasing accuracy from baseline to over 90% on held-out data",
          skills: ["📊 Data", "Python", "OpenCV", "Image Processing", "Machine Learning"],
          link:"https://www.punmicro.com"
  
        },
        
            {
            time: "2019.09 - Present",
            title: "Freelance Digital Artist & Designer",
            company: "Self-Employed · Remote",
            description: "Uploaded 100+ digital artworks on Lofter and 50+ on X, gaining 20k+ followers.",
            skills: ["🎨 Design", "Cartoon", "Procreate", "Animation"],
            link:"magicospace.carrd.co"
            }
            
    ] 
    
  const expList = [
    {
      tab: "...",
      content: List
    },
    {
      tab: "Developer",
      content: [List[0], List[1], List[3], List[5], List[6]]
    },
    {
      tab: "Data Scientist",
      content: [List[2], List[4], List[8]]
    },
    {
      tab: "Artist",
      content: [List[9]]
    }
  ]

  const heroImg = "/images/heroImg/exp.jpeg"


  return (
    <>
      <header>
        <div className="flex h-60 bg-amber-400 overflow-clip">
          <img src={heroImg} className="h-full w-full bg-amber-900 object-[0px_30%] object-cover"/>
        </div>
        
      </header>

      <div className="md:p-10 md:px-[15%] pt-10 p-6">
        
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
    </>
  )
}

export default Page