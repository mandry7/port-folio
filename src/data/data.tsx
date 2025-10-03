import { Project, Skill } from "type/type";
import {
  IoLogoReact,
  IoLogoVue,
  IoLogoJavascript,
  IoLogoNodejs, 
  IoLogoGithub,
} from "react-icons/io5";
import { BiLogoTypescript, BiLogoJava, BiLogoSpringBoot } from "react-icons/bi";
    import { SiNextdotjs } from 'react-icons/si';

import onBoarding from "assets/image/portfolio/onboarding.jpg";
import taxi from "assets/image/portfolio/tcab-img-2.png";
import nft from "assets/image/portfolio/admire.png";
import wip from "assets/image/portfolio/wip2.webp";
import elan from "assets/image/portfolio/autorisations.jpg";
import atamoz from "assets/image/portfolio/atamoz.png";
import BIM from "assets/image/portfolio/BIM.jpg";
import game from "assets/image/portfolio/17933.jpg";
import unyck from "assets/image/portfolio/unyck.png";
import resume from "assets/image/portfolio/resume.png";
import spw from "assets/image/portfolio/spw.png";

export const ProjectList: Project[] = [
  {
    id: 1,
    title: "Glass Management",
    description:
      "Enterprise platform for managing glass production. Responsibilities: architecture analysis, security review, and feature development.",
    stack: "Next.js, TypeScript, SCSS, Tailwind, Git",
    period: "September 2024 – until now",
    image: spw,
  },
  {
    id: 2,
    title: "Resume Builder",
    description:
      "Web platform for creating and customizing resumes. Responsibilities: feature development, UI improvements, and maintenance.",
    stack: "Next.js, Styled Components, Git",
    period: "March 2024 – August 2024",
    image: resume,
  },
  {
    id: 3,
    title: "Onboarding HR",
    description:
      "HR application for sharing documents and managing candidate onboarding. Responsibilities: Vue 2 → Vue 3 migration, feature implementation, testing, and Storybook setup.",
    stack: "Vue 2/3, TypeScript, Vuetify, Django, Python, PostgreSQL, Git",
    period: "January 2023 – May 2024",
    image: onBoarding,
  },
  {
    id: 4,
    title: "Taxi Management",
    description:
      "System for managing taxi rides and bookings. Responsibilities: feature implementation, bug fixes, and testing.",
    stack: "Angular 9, Java 8, Spring Boot, MariaDB, Git",
    period: "September 2022 – December 2022",
    image: taxi,
  },
  {
    id: 5,
    title: "NFT Marketplace",
    description:
      "E-commerce platform for NFT sales. Responsibilities: front-end architecture setup, UI integration, and feature development.",
    stack: "Vue 3, TypeScript, Pinia, Quasar, NestJS, PostgreSQL, Git",
    period: "May 2022 – August 2022",
    image: nft,
  },
  {
    id: 6,
    title: "Job Searching App",
    description:
      "Mobile app for job posting and applications. Responsibilities: implemented settings screens and developed new features.",
    stack: "React Native, TypeScript, Redux, Express, MongoDB, Git",
    period: "February 2022 – April 2022",
    image: wip,
  },
  {
    id: 7,
    title: "File Tracking Platform",
    description:
      "Document management platform for lawyers and jurists with collaborative editing. Responsibilities: maintenance and feature development.",
    stack: "React, Bootstrap, Redux, Symfony, MySQL, Git",
    period: "October 2021 – January 2022",
    image: elan,
  },
  {
    id: 8,
    title: "Bet & Game Management",
    description:
      "Back-office platform to manage bets, games, and users. Responsibilities: page integration and feature development.",
    stack:
      "React, Material UI, Redux, Java, Spring Boot, MongoDB, ElasticSearch, SVN",
    period: "June 2021 – August 2021",
    image: game,
  },
  {
    id: 9,
    title: "Rental Property",
    description:
      "Platform for tenants to search and rent properties. Responsibilities: Vue 2 → Vue 3 migration, maintenance, and feature development.",
    stack: "React, TypeScript, Bootstrap, Flux, Laravel, MySQL, Git",
    period: "March 2021 – June 2021",
    image: atamoz,
  },
  {
    id: 10,
    title: "Building Information Modeling",
    description:
      "3D building management application. Responsibilities: maintenance and feature development.",
    stack: "React, Redux, Java, Spring Boot, MongoDB, SVN",
    period: "October 2020 – February 2021",
    image: BIM,
  },
  {
    id: 11,
    title: "Project Management & Social Network",
    description:
      "Collaboration platform for project management and team networking. Responsibilities: maintenance, new feature development.",
    stack: "Angular 7, Bootstrap, Symfony, MySQL, SVN",
    period: "March 2020 – September 2020",
    image: unyck,
  },
];

export const getprojectDetails = (id: number) =>
  ProjectList.filter((project) => project.id === id).shift();

export const skills: Skill[] = [
  {
    id: 1,
    name: "react",
    icon: () => <IoLogoReact className="w-40 h-20" />,
    rating: 4,
  },
  {
    id: 2,
    name: "vue",
    icon: () => <IoLogoVue className="w-40 h-20" />,
    rating: 4,
  },
  {
    id: 3,
    name: "typescript",
    icon: () => <BiLogoTypescript className="w-40 h-20" />,
    rating: 4,
  },
  {
    id: 4,
    name: "javascript",
    icon: () => <IoLogoJavascript className="w-40 h-20" />,
    rating: 4,
  },
  {
    id: 5,
    name: "next",
    icon: () => <SiNextdotjs className="w-40 h-20" />,
    rating: 3,
  },
  {
    id: 6,
    name: "node",
    icon: () => <IoLogoNodejs className="w-40 h-20" />,
    rating: 3,
  },
  {
    id: 7,
    name: "express",
    icon: () => <IoLogoGithub className="w-40 h-20" />,
    rating: 2,
  },
  {
    id: 8,
    name: "java",
    icon: () => <BiLogoJava className="w-40 h-20" />,
    rating: 2,
  },
  {
    id: 9,
    name: "spring boot",
    icon: () => <BiLogoSpringBoot className="w-40 h-20" />,
    rating: 2,
  },
];
