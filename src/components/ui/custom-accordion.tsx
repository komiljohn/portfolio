"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { IExperience } from "@/app/utils/experienceData";
import { cn } from "@/lib/utils";

export default function CustomAccordion({ data }: { data: IExperience[] }) {
  const [activeId, setIsActiveId] = useState<string | null>(data[0].id);

  return (
    <div className="space-y-4">
      {data.map((item) => (
        <article key={item.id}>
          <div
            tabIndex={0}
            role="button"
            onKeyDown={() => setIsActiveId(activeId === item.id ? null : item.id)}
            className="flex justify-between items-center text-sm maxsx-sm:text- group cursor-pointer"
            onClick={() => setIsActiveId(activeId === item.id ? null : item.id)}
          >
            <div className="flex gap-3 max-sm:gap-2 items-center grow">
              <div className="relative size-[50px] max-sm:size-9">
                <Image
                  fill
                  src={item.image.src}
                  alt="udevs company"
                  className="rounded-full border dark:border-border-dark"
                />
              </div>
              <div className="text-start grow">
                <div className="flex justify-between">
                  <p className="font-semibold flex gap-2 items-center select-none">
                    {item.title}
                    <ChevronRight
                      size={16}
                      className={cn(
                        "opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all ease-linear",
                        activeId === item.id && "rotate-90"
                      )}
                    />
                  </p>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark">{item.period}</p>
                </div>
                <p className="text-text-secondary-light dark:text-text-secondary-dark select-none">{item.position}</p>
              </div>
            </div>
          </div>
          <AnimatePresence>
            {activeId === item.id && (
              <motion.div
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: {
                    opacity: 1,
                    height: "auto",
                  },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.2 }}
                className="pr-6 pl-16 max-sm:pl-[46px] pt-2 text-sm text-start"
              >
                <motion.ul
                  className="list-disc"
                  variants={{ collapsed: { scale: 0.95 }, open: { scale: 1 } }}
                  transition={{ duration: 0.2 }}
                >
                  <p>{item.description}</p>
                  <p className="mb-2">
                    {item.link && (
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noreffer noopener"
                        className="cursor-pointer text-text-secondary-light dark:text-text-secondary-dark hover:underline"
                      >
                        {item.link}
                      </Link>
                    )}
                  </p>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </article>
      ))}
    </div>
  );
}
