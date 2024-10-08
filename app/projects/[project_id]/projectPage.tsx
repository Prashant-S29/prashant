'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Icons
import { LeftArrowIcon, RightArrowIcon } from '@/Icons';

// Data
import { projectData } from '../data';

// Hooks
import { useRouter } from 'next/navigation';
import { ProjectCard } from '@/components/common';

// Types
import { ProjectDataType } from '@/types';

// Assets
import { background } from '@/public';

export const ProjectPage = ({ params }: { params: { project_id: string } }) => {
  const router = useRouter();

  const [data, setData] = useState<ProjectDataType | undefined>();
  const [nextProjectData, setNextProjectData] = useState<ProjectDataType | undefined>();

  // Getting the project data using the project id
  useEffect(() => {
    const getData = () => {
      const data = projectData.find((data) => data.id === params.project_id);
      if (!data) {
        router.push('/404');
      }
      setData(data);

      // determine the next project index
      const currentIndex = projectData.findIndex((data) => data.id === params.project_id);
      const nextProjectIndex = currentIndex >= projectData.length - 1 ? 0 : currentIndex + 1;

      // Getting the next project data
      setNextProjectData(projectData[nextProjectIndex]);
    };
    getData();
  }, [params.project_id, router]);

  return (
    <div className="min-h-screen w-full bg-[#161616] p-5 md:px-[100px] lg:px-[120px] xl:px-[300px]">
      {data && (
        <div>
          <div>
            <Link href="/projects">
              <div className="flex items-center gap-2 text-[13px] font-medium leading-none text-[#858585]">
                <LeftArrowIcon />
                <span>All Projects</span>
              </div>
            </Link>
          </div>

          <div className="mt-5">
            <span className="text-[22px] font-bold capitalize text-[#ffffff] sm:text-[26px] lg:text-[30px]">
              {data?.title}
            </span>
          </div>
          <div className="mt-2">
            <span className="text-[13px] font-medium text-[#858585]">
              {data?.date} &nbsp;&#x2022;&nbsp; {data?.tag}
            </span>
          </div>
          {data.tag === 'Design' ? (
            <div className="flex items-center gap-5">
              <Link href={data.liveLink} className="flex items-center gap-2 text-[13px] font-medium text-[#858585]">
                Figma File <RightArrowIcon />
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-5">
              <Link href={data.liveLink} className="flex items-center gap-2 text-[13px] font-medium text-[#858585]">
                See Live <RightArrowIcon />
              </Link>
              {data.sourceCodeLink && (
                <Link
                  href={data.sourceCodeLink}
                  className="flex items-center gap-2 text-[13px] font-medium text-[#858585]"
                >
                  Source Code <RightArrowIcon />
                </Link>
              )}
            </div>
          )}

          <div className="relative mt-5 flex h-[280px] w-full items-center justify-center rounded-lg border border-[#242424] bg-[#1c1c1c] bg-cover bg-no-repeat max-[400px]:h-full sm:h-[350px]">
            <Image
              src={background}
              width={400}
              height={350}
              alt="Background"
              priority
              className="absolute h-full w-full rounded-t-lg object-cover"
            />
            <Image
              src={data.mainImage}
              alt={data.title}
              unoptimized
              priority
              className="relative z-[10] h-full w-[90%] object-cover"
            />
          </div>
          <div className="p-0 pt-5 leading-snug sm:p-[40px]">
            <div>
              <span className="text-[14px] text-[#858585]">
                <span className="font-semibold">Background: </span> {data?.background}
              </span>
            </div>
            <div className="mt-5">
              <div>
                <span className="text-[18px] font-semibold capitalize text-white sm:text-[20px]">Challenges</span>
              </div>
              <div className="mt-2">
                <ul className="list-decimal space-y-2 pl-5 text-[14px] text-[#858585]">
                  {data?.challenges.map((challenge, index) => <li key={index}>{challenge}</li>)}
                </ul>
              </div>
            </div>
            <div className="mt-5">
              <div>
                <span className="text-[18px] font-semibold capitalize text-white sm:text-[20px]">Solutions</span>
              </div>
              <div className="mt-2">
                <ul className="list-decimal space-y-2 pl-5 text-[14px] text-[#858585]">
                  {data?.solutions.map((solution, index) => (
                    <li key={index}>
                      <span className="font-semibold">{solution.heading}: </span>
                      {solution.content}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-5">
              <div>
                <span className="text-[18px] font-semibold capitalize text-white sm:text-[20px]">Outcome</span>
              </div>
              <div className="mt-2">
                <span className="text-[14px] text-[#858585]">{data?.outcome}</span>
              </div>
            </div>
            {/* <div className="mt-5 grid w-full grid-cols-2 gap-2">
              <div className="h-[200px] w-full rounded-lg border border-[#242424] bg-[#1c1c1c]"></div>
              <div className="h-[200px] w-full rounded-lg border border-[#242424] bg-[#1c1c1c]"></div>
              <div className="h-[200px] w-full rounded-lg border border-[#242424] bg-[#1c1c1c]"></div>
              <div className="h-[200px] w-full rounded-lg border border-[#242424] bg-[#1c1c1c]"></div>
            </div> */}
            {nextProjectData && (
              <div className="mt-[50px] sm:pr-[100px]">
                <span className="text-[18px] font-semibold capitalize text-white sm:text-[20px]">Next Project</span>
                <div className="mt-3">
                  <ProjectCard projectData={nextProjectData} />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
