"use client";

import { cvData } from "@/data/cv";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";

export function Skills() {
    return (
        <div className="max-w-7xl mx-auto py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                {/* Scientific Dominance */}
                <div className="space-y-12">
                    <FadeIn>
                        <h3 className="text-3xl font-display font-bold text-white mb-8 flex items-center gap-4">
                            <span className="w-8 h-[1px] bg-white/20"></span>
                            Scientific Epistemology.
                        </h3>
                        <p className="text-zinc-500 font-light leading-relaxed mb-12">
                            At the core of my professional identity is a deep-seated mastery of the chemical sciences, augmented by neuro-cognitive pedagogical research.
                        </p>
                    </FadeIn>

                    <StaggerContainer className="space-y-8">
                        {cvData.skills.scientific.map((skill, i) => (
                            <StaggerItem key={i}>
                                <div className="group relative">
                                    <div className="flex items-start gap-4 mb-2">
                                        <span className="text-[10px] font-mono text-zinc-700 mt-1">0{i + 1}</span>
                                        <p className="text-lg text-white font-medium group-hover:pl-2 transition-all duration-300">
                                            {skill}
                                        </p>
                                    </div>
                                    <div className="h-px w-full bg-white/5 group-hover:bg-white/10 transition-colors" />
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                {/* Technical / Computation */}
                <div className="space-y-12">
                    <FadeIn>
                        <h3 className="text-3xl font-display font-bold text-white mb-8 flex items-center gap-4">
                            <span className="w-8 h-[1px] bg-white/20"></span>
                            Computational Synergy.
                        </h3>
                        <p className="text-zinc-500 font-light leading-relaxed mb-12">
                            Bridging the gap between empirical science and scalable digital infrastructure through full-stack architecture and AI services.
                        </p>
                    </FadeIn>

                    <StaggerContainer className="space-y-8">
                        {cvData.skills.technical.map((skill, i) => (
                            <StaggerItem key={i}>
                                <div className="group relative">
                                    <div className="flex items-start gap-4 mb-2">
                                        <span className="text-[10px] font-mono text-zinc-700 mt-1">0{i + 1}</span>
                                        <p className="text-lg text-white font-medium group-hover:pl-2 transition-all duration-300">
                                            {skill}
                                        </p>
                                    </div>
                                    <div className="h-px w-full bg-white/5 group-hover:bg-white/10 transition-colors" />
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

            </div>

            {/* Leadership Footer Part */}
            <div className="mt-24 pt-12 border-t border-white/5">
                <h4 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-8">Strategic Governance // Soft Capabilities</h4>
                <div className="flex flex-wrap gap-4">
                    {cvData.skills.leadership.map((skill, i) => (
                        <span key={i} className="px-6 py-3 bg-zinc-900/50 border border-white/5 rounded-full text-zinc-400 text-sm hover:border-white/20 hover:text-white transition-all cursor-default">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
