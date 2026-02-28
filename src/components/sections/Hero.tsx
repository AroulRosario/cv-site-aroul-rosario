"use client";

import { motion } from "framer-motion";
import { cvData } from "@/data/cv";
import { ArrowDownRight } from "lucide-react";
import { RevealText, FadeIn, LineDraw } from "@/components/ui/motion-helpers";

export function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col justify-center py-24 w-full bg-black overflow-hidden blueprint-grid">

            {/* V4.2 Stabilized Background Number */}
            <div className="bg-number top-0 right-0 translate-x-1/3 -translate-y-1/3 text-white/[0.01]">
                01
            </div>

            {/* Structural Crosshair Lines - Subtle */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute left-[8%] top-0 bottom-0 w-px bg-white/20" />
                <div className="absolute right-[8%] top-0 bottom-0 w-px bg-white/20" />
            </div>

            <div className="content-container">

                <div className="flex flex-col mb-12">
                    <span className="text-[10px] font-mono tracking-[0.5em] uppercase text-zinc-600 mb-6 block">
                        Academic Portfolio v4.2
                    </span>

                    <h1 className="text-huge font-display font-bold text-white uppercase flex flex-col">
                        <RevealText>
                            <span>Dr. Aroul</span>
                        </RevealText>
                        <div className="flex items-baseline gap-4">
                            <RevealText delay={0.15}>
                                <span className="text-zinc-600 block">Rosario.</span>
                            </RevealText>
                            <FadeIn delay={0.6}>
                                <div className="hidden lg:block w-24 h-px bg-white/30 self-center" />
                            </FadeIn>
                        </div>
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mt-8">
                    <div className="md:col-span-7">
                        <FadeIn delay={0.4}>
                            <p className="text-lg md:text-2xl text-zinc-400 font-light leading-relaxed max-w-xl">
                                Bridging <span className="text-white">classical science</span> with modern <span className="text-white">computational logic</span>. Minimalist by choice, architect by nature.
                            </p>
                        </FadeIn>
                    </div>

                    <div className="md:col-span-5 flex flex-col md:items-end space-y-4">
                        <FadeIn delay={0.5}>
                            <div className="flex flex-col w-full max-w-xs border-t border-white/10">
                                <a
                                    href={`mailto:${cvData.personalInfo.email}`}
                                    className="group flex items-center justify-between py-5 border-b border-white/5 hover:border-white transition-all duration-500"
                                >
                                    <span className="text-[10px] font-mono tracking-widest uppercase text-white">Contact Dir.</span>
                                    <ArrowDownRight className="w-3 h-3 text-zinc-600 group-hover:text-white transition-colors" />
                                </a>
                                <a
                                    href={`https://${cvData.personalInfo.website}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between py-5 border-b border-white/5 hover:border-white transition-all duration-500"
                                >
                                    <span className="text-[10px] font-mono tracking-widest uppercase text-white">Official Site</span>
                                    <ArrowDownRight className="w-3 h-3 text-zinc-600 group-hover:text-white transition-colors" />
                                </a>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-6 md:left-12 flex items-center gap-6">
                <div className="w-12 h-px bg-white/20" />
                <span className="text-[9px] font-mono text-zinc-700 uppercase tracking-widest">DR-AR-S // V.4.2</span>
            </div>
        </section>
    );
}
