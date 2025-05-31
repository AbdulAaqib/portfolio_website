import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";
import ClientSocialIcon from "./ClientSocialIcon";
import { useTheme } from "../context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

type Props = {
    socials: Social[];
}

const sectionNames: { [key: string]: string } = {
    'hero': 'Home',
    'about': 'About',
    'experience': 'Experience',
    'skills': 'Skills',
    'projects': 'Projects',
    'contact': 'Contact'
};

export default function Header({ socials }: Props) {
    const [mounted, setMounted] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className={`sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center ${isDarkMode ? 'text-gray-200' : 'text-black'}`}>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-row items-center"
            >
                {/* Social Icons */}
                {socials.map((social) => (
                    <ClientSocialIcon
                        key={social._id}
                        url={social.url}
                        fgColor={isDarkMode ? "gray" : "black"}
                        bgColor="transparent"
                        className="cursor-pointer"
                    />
                ))}
            </motion.div>

            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-row items-center text-gray-300 cursor-pointer"
            >
                {/* Theme Toggle */}
                {mounted && (
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-lg hover:ring-2 hover:ring-gray-300 ${
                            isDarkMode ? 'text-gray-200' : 'text-gray-800'
                        }`}
                    >
                        {isDarkMode ? (
                            <SunIcon className="h-6 w-6" />
                        ) : (
                            <MoonIcon className="h-6 w-6" />
                        )}
                    </button>
                )}

                <Link href="#contact">
                    <motion.div
                        initial={{
                            x: 500,
                            opacity: 0,
                            scale: 0.5,
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 1.5,
                        }}
                        className="flex flex-row items-center cursor-pointer ml-4"
                    >
                        <ClientSocialIcon
                            className="cursor-pointer"
                            url="#contact"
                            fgColor={isDarkMode ? "gray" : "black"}
                            bgColor="transparent"
                        />
                        <p className={`uppercase hidden md:inline-flex text-sm ${isDarkMode ? 'text-gray-200' : 'text-black'}`}>
                            Get In Touch
                        </p>
                    </motion.div>
                </Link>
            </motion.div>
        </header>
    );
}