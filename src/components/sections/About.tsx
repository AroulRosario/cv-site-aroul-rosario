"use client";

import { cvData } from "@/data/cv";
import { SlideUp, FadeIn } from "@/components/ui/motion-helpers";

export function About() {
    const statementParts = cvData.personalInfo.tagline.split('. ');

    return (
        <section id="about" className="py-48 relative bg-white text-black blueprint-grid-light selection-light overflow-hidden">

            {/* Background Section Number */}
            <div className="absolute top-10 left-10 text-black/[0.03] font-display font-bold text-[30vw] leading-none pointer-events-none select-none">
                02
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">

                    <div className="md:col-span-4 flex flex-col">
                        <FadeIn>
                            <div className="flex items-center gap-4 mb-12">
                                <div className="w-12 h-px bg-black" />
                                <h2 className="text-xs font-mono tracking-[0.3em] uppercase text-zinc-500">
                                    Persona Overview
                                </h2>
                            </div>

                            <div className="aspect-[3/4] bg-zinc-100 border border-black/5 relative overflow-hidden group">
                                <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                                    <span className="text-xs font-mono text-zinc-300 group-hover:text-zinc-500 transition-colors uppercase">Data point unavailable // Placeholder for Visual</span>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="md:col-span-8 flex flex-col justify-center">
                        <SlideUp>
                            <div className="space-y-12 text-3xl md:text-5xl lg:text-6xl font-display font-medium leading-[1.05] tracking-tight text-black mb-24">
                                <p>
                                    {statementParts[0] ? statementParts[0] + "." : ""}
                                </p>
                                <p className="text-zinc-400">
                                    {statementParts[1] ? statementParts[1].replace(".", "") + "." : ""}
                                </p>
                            </div>
                        </SlideUp>

                        <FadeIn delay={0.3}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-black/10">
                                <div className="flex flex-col space-y-4">
                                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Active Focus</span>
                                    <span className="text-lg font-medium text-black uppercase tracking-tight">Chemistry / Pedagogy</span>
                                </div>
                                <div className="flex flex-col space-y-4">
                                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Collaborative Status</span>
                                    <span className="text-lg font-medium text-black uppercase tracking-tight">Available for Research</span>
                                </div>
                                <div className="flex flex-col space-y-4">
                                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Origin Link</span>
                                    <span className="text-lg font-medium text-black hover:text-zinc-500 transition-colors">
                                        <a href={`https://${cvData.personalInfo.website}`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-8 decoration-1 decoration-black/20">Digital HQ</a>
                                    </span>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
}
