"use client";

import { cvData } from "@/data/cv";
import { FadeIn, StaggerContainer, StaggerItem, LineDraw } from "@/components/ui/motion-helpers";
import { Lightbulb } from "lucide-react";

export function Patents() {
    return (
        <section id="patents" className="py-24 md:py-48 bg-black relative border-b border-white/10 blueprint-grid overflow-hidden">

            {/* V4.3 Stabilized Background Number */}
            <div className="bg-number top-0 right-0 translate-x-1/4 -translate-y-1/4 text-white/[0.01]">
                08
            </div>

            <div className="content-container">
                <div className="mb-20 md:mb-32">
                    <h2 className="text-[10px] font-mono tracking-[0.4em] uppercase text-zinc-600 mb-6">
                        Intellectual // Assets
                    </h2>
                    <h3 className="text-huge font-display font-bold text-white uppercase">
                        Patents.
                    </h3>
                </div>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {cvData.patents.map((patentName, index) => (
                        <StaggerItem key={index}>
                            <div className="p-10 md:p-16 border border-white/5 bg-zinc-950/20 hover:border-white/20 hover:bg-zinc-900 transition-all duration-700 group relative overflow-hidden">
                                <div className="absolute top-6 right-6 text-zinc-800 group-hover:text-white/20 transition-colors">
                                    <Lightbulb className="w-6 h-6 md:w-8 md:h-8" />
                                </div>

                                <div className="mb-8 md:mb-12">
                                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-[0.5em] block mb-4">Registry Entry // 0{index + 1}</span>
                                    <LineDraw className="w-10 bg-white/20 group-hover:w-20 group-hover:bg-white transition-all duration-700" />
                                </div>

                                <h4 className="text-xl md:text-3xl font-display font-medium text-white mb-6 md:mb-8 tracking-tight leading-tight">
                                    {patentName}
                                </h4>

                                <div className="pt-6 md:pt-8 border-t border-white/5">
                                    <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Intellectual Property India</p>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
