"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

import { projectsData } from "@/app/utils/projectsData";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import ScaleFadeInWhenVisible from "@/components/animations/ScaleFadeInWhenVisible";
import { Button } from "@/components/ui/button";

export default function ProjectBanner() {
  const params = useParams();

  const activeProject = projectsData.find((i) => i.id === params.id);

  return (
    <section className="container relative mx-auto px-4 text-center py-32 min-h-[80vh] flex flex-col items-center justify-center">
      <FadeInWhenVisible>
        <h1 className="pointer-events-none max-w-4xl mx-auto whitespace-pre-wrap bg-gradient-to-b from-black via-gray-700 to-gray-400 bg-clip-text text-center text-7xl font-bold leading-tight text-transparent dark:from-white dark:via-gray-200 dark:to-gray-500 max-sm:text-5xl">
          {activeProject?.title}
        </h1>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.1}>
        <p className="text-2xl max-w-2xl mx-auto text-text-secondary-light dark:text-text-secondary-dark mt-8 mb-4 max-sm:text-xl font-medium">
          {activeProject?.subtitle}
        </p>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.15}>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed text-text-secondary-light/80 dark:text-text-secondary-dark/80 mb-12 max-sm:text-base">
          {activeProject?.description}
        </p>
      </FadeInWhenVisible>

      <ScaleFadeInWhenVisible delay={0.2}>
        <Link href="/" tabIndex={-1}>
          <Button
            variant="secondary"
            className="flex items-center gap-2 px-6 py-2.5 text-base font-medium hover:scale-105 transition-transform"
          >
            <ArrowLeft size={18} />
            <span>Back to Projects</span>
          </Button>
        </Link>
      </ScaleFadeInWhenVisible>
    </section>
  );
}
