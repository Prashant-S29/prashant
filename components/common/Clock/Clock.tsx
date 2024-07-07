'use client';

// Hooks
import useClock from '@/hooks/useClock';

export const Clock = () => {
  const { hr, min, meridian } = useClock();

  return (
    <div>
      <span className="text-[40px] md:text-[50px] font-semibold text-[#858585]">
        {hr}:{min} {meridian}
      </span>
    </div>
  );
};
