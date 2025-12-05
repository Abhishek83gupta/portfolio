import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Abhishek Gupta",
  initials: "Abhishek Gupta",
  url: "#",
  location: "Maharashtra, Thane",
  locationLink: "",
  description:
    "Software Engineer who loves building and creating impact!",
  summary:
    "I build Software with expertise in Full-Stack development and DevOps. I work across the entire development process, from creating intuitive user interfaces to managing backend functionality and deployment. I focus on delivering clean, efficient, and reliable applications. My goal is to create solutions that are scalable, seamless, and enjoyable to use.",
  avatarUrl: "/me.jpg",
  skills: [
    "React.js",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express.js",
    "TailwindCSS",
    "MongoDB",
    "MySQL",
    "Prisma",
    "PostgresSQL",
    "Nginx",
    "AWS",
    "CI/CD",
    "Maven",
    "Jenkins",
    "Docker",
    "Kubernetes",
    "JavaScript",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://drive.google.com/file/d/18i9IgJAyQCHAeT5o_csckNeuc6fKMlzP/view", icon: NotebookIcon, label: "Resume" },
  ],
  contact: {
    email: "mailto:abhishekgupta3104@gmail.com",
    tel: "8356029841",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Abhishek83gupta",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abhishek-gupta-83a410295/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/unkown_abhi_31?t=zXu_hYesRzsSuQGcNmHmWw&s=08",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:abhishekgupta3104@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "AffieFly (Growdeck)",
      href: "https://growdeck.io",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/growdeck.svg",
      start: "April 2025",
      end: "Present",
      description: [
     "Implemented CI/CD pipelines using GitHub Actions across dev, test, and prod environments, automating deployments and reducing manual effort by 40%.",
     "Integrated Redis caching to optimize data retrieval, reducing API response latency from 1.5s to 200ms.",
     "Added API rate limiting to prevent request abuse, reducing server load by 30% and maintaining high availability."
     ],
    },
     {
      company: "SAIT",
      href: "",
      badges: [],
      location: "",
      title: "Technical Head",
      logoUrl: "/sait.png",
      start: "June 2024",
      end: "May 2025",
      description: [],
    },
  ],
  education: [
    {
      school: "Saraswati college of Engineering(SCOE)",
      href: "https://engineering.saraswatikharghar.edu.in",
      degree: "Bachelor of Engineering in Information Technology",
      logoUrl: "/scoe.jpg",
      start: "2022",
      end: "2026 (present)",
    },
    {
      school: "Guru Nanak English High School & Junior College",
      href: "https://gnhsbhandup.in",
      degree: "Higher Secondary School",
      logoUrl: "https://gnhsbhandup.in/assets/images/logo-small.png",
      start: "2020",
      end: "2022",
    },
    {
      school: "RTP High School and Jr College",
      href: "",
      degree: "Secondary School",
      logoUrl: "/school.png",
      start: "2008",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "FixCode",
      href: "https://fix-code.vercel.app",
      dates: "",
      active: true,
      description:
        "FixCode is an intelligent language editor that helps developers identify and fix errors in their code seamlessly. With its ASK AI feature, users can receive instant error solutions and suggestions, improving efficiency and learning. Additionally, FIXCODE allows users to easily share their code with others.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "NextAuth",
        "Docker",
        "AWS"
      ],
      links: [
        {
          type: "Website",
          href: "https://fix-code.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Abhishek83gupta/FixCode",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/fixcode.png",
      video:
        "",
    },
    {
      title: "VisioGen",
      href: "https://visiogen-five.vercel.app",
      dates: "",
      active: true,
      description:
        "VisioGen is an innovative platform that converts text prompts into AI-generated images. With features like model selection, prompt enhancement, and customizable aspect ratios, it offers a versatile and user-friendly experience. Users can manage their creations in a personalized profile, where all generated images are stored, organized,",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "NextAuth",
        "Docker",
        "AWS"
      ],
      links: [
        {
          type: "Website",
          href: "https://visiogen-five.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Abhishek83gupta/Visiogen",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/visiogen.png",
      video: "",
    },
    {
      title: "Pickest",
      href: "https://pickest.vercel.app",
      dates: "",
      active: true,
      description:
        "Pickest is a platform for buying and selling assets, offering secure transactions, advanced search, and easy-to-use asset listings. It ensures a smooth and efficient experience for users.",
      technologies: [
        "React.js",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TailwindCSS",
        "Cloudinary",
        "Razorpay",
      ],
      links: [
        {
          type: "Website",
          href: "https://pickest.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Abhishek83gupta/Pickest",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/pickest.png",
      video: "",
    },
    {
      title: "Setups",
      href: "https://github.com/Abhishek83gupta/setups",
      // dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed a centralized repository containing setup files, configuration templates, and automation scripts to streamline DevOps workflows.",
      technologies: [
        "Shell Scripting",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://automatic.chat",
        //   icon: <Icons.globe className="size-3" />,
        // },
         {
          type: "Source",
          href: "https://github.com/Abhishek83gupta/setups",
          icon: <Icons.github className="size-3" />,
        },
      ],
      // image: "",
      // video:"",
    },
  ],
  hackathons: [
    {
      title: "AI Odyssey 1.0 2025",
      dates: "March 7, 2025",
      location: "Karjat, Mumbai",
      description:"Developed Prescripto, an AI system for personalized healthcare, provides clear and transparent reasoning behind patient-specific diagnoses and treatments.",
      image:
        "https://www.universalai.in/wp-content/uploads/2020/03/universal-ai-university-uai-png-67ee28fc2744f-1024x195.webp",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
