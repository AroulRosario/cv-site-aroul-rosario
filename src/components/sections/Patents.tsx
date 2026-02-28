"use client";

import { cvData } from "@/data/cv";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";
import { Lightbulb, Fingerprint } from "lucide-react";

export function Patents() {
    return (
        <section id="patents" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">

            <div className="quantum-container">
                <div className="mb-20">
                    <h2 className="text-emerald-500 mb-6 font-mono text-xs tracking-[0.3em]">06 // INTELLECTUAL ASSETS</h2>
                    <h3 className="text-huge title-glow text-right">Patents.</h3>
                </div>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {cvData.patents.map((patentName, index) => (
                        <StaggerItem key={index}>
                            <div className="glass-card group p-12 md:p-16 relative overflow-hidden">
                                {/* Decorative Pattern */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                                <div className="flex justify-between items-start mb-12">
                                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-700">
                                        <Fingerprint className="w-6 h-6" />
                                    </div>
                                    <span className="text-[9px] font-mono text-zinc-600 group-hover:text-emerald-500 transition-colors uppercase tracking-[0.4em]">Registry // 0{index + 1}</span>
                                </div>

                                <h4 className="text-2xl md:text-4xl font-display font-bold text-white mb-10 tracking-tighter leading-tight group-hover:translate-x-2 transition-transform duration-700">
                                    {patentName}
                                </h4>

                                <div className="flex items-center justify-between pt-8 border-t border-white/5">
                                    <div className="flex items-center gap-3">
                                        <Lightbulb className="w-4 h-4 text-emerald-500/40" />
                                        <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Intellectual Property India</p>
                                    </div>
                                    <div className="text-emerald-500/20 group-hover:text-emerald-500 transition-colors">
                                        <div className="w-2 h-2 rounded-full border border-current" />
                                    </div>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
