import { Hero } from "@/components/sections/Hero";
import { QualityEngineering } from "@/components/sections/QualityEngineering";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <QualityEngineering />
      <Skills />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </>
  );
}
