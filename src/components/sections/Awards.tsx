"use client";

import { cvData } from "@/data/cv";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";

export function Awards() {
    return (
        <section id="awards" className="py-48 bg-white text-black blueprint-grid-light selection-light relative border-b border-black/10">

            {/* Background Index */}
            <div className="absolute top-10 left-10 text-black/[0.02] font-display font-bold text-[20vw] leading-none pointer-events-none select-none">
                05
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
                    <div>
                        <h2 className="text-xs font-mono tracking-[0.4em] uppercase text-zinc-500 mb-8">
                            Recognition // Laurels
                        </h2>
                        <h3 className="text-huge font-display font-bold uppercase text-black -ml-1">
                            Awards.
                        </h3>
                    </div>
                    <div className="max-w-xs">
                        <p className="text-sm font-mono text-zinc-400 uppercase tracking-widest leading-loose">
                            Distinctions achieved during international academic tenure.
                        </p>
                    </div>
                </div>

                <StaggerContainer className="flex flex-col">
                    {cvData.awards.map((award, index) => (
                        <StaggerItem key={index} className="group border-b border-black/10 py-12 flex flex-col md:flex-row md:items-center justify-between gap-8 first:border-t hover:bg-zinc-50 transition-colors duration-500 px-4">
                            <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
                                <span className="text-xs font-mono text-zinc-400">0{index + 1}</span>
                                <div>
                                    <h4 className="text-2xl md:text-4xl font-display font-medium text-black mb-2 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                                        {award.title}
                                    </h4>
                                    <p className="text-sm font-mono text-zinc-400 uppercase tracking-widest">
                                        HONOUR // MERIT
                                    </p>
                                </div>
                            </div>
                            <div className="hidden md:block text-right">
                                <span className="text-xs font-mono text-zinc-300 group-hover:text-black transition-colors uppercase tracking-[0.5em]">Global Merit</span>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
