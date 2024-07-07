'use client';

import React from 'react';
import { SideNavData } from '../SideNav/data';
import { MobileNavLink } from '../MobileNavLink';

export const MobileNav = () => {
  return (
    <>
      <div className="fixed bottom-0 left-0 z-20  flex w-full gap-3 overflow-x-scroll bg-[#1c1c1c] p-3 text-center">
        {SideNavData.map((data, index) => (
          <div key={index} className='flex gap-2 whitespace-nowrap min-w-fit'>
            {data.links.map((link, index) => (
              <MobileNavLink key={index} link={link} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
