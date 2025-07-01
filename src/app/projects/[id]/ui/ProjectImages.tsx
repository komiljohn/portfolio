"use client";

import Image, { StaticImageData } from "next/image";
import { useParams } from "next/navigation";
import React, { useMemo, useState } from "react";

import { projectsData } from "@/app/utils/projectsData";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import OpacityWhenVisible from "@/components/animations/OpacityWhenVisible";
import BlurFade from "@/components/ui/blur-fade";
import ImageDialog from "./ImageDialog";

export default function ProjectImages() {
  const params = useParams();
  const [imageData, setImageData] = useState<StaticImageData>();

  const activeProject = useMemo(
    () => projectsData.find((i) => i.id === params.id),
    [projectsData]
  );

  return (
    <section className="max-w-4xl mx-auto">
      <FadeInWhenVisible delay={0.3}>
        <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
          Used Technologies
        </h2>
      </FadeInWhenVisible>
      <div className="flex gap-2 flex-wrap mb-12">
        {activeProject?.stack.map((stack, idx) => (
          <FadeInWhenVisible key={stack} delay={0.3 + idx / 30}>
            <span className="whitespace-nowrap bg-bg-badge-light dark:bg-bg-badge-dark rounded-lg px-3 py-1.5 text-sm font-medium transition-colors hover:bg-opacity-80">
              {stack}
            </span>
          </FadeInWhenVisible>
        ))}
      </div>
      <div className="space-y-12">
        {activeProject?.websites.map((site) => (
          <div key={site.id} className="rounded-xl overflow-hidden">
            <OpacityWhenVisible delay={0.4}>
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                {site.title}
              </h3>
            </OpacityWhenVisible>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {site.images.map((image, idx) => (
                <BlurFade
                  key={image.src}
                  delay={0.25 + idx * 0.05}
                  inView
                  className="border rounded-md"
                >
                  <Image
                    src={image.src}
                    width={image.width}
                    height={image.height}
                    alt={`${site.title} project screenshot`}
                    className="object-contain w-full h-48 hover:scale-[1.02] transition-transform duration-300 aspect-video"
                    onClick={() => setImageData(image)}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        ))}
      </div>
      <ImageDialog
        onClose={() => setImageData(undefined)}
        imageData={imageData}
      />
    </section>
  );
}
