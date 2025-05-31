import React, { useState, useEffect } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { PageInfo } from '../typings';
import { useTheme } from '../context/ThemeContext';
import Link from 'next/link';

type Props = {
    pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
    const [isMounted, setIsMounted] = useState(false);
    const { isDarkMode } = useTheme();

    const [text] = useTypewriter({
        words: [
            "Hi, I'm Abdul Aaqib",
            "Guy-who-loves-Coffee.tsx",
            "<ButLovesToCodeMore />",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className='section-container'>
            {/* Content */}
            <div className='relative z-20 flex flex-col items-center space-y-8'>
                <div className='glass-title px-10 py-3'>
                    <h2 className='text-sm uppercase text-[var(--text-color-secondary)] tracking-[15px]'>
                        AI & Software Developer
                    </h2>
                </div>
                
                <div className='w-full glass-title px-6 py-4 max-w-2xl mx-auto'>
                    <h1 className='text-4xl lg:text-5xl font-semibold text-[var(--text-color)]'>
                        <span className='mr-3'>{text}</span>
                        <Cursor cursorColor='#0EA5E9' />
                    </h1>
                </div>

                <div className='pt-5 space-x-2 md:space-x-4'>
                    <Link href="#about">
                        <button className='heroButton glass-title'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton glass-title'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton glass-title'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton glass-title'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}