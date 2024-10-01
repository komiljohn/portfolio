"use client";

import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import React, { useState } from "react";

import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Routes } from "@/utils/routes";

import { MagicCard } from "../../components/ui/magic-card";
import { IProject, projectsData } from "../utils/projectsData";

export default function Projects() {
  const { theme } = useTheme();

  return (
    <section className="container mx-auto px-4 py-[60px]">
      <FadeInWhenVisible>
        <p className="text-2xl font-semibold text-center mb-[18px]">Projects</p>
      </FadeInWhenVisible>
      <div className="space-y-6 mx-auto">
        {projectsData.map((i, idx) => (
          <FadeInWhenVisible key={i.id} delay={0.1 + idx / 10}>
            <MagicCard
              className="hover:shadow-sm bg-transparent"
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
              <div className="flex items-center max-md:items-start justify-center w-full max-md:flex-col-reverse grow">
                <div className="px-4 py-6 grow flex flex-col justify-between md:min-h-[200px] h-fit max-md:border-t max-md:w-full">
                  <div className="mb-4">
                    <h2 className="text-base font-medium">
                      <span className="">{i.title}</span>
                    </h2>
                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-2">
                      {i.description}
                    </p>
                    <p className="flex gap-2 items-center flex-wrap">
                      <span className="flex gap-1 flex-wrap text-sm">
                        {i.stack.map((stack) => (
                          <span
                            className="whitespace-nowrap bg-bg-badge-light dark:bg-bg-badge-dark rounded-md p-1 text-xs font-semibold"
                            key={stack}
                          >
                            {stack}
                          </span>
                        ))}
                      </span>
                    </p>
                  </div>
                  <Link href={Routes.projectById(i.id)} className="flex items-center gap-2 w-fit text-sm">
                    Learn more
                    <MoveUpRight size={16} />
                  </Link>
                </div>
                <ProductImage item={i} />
              </div>
            </MagicCard>
          </FadeInWhenVisible>
        ))}
      </div>
    </section>
  );
}

type WebsiteType = "website" | "dashboard";

const ProductImage = ({ item }: { item: IProject }) => {
  const [activeKey, setActiveKey] = useState<WebsiteType>("website");

  return (
    <div className="relative h-[200px] w-[350px] max-md:max-w-full md:max-w-[350px] min-w-[350px] max-md:min-w-[548px] max-sm:min-w-[calc(100vw-32px)] max-md:w-full bg-white">
      <Image
        fill
        src={activeKey === "website" ? item.websiteImage.src : item.dashboardImage.src}
        alt="project"
        className="object-cover"
      />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 border bg-white shadow-sm rounded-md p-0.5 dark:border-border-dark dark:bg-gray-700">
        <ToggleGroup
          defaultValue="website"
          size="sm"
          type="single"
          className=""
          onValueChange={(e) => setActiveKey(e as WebsiteType)}
        >
          <ToggleGroupItem value="website" aria-label="Toggle bold">
            Website
          </ToggleGroupItem>
          <ToggleGroupItem value="dashboard" aria-label="Toggle italic">
            Dashboard
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
};
