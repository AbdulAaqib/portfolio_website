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
    const imageUrl = urlFor(skill?.image);
    return (
        <div className='group relative flex items-center justify-center'>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className='relative flex items-center justify-center'
            >
                <Image 
                    src={imageUrl}
                    alt={skill.title}
                    width={96}
                    height={96}
                    className='object-contain w-16 h-16 md:w-24 md:h-24 transition-all duration-300
                    filter hover:grayscale group-hover:scale-110'
                    unoptimized={imageUrl.toLowerCase().endsWith('.gif')}
                />
            </motion.div>
        </div>
    );
}

export default Skill