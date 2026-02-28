"use client";

import { motion } from "framer-motion";
import { cvData } from "@/data/cv";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { RevealText, FadeIn } from "@/components/ui/motion-helpers";

export function Hero() {
    return (
        <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center py-20 w-full bg-[#050505] overflow-hidden mesh-gradient">

            {/* V5 Holographic Accents */}
            <div className="quantum-glow top-[10%] right-[10%] w-[400px] h-[400px] bg-emerald-500" />
            <div className="quantum-glow bottom-[10%] left-[5%] w-[300px] h-[300px] bg-cyan-500" />

            <div className="quantum-container relative">
                <div className="flex flex-col mb-12">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] uppercase tracking-widest font-mono mb-8 w-fit">
                            <Sparkles className="w-3 h-3" />
                            Quantum Academic v5.0
                        </div>
                    </FadeIn>

                    <h1 className="text-huge flex flex-col title-glow">
                        <RevealText>
                            <span>Dr. Aroul</span>
                        </RevealText>
                        <RevealText delay={0.15}>
                            <span className="text-emerald-500">Rosario.</span>
                        </RevealText>
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end mt-12">
                    <div className="md:col-span-12 lg:col-span-8">
                        <FadeIn delay={0.4}>
                            <p className="text-xl md:text-3xl text-zinc-400 font-light leading-relaxed max-w-3xl">
                                An architect of <span className="text-white font-medium">Molecular Logic</span> and <span className="text-white font-medium">Digital Pedagogy</span>. Bridging the gap between classical chemistry and high-performance computing.
                            </p>
                        </FadeIn>
                    </div>

                    <div className="md:col-span-12 lg:col-span-4 flex flex-col items-start lg:items-end gap-6">
                        <FadeIn delay={0.6}>
                            <div className="flex gap-4">
                                <a
                                    href={`mailto:${cvData.personalInfo.email}`}
                                    className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-emerald-400 transition-colors duration-300 flex items-center gap-2 group"
                                >
                                    Get in Touch
                                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </a>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>

            {/* Decorative Floating Elements */}
            <div className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4 text-zinc-600">
                <div className="w-8 h-[1px] bg-emerald-500/30" />
                <span className="text-[10px]">VERIFIED SCIENTIFIC RECORD // 2024</span>
            </div>
        </section>
    );
}
