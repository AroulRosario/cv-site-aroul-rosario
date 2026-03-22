"use client";

import { cvData } from "@/data/cv";
import { FadeIn } from "@/components/ui/motion-helpers";
import { BrandLogo } from "@/components/ui/BrandLogo";

// Degree → visual weight map
const DEGREE_META: Record<string, { rank: number; color: string; size: string }> = {
    "Fellowship": { rank: 1, color: "from-white/10 to-white/[0.03]", size: "text-3xl md:text-4xl" },
    "Ph.D": { rank: 2, color: "from-white/8 to-white/[0.02]", size: "text-2xl md:text-3xl" },
    "M.Sc": { rank: 3, color: "from-white/6 to-white/[0.01]", size: "text-xl md:text-2xl" },
    "B.Sc": { rank: 4, color: "from-white/5 to-white/[0.01]", size: "text-xl md:text-2xl" },
    "B.Ed": { rank: 5, color: "from-white/5 to-white/[0.01]", size: "text-xl md:text-2xl" },
    "Affiliate Member": { rank: 6, color: "from-white/4 to-white/[0.01]", size: "text-lg md:text-xl" },
    "Member": { rank: 7, color: "from-white/4 to-white/[0.01]", size: "text-lg md:text-xl" },
};

export function Education() {
    return (
        <section id="academics" className="py-32 relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_0%,rgba(0,242,255,0.02),transparent)] pointer-events-none" />
            {/* Vertical grid lines */}
            <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
                    backgroundSize: "100% 120px",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <FadeIn>
                    <p className="text-xs font-mono tracking-widest uppercase text-zinc-600 mb-4">08 // Academics & Fellowships</p>
                    <h2 className="text-6xl md:text-8xl font-display font-black text-white tracking-tighter mb-24 leading-none">
                        Credentials<br />
                        <span className="text-white/20">that Matter.</span>
                    </h2>
                </FadeIn>

                {/* Timeline */}
                <div className="relative">
                    {/* Central vertical line */}
                    <div className="absolute left-[120px] md:left-[200px] top-0 bottom-0 w-px bg-white/5" />

                    <div className="space-y-3">
                        {cvData.fellowshipsAndSocieties.map((item, index) => {
                            const meta = DEGREE_META[item.title] ?? { rank: 8, color: "from-white/4 to-white/[0.01]", size: "text-lg" };
                            return (
                                <div
                                    key={index}
                                    className={`group relative flex items-center gap-0 overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-r ${meta.color} hover:border-white/20 backdrop-blur-sm transition-all duration-300`}
                                >
                                    {/* Left: Large Logo */}
                                    <div className="w-[120px] md:w-[200px] shrink-0 flex items-center justify-center py-8 px-6 border-r border-white/5">
                                        <BrandLogo name={item.org} size={72} />
                                    </div>

                                    {/* Timeline dot */}
                                    <div className="absolute left-[119px] md:left-[199px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-zinc-800 border border-white/20 group-hover:border-white/50 group-hover:bg-white/20 transition-all z-10" />

                                    {/* Right: Content */}
                                    <div className="flex-1 px-8 md:px-12 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div>
                                            <h3 className={`font-display font-black text-white tracking-tight leading-none mb-2 ${meta.size}`}>
                                                {item.title}
                                            </h3>
                                            <p className="text-sm font-mono text-zinc-500 uppercase tracking-widest">
                                                {item.org}
                                            </p>
                                        </div>

                                        {item.acronym && (
                                            <div className="shrink-0">
                                                <span className="text-2xl md:text-3xl font-display font-black text-white/10 group-hover:text-white/30 transition-colors tracking-tight">
                                                    {item.acronym}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Rank number */}
                                    <span className="absolute right-6 bottom-1 text-[60px] font-display font-black text-white/[0.03] leading-none select-none pointer-events-none">
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
