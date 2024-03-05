import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../typings';
import { urlFor } from '../sanity';
import { SocialIcon } from "react-social-icons";

type Props = {
    projects: Project[];
};

function Projects({ projects }: Props) {
    // Sort projects by their assigned numbers
    const sortedProjects = projects.sort((a, b) => a.order - b.order);

    return ( 
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ opacity: 1.5 }}
            className='h-screen relative flex overflow-hidden flex-col text-left 
            md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-5 uppercase tracking-[10px] text-[#7FFF1E]/70 text-lg'>
                Projects      
            </h3>
            <div className="relative w-full flex overflow-x-scroll snap-x snap-mandatory 
            z-20 scrollbar-thin scrollbar-track-[#7FFF1E]/20 scrollbar-thumb-[#7FFF1E]/60 space-x-10">
                {sortedProjects.map((project, i) => (
                    <div key={project.id} className='w-screen flex-shrink-0 snap-center flex flex-col items-center justify-evenly p-10 md:p-10 h-220'>
                        <motion.img 
                            className={`w-[${project.width}px] h-[${project.height}px]`}
                            initial ={{
                                y: 100,
                                opacity: 0,
                            }} 
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 10 }}
                            viewport={{ once: true }}
                            src={urlFor(project?.image).url()}
                            alt=""
                        />
                        <div className='space-y-5 px-0 xl:max-w-7xl md:max-w-7xl py-6'>
                            <h4 className='text-2xl font-semibold text-center md:py-0'>
                                <span className='underline decoration-[#7FFF1E]/50'>
                                    Project {project.order} of {projects.length}:
                                </span>{" "}
                                {project?.title}
                                <SocialIcon 
                                    key={project._id}
                                    url={project.projectGithubLink}
                                    fgColor="gray"
                                    bgColor="transparent"
                                />
                            </h4>
                            <div className='flex items-center p space-x-2 justify-center'>
                                {project.technologies.map((technology) => (
                                    <img 
                                        className='h-10 w-10'
                                        key={technology._id}
                                        src={urlFor(technology.image).url()}
                                        alt=""
                                    />
                                ))}
                                
                            </div>
                            <p className='xl:text-lg md:text-lg text-left  md:text-left'>
                                {project?.summary}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full absolute top-[30%] bg-[#7FFF1E]/10 left-0 h-[500px] -skew-y-12' />
        </motion.div>
    );
}

export default Projects;
