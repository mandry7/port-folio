import { Project, Skill } from "type/type";
import {
  IoLogoReact,
  IoLogoVue,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoGithub,
} from "react-icons/io5";
import { BiLogoTypescript, BiLogoJava, BiLogoSpringBoot } from "react-icons/bi";

import onBoarding from 'assets/image/portfolio/onboarding.jpg'
import taxi from 'assets/image/portfolio/tcab-img-2.png'
import nft from 'assets/image/portfolio/admire.png'
import wip from 'assets/image/portfolio/wip2.webp'
import elan from 'assets/image/portfolio/autorisations.jpg'
import atamoz from 'assets/image/portfolio/atamoz.png'
import BIM from 'assets/image/portfolio/BIM.jpg'
import game from 'assets/image/portfolio/17933.jpg'
import unyck from 'assets/image/portfolio/unyck.png'

export const ProjectList: Project[] = [
  {
    id: 1,
    title: "Onboarding HR",
    description:
      "It's an application to sharing document and contact candidate by sending a form.My tasks were: maintenance of application and add features,migrating vue2 to vue3,add testing and storybook",
    stack: "Vue2, vue3, typescript , Vuetify, Django, Python, Postgres, git",
    period: "january 2023 - Mai 2024",
    image:  onBoarding,
  },
  {
    id: 2,
    title: "Taxi management",
    description:
      "It's an application used to manage taxi course and command.My tasks were: maintenance of application and add features,testing",
    stack: "Angular 9, Java 8, Springboot, Maria DB, git",
    period: "September 2022 - December 2O22",
    image: taxi,
  },
  {
    id: 3,
    title: "Marketplace NFT",
    description:
      "It's an application where we can sell NFT .My tasks were:create front architecture,page integration and developing features",
    stack: "Vuejs 3, Typescript, Pinia, Quasar, Nest js, PostgreSQL, git",
    period: "Mai 2022 - August 2O22",
    image: nft,
  },

  {
    id: 4,
    title: "Job searching",
    description:
      "It's a mobile app where we can create job offer for the companies and applying for the candidate.My tasks were:settings screen and developping features",
    stack: "REACT NATIVE, Typescript, Redux, Express, Mongo, git",
    period: "February 2022 - April 2022",
    image: wip,
  },
  {
    id: 5,
    title: "Tracking files",
    description:
      "It's a platform where a lawyer and jurist can share and manage document with a editor.My tasks were: maintenance of application and development of new features",
    stack: "REACT js, Bootstrap, Redux, symfony, mysql, git",
    period: "january 2023 - until now",
    image: elan,
  },
  {
    id: 6,
    title: "Bet and game management",
    description:
      "It's an application application (Back office) where we can manage bet, game and users.My tasks were:integration of page and developing features",
    stack:
      "React js, Material UI, Redux, Java, Spring boot, Mongo, Elastic Search, SVN",
    period: "June 2021 – August 2021",
    image: game,
  },
  {
    id: 7,
    title: "Rental property",
    description:
      "It's an application where tenant can search property and rent it.My tasks were: maintenance of application and add features,migrationg vue2 to vue3",
    stack: "React,Typescript, Bootstrap, Flux, Laravel, MySql, git",
    period: "March 2021 – June 2021",
    image: atamoz,
  },
  {
    id: 8,
    title: "Building Information Modeling",
    description:
      "It's an  application where we can manage building and watch it in 3D.My tasks were: maintenance of application and add features",
    stack: "React js, Redux, Java, SpringBoot, Mongo,SVN ",
    period: "October 2020 – February 2021 ",
    image: BIM,
  },
  {
    id: 9,
    title: "Project management and social network",
    description:
      "A platform where we can manage project and networking with teams.My tasks were: maintenance of application and add features",
    stack: "Angular 7, Bootstrap, Symfony, MySql, SVN",
    period: "Mars 2020 – September 2020 ",
    image: unyck,
  },
];

export const getprojectDetails = (id: number) =>
  ProjectList.filter((project) => project.id === id).shift();

export const skills: Skill[] = [
  { id: 1, name: "react", icon:() =><IoLogoReact className="w-40 h-20" />, rating: 4 },
  { id: 2, name: "vue", icon: () =><IoLogoVue className="w-40 h-20" />, rating: 4 },
  { id: 3, name: "typescript", icon:() =><BiLogoTypescript className="w-40 h-20" />, rating: 4 },
  { id: 4, name: "javascript", icon:() =><IoLogoJavascript className="w-40 h-20" />, rating: 4 },
  { id: 5, name: "next", icon:() =><BiLogoTypescript className="w-40 h-20" />, rating: 3 },
  { id: 6, name: "node",icon:() =><IoLogoNodejs className="w-40 h-20" />, rating: 3 },
  { id: 7, name: "express",icon:() =><IoLogoGithub className="w-40 h-20" />, rating: 2 },
  { id: 8, name: "java", icon:() =><BiLogoJava className="w-40 h-20" />, rating: 2 },
  { id: 9, name: "spring boot", icon: () =><BiLogoSpringBoot className="w-40 h-20" />, rating: 2 },
];
