"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AboutNew } from "@/components/sections/AboutNew";
import { Startups } from "@/components/sections/Startups";
import { Initiatives } from "@/components/sections/Initiatives";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Skills } from "@/components/sections/Skills";
import { Press } from "@/components/sections/Press";
import { Contact } from "@/components/sections/Contact";
import { Engagements } from "@/components/sections/Engagements";
import { Patents } from "@/components/sections/Patents";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafbfc] text-slate-900 relative selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />

      <Hero />
      <AboutNew />
      <Engagements />
      <Startups />
      <Initiatives />
      <Experience />

      {/* Academic & IP credentials */}
      <Education />
      <Certifications />
      <Patents />

      <Skills />
      <Press />
      <Contact />

      <Footer />
    </main>
  );
}
