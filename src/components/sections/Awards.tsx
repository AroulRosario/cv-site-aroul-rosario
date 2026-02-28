"use client";

import { cvData } from "@/data/cv";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";

export function Awards() {
    return (
        <section id="awards" className="py-24 md:py-48 bg-white text-black blueprint-grid-light selection-light relative border-b border-black/10 overflow-hidden">

            {/* V4.3 Stabilized Background Number */}
            <div className="bg-number top-0 left-0 -translate-x-1/4 -translate-y-1/4 text-black/[0.01]">
                05
            </div>

            <div className="content-container">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-32 gap-10">
                    <div>
                        <h2 className="text-[10px] font-mono tracking-[0.4em] uppercase text-zinc-500 mb-6">
                            Recognition // Laurels
                        </h2>
                        <h3 className="text-huge font-display font-bold uppercase text-black">
                            Awards.
                        </h3>
                    </div>
                    <div className="max-w-[280px]">
                        <p className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest leading-loose">
                            Distinctions achieved during international academic tenure.
                        </p>
                    </div>
                </div>

                <StaggerContainer className="flex flex-col">
                    {cvData.awards.map((award, index) => (
                        <StaggerItem key={index} className="group border-b border-black/10 py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6 first:border-t hover:bg-zinc-50 transition-colors duration-500 px-4">
                            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16">
                                <span className="text-[10px] font-mono text-zinc-400">0{index + 1}</span>
                                <div>
                                    <h4 className="text-xl md:text-4xl font-display font-medium text-black mb-1 md:mb-2 tracking-tight group-hover:translate-x-2 transition-transform duration-500 leading-tight">
                                        {award.title}
                                    </h4>
                                    <p className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">
                                        HONOUR // MERIT
                                    </p>
                                </div>
                            </div>
                            <div className="hidden md:block text-right">
                                <span className="text-[9px] font-mono text-zinc-300 group-hover:text-black transition-colors uppercase tracking-[0.5em]">Global Merit</span>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
