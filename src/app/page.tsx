"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Initiatives } from "@/components/sections/Initiatives";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Awards } from "@/components/sections/Awards";
import { Certifications } from "@/components/sections/Certifications";
import { Publications } from "@/components/sections/Publications";
import { Patents } from "@/components/sections/Patents";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { MolecularLattice } from "@/components/ui/MolecularLattice";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-white/30 text-white selection:text-white relative noise-bg">
      <div className="scanline" />
      <MolecularLattice />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Initiatives />
      <Experience />
      <Education />
      <Skills />
      <Awards />
      <Certifications />
      <Publications />
      <Patents />
      <Footer />
    </main>
  );
}
