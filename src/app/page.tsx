"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Startups } from "@/components/sections/Startups";
import { Initiatives } from "@/components/sections/Initiatives";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Press } from "@/components/sections/Press";
import { Contact } from "@/components/sections/Contact";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { MolecularLattice } from "@/components/ui/MolecularLattice";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-white/30 text-white selection:text-white relative noise-bg">
      <div className="scanline" />
      <MolecularLattice />
      <ScrollProgress />
      <Navbar />

      <Hero />
      <About />

      {/* Sections with 'View All' triggers for the multi-page feel */}
      <div className="space-y-0">

        <section className="relative">
          <Startups />
          <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20 -mt-10">
            <Link href="/startups" className="group flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">
              <span>View All Ventures & Initiatives</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </section>

        <section className="relative">
          <Experience />
          <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20 -mt-10">
            <Link href="/experience" className="group flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">
              <span>View Full Experience</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </section>

        <section className="relative py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center gap-12 text-center">
            <h2 className="text-4xl md:text-6xl font-display font-black text-white/10 uppercase tracking-tighter">Academic Excellence</h2>
            <Link href="/academics" className="px-12 py-6 border border-white/10 hover:border-white transition-all text-sm font-mono uppercase tracking-[0.3em] bg-white/5 backdrop-blur-sm">
              Enter Academic Archives
            </Link>
          </div>
        </section>

        <Skills />

        <section className="relative">
          <Press />
          <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20 -mt-12 relative z-20">
            <Link href="/press" className="group flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">
              <span>Enter Media Portal</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </section>

        <Contact />
      </div>

      <Footer />
    </main>
  );
}
