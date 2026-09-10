import { Hero } from "@/components/sections/Hero";
import { Architecture } from "@/components/sections/Architecture";
import { Pyramid } from "@/components/sections/Pyramid";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Architecture />
      <Pyramid />
      <Skills />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </>
  );
}
