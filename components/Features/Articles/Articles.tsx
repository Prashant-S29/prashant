import { ArticleCard } from '@/components/common';
import React from 'react';
import { ArticleData } from './data';

export const Articles = () => {
  return (
    <div id="articles" className="rounded-lg border border-[#242424] px-5 py-4">
      <div>
        <span className="text-[16px] font-semibold text-white">Articles</span>
      </div>
      <div className="leading-tight sm:leading-normal">
        <span className="text-[14px] font-medium text-[#858585]">
          Sharing my learnings and experiences on Design and Tech and more.
        </span>
      </div>
      <div className="mt-5 flex w-full grid-cols-2 flex-col gap-x-2 sm:grid">
        {ArticleData.map((data, index) => (
          <ArticleCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
