'use client';

import React, { useState } from 'react';

// Hooks
import { usePathname } from 'next/navigation';

// Types
import { IconType } from 'react-icons';

// Components
import { Link } from '@/components/Link';

export const MobileNavLink = ({
  link,
}: {
  link: {
    icon: IconType;
    label: string;
    link: string;
    targetBlank?: boolean | false;
    keyBinding?: string;
    comingSoon?: boolean | false;
  };
}) => {
  const pathName = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Link href={link.comingSoon ? '#' : link.link} target={link.targetBlank ? '_blank' : '_self'}>
        <div
          className={`min-w-fit rounded-[5px] border px-2 py-[6px] duration-200 ${
            pathName === link.link ? 'border-[#3c3c3c] bg-[#2a2a2a]' : 'border-[#1c1c1c] bg-[#1c1c1c]'
          }`}
        >
          <div className='flex justify-center'>
            <link.icon
              className={`text-[16px] duration-200 ${
                pathName === link.link || isHovered ? 'text-[#fff]' : 'text-[#858585]'
              }`}
            />
          </div>
          <div
            className={`text-[11px] mt-[2px] font-medium duration-200 ${
              pathName === link.link || isHovered ? 'text-[#fff]' : 'text-[#858585]'
            }`}
          >
            {link.label}
          </div>
        </div>
      </Link>
    </div>
  );
};
