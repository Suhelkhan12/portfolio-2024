import { type NavlinkType, type SocialImageType,type ProjectCardProps, GetToKnowMeCardProps, TechCardProps, MobileNavProps, WorkCardProps, FreetimeCardProps, ExperienceProps } from "@/types";
import { FaGithub , FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoHomeOutline,IoPersonOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { SlBookOpen } from "react-icons/sl";


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
    logo:'/work/cashinvoice-logo.svg',
    description: 'Empower your financial ecosystem with our tailored solutions, designed to optimize the supply chain and unleash the potential of stakeholders at every level.',
    tags:['Webflow', 'Finsweet', 'GSAP'],
    image:'/work/cashinvoice.png',
    liveLink: 'https://cashinvoice.in',
  },
  {
    name:'Shineagro',
    logo:'/work/shineagro-logo.svg',
    description: 'Shine Agro is your reliable partner for top-quality farm produce, supplying fresh, nutritious, ethically grown products to B2B partners with a focus on sustainability and dependable delivery.',
    tags:['Webflow', 'Finsweet', 'GSAP'],
    image:'/work/shineagro.png',
    liveLink: 'https://shineagrotech.com',
  },
  {
    name:'Devflow',
    logo:'/work/devflow-logo.svg',
    description: 'Revolutionize knowledge sharing and career growth with our StackOverflow-inspired app, seamlessly integrating Q&A forums with job listings across diverse roles.',
    tags:['Nextjs', 'Server actions', 'Tailwind','Shadcn', 'Mongodb', 'Clerk'],
    image:'/work/devflow.png',
    githubLink: 'https://github.com/Suhelkhan12/devflow.git',
    liveLink:'#'
  },
  {
    name:'Word Gamble',
    logo:"/work/wordle-logo.png",
    description: 'I was so amazed by the popularity of wordle. Being a developer I started thinking about the logic and decided to give it a try.',
    tags:['React', 'React-router', 'Zod', 'Zustand', 'Tainwind'],
    image:'/work/wordle.png',
    githubLink: 'https://github.com/Suhelkhan12/Wordle.git'
  }
]

// get to know me cards data
export const getToKnowMeData: GetToKnowMeCardProps[]=[
  {
    heading: 'About me',
    subheading: 'Who I am what I do?',
    link: '/about',
  },
  {
    heading: 'Techstack',
    subheading: 'Technology I use and currenly learning.',
    link: '/techstack',
  },
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
  },
  {
    slug:'/resume',
    id:'resume',
    icon:SlBookOpen
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
    logo: '/work/cashinvoice-logo.svg',
    description: 'Empower your financial ecosystem with our tailored solutions, designed to optimize the supply chain and unleash the potential of stakeholders at every level.',
    tags:['Webflow', 'Finsweet', 'GSAP'],
    image:'/work/cashinvoice.png',
    liveLink: 'https://cashinvoice.in',
  },
  {
    name:'Shineagro',
    logo:'/work/shineagro-logo.svg',
    description: 'Shine Agro is your reliable partner for top-quality farm produce, supplying fresh, nutritious, ethically grown products to B2B partners with a focus on sustainability and dependable delivery.',
    tags:['Webflow', 'Finsweet', 'GSAP'],
    image:'/work/shineagro.png',
    liveLink: 'https://shineagrotech.com',
  },
  {
    name:'Devflow',
    logo:'/work/devflow-logo.svg',
    description: 'Revolutionize knowledge sharing and career growth with our StackOverflow-inspired app, seamlessly integrating Q&A forums with job listings across diverse roles.',
    tags:['Nextjs', 'Server actions', 'Tailwind','Shadcn', 'Mongodb', 'Clerk'],
    image:'/work/devflow.png',
    githubLink: 'https://github.com/Suhelkhan12/devflow.git',
    liveLink: '#'
  },
  {
    name:'Word Gamble',
    logo:"/work/wordle-logo.png",
    description: 'I was so amazed by the popularity of wordle. Being a developer I started thinking about the logic and decided to give it a try.',
    tags:['React', 'React-router', 'Zod', 'Zustand', 'Tainwind'],
    image:'/work/wordle.png',
    githubLink: 'https://github.com/Suhelkhan12/Wordle.git'
  },
  {
    name:'Remind me',
    logo:"/work/devflow-logo.svg",
    description: 'Full stack reminde me web app.',
    tags:['Nextjs','Server-actions', 'Prisma', 'Zod', 'Tainwind'],
    image:'/work/remindme.png',
    githubLink: 'https://github.com/Suhelkhan12/Remind-me'
  }
]

export const experienceDetails: ExperienceProps[] = [
  {
    id: 1,
    companyname: 'ParallelHq',
    designation:'UI Engineer',
    dateLocation: 'January 2024 - Present | Bengaluru, India.',
    about: [
      {id:'1',point:"Respoinsible for UI design and development for websites, emphasizing user-centric principles for enhanced usability and accessibility."},
      {id:'2',point:"Collaborate cross-functionally to refine designs and elevate user experience."},
      {id:'3',point:"Engage in comprehensive analysis and problem-solving to address complex design challenges, ensuring seamless integration and functionality across various platforms."},
      {id:'5',point:"Demonstrated adaptability and proficiency in addressing varying project demands while upholding stringent standards of quality and efficiency."}
    ]
  },
  {
    id: 2,
    companyname: 'Teamflexbox',
    designation:'Frontend developer(Freelance)',
    dateLocation: 'July 2023 - Present | Delhi, India.',
    about: [
      {id:'1',point:"Led the conceptualization and refinement of intuitive user interfaces for diverse websites, harmonizing aesthetic appeal with usability."},
      {id:'2',point:"Implemented user-centric design methodologies to ensure optimal accessibility and functionality, enhancing overall user experience."},
      {id:'5',point:"Demonstrated adaptability and proficiency in addressing varying project demands while upholding stringent standards of quality and efficiency."}
    ]
  }
]

export const educationDetails = [
  {
    id:1,
    university: 'Delhi univeristy',
    dateLocatoin: 'July 2018 - August 2021 | 8/10 CGPA',
    degreeName: 'Bsc(hons) Mathematics'
  },
  {
    id:2,
    university: 'Panjab univeristy',
    dateLocatoin: 'August 2021 - present | 7/10 CGPA',
    degreeName: 'Masters in computer science and applications'
  }
]

export const freeeTimeCardData: FreetimeCardProps[] = [
  {
    heading:'Anime',
    subheading:"Anime transcend mere pastimes for me; they're wellsprings of inspiration. Each intricate narrative and meticulously crafted scene ignite my creativity, influencing my storytelling techniques and enriching my development endeavors.",
    images:[
      {
        name:'onepice',
        image:'/onepiece.jpeg'
      },
      {
        name:'demonslayer',
        image:'/demonslayer.jpeg'
      },
      {
        name:'jutsu',
        image:'/jjk.jpeg'
      },
      {
        name:'naruto',
        image:'/naruto.jpeg'
      }
    ]
  },
  {
    heading:'Mountains',
    subheading:"Beyond coding, I find solace and inspiration in trekking through mountains. Each step in nature's vast landscapes mirrors the problem-solving journey in coding, fostering resilience, balance, and innovative thinking.",
    images: [
      {
        name:'Trek1',
        image:'/trek1.jpg'
      },
      {
        name:'Trek2',
        image:'/trek2.jpg'
      },
      {
        name:'Trek3',
        image:'/trek3.jpeg'
      },
      {
        name:'Trek4',
        image:'/trek4.jpg'
      },
    ]
  }
]