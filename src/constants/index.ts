// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "http://www.github.com/sanidhyy/3d-portfolio",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: backend,
  },
  {
    title: "WordPress Specialist",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Web & E-commerce Applications",
    company_name: "Dalvkot Utility Enterprises",
    icon: shopify,
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      "Developed and maintained responsive front-end applications using React.js, JavaScript, HTML5, and CSS3.",
      "Built key e-commerce features including product listing pages, cart management, and checkout workflows for the Dcode platform.",
      "Integrated RESTful APIs for dynamic data rendering, user authentication, and order processing.",
      "Collaborated with designers and backend developers to translate business requirements into user-friendly interfaces.",
    ],
  },
  {
    title: "WordPress Websites",
    company_name: "Dalvkot Utility Enterprises",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "August 2023 - Present",
    points: [
      "Developed and maintained multiple WordPress-based websites across education, healthcare, and corporate domains.",
      "Customized WordPress themes and configured plugins based on business and client requirements.",
      "Implemented backend functionality using PHP for form handling, validations, and authentication.",
      "Ensured responsive design and consistent user experience across multiple devices and browsers.",
    ],
  },
  {
    title: "Application Support",
    company_name: "Collabera Technologies",
    icon: tesla,
    iconBg: "#383E56",
    date: "2021 - 2022",
    points: [
      "Provided application support and resolved production issues to ensure high availability.",
      "Performed bug analysis, troubleshooting, and root cause analysis for application and system-level issues.",
      "Worked in Linux-based environments, managing logs and services for issue resolution.",
      "Followed SLA-driven processes to prioritize, track, and resolve incidents within defined timelines.",
    ],
  },
  {
    title: "UI Developer",
    company_name: "RC Techbox IT Services",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "2020 - 2021",
    points: [
      "Developed UI screens using React.js for web applications, including a School Management System.",
      "Built reusable React components and responsive layouts to enhance performance and maintainability.",
      "Delivered mobile-first, user-friendly interfaces ensuring a seamless user experience.",
      "Supported website maintenance and ensured consistent design and functionality.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "Sirisha is a dedicated developer who consistently delivers high-quality work with a focus on performance and user experience.",
    name: "Anoop Kumar",
    designation: "Team Lead",
    company: "Dalvkot",
    image: user1,
  },
  {
    testimonial:
      "Working with Sirisha on the Dcode platform was a great experience. She has a deep understanding of React and seamless API integration.",
    name: "Suresh Babu",
    designation: "Senior Backend Developer",
    company: "Dalvkot",
    image: user2,
  },
  {
    testimonial:
      "Sirisha helped us migrate our healthcare portal to WordPress seamlessly. Her attention to detail and responsiveness were exceptional.",
    name: "Dr. Megha",
    designation: "Client",
    company: "HealthCare Plus",
    image: user3,
  },
  {
    testimonial:
      "Her ability to translate complex Figma designs into pixel-perfect, responsive components is truly outstanding.",
    name: "Priyanka S",
    designation: "UI/UX Lead",
    company: "RC Techbox",
    image: user2,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Dcode Platform",
    description:
      "An end-to-end e-commerce platform with product listings, cart management, and checkout workflows, ensuring high performance and scalability.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css3",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/sirishavenu9724",
    live_site_link: "https://github.com/sirishavenu9724",
  },
  {
    name: "School Management",
    description:
      "A comprehensive web application for schools, featuring UI screens for student data management, attendance tracking, and administrative tasks.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "html5",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/sirishavenu9724",
    live_site_link: "https://github.com/sirishavenu9724",
  },
  {
    name: "WordPress Solutions",
    description:
      "Customized WordPress themes and plugins for various domains including education and healthcare, focusing on responsive design and performance.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/sirishavenu9724",
    live_site_link: "https://github.com/sirishavenu9724",
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/sirishavenu9724",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com",
  },
] as const;
