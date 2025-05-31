import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../typings';
import { urlFor } from '../sanity';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

type Props = {
    projects: Project[];
};

function Projects({ projects }: Props) {
    // Remove duplicates and sort projects
    const sortedProjects = Array.from(
        new Set(projects.map(p => p._id))
    ).map(id => {
        return projects.find(p => p._id === id)!;
    }).sort((a, b) => a.order - b.order);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : sortedProjects.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev < sortedProjects.length - 1 ? prev + 1 : 0));
    };

    return (
        <div className='section-container'>
            <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='absolute top-[90px] md:top-[120px] uppercase tracking-[20px] text-[var(--text-color)] 
                text-2xl text-center px-8 py-2 glass-title'
            >
                Projects
            </motion.h3>
            <div className='relative w-full max-w-full md:max-w-7xl mx-auto px-2 md:px-4 mt-48 md:mt-52'>
                {/* Navigation dots for mobile */}
                <div className='flex justify-center space-x-2 mb-4 md:hidden'>
                    {sortedProjects.map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === currentIndex ? 'bg-[#0EA5E9]/70 w-4' : 'bg-gray-600'
                            }`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>

                {/* Projects container */}
                <div className='relative h-[600px] md:h-[800px] flex flex-col'>
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
                            {sortedProjects.map((project) => (
                                <div 
                                    key={project._id} 
                                    className='w-full flex-shrink-0 px-4 md:px-10'
                                >
                                    <div className='glass-card flex flex-col'>
                                        {/* Project Image Container */}
                                        <div className='relative w-full bg-black/20 flex items-center justify-center p-2 rounded-t-xl'>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ duration: 0.5 }}
                                                className='relative flex items-center justify-center h-[120px] md:h-[160px] w-full'
                                            >
                                                <Image
                                                    src={urlFor(project?.image)}
                                                    alt={project.title}
                                                    className='object-contain'
                                                    fill
                                                    unoptimized={urlFor(project?.image).toLowerCase().endsWith('.gif')}
                                                />
                                            </motion.div>
                                        </div>

                                        {/* Project Info */}
                                        <div className='flex flex-col'>
                                            <div className='p-2 md:p-3'>
                                                <div className='flex items-start justify-between mb-1'>
                                                    <h4 className='text-lg md:text-2xl font-semibold text-[var(--text-color)] pr-2 md:pr-3 leading-tight'>
                                                        {project.title}
                                                    </h4>
                                                    <div className='flex-shrink-0 cursor-pointer hover:scale-110 transition-transform ml-1'>
                                                        <a 
                                                            href={project.projectGithubLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className='text-[var(--text-color-secondary)] hover:text-[var(--text-color)] transition-colors duration-300'
                                                        >
                                                            <svg 
                                                                className="w-5 h-5 md:w-6 md:h-6 hover:scale-110 transition-transform duration-300"
                                                                fill="currentColor"
                                                                viewBox="0 0 24 24"
                                                                aria-hidden="true"
                                                            >
                                                                <path 
                                                                    fillRule="evenodd"
                                                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>

                                                {/* Technologies */}
                                                <div className='flex flex-wrap gap-4 py-4'>
                                                    {project.technologies.map((technology) => (
                                                        <div 
                                                            key={technology._id}
                                                            className='group relative'
                                                        >
                                                            <div className='relative h-14 w-14 md:h-16 md:w-16'>
                                                                <Image 
                                                                    className='object-contain filter hover:grayscale transition-all duration-300 hover:scale-110'
                                                                    src={urlFor(technology.image)}
                                                                    alt={technology.title || ''}
                                                                    fill
                                                                    unoptimized={urlFor(technology.image).toLowerCase().endsWith('.gif')}
                                                                />
                                                            </div>
                                                            <div className='absolute -top-8 left-1/2 -translate-x-1/2 
                                                                opacity-0 group-hover:opacity-100 transition-opacity duration-200
                                                                glass-effect px-2.5 py-1.5 rounded-lg text-xs md:text-sm text-[var(--text-color)] whitespace-nowrap'>
                                                                {technology.title}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Project Summary */}
                                            <div className='px-2 md:px-3 pb-4'>
                                                <div className='h-[220px] md:h-[300px] overflow-y-auto scrollbar-blue'>
                                                    <ul className='list-disc list-inside space-y-3'>
                                                        {project.summary.split('• ').filter(Boolean).map((point, index) => (
                                                            <li 
                                                                key={index} 
                                                                className='text-sm md:text-base text-[var(--text-color-secondary)] leading-relaxed pl-1'
                                                                style={{ display: 'list-item' }}
                                                            >
                                                                {point.trim()}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

                {/* Progress bar */}
                <div className='relative w-full h-2 bg-gray-800 rounded-full mt-8 hidden md:block'>
                    <div 
                        className='absolute h-full bg-[#0EA5E9]/40 rounded-full transition-all duration-500'
                        style={{
                            width: `${100 / projects.length}%`,
                            left: `${(currentIndex * 100) / projects.length}%`
                        }}
                    />
                </div>

                {/* Project counter */}
                <div className='text-center mt-4 text-[var(--text-color-muted)]'>
                    <span className='text-[var(--accent-color)]'>{currentIndex + 1}</span>
                    <span> / {projects.length}</span>
                </div>
            </div>
        </div>
    );
}

export default Projects;
