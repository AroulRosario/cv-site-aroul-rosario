"use client";

import { cvData } from "@/data/cv";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/motion-helpers";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const STARTUP_COLORS = [
    "from-orange-500/20 to-orange-900/5",
    "from-violet-500/20 to-violet-900/5",
    "from-sky-500/20 to-sky-900/5",
    "from-emerald-500/20 to-emerald-900/5",
];
const STARTUP_BORDER = [
    "hover:border-orange-500/40",
    "hover:border-violet-500/40",
    "hover:border-sky-500/40",
    "hover:border-emerald-500/40",
];
const STARTUP_GLOW = [
    "group-hover:shadow-[0_0_60px_rgba(249,115,22,0.15)]",
    "group-hover:shadow-[0_0_60px_rgba(139,92,246,0.15)]",
    "group-hover:shadow-[0_0_60px_rgba(14,165,233,0.15)]",
    "group-hover:shadow-[0_0_60px_rgba(16,185,129,0.15)]",
];

export function Startups() {
    return (
        <section id="startups" className="py-32 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_80%_50%,rgba(255,255,255,0.03),transparent)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,120,255,0.02)_0%,transparent_60%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <FadeIn>
                    <p className="text-xs font-mono tracking-widest uppercase text-zinc-500 mb-4 inline-block px-4 py-1.5 rounded-full border border-white/10 glass">03 // Ventures Founded</p>
                    <h2 className="text-6xl md:text-8xl font-display font-black text-white tracking-tighter mt-6 mb-24 leading-none">
                        Startups<br />
                        <span className="text-white/20">Built.</span>
                    </h2>
                </FadeIn>

                {/* Startup cards 2×2 grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                    {cvData.startups.map((s, i) => (
                        <Link key={i} href="/startups" className="block h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true }}
                                className={`group glass-card h-full bg-gradient-to-br ${STARTUP_COLORS[i % STARTUP_COLORS.length]} border border-white/8 ${STARTUP_BORDER[i % STARTUP_BORDER.length]} ${STARTUP_GLOW[i % STARTUP_GLOW.length]} p-10 flex flex-col justify-between gap-6 transition-all duration-500`}
                            >
                                <div>
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="w-3 h-3 rounded-full bg-white/40 group-hover:bg-white animate-pulse shadow-[0_0_12px_white] transition-colors" />
                                        {s.url && (
                                            <div className="text-zinc-600 hover:text-white transition-colors">
                                                <ArrowUpRight size={18} />
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">{s.tagline}</p>
                                    <h3 className="text-2xl md:text-3xl font-display font-black text-white tracking-tight leading-tight">{s.name}</h3>
                                </div>

                                {s.url && (
                                    <div className="text-xs font-mono text-zinc-600 group-hover:text-white transition-colors flex items-center gap-2">
                                        <ExternalLink size={12} />
                                        {s.url.replace("https://", "")}
                                    </div>
                                )}
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {/* IIT Delhi Talk — full-width cinematic callout */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 min-h-[420px] flex"
                >
                    {/* Photo left side */}
                    <div className="relative w-1/2 hidden md:block overflow-hidden">
                        <img
                            src="/photos/iit-delhi-talk.jpg"
                            alt="Dr. Aroul Rosario speaking at IIT Delhi Technology Showcase"
                            className="absolute inset-0 w-full h-full object-cover object-left"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-950/80" />
                    </div>

                    {/* Text right side */}
                    <div className="flex-1 p-10 md:p-16 flex flex-col justify-center relative z-10">
                        {/* Mobile photo */}
                        <div className="md:hidden relative overflow-hidden rounded-2xl mb-8 h-48">
                            <img
                                src="/photos/iit-delhi-talk.jpg"
                                alt="Dr. Aroul Rosario speaking at IIT Delhi Technology Showcase"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>

                        <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.25em] mb-4 inline-flex items-center gap-3">
                            <span className="w-8 h-px bg-white/20 inline-block" />
                            Keynote · IIT Delhi · 2025
                        </span>
                        <h3 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight leading-none mb-6">
                            EDC Technology<br />
                            <span className="text-white/30">Showcase.</span>
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed max-w-md mb-8">
                            &quot;Reinventing STEM Education through Interactive Simulations &amp; Learner-Driven Pedagogies&quot;
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {["Simulations", "Cognitive Feedback", "Active Learning"].map(tag => (
                                <span key={tag} className="text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10 text-zinc-500">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
