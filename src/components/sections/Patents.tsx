"use client";

import { cvData } from "@/data/cv";
import { FadeIn, RevealText, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";

export function Patents() {
    return (
        <section id="patents" className="py-32 bg-white relative border-y border-zinc-100">
            <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">

                <FadeIn>
                    <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-400 mb-8">
                        09 // Intellectual Property
                    </h2>
                    <h3 className="text-5xl md:text-7xl font-display font-medium text-zinc-950 mb-6 tracking-tighter">
                        Provisional Patents
                    </h3>
                    <p className="text-xs font-mono tracking-[0.3em] text-zinc-300 uppercase mb-24">
                        Indian Patent Office
                    </p>
                </FadeIn>

                <StaggerContainer className="flex flex-col gap-10 max-w-4xl mx-auto text-left">
                    {cvData.patents.map((patent, index) => (
                        <StaggerItem key={index}>
                            <div className="relative pl-10 md:pl-16 border-l border-zinc-100 group hover:border-zinc-950 transition-all duration-500">
                                <div className="absolute left-[-4px] top-3 w-2 h-2 rounded-full bg-zinc-100 group-hover:bg-zinc-950 transition-colors duration-500" />
                                <h4 className="text-xl md:text-4xl font-display font-medium text-zinc-100 group-hover:text-zinc-950 transition-all duration-700 leading-tight">
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
