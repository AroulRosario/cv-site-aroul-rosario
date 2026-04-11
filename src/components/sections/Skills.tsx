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

const CATEGORIES = [
    { key: "scientific" as const, label: "Scientific", emoji: "⚗️", color: "from-blue-500 to-indigo-500", bg: "from-blue-50 to-indigo-50/50", border: "border-blue-100" },
    { key: "technical" as const, label: "Technical", emoji: "💻", color: "from-violet-500 to-purple-500", bg: "from-violet-50 to-purple-50/50", border: "border-violet-100" },
    { key: "leadership" as const, label: "Leadership", emoji: "🛡️", color: "from-emerald-500 to-teal-500", bg: "from-emerald-50 to-teal-50/50", border: "border-emerald-100" },
];

function SkillBar({ name, pct, color }: { name: string; pct: number; color: string }) {
    return (
        <div className="group">
            <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">{name}</span>
                <span className="text-xs text-slate-400">{pct}%</span>
            </div>
            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "circOut" }}
                    className={`h-full rounded-full bg-gradient-to-r ${color}`}
                    style={{ transformOrigin: "left", width: `${pct}%` }}
                />
            </div>
        </div>
    );
}

export function Skills() {
    return (
        <section id="skills" className="py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <FadeIn>
                    <span className="text-xs font-mono text-indigo-500 uppercase tracking-widest mb-6 block">05 // Core Competencies</span>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 tracking-tighter mb-20 leading-[0.9]">
                        Technical<br />
                        <span className="gradient-text">Ecosystem.</span>
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {CATEGORIES.map((cat, ci) => (
                        <motion.div
                            key={cat.key}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: ci * 0.1 }}
                            className={`bg-gradient-to-br ${cat.bg} border ${cat.border} p-10 space-y-8 rounded-2xl hover:shadow-xl transition-all duration-500`}
                        >
                            <div className="flex items-center gap-3 pb-6 border-b border-slate-200/50">
                                <span className="text-3xl">{cat.emoji}</span>
                                <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest">{cat.label}</h3>
                            </div>
                            <div className="space-y-5">
                                {SKILLS_WITH_LEVELS[cat.key].map((s) => (
                                    <SkillBar key={s.name} name={s.name} pct={s.pct} color={cat.color} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
