"use client";

import { cvData } from "@/data/cv";
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
            <div className="h-2 bg-slate-100/50 rounded-full overflow-hidden border border-slate-100">
                <div
                    className={`h-full rounded-full bg-gradient-to-r ${color}`}
                    style={{ width: `${pct}%` }}
                />
            </div>
        </div>
    );
}

export function Skills() {
    return (
        <section id="skills" className="py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {CATEGORIES.map((cat, ci) => (
                        <div
                            key={cat.key}
                            className={`bg-gradient-to-br ${cat.bg} border ${cat.border} p-12 space-y-10 rounded-[2.5rem] hover:shadow-2xl hover:shadow-slate-100/50 transition-all duration-700 hover:-translate-y-1`}
                        >
                            <div className="flex items-center gap-4 pb-8 border-b border-slate-200/50">
                                <span className="text-4xl group-hover:scale-110 transition-transform duration-500">{cat.emoji}</span>
                                <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-[0.3em]">{cat.label}</h3>
                            </div>
                            <div className="space-y-6">
                                {SKILLS_WITH_LEVELS[cat.key].map((s) => (
                                    <SkillBar key={s.name} name={s.name} pct={s.pct} color={cat.color} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
