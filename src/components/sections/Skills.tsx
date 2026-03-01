"use client";

import { cvData } from "@/data/cv";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";
import { Beaker, Cpu, ShieldAlert } from "lucide-react";

export function Skills() {
    return (
        <section id="skills" className="py-32 bg-zinc-950/20 relative border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <FadeIn>
                    <div className="mb-20">
                        <p className="text-xs font-mono tracking-widest uppercase text-zinc-600 mb-4">
                            04 // Competencies
                        </p>
                        <h2 className="text-5xl font-display font-bold text-white tracking-tighter">
                            Technical <br />Ecosystem.
                        </h2>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Scientific */}
                    <div className="glass-card p-10 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <Beaker className="w-6 h-6 text-zinc-500" />
                                <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-[0.2em]">Scientific</h3>
                            </div>
                            <StaggerContainer className="flex flex-wrap gap-2">
                                {cvData.skills.scientific.map((skill, i) => (
                                    <StaggerItem key={i}>
                                        <span className="px-3 py-1 bg-white/5 border border-white/5 text-zinc-400 text-xs font-mono uppercase tracking-widest hover:border-white hover:text-white transition-all">
                                            {skill}
                                        </span>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                    </div>

                    {/* Technical */}
                    <div className="glass-card p-10 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <Cpu className="w-6 h-6 text-zinc-500" />
                                <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-[0.2em]">Technical</h3>
                            </div>
                            <StaggerContainer className="flex flex-wrap gap-2">
                                {cvData.skills.technical.map((skill, i) => (
                                    <StaggerItem key={i}>
                                        <span className="px-3 py-1 bg-white/5 border border-white/5 text-zinc-400 text-xs font-mono uppercase tracking-widest hover:border-white hover:text-white transition-all">
                                            {skill}
                                        </span>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                    </div>

                    {/* Leadership */}
                    <div className="glass-card p-10 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <ShieldAlert className="w-6 h-6 text-zinc-500 rotate-180" />
                                <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-[0.2em]">Leadership</h3>
                            </div>
                            <StaggerContainer className="flex flex-wrap gap-2">
                                {cvData.skills.leadership.map((skill, i) => (
                                    <StaggerItem key={i}>
                                        <span className="px-3 py-1 bg-white/5 border border-white/5 text-zinc-400 text-xs font-mono uppercase tracking-widest hover:border-white hover:text-white transition-all">
                                            {skill}
                                        </span>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
