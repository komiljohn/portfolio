import About from "@/app/ui/About";
import Banner from "@/app/ui/Banner";
import Education from "@/app/ui/Education";
import Experience from "@/app/ui/Experience";
import Header from "@/app/ui/Header";
import Projects from "@/app/ui/Projects";

import Skills from "./ui/Skills";

export default function Page() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
    </>
  );
}
