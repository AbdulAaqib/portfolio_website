import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Experience, PageInfo, Project, Skill, Social } from '../typings';
import { fetchPageInfo } from "../utils/fetchPageInfo"
import  { fetchExperiences }  from '../utils/fetchExperience';
import  { fetchSkills } from '../utils/fetchSkills';
import  { fetchProjects } from '../utils/fetchProjects';
import  { fetchSocials } from '../utils/fetchSocials';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-30 scrollbar scrollbar-track-[#7FFF1E]/20 scrollbar-thumb-[#7FFF1E]/60'>
      <Head>
        <title>{pageInfo?.name} - Portfolio</title>
      </Head>
      <Header socials={socials} />

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
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className='sticky bottom-5 w-10 cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img 
              className='h-10 w-10 rounded-full grayscale hover:grayscale-0 space-x-3'
              src="https://wegotthiscovered.com/wp-content/uploads/2022/09/One-Piece-Monkey-D-Luffy-e1693333525114.jpg" 
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    // Use the updated fetch functions to ensure both local and deployed environments work
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
