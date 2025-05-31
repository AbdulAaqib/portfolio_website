import React from 'react'
import { motion } from "framer-motion";
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';
import Image from 'next/image';

type Props = {
    pageInfo: PageInfo
};

export default function About({ pageInfo }: Props) {
    return (
        <div className='section-container scroll-mt-[84px] h-screen flex flex-col justify-center'>
            <div className='w-full flex justify-center'>
                <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='absolute uppercase tracking-[8px] md:tracking-[20px] text-adaptive 
                    text-base md:text-2xl text-center px-4 md:px-10 py-1.5 md:py-2 glass-title'
                >
                    About
                </motion.h3>
            </div>
            <div className='relative flex flex-col md:flex-row items-center max-w-6xl px-4 md:px-8 justify-center md:justify-evenly w-full mt-16 md:mt-24'>
                <motion.div
                    initial={{
                        x: -200,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1.2,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className='flex-shrink-0 mb-6 md:mb-0'
                >
                    <Image
                        src={urlFor(pageInfo?.profilePic)}
                        alt={pageInfo?.name || 'Profile picture'}
                        width={300}
                        height={400}
                        className='w-32 h-32 rounded-full object-cover
                        md:rounded-lg md:w-48 md:h-72 xl:w-[300px] xl:h-[400px] glass-card'
                        priority
                    />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0 }}
                    className='space-y-4 px-4 md:px-8 max-w-2xl'
                >
                    <h4 className='text-lg md:text-2xl font-semibold text-adaptive glass-title px-4 md:px-6 py-2 md:py-3 flex flex-row flex-nowrap items-center whitespace-nowrap'>
                        Here is a brief<span className='underline decoration-[#0EA5E9] mx-1'>background</span>on myself<span className='ml-1'>👋</span>
                    </h4>
                    <div className='glass-title'>
                        <div className='h-[300px] md:h-[300px] overflow-y-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0EA5E9]/80 px-6 py-4'>
                            <p className='text-sm md:text-base text-adaptive-secondary leading-relaxed'>
                                {pageInfo?.backgroundInformation}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}