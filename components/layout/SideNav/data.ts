// Types
import { SideNavDataType } from '@/types';

// Icons
import {
  ExploreIcon,
  ProjectIcon,
  ServicesIcon,
  AboutIcon,
  ArticleIcon,
  ContactIcon,
  TwitterIcon,
  LinkedInIcon,
  GithubIcon,
  GithubRepoIcon,
  StackIcon,
} from '@/Icons';

const SideNavData: SideNavDataType[] = [
  {
    category: 'Navigation',
    links: [
      {
        icon: ExploreIcon,
        label: 'Explore',
        link: '/',
        targetBlank: false,
        keyBinding: '1',
      },
      {
        icon: ProjectIcon,
        label: 'Projects',
        link: '/projects',
        targetBlank: false,
        keyBinding: '2',
      },
      // {
      //   icon: ServicesIcon,
      //   label: 'Services',
      //   link: '/services',
      //   targetBlank: false,
      //   keyBinding: '3',
      // },
      {
        icon: AboutIcon,
        label: 'About',
        link: '/about',
        targetBlank: false,
        keyBinding: '3',
      },
    ],
  },
  {
    category: 'Resources',
    links: [
      {
        icon: GithubRepoIcon,
        label: 'Repos',
        link: '/repos',
        targetBlank: false,
        keyBinding: '4',
      },
      {
        icon: StackIcon,
        label: 'Stack',
        link: '/stack',
        targetBlank: false,
        keyBinding: '5',
      },
      {
        icon: ArticleIcon,
        label: 'Articles',
        link: '/data',
        targetBlank: false,
        comingSoon: true,
      },
    ],
  },
  {
    category: 'Connect',
    links: [
      {
        icon: TwitterIcon,
        label: 'X (Twitter)',
        link: 'https://twitter.com/httpsPrashant',
        targetBlank: true,
      },
      {
        icon: LinkedInIcon,
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/in/prashant-singh-529391250/',
        targetBlank: true,
      },
      {
        icon: GithubIcon,
        label: 'GitHub',
        link: 'https://github.com/Prashant-S29',
        targetBlank: true,
      },
    ],
  },
];

export { SideNavData };
