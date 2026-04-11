"use client";

import { useState } from "react";
import { cvData } from "@/data/cv";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/motion-helpers";
import { DeepDive } from "@/components/ui/DeepDive";

export function Initiatives() {
    const [activeDive, setActiveDive] = useState<number | null>(null);

    return (
        <section id="initiatives" className="py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <FadeIn>
                    <p className="text-xs font-mono tracking-widest uppercase text-zinc-400 mb-6 inline-block px-4 py-1.5 rounded-full border border-zinc-100 bg-zinc-50">03 // Key Initiatives</p>
                    <h2 className="text-6xl md:text-8xl font-display font-medium text-zinc-950 tracking-tighter mb-24 leading-[0.85]">
                        Ideas<br />
                        <span className="text-zinc-200 italic">into</span><br />
                        Impact.
                    </h2>
                </FadeIn>

                {/* Full-width dramatic cards */}
                <div className="space-y-6">
                    {cvData.initiatives.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveDive(index)}
                            className="group relative bg-white border border-zinc-100 cursor-pointer overflow-hidden min-h-[280px] flex items-end p-12 md:p-20 hover:border-zinc-300 hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500 rounded-[2.5rem]"
                        >
                            {/* Dramatic number bg */}
                            <span className="absolute top-8 right-12 text-[180px] md:text-[240px] font-display font-black text-zinc-500/[0.02] group-hover:text-zinc-500/[0.04] transition-colors leading-none pointer-events-none select-none">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            {/* Top tag */}
                            <div className="absolute top-12 left-12 flex items-center gap-4">
                                <span className="w-2 h-2 rounded-full bg-zinc-200 group-hover:bg-zinc-950 transition-colors duration-500" />
                                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.3em]">{item.role}</span>
                            </div>

                            {/* Bottom content — title only, large */}
                            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between w-full gap-8">
                                <div>
                                    <h3 className="text-4xl md:text-6xl font-display font-medium text-zinc-950 leading-tight tracking-tight">
                                        {item.title}
                                    </h3>
                                </div>
                                <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                                    <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-400 group-hover:text-zinc-950 uppercase tracking-[0.2em] border border-zinc-100 group-hover:border-zinc-950 px-8 py-4 rounded-full transition-all duration-500">
                                        <span>Case Study</span>
                                        <span>→</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {cvData.initiatives.map((item, index) => (
                <DeepDive
                    key={index}
                    isOpen={activeDive === index}
                    onClose={() => setActiveDive(null)}
                    title={item.title}
                    content={item.deepDive || item.description}
                    org={item.role}
                />
            ))}
        </section>
    );
}
