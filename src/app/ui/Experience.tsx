import CustomAccordion from "@/components/ui/custom-accordion";

import experienceData from "../utils/experienceData";

export default function Experience() {
  return (
    <section className="container mx-auto px-4 pt-[60px] pb-10 text-center">
      <p className="text-2xl font-semibold mb-[18px]">Experience</p>
      <CustomAccordion data={experienceData} />
    </section>
  );
}
