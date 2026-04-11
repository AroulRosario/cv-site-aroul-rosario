"use client";

import { cvData } from "@/data/cv";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/motion-helpers";
import { BrandLogo } from "@/components/ui/BrandLogo";

const SKILLS_WITH_LEVELS = {
    scientific: [
        { name: "Organic Chemistry", pct: 98 },
        { name: "Coordination Chemistry", pct: 92 },
        { name: "Molecular Modeling", pct: 88 },
        { name: "Quantum Mechanics", pct: 82 },
        { name: "Neuro-Cognitive STEM", pct: 90 },
    ],
    technical: [
        { name: "Azure Cognitive Services", pct: 85 },
        { name: "EdTech Full-Stack", pct: 88 },
        { name: "VR Simulations", pct: 95 },
        { name: "AI Assessment", pct: 80 },
        { name: "Infrastructure", pct: 75 },
    ],
    leadership: [
        { name: "Digital Strategy", pct: 92 },
        { name: "Institutional Governance", pct: 90 },
        { name: "Curriculum Innovation", pct: 97 },
        { name: "Public Speaking", pct: 88 },
        { name: "Strategic Counseling", pct: 85 },
    ],
};

function SkillBar({ name, pct }: { name: string; pct: number }) {
    return (
        <div className="group">
            <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-mono text-zinc-400 group-hover:text-zinc-950 transition-colors uppercase tracking-widest">{name}</span>
                <span className="text-[10px] font-mono text-zinc-200 group-hover:text-zinc-400 transition-colors">{pct}%</span>
            </div>
            <div className="h-[2px] bg-zinc-100 relative overflow-hidden">
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: pct / 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="absolute inset-y-0 left-0 bg-zinc-950"
                    style={{ transformOrigin: "left", width: "100%" }}
                />
            </div>
        </div>
    );
}

export function Skills() {
    return (
        <section id="skills" className="py-32 relative border-b border-zinc-100 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <FadeIn>
                    <p className="text-xs font-mono tracking-widest uppercase text-zinc-400 mb-6 inline-block px-4 py-1.5 rounded-full border border-zinc-100 bg-zinc-50">05 // Core Competencies</p>
                    <h2 className="text-6xl md:text-8xl font-display font-medium text-zinc-950 tracking-tighter mb-24 leading-[0.85]">
                        Technical<br />
                        <span className="text-zinc-200 italic">Ecosystem.</span>
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Scientific */}
                    <div className="bg-zinc-50 border border-zinc-100 p-12 space-y-10 rounded-[2rem] hover:border-zinc-300 hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500">
                        <div className="flex items-center gap-4 mb-4 pb-8 border-b border-zinc-200">
                            <div className="text-4xl grayscale brightness-125">⚗️</div>
                            <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-[0.3em]">Scientific</h3>
                        </div>
                        <div className="space-y-8">
                            {SKILLS_WITH_LEVELS.scientific.map((s) => (
                                <SkillBar key={s.name} name={s.name} pct={s.pct} />
                            ))}
                        </div>
                    </div>

                    {/* Technical */}
                    <div className="bg-white border border-zinc-200 p-12 space-y-10 rounded-[2rem] hover:border-zinc-400 hover:shadow-2xl hover:shadow-zinc-300/50 transition-all duration-500">
                        <div className="flex items-center gap-4 mb-4 pb-8 border-b border-zinc-200">
                            <div className="text-4xl grayscale brightness-125">💻</div>
                            <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-[0.3em]">Technical</h3>
                        </div>
                        <div className="space-y-8">
                            {SKILLS_WITH_LEVELS.technical.map((s) => (
                                <SkillBar key={s.name} name={s.name} pct={s.pct} />
                            ))}
                        </div>
                    </div>

                    {/* Leadership */}
                    <div className="bg-zinc-50 border border-zinc-100 p-12 space-y-10 rounded-[2rem] hover:border-zinc-300 hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500">
                        <div className="flex items-center gap-4 mb-4 pb-8 border-b border-zinc-200">
                            <div className="text-4xl grayscale brightness-125">🛡️</div>
                            <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-[0.3em]">Leadership</h3>
                        </div>
                        <div className="space-y-8">
                            {SKILLS_WITH_LEVELS.leadership.map((s) => (
                                <SkillBar key={s.name} name={s.name} pct={s.pct} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
