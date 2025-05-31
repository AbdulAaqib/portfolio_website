import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '../typings';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

type Props = {
    experiences: Experience[];
}

function WorkExperience({ experiences }: Props) {
    const sortedExperiences = experiences.sort((a, b) => a.order - b.order);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : experiences.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev < experiences.length - 1 ? prev + 1 : 0));
    };

    return (
        <div className='section-container'>
            <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='absolute top-[90px] md:top-[100px] uppercase tracking-[20px] text-adaptive 
                text-2xl text-center px-10 py-2 glass-title'
            >
                Experience
            </motion.h3>
            <div className='w-full max-w-full md:max-w-7xl mx-auto px-2 md:px-4 mt-48 md:mt-32'>
                {/* Navigation dots for mobile */}
                <div className='flex justify-center space-x-2 mb-4 md:hidden'>
                    {experiences.map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === currentIndex ? 'bg-[#0EA5E9]/70 w-4' : 'bg-gray-600'
                            }`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>

                {/* Experience cards container */}
                <div className='relative h-[600px] md:h-[680px] flex items-center'>
                    {/* Navigation buttons */}
                    <button
                        onClick={handlePrevious}
                        className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 
                        bg-[#0EA5E9]/30 hover:bg-[#0EA5E9]/50 p-2 rounded-full z-10 glass-title'
                    >
                        <ChevronLeftIcon className='h-6 w-6 text-[#0EA5E9]' />
                    </button>

                    <div className='overflow-x-hidden h-full w-full flex items-center touch-pan-x'>
                        <div 
                            className='flex h-full transition-transform duration-500 ease-in-out w-full'
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {sortedExperiences?.map((experience) => (
                                <div key={experience._id} className='w-full flex-shrink-0 overflow-y-auto scrollbar-blue flex items-center justify-center'>
                                    <ExperienceCard experience={experience} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={handleNext}
                        className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 
                        bg-[#0EA5E9]/30 hover:bg-[#0EA5E9]/50 p-2 rounded-full z-10 glass-title'
                    >
                        <ChevronRightIcon className='h-6 w-6 text-[#0EA5E9]' />
                    </button>
                </div>

                {/* Timeline indicator */}
                <div className='relative w-full h-2 bg-gray-800 rounded-full mt-8 hidden md:block'>
                    <div 
                        className='absolute h-full bg-[#0EA5E9]/40 rounded-full transition-all duration-500'
                        style={{
                            width: `${100 / experiences.length}%`,
                            left: `${(currentIndex * 100) / experiences.length}%`
                        }}
                    />
                </div>

                {/* Experience counter */}
                <div className='text-center mt-4 text-gray-400'>
                    <span className='text-[#0EA5E9]/70'>{currentIndex + 1}</span>
                    <span> / {experiences.length}</span>
                </div>
            </div>
        </div>
    );
}

export default WorkExperience;



