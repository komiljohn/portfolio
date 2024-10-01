import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import CustomAccordion from "@/components/ui/custom-accordion";

import experienceData from "../utils/experienceData";

export default function Experience() {
  return (
    <section className="container mx-auto px-4 pt-[60px] pb-10 text-center">
      <FadeInWhenVisible delay={0.1}>
        <p className="text-2xl font-semibold mb-[18px]">Experience</p>
      </FadeInWhenVisible>
      <CustomAccordion data={experienceData} />
    </section>
  );
}
