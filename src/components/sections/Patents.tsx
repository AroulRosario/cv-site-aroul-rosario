"use client";

import { cvData } from "@/data/cv";
import { FadeIn, RevealText, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";

export function Patents() {
    return (
        <section id="patents" className="py-32 bg-black relative border-y border-white/5">
            <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">

                <FadeIn>
                    <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-600 mb-6">
                        09 // Intellectual Property
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
                        Provisional Patents
                    </h3>
                    <p className="text-sm font-mono tracking-widest text-zinc-500 uppercase mb-20">
                        India
                    </p>
                </FadeIn>

                <StaggerContainer className="flex flex-col gap-12 max-w-3xl mx-auto text-left">
                    {cvData.patents.map((patent, index) => (
                        <StaggerItem key={index}>
                            <div className="relative pl-8 md:pl-12 border-l border-white/20 group hover:border-white transition-colors">
                                <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-white transition-colors" />
                                <h4 className="text-xl md:text-3xl font-light text-zinc-300 group-hover:text-white transition-colors leading-relaxed">
                                    {patent}
                                </h4>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

            </div>
        </section>
    );
}
