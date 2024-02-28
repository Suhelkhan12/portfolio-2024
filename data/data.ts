import { type NavlinkType, type SocialImageType,type ProjectCardProps, GetToKnowMeCardProps, TechCardProps } from "@/types";
import { FaGithub , FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


// nav links
export const navlinks: NavlinkType[] = [
  {
    href: "/about",
    name: "About",
  },
  {
    href: "/work",
    name: "Work",
  },
  {
    href: "/resume",
    name: "Resume",
  },
];

// navlinks image
export const navlinkImages: SocialImageType[] = [
  {
    src: FaGithub,
    alt: "Linkedin",
    link: "https://www.linkedin.com/in/suhel-khan-925aa222a/",
  },
  {
    src: FaLinkedin,
    alt: "Twitter",
    link: "https://twitter.com/suhel7822",
  },
  {
    src: FaXTwitter,
    alt: "Github",
    link: "https://github.com/Suhelkhan12",
  },
];

// all projects data
export const projectsData: ProjectCardProps[] = [
  {
    name: 'Cashinvoice',
    description:'Amazing freelance project',
    liveLink: 'https://www.cashinvoice.in/',
    tags: ['Webflow','Splide','Gsap','Finsweet'],
    image: '/first.png'
  },
  {
    name: 'Foodies',
    description:'Amazing food project',
    githubLink: 'https://github.com/Suhelkhan12/Foodies',
    tags: ['Nextjs','Reactjs','Server-actions','Sqlite'],
    image: '/second.png'
  },
  {
    name: 'Anime world',
    description:'Amazing anime project',
    githubLink: 'https://github.com/Suhelkhan12/Foodies',
    tags: ['Nextjs','Reactjs','Server-actions'],
    image: '/third.png'
  },
  
]

// get to know me cards data
export const getToKnowMeData: GetToKnowMeCardProps[]=[
  {
    heading: 'About me',
    subheading: 'Who I am what I do?',
    image: '/avatar.png',
    link: '/about'
  },
  {
    heading: 'Techstack',
    subheading: 'Technology I use and currenly learning.',
    image: '/tech.svg',
    link: '/techstack'
  },
]

export const animeImages = [
  {
    name:'onepice',
    image:'/new-onepiece.jpeg'
  },
  {
    name:'demonslayer',
    image:'/demon-slayer.jpeg'
  },
  {
    name:'avatar',
    image:'/avatar-aibender.jpeg'
  },
  {
    name:'fire-forece',
    image:'/fire-force.jpg'
  }
]

export const techCards: TechCardProps[]=[
  {
    name:'Next.js',
    tag:'Web framework',
    image:'/tech/Nextjs.svg',
    category:'development'
  },
  {
    name:'React.js',
    tag:'JS framework',
    image:'/tech/react.png',
    category:'development'
  },
  {
    name:'Taiwind',
    tag:'Styling',
    image:'/public/tech/TailwindCSS.svg',
    category:'development'
  },
  {
    name:'Vercel',
    tag:'Deployment',
    image:'/tech/Vercel.svg',
    category:'Development'
  },
  {
    name:'Redux',
    tag:'State management',
    image:'/tech/redux.png',
    category:'development'
  },
  {
    name:'React Hook Form',
    tag:'Library',
    image:'/tech/react-hook-form.svg',
    category:'development'
  },
  {
    name:'VScode',
    tag:'Editor',
    image:'/tech/VSCode.svg',
    category:'development'
  },
  {
    name:'Github',
    tag:'Version control',
    image:'/tech/Github.svg',
    category:'development'
  },
  {
    name:'Sanity',
    tag:'Headless CMS',
    image:'/tech/Sanity.svg',
    category:'development'
  },
  {
    name:'Typescript',
    tag:'Language',
    image:'/tech/TypeScript.svg',
    category:'development'
  },
  {
    name:'Javascript',
    tag:'Language',
    image:'/tech/javascript.png',
    category:'development'
  },
  {
    name:'GSAP',
    tag:'Animations',
    image:'/tech/gsap.png',
    category:'development'
  },
  {
    name:'Figma',
    tag:'Design',
    image:'/tech/Figma.svg',
    category:'development'
  },
  {
    name:'Webflow',
    tag:'Editor',
    image:'tech/webflow.png',
    category:'low-code'
  },
  {
    name:'Finsweet',
    tag:'Integration',
    image:'/tech/finsweet.png',
    category:'low-code'
  },
  {
    name:'Zustand',
    tag:'State management',
    image:'/tech/Zustand.svg',
    category:'learning'
  },
  {
    name:'React Query',
    tag:'Server state',
    image:'/tech/react-query.svg',
    category:'learning'
  },
  {
    name:'Zod',
    tag:'Validations',
    image:'/tech/Zod.svg',
    category:'learning'
  },
  {
    name:'Node.js',
    tag:'Backend',
    image:'/tech/node.png',
    category:'learning'
  },
  {
    name:'Express',
    tag:'Node framework',
    image:'/tech/express.png',
    category:'learning'
  },
  {
    name:'MongoDB',
    tag:'Database',
    image:'/tech/mongo.png',
    category:'learning'
  },
  {
    name:'SQL',
    tag:'Databaw',
    image:'/tech/sql.png',
    category:'learning'
  },
]