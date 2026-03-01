"use client";

import { useState, useRef, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Initiatives } from "@/components/sections/Initiatives";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
import { Publications } from "@/components/sections/Publications";
import { Patents } from "@/components/sections/Patents";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { MolecularLattice } from "@/components/ui/MolecularLattice";
import { CollapsibleSection } from "@/components/ui/CollapsibleSection";
import { cvData } from "@/data/cv";
import { FadeIn } from "@/components/ui/motion-helpers";

export default function Home() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenSection(openSection === id ? null : id);

    // Smooth scroll to the section if opening
    if (openSection !== id) {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  return (
    <main className="min-h-screen bg-black selection:bg-white/30 text-white selection:text-white relative">
      <MolecularLattice />
      <ScrollProgress />
      <Navbar />

      {/* Central Hub */}
      <Hero onSelectSection={handleToggle} />

      <div className="relative z-10 bg-black">
        <CollapsibleSection
          id="about"
          title="Philosophy"
          number="01"
          isOpen={openSection === "about"}
          onToggle={() => handleToggle("about")}
        >
          <div className="max-w-4xl space-y-8">
            <p className="text-3xl md:text-5xl font-display font-bold text-white leading-tight tracking-tighter">
              {cvData.about.title}
            </p>
            <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
              {cvData.about.content}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
              <div className="space-y-4">
                <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Primary Objective</h4>
                <p className="text-zinc-300">Democratizing high-end scientific education through the systematic application of AI-augmented pedagogy and immersive 3D modeling.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Core values</h4>
                <p className="text-zinc-300">Academic Rigor, Digital Integrity, Cognitive Scaffolding, and Institutional Excellence.</p>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection
          id="initiatives"
          title="Strategic Impact"
          number="02"
          isOpen={openSection === "initiatives"}
          onToggle={() => handleToggle("initiatives")}
        >
          <Initiatives />
        </CollapsibleSection>

        <CollapsibleSection
          id="experience"
          title="Trajectory"
          number="03"
          isOpen={openSection === "experience"}
          onToggle={() => handleToggle("experience")}
        >
          <Experience />
        </CollapsibleSection>

        <CollapsibleSection
          id="academics"
          title="Scholarship"
          number="04"
          isOpen={openSection === "academics"}
          onToggle={() => handleToggle("academics")}
        >
          <div className="space-y-16">
            <Education />
          </div>
        </CollapsibleSection>

        <CollapsibleSection
          id="expertise"
          title="Capability"
          number="05"
          isOpen={openSection === "expertise"}
          onToggle={() => handleToggle("expertise")}
        >
          <Skills />
        </CollapsibleSection>

        <CollapsibleSection
          id="certifications"
          title="Validation"
          number="06"
          isOpen={openSection === "certifications"}
          onToggle={() => handleToggle("certifications")}
        >
          <Certifications />
        </CollapsibleSection>

        <CollapsibleSection
          id="publications"
          title="Discourse"
          number="07"
          isOpen={openSection === "publications"}
          onToggle={() => handleToggle("publications")}
        >
          <div className="space-y-24">
            <Publications />
            <Patents />
          </div>
        </CollapsibleSection>
      </div>

      {/* Lengthy Academic Footer */}
      <footer className="py-32 px-6 md:px-12 bg-black border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <FadeIn>
            <p className="text-2xl md:text-4xl font-display font-medium text-zinc-400 max-w-4xl mb-12 italic leading-snug">
              "{cvData.footerQuotes[0]}"
            </p>
            <div className="h-px w-24 bg-white/20 mx-auto mb-12" />
            <p className="text-xs font-mono text-zinc-600 uppercase tracking-[0.5em]">
              © 2024 Dr. Aroul Rosario S. // All Signatures Verified
            </p>
          </FadeIn>
        </div>
      </footer>
    </main>
  );
}
