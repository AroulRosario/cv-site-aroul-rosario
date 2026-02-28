"use client";

import { cvData } from "@/data/cv";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Publications() {
    return (
        <section id="publications" className="py-24 md:py-48 bg-white text-black blueprint-grid-light selection-light relative border-b border-black/10 overflow-hidden">

            {/* V4.3 Stabilized Background Number */}
            <div className="bg-number top-0 left-0 -translate-x-1/4 -translate-y-1/4 text-black/[0.01]">
                07
            </div>

            <div className="content-container">
                <div className="mb-20 md:mb-32">
                    <h2 className="text-[10px] font-mono tracking-[0.4em] uppercase text-zinc-500 mb-6">
                        Published // Research
                    </h2>
                    <h3 className="text-huge font-display font-bold uppercase text-black">
                        Library.
                    </h3>
                </div>

                <div className="space-y-24 md:space-y-48">
                    {/* Thesis Publications */}
                    <div>
                        <div className="flex items-center gap-4 mb-10 md:mb-16">
                            <div className="w-8 md:w-12 h-px bg-black" />
                            <h4 className="text-[10px] font-mono tracking-widest uppercase text-zinc-400">07.A // Thesis Collections</h4>
                        </div>

                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                            {cvData.thesisPublications.map((pub, index) => (
                                <StaggerItem key={index}>
                                    <div className="group border border-black/10 p-8 md:p-12 hover:bg-zinc-50 transition-all duration-500 flex flex-col justify-between h-full min-h-[280px] md:min-h-[350px]">
                                        <div className="flex justify-between items-start">
                                            <BrandLogo name={pub.org} size={48} />
                                            <span className="text-[9px] font-mono text-zinc-300">THESIS-V0{index + 1}</span>
                                        </div>
                                        <div>
                                            <h5 className="text-xl md:text-3xl font-display font-medium text-black mb-4 md:mb-6 tracking-tight leading-snug">
                                                &quot;{pub.title}&quot;
                                            </h5>
                                            <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">{pub.org}</p>
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Research Articles */}
                    <div>
                        <div className="flex items-center gap-4 mb-10 md:mb-16">
                            <div className="w-8 md:w-12 h-px bg-black" />
                            <h4 className="text-[10px] font-mono tracking-widest uppercase text-zinc-400">07.B // Peer-Reviewed Articles</h4>
                        </div>

                        <StaggerContainer className="grid grid-cols-1 gap-8 md:gap-12">
                            {cvData.researchArticles.map((article, index) => (
                                <StaggerItem key={index}>
                                    <div className="group flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-12 p-6 md:p-12 border-b border-black/5 hover:bg-zinc-50 transition-all duration-500 first:border-t">
                                        <div className="flex items-start md:items-center gap-6 md:gap-12">
                                            <div className="shrink-0">
                                                <BrandLogo name={article.org} size={40} />
                                            </div>
                                            <h5 className="text-lg md:text-2xl font-display font-medium text-black tracking-tight max-w-2xl leading-relaxed">
                                                &quot;{article.title}&quot;
                                            </h5>
                                        </div>
                                        <div className="flex flex-col md:items-end md:shrink-0">
                                            <span className="text-[10px] font-mono text-black uppercase tracking-widest font-bold mb-1 md:mb-2">Verified Journal</span>
                                            <p className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">{article.org}</p>
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
