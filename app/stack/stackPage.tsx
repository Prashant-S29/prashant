import React from 'react';

// Components
import { StackCard } from '@/components/common';

// Data
import { stackData } from './data';

export const StackPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#161616] p-5 lg:px-[80px] lg:py-[70px] xl:px-[150px] xl:py-[100px]">
      <div>
        <span className="text-[22px] font-bold text-[#ffffff] sm:text-[26px] lg:text-[30px]">Stack</span>
      </div>
      <div className="leading-tight">
        <span className="text-[14px] text-[#858585] sm:text-[16px] lg:text-[18px]">
          Software, Tech and Resources I use on a regular basis.
        </span>
      </div>
      <div>
        {stackData.map((data, index) => (
          <div key={index} className="mt-5 rounded-lg border border-[#242424] px-5 py-4">
            <div>
              <span className="text-[15px] font-semibold text-white sm:text-[16px]">{data.category}</span>
            </div>
            <div className="mt-2 flex w-full grid-cols-2 flex-col gap-x-2 sm:grid">
              {data.tools.map((toolsData, index) => (
                <StackCard key={index} toolsData={toolsData} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
