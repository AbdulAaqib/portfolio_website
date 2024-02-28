import React from 'react';
import { Cursor,useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi, My name is Abdul Aaqib", 
        "Dude__who_solves_rubiks_cubes.py", 
        "likes_to_make_fun_AI_projects.ONNX",
    ],
    loop: true,
    delaySpeed: 2000,
    });
    return( 
    <div className='h-screen flex flex-col space-y-8 items-center justify-center 
    text-center overflow-hidden'>
        <BackgroundCircles />
        <img
            className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src="https://lh3.googleusercontent.com/fife/ALs6j_EY6mDYfwzhmXkSm-LwOcL0CpdHabdFbg5I4MyOvWYHxdnajMLSigCUyZyztzRQeZLMi7AW4g0dk_68Sy0WntUAOoeqBAV9JvQZ6pnEdd4n6_WhhG8ngtDJ0rOqo6tYodTMwspcwuLgJfGHgQzBtolo6N9AwCPDsRd76mUjfv8Qp8yOwp31MMIdjQKoOYhjBJiD_bEmmgghuT6-oWydbzi_MLhiMf2lXqpDP6UQDBZq_A-sQ-JYdAAPZBbvru4gblsPwpyVEiyg27p2W9-B2CQd18dRjawJd7Vx_saaoBA46GL4J1Kn8zdcoqQX7PEH7xumG4XmKQIOsdN91aWBExBwDpNkVu2tn1_WmAnFWF8zdGP82befmURk2mKipGpWf5Z3ziCDup2kpE2uDLBUsZbwIgalL7vPfe9Ykltt6XnMNJWLa82USb4zesbAfC6Ksmm9ZX2p6RcbLBYNwvTYVaVkMgw_LsAO0pnxJchVRKGMbUKh8fDb2M15w16lR5RjT9xTlc9Pat_pfgTTP2UyKuxTY5Cz8rFZTmu7GvzoWGKDduH9sxdjlusQG2ivtd6uuUZ4Go5QTkN6hV1SOA4h9lTzmHwwOcOSJRi4o9LlS7UCae0z7XnSnFHBPSYn0QlL9cevxTuqmSLejJ5EW8HbT7-qsRds498tGLLxAVb1F7Y9KGigtRGP9XCZWrCRnCWoRAAVaHrs7yQF43xXe2W6s4_fnDMVMVDvPkmbkMGfkbYeMBrnw0ZAzFEMKnwGgYRsyye67u62tn2md8hYSxmgikQ6EMBLUQxiI4LxbUUp9iYqTz6132Gi5SHB8urnZGQB_K9N0ymFglrGEIxZJqzm6TnkdzLPBTCbdGNb38veC5rFqBiUu5ncIhSnBaKy5zgj9O-C3qj47jOTiyKI6N9Cpzmxuyc0WfkDoOSlyECGONjKkO3K9bxCt2OzDjnt-tFUtluVOwjYfbO3K2HiHUQmFhcYCwnhzIqxTRnjuwxekH_wQz8tOUahrjMkj4d82Aeox5egLogd=w1920-h863"
            alt=""
        />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
            AI Enthusiast
            </h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#7FFF1E'/>
            </h1>
            <div className='pt-5'>
                <Link href="#about">
                <button className='heroButton'>About</button>
                </Link>
                <Link href="#experience">
                <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#skills">
                <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#projects">
                <button className='heroButton'>Projects</button>
                </Link>
            </div>
        </div>
    </div>
    );
}