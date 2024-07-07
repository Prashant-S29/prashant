import React from 'react';

// Components
import { Link } from '@/components/Link';

const NotFound = () => {
  return (
    <div className="flex w-full bg-[#161616]">
      <div className="hidden h-screen min-w-[100px] border-r border-[#242424] p-5 lg:block" />
      <div className="flex h-screen w-full flex-col">
        <div className="hidden h-[100px] w-full border-b border-[#242424] p-5 lg:block" />
        <div className="flex h-full w-full items-center justify-center text-center">
          <div className="leading-tight">
            <div>
              <span className="text-[60px] font-bold text-white">404</span>
            </div>
            <div>
              <span className="text-[12px] font-semibold text-[#858585]">Page Not Found</span>
            </div>
            <div className="mt-5">
              <Link
                href="/"
                className="text-[13px] font-semibold text-[#FFF] underline underline-offset-2 sm:text-[15px]"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden h-[100px] w-full items-center border-t border-[#242424] px-5 lg:flex">
          <div className="flex items-center gap-3 rounded-full border border-[#2c2c2c] px-6 py-3">
            <div className="size-[3px] rounded-full bg-[#1aff57] shadow-[0_0_5px_2px_rgba(26,255,87)]" />
            <span className="text-[12px] text-white">Available for Work</span>
          </div>
        </div>
      </div>
      <div className="hidden h-screen min-w-[100px] border-l border-[#242424] p-5 lg:block" />
    </div>
  );
};

export default NotFound;
