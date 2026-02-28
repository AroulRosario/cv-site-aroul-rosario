"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";

const timelineData = [
    {
        tag: "RESIDENCY",
        title: "Foundational Chemistry",
        desc: "Early experimental immersion and laboratory management in pure sciences.",
        year: "ACAD-01"
    },
    {
        tag: "SYNTHESIS",
        title: "Molecular Research",
        desc: "Advanced research at University of Manchester, specializing in synthetic pathways.",
        year: "ACAD-02"
    },
    {
        tag: "FRAMEWORKS",
        title: "Global Standardization",
        desc: "UNESCO & EU Fellowship phases focusing on cross-border scientific frameworks.",
        year: "ACAD-03"
    },
    {
        tag: "DIGITAL",
        title: "Pedagogical Evolution",
        desc: "Current tenure focusing on EdTech integration and computational chemistry.",
        year: "ACAD-04"
    }
];

export function Timeline() {
    return (
        <section id="timeline" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">

            <div className="quantum-container">
                <div className="flex flex-col mb-20">
                    <h2 className="text-emerald-500 mb-6 font-mono text-xs">02 // CHRONICLE</h2>
                    <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 tracking-tighter">
                        Academic <span className="text-emerald-500">Trajectory.</span>
                    </h3>
                </div>

                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-emerald-500/50 via-white/10 to-transparent" />

                    <div className="space-y-12 md:space-y-0">
                        {timelineData.map((item, i) => (
                            <div key={i} className={`relative flex items-center justify-between md:mb-24 group ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Visual Connector - Dot */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-emerald-500 border-4 border-[#050505] rounded-full -translate-x-1/2 z-20 shadow-[0_0_10px_rgba(16,185,129,0.5)] group-hover:scale-150 group-hover:shadow-[0_0_20px_rgba(16,185,129,1)] transition-all duration-500" />

                                {/* Content Card */}
                                <div className="ml-12 md:ml-0 md:w-[45%]">
                                    <StaggerItem>
                                        <div className="glass-card p-1">
                                            <div className="p-8 bg-black/40 rounded-[14px]">
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="text-emerald-500 text-[9px] font-mono tracking-widest uppercase">{item.tag}</span>
                                                    <span className="text-zinc-600 text-[10px] font-mono">{item.year}</span>
                                                </div>
                                                <h4 className="text-xl md:text-2xl font-display font-bold text-white mb-4">{item.title}</h4>
                                                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">{item.desc}</p>
                                            </div>
                                        </div>
                                    </StaggerItem>
                                </div>

                                {/* Spacer for MD screens */}
                                <div className="hidden md:block w-0" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
