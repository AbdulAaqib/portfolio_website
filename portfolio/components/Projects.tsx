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
    // Add logging to check projects data
    console.log('Projects received:', JSON.stringify(projects, null, 2));

    // Remove duplicates and sort projects
    const sortedProjects = Array.from(
        new Set(projects?.map(p => p._id) || [])
    ).map(id => {
        return projects.find(p => p._id === id)!;
    }).sort((a, b) => a.order - b.order);

    // Add logging for sorted projects
    console.log('Sorted projects:', JSON.stringify(sortedProjects, null, 2));

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : sortedProjects.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev < sortedProjects.length - 1 ? prev + 1 : 0));
    };

    return (
        <div className='section-container scroll-mt-[84px]'>
            <div className='w-full flex justify-center mt-28 md:mt-8'>
                <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='relative top-0 md:top-4 uppercase tracking-[8px] md:tracking-[20px] text-adaptive 
                    text-base md:text-2xl text-center px-4 md:px-10 py-1.5 md:py-2 glass-title'
                >
                    Projects
                </motion.h3>
            </div>
            <div className='relative w-full max-w-full md:max-w-7xl mx-auto px-2 md:px-4 mt-16 md:mt-16'>
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
                <div className='relative h-[450px] md:h-[600px] flex flex-col'>
                    {/* Navigation buttons */}
                    <button
                        onClick={handlePrevious}
                        className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 md:-translate-x-12 
                        bg-[#0EA5E9]/30 hover:bg-[#0EA5E9]/50 p-1.5 md:p-2 rounded-full z-10 glass-title'
                    >
                        <ChevronLeftIcon className='h-5 w-5 md:h-6 md:w-6 text-[#0EA5E9]' />
                    </button>

                    <div className='overflow-x-hidden h-full w-full flex items-center touch-pan-x px-6 md:px-20'>
                        <div 
                            className='flex h-full transition-transform duration-500 ease-in-out w-full'
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {sortedProjects.map((project) => (
                                <div 
                                    key={project._id} 
                                    className='w-full flex-shrink-0 px-1 md:px-10'
                                >
                                    <div className='glass-card flex flex-col'>
                                        {/* Project Image Container */}
                                        <div className='relative w-full bg-black/20 flex items-center justify-center p-2 rounded-t-xl'>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ duration: 0.5 }}
                                                className='relative flex items-center justify-center h-[100px] md:h-[160px] w-full'
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
                                                    <h4 className='text-base md:text-2xl font-semibold text-[var(--text-color)] pr-2 md:pr-3 leading-tight'>
                                                        {project.title}
                                                    </h4>
                                                    <div className='flex-shrink-0 flex gap-2'>
                                                        {project.linkToBuild && (
                                                            <a 
                                                                href={project.linkToBuild}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className='text-[var(--text-color-secondary)] hover:text-[var(--text-color)] transition-colors duration-300'
                                                            >
                                                                <svg 
                                                                    className="w-4 h-4 md:w-6 md:h-6 hover:scale-110 transition-transform duration-300"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                    aria-hidden="true"
                                                                >
                                                                    <path 
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                                                                    />
                                                                </svg>
                                                            </a>
                                                        )}
                                                        <a 
                                                            href={project.projectGithubLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className='text-[var(--text-color-secondary)] hover:text-[var(--text-color)] transition-colors duration-300'
                                                        >
                                                            <svg 
                                                                className="w-4 h-4 md:w-6 md:h-6 hover:scale-110 transition-transform duration-300"
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
                                                <div className='flex flex-wrap gap-1 py-1 md:py-2 justify-start'>
                                                    {project.technologies?.map((technology) => (
                                                        <div 
                                                            key={technology._id}
                                                            className='group relative'
                                                        >
                                                            <div className='relative h-6 w-6 md:h-16 md:w-16'>
                                                                <Image 
                                                                    className='object-contain filter hover:grayscale transition-all duration-300 hover:scale-110'
                                                                    src={urlFor(technology.image)}
                                                                    alt={technology.title || ''}
                                                                    fill
                                                                    unoptimized={urlFor(technology.image).toLowerCase().endsWith('.gif')}
                                                                />
                                                            </div>
                                                            <div className='absolute -top-6 left-1/2 -translate-x-1/2 
                                                                opacity-0 group-hover:opacity-100 transition-opacity duration-200
                                                                glass-effect px-1.5 py-0.5 rounded-lg text-[10px] md:text-xs text-[var(--text-color)] whitespace-nowrap'>
                                                                {technology.title}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Project Summary */}
                                            <div className='px-2 md:px-3 pb-4'>
                                                <div className='h-[180px] md:h-[200px] overflow-y-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0EA5E9]/80 pr-4'>
                                                    <ul className='list-disc list-inside space-y-2 md:space-y-3'>
                                                        {project.summary ? 
                                                            project.summary.split('• ').filter(Boolean).map((point, index) => (
                                                                <li 
                                                                    key={index} 
                                                                    className='text-xs md:text-base text-[var(--text-color-secondary)] leading-relaxed pl-1'
                                                                    style={{ display: 'list-item' }}
                                                                >
                                                                    {point.trim()}
                                                                </li>
                                                            ))
                                                            : 
                                                            <li className='text-xs md:text-base text-[var(--text-color-secondary)] leading-relaxed pl-1'>
                                                                No project description available.
                                                            </li>
                                                        }
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
                        className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 md:translate-x-12 
                        bg-[#0EA5E9]/30 hover:bg-[#0EA5E9]/50 p-1.5 md:p-2 rounded-full z-10 glass-title'
                    >
                        <ChevronRightIcon className='h-5 w-5 md:h-6 md:w-6 text-[#0EA5E9]' />
                    </button>
                </div>

                <div className='flex flex-col gap-1 mt-2 md:-mt-2'>
                    {/* Progress bar */}
                    <div className='relative w-full h-2 bg-gray-800 rounded-full hidden md:block'>
                        <div 
                            className='absolute h-full bg-[#0EA5E9]/40 rounded-full transition-all duration-500'
                            style={{
                                width: `${100 / projects.length}%`,
                                left: `${(currentIndex * 100) / projects.length}%`
                            }}
                        />
                    </div>

                    {/* Project counter */}
                    <div className='text-center text-[var(--text-color-muted)]'>
                        <span className='text-[var(--accent-color)]'>{currentIndex + 1}</span>
                        <span> / {projects.length}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
