"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

import { projectsData } from "@/app/utils/projectsData";
import { Button } from "@/components/ui/button";

export default function ProjectBanner() {
  const params = useParams();

  const activeProject = projectsData.find((i) => i.id === params.id);

  return (
    <section className="container mx-auto px-4 text-center pb-[100px] pt-[160px]">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 max-sm:text-4xl">
        {activeProject?.title}
      </span>
      <p className="text-2xl mb-6 text-text-secondary-light dark:text-text-secondary-dark mt-[18px] max-sm:text-lg">
        {activeProject?.description}
      </p>
      <Link href="/" tabIndex={-1}>
        <Button variant="secondary" className="flex items-center gap-2 mx-auto mt-6">
          <ArrowLeft size={16} />
          <span>Back home</span>
        </Button>
      </Link>
    </section>
  );
}
