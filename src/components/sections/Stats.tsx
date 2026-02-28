"use client";

import { cvData } from "@/data/cv";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";
import { GraduationCap, Award, BookOpen, Microscope } from "lucide-react";

const stats = [
    { label: "Academic Tenure", value: "20+", icon: <GraduationCap />, suffix: "Years" },
    { label: "Institutions", value: "15", icon: <Globe />, suffix: "Global" },
    { label: "Publications", value: "12", icon: <BookOpen />, suffix: "Journals" },
    { label: "Research Assets", value: "08", icon: <Microscope />, suffix: "Patents" },
];

export function Stats() {
    return (
        <section id="stats" className="py-24 bg-[#050505] relative overflow-hidden">
            <div className="quantum-container">
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <StaggerItem key={i}>
                            <div className="glass-card hover:translate-y-[-8px] group p-8 flex flex-col items-center text-center">
                                <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                                    {stat.icon}
                                </div>
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-4xl md:text-5xl font-display font-bold text-white tracking-tighter tabular-nums">
                                        {stat.value}
                                    </span>
                                    <span className="text-emerald-500 font-mono text-xs font-bold uppercase tracking-widest">{stat.suffix}</span>
                                </div>
                                <span className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] font-mono">{stat.label}</span>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}

import { Globe } from "lucide-react";
