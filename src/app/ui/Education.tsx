import Image from "next/image";
import React from "react";

import TatuImg from "@/app/images/tatu.png";

export default function Education() {
  return (
    <section className="container mx-auto px-4 pt-[60px] pb-10 text-center">
      <p className="text-2xl font-semibold mb-[18px]">Education</p>
      <div className="flex justify-between text-sm max-sm:flex-col max-sm:items-start">
        <div className="flex gap-3 items-center">
          <div className="size-[50px] max-sm:size-9 relative">
            <Image src={TatuImg.src} fill alt="university" className="rounded-full border dark:border-border-dark" />
          </div>
          <div className="text-start">
            <p className="font-semibold">Tashkent University of Information Technologies</p>
            <p className="text-text-secondary-light dark:text-text-secondary-dark">
              Bachelor's Degree of Computer Science (BCS)
            </p>
          </div>
        </div>
        <p className="text-text-secondary-light dark:text-text-secondary-dark max-sm:pl-12">2018 - 2022</p>
      </div>
    </section>
  );
}
