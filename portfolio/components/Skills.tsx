import React from 'react'
import { motion } from 'framer-motion';
import Skill from './Skill';
import { Skill as SkillType} from '../typings';

type Props = {
  skills: SkillType[];
}

function Skills({ skills }: Props) {
  return (
    <div className='section-container'>
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='absolute top-[90px] md:top-[120px] uppercase tracking-[20px] text-adaptive 
        text-2xl text-center px-10 py-2 glass-title'
      >
        Skills
      </motion.h3>
      <div className='relative w-full max-w-full md:max-w-[1200px] mx-auto px-1 mt-40 md:mt-44'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-1 md:gap-4 min-h-[400px] md:min-h-[500px]'
        >
          {skills?.map((skill) => (
            <Skill key={skill._id} skill={skill} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Skills

