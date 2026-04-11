"use client";

import { cvData } from "@/data/cv";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/motion-helpers";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const STARTUP_COLORS = [
    "bg-orange-50/50",
    "bg-violet-50/50",
    "bg-sky-50/50",
    "bg-emerald-50/50",
];
const STARTUP_BORDER = [
    "hover:border-orange-200",
    "hover:border-violet-200",
    "hover:border-sky-200",
    "hover:border-emerald-200",
];

export function Startups() {
    return (
        <section id="startups" className="py-32 relative overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <FadeIn>
                    <p className="text-xs font-mono tracking-widest uppercase text-zinc-400 mb-6 inline-block px-4 py-1.5 rounded-full border border-zinc-100 bg-zinc-50">03 // Ventures Founded</p>
                    <h2 className="text-6xl md:text-8xl font-display font-medium text-zinc-950 tracking-tighter mt-6 mb-24 leading-[0.85]">
                        Startups<br />
                        <span className="text-zinc-200 italic">Built.</span>
                    </h2>
                </FadeIn>

                {/* Startup cards 2×2 grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
                    {cvData.startups.map((s, i) => (
                        <Link key={i} href="/startups" className="block h-full">
                            <div
                                className={`group h-full ${STARTUP_COLORS[i % STARTUP_COLORS.length]} border border-zinc-100 ${STARTUP_BORDER[i % STARTUP_BORDER.length]} p-12 flex flex-col justify-between gap-10 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-zinc-200/50`}
                            >
                                <div>
                                    <div className="flex items-start justify-between mb-8">
                                        <div className="w-4 h-4 rounded-full bg-zinc-200 group-hover:bg-zinc-950 transition-colors duration-500" />
                                        {s.url && (
                                            <div className="text-zinc-300 group-hover:text-zinc-950 transition-colors duration-500">
                                                <ArrowUpRight size={24} />
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-xs font-mono text-zinc-400 uppercase tracking-[0.2em] mb-4">{s.tagline}</p>
                                    <h3 className="text-3xl md:text-4xl font-display font-medium text-zinc-950 tracking-tight leading-tight">{s.name}</h3>
                                    <p className="mt-6 text-zinc-500 font-light leading-relaxed max-w-sm">
                                        {s.description}
                                    </p>
                                </div>

                                {s.url && (
                                    <div className="text-xs font-mono text-zinc-400 group-hover:text-zinc-950 transition-colors flex items-center gap-2">
                                        <ExternalLink size={14} />
                                        {s.url.replace("https://", "")}
                                    </div>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>

                {/* IIT Delhi Talk — full-width white cinematic callout */}
                <div
                    className="relative overflow-hidden rounded-[2.5rem] border border-zinc-100 bg-zinc-50 min-h-[460px] flex shadow-sm"
                >
                    {/* Photo left side */}
                    <div className="relative w-1/2 hidden md:block overflow-hidden">
                        <img
                            src="/photos/iit-delhi-talk.jpg"
                            alt="Dr. Aroul Rosario speaking at IIT Delhi Technology Showcase"
                            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-50/90" />
                    </div>

                    {/* Text right side */}
                    <div className="flex-1 p-12 md:p-20 flex flex-col justify-center relative z-10">
                        {/* Mobile photo */}
                        <div className="md:hidden relative overflow-hidden rounded-3xl mb-10 h-64 grayscale">
                            <img
                                src="/photos/iit-delhi-talk.jpg"
                                alt="Dr. Aroul Rosario speaking at IIT Delhi Technology Showcase"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>

                        <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-[0.3em] mb-6 inline-flex items-center gap-4">
                            <span className="w-10 h-px bg-zinc-200 inline-block" />
                            Keynote · IIT Delhi · 2025
                        </span>
                        <h3 className="text-4xl md:text-6xl font-display font-medium text-zinc-950 tracking-tight leading-[0.9] mb-8">
                            EDC Technology<br />
                            <span className="text-zinc-300 italic">Showcase.</span>
                        </h3>
                        <p className="text-zinc-500 text-lg leading-relaxed max-w-md mb-10 font-light">
                            &quot;Reinventing STEM Education through Interactive Simulations &amp; Learner-Driven Pedagogies&quot;
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {["Simulations", "Cognitive Feedback", "Active Learning"].map(tag => (
                                <span key={tag} className="text-[10px] font-mono uppercase tracking-widest px-4 py-2 rounded-full border border-zinc-200 text-zinc-400">
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
