"use client";

import { cvData } from "@/data/cv";
import { SlideUp, StaggerContainer, StaggerItem, FadeIn } from "@/components/ui/motion-helpers";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Education() {
    return (
        <section id="academics" className="py-32 bg-black relative">
            <div className="max-w-5xl mx-auto px-6 md:px-12 border-l border-white/10 pl-6 md:pl-12">

                <FadeIn>
                    <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-600 mb-16 relative">
                        <span className="absolute -left-[31px] md:-left-[55px] top-1/2 -translate-y-1/2 w-4 h-px bg-zinc-600" />
                        03 // Academics & Fellowships
                    </h2>
                </FadeIn>

                <StaggerContainer className="flex flex-col gap-8">
                    {cvData.fellowshipsAndSocieties.map((item, index) => (
                        <StaggerItem key={index}>
                            <div className="group flex flex-col md:flex-row md:items-center justify-between gap-6 py-8 border-b border-white/5 hover:border-white/20 transition-colors">

                                <div className="flex items-center gap-6">
                                    <BrandLogo name={item.org} />
                                    <div>
                                        <h3 className="text-2xl font-display font-medium text-white mb-2">{item.title}</h3>
                                        <p className="text-zinc-500 tracking-wide text-sm uppercase font-mono">{item.org}</p>
                                    </div>
                                </div>

                                {item.acronym && (
                                    <div className="md:text-right">
                                        <span className="inline-block px-4 py-1.5 border border-white/10 rounded-full text-xs font-mono text-zinc-400 group-hover:border-zinc-400 transition-colors">
                                            {item.acronym}
                                        </span>
                                    </div>
                                )}

                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

            </div>
        </section>
    );
}
