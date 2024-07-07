'use client';

import React from 'react';

// Hooks
import useCopyToClipboard from '@/hooks/useCopyToClipboard';
import { CopyIcon } from '@/Icons';

export const CopyEmailButton = () => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <button
      onClick={() => copyToClipboard('prashant.s2922@gmail.com')}
      disabled={isCopied}
      className="flex items-center gap-2 rounded-[5px] border border-[#242424] bg-[#161616] px-5 py-[9px] text-[14px]"
      style={{ color: `${isCopied ? '#858585' : '#ffffff'}` }}
    >
      <CopyIcon className="text-[#858585]" />
      {isCopied ? 'Copied' : 'E-Mail'}
    </button>
  );
};
