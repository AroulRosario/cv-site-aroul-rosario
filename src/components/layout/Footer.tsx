"use client";

import { cvData } from "@/data/cv";
import { FadeIn, RevealText } from "@/components/ui/motion-helpers";

export function Footer() {
    return (
        <footer className="bg-black py-48 relative overflow-hidden">

            {/* Background Grain/Grid */}
            <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                <div className="mb-48">
                    <FadeIn>
                        <p className="text-xs font-mono tracking-[0.4em] uppercase text-zinc-600 mb-12">
                            Philosophical // Terminal
                        </p>
                    </FadeIn>

                    <div className="text-huge font-display font-bold text-white uppercase leading-[0.8]">
                        <RevealText>
                            <span>Think.</span>
                        </RevealText>
                        <RevealText delay={0.2}>
                            <span className="text-zinc-700">Synthesize.</span>
                        </RevealText>
                        <RevealText delay={0.4}>
                            <span>Evolve.</span>
                        </RevealText>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 pt-24 border-t border-white/10">
                    <div>
                        <p className="text-2xl md:text-3xl text-zinc-400 font-light leading-relaxed max-w-md italic">
                            &quot;{cvData.footerQuotes[0]}&quot;
                        </p>
                        <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mt-6">
                            — Academic Credo
                        </p>
                    </div>

                    <div className="flex flex-col md:items-end justify-between">
                        <div className="flex flex-col md:items-end gap-2">
                            <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">Connect Dir.</span>
                            <a href={`mailto:${cvData.personalInfo.email}`} className="text-2xl md:text-4xl font-display text-white hover:text-zinc-500 transition-colors uppercase font-bold tracking-tighter">
                                {cvData.personalInfo.email}
                            </a>
                        </div>

                        <div className="mt-16 md:mt-0 pt-8 flex flex-col md:items-end gap-2 text-right">
                            <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">
                                System Status: Active // V.4.0.0 Editorial
                            </span>
                            <p className="text-[10px] font-mono text-zinc-800 uppercase tracking-widest">
                                © {new Date().getFullYear()} Dr. Aroul Rosario. Digital Legacy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
