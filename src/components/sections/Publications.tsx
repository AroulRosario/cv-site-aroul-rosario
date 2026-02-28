"use client";

import { cvData } from "@/data/cv";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";
import { BookOpen, FileText } from "lucide-react";

export function Publications() {
    return (
        <section id="publications" className="py-24 relative">
            <div className="max-w-5xl mx-auto px-6 md:px-12">

                {/* Thesis Publications */}
                <div className="mb-20">
                    <SlideUp>
                        <div className="flex items-center gap-4 mb-12">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                                <BookOpen className="w-6 h-6 text-blue-400" />
                            </div>
                            <h2 className="text-4xl font-display font-bold text-white">Thesis Publications <span className="text-slate-500 font-light text-2xl ml-2">Top 3</span></h2>
                        </div>
                    </SlideUp>

                    <StaggerContainer className="space-y-6">
                        {cvData.thesisPublications.map((pub, index) => (
                            <StaggerItem key={index}>
                                <div className="glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                                    <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                                        <div className="md:w-1/4 flex-shrink-0">
                                            <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-300 text-xs font-bold tracking-wider uppercase rounded-full border border-blue-500/20">
                                                {pub.org}
                                            </span>
                                        </div>
                                        <div className="md:w-3/4">
                                            <h3 className="text-lg md:text-xl font-medium text-slate-200 leading-relaxed italic">
                                                &quot;{pub.title}&quot;
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                {/* Research Articles */}
                <div>
                    <SlideUp>
                        <div className="flex items-center gap-4 mb-12">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                                <FileText className="w-6 h-6 text-purple-400" />
                            </div>
                            <h2 className="text-4xl font-display font-bold text-white">Published Research Articles <span className="text-slate-500 font-light text-2xl ml-2">Top 3</span></h2>
                        </div>
                    </SlideUp>

                    <StaggerContainer className="space-y-6">
                        {cvData.researchArticles.map((article, index) => (
                            <StaggerItem key={index}>
                                <div className="glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                                    <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                                        <div className="md:w-1/4 flex-shrink-0">
                                            <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-300 text-xs font-bold tracking-wider uppercase rounded-full border border-purple-500/20">
                                                {article.org}
                                            </span>
                                        </div>
                                        <div className="md:w-3/4">
                                            <h3 className="text-lg md:text-xl font-medium text-slate-200 leading-relaxed italic">
                                                &quot;{article.title}&quot;
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

            </div>
        </section>
    );
}
