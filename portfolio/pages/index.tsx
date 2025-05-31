import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Experience, PageInfo, Project, Skill, Social } from '../typings';
import { fetchPageInfo } from "../utils/fetchPageInfo"
import { fetchExperiences } from '../utils/fetchExperience';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSocials } from '../utils/fetchSocials';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import SplineWrapper from '../components/SplineWrapper';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={`relative ${isDarkMode ? 'bg-[rgb(36,36,36)]' : 'bg-gray-100'} min-h-screen`}>
      <Head>
        <title>{`${pageInfo?.name || ''} - Portfolio`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <Header socials={socials} />
      </nav>

      {/* Main Background Spline */}
      <div className='fixed inset-0 w-full h-full'>
        {isMounted && (
          <>
            {/* Top layer Spline - always visible */}
            <div className="absolute inset-0 z-20">
              <SplineWrapper
                scene="https://prod.spline.design/3JaP6TsLBfWbpVC2/scene.splinecode"
              />
            </div>
            {/* Theme-dependent layers */}
            <div className={`absolute inset-0 z-10 transition-opacity duration-300 ${isDarkMode ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <SplineWrapper
                scene="https://prod.spline.design/zZVPN1iqiFCGXOaC/scene.splinecode"
              />
            </div>
            <div className={`absolute inset-0 z-10 transition-opacity duration-300 ${!isDarkMode ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <SplineWrapper
                scene="https://prod.spline.design/f-jsmbq1noqLdAxu/scene.splinecode"
              />
            </div>
          </>
        )}
      </div>

      {/* Content Container */}
      <main className={`relative z-10 h-screen snap-y snap-mandatory overflow-y-scroll ${isDarkMode ? 'scrollbar-custom' : 'scrollbar-light'} pt-20`}>
        <section id="hero" className='snap-start'>
          <Hero pageInfo={pageInfo} />
        </section>

        <section id='about' className='snap-center'>
          <About pageInfo={pageInfo} />
        </section>

        <section id="experience" className='snap-center'>
          <WorkExperience experiences={experiences} />
        </section>

        <section id="skills" className='snap-start'>
          <Skills skills={skills} />
        </section>

        <section id="projects" className='snap-start'>
          <Projects projects={projects} />
        </section>

        <section id="contact" className='snap-start'>
          <ContactMe pageInfo={pageInfo} />
        </section>

        <Link href="#hero">
          <div className='fixed bottom-5 right-5 z-50'>
            <div className='flex items-center justify-center w-40 h-12 rounded-full 
            filter hover:grayscale cursor-pointer hover:scale-105 transition-all duration-300
            border border-[#0EA5E9]/20 hover:border-[#0EA5E9]/50
            bg-[rgb(17,25,40)] backdrop-blur-lg backdrop-saturate-200 shadow-lg'>
              <ChevronUpIcon className='w-8 h-8 text-[#0EA5E9]' />
            </div>
          </div>
        </Link>
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const pageInfo = await fetchPageInfo();
    const experiences = await fetchExperiences();
    const skills = await fetchSkills();
    const projects = await fetchProjects();
    const socials = await fetchSocials();

    return {
      props: {
        pageInfo,
        experiences,
        skills,
        projects,
        socials,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      notFound: true,
    };
  }
};
