"use client";

import { cvData } from "@/data/cv";
import { FadeIn, StaggerContainer, StaggerItem, LineDraw } from "@/components/ui/motion-helpers";

export function Awards() {
    return (
        <section id="awards" className="py-32 relative bg-black border-b border-white/5">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <FadeIn>
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                        <h2 className="text-4xl md:text-5xl font-display font-medium text-white tracking-tight">
                            Awards<br />& Honours
                        </h2>
                        <p className="text-xs font-mono tracking-widest uppercase text-zinc-600">
                            06 // Recognition
                        </p>
                    </div>
                </FadeIn>

                <LineDraw className="mb-12" />

                <StaggerContainer className="flex flex-col">
                    {cvData.awards.map((award, index) => (
                        <StaggerItem key={index}>
                            <div className="group flex flex-col md:flex-row items-start gap-4 md:gap-12 py-8 border-b border-white/5 hover:border-white/30 transition-colors">
                                <span className="text-sm font-mono text-zinc-600 block md:mt-1">
                                    {(index + 1).toString().padStart(2, "0")}
                                </span>
                                <h3 className="text-xl md:text-2xl font-display font-medium text-zinc-300 group-hover:text-white transition-colors leading-tight">
                                    {award.title}
                                </h3>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
