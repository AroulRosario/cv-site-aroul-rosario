"use client";

import { cvData } from "@/data/cv";
import { FadeIn, RevealText, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";

export function Publications() {
    return (
        <section id="publications" className="py-32 relative bg-zinc-950">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Thesis Publications */}
                <div className="mb-32">
                    <FadeIn>
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-white/10 pb-8">
                            <h2 className="text-4xl md:text-5xl font-display font-medium text-white tracking-tight flex items-center gap-4">
                                Thesis<br />Publications
                                <span className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-zinc-700 bg-zinc-900 text-xs text-zinc-400 font-mono translate-y-2">
                                    Top 3
                                </span>
                            </h2>
                            <p className="text-xs font-mono tracking-widest uppercase text-zinc-600">
                                07 // Thesis
                            </p>
                        </div>
                    </FadeIn>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 text-zinc-500 hover:text-white transition-colors">
                        {cvData.thesisPublications.map((pub, index) => (
                            <StaggerItem key={index}>
                                <div className="group flex flex-col justify-between h-full p-8 border border-white/5 bg-black hover:bg-white/5 hover:border-white/20 transition-all duration-500 text-zinc-500">
                                    <div className="mb-8">
                                        <span className="text-xs font-mono uppercase tracking-widest text-zinc-600 group-hover:text-zinc-400 transition-colors">
                                            {pub.org}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-medium text-zinc-300 group-hover:text-white transition-colors leading-relaxed">
                                        &quot;{pub.title}&quot;
                                    </h3>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                {/* Research Articles */}
                <div>
                    <FadeIn>
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-white/10 pb-8">
                            <h2 className="text-4xl md:text-5xl font-display font-medium text-white tracking-tight flex items-center gap-4">
                                Research<br />Articles
                                <span className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-zinc-700 bg-zinc-900 text-xs text-zinc-400 font-mono translate-y-2">
                                    Top 3
                                </span>
                            </h2>
                            <p className="text-xs font-mono tracking-widest uppercase text-zinc-600">
                                08 // Research
                            </p>
                        </div>
                    </FadeIn>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {cvData.researchArticles.map((article, index) => (
                            <StaggerItem key={index}>
                                <div className="group flex flex-col justify-between h-full p-8 border border-white/5 bg-black hover:bg-white/5 hover:border-white/20 transition-all duration-500">
                                    <div className="mb-8">
                                        <span className="text-xs font-mono uppercase tracking-widest text-zinc-600 group-hover:text-zinc-400 transition-colors">
                                            {article.org}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-medium text-zinc-300 group-hover:text-white transition-colors leading-relaxed">
                                        &quot;{article.title}&quot;
                                    </h3>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

            </div>
        </section>
    );
}
