import React from 'react';

// Icons
import {
  TwitterIcon,
  LinkedInIcon,
  GithubIcon,
  EmailIcon,
  ProjectIcon,
  StackIcon,
  ArticleIcon,
} from '@/Icons';

// Assets
import { profileImageOne } from '@/public';

// Components
import { CTACard } from '@/components/common';
import { Link } from '@/components/Link';

import { CurrentStatus } from '@/components/Features';

export const AboutPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#161616] p-5 lg:px-[80px] lg:py-[70px] xl:px-[150px] xl:py-[100px]">
      <div className="flex w-full flex-col-reverse items-start justify-between lg:flex-row">
        <div>
          <div className="mt-5 leading-tight lg:mt-0">
            <span className="text-[22px] font-bold text-[#ffffff] sm:text-[26px] lg:text-[30px]">
              Self taught&nbsp;
              <br className="hidden lg:block" />
              web developer&nbsp;
              <br className="hidden lg:block" />
              <span className="text-[#858585]">and designer</span>
            </span>
          </div>
          <div className="mt-5 w-full lg:w-[80%]">
            <span className="text-[14px] text-[#858585] sm:text-[16px]">
              Hey, I{"'"}m <span className="text-[#ffffff]">Prashant Singh</span>, full stack developer based in India.
              <br /> Currently working as a Freelancer. My goal is to bring your ideas to life by crafting beautiful and
              inspiring websites.
            </span>
          </div>
          <div className="mt-5">
            <CurrentStatus />
          </div>
          <div className="mt-5 grid w-full grid-cols-4 gap-2">
            <Link href="/" className="w-fit">
              <GithubIcon className="text-[24px] text-[#858585]" />
            </Link>
            <Link href="/" className="w-fit">
              <LinkedInIcon className="text-[24px] text-[#858585]" />
            </Link>
            <Link href="/" className="w-fit">
              <TwitterIcon className="text-[24px] text-[#858585]" />
            </Link>
            <Link href="/" className="w-fit">
              <EmailIcon className="text-[24px] text-[#858585]" />
            </Link>
          </div>
        </div>
        <div
          className="h-[150px] min-w-[150px] max-w-[200px] rounded-full border border-[#242424] bg-[#1c1c1c] bg-contain ring-[1px] ring-[#858585] ring-offset-2 ring-offset-[#1c1c1c] lg:h-[200px] lg:min-w-[200px]"
          style={{ backgroundImage: `url(${profileImageOne.src})` }}
        ></div>
      </div>
      <div className="mt-[50px] flex w-full grid-cols-2 flex-col gap-5 sm:grid sm:gap-2">
        <CTACard
          data={{
            title: 'Projects',
            description: 'All Projects related to web designing and development',
            href: '/projects',
            text: 'View Projects',
            icon: ProjectIcon,
          }}
        />
        <CTACard
          data={{
            title: 'Contact',
            description: 'Reach out to me',
            href: 'mailto:prashant.s2922@gmail.com',
            text: 'Contact Me',
            icon: EmailIcon,
          }}
        />
        <CTACard
          data={{
            title: 'Stack',
            description: 'Sofware and Tech I use daily',
            href: '/stack',
            text: 'Learn More',
            icon: StackIcon,
          }}
        />
        <CTACard
          data={{
            title: 'Articles',
            description: 'My thoughs and experiences on various tech',
            href: '/articles',
            text: 'Read All',
            icon: ArticleIcon,
            comingSoon: true,
          }}
        />
      </div>
    </div>
  );
};
