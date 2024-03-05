import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-0 
        flex-shrink-0 w-[400px] md:w-[500px] xl:w-[500px] snap-center 
        bg-[#292929] py-5 hover:opacity-100 opacity-70 cursor-pointer 
        transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-28 h-28 rounded-full xl:w-[100px] xl:h-[100px] object-cover
                object-center ' 
                src={urlFor(experience?.companyImage).url()}
                alt=""
            />
            <div className='px-0 md:px-10 '>
                <h4 className='text-2xl font-light'>{experience.company}</h4>
                <p className='font-bold text-xl mt-1'>{experience.jobTitle}</p>
                <div className='flex space-x-40  my-3'>
                    {experience && experience.technologies && experience.technologies.map((technology) => (
                        <img
                            key={technology._id}
                            className='h-10 w-10 rounded-full'
                            src={urlFor(technology.image).url()}
                            alt=""
                        />
                    ))}
                </div>
                <p className='uppercase py-0 text-gray-300'>
                    {new Date(experience.dateStarted).toDateString()} - {" "}
                    {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
                </p>
                <ul className='list-disc space-y-6  ml-10 text-[14px] md:text-[17px] xl:text-[17px] h-40 pr-0 py-0 overflow-y-scroll 
                scrollbar scrollbar-track-[#7FFF1E]/20 scrollbar-thumb-[#7FFF1E]/60'>
                    {experience.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
}
