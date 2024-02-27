import { type NavlinkType, type SocialImageType,type ProjectCardProps, GetToKnowMeCardProps } from "@/types";
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