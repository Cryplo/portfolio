import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Dylan Li",
  initials: "DL",
  url: "https://dillion.io",
  location: "Ann Arbor, MI",
  locationLink: "https://www.google.com/maps/place/annarbor",
  description:
    "Computer Science & Engineering Physics  University of Michigan",
  summary:
      "I started programming in 2020, ....",
    //"At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "lidylan@umich.edu",
    tel: "+17349722779",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Cryplo",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lidylan/",
        icon: Icons.linkedin,
        navbar: true,
      },
      /*
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },*/
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Innovation for Impact",
      href: "https://google.com",
      badges: [],
      location: "Ann Arbor, Michigan",
      title: "Software Developer",
      logoUrl: "/ifi.jpg",
      start: "September 2025",
      end: "Present",
      description:
        "Develop this",
    },
    {
      company: "CLAWS",
      href: "https://claws.engin.umich.edu",
      badges: [],
      location: "Ann Arbor, Michigan",
      title: "AR Developer",
      logoUrl: "/claws.jpeg",
      start: "September 2025",
      end: "Present",
      description:
        "Limbo",
    },
    {
      company: "BLiSS",
      href: "https://sites.google.com/a/umich.edu/bliss/home",
      badges: [],
      location: "Ann Arbor, Michigan",
      title: "Controls Member",
      logoUrl: "/bliss.png",
      start: "September 2025",
      end: "Present",
      description:
        "Lorem Ipsum",
    },
    {
      company: "Future of Programming Lab",
      href: "https://hazel.org",
      badges: [],
      location: "Ann Arbor, Michigan",
      title: "Lab Member",
      logoUrl: "/michigan2.png",
      start: "May 2025",
      end: "Present",
      description:
        "Enhanced Hazel code editor through resolving UI bugs and developing new features with ReasonML; Applied type theory principles to design and implement core functionality for onboarding project",
    },
    {
      company: "The Future Innovators Academy",
      badges: [],
      href: "http://thefutureinnovatorsacademy.com",
      location: "Ann Arbor, Michigan",
      title: "Summer Camp Instructor",
      logoUrl: "fia.png",
      start: "July 2025",
      end: "August 2025",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Pioneer High School FRC Robotics",
      href: "https://pihisamurai.org",
      badges: [],
      location: "Ann Arbor, Michigan",
      title: "Engineering Captain",
      logoUrl: "/pihi.png",
      start: "September 2021",
      end: "May 2025",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    
  ],
  education: [
    {
      school: "University of Michigan",
      href: "https://umich.edu",
      badges: [],
      location: "Ann Arbor, Michigan",
      degree: "B.S.E. Computer Science and Engineering Physics",
      logoUrl: "/michigan2.png",
      start: "August 2025",
      end: "Present",
      description:
      "EECS 280, EECS 203, EECS 201, PHYSICS 340, ENGR 100"
    },
    {
      school: "University of Michigan",
      href: "https://umich.edu",
      badges: [],
      location: "Ann Arbor, Michigan",
      degree: "High School Dual Enrollment",
      logoUrl: "/michigan2.png",
      start: "August 2023",
      end: "December 2024",
      description:
      "MATH 215, MATH 214, PHYSICS 240"
    },
    {
      school: "Pioneer High School",
      href: "https://pioneer.a2schools.org",
      badges: [],
      location: "Ann Arbor, Michigan",
      degree: "High School Degree",
      logoUrl: "/phs.png",
      start: "August 2021",
      end: "May 2025",
      description:
      "FRC, Varsity Tennis, Wharton Global Youth Investment Competition, Asian Youth Club"
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  
  
} as const;
