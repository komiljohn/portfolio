"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useMemo } from "react";

import { projectsData } from "@/app/utils/projectsData";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import OpacityWhenVisible from "@/components/animations/OpacityWhenVisible";
import BlurFade from "@/components/ui/blur-fade";

export default function ProjectImages() {
  const params = useParams();

  const activeProject = useMemo(() => projectsData.find((i) => i.id === params.id), [projectsData]);

  return (
    <section>
      <FadeInWhenVisible delay={0.3}>
        <p className="text-sm font-medium mb-1">Used technologies:</p>
      </FadeInWhenVisible>
      <p className="flex gap-1 flex-wrap text-sm">
        {activeProject?.stack.map((stack, idx) => (
          <FadeInWhenVisible key={stack} delay={0.3 + idx / 30}>
            <span className="whitespace-nowrap bg-bg-badge-light dark:bg-bg-badge-dark rounded-md p-1 text-xs font-semibold">
              {stack}
            </span>
          </FadeInWhenVisible>
        ))}
      </p>
      <div className="space-y-8 mt-8">
        {activeProject?.websites.map((site) => (
          <div key={site.id}>
            <OpacityWhenVisible delay={0.4}>
              <p className="text-sm font-medium mb-4">{site.title}</p>
            </OpacityWhenVisible>
            <div className="space-y-6">
              {site.images.map((image, idx) => (
                <BlurFade key={image.src} delay={0.25 + idx * 0.05} inView>
                  <Image
                    src={image.src}
                    height={image.height}
                    width={image.width}
                    alt="project"
                    className="object-cover border rounded-md"
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
