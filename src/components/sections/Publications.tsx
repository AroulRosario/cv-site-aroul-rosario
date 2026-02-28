"use client";

import { cvData } from "@/data/cv";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { BookMarked, FileText } from "lucide-react";

export function Publications() {
    return (
        <section id="publications" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">

            <div className="quantum-container">
                <div className="mb-20">
                    <h2 className="text-emerald-500 mb-6 font-mono text-xs tracking-[0.3em]">05 // RESEARCH LIBRARY</h2>
                    <h3 className="text-huge title-glow">Library.</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">

                    {/* Thesis Section */}
                    <div className="lg:col-span-12">
                        <div className="inline-flex items-center gap-3 mb-12 px-4 py-2 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                            <BookMarked className="w-4 h-4 text-emerald-500" />
                            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Thesis Collections</span>
                        </div>

                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {cvData.thesisPublications.map((pub, index) => (
                                <StaggerItem key={index}>
                                    <div className="glass-card group p-10 flex flex-col justify-between min-h-[320px] relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full" />
                                        <div className="flex justify-between items-start relative z-10">
                                            <BrandLogo name={pub.org} size={56} />
                                            <span className="text-[10px] font-mono text-zinc-600 group-hover:text-emerald-500 transition-colors tracking-widest">THESIS-V0{index + 1}</span>
                                        </div>
                                        <div className="relative z-10">
                                            <h4 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 leading-snug tracking-tighter group-hover:text-emerald-500 transition-colors duration-500">
                                                &quot;{pub.title}&quot;
                                            </h4>
                                            <div className="flex items-center gap-4">
                                                <div className="w-8 h-px bg-emerald-500/40" />
                                                <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{pub.org}</p>
                                            </div>
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Research Articles */}
                    <div className="lg:col-span-12 mt-12">
                        <div className="inline-flex items-center gap-3 mb-12 px-4 py-2 rounded-lg bg-cyan-500/5 border border-cyan-500/10">
                            <FileText className="w-4 h-4 text-cyan-500" />
                            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Peer-Reviewed Articles</span>
                        </div>

                        <StaggerContainer className="grid grid-cols-1 gap-6">
                            {cvData.researchArticles.map((article, index) => (
                                <StaggerItem key={index}>
                                    <div className="glass-card group p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:shadow-[0_0_40px_rgba(6,182,212,0.1)] hover:border-cyan-500/20">
                                        <div className="flex items-start md:items-center gap-8">
                                            <BrandLogo name={article.org} size={48} />
                                            <h5 className="text-lg md:text-2xl font-display font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors duration-500 max-w-3xl leading-relaxed">
                                                &quot;{article.title}&quot;
                                            </h5>
                                        </div>
                                        <div className="md:text-right shrink-0">
                                            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em] mb-1">{article.org}</p>
                                            <span className="text-[9px] font-mono text-cyan-500/50 uppercase tracking-widest">Verified Log</span>
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                </div>
            </div>
        </section>
    );
}
