// Types
import { StaticImageData } from 'next/image';
import { IconType } from 'react-icons';

export type SideNavDataType = {
  category: string;
  links: {
    icon: IconType;
    label: string;
    link: string;
    targetBlank?: boolean | false;
    keyBinding?: string;
    comingSoon?: boolean | false;
  }[];
};

export type FooterDataType = {
  category: string;
  links: {
    label: string;
    link: string;
  }[];
};

export type FilterOption = 'All' | 'Development' | 'Design';

export type ProjectDataType = {
  id: string;
  title: string;
  tagLine: string;
  tag: Exclude<FilterOption, 'All'>; // Exclude 'All'. Includes rest of the options from FilterOption
  liveLink: string;
  sourceCodeLink?: string;
  date: string;
  status: 'Completed' | 'Ongoing';
  category: string;
  mainImage: StaticImageData;
  images: string[];
  background: string;
  challenges: string[];
  solutions: {
    heading: string;
    content: string;
  }[];
  outcome: string;
};

export type StackDataType = {
  category: string;
  tools: {
    icon: IconType;
    color: string;
    label: string;
    desc: string;
  }[];
};

export type ArticleDataType = {
  title: string;
  desc: string;
  link: string;
  icon: IconType;
};
