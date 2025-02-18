import {
  type NavlinkType,
  type SocialImageType,
  type ProjectCardProps,
  GetToKnowMeCardProps,
  TechCardProps,
  MobileNavProps,
  WorkCardProps,
  FreetimeCardProps,
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
    src: FaLinkedin,
    alt: "Linkedin",
    link: "https://www.linkedin.com/in/suhel-khan-925aa222a/",
  },
  {
    src: FaXTwitter,
    alt: "Twitter",
    link: "https://twitter.com/suhel7822",
  },
  {
    src: FaGithub,
    alt: "Github",
    link: "https://github.com/Suhelkhan12",
  },
];

// all projects data
export const projectsData: ProjectCardProps[] = [
  {
    name: "Leetcode card generator",
    logo: "/work/leetcode-logo.svg",
    tags: ["Next.js", "React.js", "ShadnUI", "GraphQl", "Leetcode-api"],
    image: "/work/leetcode.png",
    liveLink: "https://leetinsight.vercel.app/",
  },
  {
    name: "Video compression tool",
    logo: "/work/video.svg",
    tags: ["Nextjs", "ffmpeg wasm", "Shadcn Ui", "Tainwindcss"],
    image: "/work/video.png",
    liveLink: "https://vidsquash.vercel.app/",
  },
  {
    name: "Remind me",
    logo: "/work/devflow-logo.svg",
    tags: ["Nextjs", "Server-actions", "Prisma", "Zod", "Tainwind"],
    image: "/work/remindme.png",
    githubLink: "https://github.com/Suhelkhan12/Remind-me",
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
    name: "Perdoo",
    logo: "/work/perdoo-fav.svg",
    tags: ["Webflow", "GSAP", "Finsweet", "Typescript", "Cloudfare workers"],
    image: "/work/perdoo.png",
    liveLink: "https://www.perdoo.com/",
    type: "Professional project",
  },
  {
    name: "Anyonecan Ai",
    logo: "/work/ai-fav.svg",
    tags: ["Webflow", "GSAP", "Finsweet", "Javascript"],
    image: "/work/ai-photo.png",
    liveLink: "https://www.anyonecanai.io/",
    type: "Professional project",
  },
  {
    name: "Conscious Patterns",
    logo: "/work/cp-fav.svg",
    tags: ["Webflow", "GSAP", "Finsweet", "Javascript"],
    image: "/work/cp.png",
    liveLink: "https://www.consciouspatterns.in/",
    type: "Professional project",
  },
  {
    name: "Cube",
    logo: "/work/cube.svg",
    tags: ["Webflow", "GSAP", "Finsweet", "Javascript"],
    image: "/work/cube.png",
    liveLink: "https://www.consciouspatterns.in/",
    type: "Professional project",
  },
  {
    name: "Shineagro",
    logo: "/work/shineagro-logo.svg",
    tags: ["Webflow", "Finsweet", "GSAP"],
    image: "/work/shineagro.png",
    liveLink: "https://shineagrotech.com",
    type: "Professional project",
  },
  {
    name: "Raphe",
    logo: "/work/Raphe -fav.png",
    tags: ["Webflow", "Finsweet", "GSAP", "Javascript"],
    image: "/work/Raphe-.png",
    liveLink: "https://www.raphe.com/",
    type: "Professional project",
  },
  {
    name: "Cashinvoice",
    logo: "/work/cashinvoice-logo.svg",
    tags: ["Webflow", "Finsweet", "GSAP"],
    image: "/work/cashinvoice.png",
    liveLink: "https://cashinvoice.in",
    type: "Professional project",
  },

  {
    name: "BioGinie",
    logo: "/work/bot.svg",
    tags: ["Nextjs", "Shadcn", "Vercel AI SDK", "Groq"],
    image: "/work/ai.png",
    liveLink: "https://ai-bios.vercel.app/",
    type: "Learning experiment",
  },
  {
    name: "Stayz",
    logo: "/work/hotel.svg",
    tags: ["Nextjs", "Prisma", "Supabase", "Zod", "Shadcn Ui", "Tainwindcss"],
    image: "/work/airbnb.jpeg",
    githubLink: "https://github.com/Suhelkhan12/Airbnb-clone",
    type: "Learning experiment",
  },
  {
    name: "Video compression tool",
    logo: "/work/video.svg",
    tags: ["Nextjs", "ffmpeg wasm", "Shadcn Ui", "Tainwindcss"],
    image: "/work/video.png",
    liveLink: "https://vidsquash.vercel.app/",
    type: "Learning experiment",
  },

  {
    name: "Remind me",
    logo: "/work/devflow-logo.svg",
    tags: ["Nextjs", "Server-actions", "Prisma", "Zod", "Tainwind"],
    image: "/work/remindme.png",
    githubLink: "https://github.com/Suhelkhan12/Remind-me",
    type: "Learning experiment",
  },
  {
    name: "Leetcode card generator",
    logo: "/work/leetcode-logo.svg",
    tags: ["Next.js", "React.js", "ShadnUI", "GraphQl", "Leetcode-api"],
    image: "/work/leetcode.png",
    liveLink: "https://leetinsight.vercel.app/",
    type: "Learning experiment",
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
    id: "professional-project",
    name: "Professional project",
  },
  {
    id: "learning-experiment",
    name: "Learning experiment",
  },
];
