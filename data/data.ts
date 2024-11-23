import {
  type NavlinkType,
  type SocialImageType,
  type ProjectCardProps,
  GetToKnowMeCardProps,
  TechCardProps,
  MobileNavProps,
  WorkCardProps,
  FreetimeCardProps,
  ExperienceProps,
} from "@/types";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
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
    href: "/techstack",
    name: "Tech",
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
    name: "Video compression tool",
    logo: "/work/video.svg",
    tags: ["Nextjs", "ffmpeg wasm", "Shadcn Ui", "Tainwindcss"],
    image: "/work/video.png",
    githubLink: "https://github.com/Suhelkhan12/Vidsquash",
  },
  {
    name: "Remind me",
    logo: "/work/devflow-logo.svg",
    tags: ["Nextjs", "Server-actions", "Prisma", "Zod", "Tainwind"],
    image: "/work/remindme.png",
    githubLink: "https://github.com/Suhelkhan12/Remind-me",
  },

  {
    name: "Cube",
    logo: "/work/cube.svg",
    tags: ["Webflow", "GSAP", "Finsweet"],
    image: "/work/cube.png",
    liveLink: "https://www.cube.ms/",
  },
  {
    name: "Perdoo",
    logo: "/work/perdoo-fav.svg",
    tags: ["Webflow", "GSAP", "Finsweet", "Node", "Cloudfare workers"],
    image: "/work/perdoo.png",
    liveLink: "https://www.perdoo.com/",
  },
];

export const workCardsData: WorkCardProps[] = [
  {
    name: "Video compression tool",
    logo: "/work/video.svg",
    tags: ["Nextjs", "ffmpeg wasm", "Shadcn Ui", "Tainwindcss"],
    image: "/work/video.png",
    githubLink: "https://github.com/Suhelkhan12/Vidsquash",
    type: "Learning Experiment",
  },
  {
    name: "Remind me",
    logo: "/work/devflow-logo.svg",
    tags: ["Nextjs", "Server-actions", "Prisma", "Zod", "Tainwind"],
    image: "/work/remindme.png",
    githubLink: "https://github.com/Suhelkhan12/Remind-me",
    type: "Learning Experiment",
  },

  {
    name: "Cube",
    logo: "/work/cube.svg",
    tags: ["Webflow", "GSAP", "Finsweet"],
    image: "/work/cube.png",
    liveLink: "https://www.cube.ms/",
    type: "Selected",
  },
  {
    name: "Next auth implementation",
    logo: "/work/lock.svg",
    tags: [
      "Nextjs",
      "Server actions",
      "NextAuth",
      "Mongodb",
      "Prisma",
      "Zod",
      "Tailwind",
      "Shadcn",
    ],
    image: "/work/next-auth.png",
    githubLink: "https://github.com/Suhelkhan12/AuthJs-Next-Auth-guide",
    liveLink: "#",
    type: "Learning Experiment",
  },
  {
    name: "Perdoo",
    logo: "/work/perdoo-fav.svg",
    tags: ["Webflow", "GSAP", "Finsweet", "Node", "Cloudfare workers"],
    image: "/work/perdoo.png",
    liveLink: "https://www.perdoo.com/",
    type: "Selected",
  },
  {
    name: "Cashinvoice",
    logo: "/work/cashinvoice-logo.svg",
    tags: ["Webflow", "Finsweet", "GSAP"],
    image: "/work/cashinvoice.png",
    liveLink: "https://cashinvoice.in",
    type: "Selected",
  },
  {
    name: "Shineagro",
    logo: "/work/shineagro-logo.svg",
    tags: ["Webflow", "Finsweet", "GSAP"],
    image: "/work/shineagro.png",
    liveLink: "https://shineagrotech.com",
    type: "Selected",
  },

  // {
  //   name: "Devflow",
  //   logo: "/work/devflow-logo.svg",
  //   tags: [
  //     "Nextjs",
  //     "Server actions",
  //     "Tailwind",
  //     "Shadcn",
  //     "Mongodb",
  //     "Clerk",
  //   ],
  //   image: "/work/devflow.png",
  //   githubLink: "https://github.com/Suhelkhan12/devflow.git",
  //   liveLink: "#",
  //   type: "Learning Experiment",
  // },
  // {
  //   name: "Word Gamble",
  //   logo: "/work/wordle-logo.png",
  //   tags: ["React", "React-router", "Zod", "Zustand", "Tainwind"],
  //   image: "/work/wordle.png",
  //   githubLink: "https://github.com/Suhelkhan12/Wordle.git",
  //   type: "Learning Experiment",
  // },
];

// get to know me cards data
export const getToKnowMeData: GetToKnowMeCardProps[] = [
  {
    heading: "About me",
    subheading: "Who I am what I do?",
    link: "/about",
  },
  {
    heading: "Techstack",
    subheading: "Technology I use and currenly learning.",
    link: "/techstack",
  },
];

export const techCards: TechCardProps[] = [
  {
    name: "Next.js",
    tag: "Web framework",
    image: "/tech/Nextjs.svg",
    category: "development",
  },
  {
    name: "React.js",
    tag: "JS framework",
    image: "/tech/react.png",
    category: "development",
  },
  {
    name: "Taiwind",
    tag: "Styling",
    image: "/tech/TailwindCSS.svg",
    category: "development",
  },
  {
    name: "Vercel",
    tag: "Deployment",
    image: "/tech/Vercel.svg",
    category: "Development",
  },
  {
    name: "Redux",
    tag: "State management",
    image: "/tech/redux.png",
    category: "development",
  },
  {
    name: "Zustand",
    tag: "State management",
    image: "/tech/Zustand.svg",
    category: "development",
  },
  {
    name: "React Hook Form",
    tag: "Library",
    image: "/tech/react-hook-form.svg",
    category: "development",
  },
  {
    name: "Prisma",
    tag: "ORM",
    image: "/tech/prisma.png",
    category: "development",
  },
  {
    name: "Typescript",
    tag: "Language",
    image: "/tech/TypeScript.svg",
    category: "development",
  },
  {
    name: "Javascript",
    tag: "Language",
    image: "/tech/javascript.png",
    category: "development",
  },
  {
    name: "C++",
    tag: "Language",
    image: "/tech/cpp.svg",
    category: "development",
  },
  {
    name: "Zod",
    tag: "Validations",
    image: "/tech/Zod.svg",
    category: "development",
  },
  // {
  //   name: "Sanity",
  //   tag: "Headless CMS",
  //   image: "/tech/Sanity.svg",
  //   category: "development",
  // },
  {
    name: "GSAP",
    tag: "Animations",
    image: "/tech/gsap.png",
    category: "development",
  },
  {
    name: "Figma",
    tag: "Design",
    image: "/tech/Figma.svg",
    category: "development",
  },
  {
    name: "VScode",
    tag: "Editor",
    image: "/tech/VSCode.svg",
    category: "development",
  },
  {
    name: "Github",
    tag: "Version control",
    image: "/tech/Github.svg",
    category: "development",
  },
  {
    name: "Webflow",
    tag: "Editor",
    image: "/tech/webflow.png",
    category: "low-code",
  },
  {
    name: "Finsweet",
    tag: "Integration",
    image: "/tech/finsweet.png",
    category: "low-code",
  },
  {
    name: "React Query",
    tag: "Server state",
    image: "/tech/react-query.svg",
    category: "learning",
  },

  {
    name: "Node.js",
    tag: "Backend",
    image: "/tech/node-new.png",
    category: "learning",
  },
  {
    name: "Express",
    tag: "Node framework",
    image: "/tech/express-new.png",
    category: "learning",
  },
  {
    name: "MongoDB",
    tag: "Database",
    image: "/tech/mongo.png",
    category: "learning",
  },
  {
    name: "SQL",
    tag: "Database",
    image: "/tech/sql.png",
    category: "learning",
  },
];

export const mobileNavLinks: MobileNavProps[] = [
  {
    slug: "/",
    id: "home",
    icon: IoHomeOutline,
  },
  {
    slug: "/about",
    id: "about",
    icon: IoPersonOutline,
  },
  {
    slug: "/work",
    id: "work",
    icon: MdOutlineWorkOutline,
  },
  {
    slug: "/techstack",
    id: "techstack",
    icon: GoPencil,
  },
];

export const portraitText = [
  "I always drink hot coffee.",
  "I enjoy football.",
  "Animes are best.",
  "Upcoming Full Stack Dev.",
];

export const experienceDetails: ExperienceProps[] = [
  {
    id: 1,
    companyname: "ParallelHq",
    designation: "UI Engineer",
    dateLocation: "January 2024 - Present | Bengaluru, India.",
    about: [
      {
        id: "1",
        point:
          "Respoinsible for UI design and development for websites, emphasizing user-centric principles for enhanced usability and accessibility.",
      },
      {
        id: "2",
        point:
          "Collaborate cross-functionally to refine designs and elevate user experience.",
      },
      {
        id: "3",
        point:
          "Engage in comprehensive analysis and problem-solving to address complex design challenges, ensuring seamless integration and functionality across various platforms.",
      },
      {
        id: "5",
        point:
          "Demonstrated adaptability and proficiency in addressing varying project demands while upholding stringent standards of quality and efficiency.",
      },
    ],
  },
  {
    id: 3,
    companyname: "ParallelHq",
    designation: "UI Engineer(Intern)",
    dateLocation: "May 2023 - Oct 2023 | Bengaluru, India.",
    about: [
      {
        id: "1",
        point:
          "Learned Webflow and Finsweet for low-code development, gaining proficiency in creating complex layouts and interactions.",
      },
      {
        id: "2",
        point:
          " Solved challenging animations using GSAP, improving the visual appeal and interactivity of client websites.",
      },
      {
        id: "3",
        point:
          "Contributed to client projects by assisting in the development of UI/UX elements and ensuring their alignment with project requirements.",
      },
    ],
  },
  {
    id: 2,
    companyname: "Teamflexbox",
    designation: "Frontend developer",
    dateLocation: "Jan 2023 - May 2023 | Delhi, India.",
    about: [
      {
        id: "1",
        point:
          "Led the conceptualization and refinement of intuitive user interfaces for diverse websites, harmonizing aesthetic appeal with usability.",
      },
      {
        id: "2",
        point:
          "Implemented user-centric design methodologies to ensure optimal accessibility and functionality, enhancing overall user experience.",
      },
      {
        id: "5",
        point:
          "Demonstrated adaptability and proficiency in addressing varying project demands while upholding stringent standards of quality and efficiency.",
      },
    ],
  },
];

export const educationDetails = [
  {
    id: 1,
    university: "Delhi univeristy",
    dateLocatoin: "July 2018 - August 2021 | 8/10 CGPA",
    degreeName: "Bsc(hons) Mathematics",
  },
  {
    id: 2,
    university: "Panjab univeristy",
    dateLocatoin: "August 2021 - present | 7/10 CGPA",
    degreeName: "Masters in computer science and applications",
  },
];

export const freeeTimeCardData: FreetimeCardProps[] = [
  {
    heading: "Anime",
    subheading:
      "Anime transcend mere pastimes for me; they're wellsprings of inspiration. Each intricate narrative and meticulously crafted scene ignite my creativity, influencing my storytelling techniques and enriching my development endeavors.",
    images: [
      {
        name: "onepice",
        image: "/onepiece.jpeg",
      },
      {
        name: "demonslayer",
        image: "/demonslayer.jpeg",
      },
      {
        name: "jutsu",
        image: "/jjk.jpeg",
      },
      {
        name: "naruto",
        image: "/naruto.jpeg",
      },
    ],
  },
  {
    heading: "Mountains",
    subheading:
      "Beyond coding, I find solace and inspiration in trekking through mountains. Each step in nature's vast landscapes mirrors the problem-solving journey in coding, fostering resilience, balance, and innovative thinking.",
    images: [
      {
        name: "Trek1",
        image: "/trek1.jpg",
      },
      {
        name: "Trek2",
        image: "/trek2.jpg",
      },
      {
        name: "Trek3",
        image: "/trek3.jpeg",
      },
      {
        name: "Trek4",
        image: "/trek4.jpg",
      },
    ],
  },
];

export const workCategory = [
  {
    id: "live",
    name: "Live",
  },
  {
    id: "learning-experiment",
    name: "Learning experiemnt",
  },
];
