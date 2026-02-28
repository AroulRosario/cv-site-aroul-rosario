"use client";

import { cvData } from "@/data/cv";
import { FadeIn, StaggerContainer, StaggerItem, RevealText } from "@/components/ui/motion-helpers";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Initiatives() {
    return (
        <section id="initiatives" className="py-32 bg-black relative overflow-hidden">
            {/* Abstract Background Element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-900/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                <div className="mb-20">
                    <FadeIn>
                        <p className="text-xs font-mono tracking-widest uppercase text-zinc-600 mb-4">
                            03 // Key Initiatives
                        </p>
                        <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter mb-6">
                            Strategic<br />Impact.
                        </h2>
                    </FadeIn>
                </div>

                <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {cvData.initiatives.map((item, index) => (
                        <StaggerItem key={index}>
                            <div className="group relative p-10 border border-white/5 bg-zinc-950/50 hover:bg-zinc-900/50 hover:border-white/20 transition-all duration-700 rounded-2xl overflow-hidden">
                                <div className="flex items-start gap-8">
                                    <div className="p-4 bg-zinc-900 rounded-xl border border-white/5 group-hover:border-white/20 transition-colors">
                                        <BrandLogo name={item.title} size={64} />
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">
                                            {item.role}
                                        </span>
                                        <h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-zinc-200 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-zinc-400 font-light leading-relaxed text-lg">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Decorative index */}
                                <span className="absolute bottom-6 right-10 text-8xl font-display font-black text-white/[0.02] group-hover:text-white/[0.05] transition-colors pointer-events-none">
                                    0{index + 1}
                                </span>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
