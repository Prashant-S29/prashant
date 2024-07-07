import React from 'react';

// Components
import { Link } from '@/components/Link';

// Types
import { IconType } from 'react-icons';

interface CTACardProps {
  data: {
    title: string;
    description: string;
    href: string;
    text: string;
    icon: IconType;
    comingSoon?: boolean | false;
  };
}

export const CTACard = ({ data }: CTACardProps) => {
  return (
    <div className="relative min-w-full rounded-lg border border-[#242424] bg-[#1c1c1c] p-5">
      {data.comingSoon && (
        <div className="absolute right-0 top-0 m-2">
          <span className="rounded-md border border-[#242424] bg-[#1c1c1c] px-3 py-1 text-[11px] font-medium text-[#858585]">
            coming soon
          </span>
        </div>
      )}
      <div className="flex size-[40px] items-center justify-center rounded-full border border-[#3c3c3c] bg-[#2c2c2c]">
        <data.icon className="text-[18px] text-[#858585]" />
      </div>
      <div className="mt-4 leading-snug">
        <div>
          <span className="text-[14px] font-medium text-white">{data.title}</span>
        </div>
        <div className="line-clamp-1">
          <span className="text-[14px] text-[#858585]">{data.description}</span>
        </div>
        <div className="mt-5">
          <Link href={data.comingSoon ? '#' : data.href} className="text-[13px] font-medium text-[#858585]">
            {data.text} &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};
