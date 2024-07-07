'use client';

import { Repository } from '@/types/repo';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useRepos = (userName: string) => {
  return useQuery({
    queryKey: ['repos', userName],
    queryFn: async () => {
      const { data } = await axios.get(`https://api.github.com/users/${userName}/repos?sort=pushed&direction=desc`);
      return data as Repository[];
    },
  });
};
