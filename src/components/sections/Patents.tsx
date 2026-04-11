"use client";

import { cvData } from "@/data/cv";
import { FadeIn, RevealText, StaggerContainer, StaggerItem } from "@/components/ui/motion-helpers";

export function Patents() {
    return (
        <section id="patents" className="py-32 bg-white relative border-y border-slate-100">
            <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">

                <FadeIn>
                    <h2 className="text-xs font-mono tracking-widest uppercase text-indigo-500 mb-8">
                        09 // Intellectual Property
                    </h2>
                    <h3 className="text-5xl md:text-7xl font-display font-medium text-slate-900 mb-6 tracking-tighter">
                        Provisional Patents
                    </h3>
                    <p className="text-xs font-mono tracking-[0.3em] text-slate-400 uppercase mb-24">
                        Indian Patent Office
                    </p>
                </FadeIn>

                <StaggerContainer className="flex flex-col gap-10 max-w-4xl mx-auto text-left">
                    {cvData.patents.map((patent, index) => (
                        <StaggerItem key={index}>
                            <div className="relative pl-10 md:pl-16 border-l-2 border-indigo-100 group hover:border-indigo-500 transition-all duration-500">
                                <div className="absolute left-[-5px] top-3 w-2.5 h-2.5 rounded-full bg-indigo-100 group-hover:bg-indigo-500 transition-colors duration-500" />
                                <h4 className="text-xl md:text-3xl font-display font-medium text-slate-500 group-hover:text-slate-900 transition-all duration-500 leading-tight">
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
