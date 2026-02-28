"use client";

import { cvData } from "@/data/cv";
import { FadeIn, StaggerContainer, StaggerItem, LineDraw } from "@/components/ui/motion-helpers";
import { Lightbulb } from "lucide-react";

export function Patents() {
    return (
        <section id="patents" className="py-48 bg-black relative border-b border-white/10 blueprint-grid">

            {/* Background Index */}
            <div className="absolute top-10 right-10 text-white/[0.02] font-display font-bold text-[25vw] leading-none pointer-events-none select-none">
                08
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="mb-32">
                    <h2 className="text-xs font-mono tracking-[0.4em] uppercase text-zinc-600 mb-8">
                        Intellectual // Assets
                    </h2>
                    <h3 className="text-huge font-display font-bold text-white uppercase -ml-1">
                        Patents.
                    </h3>
                </div>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {cvData.patents.map((patentName, index) => (
                        <StaggerItem key={index}>
                            <div className="p-16 border border-white/5 bg-zinc-950/20 hover:border-white/20 hover:bg-zinc-900 transition-all duration-700 group relative">
                                <div className="absolute top-8 right-8 text-zinc-800 group-hover:text-white/20 transition-colors">
                                    <Lightbulb className="w-8 h-8" />
                                </div>

                                <div className="mb-12">
                                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.5em] block mb-4">Registry Entry // 0{index + 1}</span>
                                    <LineDraw className="w-12 bg-white/20 group-hover:w-24 group-hover:bg-white transition-all duration-700" />
                                </div>

                                <h4 className="text-2xl md:text-4xl font-display font-medium text-white mb-8 tracking-tight leading-tight">
                                    {patentName}
                                </h4>

                                <div className="pt-8 border-t border-white/5">
                                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Intellectual Property India</p>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
