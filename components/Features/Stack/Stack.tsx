import React from 'react';

// Components
import { StackCard } from '@/components/common';
import { stackData } from '@/app/stack/data';
import Link from 'next/link';

export const Stack = () => {
  return (
    <div className="rounded-lg border border-[#242424] px-5 py-4">
      <div>
        <span className="text-[16px] font-semibold text-white">Stack</span>
      </div>
      <div className="leading-tight sm:leading-normal">
        <span className="text-[14px] font-medium text-[#858585]">
          Software, Tech and Resources I use on a regular basis.
        </span>
      </div>
      <div className="mt-2 flex w-full grid-cols-2 flex-col gap-x-2 sm:grid">
        {stackData.slice(0, 3).map((toolsData, index) => (
          <StackCard key={index} toolsData={toolsData.tools[index]} />
        ))}
      </div>
      <div className="mt-2">
        <Link href="/stack">
          <button className="w-full rounded-lg border border-[#242424] bg-[#1c1c1c] px-5 py-2 text-[13px] font-medium text-white duration-200 hover:text-[#858585] sm:text-[14px]">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Stack;
