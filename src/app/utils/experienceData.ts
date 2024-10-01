import { StaticImageData } from "next/image";

import AbakImg from "@/app/images/abak.jpg";
import UdevsImg from "@/app/images/udevs.png";
import WidgetjoyImg from "@/app/images/widgetjoy.png";
import ZoftifyImg from "@/app/images/zoftify.png";

export interface IExperience {
  id: string;
  title: string;
  period: string;
  position: string;
  details: string[];
  image: StaticImageData;
  description: string;
  link?: string;
}

const experienceData: IExperience[] = [
  {
    id: "3",
    title: "Widgetjoy",
    period: "Aug 2024 - Present | 2 mos.",
    position: "Team Lead",
    details: [
      "led the development of two responsive, scalable websites from the ground up, including architecture design, implementation of modern frontend frameworks, and optimization for performance",
      "created and implemented custom animations to enhance user experience and engagement while ensuring cross-browser compatibility",
    ],
    image: WidgetjoyImg,
    description: "SaaS startup",
    link: "https://widgetjoy-marketing.vercel.app/",
  },
  {
    id: "2",
    title: "Zoftify",
    period: "Dec 2023 - June 2024 | 7 mos.",
    position: "Senior Frontend Engineer",
    details: [
      "reduced the page load time by using the optimisation techniques",
      "designed and developed new features and components to enhance user experience and functionality",
      "reduced the amount of repeated code and refactored, resulting in a better developer experience",
      "integrated RESTful APIs, facilitating seamless data retrieval and manipulation",
    ],
    image: ZoftifyImg,
    description: "Travel Software Development",
    link: "https://zoftify.com/",
  },
  {
    id: "1",
    title: "Udevs",
    period: "Sept 2021 - March 2024 | 2.5 yrs.",
    position: "Middle/Senior Frontend Engineer",
    details: [
      "made the table editable by selecting the rows that need to be changed, improving the user experience by 50%",
      "made a pivot table where columns, rows and values are dynamically selected where rows can be recursively opened as a tree",
      "mentored junior developers, conducting code reviews, improving team productivity and code quality",
      "mentored 30 students at free Bootcamp, resulting in 20% of them getting hired",
      "contributed to E-commerce, CRM, ERP , WMS, POS, LMS, HealthCare and Fintech projects",
    ],
    image: UdevsImg,
    description: "Outsource and outstaff",
    link: "https://udevs.io/",
  },
  {
    id: "0",
    title: "Abak",
    period: "Dec 2020 - June 2021 | 7 mos.",
    position: "Junior Frontend Engineer",
    details: [
      "made reusable and strong-typed components using React and TypeScript",
      "contributed to building a desktop version of our product using Electron.js",
      "made the product's website with an admin panel using Django",
    ],
    image: AbakImg,
    description: "Point Of Sales startup",
  },
];

export default experienceData;
