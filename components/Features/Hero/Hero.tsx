import React from 'react';

// Components
import { CopyEmailButton } from '../CopyEmailButton';

export const Hero = () => {
  return (
    <div className="w-full leading-snug">
      <div>
        <span className="text-[22px] sm:text-[26px] lg:text-[30px] font-bold text-[#ffffff]">Hey, I{"'"}m Prashant Singh.</span>
      </div>
      <div>
        <span className="text-[22px] sm:text-[26px] lg:text-[30px] font-bold text-[#ffffff]">
          I design and develop <span className="text-[#858585]">websites.</span>
        </span>
      </div>
      <div className="mt-5">
        <span className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#858585]">
          It{"'"}s all about the design and development process. The more you know about it, the better you{"'"}ll be at
          it. I am Prashant Singh and this is v4 of my portfolio.
        </span>
      </div>
      <div className="mt-5 flex items-center gap-5">
        <div>
          <button className="rounded-[5px] border border-[#242424] bg-[#1c1c1c] px-5 py-2 text-[14px] font-medium text-[#ffffff]">
            About
          </button>
        </div>
        <div>
          <CopyEmailButton />
        </div>
      </div>
    </div>
  );
};
