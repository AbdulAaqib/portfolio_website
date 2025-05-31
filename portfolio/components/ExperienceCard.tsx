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
        <article className='flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 
        w-full md:w-[850px] glass-card py-4 md:py-6 opacity-100'>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className='w-24 h-24 md:w-28 md:h-28 relative'
            >
                <Image
                    src={urlFor(experience?.companyImage)}
                    alt={experience?.company}
                    className='rounded-full object-cover object-center'
                    fill
                    unoptimized={urlFor(experience?.companyImage).toLowerCase().endsWith('.gif')}
                />
            </motion.div>

            <div className='px-0 md:px-6'>
                <h4 className='text-xl md:text-2xl font-light text-adaptive'>
                    {experience?.jobTitle}
                </h4>
                <p className='font-bold text-base mt-1 text-adaptive'>
                    {experience?.company}
                </p>
                <div className='flex space-x-2 my-1.5'>
                    {experience?.technologies?.map((technology) => (
                        <div key={technology._id} className='h-6 w-6 md:h-8 md:w-8 relative'>
                            <Image
                                src={urlFor(technology.image)}
                                alt={technology.title || ''}
                                className='rounded-full object-cover'
                                fill
                                unoptimized={urlFor(technology.image).toLowerCase().endsWith('.gif')}
                            />
                        </div>
                    ))}
                </div>
                <p className='uppercase py-2 text-sm text-adaptive-secondary'>
                    {new Date(experience?.dateStarted).toDateString()} -{" "}
                    {experience?.isCurrentlyWorkingHere
                        ? "Present"
                        : new Date(experience?.dateEnded).toDateString()
                    }
                </p>

                <div className='max-h-[250px] md:max-h-[300px] overflow-y-auto scrollbar-blue pr-3'>
                    <ul className='list-disc space-y-2 ml-4 text-xs md:text-sm text-adaptive-secondary'>
                        {experience?.points?.map((point, i) => (
                            <li key={i} className='text-adaptive-secondary'>{point}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </article>
    );
}

export default ExperienceCard;
