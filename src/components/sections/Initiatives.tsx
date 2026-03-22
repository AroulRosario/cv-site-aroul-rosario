"use client";

import { useState } from "react";
import { cvData } from "@/data/cv";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/motion-helpers";
import { DeepDive } from "@/components/ui/DeepDive";

export function Initiatives() {
    const [activeDive, setActiveDive] = useState<number | null>(null);

    return (
        <section id="initiatives" className="py-32 bg-black relative overflow-hidden">
            {/* Background grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <FadeIn>
                    <p className="text-xs font-mono tracking-widest uppercase text-zinc-600 mb-4">03 // Key Initiatives</p>
                    <h2 className="text-6xl md:text-8xl font-display font-black text-white tracking-tighter mb-24 leading-none">
                        Ideas<br />
                        <span className="text-white/30">into</span><br />
                        Impact.
                    </h2>
                </FadeIn>

                {/* Full-width dramatic cards */}
                <div className="space-y-6">
                    {cvData.initiatives.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveDive(index)}
                            className="group relative glass-card border-white/5 cursor-pointer overflow-hidden min-h-[240px] flex items-end p-10 md:p-16 hover:border-white/20"
                        >
                            {/* Dramatic number bg */}
                            <span className="absolute top-6 right-8 text-[160px] md:text-[220px] font-display font-black text-white/[0.03] group-hover:text-white/[0.06] transition-colors leading-none pointer-events-none select-none">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            {/* Top tag */}
                            <div className="absolute top-8 left-10 flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-white/20 animate-pulse" />
                                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em]">{item.role}</span>
                            </div>

                            {/* Bottom content — title only, large */}
                            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between w-full gap-6">
                                <div>
                                    <h3 className="text-3xl md:text-5xl font-display font-black text-white leading-tight tracking-tight">
                                        {item.title}
                                    </h3>
                                </div>
                                <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <div className="flex items-center gap-3 text-xs font-mono text-white uppercase tracking-widest border border-white/20 px-6 py-3 rounded-full hover:bg-white/10">
                                        <span>Explore</span>
                                        <span>→</span>
                                    </div>
                                </div>
                            </div>

                            {/* Noise grain hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
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
