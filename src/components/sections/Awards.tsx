"use client";

import { cvData } from "@/data/cv";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";
import { Trophy } from "lucide-react";

export function Awards() {
    return (
        <section id="awards" className="py-24 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-amber-500/5 rounded-[100%] blur-[100px] pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
                <SlideUp>
                    <div className="flex items-center gap-4 mb-16">
                        <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center border border-amber-500/30">
                            <Trophy className="w-6 h-6 text-amber-400" />
                        </div>
                        <h2 className="text-4xl font-display font-bold text-white">Awards & Honours</h2>
                    </div>
                </SlideUp>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cvData.awards.map((award, index) => (
                        <StaggerItem key={index}>
                            <div className="group relative glass rounded-2xl p-6 md:p-8 border border-white/10 hover:border-amber-500/30 transition-all duration-300 overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Trophy className="w-24 h-24 text-amber-400 -rotate-12 translate-x-4 -translate-y-4" />
                                </div>

                                <div className="relative z-10 flex items-start gap-4">
                                    <div className="mt-1 w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                                        {award.title}
                                    </h3>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
