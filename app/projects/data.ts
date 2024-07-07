// Types
import { ProjectDataType } from '@/types';

// Assets
import { CodeComponents_CardImage, ICEPADM_CardImage } from '@/public/projects';

const projectData: ProjectDataType[] = [
  {
    id: 'code-components',
    title: 'Code Components',
    tagLine: 'A collection of reusable code components made with NextJs',
    tag: 'Development',
    liveLink: 'https://www.code-components.in/',
    sourceCodeLink: '',
    date: 'February 2023',
    category: 'Web Development and Design',
    mainImage: CodeComponents_CardImage,
    images: ['1', '2', '3', '4'],
    background:
      "It's all started when I was scrolling through Awwwards website submissions. There I found lots of amazing websites using fabulous design components. I thought it'd be a great idea to create a collection of these components and share it with the community. I've been working on this project for a while now and I'm excited to share it with you all.",
    challenges: [
      'I majorly focused on how easily the components can be used and how they can be customized',
      'Should be compatible with all frameworks and screen sizes',
    ],
    solutions: [
      {
        heading: 'Abstraction',
        content:
          'Every part of the component is abstracted in a separate file. So it is easy to navigate and understand the code',
      },
      {
        heading: 'Mapping JSON Data',
        content:
          'Components are designed in such a way that they can be easily customized just by changing the JSON data',
      },
      {
        heading: 'Responsive',
        content: 'Every component is designed to be responsive and works well on all devices',
      },
    ],
    outcome:
      'When I launched the website, I was surprised to see the amount of users interacting with the website. They were also providing great feedback and suggestions. ',
  },
  {
    id: 'icepadm',
    title: 'ICEPADM',
    tagLine: 'A website for environmental awareness for SKIT College',
    tag: 'Development',
    liveLink: 'https://icepadm-skit.vercel.app/',
    sourceCodeLink: 'https://github.com/Prashant-S29/icepadm-skit',
    date: 'February 2023',
    category: 'Web Development and Design',
    mainImage: ICEPADM_CardImage,
    images: ['1', '2', '3', '4'],
    background:
      'ICEPADM is an initiative of SKIT College, Jaipur, Rajasthan to promote environmental awareness among society. Every year they host a series of events to promote environmental awareness via online meetups, seminars, workshops, and more. They approached me to redevelop their old website and provide it a new look',
    challenges: [
      'The main task is to redesign the website in such a way that it looks modern and professional',
      'Design a new logo and help them to reach out to the target audience',
      'Redesign the whole website without losing their ideology',
      'Help them to attact more people to attend their events',
    ],
    solutions: [
      {
        heading: 'A New Look',
        content:
          'After refrencing through multiple templates and websites, I redesigned their website with more user centeric and modern design',
      },
      {
        heading: 'New Logo',
        content:
          'I designed a new logo for their identity. This logo symbolizes their mission to promote environmental awareness and save nature',
      },
      {
        heading: 'Event Update Window',
        content:
          'For their events updated, I created a window that helps visitors to get more information about the events right from the home page itself',
      },
    ],
    outcome:
      'Upon completion, we have noticed a significant increase in the number of visitors to the website. Their covnversion rate has also increased, and they have been able to attract more people to attend their events. Their new logo has also helped them establish more values on the users. People also provided their great remarks on the website and that is a great sign for them to beign noticed by the users',
  },
  // {
  //   id: 'pravah',
  //   title: 'Pravah',
  //   tagLine: 'Annual Techno-Cultural fest 2023 website for SKIT College',
  //   tag: 'Development',
  //   liveLink: 'https://icepadm-skit.vercel.app/',
  //   sourceCodeLink: 'https://github.com/Prashant-S29/icepadm-skit',
  //   date: 'February 2023',
  //   category: 'Web Development and Design',
  //   mainImage: '',
  //   images: ['1', '2', '3', '4'],
  //   background:
  //     'ICEPADM is an initiative of SKIT College, Jaipur, Rajasthan to promote environmental awareness among society. Every year they host a series of events to promote environmental awareness via online meetups, seminars, workshops, and more. They approached me to redevelop their old website and provide it a new look',
  //   challenges: [
  //     'The main task is to redesign the website in such a way that it looks modern and professional',
  //     'Design a new logo and help them to reach out to the target audience',
  //     'Redesign the whole website without losing their ideology',
  //     'Help them to attact more people to attend their events',
  //   ],
  //   solutions: [
  //     {
  //       heading: 'A New Look',
  //       content:
  //         'After refrencing through multiple templates and websites, I redesigned their website with more user centeric and modern design',
  //     },
  //     {
  //       heading: 'New Logo',
  //       content:
  //         'I designed a new logo for their identity. This logo symbolizes their mission to promote environmental awareness and save nature',
  //     },
  //     {
  //       heading: 'Event Update Window',
  //       content:
  //         'For their events updated, I created a window that helps visitors to get more information about the events right from the home page itself',
  //     },
  //   ],
  //   outcome:
  //     'Upon completion, we have noticed a significant increase in the number of visitors to the website. Their covnversion rate has also increased, and they have been able to attract more people to attend their events. Their new logo has also helped them establish more values on the users. People also provided their great remarks on the website and that is a great sign for them to beign noticed by the users',
  // },
  // {
  //   id: 'kiska-jutta',
  //   title: 'Kiska Jutta',
  //   tagLine: 'Website Design concept for a shoe customization startup',
  //   tag: 'Design',
  //   liveLink:
  //     'https://www.figma.com/file/b6yxaSOE95tRX4mnEscKTP/KiskaJutta?type=design&node-id=0%3A1&mode=design&t=nWzkiu68jxXMyY0o-1',
  //   sourceCodeLink: '',
  //   date: 'February 2023',
  //   category: 'Web Design',
  //   mainImage: '',
  //   images: ['1', '2', '3', '4'],
  //   background:
  //     'Kiska Jutta is a shoe customization startup based in Jaipur, Rajasthan. They provide a platform for customers to customize their shoes and have a wide range of products available. Their website is designed to showcase their products and provide a seamless shopping experience for their customers.',
  //   challenges: [
  //     'Provide a seamless shopping experience for their customers',
  //     'Allow customers to customize their shoes easily',
  //     'The website should be user-friendly and easy to navigate',
  //   ],
  //   solutions: [
  //     {
  //       heading: '3d Shopping Experience',
  //       content:
  //         'Once user customizes their shoes, they can view the 3d model of their customized shoes on the website. This will allow them to see how their shoes will look on the customers.',
  //     },
  //   ],
  //   outcome:
  //     'After the launch of design on their social handles, we have noticed a significant increase in enquiry calls. There sales have also increased, and they have been able to attract more people to buy their products.',
  // },
  // {
  //   id: 'blognspot',
  //   title: 'BlogNSpot',
  //   tagLine: 'Web Design concept for a blog and content writer',
  //   tag: 'Design',
  //   liveLink: 'https://icepadm-skit.vercel.app/',
  //   sourceCodeLink: 'https://github.com/Prashant-S29/icepadm-skit',
  //   date: 'February 2023',
  //   category: 'Web Design',
  //   mainImage: '',
  //   images: ['1', '2', '3', '4'],
  //   background:
  //     'BlogNSpot - a blog and content writer portfolio for Santoshi Swain. Earlier, the site was a simple single page website made with no code tools. I redesigned the site with a more asthetic design and added a new feature to showcase the blog posts. The site is now a great tool for bloggers to showcase their work and attract more readers.',
  //   challenges: [
  //     'Allow readers to easily find the blog posts',
  //     'User can able to download and share the content',
  //     'The website should feature her expertise and selecetd work',
  //   ],
  //   solutions: [
  //     {
  //       heading: 'Unique Hero Section',
  //       content:
  //         'After refrencing through multiple designs, I designed a unique hero section for the site. The section itself is a beautiful illustration, simple and elegant',
  //     },
  //     {
  //       heading: 'Featured Blogs',
  //       content: 'Designed a featured blog section that showcases the most popular blog posts.',
  //     },
  //   ],
  //   outcome:
  //   'After the launch, She was impressed with the design and the content. She was also able to diliver her work to a wider audience.',
  // },
];

export { projectData };
