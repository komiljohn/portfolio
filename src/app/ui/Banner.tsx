import React from "react";

import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";

export default function Banner() {
  return (
    <section className="container mx-auto px-4 text-center pb-[100px] pt-[160px]">
      <FadeInWhenVisible>
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 max-sm:text-7xl">
          Komiljon Kamol
        </span>
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.1}>
        <p className="text-4xl mb-6 text-text-secondary-light dark:text-text-secondary-dark mt-[18px] max-sm:text-3xl">
          Frontend Engineer
        </p>
      </FadeInWhenVisible>
    </section>
  );
}
