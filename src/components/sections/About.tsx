"use client";

import { cvData } from "@/data/cv";
import { SlideUp, FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";
import { Beaker, Globe, Mail, Activity, Cpu, Award } from "lucide-react";

export function About() {
    const tagline = cvData.personalInfo.tagline;

    return (
        <section id="about" className="py-32 relative bg-black noise-bg">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <div className="mb-20">
                    <FadeIn>
                        <p className="text-xs font-mono tracking-widest uppercase text-zinc-600 mb-4">
                            02 // Mission & Background
                        </p>
                        <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter">
                            Bridging Core Science <br />with Digital Frontiers.
                        </h2>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* Main Statement Tile */}
                    <div className="md:col-span-8 glass-card p-10 md:p-14 flex flex-col justify-center">
                        <SlideUp>
                            <p className="text-2xl md:text-4xl font-light leading-snug tracking-tight text-white">
                                {tagline}
                            </p>
                            <div className="mt-12 h-px w-full bg-gradient-to-r from-white/20 to-transparent" />
                            <div className="mt-8 flex gap-8">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-1">Impact Radius</span>
                                    <span className="text-white font-medium">Global</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-1">Focus</span>
                                    <span className="text-white font-medium">Cognitive STEM</span>
                                </div>
                            </div>
                        </SlideUp>
                    </div>

                    {/* Stats Grid */}
                    <div className="md:col-span-4 grid grid-cols-1 gap-6">
                        <div className="glass-card p-8 flex flex-col justify-between group">
                            <Cpu className="w-8 h-8 text-zinc-700 group-hover:text-white transition-colors" />
                            <div>
                                <span className="text-4xl font-display font-bold text-white block">10k+</span>
                                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Digital Learning Nodes</span>
                            </div>
                        </div>
                        <div className="glass-card p-8 flex flex-col justify-between group">
                            <Beaker className="w-8 h-8 text-zinc-700 group-hover:text-white transition-colors" />
                            <div>
                                <span className="text-4xl font-display font-bold text-white block">3rd</span>
                                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Generation Pedagogy</span>
                            </div>
                        </div>
                    </div>

                    {/* Infrastructure Tile */}
                    <div className="md:col-span-12 lg:col-span-4 glass-card p-8 group overflow-hidden">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                <Activity className="w-5 h-5 text-white/40" />
                            </div>
                            <span className="text-xs font-mono text-white/60 uppercase tracking-widest">System Status</span>
                        </div>
                        <div className="space-y-4">
                            {[
                                { l: "Network State", v: "Optimized" },
                                { l: "Research Phase", v: "Execution" },
                                { l: "Infrastructure", v: "Azure/Hybrid" }
                            ].map((s, i) => (
                                <div key={i} className="flex justify-between items-center py-2 border-b border-white/5">
                                    <span className="text-xs text-zinc-500">{s.l}</span>
                                    <span className="text-xs font-mono text-white">{s.v}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Connectivity Tile */}
                    <div className="md:col-span-12 lg:col-span-8 px-10 py-12 glass-card flex flex-col md:flex-row items-center justify-between gap-12 bg-white/[0.01]">
                        <div className="max-w-md">
                            <h4 className="text-2xl font-display font-bold text-white mb-2">Connect to the Hive.</h4>
                            <p className="text-zinc-500 text-sm">Direct encrypted communication for institutional collaboration and research inquiries.</p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <a href={`mailto:${cvData.personalInfo.email}`} className="flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors">
                                <Mail className="w-4 h-4" />
                                <span>Dispatch Email</span>
                            </a>
                            <a href={`https://${cvData.personalInfo.website}`} target="_blank" className="flex items-center gap-3 px-6 py-3 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors">
                                <Globe className="w-4 h-4" />
                                <span>Open Portal</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
