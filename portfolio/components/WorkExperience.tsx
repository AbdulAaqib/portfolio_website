import React from 'react'
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '../typings';
type Props = {
  experiences: Experience;
}

function WorkExperience({ experiences }: Props) {
  // Sort experiences by their order attribute
  const sortedExperiences = experiences.sort((a, b) => a.order - b.order);

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ opacity: 1.5 }}
    className='h-screen flex relative overflow-hidden flex-col text-lft 
    md:flex-row max-w-full px-30 justify-evenly mx-auto items-center space-y-15'>
        <h3
          className='absolute top-10 uppercase tracking-[20px]
          text-[#7FFF1E]/70 text-xl'
        > Experience
        </h3>
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-[#7FFF1E]/20 scrollbar-thumb-[#7FFF1E]/60'>
          {sortedExperiences?.map((experience) => (
            <ExperienceCard key={experience._id} experience={experience}/>
          ))}
        </div>
    </motion.div>
  )
}

export default WorkExperience;



