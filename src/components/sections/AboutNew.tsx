"use client";

import { cvData } from "@/data/cv";
import { ArrowUpRight, GraduationCap, Microscope, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export function AboutNew() {
    return (
        <section id="about" className="py-24 md:py-48 relative overflow-hidden bg-[#fbfbfb]">
            {/* Background Narrative Grid */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <div className="absolute top-0 left-1/4 w-px h-full bg-zinc-900" />
                <div className="absolute top-0 left-2/4 w-px h-full bg-zinc-900" />
                <div className="absolute top-0 left-3/4 w-px h-full bg-zinc-900" />
                <div className="absolute top-1/4 left-0 w-full h-px bg-zinc-900" />
                <div className="absolute top-3/4 left-0 w-full h-px bg-zinc-900" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                    
                    {/* Content Narrative Side - Centered */}
                    <div className="lg:col-span-12 flex flex-col items-center">
                        <div className="space-y-12 max-w-4xl text-center lg:text-left">
                            <div className="flex flex-col items-center lg:items-start">
                                <span className="text-xs font-mono text-zinc-400 uppercase tracking-[0.5em] mb-10 block">
                                    02 // Perspective
                                </span>
                                <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-zinc-950 tracking-tighter leading-[0.9] mb-12">
                                    Architect of <br />
                                    <span className="text-zinc-500 italic">Pedagogical Innovation.</span>
                                </h2>
                                <p className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed">
                                    Dr. S. Aroul Rosario is a serial ed-tech founder, STEM researcher, and educational strategist. 
                                    He bridges the gap between deep scientific inquiry and high-scale digital empowerment.
                                </p>
                            </div>

                            {/* Core Pillars */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-zinc-200 w-full">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-zinc-950 justify-center lg:justify-start">
                                        <Microscope className="w-4 h-4 text-zinc-400" />
                                        <h4 className="text-sm font-display font-bold uppercase tracking-widest">Research</h4>
                                    </div>
                                    <p className="text-sm text-zinc-500 leading-relaxed font-light">
                                        Published in CERN, Cambridge, and Harvard Dataverse. Focusing on neuro-cognitive learning frameworks.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-zinc-950 justify-center lg:justify-start">
                                        <Rocket className="w-4 h-4 text-zinc-400" />
                                        <h4 className="text-sm font-display font-bold uppercase tracking-widest">Founder</h4>
                                    </div>
                                    <p className="text-sm text-zinc-500 leading-relaxed font-light">
                                        Architect of OG Chemistry and Neural Review. Delivering 10,000+ AI-powered simulations globally.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-zinc-950 justify-center lg:justify-start">
                                        <GraduationCap className="w-4 h-4 text-zinc-400" />
                                        <h4 className="text-sm font-display font-bold uppercase tracking-widest">Impact</h4>
                                    </div>
                                    <p className="text-sm text-zinc-500 leading-relaxed font-light">
                                        Invited Speaker at IIT Delhi. Guest Judge for the EdTech Pitching Competition at BITS Pilani.
                                    </p>
                                </div>
                            </div>

                            {/* Narrative Action */}
                            <div className="pt-10 flex justify-center lg:justify-start">
                                <a 
                                    href="/experience" 
                                    className="group inline-flex items-center gap-6 text-zinc-950 hover:text-zinc-500 transition-colors"
                                >
                                    <span className="text-sm font-bold uppercase tracking-[0.4em]">Full Portfolio</span>
                                    <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover:border-zinc-950 transition-colors">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
