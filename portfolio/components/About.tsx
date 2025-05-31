import React from 'react'
import { motion } from "framer-motion";
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo
};

export default function About({ pageInfo }: Props) {
    return (
        <div className='section-container'>
            <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='absolute top-[90px] md:top-[120px] uppercase tracking-[20px] text-adaptive 
                text-2xl text-center px-10 py-2 glass-title'
            >
                About
            </motion.h3>
            <div className='relative flex flex-col md:flex-row items-center max-w-6xl px-4 md:px-8 justify-center md:justify-evenly w-full'>
                <motion.img
                    initial={{
                        x: -200,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1.2,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    src={urlFor(pageInfo?.profilePic)}
                    className='mb-6 md:mb-0 flex-shrink-0 w-32 h-32 rounded-full object-cover
                    md:rounded-lg md:w-48 md:h-72 xl:w-[300px] xl:h-[400px]'
                    alt={pageInfo?.name || 'Profile picture'}
                />

                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0 }}
                    className='space-y-4 px-4 md:px-8 max-w-2xl'
                >
                    <h4 className='text-xl md:text-2xl font-semibold text-adaptive glass-title px-6 py-3'>
                        Here is a brief <span className='underline decoration-[#0EA5E9]'>background</span> on myself👋
                    </h4>
                    <p className='text-sm md:text-base text-adaptive-secondary leading-relaxed glass-title px-6 py-4'>
                        {pageInfo?.backgroundInformation}
                    </p>
                </motion.div>
            </div>
        </div>
    );
}