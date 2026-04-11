"use client";

import { cvData } from "@/data/cv";
import { FadeIn } from "@/components/ui/motion-helpers";
import { BrandLogo } from "@/components/ui/BrandLogo";

// Degree → visual weight map
const DEGREE_META: Record<string, { rank: number; color: string; hover: string; size: string }> = {
    "Fellowship": { rank: 1, color: "bg-indigo-50/50", hover: "hover:border-indigo-300 hover:shadow-indigo-100/50", size: "text-3xl md:text-4xl" },
    "Ph.D": { rank: 2, color: "bg-blue-50/40", hover: "hover:border-blue-300 hover:shadow-blue-100/50", size: "text-2xl md:text-3xl" },
    "M.Sc": { rank: 3, color: "bg-sky-50/30", hover: "hover:border-sky-300 hover:shadow-sky-100/50", size: "text-xl md:text-2xl" },
    "B.Sc": { rank: 4, color: "bg-emerald-50/30", hover: "hover:border-emerald-300 hover:shadow-emerald-100/50", size: "text-xl md:text-2xl" },
    "B.Ed": { rank: 5, color: "bg-teal-50/30", hover: "hover:border-teal-300 hover:shadow-teal-100/50", size: "text-xl md:text-2xl" },
    "Affiliate Member": { rank: 6, color: "bg-amber-50/30", hover: "hover:border-amber-300 hover:shadow-amber-100/50", size: "text-lg md:text-xl" },
    "Member": { rank: 7, color: "bg-orange-50/30", hover: "hover:border-orange-300 hover:shadow-orange-100/50", size: "text-lg md:text-xl" },
};

export function Education() {
    return (
        <section id="academics" className="py-32 relative overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="mb-20">
                    <span className="inline-flex items-center gap-2 text-indigo-600 font-mono text-xs tracking-widest uppercase mb-6 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100">
                        08 // Academics & Fellowships
                    </span>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 tracking-tighter mb-10 leading-[0.9]">
                        Credentials<br />
                        <span className="gradient-text">That Matter.</span>
                    </h2>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Central vertical line */}
                    <div className="absolute left-[80px] md:left-[120px] top-0 bottom-0 w-px bg-zinc-100" />

                    <div className="space-y-4">
                        {cvData.fellowshipsAndSocieties.map((item, index) => {
                            const meta = DEGREE_META[item.title] ?? { rank: 8, color: "bg-slate-50/50", hover: "hover:border-slate-300 hover:shadow-slate-100/50", size: "text-lg" };
                            return (
                                <div
                                    key={index}
                                    className={`group relative flex items-center gap-0 overflow-hidden rounded-3xl border border-slate-100 ${meta.color} ${meta.hover} transition-all duration-500`}
                                >
                                    {/* Left: Logo */}
                                    <div className="w-[120px] md:w-[160px] shrink-0 flex items-center justify-center py-10 px-6 border-r border-slate-100/50 bg-white/50 group-hover:bg-white transition-colors duration-500">
                                        <div className="opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                                            <BrandLogo name={item.org} size={90} />
                                        </div>
                                    </div>

                                    {/* Timeline dot */}
                                    <div className="absolute left-[119px] md:left-[159px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-indigo-200 group-hover:border-indigo-600 group-hover:bg-indigo-600 transition-all duration-500 z-10" />

                                    {/* Right: Content */}
                                    <div className="flex-1 px-8 md:px-16 py-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div>
                                            <h3 className={`font-display font-medium text-slate-900 tracking-tight leading-none mb-3 ${meta.size}`}>
                                                {item.title}
                                            </h3>
                                            <p className="text-sm font-mono text-slate-500 uppercase tracking-widest">
                                                {item.org}
                                            </p>
                                        </div>

                                        {item.acronym && (
                                            <div className="shrink-0">
                                                <span className="text-2xl md:text-5xl font-display font-bold text-slate-200 group-hover:text-indigo-200 transition-colors tracking-tighter">
                                                    {item.acronym}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Rank number */}
                                    <span className="absolute right-8 bottom-0 text-[60px] font-display font-black text-slate-500/[0.02] leading-none select-none pointer-events-none">
                                        {String(meta.rank).padStart(2, "0")}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
