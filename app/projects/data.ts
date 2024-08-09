// Types
import {
  codeComponentsCardImage,
  icepadmCardImage,
  pravahCardImage,
  santoshiCardImage,
  medenureCardImage,
  pixelLabCardImage,
} from '@/public';
import { FilterOption, ProjectDataType } from '@/types';

// Filter Options
export const filterOptions: FilterOption[] = ['All', 'Development', 'Design'];

// Projects
const projectData: ProjectDataType[] = [
  {
    id: 'code-components',
    title: 'Code Components',
    tagLine: 'A collection of reusable code components made with NextJs',
    tag: 'Development',
    liveLink: 'https://www.code-components.in/',
    sourceCodeLink: 'https://github.com/Prashant-S29/code-components.git',
    date: 'February 2023',
    status: 'Completed',
    category: 'Web Development and Design',
    mainImage: codeComponentsCardImage,
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
    status: 'Completed',
    category: 'Web Development and Design',
    mainImage: icepadmCardImage,
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
  {
    id: 'pravah',
    title: 'Pravah',
    tagLine: 'Annual Techno-Cultural fest 2023 website for SKIT College',
    tag: 'Development',
    liveLink: 'https://pravah.skit.ac.in',
    sourceCodeLink: '',
    date: 'February 2023',
    status: 'Completed',
    category: 'Web Development and Design',
    mainImage: pravahCardImage,
    images: ['1', '2', '3', '4'],
    background:
      'Pravah is a techno-cultural fest organized by SKIT college, Jaipur. Each year, the fest have its unique theme and website. For Pravah 2023, I designed and developed wesbite based on Time Evaluation theme.',
    challenges: [
      'Till 2022, Pravah website was built entirely using HTML, CSS and JavaScript. This caused a lot of performance issues',
      'Also, the website has nither a backend / CMS nor a database',
    ],
    solutions: [
      {
        heading: 'Reactjs with NextJs',
        content:
          'Now, the website is entirely built using NextJs. This allows us to use SSR and CSR that helps us to improve the performance and SEO',
      },
      {
        heading: 'We now own a database',
        content: 'The website now has a database that stores all the data.',
      },
      {
        heading: 'Also a Cloud',
        content: 'All the assets are stored in a cloud and are accessible to all the users',
      },
    ],
    outcome:
      'We have noticed a significant increase in performance and SEO. Our website had ranked top in Google search results for Pravah 2023. We also have a lot of positive feedback from the users.',
  },
  {
    id: 'pixel-lab',
    title: 'Pixel Lab',
    tagLine: 'Design concept for a digital education platform',
    tag: 'Design',
    liveLink: 'https://www.figma.com/design/nWVfy3MF3Y1wCtkdj70K7c/Pixel-Lab?node-id=0-1&t=mG6wL0kTpIXdoxdk-1',
    sourceCodeLink: '',
    status: 'Completed',
    date: 'February 2023',
    category: 'Web Design',
    mainImage: pixelLabCardImage,
    images: ['1', '2', '3', '4'],
    background:
      'This project is a part of my figma practice and not associated with any company. It is a design concept for a digital education platform. The platform will be used by technical colleges to provide digital education to their students. The platform will have a variety of features such as online courses, quizzes, assessments, and more. The platform will also have a user-friendly interface and a seamless user experience.',
    challenges: [
      'Create a user-friendly and professional onboarding experience for new users',
      'Make users to build a strong trust on our platform',
    ],
    solutions: [
      {
        heading: 'Out of the box design',
        content:
          "The design of the platform will be based on the user's needs and preferences. The platform will have a simple and intuitive interface that will make it easy for users to navigate and find the features they need.",
      },
    ],
    outcome: 'The platform will be launched soon and we will be providing updates on the progress of the project.',
  },
  {
    id: '',
    title: "Santoshi's Portfolio",
    tagLine: 'Portfolio website for Santoshi Swain',
    tag: 'Development',
    liveLink: '',
    sourceCodeLink: '',
    status: 'Ongoing',
    date: 'February 2023',
    category: 'Web Design',
    mainImage: santoshiCardImage,
    images: ['1', '2', '3', '4'],
    background: '',
    challenges: [''],
    solutions: [],
    outcome: '',
  },
  {
    id: '',
    title: 'Medenure',
    tagLine: 'Ecommerce Platform. Online Book Store',
    tag: 'Development',
    liveLink:
      'https://www.figma.com/file/b6yxaSOE95tRX4mnEscKTP/KiskaJutta?type=design&node-id=0%3A1&mode=design&t=nWzkiu68jxXMyY0o-1',
    sourceCodeLink: '',
    status: 'Ongoing',
    date: 'February 2023',
    category: 'Web Design',
    mainImage: medenureCardImage,
    images: ['1', '2', '3', '4'],
    background:
      'Kiska Jutta is a shoe customization startup based in Jaipur, Rajasthan. They provide a platform for customers to customize their shoes and have a wide range of products available. Their website is designed to showcase their products and provide a seamless shopping experience for their customers.',
    challenges: [
      'Provide a seamless shopping experience for their customers',
      'Allow customers to customize their shoes easily',
      'The website should be user-friendly and easy to navigate',
    ],
    solutions: [
      {
        heading: '3d Shopping Experience',
        content:
          'Once user customizes their shoes, they can view the 3d model of their customized shoes on the website. This will allow them to see how their shoes will look on the customers.',
      },
    ],
    outcome:
      'After the launch of design on their social handles, we have noticed a significant increase in enquiry calls. There sales have also increased, and they have been able to attract more people to buy their products.',
  },
];

export { projectData };
