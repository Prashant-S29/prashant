import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Types
import { FilterOption, ProjectDataType } from '@/types';

// Assets
import { background } from '@/public';

export const ProjectCard = ({ projectData, filterBy }: { projectData: ProjectDataType; filterBy?: FilterOption }) => {
  return (
    <div
      className={`${filterBy === 'All' || filterBy?.toLowerCase() === projectData.tag.toLowerCase() || filterBy === undefined ? 'block' : 'hidden'} duration-200`}
    >
      <Link
        href={projectData.status === 'Ongoing' ? '' : `/projects/${projectData.id}`}
        // aria-disabled={projectData.status === 'Ongoing'}
      >
        <div className="rounded-lg border border-[#242424] bg-[#1c1c1c]">
          <div className="relative flex h-[200px] w-full items-center justify-center rounded-t-lg bg-[#1c1c1c] xl:h-[250px]">
            <div className="relative flex h-full w-full justify-center rounded-lg border border-[#242424] bg-[#2c2c2c] bg-cover bg-no-repeat">
              <Image
                src={background}
                width={300}
                height={200}
                alt="Background"
                priority
                className="absolute h-full w-full rounded-t-lg object-cover"
              />
              <Image
                src={projectData.mainImage}
                alt={projectData.title}
                unoptimized
                width={300}
                height={200}
                priority
                className="relative z-[10] h-full w-[90%] object-cover"
              />
            </div>
          </div>
          <div className="relative border-t border-[#242424] px-3 py-2 leading-tight sm:leading-normal">
            {projectData.status === 'Ongoing' && (
              <div className="absolute right-0 top-0 m-1 mr-2">
                <span className="text-[11px] text-[#858585]">Ongoing</span>
              </div>
            )}

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
