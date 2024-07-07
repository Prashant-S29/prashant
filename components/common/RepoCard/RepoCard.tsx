import React from 'react';

// Types
import { Repository } from '@/types/repo';

// Components
import { Link } from '@/components/Link';

export const RepoCard = ({ data }: { data: Repository }) => {
  return (
    <div>
      <Link href={data.html_url} target="_blank">
        <div className="h-full w-full rounded-lg border border-[#242424] bg-[#1c1c1c] px-4 py-3 leading-tight">
          <div>
            <span className="text-[12px] font-medium text-[#858585]">{data.owner.login}</span>
            <br />
            <span className="text-[14px] font-medium text-white">{data.name}</span>
          </div>
          <div className="mt-3 line-clamp-2">
            <span className="text-[13px] text-[#858585]">{data.description}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
