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
            <div className='relative z-20 flex flex-col items-center justify-center h-screen space-y-6'>
                <div className='glass-title px-10 py-3'>
                    <h2 className='text-sm uppercase text-[var(--text-color-secondary)] tracking-[15px]'>
                        AI & Software Developer
                    </h2>
                </div>
                
                <div className='glass-title px-10 py-4'>
                    <h1 className='text-2xl md:text-4xl lg:text-5xl font-semibold text-center'>
                        <span className='mr-3'>{text}</span>
                        <Cursor cursorColor='#0EA5E9'/>
                    </h1>
                </div>

                <div className='pt-5'>
                    <div className='flex flex-wrap justify-center gap-x-2 gap-y-3 md:gap-4'>
                        <Link href="#about">
                            <button className='glass-title px-4 py-2 text-sm md:text-base uppercase tracking-widest transition-all hover:bg-white/10'>About</button>
                        </Link>
                        <Link href="#experience">
                            <button className='glass-title px-4 py-2 text-sm md:text-base uppercase tracking-widest transition-all hover:bg-white/10'>Experience</button>
                        </Link>
                        <Link href="#skills">
                            <button className='glass-title px-4 py-2 text-sm md:text-base uppercase tracking-widest transition-all hover:bg-white/10'>Skills</button>
                        </Link>
                        <Link href="#projects">
                            <button className='glass-title px-4 py-2 text-sm md:text-base uppercase tracking-widest transition-all hover:bg-white/10'>Projects</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}