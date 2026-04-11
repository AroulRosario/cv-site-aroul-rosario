"use client";

import { useState } from "react";
import { cvData } from "@/data/cv";
import Link from "next/link";
import { FadeIn } from "@/components/ui/motion-helpers";
import { DeepDive } from "@/components/ui/DeepDive";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { ArrowUpRight } from "lucide-react";

const STATS = [
    { value: "10K+", label: "Students Impacted" },
    { value: "300+", label: "Educators Trained" },
    { value: "5+", label: "Years Leading" },
];

export function Experience() {
    const [activeDive, setActiveDive] = useState<number | null>(null);

    return (
        <section id="experience" className="py-32 relative overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div>
                    <p className="text-xs font-mono tracking-widest uppercase text-zinc-400 mb-6">02 // Career Trajectory</p>
                    <h2 className="text-6xl md:text-8xl font-display font-medium text-zinc-950 tracking-tighter mb-24 leading-[0.85]">
                        Built.<br />
                        <span className="text-zinc-300">Led.</span><br />
                        <span className="text-zinc-100">Scaled.</span>
                    </h2>
                </div>

                {/* Stat bar */}
                <div className="grid grid-cols-3 gap-6 mb-24 pb-20 border-b border-zinc-100">
                    {STATS.map((s) => (
                        <div key={s.label}>
                            <div className="text-center">
                                <p className="text-5xl md:text-6xl font-display font-medium text-zinc-950 tracking-tighter">{s.value}</p>
                                <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mt-3">{s.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Experience Cards — Continuous vertical list */}
                <div className="space-y-4">
                    {cvData.experience.map((item, index) => (
                        <Link
                            key={index}
                            href="/experience"
                            className="block"
                        >
                            <div
                                className="group relative flex items-center gap-6 md:gap-10 p-6 md:p-10 bg-white border border-zinc-100 rounded-2xl cursor-pointer overflow-hidden hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500"
                            >
                                {/* Logo */}
                                <div className="flex-shrink-0 grayscale brightness-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700">
                                    <BrandLogo name={item.org} size={72} />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-baseline gap-4 mb-2">
                                        <h3 className="text-2xl md:text-4xl font-display font-medium text-zinc-950 tracking-tight break-words leading-none">
                                            {item.title}
                                        </h3>
                                        <span className="hidden md:block text-sm font-mono text-zinc-300 shrink-0">{item.period}</span>
                                    </div>
                                    <p className="text-sm font-mono text-zinc-500 uppercase tracking-widest">{item.org}</p>
                                </div>

                                {/* Link Indicator */}
                                <div className="text-zinc-200 group-hover:text-zinc-950 transition-all duration-500 shrink-0">
                                    <ArrowUpRight className="w-6 h-6" />
                                </div>

                                {/* Rank watermark */}
                                <span className="absolute right-4 md:right-8 bottom-0 text-[80px] md:text-[140px] font-display font-black text-zinc-500/[0.03] leading-none pointer-events-none select-none">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {cvData.experience.map((item, index) => (
                <DeepDive
                    key={index}
                    isOpen={activeDive === index}
                    onClose={() => setActiveDive(null)}
                    title={item.title}
                    content={item.deepDive || item.description}
                    org={item.org}
                />
            ))}
        </section>
    );
}
