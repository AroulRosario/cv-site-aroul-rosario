"use client";

import { cvData } from "@/data/cv";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/motion-helpers";
import { ExternalLink, ArrowUpRight, Rocket } from "lucide-react";
import Link from "next/link";

const STARTUP_STYLES = [
    { bg: "bg-gradient-to-br from-orange-50 to-amber-50/50", border: "border-orange-100", hover: "hover:border-orange-300 hover:shadow-orange-100/50", dot: "bg-orange-400" },
    { bg: "bg-gradient-to-br from-violet-50 to-purple-50/50", border: "border-violet-100", hover: "hover:border-violet-300 hover:shadow-violet-100/50", dot: "bg-violet-400" },
    { bg: "bg-gradient-to-br from-sky-50 to-blue-50/50", border: "border-sky-100", hover: "hover:border-sky-300 hover:shadow-sky-100/50", dot: "bg-sky-400" },
    { bg: "bg-gradient-to-br from-emerald-50 to-teal-50/50", border: "border-emerald-100", hover: "hover:border-emerald-300 hover:shadow-emerald-100/50", dot: "bg-emerald-400" },
];

export function Startups() {
    return (
        <section id="startups" className="py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="mb-20">
                    <span className="inline-flex items-center gap-2 text-orange-600 font-mono text-xs tracking-widest uppercase mb-6 bg-orange-50 px-4 py-2 rounded-full border border-orange-100">
                        <Rocket className="w-3.5 h-3.5" />
                        Ventures Founded
                    </span>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 tracking-tighter leading-[0.9]">
                        Startups<br />
                        <span className="gradient-text-warm">Built.</span>
                    </h2>
                </div>

                {/* Startup cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
                    {cvData.startups.map((s, i) => {
                        const style = STARTUP_STYLES[i % STARTUP_STYLES.length];
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link href="/startups" className="block h-full">
                                    <div className={`group h-full ${style.bg} border ${style.border} ${style.hover} p-10 md:p-12 flex flex-col justify-between gap-8 rounded-2xl transition-all duration-500 hover:shadow-xl`}>
                                        <div>
                                            <div className="flex items-start justify-between mb-6">
                                                <div className={`w-3 h-3 rounded-full ${style.dot}`} />
                                                {s.url && (
                                                    <div className="text-slate-400 group-hover:text-slate-900 transition-colors duration-500">
                                                        <ArrowUpRight size={22} />
                                                    </div>
                                                )}
                                            </div>
                                            <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">{s.tagline}</p>
                                            <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 tracking-tight leading-tight">{s.name}</h3>
                                            <p className="mt-4 text-slate-500 leading-relaxed max-w-sm">{s.description}</p>
                                        </div>
                                        {s.url && (
                                            <div className="text-xs font-mono text-slate-400 group-hover:text-slate-600 flex items-center gap-2 transition-colors">
                                                <ExternalLink size={14} />
                                                {s.url.replace("https://", "")}
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* IIT Delhi Talk */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 to-indigo-900 min-h-[420px] flex shadow-2xl">
                    <div className="relative w-1/2 hidden md:block overflow-hidden">
                        <img
                            src="/photos/iit-delhi-talk.jpg"
                            alt="Dr. Aroul Rosario speaking at IIT Delhi Technology Showcase"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/80" />
                    </div>
                    <div className="flex-1 p-10 md:p-16 flex flex-col justify-center relative z-10">
                        <span className="text-xs font-mono text-indigo-300 uppercase tracking-widest mb-4 flex items-center gap-3">
                            <span className="w-8 h-px bg-indigo-400 inline-block" />
                            Keynote · IIT Delhi · 2025
                        </span>
                        <h3 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-[0.95] mb-6">
                            EDC Technology<br />
                            <span className="text-indigo-300">Showcase.</span>
                        </h3>
                        <p className="text-indigo-200/80 text-lg leading-relaxed max-w-md mb-8">
                            &quot;Reinventing STEM Education through Interactive Simulations &amp; Learner-Driven Pedagogies&quot;
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["Simulations", "Cognitive Feedback", "Active Learning"].map(tag => (
                                <span key={tag} className="text-[10px] font-mono uppercase tracking-widest px-4 py-2 rounded-full border border-indigo-400/30 text-indigo-300 bg-indigo-400/10">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
