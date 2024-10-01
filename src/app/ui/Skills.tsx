import React from "react";

import { Badge } from "@/components/ui/badge";

export default function Skills() {
  return (
    <section className="container mx-auto px-4 pt-[60px] pb-10 text-center">
      <p className="text-2xl font-semibold mb-[18px]">Skills</p>
      <div className="flex gap-2 flex-wrap justify-center">
        {skils.map((item) => (
          <Badge key={item}>{item}</Badge>
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
