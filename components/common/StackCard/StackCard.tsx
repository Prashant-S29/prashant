import React from 'react';

// Types
import { IconType } from 'react-icons';

export const StackCard = ({
  toolsData,
}: {
  toolsData: {
    icon: IconType;
    color: string;
    label: string;
    desc: string;
  };
}) => {
  return (
    <div className="flex w-full items-center gap-2 rounded-lg bg-[#161616] py-2 duration-200 hover:bg-[#1c1c1c] sm:p-3">
      <div
        className={'flex size-[40px] items-center justify-center rounded-lg ring-1 ring-black/5'}
        style={{ background: `${toolsData.color}1A` }}
      >
        <toolsData.icon className="bx bxl-typescript text-xl" style={{ color: toolsData.color }}></toolsData.icon>
      </div>
      <div className="leading-tight">
        <div className="line-clamp-1">
          <span className="text-[14px] font-medium text-[#ffffffbf]">{toolsData.label}</span>
        </div>
        <div>
          <span className="text-[13px] text-[#858585] sm:text-[14px]">{toolsData.desc}</span>
        </div>
      </div>
    </div>
  );
};
