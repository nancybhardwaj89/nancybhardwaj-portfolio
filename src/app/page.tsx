import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { QualitySignals } from "@/components/sections/QualitySignals";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <QualitySignals />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </>
  );
}
