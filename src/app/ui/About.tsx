import React from "react";

import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";

export default function About() {
  return (
    <section className="container mx-auto px-4 pt-5 pb-10 text-center">
      <FadeInWhenVisible delay={0.2}>
        <p className="text-2xl font-semibold mb-[18px]">Summary</p>
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.3}>
        <p className="text-base text-text-secondary-light dark:text-text-secondary-dark">
          Software Engineer with 4+ years of experience building responsive web
          applications using React, Next.js, and TypeScript. Led frontend teams
          and contributed to large-scale projects using microfrontend
          architecture. Also experienced with backend technologies including
          Node.js, Nest.js, TypeORM, and PostgreSQL
        </p>
      </FadeInWhenVisible>
    </section>
  );
}
