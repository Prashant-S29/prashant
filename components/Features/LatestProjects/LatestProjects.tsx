import React from 'react';

// Data
import { projectData } from '@/app/projects/data';

// Components
import { ProjectCard } from '@/components/common';

export const LatestProjects = () => {
  return (
    <div>
      <div>
        <span className="text-[16px] font-semibold text-[#ffffff]">Latest Projects</span>
      </div>
      <div className="mt-5 flex w-full grid-cols-2 flex-col gap-5 sm:grid sm:gap-2">
        <ProjectCard projectData={projectData[0]} />
        <ProjectCard projectData={projectData[1]} />
      </div>
    </div>
  );
};
