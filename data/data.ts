import { type NavlinkType, type SocialImageType,type ProjectCardProps, GetToKnowMeCardProps, TechCardProps, MobileNavProps, WorkCardProps } from "@/types";
import { FaGithub , FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoHomeOutline,IoPersonOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GoPencil } from "react-icons/go";


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
    name:'Cashinvoice',
    description: 'Empower your financial ecosystem with our tailored solutions, designed to optimize the supply chain and unleash the potential of stakeholders at every level.',
    tags:['Webflow', 'Finsweet', 'GSAP'],
    image:'/work/cashinvoice.png',
    liveLink: 'https://cashinvoice.in',
  },
  {
    name:'Shineagro',
    description: 'Shine Agro is your reliable partner for top-quality farm produce, supplying fresh, nutritious, ethically grown products to B2B partners with a focus on sustainability and dependable delivery.',
    tags:['Webflow', 'Finsweet', 'GSAP'],
    image:'/work/shineagro.png',
    liveLink: 'https://cashinvoice.in',
  },
  {
    name:'Cashinvoice',
    description: 'Empower your financial ecosystem with our tailored solutions, designed to optimize the supply chain and unleash the potential of stakeholders at every level.',
    tags:['Webflow', 'Finsweet', 'GSAP'],
    image:'/work/cashinvoice.png',
    liveLink: 'https://cashinvoice.in',
  },
  {
    name:'Cashinvoice',
    description: 'Empower your financial ecosystem with our tailored solutions, designed to optimize the supply chain and unleash the potential of stakeholders at every level.',
    tags:['Webflow', 'Finsweet', 'GSAP'],
    image:'/work/cashinvoice.png',
    liveLink: 'https://cashinvoice.in',
  }
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
    image:'/tech/TailwindCSS.svg',
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
    image:'/tech/webflow.png',
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
    image:'/tech/node-new.png',
    category:'learning'
  },
  {
    name:'Express',
    tag:'Node framework',
    image:'/tech/express-new.png',
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
    tag:'Database',
    image:'/tech/sql.png',
    category:'learning'
  },
]

export const mobileNavLinks: MobileNavProps[] = [
  { 
    slug: '/',
    id:'home',
    icon: IoHomeOutline
  },
  {
    slug: '/about',
    id:'about',
    icon: IoPersonOutline
  }
  ,
  {
    slug: '/work',
    id:'work',
    icon: MdOutlineWorkOutline
  },
  {
    slug: '/techstack',
    id:'techstack',
    icon: GoPencil
  }
]

export const portraitText = [
'I always drink hot coffee.',
'I enjoy football.',
'Animes are best.',
'Upcoming Full Stack Dev.'
]

export const workCardsData: WorkCardProps[] = [
  {
    name:'Cashinvoice',
    description: 'Empower your financial ecosystem with our tailored solutions, designed to optimize the supply chain and unleash the potential of stakeholders at every level.',
    tags:['Webflow', 'Finsweet', 'GSAP'],
    image:'/work/cashinvoice.png',
    liveLink: 'https://cashinvoice.in',
  },
  {
    name:'Shineagro',
    description: 'Shine Agro is your reliable partner for top-quality farm produce, supplying fresh, nutritious, ethically grown products to B2B partners with a focus on sustainability and dependable delivery.',
    tags:['Webflow', 'Finsweet', 'GSAP'],
    image:'/work/shineagro.png',
    liveLink: 'https://cashinvoice.in',
  },
  {
    name:'Cashinvoice',
    description: 'Empower your financial ecosystem with our tailored solutions, designed to optimize the supply chain and unleash the potential of stakeholders at every level.',
    tags:['Webflow', 'Finsweet', 'GSAP'],
    image:'/work/cashinvoice.png',
    liveLink: 'https://cashinvoice.in',
  },
  {
    name:'Cashinvoice',
    description: 'Empower your financial ecosystem with our tailored solutions, designed to optimize the supply chain and unleash the potential of stakeholders at every level.',
    tags:['Webflow', 'Finsweet', 'GSAP'],
    image:'/work/cashinvoice.png',
    liveLink: 'https://cashinvoice.in',
  }
]