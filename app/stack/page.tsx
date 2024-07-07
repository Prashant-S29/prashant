import { Metadata } from 'next';
import { StackPage } from './stackPage';

export const metadata: Metadata = {
  title: 'Stack',
  description: 'Software, Tech and Resources I use on a regular basis. ',
};

const Projects = () => {
  return <StackPage />;
};

export default Projects;
