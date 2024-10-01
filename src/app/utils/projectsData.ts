import { StaticImageData } from "next/image";

import DashboardImg1 from "@/app/images/dashboard-1.png";
import DashboardImg2 from "@/app/images/dashboard-2.png";
import DashboardImg3 from "@/app/images/dashboard-3.png";
import DashboardImg4 from "@/app/images/dashboard-4.png";
import MarketingImg1 from "@/app/images/marketing-1.png";
import MarketingImg2 from "@/app/images/marketing-2.png";
import TravelImg1 from "@/app/images/travel-1.jpg";
import TravelImg2 from "@/app/images/travel-2.jpg";
import TravelImg3 from "@/app/images/travel-3.jpg";
import TravelImg4 from "@/app/images/travel-4.jpg";
import TravelDashboardImg1 from "@/app/images/travel-dashboard.jpg";
import TravelDashboardImg2 from "@/app/images/travel-dashboard-2.jpg";
import TravelDashboardImg3 from "@/app/images/travel-dashboard-3.jpg";
import TravelDashboardImg4 from "@/app/images/travel-dashboard-4.jpg";

export interface IProject {
  id: string;
  title: string;
  description: string;
  websiteImage: StaticImageData;
  dashboardImage: StaticImageData;
  stack: string[];
  websites: {
    id: string;
    title: string;
    url?: string;
    images: StaticImageData[];
  }[];
}

export const projectsData: IProject[] = [
  {
    id: "1",
    title: "Widgetjoy",
    description: "SaaS for creating and managing widgets",
    websiteImage: MarketingImg1,
    dashboardImage: DashboardImg1,
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "React aria", "Zustand", "Prisma CMS", "Mongo DB"],
    websites: [
      {
        id: "1-1",
        title: "Dashboard site",
        url: "https://widgetjoy-test.vercel.app/",
        images: [DashboardImg1, DashboardImg2, DashboardImg3, DashboardImg4],
      },
      {
        id: "1-2",
        title: "Marketing site",
        url: "https://widgetjoy-marketing.vercel.app/",
        images: [MarketingImg1, MarketingImg2],
      },
    ],
  },
  {
    id: "2",
    title: "Travel showcasing platform",
    description: "Informative website for showcasing travel destinations",
    websiteImage: TravelImg1,
    dashboardImage: TravelDashboardImg1,
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "Shadcn", "Zustand", "NextAuth"],
    websites: [
      {
        id: "2-1",
        title: "Dashboard site",
        images: [TravelDashboardImg1, TravelDashboardImg2, TravelDashboardImg3, TravelDashboardImg4],
      },
      {
        id: "2-2",
        title: "Client site",
        images: [TravelImg1, TravelImg2, TravelImg3, TravelImg4],
      },
    ],
  },
];
