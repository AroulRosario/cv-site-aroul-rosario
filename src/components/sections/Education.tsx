"use client";

import { cvData } from "@/data/cv";
import { FadeIn } from "@/components/ui/motion-helpers";
import { BrandLogo } from "@/components/ui/BrandLogo";

// Degree → visual weight map
const DEGREE_META: Record<string, { rank: number; color: string; size: string }> = {
    "Fellowship": { rank: 1, color: "bg-zinc-100", size: "text-3xl md:text-4xl" },
    "Ph.D": { rank: 2, color: "bg-zinc-50", size: "text-2xl md:text-3xl" },
    "M.Sc": { rank: 3, color: "bg-white", size: "text-xl md:text-2xl" },
    "B.Sc": { rank: 4, color: "bg-white", size: "text-xl md:text-2xl" },
    "B.Ed": { rank: 5, color: "bg-white", size: "text-xl md:text-2xl" },
    "Affiliate Member": { rank: 6, color: "bg-white", size: "text-lg md:text-xl" },
    "Member": { rank: 7, color: "bg-white", size: "text-lg md:text-xl" },
};

export function Education() {
    return (
        <section id="academics" className="py-32 relative overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div>
                    <p className="text-xs font-mono tracking-widest uppercase text-zinc-400 mb-6">08 // Academics & Fellowships</p>
                    <h2 className="text-6xl md:text-8xl font-display font-medium text-zinc-950 tracking-tighter mb-24 leading-[0.85]">
                        Credentials<br />
                        <span className="text-zinc-200 italic">that Matter.</span>
                    </h2>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Central vertical line */}
                    <div className="absolute left-[80px] md:left-[120px] top-0 bottom-0 w-px bg-zinc-100" />

                    <div className="space-y-4">
                        {cvData.fellowshipsAndSocieties.map((item, index) => {
                            const meta = DEGREE_META[item.title] ?? { rank: 8, color: "bg-white", size: "text-lg" };
                            return (
                                <div
                                    key={index}
                                    className={`group relative flex items-center gap-0 overflow-hidden rounded-3xl border border-zinc-100 ${meta.color} hover:border-zinc-300 hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500`}
                                >
                                    {/* Left: Logo */}
                                    <div className="w-[80px] md:w-[120px] shrink-0 flex items-center justify-center py-10 px-6 border-r border-zinc-100 bg-white group-hover:bg-zinc-50 transition-colors duration-500">
                                        <div className="grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                                            <BrandLogo name={item.org} size={64} />
                                        </div>
                                    </div>

                                    {/* Timeline dot */}
                                    <div className="absolute left-[79px] md:left-[119px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border border-zinc-200 group-hover:border-zinc-950 group-hover:bg-zinc-950 transition-all duration-500 z-10" />

                                    {/* Right: Content */}
                                    <div className="flex-1 px-8 md:px-16 py-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div>
                                            <h3 className={`font-display font-medium text-zinc-950 tracking-tight leading-none mb-3 ${meta.size}`}>
                                                {item.title}
                                            </h3>
                                            <p className="text-sm font-mono text-zinc-500 uppercase tracking-widest">
                                                {item.org}
                                            </p>
                                        </div>

                                        {item.acronym && (
                                            <div className="shrink-0">
                                                <span className="text-2xl md:text-4xl font-display font-medium text-zinc-100 group-hover:text-zinc-200 transition-colors tracking-tighter">
                                                    {item.acronym}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Rank number */}
                                    <span className="absolute right-8 bottom-0 text-[60px] font-display font-black text-zinc-500/[0.02] leading-none select-none pointer-events-none">
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
