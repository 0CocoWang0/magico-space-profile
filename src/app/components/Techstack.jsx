"use client"
import React from 'react'
import { Treemap, Tooltip, ResponsiveContainer } from 'recharts';
import CustomContent from './CustomContent';

const Techstack = () => {
  const techStack = [
    { name: "Python", value: 35 },
    { name: "R", value: 25 },
    { name: "React", value: 20 },
    { name: "SQL", value: 15 },
    { name: "Tailwind", value: 10 },
    { name: "Next.js", value: 10 },
  ];

  const colors = [
    "#4281A4",
    "#fe938c",
    "#E6B89C",
    "#EAD2AC",
    "#9CAFB7",
    "#9966FF",
  
  ];

  return (
    <div className='w-full h-[400px] bg-black'>
       <ResponsiveContainer>
        <Treemap
          data={techStack}
          dataKey="value"
          name-key="name"
          content={(props) => <CustomContent {...props} colors={colors}/>}
        >
          <Tooltip 
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-white text-black text-[10px] p-2 rounded">
                    <p>{`${payload[0].payload.name} : ${payload[0].value + "%"}`}</p>
                  </div>
                );
              }
              return null;
            }}
          />
        </Treemap>
      </ResponsiveContainer>
    </div>
  )
}

export default Techstack
