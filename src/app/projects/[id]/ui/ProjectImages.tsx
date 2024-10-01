"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useMemo } from "react";

import { projectsData } from "@/app/utils/projectsData";

export default function ProjectImages() {
  const params = useParams();

  const activeProject = useMemo(() => projectsData.find((i) => i.id === params.id), [projectsData]);

  return (
    <section className="space-y-8">
      <p>
        <p className="text-sm font-medium mb-1">Used technologies:</p>
        <span className="flex gap-1 flex-wrap text-sm">
          {activeProject?.stack.map((stack) => (
            <span
              key={stack}
              className="whitespace-nowrap bg-bg-badge-light dark:bg-bg-badge-dark rounded-md p-1 text-xs font-semibold"
            >
              {stack}
            </span>
          ))}
        </span>
      </p>
      {activeProject?.websites.map((site) => (
        <div key={site.id}>
          <p className="text-sm font-medium mb-4">{site.title}</p>
          <div className="space-y-6">
            {site.images.map((image) => (
              <Image
                key={image.src}
                src={image.src}
                height={image.height}
                width={image.width}
                alt="project"
                className="object-cover border rounded-md"
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
