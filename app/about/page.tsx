import { Metadata } from 'next';
import { AboutPage } from './aboutPage';

export const metadata: Metadata = {
  title: 'About',
  description:
    "Hey, I'm Prashant Singh, a self taught web developer and designer based in India. Currently working as a freelancer. My goal is to bring your ideas to life by crafting beautiful and inspiring websites.",
};

const Projects = () => {
  return <AboutPage />;
};

export default Projects;
