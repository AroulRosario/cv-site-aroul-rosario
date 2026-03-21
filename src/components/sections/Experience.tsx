"use client";

import { useState } from "react";
import { cvData } from "@/data/cv";
import { motion } from "framer-motion";
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
        <section id="experience" className="py-32 relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(255,255,255,0.03),transparent)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,rgba(0,242,255,0.015)_0%,transparent_50%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <FadeIn>
                    <p className="text-xs font-mono tracking-widest uppercase text-zinc-600 mb-4">02 // Career Trajectory</p>
                    <h2 className="text-6xl md:text-8xl font-display font-black text-white tracking-tighter mb-24 leading-none">
                        Built.<br />
                        <span className="text-white/20">Led.</span><br />
                        <span className="text-white/10">Scaled.</span>
                    </h2>
                </FadeIn>

                {/* Stat bar */}
                <div className="grid grid-cols-3 gap-6 mb-20 pb-20 border-b border-white/5">
                    {STATS.map((s) => (
                        <FadeIn key={s.label}>
                            <div className="text-center">
                                <p className="text-5xl md:text-6xl font-display font-black text-white tracking-tighter">{s.value}</p>
                                <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mt-2">{s.label}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* Experience Cards — Horizontal stacking visual-first */}
                <div className="space-y-4">
                    {cvData.experience.map((item, index) => (
                        <Link
                            key={index}
                            href="/experience"
                            className="block"
                        >
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true }}
                                className="group relative flex items-center gap-8 p-8 glass-card border-white/5 cursor-pointer overflow-hidden hover:border-white/20 transition-all"
                            >
                                {/* Logo — big and prominent */}
                                <div className="flex-shrink-0">
                                    <BrandLogo name={item.org} size={80} />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-baseline gap-4 mb-1">
                                        <h3 className="text-2xl md:text-4xl font-display font-black text-white tracking-tight break-words">
                                            {item.title}
                                        </h3>
                                        <span className="hidden md:block text-sm font-mono text-zinc-600 shrink-0">{item.period}</span>
                                    </div>
                                    <p className="text-sm font-mono text-zinc-500 uppercase tracking-widest">{item.org}</p>
                                </div>

                                {/* Link Indicator */}
                                <div className="opacity-40 group-hover:opacity-100 transition-all duration-300 shrink-0">
                                    <ArrowUpRight className="w-6 h-6 text-zinc-500 group-hover:text-white" />
                                </div>

                                {/* Rank watermark */}
                                <span className="absolute right-8 bottom-2 text-[120px] font-display font-black text-white/[0.02] leading-none pointer-events-none select-none">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </motion.div>
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
