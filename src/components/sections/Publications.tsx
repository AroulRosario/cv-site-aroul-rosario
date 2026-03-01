"use client";

import { cvData } from "@/data/cv";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";
import { BookOpen, ExternalLink, ScrollText } from "lucide-react";

export function Publications() {
    return (
        <div className="max-w-7xl mx-auto py-8">
            <div className="space-y-32">

                {/* Published Monographs */}
                <div className="space-y-16">
                    <FadeIn>
                        <h3 className="text-5xl font-display font-bold text-white mb-4 flex items-center gap-6">
                            <BookOpen className="w-10 h-10 text-zinc-600" />
                            Published Works.
                        </h3>
                        <p className="text-zinc-500 text-lg font-light max-w-2xl">
                            Authored several fundamental texts and series aimed at simplifying complex scientific abstractions through visual and ontological scaffolding.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {cvData.books.map((book, i) => (
                            <div key={i} className="group p-8 border border-white/5 bg-zinc-950 hover:bg-zinc-900 hover:border-white/20 transition-all rounded-2xl relative overflow-hidden">
                                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block mb-4">{book.category}</span>
                                <h4 className="text-3xl font-display font-bold text-white mb-8 group-hover:text-zinc-200 transition-colors">{book.title}</h4>
                                <div className="p-2 w-fit bg-zinc-900 border border-white/10 rounded-lg group-hover:bg-white group-hover:text-black transition-all">
                                    <ExternalLink className="w-4 h-4" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Research Discourse */}
                <div className="space-y-16">
                    <FadeIn>
                        <h3 className="text-5xl font-display font-bold text-white mb-4 flex items-center gap-6">
                            <ScrollText className="w-10 h-10 text-zinc-600" />
                            Thesis & Archives.
                        </h3>
                        <p className="text-zinc-500 text-lg font-light max-w-2xl">
                            Formal research exploring the synthesis of computational mechanics and chemical pedagogy, hosted across global research repositories.
                        </p>
                    </FadeIn>

                    <StaggerContainer className="space-y-12">
                        {cvData.thesisPublications.map((pub, i) => (
                            <StaggerItem key={i}>
                                <div className="group grid grid-cols-1 lg:grid-cols-12 gap-12 p-10 border border-white/5 rounded-3xl hover:bg-white/[0.01] transition-all">
                                    <div className="lg:col-span-4">
                                        <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-4">Repository // {pub.org}</p>
                                        <h4 className="text-2xl font-display font-bold text-white leading-tight group-hover:text-zinc-200 transition-colors">
                                            {pub.title}
                                        </h4>
                                    </div>
                                    <div className="lg:col-span-8 flex flex-col justify-between">
                                        <p className="text-zinc-400 font-light text-lg leading-relaxed italic">
                                            "{pub.abstract || "The abstract for this research is currently being indexed for the digital archive. It explores the core methodologies and outcomes of the study in detail."}"
                                        </p>
                                        <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6">
                                            <span className="text-[10px] font-mono text-zinc-700 uppercase">Status // peer-reviewed</span>
                                            <button className="text-[10px] font-mono text-white flex items-center gap-2 hover:underline">
                                                READ FULL TEXT <ExternalLink className="w-3 h-3" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

            </div>
        </div>
    );
}

export function Patents() {
    return (
        <div className="max-w-7xl mx-auto pb-12">
            <FadeIn>
                <div className="p-12 border border-white/5 bg-zinc-950/50 rounded-3xl">
                    <h3 className="text-3xl font-display font-bold text-white mb-12 flex items-center gap-4 uppercase tracking-tighter">
                        Intellectual Property.
                    </h3>
                    <div className="space-y-8">
                        {cvData.patents.map((patent, i) => (
                            <div key={i} className="group flex flex-col md:flex-row md:items-center justify-between gap-6 py-8 border-b border-white/5 last:border-0">
                                <div className="max-w-2xl">
                                    <h4 className="text-xl font-medium text-white group-hover:text-zinc-300 transition-colors mb-2 italic">"{patent.title}"</h4>
                                    <p className="text-zinc-500 text-sm font-light leading-relaxed">{patent.detail}</p>
                                </div>
                                <div className="px-4 py-2 bg-zinc-900 border border-white/10 rounded-full text-[10px] font-mono text-zinc-500 uppercase tracking-widest group-hover:border-white/30 group-hover:text-white transition-all whitespace-nowrap">
                                    Patent Registered
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}
