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
  InstagramIcon,
  DribbbleIcon,
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
        link: '/#articles',
        targetBlank: false,
        keyBinding: '6',
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
        link: 'https://www.linkedin.com/in/prashantsingh29',
        targetBlank: true,
      },
      {
        icon: GithubIcon,
        label: 'GitHub',
        link: 'https://github.com/Prashant-S29',
        targetBlank: true,
      },
      {
        icon: InstagramIcon,
        label: 'Instagram',
        link: 'https://www.instagram.com/prashant_gigs',
        targetBlank: true,
      },
      {
        icon: DribbbleIcon,
        label: 'Dribbble',
        link: 'https://dribbble.com/Code-Prashant',
        targetBlank: true,
      },
    ],
  },
];

export { SideNavData };
