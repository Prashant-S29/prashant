import { ArticleCard } from '@/components/common';
import React from 'react';

export const Articles = () => {
  return (
    <div className="rounded-lg border border-[#242424] px-5 py-4">
      <div>
        <span className="text-[16px] font-semibold text-white">Articles</span>
      </div>
      <div className='leading-tight sm:leading-normal'>
        <span className="text-[14px] font-medium text-[#858585]">
          Sharing my learnings and experiences on Design and Tech and more.
        </span>
      </div>
      <div className="mt-5 flex flex-col  w-full grid-cols-2 gap-x-2 sm:grid">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
};

export default Articles;
