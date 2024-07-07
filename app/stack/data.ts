// Types
import { StackDataType } from '@/types';

// Icons
import {
  ExploreIcon,
  FigmaIcon,
  IllustratorIcon,
  PhotoshopIcon,
  IconifyIcon,
  VSCodeIcon,
  ZedIcon,
  PostmanIcon,
  LighthouseIcon,
  OpenGraphIcon,
  AndroidStudioIcon,
  SlackIcon,
  JiraIcon,
  VercelIcon,
  AWSIcon,
  UpstashIcon,
  ClerkIcon,
  StripeIcon,
  NotionIcon,
  NextJsIcon,
  ReactJsIcon,
  TypeScriptIcon,
  PostgreSQLIcon,
  MongoDBIcon,
  NodeJsIcon,
  ChatGPTIcon,
  GithubIcon,
  GitIcon,
} from '@/Icons';

const stackData: StackDataType[] = [
  {
    category: 'Development',
    tools: [
      {
        icon: VSCodeIcon,
        color: '#007acc',
        label: 'VS Code',
        desc: 'IDE for Widows',
      },
      {
        icon: ZedIcon,
        color: '#ffffff',
        label: 'Zed',
        desc: 'IDE for Mac',
      },
      {
        icon: PostmanIcon,
        color: '#ff6c37',
        label: 'Postman',
        desc: 'API Testing',
      },
      {
        icon: LighthouseIcon,
        color: '#ebe28a',
        label: 'Google Lighthouse',
        desc: 'Performance and Optimization',
      },
      {
        icon: OpenGraphIcon,
        color: '#2d96ed',
        label: 'OpenGraph',
        desc: 'Metatags Testing',
      },
      {
        icon: AndroidStudioIcon,
        color: '#4285f4',
        label: 'Android Studio',
        desc: 'IDE for App Development',
      },
    ],
  },
  {
    category: 'Design',
    tools: [
      {
        icon: FigmaIcon,
        color: '#9b51c7',
        label: 'Figma',
        desc: 'Design Tool',
      },
      {
        icon: IllustratorIcon,
        color: '#f89500',
        label: 'Adobe Illustrator',
        desc: 'Illustration Tool',
      },
      {
        icon: PhotoshopIcon,
        color: '#2d96ed',
        label: 'Adobe Photoshop',
        desc: 'Graphic Design Tool',
      },
      {
        icon: IconifyIcon,
        color: '#31b9bc',
        label: 'Iconify',
        desc: 'Icons Library',
      },
    ],
  },
  {
    category: 'Services',
    tools: [
      {
        icon: VercelIcon,
        color: '#d2d2d2',
        label: 'Vercel',
        desc: 'Project Hosting',
      },
      {
        icon: AWSIcon,
        color: '#d2d2d2',
        label: 'Amazon Web Services',
        desc: 'Cron Jobs',
      },
      {
        icon: UpstashIcon,
        color: '#34d399',
        label: 'Upstash',
        desc: 'Serverless Functions',
      },
      {
        icon: GithubIcon,
        color: '#d2d2d2',
        label: 'GitHub',
        desc: 'Version Control',
      },
      {
        icon: ClerkIcon,
        color: '#ac9ff5',
        label: 'Clerk',
        desc: 'Authentication',
      },
      {
        icon: StripeIcon,
        color: '#6f4bff',
        label: 'Stripe',
        desc: 'Payment Provider',
      },
      {
        icon: NotionIcon,
        color: '#d2d2d2',
        label: 'Notion',
        desc: 'Project Management',
      },
      {
        icon: SlackIcon,
        color: '#ecbb2e',
        label: 'Slack',
        desc: 'Collaboration',
      },
      {
        icon: JiraIcon,
        color: '#007acc',
        label: 'Jira',
        desc: 'Story Tracking',
      },
    ],
  },
  {
    category: 'Tech',
    tools: [
      {
        icon: NextJsIcon,
        color: '#d2d2d2',
        label: 'NextJs',
        desc: 'SSR',
      },
      {
        icon: ReactJsIcon,
        color: '#007acc',
        label: 'ReactJs',
        desc: 'Frontend',
      },
      {
        icon: TypeScriptIcon,
        color: '#007acc',
        label: 'TypeScript',
        desc: 'Type Safety',
      },
      {
        icon: PostgreSQLIcon,
        color: '#336791',
        label: 'PostgreSQL',
        desc: 'SQL Database',
      },
      {
        icon: MongoDBIcon,
        color: '#419432',
        label: 'MongoDB',
        desc: 'NoSQL Database',
      },
      {
        icon: NodeJsIcon,
        color: '#41b883',
        label: 'NodeJs',
        desc: 'Backend',
      },
      {
        icon: GitIcon,
        color: '#f34f29',
        label: 'Git Bash',
        desc: 'CLI for GitHub',
      },
    ],
  },
  {
    category: 'Artificial Intelligence',
    tools: [
      {
        icon: ChatGPTIcon,
        color: '#00A67E',
        label: 'ChatGPT',
        desc: 'OpenAI',
      },
    ],
  },
];

export { stackData };
