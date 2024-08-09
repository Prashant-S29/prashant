'use client';

import React, { useState } from 'react';

// Components
import { ProjectCard } from '@/components/common';

// Data
import { filterOptions, projectData } from './data';
import { FilterOption } from '@/types';

export const ProjectsPage = () => {
  const [filterBy, setFilterBy] = useState<FilterOption>('All');

  return (
    <div className="min-h-screen w-full bg-[#161616] p-5 lg:px-[80px] lg:py-[70px] xl:px-[150px] xl:py-[100px]">
      <div>
        <span className="text-[22px] font-bold text-[#ffffff] sm:text-[26px] lg:text-[30px]">Projects</span>
      </div>
      <div className="leading-snug">
        <span className="text-[14px] text-[#858585] sm:text-[16px] lg:text-[18px]">
          Crafting great websites and digital experiences
        </span>
      </div>
      <div className="mt-5 flex items-center gap-3">
        {filterOptions.map((option, index) => (
          <div key={index} className="cursor-pointer" onClick={() => setFilterBy(option)}>
            <span
              className="rounded-md border bg-[#1c1c1c] px-3 py-1 text-[13px] font-medium text-[#858585] duration-200"
              style={{ borderColor: filterBy === option ? '#3c3c3c' : '#242424' }}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-5 flex w-full grid-cols-2 flex-col gap-5 sm:grid sm:gap-2">
        {/* .slice().reverse() is used to reverse the order of the projects */}
        {projectData
          .slice()
          .reverse()
          .map((data, index) => (
            <ProjectCard key={index} projectData={data} filterBy={filterBy} />
          ))}
      </div>
    </div>
  );
};
