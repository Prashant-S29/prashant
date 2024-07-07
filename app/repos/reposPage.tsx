'use client';

import React from 'react';

// Hooks
import { useRepos } from '@/hooks/github';
import { RepoCard, RepoLoadingCard } from '@/components/common';

export const ReposPage = () => {
  const { data, isLoading, error } = useRepos('Prashant-S29');

  return (
    <div className="min-h-screen w-full bg-[#161616] p-5 lg:px-[80px] lg:py-[70px] xl:px-[150px] xl:py-[100px]">
      <div>
        <span className="text-[22px] font-bold text-[#ffffff] sm:text-[26px] lg:text-[30px]">Repos</span>
      </div>
      <div className="leading-tight">
        <span className="text-[14px] text-[#858585] sm:text-[16px] lg:text-[18px]">
          My contributions and open posts on Github.
        </span>
      </div>
      {isLoading && (
        <div className="mt-5 flex w-full grid-cols-2 flex-col gap-5 sm:grid sm:gap-2">
          <RepoLoadingCard />
          <RepoLoadingCard />
          <RepoLoadingCard />
        </div>
      )}
      {error && (
        <div className="mt-5 w-fit rounded-lg border border-[#242424] bg-[#1c1c1c] px-4 py-3 leading-tight">
          <span className="text-[13px] font-medium text-[#858585]">{error.message}</span>
        </div>
      )}
      {data && data.length === 0 && (
        <div className="mt-5 w-fit rounded-lg border border-[#242424] bg-[#1c1c1c] px-4 py-3 leading-tight">
          <span className="text-[13px] font-medium text-[#858585]">No repositories found</span>
        </div>
      )}
      <div className="mt-5 flex w-full grid-cols-2 flex-col gap-5 sm:grid sm:gap-2">
        {data && data.map((repoData, index) => <RepoCard key={index} data={repoData} />)}
      </div>
    </div>
  );
};
