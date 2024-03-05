import React from 'react'
import { motion } from 'framer-motion';
import Skill from './Skill';
import { Skill as SkillType} from '../typings';
type Props = {
  skills: SkillType[];
}

function Skills({ skills }: Props) {
  return( 
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ opacity: 1.5 }}
    className='flex relative flex-col text-center md:text-left 
    xl:flex-row max-w-[1000px] xl:px-10 min-h-screen justify-center xl:space-y-10 
    mx-auto items-center'>
    <h3 className='absolute top-14 uppercase tracking-[20px]
        text-[#7FFF1E]/70 text-2xl'>
            Skills
    </h3>
    <h3 className='absolute top-24 uppercase tracking-[3px]
        text-gray-500 text-sm '>
            Hover over skill for current profienciency
    </h3>
    <div className='grid grid-cols-5 gap-5 '>
      {skills?.slice(0, skills.length / 2).map((skill) => (
        <Skill key={skill._id} skill={skill}/>
      ))}
      {skills?.slice(skills.length / 2, skills.length).map((skill) => (
        <Skill key={skill._id} skill={skill} directionLeft/>
      ))}
    </div>
  </motion.div>
  );
}

export default Skills

