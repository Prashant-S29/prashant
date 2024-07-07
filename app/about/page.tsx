import React from 'react';

// Icons
import {
  TwitterIcon,
  LinkedInIcon,
  GithubIcon,
  EmailIcon,
  RightArrowIcon,
  ProjectIcon,
  StackIcon,
  ArticleIcon,
} from '@/Icons';

// Components
import { CTACard } from '@/components/common';
import { Link } from '@/components/Link';

// Assets
import { profileImageOne } from '@/public';

const About = () => {
  return (
    <div className="min-h-screen w-full bg-[#161616] p-5 lg:px-[80px] lg:py-[70px] xl:px-[150px] xl:py-[100px]">
      <div className="flex w-full flex-col-reverse items-start justify-between lg:flex-row">
        <div>
          <div className="leading-tight mt-5 lg:mt-0">
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
            <div className="flex items-center gap-2">
              <div className="size-[5px] rounded-full bg-[#1aff57] shadow-[0_0_5px_2px_rgba(26,255,87)]" />
              <span className="text-[13px] font-medium text-white">Currently Working</span>
            </div>
            <div>
              <Link
                href="/contact"
                className="flex w-fit items-center gap-2 text-[13px] text-[#858585] duration-200 hover:text-white"
              >
                Reach out <RightArrowIcon />
              </Link>
            </div>
          </div>
          <div className="mt-5 grid w-full grid-cols-4 gap-2">
            <Link href="/" className='w-fit'>
              <GithubIcon className="text-[24px] text-[#858585]" />
            </Link>
            <Link href="/" className='w-fit'>
              <LinkedInIcon className="text-[24px] text-[#858585]" />
            </Link>
            <Link href="/" className='w-fit'>
              <TwitterIcon className="text-[24px] text-[#858585]" />
            </Link>
            <Link href="/" className='w-fit'>
              <EmailIcon className="text-[24px] text-[#858585]" />
            </Link>
          </div>
        </div>
        <div
          className="h-[150px] lg:h-[200px] min-w-[150px]  lg:min-w-[200px] max-w-[200px] rounded-full border border-[#242424] bg-[#1c1c1c] bg-contain ring-[1px] ring-[#858585] ring-offset-2 ring-offset-[#1c1c1c]" 
          style={{ backgroundImage: `url(${profileImageOne.src})` }}
        ></div>
      </div>
      <div className="mt-[50px] flex flex-col  w-full grid-cols-2 gap-5 sm:gap-2 sm:grid">
        <CTACard
          data={{
            title: 'Projects',
            description: 'All Projects related to web designing and development',
            href: '/',
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
            href: '/about',
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

export default About;
