import { Metadata } from 'next';
import { ReposPage } from './reposPage';

export const metadata: Metadata = {
  title: 'Repos',
  description: 'My contributions and open posts on Github.',
};

const Projects = () => {
  return <ReposPage />;
};

export default Projects;
