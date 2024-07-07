import React from 'react';
import Image from 'next/image';

// Types
import { ProjectDataType } from '@/types';

// Assets
import { background } from '@/public';

// Components
import { Link } from '@/components/Link';

export const ProjectCard = ({
  projectData,
  filterBy,
}: {
  projectData: ProjectDataType;
  filterBy?: 'all' | 'development' | 'design';
}) => {
  return (
    <div
      className={`${filterBy === 'all' || filterBy === projectData.tag.toLowerCase() || filterBy === undefined ? 'block' : 'hidden'} duration-200`}
    >
      <Link href={`/projects/${projectData.id}`}>
        <div className="rounded-lg border border-[#242424] bg-[#1c1c1c]">
          <div className="relative flex h-[200px] xl:h-[250px] w-full items-center justify-center rounded-t-lg bg-[#1c1c1c]">
            <div className="relative flex h-full w-full justify-center rounded-lg border border-[#242424] bg-[#2c2c2c] bg-cover bg-no-repeat">
              <Image src={background} alt="Background" priority className="absolute h-full w-full object-cover rounded-t-lg" />
              <Image
                src={projectData.mainImage}
                alt={projectData.title}
                unoptimized
                priority
                className="relative z-[10] h-full w-[90%] object-cover"
              />
            </div>
          </div>
          <div className="border-t border-[#242424] px-3 py-2 leading-tight sm:leading-normal">
            <div>
              <span className="text-[14px] font-medium text-[#ffffff]">{projectData.title}</span>
            </div>
            <div className="line-clamp-1">
              <span className="text-[14px] text-[#858585]">{projectData.tagLine}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
