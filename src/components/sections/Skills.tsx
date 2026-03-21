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

function SkillBar({ name, pct, delay = 0 }: { name: string; pct: number; delay?: number }) {
    return (
        <div className="group">
            <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-mono text-zinc-400 group-hover:text-white transition-colors">{name}</span>
            </div>
            <div className="h-px bg-white/5 relative overflow-hidden">
                <motion.div
                    className="absolute inset-y-0 left-0 bg-white/60"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: pct / 100 }}
                    transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: "left" }}
                    viewport={{ once: true }}
                />
            </div>
        </div>
    );
}

export function Skills() {
    return (
        <section id="skills" className="py-32 relative border-b border-white/5 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_50%,rgba(0,242,255,0.02),transparent)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <FadeIn>
                    <p className="text-xs font-mono tracking-widest uppercase text-zinc-600 mb-4">05 // Core Competencies</p>
                    <h2 className="text-6xl md:text-8xl font-display font-black text-white tracking-tighter mb-24 leading-none">
                        Technical<br />
                        <span className="text-white/20">Ecosystem.</span>
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {/* Scientific */}
                    <div className="glass-card p-10 space-y-8">
                        <div className="flex items-center gap-3 mb-10 pb-6 border-b border-white/5">
                            <div className="text-3xl">⚗️</div>
                            <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-[0.2em]">Scientific</h3>
                        </div>
                        <div className="space-y-6">
                            {SKILLS_WITH_LEVELS.scientific.map((s, i) => (
                                <SkillBar key={s.name} name={s.name} pct={s.pct} delay={i * 0.08} />
                            ))}
                        </div>
                    </div>

                    {/* Technical */}
                    <div className="glass-card p-10 space-y-8">
                        <div className="flex items-center gap-3 mb-10 pb-6 border-b border-white/5">
                            <div className="text-3xl">💻</div>
                            <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-[0.2em]">Technical</h3>
                        </div>
                        <div className="space-y-6">
                            {SKILLS_WITH_LEVELS.technical.map((s, i) => (
                                <SkillBar key={s.name} name={s.name} pct={s.pct} delay={i * 0.08} />
                            ))}
                        </div>
                    </div>

                    {/* Leadership */}
                    <div className="glass-card p-10 space-y-8">
                        <div className="flex items-center gap-3 mb-10 pb-6 border-b border-white/5">
                            <div className="text-3xl">🛡️</div>
                            <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-[0.2em]">Leadership</h3>
                        </div>
                        <div className="space-y-6">
                            {SKILLS_WITH_LEVELS.leadership.map((s, i) => (
                                <SkillBar key={s.name} name={s.name} pct={s.pct} delay={i * 0.08} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
