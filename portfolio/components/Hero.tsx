import React from 'react';
import { Cursor,useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image'
type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi, My name is Abdul Aaqib", 
        "Dude__who_solve_rubiks_cubes.py", 
        "likes_to_make_fun_AI_projects.ONNX",
    ],
    loop: true,
    delaySpeed: 2000,
    });
    return( 
    <div className='h-screen flex flex-col space-y-8 items-center justify-center 
    text-center overflow-hidden'>
        <BackgroundCircles />
        <Image 
            className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src="images\profile_picture.png"
            width={500}
            height={500}
            alt="Picture of the author"
        />
        <h1>
            {text}
            <Cursor cursorColor='#7FFF1E'/>
        </h1>
    </div>
    );
}