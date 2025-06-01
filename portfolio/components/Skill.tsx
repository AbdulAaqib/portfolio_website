import React from 'react'
import { motion } from 'framer-motion'
import type { Skill as SkillType } from '../typings';
import { urlFor } from '../sanity';
import Image from 'next/image';

type Props = {
    skill: SkillType;
    directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.div
                initial={{
                    opacity: 0,
                    x: directionLeft ? -100 : 100,
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                className='relative w-16 h-16 md:w-16 md:h-16 xl:w-20 xl:h-20'
            >
                <Image
                    src={urlFor(skill?.image)}
                    alt={skill.title || ''}
                    className='object-contain filter group-hover:grayscale transition duration-300 ease-in-out p-0.5 md:p-1'
                    fill
                    unoptimized={urlFor(skill?.image).toLowerCase().endsWith('.gif')}
                />
            </motion.div>
            <div className='absolute -top-7 left-1/2 -translate-x-1/2 
                opacity-0 group-hover:opacity-100 transition-opacity duration-200
                glass-effect px-1.5 py-0.5 rounded-lg text-[10px] md:text-xs text-[var(--text-color)] whitespace-nowrap'>
                {skill.title}
            </div>
        </div>
    );
}

export default Skill