import React from "react";

import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";

export default function About() {
  return (
    <section className="container mx-auto px-4 pt-5 pb-10 text-center">
      <FadeInWhenVisible delay={0.2}>
        <p className="text-2xl font-semibold mb-[18px]">About</p>
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.3}>
        <p className="text-base text-text-secondary-light dark:text-text-secondary-dark">
          Results-driven Frontend Developer with 3.5 years of experience building responsive webpages and dynamic admin
          panels. Proficient in JavaScript, TypeScript, and modern frameworks such as React and Next.js. Skilled in
          utilizing Tailwind CSS, Shadcn, MUI, and Ant Design to create intuitive and visually appealing user interfaces
        </p>
      </FadeInWhenVisible>
    </section>
  );
}
