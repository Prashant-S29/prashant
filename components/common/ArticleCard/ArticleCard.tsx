import React from 'react';

// Types
import { ArticleDataType } from '@/types';
import Link from 'next/link';

export const ArticleCard = ({ data }: { data: ArticleDataType }) => {
  return (
    <div>
      <Link href={data.link} target="_blank">
        <div className="flex w-full items-center gap-2 rounded-lg bg-[#161616] py-2 duration-200 hover:bg-[#1c1c1c] sm:p-3">
          <div className="flex h-[40px] min-w-[40px] items-center justify-center rounded-[5px] bg-[#242424]">
            <data.icon className="text-[20px] text-white" />
          </div>
          <div className="leading-tight">
            <div>
              <span className="text-[14px] font-medium text-white">{data.title}</span>
            </div>
            <div>
              <span className="text-[13px] text-[#858585] sm:text-[14px]">{data.desc}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
