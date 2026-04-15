"use client";

import { cvData } from "@/data/cv";
import { ExternalLink, Newspaper } from "lucide-react";

export function Press() {
    return (
        <section id="press" className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-rose-50/30 via-transparent to-transparent pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                {/* Header */}
                <div className="mb-20">
                    <span className="inline-flex items-center gap-2 text-rose-600 font-mono text-xs tracking-widest uppercase mb-6 bg-rose-50 px-4 py-2 rounded-full border border-rose-100">
                        <Newspaper className="w-3.5 h-3.5" />
                        Press & Media
                    </span>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 tracking-tighter leading-[0.9] mt-4 mb-14">
                        Featured<br />
                        <span className="gradient-text-warm">Nationwide.</span>
                    </h2>
                    {/* Stats row */}
                    <div className="flex flex-wrap gap-12 md:gap-20 border-t border-slate-100 pt-10">
                        <div>
                            <p className="text-5xl md:text-6xl font-display font-bold text-rose-500 leading-none">{cvData.press.totalOutlets}</p>
                            <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mt-3">Media Outlets</p>
                        </div>
                        <div>
                            <p className="text-5xl md:text-6xl font-display font-bold text-violet-500 leading-none">{cvData.press.totalReach}</p>
                            <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mt-3">Combined Reach</p>
                        </div>
                    </div>
                </div>

                {/* Featured press cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {cvData.press.featured.map((p, i) => (
                        <a
                            key={i}
                            href={p.url}
                            target={p.url !== "#" ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="group bg-white border border-slate-100 p-12 flex flex-col gap-10 rounded-[2.5rem] hover:border-rose-200 hover:shadow-2xl hover:shadow-rose-100/30 transition-all duration-700 relative overflow-hidden hover:-translate-y-1"
                        >
                            <div className="flex items-start justify-between">
                                <div className="w-16 h-16 rounded-2xl bg-rose-50 flex items-center justify-center group-hover:bg-rose-500 transition-all duration-500">
                                    <Newspaper size={28} className="text-rose-400 group-hover:text-white transition-colors duration-500" />
                                </div>
                                <ExternalLink size={20} className="text-slate-300 group-hover:text-rose-500 transition-colors duration-500" />
                            </div>

                            <div>
                                <h3 className="text-3xl font-display font-bold text-slate-900 mb-4 tracking-tight leading-tight">{p.outlet}</h3>
                                <p className="text-slate-500 leading-relaxed text-lg">{p.desc}</p>
                            </div>

                            <div className="mt-auto">
                                <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-[0.3em] border border-slate-100 rounded-full px-6 py-3 group-hover:text-slate-900 group-hover:border-slate-900 transition-all duration-500">
                                    {p.audience}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Media Index - Static Elite Grid */}
                <div className="py-24 border-t border-slate-100">
                    <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-[0.5em] mb-4">Media Coverage Index</h3>
                            <p className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tighter">Full Publication Access</p>
                        </div>
                        <span className="text-xs font-mono text-slate-400 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 uppercase tracking-widest">Digital Footprint: {OUTLETS.length} Outlets</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-x-10">
                        {OUTLETS.map((o, i) => (
                            <div key={i} className="flex items-center gap-4 group cursor-default">
                                <span className="w-2 h-2 rounded-full bg-slate-100 group-hover:bg-rose-500 transition-all duration-500 shadow-sm" />
                                <span className="text-[11px] font-mono font-bold text-slate-400 group-hover:text-slate-900 transition-colors uppercase tracking-[0.1em] truncate">
                                    {o}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
