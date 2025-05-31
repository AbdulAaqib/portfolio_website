import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form"
import { motion } from "framer-motion"

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

type Props = {}

function ContactMe({}: Props) {
    const { 
        register, 
        handleSubmit, 
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:abdulaaqib4@gmail?subject=${formData.subject}&body=Hi, name is ${formData.name}. ${formData.message} (${formData.email})`;
    };

    return (
        <div className='section-container pb-16 md:pb-24'>
            <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='absolute top-[90px] md:top-[120px] uppercase tracking-[20px] text-adaptive 
                text-2xl text-center px-10 py-2 glass-title'
            >
                Contact
            </motion.h3>
            <div className='flex flex-col space-y-3 w-full max-w-lg mt-24 md:mt-28'>
                <h4 className='text-base md:text-lg font-semibold text-center text-adaptive glass-title px-6 py-3'>
                    I possess exactly what you require.{" "}
                    <span className='decoration-[#0EA5E9]/50 underline'>Let&apos;s Talk.</span>
                </h4>

                {/* Contact Info */}
                <div className='space-y-2 md:space-y-2.5 glass-title px-6 py-4'>
                    <div className='flex items-center space-x-2.5 justify-center'>
                        <PhoneIcon className='text-[#0EA5E9] h-4 w-4 animate-pulse'/>
                        <p className='text-xs md:text-sm text-adaptive-secondary'>+447597450424</p>
                    </div>

                    <div className='flex items-center space-x-2.5 justify-center'>
                        <EnvelopeIcon className='text-[#0EA5E9] h-4 w-4 animate-pulse'/>
                        <p className='text-xs md:text-sm text-adaptive-secondary'>abdulaaqib4@gmail.com</p>
                    </div>

                    <div className='flex items-center space-x-2.5 justify-center'>
                        <MapPinIcon className='text-[#0EA5E9] h-4 w-4 animate-pulse'/>
                        <p className='text-xs md:text-sm text-center max-w-sm text-adaptive-secondary'>
                            Slough, UK - 20 mins away from Central London by Train
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <form 
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col space-y-2 w-full mt-2'
                >
                    <div className='flex flex-col md:flex-row gap-2'>
                        <input 
                            {...register('name')} 
                            placeholder="Name" 
                            className="contactInput text-xs"
                            type="text" 
                        />
                        <input 
                            {...register('email')} 
                            placeholder="Email" 
                            className="contactInput text-xs" 
                            type="email" 
                        />
                    </div>

                    <input 
                        {...register('subject')} 
                        placeholder="Subject" 
                        className="contactInput text-xs" 
                        type="text" 
                    />

                    <textarea 
                        {...register('message')} 
                        placeholder="Message" 
                        className="contactInput text-xs min-h-[80px]"
                    />

                    <button 
                        type="submit"
                        className='bg-[#0EA5E9]/70 py-2 px-4 rounded-md text-black font-bold text-xs
                        hover:bg-[#0EA5E9]/90 transition-colors duration-300'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactMe;