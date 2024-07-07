import { projectData } from '../data';
import { ProjectPage } from './projectPage';

import { Metadata } from 'next';

type Props = {
  params: { project_id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // fetch data
  const data = projectData.find((data) => data.id === params.project_id);
  return {
    title: data?.title || 'My Project',
    description: data?.tagLine || "These are all the projects I've worked on. ",
  };
}

const Project = ({ params }: { params: { project_id: string } }) => {
  return <ProjectPage params={params} />;
};

export default Project;
