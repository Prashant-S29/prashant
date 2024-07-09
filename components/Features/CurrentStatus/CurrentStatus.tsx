'use client';

import useClock from '@/hooks/useClock';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export const CurrentStatus = () => {
  const [currentStatus, setCurrentStatus] = useState<'online' | 'offline'>('offline');
  const { hr, meridian } = useClock();

  useEffect(() => {
    // Convert 12 hrs to 24 hrs format using hr and meridian
    // set online if hr is between 10 and 22 
    // else set offline

    const handleStatus = () => {
      let hour = parseInt(hr);
      if (meridian === 'PM' && parseInt(hr) !== 12) {
        hour += 12;
      }
      if (meridian === 'AM' && parseInt(hr) === 12) {
        hour = 0;
      }
      if (hour >= 10 && hour < 22) {
        setCurrentStatus('online');
      } else {
        setCurrentStatus('offline');
      }
    };
    handleStatus();
  }, [hr, meridian]);

  return (
    <div>
      <div className="flex items-center gap-2">
        <div
          className={`size-[5px] rounded-full ${currentStatus === 'online' ? 'bg-[#1aff57] shadow-[0_0_5px_2px_rgba(26,255,87)]' : 'bg-[#1c1c1c] shadow-[0_0_5px_2px_rgba(100,100,100)]'} `}
        />
        <span className="text-[13px] font-medium text-white">
          {currentStatus === 'online' ? 'Currently Working' : 'Currently 💤'} 
        </span>
      </div>
      <div>
        <Link
          href="mailto:prashant.s2922@gmail.com"
          className="text-[13px] text-[#858585] duration-200 hover:text-white"
        >
          Reach out &rarr;
        </Link>
      </div>
    </div>
  );
};
