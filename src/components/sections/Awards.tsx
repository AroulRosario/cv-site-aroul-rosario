"use client";

import { useState } from "react";
import { cvData } from "@/data/cv";
import { FadeIn, StaggerContainer, StaggerItem, LineDraw } from "@/components/ui/motion-helpers";
import { DeepDive } from "@/components/ui/DeepDive";
import { Award, ChevronRight } from "lucide-react";

export function Awards() {
    const [activeDive, setActiveDive] = useState<number | null>(null);

    return (
        <section id="awards" className="py-32 relative bg-black border-y border-white/5 noise-bg">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <FadeIn>
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                        <h2 className="text-4xl md:text-5xl font-display font-medium text-white tracking-tight">
                            Honours<br />& Recognition.
                        </h2>
                        <p className="text-xs font-mono tracking-widest uppercase text-zinc-600">
                            06 // Accolades
                        </p>
                    </div>
                </FadeIn>

                <LineDraw className="mb-12" />

                <StaggerContainer className="flex flex-col space-y-4">
                    {cvData.awards.map((award, index) => (
                        <StaggerItem key={index}>
                            <div
                                onClick={() => award.deepDive ? setActiveDive(index) : null}
                                className={`group flex flex-col md:flex-row items-center justify-between p-8 glass-card border-white/5 ${award.deepDive ? 'cursor-pointer hover:border-white/20' : 'cursor-default'}`}
                            >
                                <div className="flex items-center gap-8 w-full">
                                    <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:border-white/20 transition-colors">
                                        <Award className="w-6 h-6 text-zinc-500 group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl font-display font-medium text-white transition-colors leading-tight">
                                            {award.title}
                                        </h3>
                                        <p className="text-sm text-zinc-500 mt-1">{award.description}</p>
                                    </div>
                                </div>

                                {award.deepDive && (
                                    <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest group-hover:text-white transition-colors">
                                        Exploration // Deep Dive <ChevronRight className="w-3 h-3" />
                                    </div>
                                )}

                                <DeepDive
                                    isOpen={activeDive === index}
                                    onClose={() => setActiveDive(null)}
                                    title={award.title}
                                    content={award.deepDive || award.description}
                                    org="National Recognition"
                                />
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
