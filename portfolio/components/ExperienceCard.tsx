import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../typings';
import { urlFor } from '../sanity';
import Image from 'next/image';

type Props = {
    experience: Experience;
}

function ExperienceCard({ experience }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 
        w-full md:w-[850px] glass-card py-3 md:py-4 opacity-100'>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className='w-32 h-32 md:w-36 md:h-36 relative'
            >
                <Image
                    src={urlFor(experience?.companyImage)}
                    alt={experience?.company}
                    className='rounded-full object-cover object-center'
                    fill
                    unoptimized={urlFor(experience?.companyImage).toLowerCase().endsWith('.gif')}
                />
            </motion.div>

            <div className='px-0 md:px-6 w-full'>
                <h4 className='text-2xl md:text-3xl font-light text-adaptive text-center'>
                    {experience?.jobTitle}
                </h4>
                <p className='font-bold text-lg md:text-xl mt-1 text-adaptive text-center'>
                    {experience?.company}
                </p>
                <div className='flex flex-wrap gap-x-2 gap-y-1 my-2 justify-center items-center'>
                    {experience?.technologies?.map((technology) => (
                        <div key={technology._id} className='relative' style={{ width: '2.5rem', height: '2.5rem' }}>
                            <Image
                                src={urlFor(technology.image)}
                                alt={technology.title || ''}
                                className='object-contain'
                                fill
                                unoptimized={urlFor(technology.image).toLowerCase().endsWith('.gif')}
                            />
                        </div>
                    ))}
                </div>
                <p className='uppercase py-1 text-base md:text-lg text-adaptive text-center'>
                    {new Date(experience?.dateStarted).toDateString()} -{" "}
                    {experience?.isCurrentlyWorkingHere
                        ? "Present"
                        : new Date(experience?.dateEnded).toDateString()
                    }
                </p>

                {/* Points Container */}
                <div className='mt-4 px-2 md:px-4 pb-2'>
                    <div className='h-[140px] md:h-[140px] overflow-y-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0EA5E9]/80'>
                        <ul className='list-disc list-inside space-y-1.5 md:space-y-2 text-xs md:text-base text-[var(--text-color-secondary)]'>
                            {experience.points.map((point, i) => (
                                <li key={i} className='leading-relaxed'>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ExperienceCard;
