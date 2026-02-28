"use client";

import { cvData } from "@/data/cv";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";

export function Skills() {
    return (
        <section id="skills" className="py-32 bg-zinc-950 relative border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <FadeIn>
                    <div className="mb-20">
                        <p className="text-xs font-mono tracking-widest uppercase text-zinc-600 mb-4">
                            04 // Core Competencies
                        </p>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                            Skill Architecture.
                        </h2>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

                    {/* Scientific */}
                    <div className="space-y-8">
                        <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest border-b border-white/10 pb-4">
                            Scientific Exploration
                        </h3>
                        <StaggerContainer className="flex flex-wrap gap-2">
                            {cvData.skills.scientific.map((skill, i) => (
                                <StaggerItem key={i}>
                                    <span className="px-4 py-2 border border-white/10 text-zinc-400 text-sm font-light hover:border-white hover:text-white transition-all duration-300">
                                        {skill}
                                    </span>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Technical */}
                    <div className="space-y-8">
                        <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest border-b border-white/10 pb-4">
                            Technical Infrastructure
                        </h3>
                        <StaggerContainer className="flex flex-wrap gap-2">
                            {cvData.skills.technical.map((skill, i) => (
                                <StaggerItem key={i}>
                                    <span className="px-4 py-2 border border-white/10 text-zinc-400 text-sm font-light hover:border-white hover:text-white transition-all duration-300">
                                        {skill}
                                    </span>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Leadership */}
                    <div className="space-y-8">
                        <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest border-b border-white/10 pb-4">
                            Institutional Governance
                        </h3>
                        <StaggerContainer className="flex flex-wrap gap-2">
                            {cvData.skills.leadership.map((skill, i) => (
                                <StaggerItem key={i}>
                                    <span className="px-4 py-2 border border-white/10 text-zinc-400 text-sm font-light hover:border-white hover:text-white transition-all duration-300">
                                        {skill}
                                    </span>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                </div>
            </div>
        </section>
    );
}
