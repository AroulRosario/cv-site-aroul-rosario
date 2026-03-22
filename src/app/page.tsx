"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Startups } from "@/components/sections/Startups";
import { Initiatives } from "@/components/sections/Initiatives";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Skills } from "@/components/sections/Skills";
import { Press } from "@/components/sections/Press";
import { Contact } from "@/components/sections/Contact";
import { MolecularLattice } from "@/components/ui/MolecularLattice";

export default function Home() {
  return (
    <main className="min-h-screen text-white relative">
      <MolecularLattice />
      <Navbar />

      <Hero />
      <About />
      <Startups />
      <Initiatives />
      <Experience />

      {/* Academic credentials always visible */}
      <Education />
      <Certifications />

      <Skills />
      <Press />
      <Contact />

      <Footer />
    </main>
  );
}
