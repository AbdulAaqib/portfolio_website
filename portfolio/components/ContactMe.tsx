import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form"
import { motion } from "framer-motion"
import { PageInfo } from '../typings'

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

type Props = {
    pageInfo: PageInfo;
}

function ContactMe({ pageInfo }: Props) {
    const { 
        register, 
        handleSubmit, 
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:${pageInfo.email}?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
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
                    Contact
                </motion.h3>
            </div>

            <div className='flex flex-col items-center justify-center space-y-4 md:space-y-6 w-full max-w-7xl mx-auto px-4 md:px-10 mt-16 md:mt-16'>
                <h4 className='text-base md:text-xl text-center text-[var(--text-color-secondary)]'>
                    I&apos;ve got just what you need. <span className='underline decoration-[#0EA5E9]'>Let&apos;s Talk.</span>
                </h4>

                <div className='space-y-3 md:space-y-4 w-full max-w-md'>
                    <div className='flex items-center justify-center space-x-5 glass-card p-2 md:p-3'>
                        <PhoneIcon className='text-[#0EA5E9] h-6 w-6 animate-pulse'/>
                        <p className='text-sm md:text-base text-[var(--text-color)]'>{pageInfo?.phoneNumber}</p>
                    </div>

                    <div className='flex items-center justify-center space-x-5 glass-card p-2 md:p-3'>
                        <EnvelopeIcon className='text-[#0EA5E9] h-6 w-6 animate-pulse'/>
                        <p className='text-sm md:text-base text-[var(--text-color)]'>{pageInfo?.email}</p>
                    </div>

                    <div className='flex items-center justify-center space-x-5 glass-card p-2 md:p-3'>
                        <MapPinIcon className='text-[#0EA5E9] h-6 w-6 animate-pulse'/>
                        <p className='text-sm md:text-base text-[var(--text-color)]'>{pageInfo?.address}</p>
                    </div>
                </div>

                <form 
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col space-y-2 w-full max-w-md mx-auto'
                >
                    <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contactInput' type='text'/>
                        <input {...register('email')} placeholder='Email' className='contactInput' type='email'/>
                    </div>

                    <input {...register('subject')} placeholder='Subject' className='contactInput' type='text'/>

                    <textarea {...register('message')} placeholder='Message' className='contactInput min-h-[100px]'/>

                    <button 
                        type='submit'
                        className='bg-[#0EA5E9]/80 hover:bg-[#0EA5E9] py-2 md:py-3 px-10 rounded-md text-white 
                        font-bold text-base transition-colors duration-300'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactMe;