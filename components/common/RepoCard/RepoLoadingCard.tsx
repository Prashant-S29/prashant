import React from 'react';

export const RepoLoadingCard = () => {
  return (
    <div>
      <div className="h-[100px] w-full rounded-lg border border-[#242424] bg-[#1c1c1c] p-4 leading-tight">
        <div>
          <div className="loaderCard h-[8px] w-[100px] rounded-full"></div>
          <div className="loaderCard mt-1 h-[8px] w-[200px] rounded-full"></div>
        </div>
        <div className="mt-3 line-clamp-2">
          <div className="loaderCard mt-1 h-[8px] w-full rounded-full"></div>
          <div className="loaderCard mt-1 h-[8px] w-[100px] rounded-full"></div>
          <div className="loaderCard mt-1 h-[8px] w-[150px] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
