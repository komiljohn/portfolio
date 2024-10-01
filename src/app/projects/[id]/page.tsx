import React from "react";

import ProjectBanner from "./ui/ProjectBanner";
import ProjectImages from "./ui/ProjectImages";

export default function Page() {
  return (
    <main className="container mx-auto px-4 pb-[80px]">
      <ProjectBanner />
      <ProjectImages />
    </main>
  );
}
