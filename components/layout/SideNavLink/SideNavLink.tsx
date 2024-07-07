import React, { useState } from 'react';

// Hooks
import { usePathname } from 'next/navigation';

// Types
import { IconType } from 'react-icons';

// Components
import { Link } from '@/components/Link';

export const SideNavLink = ({
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
      <Link
        href={link.comingSoon ? '#' : link.link}
        target={link.targetBlank ? '_blank' : '_self'}
        className={`flex w-full justify-between rounded-lg border px-3 py-[10px] duration-200 ${
          pathName === link.link ? 'border-[#3c3c3c] bg-[#2a2a2a]' : 'border-[#1c1c1c] bg-[#1c1c1c]'
        }`}
      >
        <div className="flex items-center gap-3">
          <link.icon
            className={`text-[16px] duration-200 ${
              pathName === link.link || isHovered ? 'text-[#fff]' : 'text-[#858585]'
            }`}
          />
          <span
            className={`text-[13px] font-medium duration-200 ${
              pathName === link.link || isHovered ? 'text-[#fff]' : 'text-[#858585]'
            }`}
          >
            {link.label}
          </span>
        </div>
        {link.keyBinding && !link.comingSoon && (
          <div className="flex items-center gap-1 text-[12px] text-[#858585]">
            {link.keyBinding.includes('+') ? (
              link.keyBinding.split('+').map((key, index, array) => (
                <div key={index} className="flex items-center gap-1">
                  <div className="rounded-[5px] border border-[#3c3c3c] px-[6px] pb-[3px] pt-[2px] leading-none">
                    <span className="text-[10px] font-semibold text-[#858585]">{key}</span>
                  </div>
                  {index < array.length - 1 && <span className="text-[12px] font-semibold text-[#858585]">+</span>}
                </div>
              ))
            ) : (
              <div className="rounded-[5px] border border-[#3c3c3c] px-[6px] pb-[3px] pt-[2px] leading-none">
                <span className="text-[10px] font-semibold text-[#858585]">{link.keyBinding}</span>
              </div>
            )}
          </div>
        )}
        {link.comingSoon && (
          <div className="flex items-center rounded-[5px] border border-[#3c3c3c] px-[6px] py-[2px]">
            <span className="text-[10px] font-semibold text-[#858585]">soon</span>
          </div>
        )}
      </Link>
    </div>
  );
};
