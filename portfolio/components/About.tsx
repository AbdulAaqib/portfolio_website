import React from 'react'
import { motion } from "framer-motion";
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';
type Props = {
  pageInfo: PageInfo
};

export default function About({ pageInfo }: Props) {
  return (
  <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ opacity: 1.5 }}
  className='flex flex-col relative h-screen text-center md:text-left
  md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
    <h3 className='absolute top-4 uppercase tracking-[20px]
    text-[#7FFF1E]/70 text-2xl'>
      About
    </h3>
    <motion.img
      initial={{
        x: -200,
        opacity: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      whileInView={{ opacity: 1, x: 0}}
      viewport={{ once: true}}
      src={urlFor(pageInfo?.profilePic).url()}
      className='-mb-20 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover
      md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[350px] space-y-10'
    />
    <div className='space-y-7 px-0 md:px-10'>
      <h4 className='text-xl font-semibold'>
        Here is a brief <span className='underline decoration-[#7FFF1E] '>background</span> on myself👋
      </h4>
      <p className='text-[14px] md:text-[17px] xl:text-[20px]'>{pageInfo?.backgroundInformation}</p>
    </div>
  </motion.div>);
  
}