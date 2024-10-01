import React from "react";

import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  return (
    <section className="container mx-auto px-4 pt-[60px] pb-10 text-center">
      <FadeInWhenVisible>
        <p className="text-2xl font-semibold mb-[18px]">Skills</p>
      </FadeInWhenVisible>
      <div className="flex gap-2 flex-wrap justify-center">
        {skils.map((item, idx) => (
          <FadeInWhenVisible key={item} delay={0.1 + idx / 30}>
            <Badge>{item}</Badge>
          </FadeInWhenVisible>
        ))}
      </div>
    </section>
  );
}

const skils = [
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Zustand",
  "Vue.js",
  "Pinia",
  "Tailwind CSS",
  "RESTful API",
  "GraphQL",
  "Node.js",
  "Express.js",
  "Payload CMS",
  "Agile Scrum",
  "Jira",
];
