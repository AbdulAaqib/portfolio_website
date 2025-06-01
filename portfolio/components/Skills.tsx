import React from 'react'
import { motion } from 'framer-motion';
import Skill from './Skill';
import { Skill as SkillType} from '../typings';

type Props = {
  skills: SkillType[];
}

function Skills({ skills }: Props) {
  return (
    <div className='section-container scroll-mt-[84px]'>
      <div className='w-full flex justify-center mt-24 md:mt-8'>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='relative uppercase tracking-[8px] md:tracking-[20px] text-adaptive 
          text-base md:text-2xl text-center px-4 md:px-10 py-1.5 md:py-2 glass-title'
        >
          Skills
        </motion.h3>
      </div>

      <div className='flex relative flex-col text-center items-center justify-center px-4 md:px-10 max-w-7xl mx-auto mt-4 md:mt-16'>
        <div className='grid grid-cols-4 md:grid-cols-8 xl:grid-cols-10 gap-1 md:gap-4'>
          {skills?.map((skill) => (
            <Skill key={skill._id} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills

