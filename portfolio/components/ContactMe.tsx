import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form"

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
    const onSubmit: SubmitHandler<Inputs> = (formData) =>  { 
        window.location.href = `mailto:abdulaaqib4@gmail?subject=${formData.subject}&body=Hi, name is ${formData.name}. ${formData.message} (${formData.email})`;
    };
    return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left 
    md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-4 uppercase tracking-[10px] text-[#7FFF1E]/70 text-2xl '>
            Contact
        </h3>
        <div className='flex flex-col space-y-0'>
            <h4 className='text-lg font-semibold text-center'>
                I possess exactly what you require.{" "}
                <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk.</span>
            </h4>
            <div className='space-y-0'>
                <div className='flex items-start space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-lg'>+447597450424</p>
                </div>
                <div className='flex items-start space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-lg'>abdulaaqib4@gmail.com</p>
                </div>
                <div className='flex items-start space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-lg'>Slough, UK - 20 mins away from Central London by Train</p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}className='flex flex-col space-y-2 w-fit mx-auto py'>
                <div className='flex space-x-2'>
                    <input 
                        {...register('name')} 
                        placeholder="Name" 
                        className="contactInput"
                        type="text" 
                    />
                    <input 
                        {...register('email')} 
                        placeholder="Email" 
                        className="contactInput" 
                        type="email" 
                    />
                </div>
                <input 
                    {...register('subject')} 
                    placeholder="Subject" 
                    className="contactInput" 
                    type="text" 
                />
                <textarea 
                    {...register('message')} 
                    placeholder="Message" 
                    className="contactInput" 
                />
                <button 
                    type="submit"
                    className='bg-[#7FFF1E]/70 py-5 px-10 rounded-md text-black font-bold text-lg'
                >
                    Submit
                </button>
            </form>
        </div>
    </div>
    );
}

export default ContactMe;