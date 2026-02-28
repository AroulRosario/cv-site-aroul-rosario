"use client";

import { motion } from "framer-motion";
import { cvData } from "@/data/cv";
import { ArrowDownRight } from "lucide-react";
import { RevealText, FadeIn, LineDraw } from "@/components/ui/motion-helpers";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-20 w-full bg-black overflow-hidden blueprint-grid">

            {/* V4.1 Stabilized Background Number */}
            <div className="bg-number top-0 right-0 translate-x-1/4 -translate-y-1/4">
                01
            </div>

            {/* Structural Crosshair Lines */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-[8%] top-0 bottom-0 w-px bg-white/10" />
                <div className="absolute left-0 right-0 top-[20%] h-px bg-white/10" />
                <div className="absolute right-[8%] top-0 bottom-0 w-px bg-white/10" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full">

                <div className="flex flex-col space-y-0 gap-0">
                    <span className="text-xs font-mono tracking-[0.5em] uppercase text-zinc-500 mb-8 block ml-1">
                        Academic Portfolio v4.0
                    </span>

                    <h1 className="text-huge font-display font-bold text-white uppercase flex flex-col -ml-2">
                        <RevealText>
                            <span className="inline-block">Dr. Aroul</span>
                        </RevealText>
                        <div className="flex items-baseline gap-4 -mt-2">
                            <RevealText delay={0.15}>
                                <span className="text-zinc-600 block">Rosario.</span>
                            </RevealText>
                            <FadeIn delay={0.6}>
                                <div className="hidden lg:block w-32 h-24 border border-white/20 mb-4 rounded-sm" />
                            </FadeIn>
                        </div>
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-16 items-start">
                    <div className="md:col-span-6">
                        <FadeIn delay={0.4}>
                            <p className="text-xl md:text-3xl text-zinc-400 font-light leading-snug max-w-xl">
                                Bridging <span className="text-white">classical science</span> with modern <span className="text-white">computational logic</span>. Minimalist by choice, architect by nature.
                            </p>
                        </FadeIn>
                    </div>

                    <div className="md:col-span-6 flex flex-col md:items-end md:justify-end space-y-6">
                        <FadeIn delay={0.5}>
                            <div className="flex flex-col space-y-2 w-full max-w-xs">
                                <a
                                    href={`mailto:${cvData.personalInfo.email}`}
                                    className="group flex items-center justify-between py-6 border-y border-white/10 hover:border-white transition-all duration-500"
                                >
                                    <span className="text-sm font-mono tracking-widest uppercase text-white">Contact Dir.</span>
                                    <ArrowDownRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
                                </a>
                                <a
                                    href={`https://${cvData.personalInfo.website}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between py-6 border-b border-white/10 hover:border-white transition-all duration-500"
                                >
                                    <span className="text-sm font-mono tracking-widest uppercase text-white">Legacy Domain</span>
                                    <ArrowDownRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
                                </a>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-12 left-[8%] flex items-center gap-8">
                <LineDraw delay={1} className="w-32 bg-white" />
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Scroll to explore</span>
            </div>
        </section>
    );
}
