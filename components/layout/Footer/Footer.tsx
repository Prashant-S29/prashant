import React from 'react';

// Data
import { FooterData } from './data';

// Icons
import { RightArrowIcon } from '@/Icons';

// Components
import { Clock } from '@/components/common';
import { Link } from '@/components/Link';

export const Footer = () => {
  return (
    <div className="bg-[#1c1c1c] px-[40px] pb-[100px] pt-[40px] lg:px-[80px] lg:py-[60px] xl:px-[150px] xl:py-[80px]">
      <div className="hidden w-full grid-cols-4 gap-5 md:grid">
        {FooterData.map((data, index) => (
          <div key={index}>
            <div>
              <span className="text-[14px] font-medium text-white">{data.category}</span>
            </div>
            <div className="mt-1">
              <ul>
                {data.links.map((link, index) => (
                  <li key={index} className="py-[2px] text-[14px]">
                    <Link href={link.link} className="hover:text-whitea text-[#858585] duration-200 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="my-[30px] hidden h-[0.5px] w-full bg-[#242424] md:block" />
      <div className="w-full items-center justify-between leading-tight md:flex">
        <div>
          <div className="flex items-center gap-2">
            <div className="size-[5px] rounded-full bg-[#1aff57] shadow-[0_0_5px_2px_rgba(26,255,87)]" />
            <span className="text-[13px] font-medium text-white">Currently Working</span>
          </div>
          <div>
            <Link href="/contact" className="text-[13px] text-[#858585] duration-200 hover:text-white">
              Reach out &rarr;
            </Link>
          </div>
        </div>
        <div className="mt-5 md:mt-0">
          {/* <span className="text-[50px] font-semibold text-[#858585]">01:26 AM</span> */}
          <Clock />
          <span className="text-[14px] font-medium text-[#858585]">Indian Standard Time</span>
        </div>
      </div>
      <div className="my-[30px] h-[0.5px] w-full bg-[#242424]" />
      <div className="grid w-full grid-cols-2 gap-5 md:hidden">
        {FooterData.slice(0, 2).map((data, index) => (
          <div key={index}>
            <div>
              <span className="text-[14px] font-medium text-white">{data.category}</span>
            </div>
            <div className="mt-1">
              <ul>
                {data.links.map((link, index) => (
                  <li key={index} className="py-[2px] text-[14px]">
                    <Link href={link.link} className="hover:text-whitea text-[#858585] duration-200 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="my-[30px] block h-[0.5px] w-full bg-[#242424] md:hidden" />
      <div className="grid w-full grid-cols-2 gap-5 md:hidden">
        {FooterData.slice(2, 4).map((data, index) => (
          <div key={index}>
            <div>
              <span className="text-[14px] font-medium text-white">{data.category}</span>
            </div>
            <div className="mt-1">
              <ul>
                {data.links.map((link, index) => (
                  <li key={index} className="py-[2px] text-[14px]">
                    <Link href={link.link} className="hover:text-whitea text-[#858585] duration-200 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="my-[30px] block h-[0.5px] w-full bg-[#242424] md:hidden" />
      <div>
        <ul className="flex flex-col gap-3 md:gap-7 md:flex-row">
          <li>
            <Link href="" className="flex items-center gap-2 text-[14px] font-medium text-[#858585]">
              Source Code <RightArrowIcon />
            </Link>
          </li>
          <li>
            <Link href="" className="flex items-center gap-2 text-[14px] font-medium text-[#858585]">
              Porfolio v3 (2023) <RightArrowIcon />
            </Link>
          </li>
          <li>
            <Link href="/404" className="flex items-center gap-2 text-[14px] font-medium text-[#858585]">
              404 <RightArrowIcon />
            </Link>
          </li>
        </ul>
      </div>
      {/* <div className='w-full my-[30px] h-[0.5px] bg-[#242424]' /> */}
      <div className="mt-3 leading-tight">
        <span className="text-[14px] font-medium text-[#858585]">
          This website is completely open source on{' '}
          <Link href="https://github.com/Prashant-S29/portfolio_v4" className="font-bold">
            GitHub
          </Link>
        </span>
      </div>
    </div>
  );
};
