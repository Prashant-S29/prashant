import React from 'react';

// Assets
import { profileImageOne } from '@/public';

export const MobileHeader = () => {
  return (
    <div className="w-full bg-[#161616] p-5">
      <div className="flex items-center gap-2">
        <div
          className="size-[40px] rounded-full bg-[#858585] bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${profileImageOne.src})` }}
        />{' '}
        <div className="leading-tight">
          <div>
            <span className="text-[13px] font-semibold text-white">Prashant Singh</span>
          </div>
          <div>
            <span className="text-[13px] font-medium text-[#858585]">Web Developer & Designer</span>
          </div>
        </div>
      </div>
    </div>
  );
};
