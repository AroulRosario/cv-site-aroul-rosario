"use client";

import { motion } from "framer-motion";
import { cvData } from "@/data/cv";
import { ArrowDownRight } from "lucide-react";
import { RevealText, FadeIn, LineDraw } from "@/components/ui/motion-helpers";
import { Magnetic, GlitchText } from "@/components/ui/InteractiveHelpers";

interface HeroProps {
    onSelectSection: (id: string) => void;
}

export function Hero({ onSelectSection }: HeroProps) {
    const hubLinks = [
        { id: "about", label: "Philosophy", number: "01" },
        { id: "initiatives", label: "Strategic Impact", number: "02" },
        { id: "experience", label: "Trajectory", number: "03" },
        { id: "academics", label: "Scholarship", number: "04" },
        { id: "expertise", label: "Capability", number: "05" },
        { id: "certifications", label: "Validation", number: "06" },
        { id: "publications", label: "Discourse", number: "07" },
    ];

    return (
        <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-24 w-full bg-black overflow-hidden">
            {/* Architectural Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute left-[10%] top-0 bottom-0 w-px bg-zinc-800" />
                <div className="absolute right-[10%] top-0 bottom-0 w-px bg-zinc-800" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-24">
                    {/* Main Title */}
                    <div className="lg:col-span-12">
                        <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-display font-bold tracking-tighter leading-[0.8] mb-8">
                            <RevealText>
                                <GlitchText text="ARCHITECTING" className="text-zinc-600 block" />
                            </RevealText>
                            <RevealText delay={0.1}>
                                <span className="text-white">IMPACT.</span>
                            </RevealText>
                        </h1>
                        <FadeIn delay={0.3}>
                            <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-3xl leading-snug">
                                Dr. Aroul Rosario. <br />
                                <span className="text-zinc-600">A high-density synthesis of Chemical Science, Educational Governance, and Computational Innovation.</span>
                            </p>
                        </FadeIn>
                    </div>
                </div>

                {/* The Hub Menu */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {hubLinks.map((link, idx) => (
                        <FadeIn key={link.id} delay={0.4 + idx * 0.05}>
                            <button
                                onClick={() => onSelectSection(link.id)}
                                className="group w-full p-6 bg-zinc-950 border border-white/5 rounded-xl hover:bg-zinc-900 transition-all text-left relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ArrowDownRight className="w-5 h-5 text-zinc-500" />
                                </div>
                                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block mb-2">
                                    {link.number} // Core
                                </span>
                                <h3 className="text-xl font-display font-bold text-white group-hover:pl-2 transition-all">
                                    {link.label}
                                </h3>
                            </button>
                        </FadeIn>
                    ))}
                </div>
            </div>

            <LineDraw delay={0.8} className="absolute bottom-12 left-6 right-6 md:left-12 md:right-12" />
        </section>
    );
}
