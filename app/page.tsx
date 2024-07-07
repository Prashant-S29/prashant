import React from 'react';

// Components
import { Articles, Hero, LatestProjects, Stack } from '@/components/Features';
import { CTACard } from '@/components/common';

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-[#161616] p-5 lg:px-[80px] lg:py-[70px] xl:px-[150px] xl:py-[100px]">
      <Hero />
      <div className="mt-[50px]">
        <LatestProjects />
      </div>
      <div className="mt-[50px]">
        <Articles />
      </div>
      {/* <div className="mt-[50px] grid w-full grid-cols-2 gap-2">
        <CTACard />
        <CTACard />
      </div> */}
      <div className="mt-[50px]">
        <Stack />
      </div>
    </div>
  );
};

export default Home;
