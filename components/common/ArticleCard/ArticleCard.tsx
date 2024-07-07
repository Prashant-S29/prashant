import React from 'react';

export const ArticleCard = () => {
  return (
    <div className="flex w-full cursor-pointer items-center gap-2 rounded-lg bg-[#161616] py-2 sm:p-3 duration-200 hover:bg-[#1c1c1c]">
      <div className="h-[40px] min-w-[40px] rounded-[5px] bg-[#858585]" />
      <div className="leading-snug">
        <div>
          <span className="text-[14px] font-medium text-white">DNA Data Storage</span>
        </div>
        <div>
          <span className="text-[13px] sm:text-[14px] text-[#858585]">Technology</span>
        </div>
      </div>
    </div>
  );
};
