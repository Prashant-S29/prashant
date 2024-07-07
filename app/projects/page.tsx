import { Metadata } from 'next';
import { ProjectsPage } from './projectsPage';

export const metadata: Metadata = {
  title: 'Projects',
  description: "These are all the projects I've worked on. ",
};

const Projects = () => {
  return <ProjectsPage />;
};

export default Projects;
