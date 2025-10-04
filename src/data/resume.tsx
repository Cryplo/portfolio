import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Dylan Li",
  initials: "DL",
  url: "https://dillion.io",
  location: "Ann Arbor, MI",
  locationLink: "https://www.google.com/maps/place/annarbor",
  description:
    "Computer Science + Enginering Physics @ UMich",
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
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1DvsGiHSq2RhwQ6mODB-UmmNbhufWtGX-/view?usp=sharing",
        icon: Icons.googleDriveMonotone,
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
      title: "Software Engineer",
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
      title: "Augmented Reality Software Engineer",
      logoUrl: "/claws.jpeg",
      start: "September 2025",
      end: "Present",
      description:
        "Limbo",
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
      logoUrl: "/fia.png",
      start: "July 2025",
      end: "August 2025",
      description:
        "Instructed children ages 5–13 in programming, Arduino, electronics, CAD, and graphic design, fostering both technical skills and healthy personal habits in an engaging learning environment",
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
        "Directed a 70-person team to design, build, and program three robots, managing the entire engineering process, coordinating cross-team collaboration, and ensuring timely project completion. Transformed software stack by migrating from Python to Java, adopting functional programming practices, and improving odometry precision, computer vision reliability, and motion control accuracy. Advanced team ranking from 40th percentile to 93rd percentile worldwide in three years",
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
      "FRC Team 1076, Varsity Tennis, Wharton Global Youth Investment Competition, Asian Youth Club"
    },
  ],
  projects: [
    {
      title: "clAI - Command Line AI",
      href: "",
      dates: "Sep 2025",
      active: false,
      description:
        "Project that won MHacks 2025 Google Gemini Track; allows users to use natural language to run shell commands; developed with three others",
      technologies: [
        "Electron",
        "React",
        "Tailwind",
        "Vite",
        "TypeScript",
        "Gemini",
        "WebSockets"
      ],
      links: [
        {
          type: "Devpost",
          href: "https://devpost.com/software/clai?_gl=1*pffobo*_gcl_au*MTI3MTc3Njg5MS4xNzU4OTk4Mjg5*_ga*MTM2NzIyMzY2OC4xNzU4OTk4Mjg5*_ga_0YHJK3Y10M*czE3NTk1NTI3ODgkbzgkZzEkdDE3NTk1NTI4NDAkajgkbDAkaDA",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/cryplo/mhacks25",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/clai-picture.jpg",
      video:
        "",
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
