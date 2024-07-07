'use client';

import React from 'react';

// Data
import { SideNavData } from './data';

// Hooks
import useKeyBinder from '@/hooks/useKeyBinder';
import { SideNavLink } from '../SideNavLink';

export const SideNav = () => {
  //   Extract key and url from data
  const extractKeyBindings = () => {
    const keyBindings: { key: string; targetUrl: string; ctrl?: boolean }[] = [];

    SideNavData.forEach((category) => {
      category.links.forEach((link) => {
        if (link.keyBinding && link.link) {
          if (link.keyBinding.toLowerCase().includes('ctrl+')) {
            const key = link.keyBinding.toLowerCase().split('ctrl+')[1];
            keyBindings.push({ key, targetUrl: link.link, ctrl: true });
          } else {
            keyBindings.push({
              key: link.keyBinding.toLowerCase(),
              targetUrl: link.link,
            });
          }
        }
      });
    });

    return keyBindings;
  };

  const keyBindings = extractKeyBindings();
  useKeyBinder({ keys: keyBindings });

  return (
    <div className="h-screen overflow-y-scroll min-w-[300px] border-r border-[#242424] bg-[#1c1c1c] p-5">
      <div className="flex items-center gap-2">
        <div className="size-[40px] rounded-full bg-[#858585]" />
        <div className="leading-tight">
          <div>
            <span className="text-[13px] font-semibold text-white">Prashant Singh</span>
          </div>
          <div>
            <span className="text-[13px] font-medium text-[#858585]">Web Developer & Designer</span>
          </div>
        </div>
      </div>
      <div className="mt-5">
        {SideNavData.map((data, index) => (
          <div key={index} className="mb-5 last:mb-0">
            <div>
              <span className="text-[11px] font-semibold uppercase text-[#858585]">{data.category}</span>
            </div>
            <div className="mt-2">
              {data.links.map((link, index) => (
                <SideNavLink key={index} link={link}  />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
